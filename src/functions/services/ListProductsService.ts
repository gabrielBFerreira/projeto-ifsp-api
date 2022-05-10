import { Product } from '../../database/entities/mysql/Product';
import { ProductsRepository } from '../../database/repositories/mysql/ProductsRepository';

interface IResponse {
  produtos: Product[];
}

export class ListProductsService {
  public async run(): Promise<IResponse> {
    const productsRepository = new ProductsRepository();

    const { products } = await productsRepository.listProducts();
    return { produtos: products };
  }
}
