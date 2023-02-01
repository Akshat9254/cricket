import { renderProgress } from "../shared/PlayerTable/components";
import { battingData } from "../data";
import { Box } from "@mui/material";

export const columns = [
  [
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
    {
      field: "Innings Batted",
      headerName: "Innings Batted",
      type: Number,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "Runs",
      headerName: "Runs",
      headerAlign: "center",
      type: Number,
      flex: 1,
      renderCell: ({ row: { Runs } }) => {
        return (
          <Box
            width="60%"
            m="0 auto"
            py={1}
            display="flex"
            justifyContent="center"
            borderRadius="4px"
          >
            {renderProgress({ runs: Runs })}
          </Box>
        );
      },
    },
    {
      field: "Balls Faced",
      headerName: "Balls Faced",
      type: Number,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "Strike Rate",
      headerName: "Strike Rate",
      type: Number,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "Batting Average",
      headerName: "Batting Average",
      type: Number,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "Batting Position",
      headerName: "Batting Position",
      type: Number,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "Boundary %",
      headerName: "Boundary %",
      type: Number,
      headerAlign: "center",
      align: "center",
      valueGetter: ({ row }) => `${row["Boundary %"]}%`,
    },
  ],
];

export const LineChartData = [
  [
    {
      labels: battingData.map((d) => d["Name"]),
      datasets: [
        {
          label: "Batting Average",
          data: battingData.map((d) => d["Batting Average"]),
          borderColor: "#e5e5e5",
          pointBackgroundColor: "#D9CB1A",
          pointHoverBackgroundColor: "#b7a90e",
          borderDash: [5, 5],
          borderWidth: 1,
        },
      ],
    },
    {
      labels: battingData.map((d) => d["Name"]),
      datasets: [
        {
          label: "Balls Faced",
          data: battingData.map((d) => d["Balls Faced"]),
          borderColor: "#e5e5e5",
          pointBackgroundColor: "#D9CB1A",
          pointHoverBackgroundColor: "#b7a90e",
          borderDash: [5, 5],
          borderWidth: 1,
        },
      ],
    },
    {
      labels: battingData.map((d) => d["Name"]),
      datasets: [
        {
          label: "Strike Rate",
          data: battingData.map((d) => d["Strike Rate"]),
          borderColor: "#e5e5e5",
          pointBackgroundColor: "#D9CB1A",
          pointHoverBackgroundColor: "#b7a90e",
          borderDash: [5, 5],
          borderWidth: 1,
        },
      ],
    },
    {
      labels: battingData.map((d) => d["Name"]),
      datasets: [
        {
          label: "Boundary %",
          data: battingData.map((d) => d["Boundary %"]),
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

export const ScatterChartData = [
  {
    labels: battingData.map((d) => d["Name"]),
    datasets: [
      {
        label: "Boundary %",
        data: battingData.map((d) => ({
          x: d["Batting Average"],
          y: d["Strike Rate"],
        })),
        backgroundColor: "#D9CB1A",
      },
    ],
  },
];
