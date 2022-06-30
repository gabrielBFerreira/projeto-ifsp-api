import { Repository } from 'typeorm';

import { mysqlConnection } from '../../configs/mysql';
import { Address } from '../../entities/mysql/Address';

interface ICreateAddress {
  rua: string;
  numero: string;
  complemento: string;
  bairro: string;
  cidade: string;
  uf: string;
  cep: string;
  idUsuario: number;
}

interface IUpdateAddress {
  id: number;
  rua?: string;
  numero?: string;
  complemento?: string;
  bairro?: string;
  cidade?: string;
  uf?: string;
  cep?: string;
}

class AddressesRepository {
  private repository: Repository<Address>;

  constructor() {
    this.repository = mysqlConnection.getRepository(Address);
  }

  async createAddress(data: ICreateAddress): Promise<{ userAddress: Address }> {
    const userAddress = await this.repository.save(data);

    return { userAddress };
  }

  async updateAddress(data: IUpdateAddress): Promise<{ userAddress: Address }> {
    const userAddress = await this.repository.save(data);

    return { userAddress };
  }
}

export { AddressesRepository };
