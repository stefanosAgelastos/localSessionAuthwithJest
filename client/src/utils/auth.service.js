import axios from "axios";

const authUrl = "http://localhost:8000/api";

const authServices = {
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
  authenticate(cred) {
    console.log("authorising user: ", cred);
    return axios
      .post(
        authUrl + "/signin",
        {
          username: cred.username,
          password: cred.password
        } /* ,
        { withCredentials: true } */
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
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100); // fake async
  }
};

export default authServices;
