import { User } from "../models/user.model.js";
import { apiError } from "../utils/apiError.js"
import { apiResponse } from "../utils/apiResponse.js";

export const getAllUsers = async (req, res) => {
    try {

        /*
        1. get all users 
        2. send users to frontend
        */

        // 1. get all users 
        const allUsers = await User.find({
            userRole: "user"
        });

        // 2. send users to frontend
        return res.status(200).json(apiResponse({ message: 'All Users fetched', data: allUsers }));

    } catch (error) {
        console.log('Error in getAllUsers - ', error);
        return res.status(500).json(apiError({ message: 'Error in showing all users' }));
    }
}


export const getAllAdmin = async (req, res) => {
    try {

        /*
        1. get all users 
        2. send users to frontend
        */

        // 1. get all users 
        const allUsers = await User.find({
            userRole: "admin"
        });

        // 2. send users to frontend
        return res.status(200).json(apiResponse({ message: 'All Users fetched', data: allUsers }));

    } catch (error) {
        console.log('Error in getAllUsers - ', error);
        return res.status(500).json(apiError({ message: 'Error in showing all users' }));
    }
}


export const filterUser = async (req, res) => {
    try {

        /*
        1. const userName | userEmail | userRole  
        2. validate the data 
        3. create a dynamic query 
        4. find users 
        5. send data to frontend 
        */

        // 1. const  userName | userEmail | userRole  
        const { search } = req.body;

        // 2. validate the data 

        // create a dynamic query 
        const query = {
            userRole: 'user'
        };

        if (search) {
            const searchRegex = new RegExp(search, 'i');

            query.$or = [
                { userName: searchRegex },
                { userEmail: searchRegex }
            ];
        }

        // 4. find users 
        const findUsers = await User.find(query)

        // 5. send data to frontend 
        return res.status(200).json(apiResponse({ message: 'Data filtered', data: findUsers }));

    } catch (error) {
        console.log('Error in filtering users - ', error);
        return res.status(500).json(apiError({ message: 'Error in filtering users' }));
    }
}