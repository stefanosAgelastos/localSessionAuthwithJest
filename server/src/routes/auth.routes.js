import { Router } from "express";
import * as AuthController from "../controllers/auth.controller";
import passport from "../util/auth.service";
const authRouter = new Router();

/**
 * Custom middleware declaration
 * should follow right after deserialize method from auth.service
 * Checks if the user is authenticated,
 * on success it calls next
 * on fail sends 401
 */
var isAuthenticated = function(req, res, next) {
  console.log("isAuthenticated middleware called");
  if (req.isAuthenticated()) return next();
  /* TODO maybe try to redirect in these cases? */
  res.status(401).send(`Sorry, please signIn first`);
};

/**
 * Get signup
 * Public route
 */
authRouter.route("/signup").post(AuthController.signUp);

/**
 * Get Sign In
 * Assigns passport.authenticate according to strategy
 */
authRouter
  .route("/signin")
  .post(passport.authenticate("local"), AuthController.signIn);

/**
 * Get Session status
 * Assigns isAuthenticated middleware
 */
authRouter.route("/authStatus").get(isAuthenticated, AuthController.authStatus);

/**
 * Get Sign Out
 * Assigns isAuthenticated middleware
 */
authRouter.route("/signout").get(isAuthenticated, AuthController.signOut);

/**
 * Get Test protected secret
 * Assigns isAuthenticated middleware
 */
authRouter.route("/secret").get(isAuthenticated, AuthController.secret);

export default authRouter;
