import React from "react";
import { NavLink /* Link */ } from "react-router-dom";
import Logo from "./logo.png";
import MenuProductDropdownItem from "./MenuProductDropdownItem";
import MenuCustomerDropdownItem from "./MenuCustomerDropdownItem";
import MenuCompanyDropdownItem from "./MenuCompanyDropdownItem";
import MenuResourcesDropdownItem from "./MenuResourcesDropdownItem";

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

class DesktopContainer extends React.Component {
  state = {};

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });

  render() {
    const { children } = this.props;
    const { fixed } = this.state;
    const { currentUser, onSignOut } = this.props;

    return (
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <Segment
          inverted
          textAlign="center"
          style={{ minHeight: 0, padding: "0em 0em" }}
          vertical
        >
          <Menu
            fixed={fixed ? "top" : null}
            inverted={!fixed}
            pointing={!fixed}
            secondary={!fixed}
            size="large"
            className="grey"
          >
            <Container>
              <NavLink to="/">
                <img src={Logo} height="70px"></img>
              </NavLink>
              <Menu.Item as="a">
                <MenuProductDropdownItem />
              </Menu.Item>
              <Menu.Item as="a">
                <MenuCustomerDropdownItem />
              </Menu.Item>
              <Menu.Item as="a">
                <MenuCompanyDropdownItem />
              </Menu.Item>
              <Menu.Item as="a">
                <MenuResourcesDropdownItem />
              </Menu.Item>

              <Menu.Item position="right">
                {currentUser ? (
                  <>
                    <NavLink to="/" onClick={onSignOut} className="ui item">
                      Sign Out
                    </NavLink>
                    <span className="ui item" style={{ color: "Black" }}>
                      Welcome {currentUser.full_name}
                    </span>
                  </>
                ) : (
                  <React.Fragment>
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
                  </React.Fragment>
                )}
              </Menu.Item>
            </Container>
          </Menu>
        </Segment>

        {children}
      </Responsive>
    );
  }
}

export default DesktopContainer;
