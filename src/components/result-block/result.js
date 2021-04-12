import React from "react";
import "./result.css";

const ResultBlock = ({
  text,
  result,
  orderStatistics = false,
  className = "",
}) => {
  const currency = "Сом";

  return (
    <div className={`result-block ` + className}>
      <div className="result-container">
        <div className="result-text-center">
          <span>{text}</span>
          <h6 className="resultSum">{result}</h6>
          {orderStatistics ? null : <span>{currency}</span>}
        </div>
      </div>
    </div>
  );
};
export default ResultBlock;
