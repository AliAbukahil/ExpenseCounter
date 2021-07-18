import React from "react";

// Importing Components
import ExpenseItem from "./ExpenseItem";

// Importing SASS Styles
import "../../scss/ExpensesList.scss";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">found no expenses</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((expenses) => (
        <ExpenseItem
          key={expenses.id}
          title={expenses.title}
          amount={expenses.amount}
          date={expenses.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
