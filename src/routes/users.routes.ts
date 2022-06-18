import { Router } from 'express';

import { UserController } from '../functions/controllers/UserController';
import { isAdmin } from '../utils/AdminHandler';
import { isAuthenticated } from '../utils/AuthHandler';

const usersRouter = Router();

const userController = new UserController();

usersRouter.post('/', userController.create);
usersRouter.get('/:idUsuario', isAuthenticated, userController.show);
usersRouter.put('/', isAuthenticated, userController.update);
usersRouter.get('/', isAuthenticated, isAdmin, userController.index);

export { usersRouter };
