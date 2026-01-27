import mongoose from 'mongoose'
import { apiError } from '../utils/apiError.js';
import { apiResponse } from '../utils/apiResponse.js';

export const connectDB = async () => {
    try {

        const connectionInstance = await mongoose.connect(`${process.env.DB_URL}`);
        console.log(`Host name -`, connectionInstance.connection.host);

        return apiResponse({ message: "Server started successfully" });

    } catch (error) {
        return apiError({ message: "Cannot Start server", error: error });
    }
}

