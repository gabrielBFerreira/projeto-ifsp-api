import { Picture } from '../../database/entities/mongo/Picture';
import { Product } from '../../database/entities/mysql/Product';
import { PicturesRepository } from '../../database/repositories/mongo/PicturesRepository';
import { ProductsRepository } from '../../database/repositories/mysql/ProductsRepository';
import { StockRepository } from '../../database/repositories/mysql/StockRepository';
import { ErrorHandler } from '../../utils/ErrorHandler';

interface IResponse {
  informacoes: Product;
  figuras: Picture[];
}

export class ShowProductService {
  public async run(idProduto: string): Promise<IResponse> {
    const productsRepository = new ProductsRepository();
    const picturesRepository = new PicturesRepository();
    const stockRepository = new StockRepository();

    const { product } = await productsRepository.findProductById(
      Number(idProduto)
    );

    if (!product) throw new ErrorHandler(404, 'Product not found');

    const { pictures } = await picturesRepository.findByProductId(
      Number(idProduto)
    );

    const { productEntries: stockEntries } =
      await stockRepository.findEntriesByProductId(Number(idProduto));

    const productTotalQuantity = stockEntries.reduce((total, entry) => {
      if (entry.operacao === 1) return total + entry.quantidade;
      return total - entry.quantidade;
    }, 0);

    const productWithQuantity = {
      ...product,
      quantidade: productTotalQuantity,
    };

    return { informacoes: productWithQuantity, figuras: pictures };
  }
}
