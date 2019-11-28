import React from "react";
import { Dropdown, Menu } from "semantic-ui-react";
import { NavLink /* Link */ } from "react-router-dom";

const MenuCompanyDropdownItem = () => (
  // <Menu color="green" inverted>
  <Dropdown item simple text="Company" className="item">
    <Dropdown.Menu>
      <Dropdown.Item>
        <NavLink
          to="/"
          style={{ color: "black" }}
          activeStyle={{ color: "black" }}
        >
          About
        </NavLink>
      </Dropdown.Item>
      <Dropdown.Item color="black">
        <NavLink
          to="/questions"
          style={{ color: "black" }}
          activeStyle={{ color: "black" }}
        >
          Careers
        </NavLink>
      </Dropdown.Item>
      <Dropdown.Item>
        <NavLink
          to="/questions/new"
          style={{ color: "black" }}
          activeStyle={{ color: "black" }}
        >
          Contact
        </NavLink>
      </Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
  // </Menu>
);

export default MenuCompanyDropdownItem;
