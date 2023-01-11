import React from "react";

import "./ExpenseDate.css";

const ExpenseDate = (props) => {
  const day = props.amount;

  return (
    <div className="expense-date">
      <div className="expense-date__day">{day}</div>
    </div>
  );
};

export default ExpenseDate;
