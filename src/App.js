import React from "react";
// Importing Components
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const App = () => {
  const expenses = [
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
      <NewExpense />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
