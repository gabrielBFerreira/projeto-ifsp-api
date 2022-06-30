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

interface IListProducts {
  idCategoria?: number;
}

class ProductsRepository {
  private repository: Repository<Product>;

  constructor() {
    this.repository = mysqlConnection.getRepository(Product);
  }

  async listProducts(data: IListProducts): Promise<{ products: Product[] }> {
    const products = await this.repository.find({
      where: { ...data },
      relations: ['categoria'],
    });

    return { products };
  }

  async findProductById(id: number): Promise<{ product: Product }> {
    const product = await this.repository.findOneOrFail({
      where: { id },
      relations: ['categoria'],
    });

    return { product };
  }

  async createProduct(data: ICreateProduct): Promise<{ product: Product }> {
    const product = await this.repository.save(data);

    return { product };
  }
}

export { ProductsRepository };
