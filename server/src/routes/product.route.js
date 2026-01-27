import Router from 'express';
import { addNewProduct, deleteProduct, editProduct, productsDraftView, productsView, restoreDraftProduct } from '../controllers/products.controller.js';
import { upload } from '../middleware/multer.midlleware.js';
const productRouter = Router();

productRouter.get('/showAllProducts', productsView);

productRouter.get('/showDraftProducts', productsDraftView);

productRouter.post('/restoreDraftProducts', restoreDraftProduct);

productRouter.post('/addNewProduct', upload.array("productImages", 3), addNewProduct);

productRouter.delete('/deleteProduct/:productId', deleteProduct);

productRouter.put('/editProducts', upload.array("productImages", 3), editProduct);

export default productRouter;