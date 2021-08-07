import React, { useState } from "react";

import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isEditing, setEditing] = useState(false);

  const savedExpenseHandler = (enteredExpense) => {
    const savedExpenses = {
      ...enteredExpense,
      id: Math.random().toString(),
    };
    props.onSaveNewExpense(savedExpenses);
    setEditing(false)
  };

  const startEditing = () => {
    setEditing(true);
  };

  const stopEditingHandler = () =>{
      setEditing(false)
  }
  return (
    <div className="new-expense">
      {!isEditing && <button onClick={startEditing}>Add New Expense</button>}
      {isEditing && <ExpenseForm stopEditingHandler={stopEditingHandler} onSaveExpenseForm={savedExpenseHandler} />}
    </div>
  );
};

export default NewExpense;
