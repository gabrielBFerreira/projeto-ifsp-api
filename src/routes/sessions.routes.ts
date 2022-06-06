import { Router } from 'express';

import { SessionController } from '../functions/controllers/SessionController';

const sessionsRouter = Router();

const sessionController = new SessionController();

sessionsRouter.post('/', sessionController.create);

export { sessionsRouter };
