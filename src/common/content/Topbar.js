import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignLeft } from "@fortawesome/free-solid-svg-icons";
import { Navbar, Button } from "reactstrap";
import "./Topbar.css";

const Topbar = ({ toggleSidebar }) => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  const current = new Date();
  const date = `${weekday[current.getDay()]}, ${current.getDate()} ${
    monthNames[current.getMonth()]
  } ${current.getFullYear()}`;

  return (
    <div className="topbarcss">
      <Navbar color="3B3486" className="navbar p-1 mb-5 rounded" expand="md">
        <Button color="info" onClick={toggleSidebar}>
          <FontAwesomeIcon icon={faAlignLeft} />
        </Button>
        <div className="titleTopbar">
          <h6>{date}</h6>
        </div>
      </Navbar>
    </div>
  );
};

export default Topbar;
