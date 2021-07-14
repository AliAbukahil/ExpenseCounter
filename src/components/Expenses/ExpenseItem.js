import React, { useState } from "react";
// Importing components
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

// Importing SASS Styles
import "../../scss/ExpenseItem.scss";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  console.log("ExpenseItem evaluated by React");
  const clickHandler = () => {
    setTitle("محدث !");
    console.log(title);
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
