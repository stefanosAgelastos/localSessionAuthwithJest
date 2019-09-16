import axios from "axios";

const authUrl = "http://localhost:8000/api";

const authServices = {
  /**
   * Handes the signup backend request
   * called from signup.component submit method
   * returns username if 200
   * throws username taken error message from server if 409
   * throws custom error message if else
   */
  register(cred) {
    console.log("registering user: ", cred);
    return axios
      .post(authUrl + "/signup", {
        username: cred.username,
        password: cred.password
      })
      .then(response => {
        console.log(response);
        return response.data.username;
      })
      .catch(error => {
        // first check if err.response is defined
        if (error.response && error.response.status === 409) {
          // username already exists
          console.log(error.response.data);
          throw new Error(error.response.data);
        } else {
          // then it must be a 5XX errro
          throw new Error("Server error, try again");
        }
      });
  },
  /**
   * Handes the signin backend request
   * called from signin.component submit method
   * returns username if 200
   * throws wrong credentials error message if 401
   * throws custom error message if else
   */
  authenticate(cred) {
    console.log("authorising user: ", cred);
    return axios
      .post(
        authUrl + "/signin",
        {
          username: cred.username,
          password: cred.password
        },
        { withCredentials: true }
      )
      .then(response => {
        console.log(response);
        return response.data.username;
      })
      .catch(error => {
        console.log("signin error: ", error);
        // first check if err.response is defined
        if (error.response && error.response.status === 401)
          throw new Error("Wrong credentials");
        // then it must be a 5XX errro
        throw new Error("Server error, try again");
      });
  },
  /**
   * Handles the signout backend request
   * returns true if 200
   * TODO: handle 401
   * throws custom error message if else
   */
  signout() {
    console.log("Get signout");
    return axios
      .get(authUrl + "/signout", { withCredentials: true })
      .then(response => {
        console.log(response);
        return true;
      })
      .catch(error => {
        console.log("signOut error: ");
        throw new Error("Couldn't sign out at the moment");
      });
  },
  /**
   * Get authStatus and username of session
   * returns username if 200
   * TODO: throws error if else
   */
  getauthStatus() {
    console.log("Get authStatus");
    return axios
      .get(authUrl + "/authStatus", { withCredentials: true })
      .then(response => {
        console.log(response);
        return response.data.username;
      })
      .catch(error => {
        console.log("authStatus error: ");
      });
  },
  /**
   * Get's content from a protected endpoint
   */
  secret() {
    console.log("requesting secret: ");
    return axios
      .get(authUrl + "/secret", { withCredentials: true })
      .then(response => {
        console.log(response);
        if (!response.data.errmsg) {
          return response.data;
        }
      })
      .catch(err => {
        console.log("error retreiving secret: ");
      });
  }
};

export default authServices;
