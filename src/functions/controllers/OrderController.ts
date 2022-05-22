import { Request, Response } from 'express';

import { CreateOrderService } from '../services/CreateOrderService';

export class OrderController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { precoTotal, idUsuario, idFormaPagamento } = req.body;

    const createOrderService = new CreateOrderService();

    const { venda } = await createOrderService.run({
      precoTotal,
      idUsuario,
      idFormaPagamento,
    });

    return res.json({ venda });
  }
}
