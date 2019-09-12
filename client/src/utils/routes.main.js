import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AuthContext, authorized } from "./auth.context";
import Secret from "../components/secret.component";
import Signup from "../components/signup.component";
import Signin from "../components/signin.component";
import ProtectedRoute from "../utils/route.protected";

class MainRoutes extends React.Component {
  constructor(props) {
    super(props);

    this.toggleAuthorized = () => {
      console.log("toggleAuth");
      this.setState(state => ({
        authStatus:
          state.authStatus === authorized.no
            ? authorized.yes
            : authorized.no,
      }));
    };

    // State also contains the updater function so it will
    // be passed down into the context provider
    this.state = {
      authStatus: authorized.no,
      toggleAuthorized: this.toggleAuthorized,
    };
  }

  render() {
    return (
      <AuthContext.Provider value={this.state}>
        <Router>
          <ProtectedRoute exact path="/" component={Secret} />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/signup" component={Signup} />
        </Router>
      </AuthContext.Provider>
    );
  }
}

export default MainRoutes;
