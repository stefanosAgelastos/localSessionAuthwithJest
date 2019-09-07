import { Router } from 'express';
import * as AuthController from '../controllers/auth.controller';
const router = new Router();

// Get Sign Up
router.route('/signup').get(AuthController.signUp);

// Get Sign In
router.route('/signin').get(AuthController.signIn);

// Sign Out
router.route('/signout').post(AuthController.signOut);



export default router;
