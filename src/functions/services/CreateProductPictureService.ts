import { injectable } from 'tsyringe';

import { PicturesRepository } from '../../database/repositories/mongo/PicturesRepository';
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
    const picturesRepository = new PicturesRepository();

    const { filename: newName } = await uploadHandler.compressImage({
      filename,
      size: 900,
    });

    const caminho = await uploadHandler.saveFile(newName);

    await picturesRepository.createPicture({
      caminho,
      idProduto: Number(idProduto),
    });
  }
}
