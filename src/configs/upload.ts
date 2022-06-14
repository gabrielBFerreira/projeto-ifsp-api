import multer, { StorageEngine } from 'multer';
import path from 'path';

interface IUploadConfig {
  tmpFolder: string;
  uploadsFolder: string;

  multer: {
    storage: StorageEngine;
  };
}

const uploadsFolder = path.resolve(__dirname, '..', '..', 'uploads');
const tmpFolder = path.resolve(uploadsFolder, 'tmp');

const multerConfig = {
  storage: multer.diskStorage({
    destination: tmpFolder,
    filename(req, file, callback) {
      const dateTime = new Date();
      const fileName = `${dateTime.getTime()}-${file.originalname}`;

      return callback(null, fileName);
    },
  }),
};

const uploadConfig: IUploadConfig = {
  tmpFolder,
  uploadsFolder,
  multer: multerConfig,
};

export { uploadConfig };
