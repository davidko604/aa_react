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
      {currentUser ? (
        <>
          <NavLink exact to="/questions/new" className="item">
            Ask a Question
          </NavLink>
          <NavLink to="/questions" onClick={onSignOut} className="item">
            Sign Out
          </NavLink>
          <span className="item" style={{ color: "green" }}>
            Welcome {currentUser.full_name}
          </span>
        </>
      ) : (
        <React.Fragment>
          <NavLink exact to="/sign_in" className="item">
            Sign In
          </NavLink>
          <NavLink exact to="/sign_up" className="item">
            Sign Up
          </NavLink>
        </React.Fragment>
      )}
      <div className="right menu">
        <CurrentDateTime className="item" />
      </div>
    </div>
  );
}

export default NavBar;
