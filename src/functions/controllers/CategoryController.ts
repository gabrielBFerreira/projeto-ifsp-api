import { Request, Response } from 'express';

import { ListCategoriesService } from '../services/ListCategoriesService';

export class CategoryController {
  public async index(req: Request, res: Response): Promise<Response> {
    const listCategoriesService = new ListCategoriesService();

    const { categorias } = await listCategoriesService.run();

    return res.json({ categorias });
  }
}
