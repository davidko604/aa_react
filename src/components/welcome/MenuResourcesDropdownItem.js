import React from "react";
import { Dropdown, Menu } from "semantic-ui-react";
import { NavLink /* Link */ } from "react-router-dom";

const MenuResourcesDropdownItem = () => (
  // <Menu color="green" inverted>
  <Dropdown item simple text="Resources" className="item">
    <Dropdown.Menu>
      <Dropdown.Item>
        <NavLink
          to="/"
          style={{ color: "black" }}
          activeStyle={{ color: "black" }}
        >
          Work Management Resources
        </NavLink>
      </Dropdown.Item>
      <Dropdown.Item color="black">
        <NavLink
          to="/questions"
          style={{ color: "black" }}
          activeStyle={{ color: "black" }}
        >
          Rapid ERP Guide
        </NavLink>
      </Dropdown.Item>
      <Dropdown.Item>
        <NavLink
          to="/questions/new"
          style={{ color: "black" }}
          activeStyle={{ color: "black" }}
        >
          Case Studies
        </NavLink>
      </Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
  // </Menu>
);

export default MenuResourcesDropdownItem;
