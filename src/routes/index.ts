import { Router } from 'express';

import { ordersRouter } from './orders.routes';
import { productsRouter } from './products.routes';
import { sessionsRouter } from './sessions.routes';
import { usersRouter } from './users.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/orders', ordersRouter);
routes.use('/products', productsRouter);
routes.use('/login', sessionsRouter);

export { routes };
