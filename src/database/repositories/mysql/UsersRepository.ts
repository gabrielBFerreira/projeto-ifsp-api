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

interface IUpdateUser {
  id: number;
  nome?: string;
  email?: string;
  senha?: string;
  dataNasc?: string;
  sexo?: string;
  genero?: string;
}

interface IListUsers {
  tipoConta?: number;
}

interface IFindUser {
  id?: number;
  nome?: string;
  email?: string;
}

class UsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = mysqlConnection.getRepository(User);
  }

  async listUsers(data: IListUsers): Promise<{ users: User[] }> {
    const users = await this.repository.find({
      where: { ...data },
      relations: ['enderecos', 'telefones'],
    });

    return { users };
  }

  async findUser(data: IFindUser): Promise<{ user: User }> {
    const user = await this.repository.findOne({
      where: { ...data },
      relations: ['enderecos', 'telefones'],
    });

    return { user };
  }

  async createUser(data: ICreateUser): Promise<{ user: User }> {
    const user = await this.repository.save(data);

    return { user };
  }

  async updateUser(data: IUpdateUser): Promise<{ user: User }> {
    const user = await this.repository.save(data);

    return { user };
  }
}

export { UsersRepository };
