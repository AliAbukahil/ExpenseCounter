import React from "react";
// Importing SASS Styles
import "../../scss/ExpenseDate.scss";

const ExpenseDate = (props) => {
  const month = props.date.toLocaleString("ar-EG", { month: "long" });
  const day = props.date.toLocaleString("en-EG", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
};

export default ExpenseDate;
