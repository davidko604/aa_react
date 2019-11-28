import React from "react";
import { Dropdown, Menu } from "semantic-ui-react";
import { NavLink /* Link */ } from "react-router-dom";

const MenuCustomerDropdownItem = () => (
  // <Menu color="green" inverted>
  <Dropdown item simple text="Customers" className="item">
    <Dropdown.Menu>
      <Dropdown.Item>
        <NavLink
          to="/"
          style={{ color: "black" }}
          activeStyle={{ color: "black" }}
        >
          Industries
        </NavLink>
      </Dropdown.Item>
      <Dropdown.Item color="black">
        <NavLink
          to="/questions"
          style={{ color: "black" }}
          activeStyle={{ color: "black" }}
        >
          Testimonials
        </NavLink>
      </Dropdown.Item>
      <Dropdown.Item>
        <NavLink
          to="/questions/new"
          style={{ color: "black" }}
          activeStyle={{ color: "black" }}
        >
          Customer Success
        </NavLink>
      </Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
  // </Menu>
);

export default MenuCustomerDropdownItem;
