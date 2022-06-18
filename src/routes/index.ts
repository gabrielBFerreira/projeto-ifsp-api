import { Router } from 'express';

import { categoriesRouter } from './categories.routes';
import { ordersRouter } from './orders.routes';
import { productsRouter } from './products.routes';
import { providersRouter } from './providers.routes';
import { refreshTokensRouter } from './refreshTokens.routes';
import { sessionsRouter } from './sessions.routes';
import { stockRouter } from './stock.routes';
import { usersRouter } from './users.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/stock', stockRouter);
routes.use('/orders', ordersRouter);
routes.use('/products', productsRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/providers', providersRouter);
routes.use('/categories', categoriesRouter);
routes.use('/refresh-tokens', refreshTokensRouter);

export { routes };
