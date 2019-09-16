import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AuthContext } from "./auth.context";
import authServices from "../utils/auth.service";
import ProtectedLayout from "../components/protectedLayout.component";
import Signup from "../components/signup.component";
import Signin from "../components/signin.component";
import ProtectedRoute from "../utils/route.protected";

/**
 * Holds all routes that need access to AuthContext
 * Provides AuthContext to children
 */
class MainRoutes extends React.Component {
  constructor(props) {
    super(props);
    /**
     * to be used by AuthContext
     * sets session details in state
     * @param {string} name username of authenticated user
     */
    this.setUserName = name => {
      console.log("setUserName");
      this.setState({
        authStatus: true,
        userName: name
      });
    };
    /**
     * to be used by AuthContext
     * clears session details from state
     */
    this.clearUserName = () => {
      console.log("clearUserName");
      this.setState({
        authStatus: false,
        userName: undefined
      });
    };

    /**
     * State holds authorization status and update methods,
     * state is provided through AuthContext to children
     */
    this.state = {
      authStatus: undefined, //waiting for componentDidmount
      userName: undefined,
      setUserName: this.setUserName,
      clearUserName: this.clearUserName
    };
  }
  /**
   * Called before children components render,
   * to fetch initial authStatus and username
   */
  componentDidMount() {
    console.log("routes.main DidMount");
    authServices.getauthStatus().then(done => {
      console.log("promise: ", done);
      if (done) {
        this.setUserName(done);
      }
    }).catch(err => {
      this.clearUserName();
    });
  }

  render() {
    console.log("routes.main render")
    return (
      <AuthContext.Provider value={this.state}>
        <Router>
          <ProtectedRoute exact path="/" component={ProtectedLayout} />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/signup" component={Signup} />
        </Router>
      </AuthContext.Provider>
    );
  }
}

export default MainRoutes;
