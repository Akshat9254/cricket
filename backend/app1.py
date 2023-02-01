import sqlite3
from flask import Flask
import pandas as pd

app=Flask(__name__)
db = sqlite3.connect('cricket.db',check_same_thread=False)
# db.close()


@app.route("/")
def home():
    return "hello"

#****************************adding data to tables***********************************

###################creating amtch summary #######################
@app.route("/createtablematch")
def create():
    cur=db.cursor()
    cur.execute('''create table match_summary(team1 varchar(20),team2 varchar(20),winner varchar(20),margin varchar(12),ground varchar(15),match_date varchar(20),match_id varchar(20));''')
    db.commit()
    cur.close()
    return "table created"
# @app.route("/addmatch")
def addmatch():
    data=pd.read_csv("/Users/akshatp/Documents/cricket/t20_csv_files/dim_match_summary.csv")
    cur=db.cursor()
    for j in range(45):
        l=[]
        for i in data.iloc[j]:
            l.append(i)
        cur.execute(f'''insert into match_summary values('{l[0]}','{l[1]}','{l[2]}','{l[3]}','{l[4]}','{l[5]}','{l[6]}');''')
    db.commit()
    cur.close()
    return "success"
@app.route("/showmatch")
def showmatch():
    cur=db.cursor()
    cur.execute("select * from match_summary")
    d=cur.fetchall()
    res=[]
    for i in d:
        di={'team1':i[0],'team2':i[1],'winner':i[2],'margin':i[3],'ground':i[4],'match_date':i[5],'match_id':i[6]}
        res.append(di)
    cur.close()
    return res

################################ creating player table #############################
@app.route("/dropplayers")
def drop():
    cur=db.cursor()
    cur.execute("drop table players")
    cur.close()
    return "players deleted"

@app.route("/createtableplayers")
def create1():
    cur=db.cursor()
    cur.execute('''create table players(name varchar(100) primary key,team varchar(100),image varchar(2000),battingstyle varchar(200),bowlingstyle varchar(200),playingrole varchar(200),description varchar(2000));''')
    db.commit()
    cur.close()
    return "table player created"
# @app.route("/addplayers")
def addplayers():
    data=pd.read_csv("/Users/akshatp/Documents/cricket/t20_csv_files/dim_players.csv")
    cur=db.cursor()
    for j in range(219):
        l=[]
        for i in data.iloc[j]:
            l.append(i)
        try:
            cur.execute(f'''insert into players values(?,?,?,?,?,?,?);''',l)
        except:
            continue
    db.commit()
    cur.close()
    return "success"
@app.route("/showplayers")
def showplayers():
    cur=db.cursor()
    cur.execute("select * from players")
    d=cur.fetchall()
    # print(len(d))
    cur.close()
    return d
############################### 

@app.route("/dropbatsman")
def dropbatsman():
    cur=db.cursor()
    cur.execute("drop table batting_summary")
    cur.close()
    return "batting_summary deleted"

@app.route("/createtablebatting")
def create2():
    cur=db.cursor()
    cur.execute("create table batting_summary(match varchar(100),team varchar(100),batting_pos varchar(20),batsman varchar(200) references players(name),runs int,balls int,fours int,sixes int,strikerate real,out int,match_id vatchar(20));")
    db.commit()
    cur.close()
    return "table batting created"
# @app.route("/addbatsman")
def addbatsman():
    data=pd.read_csv("/Users/akshatp/Documents/cricket/t20_csv_files/fact_bating_summary.csv")
    for j in range(699):
        l=[]
        for i in data.iloc[j]:
            l.append(i)
        if l[9]=="out":
            l[9]=1
        else:
            l[9]=0
        l[2]=int(l[2])
        l[4]=int(l[4])
        l[5]=int(l[5])
        l[6]=int(l[6])
        l[7]=int(l[7])
        cur=db.cursor()
        cur.execute(f"insert into batting_summary values(?,?,?,?,?,?,?,?,?,?,?);",l)#('{l[0]}','{l[1]}',{l[2]},'{l[3]}','{l[4]}','{l[5]}','{l[6]}','{l[7]}','{l[8]}','{l[9]}','{l[10]}')
        # print(l)
        db.commit()
        cur.close()
    return "success"
@app.route("/showbatsman")
def showbatsman():
    cur=db.cursor()
    cur.execute("select * from batting_summary")
    d=cur.fetchall()
    db.commit()
    cur.close()
    return d

#########################################

@app.route("/dropbowling")
def dropbowling():
    cur=db.cursor()
    cur.execute("drop table bowling_summary")
    cur.close()
    return "bowling_summary deleted"

@app.route("/createtablebowling")
def create3():
    cur=db.cursor()
    cur.execute("create table bowling_summary(match varchar(100),team varchar(100),bowler varchar(200) references players(name),overs real,maiden int,runs int,wicket int,economy real,zeros int,fours int,sixes int,wides int,noballs int,match_id vatchar(20),balls int);")
    db.commit()
    cur.close()
    return "table bowler created"


# @app.route("/addbowlers")
def addbowlers():
    data=pd.read_csv("/Users/akshatp/Documents/cricket/t20_csv_files/fact_bowling_summary.csv")
    for j in range(500):
        l=[]
        for i in data.iloc[j]:
            l.append(i)
        l.append(int(l[3])*6+(l[3]-int(l[3]))*10) #no. of balls
        
        l[4]=int(l[4])
        l[5]=int(l[5])
        l[6]=int(l[6])
        l[8]=int(l[8])
        l[9]=int(l[9])
        l[10]=int(l[10])
        l[11]=int(l[12])
        l[12]=int(l[12])
        cur=db.cursor()
        cur.execute(f"insert into bowling_summary values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);",l)#('{l[0]}','{l[1]}',{l[2]},'{l[3]}','{l[4]}','{l[5]}','{l[6]}','{l[7]}','{l[8]}','{l[9]}','{l[10]}')
        # print(l)
        db.commit()
    return "success"


@app.route("/showbowlers")
def showbowlers():
    cur=db.cursor()
    cur.execute("select * from bowling_summary")
    d=cur.fetchall()
    db.commit()
    cur.close()
    return d
########################################## main routes#####################

@app.route("/filltables")
def filltables():
    addmatch()
    addplayers()
    addbatsman()
    addbowlers()
    return "tables filled"

@app.route("/openers")
def getopeners():
    cur=db.cursor()
    cur.execute(f'''select batsman,team,count(batsman),sum(runs),sum(balls),(sum(runs)*100)/sum(balls),sum(runs)/count(batsman),avg(batting_pos),((sum(fours)*4+sum(sixes)*6)*100)/sum(runs) from batting_summary group by batsman having (sum(runs)*100)/sum(balls)>140 and avg(batting_pos)<3  and count(batsman)>3 and ((sum(fours)*4+sum(sixes)*6)*100)/sum(runs)>50  ''')
    d=cur.fetchall()
    res=[]
    id=1
    for i in d:
        cur.execute(f"select battingstyle from players where name='{i[0]}'")
        style=cur.fetchall()
        cur.execute(f"select sum(runs) from batting_summary where batsman='{i[0]}'")
        runs=cur.fetchall()
        cur.execute(f"select sum(out) from batting_summary where batsman='{i[0]}'")
        out=cur.fetchall()

        # print(i[0], runs)

        if(runs[0][0]/out[0][0]<30):
            continue
        di={'id':id,'Name':i[0],'Team': i[1],'Batting Style':style[0][0],"Innings Batted": i[2],'Runs':i[3],"Balls Faced":i[4],"Strike Rate": i[5],"Batting Average":runs[0][0]/out[0][0],"Batting Position":i[7],"Boundary %":i[8]}
        res.append(di)
        id=id+1
    cur.close()
    return res

@app.route("/middleorder")
def middleorder():
    print("middleorder")
    cur=db.cursor()
    cur.execute(f'''select batsman,team,count(batsman),sum(runs),sum(balls),(sum(runs)*100)/sum(balls),sum(runs)/count(batsman),avg(batting_pos),((sum(fours)*4+sum(sixes)*6)*100)/sum(runs) from batting_summary group by batsman having (sum(runs)*100)/sum(balls)>125 and avg(batting_pos)>2  and count(batsman)>3 and avg(balls)>20  ''')
    d=cur.fetchall()
    res=[]
    id=100
    for i in d:
        cur.execute(f"select battingstyle from players where name='{i[0]}'")
        style=cur.fetchall()
        cur.execute(f"select sum(runs) from batting_summary where batsman='{i[0]}'")
        runs=cur.fetchall()
        cur.execute(f"select sum(out) from batting_summary where batsman='{i[0]}'")
        out=cur.fetchall()
        if(runs[0][0]/out[0][0]<40):
            continue
        di={'id':id,'Name':i[0],'Team': i[1],'Batting Style':style[0][0],"Innings Batted": i[2],'Runs':i[3],"Balls Faced":i[4],"Strike Rate": i[5],"Batting Average":runs[0][0]/out[0][0],"Batting Position":i[7],"Boundary %":i[8]}
        res.append(di)
        id=id+1
    cur.close()
    return res


@app.route("/allrounder")
def allrounder():
    cur=db.cursor()
    cur.execute(f'''select batsman,team,count(batsman),sum(runs),(sum(runs)*100)/sum(balls) from batting_summary group by batsman having (sum(runs)*100)/sum(balls)>140 and count(batsman)>2 and avg(batting_pos)>4''')
    d=cur.fetchall()
    res=[]
    id=400
    for i in d:
        cur.execute(f"select sum(runs) from batting_summary where batsman='{i[0]}'")
        runs=cur.fetchall()
        cur.execute(f"select sum(out) from batting_summary where batsman='{i[0]}'")
        out=cur.fetchall()
        # print(runs,out)
        if(out[0][0]==0):
            continue
        if(runs[0][0]/out[0][0]<15):
            continue
        cur.execute(f"select bowlingstyle,battingstyle from players where name='{i[0]}'")
        style=cur.fetchall()
        # print(style)
        cur.execute(f"select count(bowler),sum(balls),sum(wicket),sum(maiden), avg(economy),sum(balls)/sum(wicket) from bowling_summary where bowler='{i[0]}' group by bowler having count(bowler)>2 and avg(economy)<7 and sum(balls)/sum(wicket)<20  ")
        j=cur.fetchall()
        # print(j)
        try:
            di={'id':id,'Name':i[0],'Team': i[1], 'Bowling Style':style[0][0],'Batting Style':style[0][1],"Innings Batted": i[1],'Runs':i[2],"Strike Rate": i[3],"Batting Average":runs[0][0]/out[0][0],"Innings Bowled":j[0][0],'Balls Bowled':j[0][1],"Wickets":j[0][2],'Economy':j[0][4],'Bowling Strike Rate':j[0][5],'Maidens':j[0][3]}
            res.append(di)
        except:
            continue
        id=id+1
    cur.close()
    return res

@app.route("/finishers")
def finishers():
    cur=db.cursor()
    cur.execute(f'''select batsman,team,count(batsman),sum(runs),avg(balls),(sum(runs)*100)/sum(balls) from batting_summary group by batsman having (sum(runs)*100)/sum(balls)>130 and count(batsman)>3 and avg(balls)>12 and avg(batting_pos)>4''')
    d=cur.fetchall()
    res=[]
    id=300
    for i in d:
        cur.execute(f"select sum(runs) from batting_summary where batsman='{i[0]}'")
        runs=cur.fetchall()
        cur.execute(f"select sum(out) from batting_summary where batsman='{i[0]}'")
        out=cur.fetchall()
        # print(runs,out)
        if(runs[0][0]/out[0][0]<25):
            continue
        cur.execute(f"select bowlingstyle,battingstyle from players where name='{i[0]}'")
        style=cur.fetchall()
        cur.execute(f"select count(bowler),sum(wicket), avg(economy),sum(maiden),sum(balls)/sum(wicket) from bowling_summary where bowler='{i[0]}' group by bowler having count(bowler)>1")
        j=cur.fetchall()
        # print(j)
        di={'id':id,'Name':i[0],'Team': i[1],'Bowling Style':style[0][0],'Batting Style':style[0][1],"Innings Batted": i[2],'Runs':i[3],"Avg Balls Faced":i[4],"Strike Rate": i[5],"Batting Average":runs[0][0]/out[0][0],"Innings Bowled":j[0][0],"Wickets":j[0][1],'Economy':j[0][2],'Bowling Strike Rate':j[0][4],'Maidens':j[0][3]}
        res.append(di)
        id=id+1
    cur.close()
    return res

@app.route("/bowlers")
def bowlers():
    cur=db.cursor()
    cur.execute(f'''select bowler,team,count(bowler),sum(balls),sum(runs),sum(wicket),avg(economy),sum(runs)/sum(wicket),sum(balls)/sum(wicket),(sum(zeros)*100)/sum(balls),sum(maiden) from bowling_summary group by bowler having count(bowler)>4 and sum(runs)/sum(wicket)<20 and sum(balls)/sum(wicket)<16 and avg(economy)<7 and (sum(zeros)*100)/sum(balls) >40''')
    d=cur.fetchall()
    res=[]
    id=200
    for i in d:
        cur.execute(f"select bowlingstyle from players where name='{i[0]}'")
        style=cur.fetchall()
        # print(style[0][0])
        di={'id':id,'Name':i[0],'Team': i[1],'Bowling Style':style[0][0],"Innings Bowled": i[2],'Balls Bowled':i[3],"Runs Conceded":i[4],"Wickets": i[5],"Economy":i[6],"Bowling Average":i[7],"Bowling Strike Rate":i[8],'Dot Ball %':i[9],'Maidens':i[10]}
        res.append(di)
        id=id+1
    cur.close()
    return res


#***************************** main ********************************************************
if __name__=="__main__":
    filltables()
    app.run(debug=True)
# @app.route("/addingbatsman")
# def addbat():
    

