import { celebrate, Segments, Joi } from 'celebrate';
import { Router } from 'express';

import { SessionController } from '../functions/controllers/SessionController';

const sessionsRouter = Router();

const sessionController = new SessionController();

sessionsRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      email: Joi.string().required(),
      senha: Joi.string().required(),
    },
  }),
  sessionController.create
);

export { sessionsRouter };
