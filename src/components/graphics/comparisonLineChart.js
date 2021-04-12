import React, { useState } from "react";
import { Line } from "react-chartjs-2";

const LineChart = ({
  dataFirstTitle = "За текущую месяц",
  dataSecondTitle = "За прошлую месяц",
  labels = ["1-неделя", "2-неделя", "3-неделя", "4-неделя", "Остальные дни"],
  fill = true,
  firstData = [33624, 53213, 7513],
  secondData = [23507, 18253, 50124, 47535, 54335, 63462],
}) => {
  const speedData = {
    labels: labels,
    datasets: [
      {
        label: dataFirstTitle,
        data: firstData,
        backgroundColor: ["rgba(229, 242, 455, 311)"],
        borderColor: "#0094ff",
        fill: fill,
      },
      {
        label: dataSecondTitle,
        data: secondData,
        backgroundColor: ["rgba(250, 236, 240, 340)"],
        borderColor: "#c4183c",
        fill: fill,
      },
    ],
  };

  const options = {
    responsive: true,
    // tooltips: {
    //   mode: 'label',
    // },
    hover: {
      mode: "nearest",
      intersect: true,
    },
    scales: {
      xAxes: [
        {
          display: true,
          ticks: {
            beginAtZero: true,
          },
        },
      ],
      yAxes: [
        {
          display: true,
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  const [LineData, setLineData] = useState(speedData);
  return (
    <div className="chart-block">
      <Line data={LineData} options={options} />
    </div>
  );
};

export default LineChart;
