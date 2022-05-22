import { Router } from 'express';

import { OrderController } from '../functions/controllers/OrderController';

const ordersRouter = Router();

const orderController = new OrderController();

ordersRouter.post('/', orderController.create);

export { ordersRouter };
