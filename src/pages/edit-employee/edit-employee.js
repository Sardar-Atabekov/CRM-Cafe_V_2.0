import React, { useEffect, useState } from "react";
import Title from "../../components/title/title";
import Loading from "../../components/loading/loading";
import Alert, { confirmAlert } from "../../functions/alert";
import DeleteBtn from "../../components/buttons/deleteBtn";
import { getData, patchData, postData } from "../../functions/requests";
import "./edit-employee.css";
const EditUserPage = (props) => {
  const [tests, setTests] = useState([]);
  const [employeeData, setEmployeeData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [departments, setDepartments] = useState([]);

  // useEffect(() => {
  //   getData("department/")
  //     .then((res) => {
  //       console.log(res);
  //       setDepartments(res);
  //     })
  //     .catch(() =>
  //       confirmAlert("Ошибка сервера. Напишите нам, мы всё починим.")
  //     );
  // }, []);

  useEffect(() => {
    getData(`staff/${props.match.params.id}/`)
      .then((res) => {
        let isActive = `${res.is_active}`;
        let firstSymbol = isActive[0].toUpperCase(),
          symbol = isActive.substring(1, isActive.length);
        isActive = firstSymbol.concat(symbol);
        res.is_active = isActive;
        setEmployeeData(res);
        setLoading(true);
        setTests(res.progress);
      })
      .catch(() =>
        confirmAlert("Ошибка сервера. Напишите нам, мы всё починим.")
      );
  }, [props.match.params.id]);

  const postEmployeeData = (e) => {
    e.preventDefault();
    let formData = new FormData(e.target),
      data = {};
    console.log(formData);
    formData.forEach((value, key) => {
      data[key] = value;
    });

    patchData(`staff-update/${props.match.params.id}/`, data)
      .then((response) => {
        if (response.success) {
          Alert("Данные сотрудника обновлены");
          setTimeout(() => props.history.push(`/staff/`), 1000);
        } else {
          Alert(response.message, "error");
        }
      })
      .catch(() =>
        confirmAlert("Ошибка сервера. Напишите нам, мы всё починим.")
      );
  };

  console.log("EmployeeData", employeeData);
  return (
    <div className="wrapper">
      <Title>Редактировать данные сотрудника</Title>
      {loading ? (
        <form className="d-flex" onSubmit={postEmployeeData}>
          <div className="input-blocks mt-4">
            <div className="form-group">
              <label htmlFor="name">Ф. И. О. </label>
              <input
                type="text"
                name="name"
                className="form-control"
                id="name"
                defaultValue={employeeData.name}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="post">Должность</label>
              <br />
              <select
                id="post"
                className="select form-control"
                name="post"
                defaultValue={employeeData.post}
                required
              >
                <option value="" disabled>
                  Выберите должность
                </option>
                {/* {departments.map((department) => (
                <option value={department.id}>
                  {department.name}
                </option>
              ))} */}
                <option value={"Админ"}>Админ</option>
                <option value={"Повар"}>Повар</option>
                <option value={"Бармен"}>Бармен</option>
                <option value={"Продавец"}>Продавец</option>
                <option value={"Официант"}>Официант</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="phoneNumber">Номер телефона </label>
              <input
                type="text"
                name="phoneNumber"
                className="form-control"
                id="phoneNumber"
                required
                defaultValue={employeeData.phoneNumber}
              />
            </div>
            <div className="form-group">
              <label htmlFor="login">Логин</label>
              <input
                type="text"
                name="login"
                defaultValue={employeeData.login}
                className="form-control"
                id="login"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Пароль </label>
              <input
                type="text"
                name="password"
                className="form-control"
                id="password"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="salary">Зарплата </label>
              <input
                type="number"
                name="salary"
                defaultValue={employeeData.salary}
                className="form-control"
                id="salary"
                required
              />
            </div>

            <div className="buttons-block">
              <DeleteBtn
                title={`Вы уверены что хотите удалить пользователя ${
                  employeeData.name ? employeeData.name : ""
                }?`}
                subTitle="Пользователь удален"
                url={`user/delete/${employeeData.id}/`}
                toUrl={"/users/"}
                className="w-50"
                props={props}
              />

              <input type="submit" className="btn add-btn" value="Сохранить" />
            </div>
          </div>

          {/* <div className="button-block mt-auto w-30 ps-20">
            <DeleteBtn
              title={`Вы уверены что хотите удалить пользователя ${
                EmployeeData.name ? EmployeeData.name : ""
              }?`}
              subTitle="Пользователь удален"
              url={`user/delete/${EmployeeData.id}/`}
              toUrl={"/users/"}
              props={props}
            />

            <input type="submit" className="btn add-btn" value="Сохранить" />
          </div> */}
        </form>
      ) : (
        <Loading />
      )}
    </div>
  );
};
export default EditUserPage;
