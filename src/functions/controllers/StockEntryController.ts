import { Request, Response } from 'express';

import { CreateStockEntryService } from '../services/CreateStockEntryService';
import { ListStockEntriesService } from '../services/ListStockEntriesService';

export class StockEntryController {
  public async index(req: Request, res: Response): Promise<Response> {
    const listStockEntriesService = new ListStockEntriesService();

    const { registros } = await listStockEntriesService.run();

    return res.json({ registros });
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
