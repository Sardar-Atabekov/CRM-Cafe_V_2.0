import React, { useState } from "react";
import { Doughnut } from "react-chartjs-2";

const DoughnutChart = ({
  title = "Заказы по месяцам",
  labels = ["Бар", "Кухня", "Кофейня"],
  data = [90221, 144921, 73549],
  name = "Выручка по департаментам",
}) => {
  const LineData = {
    labels: labels,
    datasets: [
      {
        label: title,
        data: data,
        backgroundColor: [
          "rgb(60, 180, 100)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(255, 159, 64, 0.6)",
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
          "rgba(255, 159, 64, 0.6)",
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
        ],
        borderColor: "#fff",
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    cutoutPercentage: 70,
    legend: {
      display: true,
      position: "bottom",
    },
  };

  return (
    <div className="top-block share-chart__block">
      <div className="header">
        <h4>{name}</h4>
      </div>
      <Doughnut data={LineData} options={options} />
      <div className="top-block__footer">
        <select className="select">
          <option value="0">Общая </option>
          <option value="1">Last Month</option>
          <option value="2">Last Week</option>
          <option value="3">Today</option>
        </select>
        <div className="pull-report">Подробное</div>
      </div>
    </div>
  );
};

export default DoughnutChart;
