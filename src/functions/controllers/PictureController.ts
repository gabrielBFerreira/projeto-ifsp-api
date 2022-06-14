import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateProductPictureService } from '../services/CreateProductPictureService';

export class PictureController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { idProduto } = req.params;
    const { filename } = req.file;

    const createProductPictureService = container.resolve(
      CreateProductPictureService
    );

    await createProductPictureService.run({ idProduto, filename });

    return res.status(204).json();
  }
}
