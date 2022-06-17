import { Router } from 'express';

import { ordersRouter } from './orders.routes';
import { productsRouter } from './products.routes';
import { refreshTokensRouter } from './refreshTokens.routes';
import { sessionsRouter } from './sessions.routes';
import { stockRouter } from './stock.routes';
import { usersRouter } from './users.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/orders', ordersRouter);
routes.use('/products', productsRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/stock', stockRouter);
routes.use('/refresh-tokens', refreshTokensRouter);

export { routes };
