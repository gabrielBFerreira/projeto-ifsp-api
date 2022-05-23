import { Request, Response } from 'express';

import { CreateProductService } from '../services/CreateProductService';
import { ListProductsService } from '../services/ListProductsService';

export class ProductController {
  public async index(req: Request, res: Response): Promise<Response> {
    const listProductsService = new ListProductsService();

    const { produtos } = await listProductsService.run();

    return res.json({ produtos });
  }

  public async create(req: Request, res: Response): Promise<Response> {
    const {
      nome,
      descricao,
      marca,
      tamanho,
      estilo,
      cores,
      preco,
      idCategoria,
    } = req.body;

    const createProductService = new CreateProductService();

    const { produto } = await createProductService.run({
      nome,
      descricao,
      marca,
      tamanho,
      estilo,
      cores,
      preco,
      idCategoria,
    });

    return res.json({ produto });
  }
}
