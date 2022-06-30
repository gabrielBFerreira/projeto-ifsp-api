import { User } from '../../database/entities/mysql/User';
import { UsersRepository } from '../../database/repositories/mysql/UsersRepository';

interface IRequest {
  tipoConta?: string;
}

interface IResponse {
  usuarios: User[];
}

export class ListUsersService {
  public async run({ tipoConta }: IRequest): Promise<IResponse> {
    const usersRepository = new UsersRepository();

    const { users } = await usersRepository.listUsers({
      tipoConta: Number(tipoConta) || undefined,
    });

    return { usuarios: users };
  }
}
