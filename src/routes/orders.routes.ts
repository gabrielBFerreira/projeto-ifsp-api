import { Router } from 'express';

import { OrderController } from '../functions/controllers/OrderController';
import { isAuthenticated } from '../utils/AuthHandler';

const ordersRouter = Router();

const orderController = new OrderController();

ordersRouter.post('/', isAuthenticated, orderController.create);

export { ordersRouter };
