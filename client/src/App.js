import React, { Component } from "react";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import AuthorizedRoutes from "./utils/routes.main";
import Signup from "./components/signup.component";
import Signin from "./components/signin.component";
import ProtectedLayout from "./components/protectedLayout.component";
import ProtectedRoute from "./utils/route.protected";

// alert cofiguration
const options = {
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  offset: "30px",
  transition: transitions.SCALE
};

class App extends Component {
  render() {
    return (
      <AlertProvider template={AlertTemplate} {...options}>
        <AuthorizedRoutes signinComponent={Signin} signupComponent={Signup}>
          <ProtectedRoute exact path="/" component={ProtectedLayout} />
        </AuthorizedRoutes>
      </AlertProvider>
    );
  }
}

export default App;
