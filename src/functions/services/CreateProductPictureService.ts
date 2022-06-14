import { injectable } from 'tsyringe';

import { ErrorHandler } from '../../utils/ErrorHandler';
import { UploadHandler } from '../../utils/UploadHandler';

interface IRequest {
  idProduto: string;
  filename: string;
}

@injectable()
export class CreateProductPictureService {
  public async run({ idProduto, filename }: IRequest): Promise<void> {
    if (!filename) throw new ErrorHandler(400, 'Arquivo inválido.');

    const uploadHandler = new UploadHandler();

    await uploadHandler.compressImage({
      filename,
      size: 900,
    });

    await uploadHandler.saveFile(filename);

    // criar dados no banco  aqui
  }
}
