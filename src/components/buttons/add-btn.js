import React from "react";
import { Link } from "react-router-dom";
import "./buttons.css";

const AddBtn = ({ url, text = "Создать", className = "" }) => {
  return (
    <div className={`add-btn-block ${className}`}>
      <Link to={`/${url}/`} className={`add-btn`}>
        {text}
      </Link>
    </div>
  );
};
export default AddBtn;
