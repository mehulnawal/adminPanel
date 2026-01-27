import mongoose from 'mongoose';
import { apiError } from '../utils/apiError.js'
import { apiResponse } from '../utils/apiResponse.js'
import { Category } from '../models/cateogory.model.js';

export const addNewCategory = async (req, res) => {
    try {

        /*
        1. get category name
        2. validate the fields
        3. add the category 
        4. send response to frontend
        */

        // 1. get category name, slug and whether it is parent or not 
        const { categoryName } = req.body;

        if (!categoryName)
            return res.status(400).json(apiError({ message: "Category name is required" }));

        // 2. validate the fields
        const categoryNameRegex = /^[a-zA-Z0-9\s-]+$/;

        if (!categoryNameRegex.test(categoryName))
            return res.status(400).json(apiError({ message: "Invalid category name format" }));

        const categoryAlreadyExits = await Category.findOne({ categoryName });

        if (categoryAlreadyExits)
            return res.status(400).json(apiError({ message: "Category already exists" }));

        // 3. add the category 
        const newCategory = new Category({
            categoryName: categoryName.toLowerCase(),
        })
        await newCategory.save();

        // 4. send response to frontend
        return res.status(200).json(apiResponse({ message: "Category added successfully", data: newCategory }))

    } catch (error) {
        return res.status(500).json(apiError({ message: "Error in adding new category", error: error }));
    }
}

export const deleteACategory = async (req, res) => {
    try {

    } catch (error) {
        return res.status(500).json(apiError({ message: "Error in deleting a category", error: error }));
    }
}

export const updateCategory = async (req, res) => {
    try {

    } catch (error) {
        return res.status(500).json(apiError({ message: "Error in deleting a category", error: error }));
    }
}

export const editCategory = async (req, res) => {
    try {

        /* 
            1. get category name  
            2. check if exists or not 
            3. validate the name
            4. update the name in db 
            5. send updated category to frontend
        */

        // 1. get category name and if  
        const { categoryId, categoryNewName } = req.body;

        if (!categoryId)
            return res.status(400).json(apiError({ message: "Category id is required" }));

        // 2. check if exists or not 
        const categoryAlreadyExits = await Category.findById(categoryId);

        if (!categoryAlreadyExits)
            return res.status(400).json(apiError({ message: "Category do not exists" }));

        // 3. validate the name
        const categoryNameRegex = /^[a-zA-Z0-9\s-]+$/;

        if (!categoryNameRegex.test(categoryNewName))
            return res.status(400).json(apiError({ message: "Invalid category name format" }));


        // 4. update the name in db 
        const updateCategory = await Category.findByIdAndUpdate(
            categoryId,
            { $set: { categoryName: categoryNewName } },
            { new: true, runValidators: true }
        )

        // 5. send updated category to frontend
        return res.status(200).json(apiResponse({ message: "Category updated successfully", data: updateCategory }))

    } catch (error) {
        return res.status(500).json(apiError({ message: "Error in deleting a category", error: error }));
    }
}

export const viewAllCategories = async (req, res) => {
    try {

        /*
        1. find all categories 
        2. send res to frontend
        */

        // 1. find all categories 
        const category = await Category.aggregate([
            {
                $lookup: {
                    from: "subcategories",
                    localField: "_id",
                    foreignField: "categoryId",
                    as: "subCategories"
                }
            },
            {
                $project: {
                    _id: 1,
                    categoryName: 1,
                    slug: 1,
                    status: 1,
                    subCategories: {
                        _id: 1,
                        subCategoryName: 1,
                        subStatus: 1,
                        subSlug: 1
                    }
                }
            }
        ])

        // 2. send res to frontend
        return res.status(200).json(apiResponse({ message: "All categories fetched successfully", data: category }))

    } catch (error) {
        return res.status(500).json(apiError({ message: "Error in displaying all category", error: error }));
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
        const { categoryId, categoryStatus } = req.body

        console.log("REQ BODY:", req.body, typeof req.body);

        if (!categoryId)
            return res.status(400).json(apiError({ message: "Category id is required" }));

        if (!categoryStatus)
            return res.status(400).json(apiError({ message: "Category current status is required" }));

        // 2. verify id correct ?
        const categoryIsExists = await Category.findById(categoryId);

        if (!categoryIsExists)
            return res.status(400).json(apiError({ message: "Category does not exists" }));

        // 3. toggle status 
        const updateStatus = categoryStatus == 'active' ? 'inactive' : 'active';
        categoryIsExists.status = updateStatus
        await categoryIsExists.save({ validateBeforeSave: false });

        // 4. response send frontend
        return res.status(200).json(apiResponse({ message: "Category Status toggled", data: categoryStatus }))

    } catch (error) {
        return res.status(500).json(apiError({ message: "Error in changing the status of category", error: error }));
    }
}