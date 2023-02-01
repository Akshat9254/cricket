import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { Box } from "@mui/material";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const labels = ["Runs"];

const options = {
  indexAxis: "y",
  barThickness: 35,
  minBarLength: 2,
  elements: {
    bar: {
      borderWidth: 0,
    },
  },
  scales: {
    y: {
      ticks: {
        display: false, //this will remove only the label
      },
      grid: {
        color: "rgba(0, 0, 0, 0)",
      },
      border: {
        color: "rgba(0, 0, 0, 0)",
      },
    },
    x: {
      ticks: {
        display: false, //this will remove only the label
      },
      grid: {
        color: "rgba(0, 0, 0, 0)",
      },
      border: {
        color: "rgba(0, 0, 0, 0)",
      },
      max: 50,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    datalabels: {
      display: true,
      color: "black",
      formatter: Math.round,
      anchor: "start",
      // offset: -20,
      align: "start",
    },
  },
};

const BarChart = ({ runs }) => {
  //   console.log(runs, typeof runs);
  const data = {
    labels,
    datasets: [
      {
        label: "Runs",
        data: [runs],
        backgroundColor: "#3E4396",
      },
    ],
  };
  return (
    <Box display={"flex"} alignItems={"center"}>
      <Bar options={options} data={data} />
    </Box>
  );
};

export default BarChart;
