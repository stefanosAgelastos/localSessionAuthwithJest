import { Router } from 'express';
import * as AuthController from '../controllers/auth.controller';
import passport from '../util/auth.service';
const authRouter = new Router();

/**
 * Checks if the user is authenticated,
 * it is called right after deserialize method from auth.service
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
var isAuthenticated = function (req, res, next) {
    console.log("iseAuthenticated middleware called");
    if (req.isAuthenticated())
      return next();
      /* TODO maybe try to redirect in these cases? */
      res.status(401).send(`Sorry, please signIn first`);
    }

// Get Sign Up
authRouter.route('/signup').post(AuthController.signUp);

// Get Sign In
authRouter.route('/signin').post(passport.authenticate('local'),AuthController.signIn);

// Get Session status
authRouter.route('/authStatus').post(isAuthenticated,AuthController.authStatus);

// Sign Out
authRouter.route('/signout').post(isAuthenticated,AuthController.signOut);

// Test protected secret
authRouter.route('/secret').get(isAuthenticated,AuthController.secret);

export default authRouter;
