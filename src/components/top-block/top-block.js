import React from "react";
// import { getData, API } from "../../../requests";
// import TopGraphics from "./../graphics/topGraphics";
import "./top-block.css";

const TopMealsOrderBlock = ({ name, data, money = true }) => {
  return (
    <div className="top-block">
      <div className="header">
        <h4>{name}</h4>
      </div>
      <ul className="top-block__list">
        {data &&
          data.map((item) => (
            <li key={item.id}>
              <span>{item.name}</span>
              <span className="sums">
                {item.count} {money ? "сом" : "x"}
              </span>
            </li>
          ))}
      </ul>
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
export default TopMealsOrderBlock;
