import { Router } from 'express';

import { UserController } from '../functions/controllers/UserController';

const usersRouter = Router();

const userController = new UserController();

usersRouter.post('/', userController.create);
usersRouter.get('/', userController.index);

export { usersRouter };
