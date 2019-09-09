import axios from "axios";

const authUrl = "http://localhost:8000/api";

const auth = {
  isAuthenticated: false,
  register(cred) {
    console.log(cred);

    axios
      .post(authUrl + "/signup", {
        username: cred.username,
        password: cred.password
      })
      .then(response => {
        console.log(response);
        if (!response.data.errmsg) {
          console.log("successful signup");
        } else {
          console.log("username already taken");
        }
      })
      .catch(error => {
        console.log("signup error: ");
        console.log(error);
      });
  },
  authenticate(cred) {
    axios
    .post(authUrl + "/signin", {
      username: cred.username,
      password: cred.password
    })
    .then(response => {
      console.log(response);
      if (!response.data.errmsg) {
        console.log("successful signin");
      } else {
        console.log("username already taken");
      }
    })
    .catch(error => {
      console.log("signup error: ");
      console.log(error);
    });
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100); // fake async
  }
};

export default auth;