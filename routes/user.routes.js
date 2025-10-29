import {Router} from 'express';

import authorize from '../middlewares/auth.middleware.js';

import {getUser, getUsers} from "../controllers/user.controller.js";


const UserRouter = Router();

UserRouter.get('/', getUsers);

UserRouter.get('/:id',authorize,getUser);

UserRouter.post('/', (req, res) => res.send({title : 'Create new User Routes'}));

UserRouter.put('/:id', (req, res) => res.send({title : 'Update User Routes'}));

UserRouter.delete('/:id', (req, res) => res.send({title : 'Delete User Routes'}));

export default UserRouter;