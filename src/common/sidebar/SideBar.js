import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavItem, NavLink, Nav } from "reactstrap";
import classNames from "classnames";
import { Link } from "react-router-dom";
import {
  faBook,
  faBullseye,
  faStar,
  faCalendarDay,
  faList,
  faHome,
  faBriefcase,
  faPaperPlane,
  faQuestion,
  faImage,
  faCopy
} from "@fortawesome/free-solid-svg-icons";
import "./SideBar.css";

const SideBar = ({ isOpen, toggle }) => (
  <div className={classNames("sidebar", { "is-open": isOpen })}>
    <div className="sidebar-header">
      <span color="info" onClick={toggle} style={{ color: "#fff" }}>
        <h3>Joey's Diary</h3>
      </span>
    </div>
    <div className="side-menu">
      <Nav vertical className="list-unstyled pb-3">
        <NavItem>
          <NavLink tag={Link} to={"/diary"}>
            <FontAwesomeIcon icon={faBook} className="mr-2" />
            Diary
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink tag={Link} to={"/scores"}>
            <FontAwesomeIcon icon={faStar} className="mr-2" />
            Scores
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink tag={Link} to={"/goals"}>
            <FontAwesomeIcon icon={faBullseye} className="mr-2" />
            Goal
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink tag={Link} to={"/todo"}>
            <FontAwesomeIcon icon={faList} className="mr-2" />
            Todo
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink tag={Link} to={"/calendar"}>
            <FontAwesomeIcon icon={faCalendarDay} className="mr-2" />
            Calendar
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  </div>
);

export default SideBar;
