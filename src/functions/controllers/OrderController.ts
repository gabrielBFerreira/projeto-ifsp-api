import { Request, Response } from 'express';

import { CreateOrderService } from '../services/CreateOrderService';

export class OrderController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { precoTotal, idFormaPagamento, produtos } = req.body;

    const createOrderService = new CreateOrderService();

    const { venda, produtosVenda } = await createOrderService.run({
      precoTotal,
      idUsuario: Number(req.user.id),
      idFormaPagamento,
      produtos,
    });

    return res.json({ venda, produtosVenda });
  }
}
