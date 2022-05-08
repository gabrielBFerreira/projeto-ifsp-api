import { User } from '../../database/entities/mysql/User';
import { UsersRepository } from '../../database/repositories/mysql/UsersRepository';

interface IResponse {
  users: User[];
}

export class ListUsersService {
  public async run(): Promise<IResponse> {
    const usersRepository = new UsersRepository();

    const { users } = await usersRepository.listUsers();
    return { users };
  }
}
