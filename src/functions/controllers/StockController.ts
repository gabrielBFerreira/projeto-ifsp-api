import { Request, Response } from 'express';

import { ListStockService } from '../services/ListStockService';

export class StockController {
  public async index(req: Request, res: Response): Promise<Response> {
    const listStockService = new ListStockService();

    const { estoque } = await listStockService.run();

    return res.json({ estoque });
  }
}
