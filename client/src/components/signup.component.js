import React from "react";
import authServices from "../utils/auth.service";
import AuthForm from "./authForm.component";
import { withAlert } from "react-alert";

/**
 * Renders the AuthForm
 * passes handleSignUp callback to AuthForm
 * on succeess informs user
 * on fail alerts user
 */
class Signup extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit({username, password}) {
    authServices
      .register(username, password)
      .then(done => {
        this.props.alert.success("Sign Up successful");
        this.props.alert.show("You can now sign in ");
        this.props.history.replace("/signin");
      })
      .catch(err => this.props.alert.error(err.message));
  }
  render() {
    return (
      <React.Fragment>
        <AuthForm
          handleAuth={this.handleSubmit}
          submitText="Sign Up"
          linkText="Already have an account?"
          linkPath="/signin"
        />
      </React.Fragment>
    );
  }
}

export default withAlert()(Signup);
