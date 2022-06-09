import { Router } from 'express';

import { ProductController } from '../functions/controllers/ProductController';
import { isAdmin } from '../utils/AdminHandler';
import { isAuthenticated } from '../utils/AuthHandler';

const productsRouter = Router();

const productController = new ProductController();

productsRouter.get('/', productController.index);
productsRouter.post('/', isAuthenticated, isAdmin, productController.create);

export { productsRouter };
