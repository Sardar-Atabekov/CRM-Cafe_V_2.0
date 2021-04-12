import React, { useState, useEffect } from "react";
import Title from "../../components/title/title";

import Loading from "../../components/loading/loading";
import Alert, { confirmAlert } from "../../functions/alert";
import { getData, postData } from "../../functions/requests";
import "./add-employee.css";

const AddEmployee = (props) => {
  const [loading, setLoading] = useState(false);
  const [departments, setDepartments] = useState([]);

  const postUserData = (e) => {
    e.preventDefault();
    let formData = new FormData(e.target),
      data = {};
    console.log(formData);
    formData.forEach((value, key) => {
      data[key] = value;
    });

    // data.role = 5;
    postData("create-employee", data)
      .then((response) => {
        console.log("response", response);
        if (response.success) {
          Alert("Сотрудник добавлен");
          setTimeout(() => props.history.push(`/staff/`), 1000);
        } else {
          Alert(response.message, "error");
        }
      })
      .catch(() =>
        confirmAlert("Ошибка сервера. Напишите нам, мы всё починим.")
      );
  };

  return (
    <div className="wrapper">
      <Title>Создание пользователя </Title>
      {/* {loading ? ( */}
      <form className="input-blocks pt-4" onSubmit={postUserData}>
        <div className="form-group">
          <label htmlFor="name">Ф. И. О. </label>
          <input
            type="text"
            name="name"
            className="form-control"
            id="name"
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
            defaultValue=""
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
          />
        </div>
        <div className="form-group">
          <label htmlFor="login">Логин</label>
          <input
            type="text"
            name="login"
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
            className="form-control"
            id="salary"
            required
          />
        </div>
        {/* <div className="form-group">
          <label htmlFor="status">Роль</label>
          <br />
          <select id="status" className="select form-control" name="status">
            <option value="h">Мембер</option>
            <option value="m">Ментор</option>
            <option value="t">Тимлид</option>
          </select>
        </div> */}
        {/* <div className="form-group">
          <label htmlFor="role">Права</label>
          <br />
          <select
            id="role"
            className="select form-control"
            name="role"
            defaultValue="4"
          >
            <option value="1">Менеджер клуба</option>
            <option value="2">Координатор проектов</option>
            <option value="3">Тимлид</option>
            <option value="4">Обычный пользователь</option>
          </select>
        </div> */}
        <div className="text-right">
          <input
            type="submit"
            className="btn add-btn w-50 mt-5"
            value="Сохранить"
          />
        </div>
      </form>
      {/* ) : (
        <Loading />
      )} */}
    </div>
  );
};
export default AddEmployee;
