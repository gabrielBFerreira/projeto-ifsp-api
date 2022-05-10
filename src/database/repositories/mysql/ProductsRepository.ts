import { Repository } from 'typeorm';

import { mysqlConnection } from '../../configs/mysql';
import { Product } from '../../entities/mysql/Product';

class ProductsRepository {
  private repository: Repository<Product>;

  constructor() {
    this.repository = mysqlConnection.getRepository(Product);
  }

  async listProducts(): Promise<{ products: Product[] }> {
    const products = await this.repository.find({
      relations: ['categoria'],
    });

    return { products };
  }
}

export { ProductsRepository };
