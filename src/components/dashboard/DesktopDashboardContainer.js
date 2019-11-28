import React from "react";
import { NavLink /* Link */ } from "react-router-dom";
import Logo from "../logo.png";
import LogoWhite from "../logo-white.png";

import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility
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
      sidebarOpened: true
    };
  }

  handleSidebarHide = () => this.setState({ sidebarOpened: false });
  handleToggle = () => this.setState({ sidebarOpened: true });

  render() {
    const { children } = this.props;
    const { fixed } = this.state;
    const { currentUser, onSignOut } = this.props;
    const { sidebarOpened } = this.state;

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
          className="green"
          width="thin"
        >
          <Menu.Item as="a">
            <NavLink to="/">
              <img src={Logo} height="70px"></img>
            </NavLink>
          </Menu.Item>

          <Menu.Item
            as="a"
            style={{ color: "black", fontWeight: "bold", fontSize: "1.2em" }}
            className="item"
          >
            Product
          </Menu.Item>
          <Menu.Item as="a" style={{ marginLeft: "0.5em" }}>
            <NavLink to="/">Overview</NavLink>
          </Menu.Item>
          <Menu.Item as="a" style={{ marginLeft: "0.5em" }}>
            <NavLink to="/questions">Features</NavLink>
          </Menu.Item>
          <Menu.Item as="a" style={{ marginLeft: "0.5em" }}>
            <NavLink to="/questions/new">Pricing</NavLink>
          </Menu.Item>
          <Menu.Item
            as="a"
            style={{ color: "black", fontWeight: "bold", fontSize: "1.2em" }}
            className="item"
          >
            Customers
          </Menu.Item>
          <Menu.Item as="a" style={{ marginLeft: "0.5em" }}>
            <NavLink to="/">Industries</NavLink>
          </Menu.Item>
          <Menu.Item as="a" style={{ marginLeft: "0.5em" }}>
            <NavLink to="/questions">Testimonials</NavLink>
          </Menu.Item>
          <Menu.Item as="a" style={{ marginLeft: "0.5em" }}>
            <NavLink to="/questions/new">Customer Success</NavLink>
          </Menu.Item>

          {currentUser ? (
            <>
              <NavLink to="/" onClick={onSignOut} className="ui item">
                Sign Out
              </NavLink>
              <span className="ui item" style={{ color: "Black" }}></span>
            </>
          ) : (
            <React.Fragment></React.Fragment>
          )}
        </Sidebar>

        <Sidebar.Pusher>
          <Menu inverted fixed="top">
            <Container>
              <Menu.Item onClick={this.handleToggle}>
                <Icon name="sidebar" />
              </Menu.Item>

              <Menu.Item as="a">Home</Menu.Item>

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
                    <NavLink
                      to="/"
                      onClick={onSignOut}
                      style={{ color: "green" }}
                    >
                      Sign Out
                    </NavLink>
                  </Menu.Item>
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
