import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "./auth.context";

/**
 * has the same API as <Route />
 * renders a <Route /> and passes all the props through to it.
 * on AuthContext.authStatus true renders the route
 * on AuthContext.authStatus undefined renders loading
 * on AuthContext.authStatus false redirects to /signin 
 */
const ProtectedRoute = ({ component: Component, ...rest }) => {
  const auth = useContext(AuthContext);
  console.log("route.protected render");
  return (
    <Route
      {...rest}
      render={props =>
        auth.authStatus === undefined ? (
          <div>Loading</div>
        ) : auth.authStatus === true ? (
          <Component {...props} />
        ) : (
          <Redirect to="/signin" />
        )
      }
    />
  );
};
export default ProtectedRoute;
