import { Order } from '../../database/entities/mysql/Order';
import { User } from '../../database/entities/mysql/User';
import { OrdersRepository } from '../../database/repositories/mysql/OrdersRepository';
import { UsersRepository } from '../../database/repositories/mysql/UsersRepository';
import { ErrorHandler } from '../../utils/ErrorHandler';

interface IResponse {
  informacoes: User;
  pedidos: Order[];
}

export class ShowUserProfileService {
  public async run(idProduto: string): Promise<IResponse> {
    const usersRepository = new UsersRepository();
    const ordersRepository = new OrdersRepository();

    const { user } = await usersRepository.findUser({ id: Number(idProduto) });

    if (!user) throw new ErrorHandler(404, 'Usuário não encontrado.');

    const { orders } = await ordersRepository.findByUserId(Number(idProduto));

    return { informacoes: user, pedidos: orders };
  }
}
