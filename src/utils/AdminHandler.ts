import { NextFunction, Request, Response } from 'express';

import { ErrorHandler } from './ErrorHandler';

export function isAdmin(req: Request, res: Response, next: NextFunction): void {
  const { accessLevel } = req.user;

  if (accessLevel === 1) return next();

  throw new ErrorHandler(401, 'Acesso negado. Área restrita.');
}
