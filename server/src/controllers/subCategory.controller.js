import mongoose from 'mongoose';
import { apiError } from '../utils/apiError.js'
import { apiResponse } from '../utils/apiResponse.js'
import { SubCategory } from '../models/subCategory.model.js';

export const addNewSubCategory = async (req, res) => {
    try {

        /*
        1. get category name and parent id
        2. validate the fields
        3. add the category 
        4. send response to frontend
        */

        const { subCategoryName, categoryId } = req.body;

        if (!subCategoryName)
            return res.status(400).json(apiError({ message: "Sub Category name is required" }));

        if (!categoryId)
            return res.status(400).json(apiError({ message: "Parent Category Id is required" }));

        const categoryNameRegex = /^[a-zA-Z0-9\s-]+$/;

        if (!categoryNameRegex.test(subCategoryName))
            return res.status(400).json(apiError({ message: "Invalid category name format" }));

        if (!mongoose.Types.ObjectId.isValid(categoryId))
            return res.status(400).json(apiError({ message: "Invalid Parent category id format" }));

        const subCategoryAlreadyExits = await SubCategory.findOne({ subCategoryName });

        if (subCategoryAlreadyExits)
            return res.status(400).json(apiError({ message: "Sub Category already exists" }));

        // 3. add the category 
        const newSubCategory = new SubCategory({
            subCategoryName: subCategoryName.toLowerCase(),
            categoryId: categoryId
        })
        await newSubCategory.save();

        // 4. send response to frontend
        return res.status(200).json(apiResponse({ message: "Sub Category added successfully", data: newSubCategory }))

    } catch (error) {
        return res.status(500).json(apiError({ message: "Error in adding new sub category", error: error }));
    }
}

export const deleteACategory = async (req, res) => {
    try {

    } catch (error) {
        return res.status(500).json(apiError({ message: "Error in deleting a category", error: error }));
    }
}

export const editSubCategory = async (req, res) => {
    try {

        /* 
            1. get category id, category new name, category parent id
            2. check if exists or not 
            3. validate the name
            4. update the name in db 
            5. send updated category to frontend
        */

        // 1. get category name and if  
        const { subCategoryId, subCategoryNewName, parentId } = req.body;

        if (!subCategoryId)
            return res.status(400).json(apiError({ message: "Sub Category id is required" }));

        if (!subCategoryNewName)
            return res.status(400).json(apiError({ message: "Category name is required" }));

        if (!parentId)
            return res.status(400).json(apiError({ message: "Parent category is required" }));

        // 2. check if exists or not 
        const subCategoryAlreadyExits = await SubCategory.findById(subCategoryId);

        if (!subCategoryAlreadyExits)
            return res.status(400).json(apiError({ message: "Sub Category do not exists" }));

        // 3. validate the sub category name and parent id
        const categoryNameRegex = /^[a-zA-Z0-9\s-]+$/;

        if (!categoryNameRegex.test(subCategoryNewName))
            return res.status(400).json(apiError({ message: "Invalid category name format" }));

        if (!mongoose.Types.ObjectId.isValid(parentId))
            return res.status(400).json(apiError({ message: "Invalid parent id" }));


        // 4. update the name in db 
        const updatedSubCategory = await SubCategory.findByIdAndUpdate(
            subCategoryId,
            { $set: { subCategoryName: subCategoryNewName, categoryId: parentId } },
            { new: true, runValidators: true }
        )

        // 5. send updated category to frontend
        return res.status(200).json(apiResponse({ message: "Category updated successfully", data: updatedSubCategory }))

    } catch (error) {
        return res.status(500).json(apiError({ message: "Error in updating sub category", error: error }));
    }
}

export const toggleStatusOfCategory = async (req, res) => {
    try {

        /*
        1. get id , current status
        2. verify id correct ?
        3. exists 
        4. toggle status 
        5. response send frontend
        */

        // 1. get id , current status
        const { subCategoryId, subCategoryStatus } = req.body

        if (!subCategoryId)
            return res.status(400).json(apiError({ message: "Sub Category id is required" }));

        if (!subCategoryStatus)
            return res.status(400).json(apiError({ message: "Sub Category current status is required" }));

        // 2. verify id correct ?
        const subCategoryIsExists = await SubCategory.findById(subCategoryId);

        if (!subCategoryIsExists)
            return res.status(400).json(apiError({ message: "Sub Category does not exists" }));

        // 3. toggle status 
        const updateStatus = subCategoryStatus == 'active' ? 'inactive' : 'active';
        subCategoryIsExists.subStatus = updateStatus
        await subCategoryIsExists.save({ validateBeforeSave: false });

        // 4. response send frontend
        return res.status(200).json(apiResponse({ message: "Sub category Status toggled", data: subCategoryIsExists }))

    } catch (error) {
        return res.status(500).json(apiError({ message: "Error in Changing the status of Sub Category", error: error }));
    }
}