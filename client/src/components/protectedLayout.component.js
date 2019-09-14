import React from "react";
import authServices from "../utils/auth.service";
import { AuthContext } from "../utils/auth.context";

class ProtectedLayout extends React.Component {
  constructor() {
    super();
    this.state = {
      message: "loading"
    };
    this.handleSignOut = this.handleSignOut.bind(this);
  }

  componentDidMount() {
    authServices
      .secret()
      .then(done => {
        console.log("secret promise: ", done);
        if (done) {
          this.setState({
            message: done.message
          });
        }
      })
      .catch(err => console.log(err));
  }

  handleSignOut() {
    authServices.signout().then(done => {
      if (done) {
        this.context.clearUserName();
      }
    });
  }

  render() {
    return (
      <React.Fragment>
        <button onClick={this.handleSignOut}>{"Sign Out"}</button>
        <div>{this.state.message}</div>
        {this.props.children}
      </React.Fragment>
    );
  }
}
ProtectedLayout.contextType = AuthContext;

export default ProtectedLayout;
