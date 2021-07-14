import React, { useState } from "react";

// Importing SASS Styles
import "../../scss/ExpenseForm.scss";

function ExpenseForm() {
  //   const [enteredTitle, setEnteredTitle] = useState("");
  //   const [enteredAmount, setEnteredAmount] = useState("");
  //   const [enteredDate, setEnteredDate] = useState("");

  // using one state Method instead of multiple States
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  const titleChangeHandler = (event) => {
    // using multiple useState
    //   setEnteredTitle(event.target.value);
    ////////////////////////
    // using one state Method instead of multiple useState
    setUserInput({
      ...userInput, // spread operator
      enteredTitle: event.target.value,
    });
  };

  const amountChangeHandler = (event) => {
    // using multiple useState
    //setEnteredAmount(event.target.value);
    ////////////////////////
    // using one state Method instead of multiple useState
    setUserInput({
      ...userInput, // spread operator
      enteredAmount: event.target.value,
    });
  };

  const dateChangeHandler = (event) => {
    // using multiple useState
    //setEnteredDate(event.target.value);
    ////////////////////////
    // using one state Method instead of multiple useState
    setUserInput({
      ...userInput, // spread operator
      enteredDate: event.target.value,
    });
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;