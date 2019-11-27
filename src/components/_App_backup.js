import React from "react";

import { QuestionIndexPage } from "./QuestionIndexPage";
import QuestionShowPage from "./QuestionShowPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import { User, Session } from "../requests";
import SignInPage from "./SignInPage";
import QuestionNewPage from "./QuestionNewPage";
import AuthRoute from "./AuthRoute";
import { SignUpPage } from "./SignUpPage";
import NotFoundPage from "./NotFoundPage";
import Welcome from "./welcome/Welcome";
import "bootstrap/dist/css/bootstrap.min.css";

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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
      loading: true
    };
  }

  signOut = () => {
    Session.destroy().then(() => {
      this.setState({ currentUser: null });
    });
  };

  getUser = () => {
    User.current()
      .then(data => {
        if (typeof data.id !== "number") {
          this.setState({ loading: false });
        } else {
          this.setState({ loading: false, currentUser: data });
        }
      })
      .catch(() => {
        this.setState({ loading: false });
      });
  };
  componentDidMount() {
    this.getUser();
  }

  render() {
    const { loading, currentUser } = this.state;
    if (loading) {
      return <div />;
    } else if (currentUser == null) {
      return (
        <BrowserRouter>
          <div className="ui container App">
            <NavBar currentUser={currentUser} onSignOut={this.signOut} />
            <Switch>
              <Route path="/questions" exact component={QuestionIndexPage} />
              <AuthRoute
                isAuthenticated={currentUser}
                path="/questions/new"
                component={QuestionNewPage}
              />
              <Route
                exact
                path="/sign_up"
                render={routeProps => (
                  <SignUpPage {...routeProps} onSignUp={this.getUser} />
                )}
              />
              <Route path="/questions/:id" component={QuestionShowPage} />
              <Route
                path="/sign_in"
                render={routeProps => (
                  <SignInPage {...routeProps} onSignIn={this.getUser} />
                )}
              />
              <Welcome />
            </Switch>
            Not Logged in
          </div>
        </BrowserRouter>
      );
    } else {
      return (
        <BrowserRouter>
          <div className="ui container App">
            <NavBar currentUser={currentUser} onSignOut={this.signOut} />
            <Switch>
              <Route path="/questions" exact component={QuestionIndexPage} />
              <AuthRoute
                isAuthenticated={currentUser}
                path="/questions/new"
                component={QuestionNewPage}
              />
              <Route
                exact
                path="/sign_up"
                render={routeProps => (
                  <SignUpPage {...routeProps} onSignUp={this.getUser} />
                )}
              />
              <Route path="/questions/:id" component={QuestionShowPage} />
              <Route
                path="/sign_in"
                render={routeProps => (
                  <SignInPage {...routeProps} onSignIn={this.getUser} />
                )}
              />
              <Welcome />
            </Switch>
            Logged in
          </div>
        </BrowserRouter>
      );
    }
  }
}

export default App;
