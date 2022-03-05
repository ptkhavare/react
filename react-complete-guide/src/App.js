import logo from "./logo.svg";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";


function App() {
  const [expenses,setExpenses] = useState([]);
  
  const onAddExpenseHandler = (addedExpenseData) => {
    setExpenses(prevExpenses => {
      return [...prevExpenses, addedExpenseData];
    })
  };

  return (
    <div>
      <NewExpense onAddExpense={onAddExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
