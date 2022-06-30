import { Product } from '../../database/entities/mysql/Product';
import { ProductsRepository } from '../../database/repositories/mysql/ProductsRepository';
import { StockRepository } from '../../database/repositories/mysql/StockRepository';

interface IResponse {
  estoque: Product[];
}

export class ListStockService {
  public async run(): Promise<IResponse> {
    const stockRepository = new StockRepository();
    const productsRepository = new ProductsRepository();

    const { products } = await productsRepository.listProducts();

    const entriesPromise = products.map(async (product) => {
      const { productEntries } = await stockRepository.findEntriesByProductId(
        product.id
      );

      const productTotalQuantity = productEntries.reduce((total, entry) => {
        if (entry.operacao === 1) return total + entry.quantidade;
        return total - entry.quantidade;
      }, 0);

      const productWithQuantity = {
        ...product,
        quantidade: productTotalQuantity,
      };

      return productWithQuantity;
    });

    const productsWithQuantities = await Promise.all(entriesPromise);
    return { estoque: productsWithQuantities };
  }
}
