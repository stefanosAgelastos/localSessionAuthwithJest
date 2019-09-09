import { Router } from 'express';
import * as AuthController from '../controllers/auth.controller';
import passport from '../util/auth.service';
const authRouter = new Router();

// Get Sign Up
authRouter.route('/signup').post(AuthController.signUp);

// Get Sign In
authRouter.route('/signin').post(passport.authenticate('local'),AuthController.signIn);

// Sign Out
authRouter.route('/signout').post(passport.authenticate('local'),AuthController.signOut);

// Test protected secret
authRouter.route('/secret').get(passport.authenticate('local'),AuthController.secret);

export default authRouter;
