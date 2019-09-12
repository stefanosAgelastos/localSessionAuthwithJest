import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext, authorized } from "./auth.context";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const auth = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={props =>
        auth === authorized.yes ? (
          <Component {...props} />
        ) : (
          <Redirect to="/signin" />
        )
      }
    />
  );
};
export default ProtectedRoute;

// Requirement 1.
// It has the same API as <Route />
// Requirement 2.
// It renders a <Route /> and passes all the props through to it.
// Requirement 3.
// It checks if the user is authenticated, if they are,
// it renders the "component" prop. If not, it redirects
// the user to /login.
