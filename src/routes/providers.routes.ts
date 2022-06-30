import { Router } from 'express';

import { ProviderController } from '../functions/controllers/ProviderController';
import { isAdmin } from '../utils/AdminHandler';
import { isAuthenticated } from '../utils/AuthHandler';

const providersRouter = Router();

const providerController = new ProviderController();

providersRouter.get('/', isAuthenticated, isAdmin, providerController.index);

export { providersRouter };
