import React from "react";
import { NavLink /* Link */ } from "react-router-dom";
import PropTypes from "prop-types";

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

const HomepageHeading = ({ mobile }) => (
  <Container text>
    <Header
      as="h1"
      content="Rapid Manufacturing ERP"
      inverted
      style={{
        fontSize: mobile ? "2em" : "4em",
        fontWeight: "normal",
        marginBottom: 0,
        marginTop: mobile ? "0em" : "0.5em"
      }}
    />
    <Header
      as="h2"
      content="An all-in-one business solution."
      inverted
      style={{
        fontSize: mobile ? "1.5em" : "1.7em",
        fontWeight: "normal",
        marginTop: mobile ? "0.5em" : "1.5em"
      }}
    />

    <Button size="huge" color="yellow">
      <NavLink exact to="/sign_up">
        Try for Free
        <Icon name="right arrow" />
      </NavLink>
    </Button>
  </Container>
);

export default HomepageHeading;
