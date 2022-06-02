import { Order } from '../../database/entities/mysql/Order';
import { OrderHasProduct } from '../../database/entities/mysql/OrderHasProduct';
import { OrderHasProductsRepository } from '../../database/repositories/mysql/OrderHasProductsRepository';
import { OrdersRepository } from '../../database/repositories/mysql/OrdersRepository';

interface IOrderProduct {
  idProduto: number;
  quantidade: number;
}
interface IRequest {
  precoTotal: number;
  idUsuario: number;
  idFormaPagamento: number;
  produtos: IOrderProduct[];
}

interface IResponse {
  venda: Order;
  produtosVenda: OrderHasProduct[];
}

export class CreateOrderService {
  public async run({
    precoTotal,
    idUsuario,
    idFormaPagamento,
    produtos,
  }: IRequest): Promise<IResponse> {
    const ordersRepository = new OrdersRepository();
    const orderHasProductsRepository = new OrderHasProductsRepository();

    const { order } = await ordersRepository.createOrder({
      dataVenda: new Date(),
      precoTotal,
      statusPagamento: 1, // pendente
      statusEntrega: 1, // pendente
      idUsuario,
      idFormaPagamento,
    });

    const productsPromise = produtos.map(async (product) => {
      const { orderProduct } =
        await orderHasProductsRepository.createOrderProduct({
          ...product,
          idVenda: order.id,
        });

      return orderProduct;
    });

    const orderProducts = await Promise.all(productsPromise);

    return { venda: order, produtosVenda: orderProducts };
  }
}
