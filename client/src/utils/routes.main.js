import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AuthContext } from "./auth.context";
import authServices from "../utils/auth.service";
import Secret from "../components/secret.component";
import Signup from "../components/signup.component";
import Signin from "../components/signin.component";
import ProtectedRoute from "../utils/route.protected";

class MainRoutes extends React.Component {
  constructor(props) {
    super(props);

    this.setUserName = name => {
      console.log("setUserName");
      this.setState({
        authStatus: true,
        userName: name
      });
    };

    this.clearUserName = () => {
      console.log("clearUserName");
      this.setState({
        authStatus: false,
        userName: undefined
      });
    };

    /*
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
   * to set initial authStatus and username
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
          <ProtectedRoute exact path="/" component={Secret} />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/signup" component={Signup} />
        </Router>
      </AuthContext.Provider>
    );
  }
}

export default MainRoutes;
