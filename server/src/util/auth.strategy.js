import User from "../models/auth.User";
import LocalStrategy from "passport-local";

// With the new keyword we tell Passport to use an instance of the LocalStrategy we required.
const strategy = new LocalStrategy(
  {
    usernameField: "username" // not necessary, DEFAULT
  },
  /**
   * Verify Callback,
   * finds the user that posseses the set of credentials
   * @param {string} username
   * @param {string} password
   * @param {Function} done(err, user, message)
   *         supply Passport with the user that authenticated
   *         err {String}: error if an exception occured
   *         user {user || boolean}: the authenticated user or else false
   *         message { message: string}: authentication failure message
   * @returns void
   */
  function(username, password, done) {
    User.findOne({ username: username }, (err, user) => {
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false, { message: "Incorrect username" });
      }
      if (!user.verifyPassword(password)) {
        return done(null, false, { message: "Incorrect password" });
      }
      return done(null, user);
    });
  }
);

export default strategy;
