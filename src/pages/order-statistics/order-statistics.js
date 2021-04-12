import React, { useState } from "react";
import Title from "../../components/title/title";
// import { getData } from "../../functions/requests";
// import Loading from "../../components/loading/loading";
import BarChart from "../../components/graphics/barChart";
import TopBlock from "../../components/top-block/top-block";
import ResultBlock from "./../../components/result-block/result";
import ComparisonBarChart from "../../components/graphics/comparisonBarChart";
import ComparisonLineChart from "../../components/graphics/comparisonLineChart";
import "./order-statistics.css";

const OrderStatisticsPage = () => {
  const [selectTypeDate, setSelectTypeDate] = useState("day");

  const topData = [
    {
      id: 1,
      name: "Пицца",
      count: "125",
    },
    {
      id: 2,
      name: "Бургеры",
      count: "105",
    },
    {
      id: 3,
      name: "Паста",
      count: "102",
    },
    {
      id: 4,
      name: "Паэлья",
      count: "95",
    },
    {
      id: 5,
      name: "Борщ",
      count: "89",
    },
    {
      id: 6,
      name: "Роллы",
      count: "82",
    },
    {
      id: 7,
      name: "Луковый суп",
      count: "75",
    },
    {
      id: 8,
      name: "Пельмени",
      count: "70",
    },
    {
      id: 9,
      name: "Рататуй",
      count: "68",
    },
    {
      id: 10,
      name: "Тирамису",
      count: "45",
    },
    {
      id: 11,
      name: "Торт",
      count: "25",
    },
  ];
  //   const userRights = JSON.parse(localStorage.getItem("neobisHUBDate"));

  //   useEffect(() => {
  //     getData(`news/update_delete/${props.match.params.id}/`).then((res) => {
  //       setArticle(res);
  //       setLoading(true);
  //     });
  //   }, [props.match.params.id]);

  return (
    <main className="wrapper">
      <Title>Статистика заказов</Title>
      <div className="totals">
        <ResultBlock text="ВСЕ ЗАКАЗЫ" result={42054} orderStatistics={true} />
        <ResultBlock text="ЗА МЕСЯЦ" result={5452} orderStatistics={true} />
        <ResultBlock text="ЗА НЕДЕЛЮ" result={932} orderStatistics={true} />
        <ResultBlock text="ЗА СЕГОДНЯ" result={72} orderStatistics={true} />
      </div>

      <div className="flex">
        <div className="reports-block">
          <div className="reports-block-header">
            <h4 className="m-0">Отчет заказов</h4>
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
              firstData={[45, 31, 24, 37, 53, 111, 94]}
              secondData={[67, 76, 21, 65, 65, 0, 0]}
            />
          ) : selectTypeDate === "week" ? (
            <ComparisonLineChart
              firstData={[182, 208, 96]}
              secondData={[126, 236, 176, 207, 98]}
            />
          ) : (
            <BarChart />
          )}
        </div>
        <TopBlock name="Топ блюд" data={topData} money={false} />
        {/* <TopBlock name="Топ официантов" data={topData} money={false} /> */}
        {/* Последние заказы (активные и не активные*/}
      </div>
    </main>
  );
};
export default OrderStatisticsPage;
