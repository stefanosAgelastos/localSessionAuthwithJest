import passport from "passport";
import LocalStrategy from "./auth.strategy";
import User from "../models/auth.User";

/**
 * serializes authenticated User into the session
 * called after the authenticate middleware
 * @param {User} user provided by the Strategy verify callback at ./auth.strategy
 * @param {Function} done(err, id)
 * @returns void
 */
passport.serializeUser((user, done) => {
  console.log("Serializing user");
  console.log("user: ", user);

  done(null, { _id: user._id });
});

passport.deserializeUser((id, done) => {
  console.log("DeSerializing user");
  User.findOne({ _id: id }, "username", (err, user) => {
    done(null, user);
  });
});

// Use Strategy
passport.use(LocalStrategy);

export default passport;
