import { Request, Response } from 'express';

import { CreateProductService } from '../services/CreateProductService';
import { ListProductsService } from '../services/ListProductsService';
import { ShowProductService } from '../services/ShowProductService';

export class ProductController {
  public async index(req: Request, res: Response): Promise<Response> {
    const listProductsService = new ListProductsService();

    const { produtos } = await listProductsService.run();

    return res.json({ produtos });
  }

  public async show(req: Request, res: Response): Promise<Response> {
    const { idProduto } = req.params;

    const showProductService = new ShowProductService();

    const produto = await showProductService.run(idProduto);

    return res.json({ produto });
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
