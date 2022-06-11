import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateRefreshTokenService } from '../services/CreateRefreshTokenService';

export class RefreshTokenController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { currentRefreshToken } = req.body;

    const createRefreshTokenService = container.resolve(
      CreateRefreshTokenService
    );

    const { refreshToken, token } = await createRefreshTokenService.run({
      currentRefreshToken,
    });

    return res.json({ token, refreshToken });
  }
}
