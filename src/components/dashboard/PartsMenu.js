import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default class PartsMenu extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu>
        <Link to="/parts">
          <Menu.Item
            name="View active Parts"
            active={activeItem === "reviews"}
            onClick={this.handleItemClick}
          />
        </Link>
        <Link to="/parts_inactive">
          <Menu.Item
            name="View Inactive Parts"
            active={activeItem === "upcomingEvents"}
            onClick={this.handleItemClick}
          />
        </Link>
        <Link to="/parts/new">
          <Menu.Item
            name="Add New Part Number"
            active={activeItem === "upcomingEvents"}
            onClick={this.handleItemClick}
          />
        </Link>
      </Menu>
    );
  }
}
