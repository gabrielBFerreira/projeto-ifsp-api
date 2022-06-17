import { Request, Response } from 'express';

import { CreateStockEntryService } from '../services/CreateStockEntryService';
import { ListStockService } from '../services/ListStockService';

export class StockController {
  public async index(req: Request, res: Response): Promise<Response> {
    const listStockService = new ListStockService();

    const { estoque } = await listStockService.run();

    return res.json({ estoque });
  }

  public async create(req: Request, res: Response): Promise<Response> {
    const { operacao, quantidade, idProduto, idFornecedor } = req.body;

    const createStockEntryService = new CreateStockEntryService();

    const { produto, registro } = await createStockEntryService.run({
      operacao, // 1 = entrada, 2 = saída
      quantidade,
      idProduto,
      idFornecedor,
    });

    return res.json({ produto, registro });
  }
}
