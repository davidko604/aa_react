import React from "react";
import { NavLink /* Link */ } from "react-router-dom";
import CurrentDateTime from "./CurrentDateTime";

function NavBar(props) {
  const { currentUser } = props;
  return (
    <div className="ui pointing menu">
      <NavLink to="/questions" className="item">
        Questions
      </NavLink>
      <NavLink to="/sign_in" className="item">
        Sign In
      </NavLink>
      {!currentUser && <NavLink to="/sign_in">Sign In </NavLink>}
      {currentUser && <span>Welcome {currentUser.full_name}</span>}
      <div className="right menu">
        <CurrentDateTime />
      </div>
    </div>
  );
}

export default NavBar;
