import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const onYearSelectHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((e) => {
    return e.date.getFullYear() === parseInt(filteredYear);
  });

  let expenseContent = <p>No expense found</p>;
  if (filteredExpenses.length > 0) {
    expenseContent = filteredExpenses.map((e) => (
      <ExpenseItem key={e.id} title={e.title} amount={e.amount} date={e.date} />
    ));
  }

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onYearSelect={onYearSelectHandler}
      />
      {expenseContent}
    </Card>
  );
}
export default Expenses;
