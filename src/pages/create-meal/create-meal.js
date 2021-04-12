import React, { useState, useEffect } from "react";
import Title from "../../components/title/title";

import Loading from "../../components/loading/loading";
import Alert, { confirmAlert } from "../../functions/alert";
import { getData, postData } from "../../functions/requests";

const AddIngredient = (props) => {
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
    postData("create-meal", data)
      .then((response) => {
        if (response.success) {
          Alert("Блюда создан");
          setTimeout(() => props.history.push(`/food-drinks/`), 1000);
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
      <Title>Создания блюд </Title>
      {/* {loading ? ( */}
      <form className="input-blocks pt-4" onSubmit={postUserData}>
        <div className="form-group">
          <label htmlFor="name">Названия</label>
          <input
            type="text"
            name="name"
            className="form-control"
            id="name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="cost">Стоимость (в сомах)</label>
          <input
            type="number"
            name="cost"
            id="cost"
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="amountPortion">Количество</label>
          <input
            type="number"
            name="amountPortion"
            className="form-control"
            defaultValue={0}
            id="amountPortion"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="category">Категория</label>
          <br />
          <select
            id="category"
            className="select form-control"
            name="category"
            defaultValue=""
            required
          >
            <option value="" disabled>
              Выберите категорию
            </option>
            {/* {departments.map((department) => (
                <option value={department.id}>
                  {department.name}
                </option>
              ))} */}
            <option value={"1-вариант"}>1-вариант</option>
            <option value={"2-вариант"}>2-вариант</option>
            <option value={"3-вариант"}>3-вариант</option>
          </select>
        </div>
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
export default AddIngredient;
