import React, { useState } from "react";
import Title from "../../components/title/title";
// import { getData } from "../../functions/requests";
// import Loading from "../../components/loading/loading";
import BarChart from "../../components/graphics/barChart";
import TopBlock from "../../components/top-block/top-block";
import ResultBlock from "./../../components/result-block/result";
import DoughnutChart from "./../../components/graphics/doughnutChart";
import ComparisonBarChart from "../../components/graphics/comparisonBarChart";
import ComparisonLineChart from "../../components/graphics/comparisonLineChart";

import "./proceeds.css";

const ProceedsPage = () => {
  const [selectTypeDate, setSelectTypeDate] = useState("day");

  const topData = [
    {
      id: 1,
      name: "Пицца",
      count: "23125",
    },
    {
      id: 2,
      name: "Бургеры",
      count: "18105",
    },
    {
      id: 3,
      name: "Паста",
      count: "16102",
    },
    {
      id: 4,
      name: "Паэлья",
      count: "15495",
    },
    {
      id: 5,
      name: "Борщ",
      count: "14189",
    },
    {
      id: 6,
      name: "Роллы",
      count: "12482",
    },
    {
      id: 7,
      name: "Луковый суп",
      count: "10375",
    },
    {
      id: 8,
      name: "Пельмени",
      count: "9270",
    },
    {
      id: 9,
      name: "Рататуй",
      count: "9068",
    },
    {
      id: 10,
      name: "Тирамису",
      count: "8945",
    },
  ];

  return (
    <main className="wrapper proceeds-container">
      <Title>Выручка</Title>
      <div className="totals">
        <ResultBlock
          text="ОБЩАЯ ВЫРУЧКА"
          result={1932054}
          // className="ml-0"
        />
        <ResultBlock text="ЗА МЕСЯЦ" result={103452} />
        <ResultBlock text="ЗА НЕДЕЛЮ" result={28032} />
        <ResultBlock text="ЗА СЕГОДНЯ" result={5032} />
        <ResultBlock
          text="СРЕДНЯЯ ВЫРУЧКА С ЗАКАЗА"
          result={432}
          //   className="mr-0"
        />
      </div>
      <div className="flex">
        <div className="reports-block">
          <div className="reports-block-header">
            <h4 className="m-0">Отчет по выручке</h4>
            <div className="block-handle"></div>
          </div>
          <div className="reports-block-date">
            <div className="select-report-date">
              <span
                className={selectTypeDate === "day" ? "btn-active" : null}
                onClick={() => setSelectTypeDate("day")}
              >
                По дням
              </span>
              <span
                className={selectTypeDate === "week" ? "btn-active" : null}
                onClick={() => setSelectTypeDate("week")}
              >
                По неделям
              </span>
              <span
                className={selectTypeDate === "month" ? "btn-active" : null}
                onClick={() => setSelectTypeDate("month")}
              >
                По месяцам
              </span>
            </div>
          </div>
          {selectTypeDate === "day" ? (
            <ComparisonBarChart />
          ) : selectTypeDate === "week" ? (
            <ComparisonLineChart fill={false} />
          ) : (
            <BarChart title="ВЫРУЧКА ПО МЕСЯЦАМ" data={[108425, 36823]} />
          )}
        </div>
        <DoughnutChart />
        <TopBlock name="Топ блюд" data={topData} />
        {/* <TopBlock name="Топ официантов" data={topData} money={false} /> */}
        {/* Последние заказы (активные и не активные*/}
      </div>
    </main>
  );
};
export default ProceedsPage;
