import { Router } from 'express';

import { StockController } from '../functions/controllers/StockController';
import { StockEntryController } from '../functions/controllers/StockEntryController';
import { isAdmin } from '../utils/AdminHandler';
import { isAuthenticated } from '../utils/AuthHandler';

const stockRouter = Router();

const stockController = new StockController();
const stockEntryController = new StockEntryController();

stockRouter.get('/', isAuthenticated, isAdmin, stockController.index);

stockRouter.get(
  '/entries',
  isAuthenticated,
  isAdmin,
  stockEntryController.index
);
stockRouter.post(
  '/entries',
  isAuthenticated,
  isAdmin,
  stockEntryController.create
);

export { stockRouter };
