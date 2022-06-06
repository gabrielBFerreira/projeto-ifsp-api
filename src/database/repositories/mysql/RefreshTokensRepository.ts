import { Repository } from 'typeorm';

import { mysqlConnection } from '../../configs/mysql';
import { User } from '../../entities/mysql/User';

interface ICreateUser {
  nome: string;
  email: string;
  senha: string;
  dataNasc: string;
  sexo: string;
  genero: string;
  tipoConta: number;
}

interface IFindUser {
  id?: number;
  nome?: string;
  email?: string;
}

class RefreshTokensRepository {
  private repository: Repository<RefreshToken>;

  constructor() {
    this.repository = mysqlConnection.getRepository(User);
  }

  async listUsers(): Promise<{ users: User[] }> {
    const users = await this.repository.find({
      relations: ['enderecos', 'telefones'],
    });

    return { users };
  }

  async findUser(data: IFindUser): Promise<{ user: User }> {
    const user = await this.repository.findOne({ where: { ...data } });

    return { user };
  }

  async createUser(data: ICreateUser): Promise<{ user: User }> {
    const user = await this.repository.save(data);

    return { user };
  }
}

export { UsersRepository };
