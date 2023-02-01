import { Scatter } from "react-chartjs-2";
import { Chart } from "chart.js/auto";

const options = {
  scales: {
    x: {
      title: {
        display: true,
        text: "Batting Average",
        color: "#e5e5e5",
      },
      ticks: {
        color: "#e5e5e5",
      },
    },
    y: {
      title: {
        display: true,
        text: "Strike Rate",
        color: "#e5e5e5",
      },
      ticks: {
        color: "#e5e5e5",
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
  elements: {
    point: {
      radius: 10,
      hoverRadius: 12,
    },
  },
};

const ScatterChart = ({ data }) => {
  return <Scatter data={data} options={options} />;
};

export default ScatterChart;
