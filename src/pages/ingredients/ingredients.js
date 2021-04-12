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
const IngredientsPage = (props) => {
  const [role, setRole] = useState("false");
  const [status, setStatus] = useState("false");
  const [loading, setLoading] = useState(false);
  const [ingredients, setIngredients] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    getIngredients();
  }, []);

  const getIngredients = () => {
    getData("ingredients/")
      .then((res) => {
        setIngredients(res);
        setLoading(true);
      })
      .catch(() =>
        confirmAlert("Ошибка сервера. Напишите нам, мы всё починим.")
      );
  };

  const deleteMessage = (name, id) => {
    Swal.fire({
      title: `Вы уверены что хотите удалить ингредиент ${name}?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#32b482",
      cancelButtonText: "Отмена",
      confirmButtonText: "Удалить",
    }).then((result) => {
      if (result.value) {
        Alert("Ингредиент успешно удалена");
        deleteData(`delete-ingredient/${id}/`).then(() => getIngredients());
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
  console.log("ingredients", ingredients);
  return (
    <div className="wrapper">
      <Title search={true} setSearchText={setSearchText} line={true}>
        Ингредиенты
      </Title>
      <div className="add-btn-block">
        <div className="mr-2 mb-0">
          <select
            defaultValue={role}
            className="select form-control"
            onChange={(e) => setRole(e.target.value)}
          >
            <option value={"false"}>Должность</option>
            <option value="h">Админ</option>
            <option value="m">Повар</option>
            <option value="t">Бармен</option>
            <option value="t">Продавец</option>
          </select>
        </div>
        <div className="mr-2 mb-0">
          <select
            defaultValue={status}
            className="select form-control"
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="false">Статусы</option>
            <option value={"True"}>Активные</option>
            <option value={"False"}>Неактивные</option>
          </select>
        </div>
        {/* {userRights.add_user ? ( */}
        <Link to={`/create-ingredient/`} className="add-btn">
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
                <span>В складе </span>
              </th>
              <th className={"thead-item "}>
                <span>Ед измерение </span>
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
            {ingredients.length > 0 ? (
              ingredients.map((ingredient, i) => (
                <tr key={ingredient._id}>
                  <td data-th="№" className={"tbody-item"}>
                    {i + 1}
                  </td>
                  <td
                    data-th="Названия"
                    className={"tbody-item table-Username"}
                  >
                    <Link to={`/ingredient/${ingredient._id}/`}>
                      {ingredient.name}
                    </Link>
                  </td>
                  <td data-th="Количество" className={"tbody-item"}>
                    {ingredient.amount}
                  </td>
                  <td data-th="Ед измерение" className={"tbody-item"}>
                    {unitMeasurement[ingredient.unitMeasurement]}
                  </td>
                  <td
                    data-th="Изменение"
                    className={"tbody-item icon-action__block"}
                  >
                    <Link to={{ pathname: `/ingredient/${ingredient._id}/` }}>
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
                        //   `Вы уверены что хотите удалить ингредиент ${ingredient.name}?`,
                        //   "Ингредиент успешно удален",
                        //   `/delete-ingredient/${ingredient._id}`,
                        //   getIngredients,
                        //   "/ingredients",
                        //   props
                        // );
                        deleteMessage(ingredient.name, ingredient._id);
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
export default IngredientsPage;
