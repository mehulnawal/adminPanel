import Router from 'express';
import { forgetPassword, login, logout, register, resetPassword, resetRefreshToken, verifyUser, verifyUserOTP } from '../controllers/auth.controller.js';
import { upload } from '../middleware/multer.midlleware.js';
const authRouter = Router();

authRouter.post('/login', login);

// authRouter.post('/login/goggle',);

authRouter.get('/logout', logout);

authRouter.post('/register', upload.single('userProfileImage'), register);

authRouter.post('/forgetPassword', forgetPassword);

authRouter.post('/resetPassword', resetPassword);

authRouter.post('/resendOTP', forgetPassword);

authRouter.post('/verifyUser', verifyUser);

authRouter.post('/verifyUserOTP', verifyUserOTP);

authRouter.post('/resetRefreshToken', resetRefreshToken);

export default authRouter;