// ./components/LineChart.js

import React from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { Pie } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";
import { Colors } from 'chart.js';

Chart.register(Colors);
const labels = ["January", "February", "March", "April", "May", "June"];

const data = {
  labels: labels,
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "#4b49ac",
      borderColor: "#4b49ac",
      height: '280px !important',
      fullWidth: true,
      data: [0, 10, 5, 2, 20, 30, 45],
    },
  ],
};

const LineChart = () => {
  return (
    <div>
      <Line data={data}  />
    </div>
  );
};


// ./components/BarChart.js



const BarChart = () => {

  return (
    <div>
      <Bar data={data} />
    </div>
  );
};
// ./components/PieChart.js

const PieChart = () => {
    const piedata = {
        labels: labels,
        datasets: [
          {
            label: "My First dataset",
            backgroundColor:  [
                '#4B49AC',
                '#FFC100 ',
                '#FF4747 ',
                '#248AFD',
                '#FF7F50',
                '#248AFD',
                ],
            borderColor: "#fff",
            data: [0, 10, 5, 2, 20, 30, 45],
          },
        ],
      };
  return (
    <div>
      <Pie data={piedata} />
    </div>
  );
};


export  {BarChart, LineChart,PieChart};