import React from "react";
import Calendar from "react-calendar";
import "./CalendarApp.css";
import "react-calendar/dist/Calendar.css";

const CalendarApp = () => {
  return (
    <div className="feedCalendar">
      <Calendar />
    </div>
  );
};

export default CalendarApp;
