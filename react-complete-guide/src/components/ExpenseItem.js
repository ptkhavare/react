import React from "react";
import "./ExpenseItem.css";

function ExpenseItem() {
  const expenseDate = new Date(2022,3,23);
  const expenseTitle = "Car Policy";
  const expenseAmt = 254.34;

  //only one root component allowed in jsx
  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">{expenseAmt}</div>
      </div>
    </div>
  );
}
export default ExpenseItem;
