import { Request, Response } from 'express';

import { ListProductsService } from '../services/ListProductsService';

export class ProductController {
  public async index(req: Request, res: Response): Promise<Response> {
    const listProductsService = new ListProductsService();

    const { produtos } = await listProductsService.run();

    return res.json({ produtos });
  }
}
