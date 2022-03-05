import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense(props) {

    const onSaveExpenseHandler = (userEnteredData) => {
    
        console.log("In New Expense");
        console.log(userEnteredData);
        props.onAddExpense(userEnteredData);
    }

    return (
      <div className="new-expense">
        <ExpenseForm onSaveExpense={onSaveExpenseHandler} />
      </div>
    );
}
export default NewExpense;
