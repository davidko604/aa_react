import React from "react";
import { NavLink /* Link */ } from "react-router-dom";
import CurrentDateTime from "./CurrentDateTime";

function NavBar(props) {
  return (
    <div className="ui pointing menu">
      <NavLink to="/questions" className="item">
        Questions
      </NavLink>
      <NavLink to="/sign_in" className="item">
        Sign In
      </NavLink>
      <div className="right menu">
        <CurrentDateTime />
      </div>
    </div>
  );
}

export default NavBar;
