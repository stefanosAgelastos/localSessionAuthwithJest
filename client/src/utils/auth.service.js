import axios from "axios";

const authUrl = "http://localhost:8000/api";

const authServices = {
  /**
   * Handes the signup backend request
   * called from signup.component submit method
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
        if (!response.data.errmsg) {
          return response.data.username;
        } else {
          console.log("username already taken");
        }
      })
      .catch(err => {
        if (err.response.status === 409) {
          // username already exists
          console.log(err.response.data);
        } else {
          console.log("error try again later, ", err.response.data);
        }
      });
  },
  /**
   * Handes the signin backend request
   * called from signin.component submit method
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
        if (!response.data.errmsg) {
          return response.data.username;
        }
      })
      .catch(error => {
        console.log("signup error: ");
        throw error;
      });
  },
  /**
   * Get authStatus and username of session
   */
  getauthStatus(cb) {
    console.log("Get authStatus");
    return axios
      .get(
        authUrl + "/authStatus",
        { withCredentials: true }
      )
      .then(response => {
        console.log(response);
        /* TODO would prefere to do this with http status */
        if (!response.data.errmsg) {
          return response.data.username;
        }
      })
      .catch(error => {
        console.log("authStatus error: ");
        throw error;
      });
  },
  /**
   * Handes the signout backend request
   * TODO
   */
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100); // fake async
  },
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
        throw err;
      });
  }
};

export default authServices;
