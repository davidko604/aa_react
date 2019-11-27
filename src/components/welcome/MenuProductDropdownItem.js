import React from "react";
import { Dropdown, Menu, Transition } from "semantic-ui-react";
import { NavLink /* Link */ } from "react-router-dom";

const MenuProductDropdownItem = () => (
  // <Menu color="green" inverted>
  <Dropdown text="Product" className="item">
    <Dropdown.Menu>
      <Dropdown.Item>
        <NavLink
          to="/"
          style={{ color: "black" }}
          activeStyle={{ color: "black" }}
        >
          Overview
        </NavLink>
      </Dropdown.Item>
      <Dropdown.Item color="black">
        <NavLink
          to="/features"
          style={{ color: "black" }}
          activeStyle={{ color: "black" }}
        >
          Features
        </NavLink>
      </Dropdown.Item>
      <Dropdown.Item>
        <NavLink
          to="/questions/new"
          style={{ color: "black" }}
          activeStyle={{ color: "black" }}
        >
          Pricing
        </NavLink>
      </Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
  // </Menu>
);

export default MenuProductDropdownItem;
