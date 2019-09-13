import React from "react";

/* Context of Authorization status and methods to update.
 * When context is asked but not provided,
 * it defaults to values below.
 */
export const AuthContext = React.createContext({
  authStatus: false,
  userName: undefined,
  setUserName: () => {},
  clearUserName: () => {}
});
