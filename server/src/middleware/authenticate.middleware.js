import { User } from '../models/user.model.js';
import { apiError } from '../utils/apiError.js'
import { apiResponse } from '../utils/apiResponse.js'
import jwt from 'jsonwebtoken';

export const authenticateUser = async (req, res, next) => {
    try {

        /*
        1. check user from tokens 
        2. then decode the token 
        3. check if user is present
        */


        // 1. check user from tokens 
        const { refreshToken } = req.cookies;

        if (!refreshToken)
            return res.status(401).json(apiResponse({ message: "Unauthorized" }));

        // 2. then decode the token 
        const decodeToken = jwt.decode(refreshToken, process.env.REFRESH_TOKEN_SECRET_KEY);

        // 3. check if user is present
        const user = await User.findById(decodeToken._id);

        if (!user)
            return res.status(401).json(apiResponse({ message: "Unauthorized" }));

        next();

    } catch (error) {
        return res.status(500).json(apiError({ message: "Error in authenticating user", error: error }));
    }
}