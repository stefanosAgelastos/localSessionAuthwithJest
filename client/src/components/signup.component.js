import React from "react";
import authServices from "../utils/auth.service";
import AuthForm from "./authForm.component";

const initialState = {
  username: "Enter Your Username",
  password: "Password"
};

class Signup extends React.Component {
  constructor() {
    super();
    this.state = {
      username: initialState.username,
      password: initialState.password
    };
    /*     this.handleSubmit = this.handleSubmit.bind(this); */
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
    authServices.register(this.state).then(done => {
      this.props.history.replace("/signin");
    });

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
          submitText="Sign Up"
          linkText="Already have an account?"
          linkPath="/signin"
        />
      </React.Fragment>
    );
  }
}

export default Signup;
