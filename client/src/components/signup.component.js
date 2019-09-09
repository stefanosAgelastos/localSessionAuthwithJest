import React from "react";

const initialState= {
    username: "Enter Your Username",
    password: "Password"
}

class Signup extends React.Component {
  constructor() {
    super();
    this.state = {
      username: initialState.username,
      password: initialState.password,
      redirectTo: null
    };
    /*     this.handleSubmit = this.handleSubmit.bind(this); */
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

  render() {
    return (
      <React.Fragment>
        <div className="contact-form">
          <div className="signin">
            <form>
              <input
                type="text"
                className="user"
                name="username"
                value={this.state.username}
                onFocus={this.handleFocus}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
/*                 onBlur={() => {
                  if (event.target.value === "")
                    this.setState({ username: "Enter Your Username" });
                }} */
              />
              <input
                type="password"
                className="pass"
                name="password"
                value={this.state.password}
                onFocus={this.handleFocus}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
              />
              <input type="submit" value="Login" />
              <p>
                <a href="#">Lost your password?</a>
              </p>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Signup;
