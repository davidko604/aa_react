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
import Features from "./welcome/Features";
import DesktopContainer from "./welcome/DesktopContainer";
import MobileContainer from "./welcome/MobileContainer";
import HomepageHeading from "./welcome/HomepageHeading";
import ResponsiveContainer from "./welcome/ResponsiveContainer";

import PropTypes from "prop-types";

HomepageHeading.propTypes = {
  mobile: PropTypes.bool
};

DesktopContainer.propTypes = {
  children: PropTypes.node
};

MobileContainer.propTypes = {
  children: PropTypes.node
};

ResponsiveContainer.propTypes = {
  children: PropTypes.node
};

const returnHeader = () => {
  if (window.innerWidth < 800) {
    return <HomepageHeading mobile />;
  } else {
    return <HomepageHeading />;
  }
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
      loading: true
    };
  }

  onSignOut = () => {
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
          <div className="ui container App"></div>
          <ResponsiveContainer
            currentUser={currentUser}
            onSignOut={this.onSignOut}
          >
            <Switch>
              <Route path="/" exact component={Welcome} />
              <Route path="/features" exact component={Features} />

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
            </Switch>
            Not Logged in
          </ResponsiveContainer>
        </BrowserRouter>
      );
    } else {
      return (
        <BrowserRouter>
          <div className="ui container App">
            <NavBar currentUser={currentUser} onSignOut={this.onSignOut} />
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

  // render() {
  //   return (
  //     <ResponsiveContainer>
  //       <Welcome />
  //     </ResponsiveContainer>
  //   );
  // }
}

export default App;
