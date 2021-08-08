import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  // const info = {
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // };

  const [enteredTitle, setUserTitle] = useState("");
  const [enteredAmount, setUserAmount] = useState("");
  const [enteredDate, setUserDate] = useState("");

  const titleChangeHandler = (event) => {
    setUserTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setUserAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setUserDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseForm(expenseData);
    setUserAmount("");
    setUserTitle("");
    setUserDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            onChange={amountChangeHandler}
            value={enteredAmount}
            type="number"
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            onChange={dateChangeHandler}
            value={enteredDate}
            type="date"
            min="2019-01-01"
            max="2022-12-31"
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.stopEditingHandler}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
