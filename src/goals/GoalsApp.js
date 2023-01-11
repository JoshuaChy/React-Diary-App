import React, { useState } from "react";
import Expenses from "./Expenses";
import "./GoalsApp.css";

const DUMMY = [
  {
    id: "e1",
    title: "Bahasa Indonesia",
    amount: 60
  },

  {
    id: "e2",
    title: "Physical Education",
    amount: 65
  }
];

const GoalsApp = () => {
  const [expenses, setExpenses] = useState(DUMMY);

  return (
    <div>
      <Expenses items={expenses} />
    </div>
  );
};

export default GoalsApp;
