import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
// import neobisLogo from "./../../assets/logo/logo.svg";
// import peopleImg from "./../../assets/img/people.png";
// import userIcon from "./../../assets/navbar-icon/user.svg";
import Logo from "./../../assets/navbar-icon/CRM Cafe.svg";
// import newsIcon from "./../../assets/navbar-icon/news 2.svg";
// import usersIcon from "./../../assets/navbar-icon/users 1.svg";
// import projectIcon from "./../../assets/navbar-icon/layers 1.svg";
// import departmentIcon from "./../../assets/navbar-icon/graduation 1.svg";
import Swal from "sweetalert2";
import "./navbar.css";

const NavBar = () => {
  const history = useHistory();

  const Links = [
    { id: 1, to: "/order-statistics/", name: "Заказы" },
    { id: 2, to: "/proceeds/", name: "Выручка" },
    { id: 3, to: "/profit/", name: "Прибыль" },
    { id: 4, to: "/expenses/", name: "Расходы" },
    { id: 5, to: "/by-department/", name: "По отделам" },
    { id: 6, to: "/transaction-history/", name: "История транзакций" },
    { id: 7, to: "/orders-history/", name: "История заказов" },
    { id: 8, to: "/staff/", name: "Сотрудники" },
    { id: 9, to: "/departments/", name: "Отделы" },
    { id: 10, to: "/categories/", name: "Категории" },
    { id: 11, to: "/food-drinks/", name: "Блюда и напитки" },
    { id: 12, to: "/ingredients/", name: "Ингредиенты" },
    { id: 13, to: "/tables/", name: "Столы" },
    { id: 14, to: "/booking/", name: "Бронирование" },
  ];

  const activeLink = Links.filter(
    (link) => history.location.pathname === link.to
  );
  console.log("activeLink", activeLink);
  const [activeLinkId, setActiveLinkId] = useState(
    activeLink.length > 0 && activeLink[0].id
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // history.listen(() => {
  //   const randomNumber = Math.floor(Math.random() * quoteTexts.length);
  //   setActiveQuoteTextInDex(randomNumber);
  // });

  const confirmMessage = () => {
    Swal.fire({
      title: "Вы уверены?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#32b482",
      cancelButtonColor: "#d33",
      cancelButtonText: "Нет",
      confirmButtonText: "Да, выйти",
    }).then((result) => {
      if (result.value) {
        localStorage.removeItem("crmCAFEDate");
        window.location.href = "/";
      }
    });
  };

  // const quoteTexts = [
  //   "«Чтобы понять код мидла, нужно быть мидлом. Чтобы понять код сеньора, достаточно быть джуном»",
  //   "«Чтобы стать царем зверей, мало вести себя по-царски, надо быть царем!»",
  //   "«Чтобы стать царем зверей, мало вести себя по-царски, надо быть царем!»",
  //   "«Аккуратный программист — быстрый программист»",
  //   "«Сегодня ты делаешь код, завтра код делает тебе деньги»",
  //   "«Если твой код работает, значит это хороший код»",
  //   "«Настоящий программист гораздо больше читает, чем пишет»",
  //   "«Скорость имеет значение»",
  //   "«Кофе не помогает программировать, зато он приятен на вкус»",
  //   "«Идеальному коду место в музее: там ценят всякие древности»",
  //   "«Не экономьте на дизайне: конечный пользователь ровным счётом ничего не понимает в программировании»",
  //   "«Проще отучить собаку лаять на почтальона, чем отучить админа работать под рутом»",
  //   "«Если ваша работа не документирована, значит вы не работали»",
  //   "«Комментарии в коде должны быть похожими на кружевные трусики: маленькими, прозрачными, и оставляющими достаточно места для воображения»",
  // ];
  // let id = JSON.parse(localStorage.getItem("neobisHUBDate")).user_id;

  return (
    <aside>
      <nav className="navigationComponent">
        <Link to={"/order-statistics/"}>
          <img src={Logo} className="crm-cafe__Logo" alt="crm-cafe__Logo" />
        </Link>
        {Links.map((link) => (
          <Link
            key={link.id}
            to={link.to}
            onClick={() => setActiveLinkId(link.id)}
            className={`categories ${
              link.id === activeLinkId ? "active-link" : ""
            }`}
          >
            {link.name}
          </Link>
        ))}

        {/* <Link to={"/order-statistics/"} className="categories">
          Заказы
        </Link>
        <Link to={"/proceeds/"} className="categories">
          Выручка
        </Link>
        <Link to={"/profit/"} className="categories">
          Прибыль
        </Link> */}
        {/* <Link to={"/bar"} className="categories">
          Затраты
        </Link> */}
        {/* <Link to={"/kitchen"} className="categories">
          Департаменты
        </Link>
        <Link to={"/transactions"} className="categories">
          История транзакций
        </Link>
        <Link to={"/users"} className="categories">
          Сотрудники
        </Link>
        <Link to={"/category"} className="categories">
          Категории
        </Link>
        <Link to={"/meals"} className="categories">
          Блюда и напитки
        </Link>
        <Link to={"/tables"} className="categories">
          Столы
        </Link>
        <Link to={"/reservations"} className="categories">
          Бронирование
        </Link> */}
        {/* <Link to={"/news/1/"} className="categories">
        <img src={newsIcon} alt="newsIcon" />
        Новости
      </Link> */}
        {/* <Link to={`/personal/${id}/`} className="categories">
        <img src={userIcon} alt="newsIcon" />
        Личный кабинет
      </Link> */}
        {/* <Link to={"/users/"} className="categories">
        <img src={usersIcon} alt="usersIcon" />
        Пользователи
      </Link>
      <Link to={"/departments/"} className="categories">
        <img src={departmentIcon} alt="departmentIcon" />
        Департаменты
      </Link>
      <Link to={"/projects/1/"} className="categories">
        <img src={projectIcon} alt="projectIcon" />
        Проекты
      </Link> */}
        <div className="categories" onClick={confirmMessage}>
          Выйти
        </div>
        {/* <div className="quote-block">
        <span>{quoteTexts[activeQuoteTextInDex]}.</span>
        <img src={peopleImg} alt="peopleImg" />
      </div> */}
      </nav>
    </aside>
  );
};

// const NavLink = ({ to, name }) => {
//   const history = useHistory();
//   let className = 'categories';

//   history.listen(() => {
//     const isActive = history.location.pathname === to;
//     className = isActive ? "active-link categories" : "categories";
//   });

//   return (
//     <Link to={to} className={className}>
//       {name}
//     </Link>
//   );
// };
export default NavBar;
