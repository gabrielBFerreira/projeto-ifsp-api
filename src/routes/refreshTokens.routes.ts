import { Router } from 'express';

import { RefreshTokenController } from '../functions/controllers/RefreshTokenController';

const refreshTokensRouter = Router();

const refreshTokenController = new RefreshTokenController();

refreshTokensRouter.post('/', refreshTokenController.create);

export { refreshTokensRouter };
