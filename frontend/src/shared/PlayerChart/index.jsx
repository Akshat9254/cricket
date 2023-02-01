import { Grid } from "@mui/material";
import LineChart from "../LineChart";
import ScatterChart from "../ScatterChart";
// import { columns, LineChartData, ScatterChartData } from "../../utils";
import { useContext } from "react";
import { AppContext } from "../../context";

const PlayerChart = () => {
  const { tabIndex, openers, middleorders, finishers, allrounders, bowlers } =
    useContext(AppContext);
  const LineChartData = [
    [
      {
        labels: openers.map((d) => d["Name"]),
        datasets: [
          {
            label: "Batting Average",
            data: openers.map((d) => d["Batting Average"]),
            borderColor: "#e5e5e5",
            pointBackgroundColor: "#D9CB1A",
            pointHoverBackgroundColor: "#b7a90e",
            borderDash: [5, 5],
            borderWidth: 1,
          },
        ],
      },
      {
        labels: openers.map((d) => d["Name"]),
        datasets: [
          {
            label: "Balls Faced",
            data: openers.map((d) => d["Balls Faced"]),
            borderColor: "#e5e5e5",
            pointBackgroundColor: "#D9CB1A",
            pointHoverBackgroundColor: "#b7a90e",
            borderDash: [5, 5],
            borderWidth: 1,
          },
        ],
      },
      {
        labels: openers.map((d) => d["Name"]),
        datasets: [
          {
            label: "Strike Rate",
            data: openers.map((d) => d["Strike Rate"]),
            borderColor: "#e5e5e5",
            pointBackgroundColor: "#D9CB1A",
            pointHoverBackgroundColor: "#b7a90e",
            borderDash: [5, 5],
            borderWidth: 1,
          },
        ],
      },
      {
        labels: openers.map((d) => d["Name"]),
        datasets: [
          {
            label: "Boundary %",
            data: openers.map((d) => d["Boundary %"]),
            borderColor: "#e5e5e5",
            pointBackgroundColor: "#D9CB1A",
            pointHoverBackgroundColor: "#b7a90e",
            borderDash: [5, 5],
            borderWidth: 1,
          },
        ],
      },
    ],
    [
      {
        labels: middleorders.map((d) => d["Name"]),
        datasets: [
          {
            label: "Batting Average",
            data: middleorders.map((d) => d["Batting Average"]),
            borderColor: "#e5e5e5",
            pointBackgroundColor: "#D9CB1A",
            pointHoverBackgroundColor: "#b7a90e",
            borderDash: [5, 5],
            borderWidth: 1,
          },
        ],
      },
      {
        labels: middleorders.map((d) => d["Name"]),
        datasets: [
          {
            label: "Balls Faced",
            data: middleorders.map((d) => d["Balls Faced"]),
            borderColor: "#e5e5e5",
            pointBackgroundColor: "#D9CB1A",
            pointHoverBackgroundColor: "#b7a90e",
            borderDash: [5, 5],
            borderWidth: 1,
          },
        ],
      },
      {
        labels: middleorders.map((d) => d["Name"]),
        datasets: [
          {
            label: "Strike Rate",
            data: middleorders.map((d) => d["Strike Rate"]),
            borderColor: "#e5e5e5",
            pointBackgroundColor: "#D9CB1A",
            pointHoverBackgroundColor: "#b7a90e",
            borderDash: [5, 5],
            borderWidth: 1,
          },
        ],
      },
      {
        labels: middleorders.map((d) => d["Name"]),
        datasets: [
          {
            label: "Boundary %",
            data: middleorders.map((d) => d["Boundary %"]),
            borderColor: "#e5e5e5",
            pointBackgroundColor: "#D9CB1A",
            pointHoverBackgroundColor: "#b7a90e",
            borderDash: [5, 5],
            borderWidth: 1,
          },
        ],
      },
    ],
    [
      {
        labels: finishers.map((d) => d["Name"]),
        datasets: [
          {
            label: "Batting Average",
            data: finishers.map((d) => d["Batting Average"]),
            borderColor: "#e5e5e5",
            pointBackgroundColor: "#D9CB1A",
            pointHoverBackgroundColor: "#b7a90e",
            borderDash: [5, 5],
            borderWidth: 1,
          },
        ],
      },
      {
        labels: finishers.map((d) => d["Name"]),
        datasets: [
          {
            label: "Balls Faced",
            data: finishers.map((d) => d["Avg Balls Faced"]),
            borderColor: "#e5e5e5",
            pointBackgroundColor: "#D9CB1A",
            pointHoverBackgroundColor: "#b7a90e",
            borderDash: [5, 5],
            borderWidth: 1,
          },
        ],
      },
      {
        labels: finishers.map((d) => d["Name"]),
        datasets: [
          {
            label: "Batting Strike Rate",
            data: finishers.map((d) => d["Strike Rate"]),
            borderColor: "#e5e5e5",
            pointBackgroundColor: "#D9CB1A",
            pointHoverBackgroundColor: "#b7a90e",
            borderDash: [5, 5],
            borderWidth: 1,
          },
        ],
      },
      {
        labels: finishers.map((d) => d["Name"]),
        datasets: [
          {
            label: "Bowling Strike Rate",
            data: finishers.map((d) => d["Bowling Strike Rate"]),
            borderColor: "#e5e5e5",
            pointBackgroundColor: "#D9CB1A",
            pointHoverBackgroundColor: "#b7a90e",
            borderDash: [5, 5],
            borderWidth: 1,
          },
        ],
      },
    ],
    [
      {
        labels: allrounders.map((d) => d["Name"]),
        datasets: [
          {
            label: "Batting Average",
            data: allrounders.map((d) => d["Batting Average"]),
            borderColor: "#e5e5e5",
            pointBackgroundColor: "#D9CB1A",
            pointHoverBackgroundColor: "#b7a90e",
            borderDash: [5, 5],
            borderWidth: 1,
          },
        ],
      },
      {
        labels: allrounders.map((d) => d["Name"]),
        datasets: [
          {
            label: "Ecomomy",
            data: allrounders.map((d) => d["Economy"]),
            borderColor: "#e5e5e5",
            pointBackgroundColor: "#D9CB1A",
            pointHoverBackgroundColor: "#b7a90e",
            borderDash: [5, 5],
            borderWidth: 1,
          },
        ],
      },
      {
        labels: allrounders.map((d) => d["Name"]),
        datasets: [
          {
            label: "Batting Strike Rate",
            data: allrounders.map((d) => d["Strike Rate"]),
            borderColor: "#e5e5e5",
            pointBackgroundColor: "#D9CB1A",
            pointHoverBackgroundColor: "#b7a90e",
            borderDash: [5, 5],
            borderWidth: 1,
          },
        ],
      },
      {
        labels: allrounders.map((d) => d["Name"]),
        datasets: [
          {
            label: "Bowling Strike Rate",
            data: allrounders.map((d) => d["Bowling Strike Rate"]),
            borderColor: "#e5e5e5",
            pointBackgroundColor: "#D9CB1A",
            pointHoverBackgroundColor: "#b7a90e",
            borderDash: [5, 5],
            borderWidth: 1,
          },
        ],
      },
    ],
    [
      {
        labels: bowlers.map((d) => d["Name"]),
        datasets: [
          {
            label: "Bowling Average",
            data: bowlers.map((d) => d["Bowling Average"]),
            borderColor: "#e5e5e5",
            pointBackgroundColor: "#D9CB1A",
            pointHoverBackgroundColor: "#b7a90e",
            borderDash: [5, 5],
            borderWidth: 1,
          },
        ],
      },
      {
        labels: bowlers.map((d) => d["Name"]),
        datasets: [
          {
            label: "Ecomomy",
            data: bowlers.map((d) => d["Economy"]),
            borderColor: "#e5e5e5",
            pointBackgroundColor: "#D9CB1A",
            pointHoverBackgroundColor: "#b7a90e",
            borderDash: [5, 5],
            borderWidth: 1,
          },
        ],
      },
      {
        labels: bowlers.map((d) => d["Name"]),
        datasets: [
          {
            label: "Bowling Strike Rate",
            data: bowlers.map((d) => d["Bowling Strike Rate"]),
            borderColor: "#e5e5e5",
            pointBackgroundColor: "#D9CB1A",
            pointHoverBackgroundColor: "#b7a90e",
            borderDash: [5, 5],
            borderWidth: 1,
          },
        ],
      },
      {
        labels: bowlers.map((d) => d["Name"]),
        datasets: [
          {
            label: "Dot Ball %",
            data: bowlers.map((d) => d["Dot Ball %"]),
            borderColor: "#e5e5e5",
            pointBackgroundColor: "#D9CB1A",
            pointHoverBackgroundColor: "#b7a90e",
            borderDash: [5, 5],
            borderWidth: 1,
          },
        ],
      },
    ],
  ];

  const ScatterChartData = [
    {
      labels: openers.map((d) => d["Name"]),
      datasets: [
        {
          label: "Batting Avg v/s Batting Avg",
          data: openers.map((d) => ({
            x: d["Batting Average"],
            y: d["Strike Rate"],
          })),
          backgroundColor: "#D9CB1A",
        },
      ],
    },
    {
      labels: middleorders.map((d) => d["Name"]),
      datasets: [
        {
          label: "Batting Avg v/s Batting Avg",
          data: middleorders.map((d) => ({
            x: d["Batting Average"],
            y: d["Strike Rate"],
          })),
          backgroundColor: "#D9CB1A",
        },
      ],
    },
    {
      labels: finishers.map((d) => d["Name"]),
      datasets: [
        {
          label: "Batting Avg v/s Batting Avg",
          data: finishers.map((d) => ({
            x: d["Batting Average"],
            y: d["Strike Rate"],
          })),
          backgroundColor: "#D9CB1A",
        },
      ],
    },
    {
      labels: allrounders.map((d) => d["Name"]),
      datasets: [
        {
          label: "Economy v/s Strike Rate",
          data: allrounders.map((d) => ({
            x: d["Economy"],
            y: d["Strike Rate"],
          })),
          backgroundColor: "#D9CB1A",
        },
      ],
    },
    {
      labels: bowlers.map((d) => d["Name"]),
      datasets: [
        {
          label: "Economy v/s Bowling Strike Rate",
          data: bowlers.map((d) => ({
            x: d["Economy"],
            y: d["Bowling Strike Rate"],
          })),
          backgroundColor: "#D9CB1A",
        },
      ],
    },
  ];
  return (
    <Grid container spacing={2} alignItems={"center"} p={2}>
      <Grid item md={12} lg={8}>
        <Grid container spacing={1}>
          {LineChartData[tabIndex].map((chartData, index) => (
            <Grid item md={6} key={index}>
              <LineChart data={chartData} />
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item md={12} lg={4}>
        <ScatterChart data={ScatterChartData[tabIndex]} />
      </Grid>
    </Grid>
  );
};

export default PlayerChart;
