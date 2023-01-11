import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "./Card";

const ExpenseItem = (props) => {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate amount={props.amount} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
