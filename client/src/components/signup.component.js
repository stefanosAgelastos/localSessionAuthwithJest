import React from "react";
import authServices from "../utils/auth.service";
import AuthForm from "./authForm.component";
import { withAlert } from "react-alert";

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

    //request to server to add a new username/password
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
