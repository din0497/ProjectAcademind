import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/Expenses/NewExpense/NewExpense";
const DUMMY_Expenses = [
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
  {
    id: "e5",
    title: "Trash",
    amount: "500",
    date: new Date(2021, 4, 14),
  },
];

function App() {
  const [expense, setExpense] = useState(DUMMY_Expenses);
  const addExpenseHandler = (newForm) => {
    setExpense((prevExpenses) => {
      return [newForm, ...prevExpenses];
    });
    console.log('App.js')
  };
  return (
    <div>
      <NewExpense  onSaveNewExpense={addExpenseHandler} />
      <Expenses expenses={expense} />
    </div>
  );
}

export default App;
