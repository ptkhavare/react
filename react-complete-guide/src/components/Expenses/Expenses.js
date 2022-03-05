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

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onYearSelect={onYearSelectHandler}
      />
      {props.items.map((e) => (
        <ExpenseItem title={e.title} amount={e.amount} date={e.date} />
      ))}
      ;
    </Card>
  );
}
export default Expenses;
