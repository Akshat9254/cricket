import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Container, Grid, Typography } from "@mui/material";
import { AppContext } from "../../context";
import { useContext } from "react";
import { Stack } from "@mui/system";
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";

const columns = [
  {
    field: "Name",
    headerName: "Name",
    flex: 1,
    cellClassName: "name-column--cell",
  },
  {
    field: "Team",
    headerName: "Team",
    headerAlign: "left",
    align: "left",
  },
  {
    field: "Batting Style",
    headerName: "Batting Style",
  },
  // { field: "Player Role", headerName: "Player Role" },
  {
    field: "Bowling Style",
    headerName: "Bowling Style",
  },
  {
    field: "Batting Average",
    headerName: "Batting Average",
    type: Number,
    headerAlign: "center",
    align: "center",
    valueGetter: ({ row }) => `${row["Batting Average"] ? row["Batting Average"].toFixed(2) : ""}`
  },
  {
    field: "Strike Rate",
    headerName: "Batting Strike Rate",
    type: Number,
    headerAlign: "center",
    align: "center",
    valueGetter: ({ row }) => `${row["Strike Rate"] ? row["Strike Rate"].toFixed(2) : ""}`
  },
  {
    field: "Economy",
    headerName: "Economy",
    type: Number,
    headerAlign: "center",
    align: "center",
    valueGetter: ({ row }) => `${row["Economy"] ? row["Economy"].toFixed(2) : ""}`
  },
  {
    field: "Bowling Average",
    headerName: "Bowling Average",
    type: Number,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "Bowling Strike Rate",
    headerName: "Bowling Strike Rate",
    type: Number,
    headerAlign: "center",
    align: "center",
  },
];

const keys = [{ field: "id" }];

const Item = ({ value, title }) => {
  return (
    <Stack>
      <Typography
        variant="h5"
        color="black"
        align="center"
        fontSize={24}
        fontFamily={"cursive"}
        fontWeight={"bold"}
      >
        {value}
      </Typography>
      <Typography variant={"body1"} color="black" align="center">
        {title}
      </Typography>
    </Stack>
  );
};

const Final11Page = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { selectedOpeners,
    selectedMiddleorders,
    selectedFinishers,
    selectedAllrounders,
    selectedBowlers,
    openers,
    middleorders,
    finishers,
    allrounders,
    bowlers, } = useContext(AppContext);

    const selectedIdsSet = new Set([
      ...selectedOpeners,
      ...selectedMiddleorders,
      ...selectedFinishers,
      ...selectedAllrounders,
      ...selectedBowlers,
    ]);
  
    const selectedPlayers = [
          ...openers,
          ...middleorders,
          ...finishers,
          ...allrounders,
          ...bowlers,
    ].filter(player => selectedIdsSet.has(player.id))

  let avg = 0, n_avg = 0
  let sr = 0, n_sr = 0
  let ballsFaced = 0, n_ballsFaced = 0
  let bowlingAvg = 0, n_bowlingAvg = 0
  let bowlingSR = 0, n_bowlingSR = 0
  let economy = 0, n_economy = 0
  let dot = 0, n_dot = 0

  for(let i = 0; i < selectedPlayers.length; i++) {
    if(selectedPlayers[i]["Batting Average"]) {
      avg += selectedPlayers[i]["Batting Average"]
      n_avg++
    }
    if(selectedPlayers[i]["Strike Rate"]) {
      sr += selectedPlayers[i]["Strike Rate"]
      n_sr++
    }
    if(selectedPlayers[i]["Balls Faced"]) {
      ballsFaced += selectedPlayers[i]["Balls Faced"]
      n_ballsFaced++
    }
    if(selectedPlayers[i]["Bowling Average"]) {
      bowlingAvg += selectedPlayers[i]["Bowling Average"]
      n_bowlingAvg++
    }
    if(selectedPlayers[i]["Bowling Strike Rate"]) {
      bowlingSR += selectedPlayers[i]["Bowling Strike Rate"]
      n_bowlingSR++
    }
    if(selectedPlayers[i]["Economy"]) {
      economy += selectedPlayers[i]["Economy"]
      n_economy++
    }
    if(selectedPlayers[i]["Dot Ball %"]) {
      dot += selectedPlayers[i]["Dot Ball %"]
      n_dot++
    }
  }

  // console.log({avg, sr, ballsFaced, bowlingAvg, bowlingSR, economy, dot});

  n_avg > 0 && (avg /= n_avg)
  n_sr > 0 && (sr /= n_sr)
  n_ballsFaced > 0 && (ballsFaced /= n_ballsFaced)
  n_bowlingSR > 0 && (bowlingSR /= n_bowlingSR)
  n_economy > 0 && (economy /= n_economy)
  n_dot > 0 && (dot /= n_dot)
  n_bowlingAvg > 0 && (bowlingAvg /= n_bowlingAvg)

  return (
    <Container sx={{ height: "90vh", paddingY: 4, width: "100%" }}>
      <Stack sx={{ width: "100%" }} gap={6}>
        <DataGrid
          rows={selectedPlayers}
          columns={columns}
          pageSize={12}
          keys={keys}
          // rowsPerPageOptions={[5]}
          autoHeight
          hideFooter
        />

        <Grid
          container
          alignItems={"center"}
          p={2}
          bgcolor={colors.yellow[500]}
          columnGap={2}
          borderRadius={2}
          sx={{ transform: "skew(-20deg)" }}
        >
          <Grid item md={2}>
            <Typography
              variant={"h3"}
              color="black"
              align="center"
              fontSize={30}
            >
              Team Performance
            </Typography>
          </Grid>
          <Grid item md={1}>
            <Item value={avg.toFixed(2)} title={"Batting Average"} />
          </Grid>
          <Grid item md={1}>
            <Item value={sr.toFixed(2)} title={"Strike Rate"} />
          </Grid>
          <Grid item md={2}>
            <Item value={ballsFaced.toFixed(2)} title={"Average Balls Faced"} />
          </Grid>
          <Grid item md={1}>
            <Item value={bowlingAvg.toFixed(2)} title={"Bowling Average"} />
          </Grid>
          <Grid item md={1}>
            <Item value={bowlingSR.toFixed(2)} title={"Bowling Strike Rate"} />
          </Grid>
          <Grid item md={1}>
            <Item value={economy.toFixed(2)} title={"Economy"} />
          </Grid>
          <Grid item md={1}>
            <Item value={`${dot.toFixed(2)}%`} title={"Dot Ball %"} />
          </Grid>
        </Grid>
      </Stack>
    </Container>
  );
};

export default Final11Page;
