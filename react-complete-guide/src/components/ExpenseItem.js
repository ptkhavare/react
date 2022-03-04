import React from "react";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  //only one root component allowed in jsx
  return (
    <div className="expense-item">
      <div>{props.date.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
    </div>
  );
}
export default ExpenseItem;
