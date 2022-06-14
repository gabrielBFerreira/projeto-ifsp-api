import fs from 'fs';
import mime from 'mime';
import path from 'path';

import { uploadConfig } from '../configs/upload';
import { ErrorHandler } from './ErrorHandler';

interface ICompressImage {
  filename: string;
  size: number;
}

export class UploadHandler {
  public async compressImage({ filename, size }: ICompressImage): Promise<{
    path: string;
    filename: string;
  }> {
    const originalPath = path.resolve(uploadConfig.tmpFolder, filename);

    const ContentType = mime.getType(originalPath);

    if (!ContentType) {
      await fs.promises.unlink(originalPath);
      throw new ErrorHandler(400, 'Formato inválido.');
    }

    const isAccepted = ['image/png', 'image/jpg', 'image/jpeg'].includes(
      ContentType
    );

    if (!isAccepted) {
      await fs.promises.unlink(originalPath);
      throw new ErrorHandler(400, 'Formato inválido.');
    }

    const splitImage = filename.split('.');

    splitImage.splice(-1);

    const newFilename = `${splitImage.join('.')}.jpg`;

    const newPath = path.resolve(uploadConfig.tmpFolder, newFilename);

    return sharp(originalPath)
      .resize({
        width: size,
        withoutEnlargement: true,
      })
      .toFormat('jpg')
      .jpeg({
        quality: 100,
      })
      .toBuffer()
      .then((data) => {
        fs.access(originalPath, (err) => {
          if (!err) fs.unlinkSync(originalPath);
        });

        fs.writeFileSync(newPath, data);

        return { path: newPath, filename: newFilename };
      });
  }

  public async saveFile(filename: string): Promise<string> {
    const originalPath = path.resolve(uploadConfig.tmpFolder, filename);
    const uploadPath = path.resolve(uploadConfig.uploadsFolder, filename);

    const ContentType = mime.getType(originalPath);

    if (!ContentType) throw new ErrorHandler(400, 'Formato inválido');

    await fs.promises.rename(originalPath, uploadPath);

    return filename;
  }
}
