import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense(props) {
  const onSaveExpenseHandler = (userEnteredData) => {
    props.onAddExpense(userEnteredData);
  };

  const [isEditing, setIsEditing] = useState("false");

  const onAddExpenseClick = () => {
    setIsEditing("true");
  };

  const onCancelClick = (isEditing) => {
    setIsEditing(isEditing);
  };

  if (isEditing === "false") {
    return (
      <div className="new-expense">
        <button onClick={onAddExpenseClick}>Add New Expense</button>
      </div>
    );
  }
  return (
    <div className="new-expense">
      <ExpenseForm
        onSaveExpense={onSaveExpenseHandler}
        onCancel={onCancelClick}
      />
    </div>
  );
}
export default NewExpense;
