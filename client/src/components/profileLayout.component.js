import React, { useContext } from "react";
import { AuthContext } from "./auth.context";

const ProfileLayout = (...children) => {
  const auth = useContext(AuthContext);
  console.log("protectedWrapper.component render");
  return (
    <React.Fragment>
      <p>{`Logged in user: ${auth.userName}`}</p>
      {...children}
    </React.Fragment>
  );
};

export default ProfileLayout;