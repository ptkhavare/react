import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense(props) {

    const onSaveExpenseHandler = (userEnteredData) => {
        props.onAddExpense(userEnteredData);
    }
    
    return (
      <div className="new-expense">
        <ExpenseForm onSaveExpense={onSaveExpenseHandler} />
      </div>
    );
}
export default NewExpense;
