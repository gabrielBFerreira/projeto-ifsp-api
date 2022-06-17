import { Router } from 'express';

import { StockController } from '../functions/controllers/StockController';
import { isAdmin } from '../utils/AdminHandler';
import { isAuthenticated } from '../utils/AuthHandler';

const stockRouter = Router();

const stockController = new StockController();

stockRouter.get('/', isAuthenticated, isAdmin, stockController.index);
stockRouter.post('/', isAuthenticated, isAdmin, stockController.create);

export { stockRouter };
