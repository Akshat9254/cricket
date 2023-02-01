import { Line } from "react-chartjs-2";
import { Chart } from "chart.js/auto";

const options = {
  scales: {
    x: {
      ticks: {
        display: false,
      },
      grid: {
        color: "rgba(0, 0, 0, 0)",
      },
      // backgroundColor: "#e5e5e5",
    },
    y: {
      grid: {
        color: "rgba(0, 0, 0, 0)",
      },
      ticks: {
        color: "#e5e5e5",
      },
    },
  },
  plugins: {
    legend: {
      labels: {
        color: "#e5e5e5",
        boxWidth: 0,
      },
    },
  },
};

const LineChart = ({ data }) => {
  return <Line data={data} options={options} />;
};

export default LineChart;
