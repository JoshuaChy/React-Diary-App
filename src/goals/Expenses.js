import React from "react";

import "./Expenses.css";
import Card from "./Card";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  return (
    <div>
      <Card className="expenses">
        <h1>KKM : 70</h1>

        <h2>Need To Improve</h2>
        <ExpensesList items={props.items} />
      </Card>
    </div>
  );
};

export default Expenses;
