import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AuthContext } from "./auth.context";
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
      authStatus: false,
      userName: undefined,
      setUserName: this.setUserName,
      clearUserName: this.clearUserName
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
