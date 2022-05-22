import { Order } from '../../database/entities/mysql/Order';
import { OrdersRepository } from '../../database/repositories/mysql/OrdersRepository';

interface IRequest {
  precoTotal: number;
  idUsuario: number;
  idFormaPagamento: number;
}

interface IResponse {
  venda: Order;
}

export class CreateOrderService {
  public async run({
    precoTotal,
    idUsuario,
    idFormaPagamento,
  }: IRequest): Promise<IResponse> {
    const ordersRepository = new OrdersRepository();

    const { order } = await ordersRepository.createOrder({
      dataVenda: new Date(),
      precoTotal,
      statusPagamento: 1, // pendente
      statusEntrega: 1, // pendente
      idUsuario,
      idFormaPagamento,
    });

    return { venda: order };
  }
}
