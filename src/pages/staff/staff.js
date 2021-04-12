import React, { useEffect, useState } from "react";
import Title from "../../components/title/title";
import { getData } from "../../functions/requests";
import { userStatus } from "../../constants/status";
import { confirmAlert } from "../../functions/alert";
import Loading from "../../components/loading/loading";
// import sortsIcon from "./../../assets/icons/Polygon 5.png";
import activeIcon from "./../../assets/icons/Ellipse 43.svg";
import noActiveIcon from "./../../assets/icons/Ellipse 44.svg";
import { Link } from "react-router-dom";
import "./staff.css";

const UsersPage = () => {
  const [staff, setStaff] = useState([]);
  const [role, setRole] = useState("false");
  const [status, setStatus] = useState("false");
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    getData("staff/").then((res) => {
      setStaff(res);
      console.log("res", res);
      setLoading(true);
    });
  }, []);

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

  console.log("staff", staff);
  return (
    <div className="wrapper">
      <Title search={true} setSearchText={setSearchText} line={true}>
        Сотрудники
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
        <Link to={`/add-employee/`} className="add-btn">
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
                <span>Ф. И. О.</span>
              </th>
              <th className={"thead-item"}>
                <span>Должность </span>
              </th>
              <th className={"thead-item "}>
                <span>Номер телефона </span>
              </th>
              {/* <th className={"thead-item "}>
                <span>Email </span>
              </th> */}
              <th className={"thead-item"}>
                <span>Логин </span>
              </th>
              <th className={"thead-item "}>
                <span>Зарплата </span>
              </th>

              {/*  {userRights.add_project ? ( */}
              <th className={"thead-item "}>
                <span>Статус</span>
              </th>
              {/* ) : null}  */}
            </tr>
          </thead>
          <tbody className={"tbody"}>
            {staff.length > 0 ? (
              staff.map((employee, i) => (
                <tr key={employee._id}>
                  <td data-th="№" className={"tbody-item"}>
                    {i + 1}
                  </td>
                  <td data-th="Ф.И.О" className={"tbody-item table-Username"}>
                    <Link to={`/employee/${employee._id}/`}>
                      {employee.name}
                    </Link>
                  </td>
                  <td data-th="Должность" className={"tbody-item"}>
                    {employee.post}
                  </td>
                  <td data-th="Номер телефона" className={"tbody-item"}>
                    {employee.phoneNumber}
                  </td>
                  {/* <td data-th="Email" className={"tbody-item"}>
                    {user.phone}
                  </td> */}
                  <td data-th="Логин" className={"tbody-item"}>
                    {employee.login}
                  </td>
                  <td data-th="Зарплата" className={"tbody-item"}>
                    {employee.salary} сом
                  </td>
                  {/* <td data-th="Статус" className={"tbody-item"}>
                    {user.finished_projects_count}
                  </td> */}
                  {/* {userRights.add_project ? ( */}
                  <td data-th="Статус" className={"tbody-item"}>
                    {/* <img
                        src={employee.name ? activeIcon : noActiveIcon}
                        alt="user status"
                      /> */}
                    Активный
                  </td>
                  {/* // ) : null} */}
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
export default UsersPage;
