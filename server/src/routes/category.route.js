import Router from 'express';
import { addNewCategory, deleteACategory, editCategory, toggleStatusOfCategory, viewAllCategories } from '../controllers/category.controller.js';
const categoryRouter = Router();

categoryRouter.post('/addNewCategory', addNewCategory)

categoryRouter.post('/deleteACategory', deleteACategory)

categoryRouter.post('/editCategory', editCategory)

categoryRouter.get('/viewAllCategories', viewAllCategories)

categoryRouter.post('/toggleStatusOfCategory',toggleStatusOfCategory)

export default categoryRouter;