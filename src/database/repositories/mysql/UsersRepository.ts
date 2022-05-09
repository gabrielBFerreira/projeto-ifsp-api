import { Repository } from 'typeorm';

import { mysqlConnection } from '../../configs/mysql';
import { User } from '../../entities/mysql/User';

class UsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = mysqlConnection.getRepository(User);
  }

  async listUsers(): Promise<{ users: User[] }> {
    const users = await this.repository.find({
      relations: ['enderecos', 'telefones'],
    });

    return { users };
  }
}

export { UsersRepository };
