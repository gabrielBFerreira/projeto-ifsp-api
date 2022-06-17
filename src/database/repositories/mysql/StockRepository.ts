import { Repository } from 'typeorm';

import { mysqlConnection } from '../../configs/mysql';
import { Stock } from '../../entities/mysql/Stock';

interface ICreateStockEntry {
  operacao: number;
  quantidade: number;
  dataHora: Date;
  idProduto: number;
  idFornecedor?: number;
}

class StockRepository {
  private repository: Repository<Stock>;

  constructor() {
    this.repository = mysqlConnection.getRepository(Stock);
  }

  async createStockEntry(data: ICreateStockEntry): Promise<{ entry: Stock }> {
    const entry = await this.repository.save(data);

    return { entry };
  }

  async findEntriesByProductId(
    idProduto: number
  ): Promise<{ productEntries: Stock[] }> {
    const productEntries = await this.repository.find({ where: { idProduto } });

    return { productEntries };
  }
}

export { StockRepository };
