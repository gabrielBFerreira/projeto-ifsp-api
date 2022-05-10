import { Router } from 'express';

import { ProductController } from '../functions/controllers/ProductController';

const productsRouter = Router();

const productController = new ProductController();

productsRouter.get('/', productController.index);

export { productsRouter };
