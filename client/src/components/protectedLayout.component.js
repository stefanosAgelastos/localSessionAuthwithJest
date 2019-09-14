import React from "react";
import authServices from "../utils/auth.service";
import { AuthContext } from "../utils/auth.context";
import { withAlert } from "react-alert";

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

  handleSignOut(event) {
    event.preventDefault();
    authServices.signout().then(done => {
      if (done) {
        this.props.alert.success("Signed Out");
        this.context.clearUserName();
      }
    }).catch(err => {
      this.props.alert.error(err.message);
    });
  }

  render() {
    return (
      <React.Fragment>
        <div className="contact-main">
          <div className="my-paper">
            <form onSubmit={this.handleSignOut}>
              <h1>{`Welcome ${this.context.userName}`}</h1>
              <p>{this.state.message}</p>
              <input type="submit" value={"Sign Out"} />
            </form>
            {this.props.children}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
ProtectedLayout.contextType = AuthContext;

export default withAlert()(ProtectedLayout);
