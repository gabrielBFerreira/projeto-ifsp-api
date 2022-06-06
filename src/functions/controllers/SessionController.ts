import { Request, Response } from 'express';

import { CreateSessionService } from '../services/CreateSessionService';

export class SessionController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { email, senha } = req.body;

    const createSessionService = new CreateSessionService();

    const { usuario, token, refreshToken } = await createSessionService.run({
      email,
      senha,
    });

    return res.json({ usuario, token, refreshToken });
  }
}
