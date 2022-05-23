import { Repository } from 'typeorm';

import { mysqlConnection } from '../../configs/mysql';
import { Product } from '../../entities/mysql/Product';

interface ICreateProduct {
  nome: string;
  descricao: string;
  marca: string;
  tamanho: string;
  estilo: string;
  cores: string;
  preco: number;
  idCategoria: number;
}

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

  async createProduct(data: ICreateProduct): Promise<{ product: Product }> {
    const product = await this.repository.save(data);

    return { product };
  }
}

export { ProductsRepository };
