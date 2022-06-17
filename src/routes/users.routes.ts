import { Router } from 'express';

import { UserController } from '../functions/controllers/UserController';
import { isAuthenticated } from '../utils/AuthHandler';

const usersRouter = Router();

const userController = new UserController();

usersRouter.get('/', isAuthenticated, userController.index);
usersRouter.get('/:idUsuario', isAuthenticated, userController.show);
usersRouter.post('/', userController.create);

export { usersRouter };
