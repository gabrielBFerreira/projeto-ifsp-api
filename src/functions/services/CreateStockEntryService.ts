import { Product } from '../../database/entities/mysql/Product';
import { Stock } from '../../database/entities/mysql/Stock';
import { ProductsRepository } from '../../database/repositories/mysql/ProductsRepository';
import { StockRepository } from '../../database/repositories/mysql/StockRepository';
import { ErrorHandler } from '../../utils/ErrorHandler';

interface IRequest {
  operacao: number;
  quantidade: number;
  idProduto: number;
  idFornecedor: number;
}

interface IResponse {
  produto: Product;
  registro: Stock;
}

export class CreateStockEntryService {
  public async run({
    operacao,
    quantidade,
    idProduto,
    idFornecedor,
  }: IRequest): Promise<IResponse> {
    const stockRepository = new StockRepository();
    const productsRepository = new ProductsRepository();

    const { product } = await productsRepository.findProductById(idProduto);

    if (!product) throw new ErrorHandler(404, 'Produto inválido.');

    const { entry } = await stockRepository.createStockEntry({
      operacao,
      quantidade,
      dataHora: new Date(),
      idProduto,
      idFornecedor,
    });

    const { productEntries } = await stockRepository.findEntriesByProductId(
      idProduto
    );

    const productTotalQuantity = productEntries.reduce((total, entry) => {
      if (entry.operacao === 1) return total + entry.quantidade;
      return total - entry.quantidade;
    }, 0);

    const productWithQuantity = {
      ...product,
      quantidade: productTotalQuantity,
    };

    return { produto: productWithQuantity, registro: entry };
  }
}
