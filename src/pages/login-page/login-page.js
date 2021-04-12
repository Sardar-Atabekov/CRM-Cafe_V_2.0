import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import LoginImg from "./../../assets/img/OBJECT.png";
// import neobisLogo from "./../../assets/logo/neobisHub.svg";
import { postDataNoToken } from "../../functions/requests";
// import { Button, FormGroup, Form, Input } from "reactstrap";
import "./login-page.css";

const LoginPage = () => {
  const [error, setError] = useState(false);
  const [errorText, setErrorText] = useState("Неправильный логин или пароль");
  const postUserData = (e) => {
    e.preventDefault();
    let formData = new FormData(e.target),
      data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });
    console.log(data);
    postDataNoToken("/login/", data)
      .then((response) => {
        console.log(response);
        if (response.token) {
          localStorage.setItem("crmCAFEDate", JSON.stringify(response));
          setTimeout(() => (window.location.href = `/staff/`), 500);
        } else {
          setErrorText(response.message);
          setError(true);
        }
      })
      .catch(() => setError(true));
  };

  // if (localStorage.getItem("neobisHUBDate")) {
  //   props.history.push(`/news/1/`);
  // }
  return (
    <div className="loginWrapper">
      <div className="login">
        <h1 className="welcome">CRM Cafe v 2.0</h1>
        <form className="loginForm" onSubmit={postUserData}>
          <input
            className="loginInput"
            type="text"
            placeholder="Логин"
            name="login"
            required
          />
          <br />
          <input
            className="loginInput"
            type="password"
            placeholder="Пароль"
            name="password"
            required
          />
          {error ? (
            <div className="loginErrorMessage">{errorText}</div>
          ) : (
            <br />
          )}
          <br />
          <input className="loginInput loginBtn" value="Войти" type="submit" />
        </form>
      </div>
    </div>
  );
};
export default LoginPage;
