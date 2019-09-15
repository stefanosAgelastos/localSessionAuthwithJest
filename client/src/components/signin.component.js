import React from "react";
import { AuthContext } from "../utils/auth.context";
import authServices from "../utils/auth.service";
import AuthForm from "./authForm.component";
import { withAlert } from "react-alert";

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(credentials) {
    authServices
      .authenticate(credentials)
      .then(done => {
        console.log("promise: ", done);
        if (done) {
          this.props.alert.success("Signed in");
          this.context.setUserName(done);
          this.props.history.replace("/");
        }
      })
      .catch(err => this.props.alert.error(err.message));
  }

  render() {
    console.log("signin render");
    return (
      <React.Fragment>
        <AuthForm
          handleAuth={this.handleSubmit}
          submitText="Sign In"
          linkText="You don't have an account?"
          linkPath="/signup"
        />
      </React.Fragment>
    );
  }
}
Signin.contextType = AuthContext;

export default withAlert()(Signin);
