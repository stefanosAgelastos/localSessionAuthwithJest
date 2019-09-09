import React from "react";

const AuthForm = (props) => (
  <React.Fragment>
    <div className="contact-form">
      <div className="signin">
        <form onSubmit={props.handleSubmit}>
          <input
            type="text"
            className="user"
            name="username"
            value={props.username}
            onFocus={props.handleFocus}
            onChange={props.handleChange}
            onBlur={props.handleBlur}
          />
          <input
            type="password"
            className="pass"
            name="password"
            value={props.password}
            onFocus={props.handleFocus}
            onChange={props.handleChange}
            onBlur={props.handleBlur}
          />
          <input type="submit" value={props.submitText} />
          <p>
            <a href={props.linkPath}>{props.linkText}</a>
          </p>
        </form>
      </div>
    </div>
  </React.Fragment>
);
export default AuthForm;
