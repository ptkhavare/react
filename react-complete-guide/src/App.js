import logo from "./logo.svg";
import "./App.css";
import ExpenseItem from "./components/ExpenseItem";

function App() {
  const ExpenseItems = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        title={ExpenseItems[0].title}
        amount={ExpenseItems[0].amount}
        date={ExpenseItems[0].date}
      />
      <ExpenseItem
        title={ExpenseItems[1].title}
        amount={ExpenseItems[1].amount}
        date={ExpenseItems[1].date}
      />
      <ExpenseItem
        title={ExpenseItems[2].title}
        amount={ExpenseItems[2].amount}
        date={ExpenseItems[2].date}
      />
      <ExpenseItem
        title={ExpenseItems[3].title}
        amount={ExpenseItems[3].amount}
        date={ExpenseItems[3].date}
      />
    </div>
  );
}

export default App;
