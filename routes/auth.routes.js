import {Router} from 'express';
import {signIn, signUp, signOut} from '../controllers/auth.controller.js'
const authRouter = Router();

//Path: /api/v1/auth/sign-up -> Post Body -> { name, email, password} -> creates a new userc
authRouter.post('/sign-up', signUp);

//Path: /api/v1/auth/sign-in
authRouter.post('/sign-in', signIn);

//Path: /api/v1/auth/sign-out
authRouter.post('/sign-out', signOut);

export default authRouter;