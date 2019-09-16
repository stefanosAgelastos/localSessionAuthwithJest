import React from "react";

const initialState = {
  username: "Enter Your Username",
  password: "Password"
};

/**
 * Renders username and password inputs
 * updates state on change
 * on submit it calls this.props.handleAuth(this.state)
 */
class AuthForm extends React.Component {
  constructor(props) {
    super(props);
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
    /* here we need help from parent */
    this.props.handleAuth(this.state);
  }
  render() {
    return (
      <React.Fragment>
        <div className="contact-main">
          <div className="my-paper">
            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                className="user"
                name="username"
                value={this.state.username}
                onFocus={this.handleFocus}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
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
              <input type="submit" value={this.props.submitText} />
              <p>
                <a href={this.props.linkPath}>{this.props.linkText}</a>
              </p>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default AuthForm;
