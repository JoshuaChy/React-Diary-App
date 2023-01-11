import React from "react";
import classNames from "classnames";
import { Container } from "reactstrap";
import { Switch, Route } from "react-router-dom";
import "./Content.css";

import Topbar from "./Topbar";

import TodoApps from "./../../todo/TodoApps";
import DiaryApp from "./../../diary/DiaryApp";
import CalendarApp from "./../../calendar/CalendarApp";
import GoalsApp from "./../../goals/GoalsApp";
import ScoresApp from "./../../scores/ScoresApp";

const Content = ({ sidebarIsOpen, toggleSidebar }) => (
  <Container
    fluid
    className={classNames("content", { "is-open": sidebarIsOpen })}
  >
    <Topbar toggleSidebar={toggleSidebar} />
    <div className="content-box">
      <Switch>
        <Route exact path="/" component={() => "Hello"} />

        <Route path="/todo">
          <TodoApps />
        </Route>

        <Route exact path="/diary">
          <DiaryApp />
        </Route>

        <Route exact path="/calendar">
          <CalendarApp />
        </Route>

        <Route exact path="/goals">
          <GoalsApp />
        </Route>

        <Route exact path="/scores">
          <ScoresApp />
        </Route>

        <Route exact path="/contact" component={() => "contact"} />
      </Switch>
    </div>
  </Container>
);

export default Content;
