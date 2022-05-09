import { Request, Response } from 'express';

import { ListUsersService } from '../services/ListUsersService';

export class UserController {
  public async index(req: Request, res: Response): Promise<Response> {
    const listUsersService = new ListUsersService();

    const { usuarios } = await listUsersService.run();

    return res.json({ usuarios });
  }
}
