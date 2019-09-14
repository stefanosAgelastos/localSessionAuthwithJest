import React from "react";
import { AuthContext } from "../utils/auth.context";
import authServices from "../utils/auth.service";
import AuthForm from "./authForm.component";

const initialState = {
  username: "Enter Your Username",
  password: "Password"
};

class Signin extends React.Component {
  constructor() {
    super();
    this.state = {
      username: initialState.username,
      password: initialState.password
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleFocus(event) {
    if (event.target.value === initialState[event.target.name]) {
      this.setState({
        [event.target.name]: ""
      });
    }
  }

  handleBlur(event) {
    if (event.target.value === "") {
      this.setState({
        [event.target.name]: initialState[event.target.name]
      });
    }
  }
  handleSubmit(event) {
    /* TODO handle user info about errors and success */
    console.log("sign-up handleSubmit, username: ");
    console.log(this.state.username);
    event.preventDefault();
    authServices
      .authenticate(this.state)
      .then(done => {
        console.log("promise: ", done);
        if (done) {
          this.context.setUserName(done);
          this.props.history.replace("/");
        }
      })
      .catch(err => console.log(err));
  }
  render() {
    console.log(this.context.userName);
    return (
      <React.Fragment>
        <AuthForm
          username={this.state.username}
          password={this.state.password}
          handleFocus={this.handleFocus}
          handleChange={this.handleChange}
          handleBlur={this.handleBlur}
          handleSubmit={this.handleSubmit}
          submitText="Sign In"
          linkText="You don't have an account?"
          linkPath="/signup"
        />
      </React.Fragment>
    );
  }
}
Signin.contextType = AuthContext;

export default Signin;
