import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

import { authenticationConfig } from '../configs/authentication';
import { ErrorHandler } from './ErrorHandler';

interface ITokenInfo {
  accessLevel: number;
  iat: number;
  exp: number;
  sub: string;
}

export function isAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  const header = req.headers.authorization;

  if (!header) throw new ErrorHandler(401, 'Token inválido.');

  const [, token] = header.split(' ');
  const { secret } = authenticationConfig.client.jwt;

  try {
    const decryptedToken = verify(token, secret);

    const { accessLevel, sub } = decryptedToken as ITokenInfo;

    req.user = { id: sub, accessLevel };

    return next();
  } catch (err) {
    throw new ErrorHandler(401, 'Token inválido.');
  }
}
