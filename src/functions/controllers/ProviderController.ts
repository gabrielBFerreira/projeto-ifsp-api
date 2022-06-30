import { Request, Response } from 'express';

import { ListProvidersService } from '../services/ListProvidersService';

export class ProviderController {
  public async index(req: Request, res: Response): Promise<Response> {
    const listProvidersService = new ListProvidersService();

    const { fornecedores } = await listProvidersService.run();

    return res.json({ fornecedores });
  }
}
