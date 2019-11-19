import React from "react";
import { NavLink /* Link */ } from "react-router-dom";
import CurrentDateTime from "./CurrentDateTime";

function NavBar(props) {
  const { currentUser, onSignOut } = props;

  const handleSignOutClick = event => {
    event.preventDefault();

    if (typeof onSignOut === "function") {
      onSignOut();
    }
  };
  return (
    <div className="ui pointing menu">
      <NavLink to="/questions" className="item">
        Questions
      </NavLink>
      <NavLink to="/questions/new" className="item">
        Add New Question
      </NavLink>
      {!currentUser && (
        <NavLink to="sign_in" className="item">
          Sign In{" "}
        </NavLink>
      )}
      {currentUser && (
        <>
          <span>Welcome {currentUser.full_name}</span>
          <a href="#sign_out" onClick={handleSignOutClick} className="item">
            Sign Out
          </a>
        </>
      )}
      <div className="right menu">
        <CurrentDateTime />
      </div>
    </div>
  );
}

export default NavBar;
