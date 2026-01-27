import Router from 'express';
import { addNewSubCategory, editSubCategory, toggleStatusOfCategory } from '../controllers/subCategory.controller.js';
const subCategoryRouter = Router();

subCategoryRouter.post('/addNewSubCategory', addNewSubCategory)

// subCategoryRouter.post('/deleteACategory', deleteACategory)

subCategoryRouter.post('/editSubCategory', editSubCategory)

subCategoryRouter.post('/toggleStatusSubCategory', toggleStatusOfCategory)

export default subCategoryRouter;