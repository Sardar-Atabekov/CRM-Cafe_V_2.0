import React, { useEffect, useState } from "react";
import Title from "../../components/title/title";
import { getData, deleteData } from "../../functions/requests";
import { userStatus } from "../../constants/status";
import Alert, { confirmAlert, deleteAlert } from "../../functions/alert";
import Loading from "../../components/loading/loading";
// import sortsIcon from "./../../assets/icons/Polygon 5.png";
import editIcon from "./../../assets/icons/editIcon.svg";
import deleteIcon from "./../../assets/icons/deleteIcon.svg";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
const FoodDrinksPage = (props) => {
  const [role, setRole] = useState("false");
  const [status, setStatus] = useState("false");
  const [loading, setLoading] = useState(false);
  const [foodDrinks, setFoodDrinks] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    getMeals();
  }, []);

  const getMeals = () => {
    getData("food-drinks/")
      .then((res) => {
        setFoodDrinks(res);
        setLoading(true);
      })
      .catch(() =>
        confirmAlert("Ошибка сервера. Напишите нам, мы всё починим.")
      );
  };

  const deleteMessage = (name, id) => {
    Swal.fire({
      title: `Вы уверены что хотите удалить блюду ${name}?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#32b482",
      cancelButtonText: "Отмена",
      confirmButtonText: "Удалить",
    }).then((result) => {
      if (result.value) {
        Alert("Ингредиент успешно удалена");
        deleteData(`delete-meal/${id}/`).then(() => getMeals());
      }
    });
  };
  // useEffect(() => {
  //   setLoading(false);
  //   getData(
  //     `user/?${department !== "false" ? `department=${department}` : ""}${
  //       role !== "false" ? `&&status=${role}` : ""
  //     }${status !== "false" ? `&&user__is_active=${status}` : ""}${
  //       searchText && `&&search=${searchText}`
  //     }&&page_size=9`
  //   ).then((res) => {
  //     setUsersData(res);
  //     setLoading(true);
  //   });
  // }, [role, status, department, searchText]);

  // useEffect(() => {
  //   let filteredUsers = users.sort(
  //     (a, b) => a.active_projects_count - b.active_projects_count
  //   );
  //   filteredUsers = sortActiveProjects
  //     ? filteredUsers.reverse()
  //     : filteredUsers;
  //   setUsersData([...filteredUsers]);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [sortActiveProjects]);

  // useEffect(() => {
  //   console.log("change");
  //   let filteredUsers = users.sort(
  //     (a, b) => a.finished_projects_count - b.finished_projects_count
  //   );
  //   filteredUsers = sortFinishedProjects
  //     ? filteredUsers.reverse()
  //     : filteredUsers;
  //   setUsersData([...filteredUsers]);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [sortFinishedProjects]);

  let unitMeasurement = {
    kg: "кг",
    l: "литр",
    p: "штук",
  };
  return (
    <div className="wrapper">
      <Title search={true} setSearchText={setSearchText} line={true}>
        Блюда и напитки
      </Title>
      <div className="add-btn-block">
        <div className="mr-2 mb-0">
          <select
            defaultValue={role}
            className="select form-control"
            onChange={(e) => setRole(e.target.value)}
          >
            <option value={"false"}>Департамент</option>
            <option value="h">Кухня</option>
            <option value="m">Бар</option>
            <option value="t">Кофейня</option>
          </select>
        </div>
        <div className="mr-2 mb-0">
          <select
            defaultValue={status}
            className="select form-control"
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="false">Категория</option>
            <option value={"True"}>В процессе</option>
            <option value={"False"}>В процессе</option>
          </select>
        </div>
        {/* {userRights.add_user ? ( */}
        <Link to={`/create-meal/`} className="add-btn">
          Создать
        </Link>
        {/* // ) : null} */}
      </div>

      {loading ? (
        <table striped className={"mb-5 table-3 tables"}>
          <thead>
            <tr>
              <th className={"thead-item"}>
                <span>№</span>
              </th>
              <th className={"thead-item"}>
                <span>Названия</span>
              </th>
              <th className={"thead-item"}>
                <span>Категория </span>
              </th>
              <th className={"thead-item "}>
                <span>Цена </span>
              </th>
              <th className={"thead-item "}>
                <span>Порция </span>
              </th>
              <th className={"thead-item "} colSpan="2">
                <span>Операция </span>
              </th>
              {/* <th className={"thead-item "}>
                <span>Статус</span>
              </th> */}
              {/* ) : null}  */}
            </tr>
          </thead>
          <tbody className={"tbody"}>
            {foodDrinks.length > 0 ? (
              foodDrinks.map((item, i) => (
                <tr key={item._id}>
                  <td data-th="№" className={"tbody-item"}>
                    {i + 1}
                  </td>
                  <td
                    data-th="Названия"
                    className={"tbody-item table-Username"}
                  >
                    <Link to={`/edit-meal/${item._id}/`}>{item.name}</Link>
                  </td>
                  <td data-th="Категория" className={"tbody-item"}>
                    {item.category}
                  </td>
                  <td data-th="Цена" className={"tbody-item"}>
                    {item.cost} сом
                  </td>
                  <td data-th="Порция" className={"tbody-item"}>
                    {item.amountPortion}
                  </td>
                  <td
                    data-th="Изменение"
                    className={"tbody-item icon-action__block"}
                  >
                    <Link to={{ pathname: `/edit-meal/${item._id}/` }}>
                      <img src={editIcon} alt="editIcon" />
                    </Link>
                  </td>
                  <td
                    data-th="Удаление"
                    className={"tbody-item icon-action__block"}
                  >
                    <img
                      src={deleteIcon}
                      alt="deleteIcon"
                      onClick={() => {
                        // deleteAlert(
                        //   `Вы уверены что хотите удалить ингредиент ${item.name}?`,
                        //   "Ингредиент успешно удален",
                        //   `/delete-item/${item._id}`,
                        //   getitems,
                        //   "/items",
                        //   props
                        // );
                        deleteMessage(item.name, item._id);
                      }}
                    />
                  </td>
                  {/* <td data-th="Статус" className={"tbody-item"}>
                    Активный
                  </td> */}
                </tr>
              ))
            ) : (
              <tr className="no-filter-Data">
                <td colSpan="9">Нет данных по этим параметрам</td>
              </tr>
            )}
          </tbody>
        </table>
      ) : (
        <Loading />
      )}
    </div>
  );
};
export default FoodDrinksPage;
