import { Repository } from 'typeorm';

import { mongoConnection } from '../../configs/mongo';
import { Picture } from '../../entities/mongo/Picture';

interface ICreatePicture {
  caminho?: string;
  idProduto?: number;
  idMetadado?: number;
}

class PicturesRepository {
  private repository: Repository<Picture>;

  constructor() {
    this.repository = mongoConnection.getRepository(Picture);
  }

  async createPicture(
    data: ICreatePicture
  ): Promise<{ productPicture: Picture }> {
    const productPicture = await this.repository.save(data);

    return { productPicture };
  }

  async findByProductId(idProduto: number): Promise<{ pictures: Picture[] }> {
    const pictures = await this.repository.find({ where: { idProduto } });

    return { pictures };
  }
}

export { PicturesRepository };
