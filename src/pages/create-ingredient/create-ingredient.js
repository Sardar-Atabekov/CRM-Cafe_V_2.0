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
    postData("create-ingredient", data)
      .then((response) => {
        if (response.success) {
          Alert("Ингридиент добавлен");
          setTimeout(() => props.history.push(`/ingredients/`), 1000);
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
      <Title>Создание ингридиента </Title>
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
          <label htmlFor="cost">Стоимость</label>
          <input
            type="number"
            name="cost"
            id="cost"
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount">Количество</label>
          <input
            type="number"
            name="amount"
            className="form-control"
            defaultValue={0}
            id="amount"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="unitMeasurement">Ед. измерение</label>
          <br />
          <select
            id="unitMeasurement"
            className="select form-control"
            name="unitMeasurement"
            defaultValue=""
            required
          >
            <option value="" disabled>
              Выберите ед. измерение
            </option>
            {/* {departments.map((department) => (
                <option value={department.id}>
                  {department.name}
                </option>
              ))} */}
            <option value={"kg"}>кг</option>
            <option value={"l"}>литр</option>
            <option value={"p"}>штук</option>
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
