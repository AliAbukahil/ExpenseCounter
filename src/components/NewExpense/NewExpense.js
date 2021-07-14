import React from "react";

// Importing Components
import ExpenseForm from "./ExpenseForm";

// Importing SASS Styles
import "../../scss/NewExpense.scss";

const NewExpense = () => {
  return (
    <div className="new-expense">
      <ExpenseForm />
    </div>
  );
};

export default NewExpense;
