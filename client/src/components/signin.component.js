import React from "react";
import auth from "../utils/auth.service";
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
    console.log("sign-up handleSubmit, username: ");
    console.log(this.state.username);
    event.preventDefault();
    auth.authenticate(this.state);

    //request to server to add a new username/password
  }
  render() {
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

export default Signin;
