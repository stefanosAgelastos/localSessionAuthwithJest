/* imports */
import User from "../models/auth.User";

/**
 * Sign Up new User
 * Holds the logic for persisting new User
 * @param req expect content-type: json, body has username and password fields
 * @param res 409 if username taken, 500 for other error, 200 and user if successful signup
 * @returns void
 */
export function signUp(req, res) {
  console.log("user signup");
  console.log(req.body);

  const { username, password } = req.body;

  User.findOne({ username: username })
    .then(user => {
      if (user) {
        res.status(409).send(`Sorry, username ${username} already exists`);
      } else {
        const newUser = new User({
          username: username,
          password: password
        });
        newUser.save().then(user => {
          console.log("SUCCESSFULL SIGNUP");
          res.json(user);
        });
      }
    })
    .catch(err => {
      res.status(500).send(`Ups, Server error`);
    });
}

/**
 * Sign In User,
 * Follows passport.authenticate() middleware, set in auth.routes
 * and defined as the verify method at auth.strategy
 * verify will send 401 for wrong credentials
 * @param req req has session and user fields
 * @param res 200 with username in body
 * @returns void
 */
export function signIn(req, res) {
  console.log("signin controller");
  var userInfo = {
    username: req.user.username
  };
  res.json(userInfo);
}

/**
 * Returns authStatus and User's username of session cookie,
 * Follows isAuthenticated() middleware, set in auth.routes
 * @param req req has session and user fields
 * @param res 200 with username in body
 * @returns void
 */
export function authStatus(req, res) {
  console.log("authStatus controller");
  var userInfo = {
    username: req.user.username
  };
  res.json(userInfo);
}

/**
 * Sign Out User from session
 * Follows isAuthenticated() middleware, set in auth.routes
 * @param req req has session and user fields
 * @param res 200 with custom message in body
 * @returns void
 */
export function signOut(req, res) {
  console.log("signout controller");
  req.logout();
  res.send({ msg: "loggging out" });
}

/**
 * Sends a secret message when authenticated
 * Follows isAuthenticated() middleware, set in auth.routes
 * @param req req has session and user fields
 * @param res 200 with custom message in body
 * @returns void
 */
export function secret(req, res) {
  console.log("secret controller for user: ", req.user.username);
  res.send({ message: `Oh, ${req.user.username}, the backend is also aware that this is you and sends this line as a greeting!`});
}
