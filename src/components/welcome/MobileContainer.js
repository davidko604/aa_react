import React from "react";
import { NavLink /* Link */ } from "react-router-dom";
import Logo from "./logo.png";
import HomepageHeading from "./HomepageHeading";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PropTypes from "prop-types";
import Welcome from "./Welcome";

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

HomepageHeading.propTypes = {
  mobile: PropTypes.bool
};

class MobileContainer extends React.Component {
  state = {};

  handleSidebarHide = () => this.setState({ sidebarOpened: false });

  handleToggle = () => this.setState({ sidebarOpened: true });

  render() {
    const { children } = this.props;
    const { sidebarOpened } = this.state;
    const { currentUser, onSignOut } = this.props;
    const { fixed } = this.state;

    return (
      <Responsive
        as={Sidebar.Pushable}
        getWidth={getWidth}
        maxWidth={Responsive.onlyMobile.maxWidth}
      >
        <Sidebar
          as={Menu}
          animation="push"
          inverted
          onHide={this.handleSidebarHide}
          vertical
          visible={sidebarOpened}
          className="green"
        >
          <Menu.Item as="a">
            <NavLink to="/">
              <img src={Logo} height="70px"></img>
            </NavLink>
          </Menu.Item>

          {currentUser ? (
            <>
              <NavLink to="/" onClick={onSignOut} className="ui item">
                Sign Out
              </NavLink>
              <span className="ui item" style={{ color: "Black" }}>
                {/* Welcome {currentUser.full_name} */}
              </span>
            </>
          ) : (
            <React.Fragment>
              <Menu.Item as="a">
                <Button
                  as="a"
                  color="yellow"
                  className="button"
                  style={{ marginLeft: "0.5em" }}
                >
                  <NavLink exact to="/sign_up">
                    Free Trial
                  </NavLink>
                </Button>
              </Menu.Item>
              <Menu.Item as="a">
                <Button
                  as="a"
                  color="red"
                  className="button secondary item red"
                  inverted={!fixed}
                >
                  <NavLink exact to="/sign_in">
                    Log In
                  </NavLink>
                </Button>
              </Menu.Item>
            </React.Fragment>
          )}

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
          <Menu.Item
            as="a"
            style={{ color: "black", fontWeight: "bold", fontSize: "1.2em" }}
            className="item"
          >
            Company
          </Menu.Item>
          <Menu.Item as="a" style={{ marginLeft: "0.5em" }}>
            <NavLink to="/">About</NavLink>
          </Menu.Item>
          <Menu.Item as="a" style={{ marginLeft: "0.5em" }}>
            <NavLink to="/questions">Careers</NavLink>
          </Menu.Item>
          <Menu.Item as="a" style={{ marginLeft: "0.5em" }}>
            <NavLink to="/questions/new">Contact</NavLink>
          </Menu.Item>
          <Menu.Item
            as="a"
            style={{ color: "black", fontWeight: "bold", fontSize: "1.2em" }}
            className="item"
          >
            Resources
          </Menu.Item>
          <Menu.Item as="a" style={{ marginLeft: "0.5em" }}>
            <NavLink to="/">Work Management Resources</NavLink>
          </Menu.Item>
          <Menu.Item as="a" style={{ marginLeft: "0.5em" }}>
            <NavLink to="/questions">Rapid ERP Guide</NavLink>
          </Menu.Item>
          <Menu.Item as="a" style={{ marginLeft: "0.5em" }}>
            <NavLink to="/questions/new">Case Studies</NavLink>
          </Menu.Item>
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Segment
            inverted
            textAlign="center"
            style={{ minHeight: 0, padding: "1em 0em" }}
            vertical
          >
            <Container>
              <Menu inverted pointing secondary size="large">
                <Menu.Item onClick={this.handleToggle}>
                  <Icon name="sidebar" />
                </Menu.Item>
              </Menu>
            </Container>
          </Segment>

          {children}
        </Sidebar.Pusher>
      </Responsive>
    );
  }
}
export default MobileContainer;
