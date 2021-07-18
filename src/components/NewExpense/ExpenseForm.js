import React, { useState } from "react";

// Importing SASS Styles
import "../../scss/ExpenseForm.scss";

function ExpenseForm(props) {
  // using multiple useState in multiple Variables
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // using one state Method instead of multiple useState
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  const titleChangeHandler = (event) => {
    // using multiple useState
    setEnteredTitle(event.target.value);
    ////////////////////////
    // using one state Method instead of multiple useState
    // this way is not a good practice, because it might fail
    // setUserInput({
    //   ...userInput, // spread operator
    //   enteredTitle: event.target.value,
    // });
    // the more efficient way would be function inside a function
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };

  const amountChangeHandler = (event) => {
    // using multiple useState
    setEnteredAmount(event.target.value);
    ////////////////////////
    // using one state Method instead of multiple useState
    // this way is not a good practice, because it might fail
    // setUserInput({
    //   ...userInput, // spread operator
    //   enteredAmount: event.target.value,
    // });
    // the more efficient way would be function inside a function
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredAmount: event.target.value };
    // });
  };

  const dateChangeHandler = (event) => {
    // using multiple useState
    setEnteredDate(event.target.value);
    ////////////////////////
    // using one state Method instead of multiple useState
    //  this way is not a good practice, because it might fail
    // setUserInput({
    //   ...userInput, // spread operator
    //   enteredDate: event.target.value,
    // });
    // the more efficient way would be function inside a function
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredDate: event.target.value };
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    // The two way Binding to clear the input of the user after he/she submits
    // Step 1
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
    // step 2 you add a value into the input you wanna reset after a submission Example: value={enteredTitle}
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
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
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
