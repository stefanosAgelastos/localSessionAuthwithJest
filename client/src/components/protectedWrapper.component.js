import React, { useContext } from "react";
import { AuthContext } from "./auth.context";

const ProfileWrapper = (...children) => {
  const auth = useContext(AuthContext);
  console.log("protectedWrapper.component render");
  return (
    <React.Fragment>
      <p>{`Logged in user: ${auth.userName}`}</p>
      <button></button>
      {...children}
    </React.Fragment>
  );
};

export default ProfileWrapper;