import { Router } from 'express';
import multer from 'multer';

import { uploadConfig } from '../configs/upload';
import { PictureController } from '../functions/controllers/PictureController';
import { ProductController } from '../functions/controllers/ProductController';
import { isAdmin } from '../utils/AdminHandler';
import { isAuthenticated } from '../utils/AuthHandler';

const productsRouter = Router();

const upload = multer(uploadConfig.multer);

const productController = new ProductController();
const pictureController = new PictureController();

productsRouter.get('/', productController.index);
productsRouter.post('/', isAuthenticated, isAdmin, productController.create);
productsRouter.post(
  '/:idProduto/pictures',
  isAuthenticated,
  isAdmin,
  upload.single('figura'),
  pictureController.create
);

export { productsRouter };
