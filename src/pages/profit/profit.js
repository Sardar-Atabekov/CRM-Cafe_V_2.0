import React, { useState } from "react";
import Title from "../../components/title/title";
// import { getData } from "../../functions/requests";
// import Loading from "../../components/loading/loading";
import BarChart from "../../components/graphics/barChart";
import PieChart from "./../../components/graphics/pieChart";
import TopBlock from "../../components/top-block/top-block";
import ResultBlock from "./../../components/result-block/result";
import ComparisonBarChart from "../../components/graphics/comparisonBarChart";
import ComparisonLineChart from "../../components/graphics/comparisonLineChart";

import "./profit.css";

const ProfitPage = () => {
  const [selectTypeDate, setSelectTypeDate] = useState("day");

  const topData = [
    {
      id: 1,
      name: "Пицца",
      count: "19125",
    },
    {
      id: 2,
      name: "Бургеры",
      count: "16105",
    },
    {
      id: 3,
      name: "Паста",
      count: "13102",
    },
    {
      id: 4,
      name: "Паэлья",
      count: "12495",
    },
    {
      id: 5,
      name: "Борщ",
      count: "12189",
    },
    {
      id: 6,
      name: "Роллы",
      count: "10482",
    },
    {
      id: 7,
      name: "Луковый суп",
      count: "8375",
    },
    {
      id: 8,
      name: "Пельмени",
      count: "7270",
    },
    {
      id: 9,
      name: "Рататуй",
      count: "7068",
    },
    {
      id: 10,
      name: "Тирамису",
      count: "6945",
    },
  ];

  return (
    <main className="wrapper proceeds-container">
      <Title>Прибыль</Title>
      <div className="totals">
        <ResultBlock
          text="ОБЩАЯ ПРИБЫЛЬ"
          result={1032054}
          // className="ml-0"
        />
        <ResultBlock text="ЗА МЕСЯЦ" result={83452} />
        <ResultBlock text="ЗА НЕДЕЛЮ" result={16032} />
        <ResultBlock text="ЗА СЕГОДНЯ" result={3032} />
        <ResultBlock
          text="СРЕДНЯЯ ПРИБЫЛЬ С ЗАКАЗА"
          result={132}
          //   className="mr-0"
        />
      </div>
      <div className="flex">
        <div className="reports-block">
          <div className="reports-block-header">
            <h4 className="m-0">Отчет о прибыли</h4>
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
            <ComparisonBarChart
              firstData={[-23507, 29253, 40124, 32535, 37335, 43462, 46458]}
              secondData={[-18624, 33213, 7513, 25235]}
            />
          ) : selectTypeDate === "week" ? (
            <ComparisonLineChart
              firstData={[8624, -9213, -7513]}
              secondData={[13507, 9253, 20124, 14535, -6325]}
              fill={false}
            />
          ) : (
            <BarChart title="ДОХОД ПО МЕСЯЦАМ" data={[88425, 22823]} />
          )}
        </div>
        <PieChart
          name="Прибыль по департаментам"
          data={[72221, -14921, 33549]}
        />
        <TopBlock name="Топ блюд" data={topData} />
        {/* <TopBlock name="Топ официантов" data={topData} money={false} /> */}
        {/* Последние заказы (активные и не активные*/}
      </div>
    </main>
  );
};
export default ProfitPage;
