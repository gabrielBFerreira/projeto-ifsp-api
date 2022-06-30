import { Router } from 'express';

import { CategoryController } from '../functions/controllers/CategoryController';

const categoriesRouter = Router();

const categoryController = new CategoryController();

categoriesRouter.get('/', categoryController.index);

export { categoriesRouter };
