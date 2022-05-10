import { Router } from 'express';

import { productsRouter } from './products.routes';
import { usersRouter } from './users.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/products', productsRouter);

export { routes };
