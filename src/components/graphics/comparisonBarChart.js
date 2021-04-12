import React, { useState } from "react";
import Chart from "chart.js";
import { Bar, Line } from "react-chartjs-2";

const BarChart = ({
  firstData = [23507, 38253, 50124, 42535, 47335, 53462, 56458],
  secondData = [33624, 33213, 47513, 35235, 49566],
}) => {
  const speedData = {
    labels: [
      "Понедельник",
      "Вторник",
      "Среда",
      "Четверг",
      "Пятница",
      "Суббота",
      "Воскресенье",
    ],
    datasets: [
      {
        label: "За прошлую неделю",
        data: firstData,
        fill: false,
        backgroundColor: "#FF597C",
      },
      {
        label: "За текущую неделю",
        data: secondData,
        fill: false,
        backgroundColor: "rgba(0,123,255,1)",
      },
    ],
  };

  // Chart.defaults.global.elements.line.fill = false;

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };
  
  const [barData, setBarData] = useState(speedData);
  return (
    <div className="chart-block">
      <Bar data={barData} options={options} />
    </div>
  );
};

export default BarChart;
