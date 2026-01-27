import Router from 'express';
import { filterUser, getAllAdmin, getAllUsers } from '../controllers/user.controller.js';
const userRouter = Router();

userRouter.get('/getAllUsers', getAllUsers);

userRouter.get('/getAllAdmin', getAllAdmin);

userRouter.post('/filterUsers', filterUser);

export default userRouter;
