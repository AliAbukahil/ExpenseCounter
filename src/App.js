import React, { useState } from "react";
// Importing Components
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "ورق التواليت",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "تلفزيون جديد",
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "تأمين السيارة",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "مكتب جديد (خشبي)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    // this is the clean way of updating our useState when it is based on an older Snapshot.
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  // React under the hood version which is old

  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Let's get Started<"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  // More friendly readable JSX React Code

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
