import React from "react";
import { NavLink, Link } from "react-router-dom";
import Logo from "../logo.png";
import LogoWhite from "../logo-white.png";

import {
  Button,
  Container,
  Divider,
  Grid,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
  Component
} from "semantic-ui-react";

const getWidth = () => {
  const isSSR = typeof window === "undefined";

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
};

// const handleSignOutClick = event => {
//   event.preventDefault();

//   if (typeof onSignOut === "function") {
//     onSignOut();
//   }
// };

class DesktopDashboardContainer extends React.Component {
  // state = {};

  constructor(props) {
    super(props);
    this.state = {
      sidebarOpened: true,
      activeMenu: "dashboard"
    };
  }

  handleSidebarHide = () => this.setState({ sidebarOpened: false });
  handleToggle = () => this.setState({ sidebarOpened: true });

  render() {
    const { children } = this.props;
    const { fixed } = this.state;
    const { currentUser, onSignOut } = this.props;
    const { sidebarOpened } = this.state;
    const menus = {
      name: "form",
      icon: "checkmark box",
      submenus: [{ name: "input" }, { name: "range-picker" }]
    };

    return (
      <Responsive
        as={Sidebar.Pushable}
        getWidth={getWidth}
        minWidth={Responsive.onlyTablet.minWidth}
      >
        <Sidebar
          as={Menu}
          animation="push"
          inverted
          onHide={this.handleSidebarHide}
          vertical
          visible={sidebarOpened}
          className="blue"
          width="thin"
        >
          <Menu.Item as="a">
            <NavLink to="/home">
              <img src={Logo} height="50px"></img>
            </NavLink>
          </Menu.Item>

          <Menu.Item
            as="a"
            style={{ color: "black", fontWeight: "bold", fontSize: "1.0em" }}
            className="item"
          >
            Production Management
          </Menu.Item>
          <NavLink to="/parts">
            <Menu.Item
              as="a"
              style={{ marginLeft: "0.4em", fontSize: "0.8em" }}
            >
              Parts & Configurations
            </Menu.Item>
          </NavLink>
          <NavLink to="/features">
            <Menu.Item
              as="a"
              style={{ marginLeft: "0.4em", fontSize: "0.8em" }}
            >
              Manufacturing Orders
            </Menu.Item>
          </NavLink>
          <NavLink to="/">
            <Menu.Item
              as="a"
              style={{ marginLeft: "0.4em", fontSize: "0.8em" }}
            >
              Subcontractor Orders
            </Menu.Item>
          </NavLink>
          <NavLink to="/questions">
            <Menu.Item
              as="a"
              style={{ marginLeft: "0.4em", fontSize: "0.8em" }}
            >
              Quality Control
            </Menu.Item>
          </NavLink>
          <NavLink to="/questions">
            <Menu.Item
              as="a"
              style={{ marginLeft: "0.4em", fontSize: "0.8em" }}
            >
              Material Requirements Planning
            </Menu.Item>
          </NavLink>

          <Menu.Item
            as="a"
            style={{ color: "black", fontWeight: "bold", fontSize: "1.0em" }}
            className="item"
          >
            Sales Management
          </Menu.Item>
          <NavLink to="/">
            <Menu.Item
              as="a"
              style={{ marginLeft: "0.4em", fontSize: "0.8em" }}
            >
              Sales Orders
            </Menu.Item>
          </NavLink>

          <Menu.Item
            as="a"
            style={{ color: "black", fontWeight: "bold", fontSize: "1.0em" }}
            className="item"
          >
            Materials Management
          </Menu.Item>
          <NavLink to="/">
            <Menu.Item
              as="a"
              style={{ marginLeft: "0.4em", fontSize: "0.8em" }}
            >
              Inventory
            </Menu.Item>
          </NavLink>
          <NavLink to="/features">
            <Menu.Item
              as="a"
              style={{ marginLeft: "0.4em", fontSize: "0.8em" }}
            >
              Purchase Orders
            </Menu.Item>
          </NavLink>
        </Sidebar>

        <Sidebar.Pusher>
          <Menu inverted fixed="top">
            <Container>
              <Menu.Item onClick={this.handleToggle}>
                <Icon name="sidebar" />
              </Menu.Item>
              <NavLink to="/home" style={{ textDecoration: "none" }}>
                <Menu.Item as="a">Home</Menu.Item>
              </NavLink>
              {currentUser ? (
                <>
                  <Menu.Item position="right">
                    <span
                      style={{
                        color: "white",
                        marginRight: "1em",
                        marginBottom: "0.15em"
                      }}
                    >
                      Welcome {currentUser.full_name}
                    </span>
                  </Menu.Item>
                  <NavLink to="/">
                    <Menu.Item as="a">Profile</Menu.Item>
                  </NavLink>
                  <NavLink to="/">
                    <Menu.Item as="a">Settings</Menu.Item>
                  </NavLink>
                  <NavLink to="/">
                    <Button
                      as="a"
                      color="yellow"
                      className="button"
                      style={{
                        marginLeft: "0.4em",
                        marginRigh: "0.4em",
                        marginTop: "0.5em"
                      }}
                      size="tiny"
                    >
                      Upgrade
                    </Button>
                  </NavLink>

                  <NavLink to="/" onClick={onSignOut}>
                    <Menu.Item
                      as="a"
                      style={{ color: "green", marginRight: "1em" }}
                    >
                      Sign Out
                    </Menu.Item>
                  </NavLink>
                </>
              ) : (
                <React.Fragment></React.Fragment>
              )}
            </Container>
          </Menu>
          {children}
        </Sidebar.Pusher>
      </Responsive>
    );
  }
}

export default DesktopDashboardContainer;
