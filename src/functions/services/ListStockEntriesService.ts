import { Stock } from '../../database/entities/mysql/Stock';
import { StockRepository } from '../../database/repositories/mysql/StockRepository';

interface IResponse {
  registros: Stock[];
}

export class ListStockEntriesService {
  public async run(): Promise<IResponse> {
    const stockRepository = new StockRepository();

    const { entries } = await stockRepository.listStockEntries();

    return { registros: entries };
  }
}
