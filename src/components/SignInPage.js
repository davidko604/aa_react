import React, { Component } from "react";
import { Session } from "../requests";
import Logo from "./welcome/logo.png";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment
} from "semantic-ui-react";
import { Link } from "react-router-dom";

class SignInPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      errors: []
    };

    this.createSession = this.createSession.bind(this);
  }

  createSession(event) {
    event.preventDefault();
    const { currentTarget } = event;
    const fd = new FormData(currentTarget);

    Session.create({
      email: fd.get("email"),
      password: fd.get("password")
    }).then(data => {
      if (data.status === 404) {
        this.setState({
          errors: [{ message: "Wrong email or password" }]
        });
      } else {
        this.setState({
          errors: []
        });
        this.props.history.push("/");

        if (typeof this.props.onSignIn === "function") {
          this.props.onSignIn();
        }
      }
    });
  }
  render() {
    const { errors } = this.state;
    return (
      <Grid
        textAlign="center"
        style={{ height: "100vh" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" color="teal" textAlign="center">
            <Image src={Logo} /> Sign in to your account
          </Header>
          <Form size="large" className="ui form" onSubmit={this.createSession}>
            {errors.length > 0 ? (
              <div className="ui negative message FormErrors">
                <div className="header">Error Signing in...</div>
                <p>{errors.map(err => err.message).join(",")}</p>
              </div>
            ) : null}

            <Segment stacked>
              <Form.Input
                name="email"
                id="email"
                fluid
                icon="user"
                iconPosition="left"
                placeholder="email@email.com"
              />
              <Form.Input
                fluid
                name="password"
                id="password"
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
              />

              <Button
                color="teal"
                fluid
                size="large"
                className="ui blue button"
                type="submit"
              >
                Login
              </Button>
            </Segment>
          </Form>
          <Message>
            New to us? <Link to="/sign_up">Sign Up</Link>
          </Message>
        </Grid.Column>
      </Grid>
    );
  }
}

export default SignInPage;
