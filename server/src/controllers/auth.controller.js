/* imports */
import User from "../models/auth.User";

/**
 * Sign Up new User
 * @param req expect content-type: json, body has username and password fields
 * @param res
 * @returns void
 */
export function signUp(req, res) {
  console.log("user signup");
  console.log(req.body);

  const { username, password } = req.body;

  User.findOne({ username: username }, (err, user) => {
    if (err) {
      console.log("User.js posting error: ", err);
    } else if (user) {
      res.json({
        error: `Sorry, ${username} username already exists`
      });
    } else {
      const newUser = new User({
        username: username,
        password: password
      });
      newUser.save((err, savedUser) => {
        console.log("save error:", err);
        res.json(savedUser);
      });
    }
  });
}

/**
 * Sign In User,
 * Follows passport.authenticate() middleware, defined in auth.routes
 * @param req
 * @param res
 * @returns void
 */
export function signIn(req, res) {
  var userInfo = {
    username: req.user.username
  };
  res.send(userInfo);
}

/**
 * Sign Out User from session
 * Follows passport.authenticate() middleware, defined in auth.routes
 * @param req
 * @param res
 * @returns void
 */
export function signOut(req, res) {
  req.logout();
  res.send({ msg: "loggging out" });
}

/**
 * Sends a secret message when authenticated
 * Follows passport.authenticate() middleware, defined in auth.routes
 * @param req
 * @param res
 * @returns void
 */
export function secret(req, res) {
  res.send({ msg: "THE SECRET" });
}
