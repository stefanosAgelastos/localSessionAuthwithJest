import React from "react";

export const authorized = {
  yes: {
    userName: ""
  },
  no: {}
};
/*
 * when context is asked and not provided
 * defaults to value authorized.no,
 */
export const AuthContext = React.createContext({
  authStatus: authorized.no,
  toggleAuthorized: () => {}
});
