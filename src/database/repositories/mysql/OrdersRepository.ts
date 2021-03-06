import { Repository } from 'typeorm';

import { mysqlConnection } from '../../configs/mysql';
import { Order } from '../../entities/mysql/Order';

interface ICreateOrder {
  dataVenda: Date;
  precoTotal: number;
  statusPagamento: number;
  statusEntrega: number;
  idUsuario: number;
  idFormaPagamento: number;
}

class OrdersRepository {
  private repository: Repository<Order>;

  constructor() {
    this.repository = mysqlConnection.getRepository(Order);
  }

  async createOrder(data: ICreateOrder): Promise<{ order: Order }> {
    const order = await this.repository.save(data);

    return { order };
  }

  async findByUserId(idUsuario: number): Promise<{ orders: Order[] }> {
    const orders = await this.repository.find({
      where: { idUsuario },
      relations: ['produtosVenda', 'produtosVenda.produto'],
    });

    return { orders };
  }
}

export { OrdersRepository };
