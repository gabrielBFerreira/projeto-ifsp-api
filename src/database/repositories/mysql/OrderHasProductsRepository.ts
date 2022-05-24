import { Repository } from 'typeorm';

import { mysqlConnection } from '../../configs/mysql';
import { OrderHasProduct } from '../../entities/mysql/OrderHasProduct';

interface ICreateOrderProduct {
  idProduto: number;
  idVenda: number;
  quantidade: number;
}

class OrderHasProductsRepository {
  private repository: Repository<OrderHasProduct>;

  constructor() {
    this.repository = mysqlConnection.getRepository(OrderHasProduct);
  }

  async createOrderProduct(
    data: ICreateOrderProduct
  ): Promise<{ orderProduct: OrderHasProduct }> {
    const orderProduct = await this.repository.save(data);

    return { orderProduct };
  }
}

export { OrderHasProductsRepository };
