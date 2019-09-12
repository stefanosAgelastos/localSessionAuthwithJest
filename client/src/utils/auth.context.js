import React from "react";

/*
 * when context is asked and not provided
 * defaults to value authorized.no,
 */
export const AuthContext = React.createContext({
  authStatus: false,
  userName: undefined,
  setUserName: () => {},
  clearUserName: () => {}
});
