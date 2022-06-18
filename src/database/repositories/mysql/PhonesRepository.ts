import { Repository } from 'typeorm';

import { mysqlConnection } from '../../configs/mysql';
import { Phone } from '../../entities/mysql/Phone';

interface ICreatePhone {
  ddi: string;
  ddd: string;
  numero: string;
  tipoTelefone: string;
  idUsuario: number;
}

interface IUpdatePhone {
  id: number;
  ddi?: string;
  ddd?: string;
  numero?: string;
  tipoTelefone?: string;
}

class PhonesRepository {
  private repository: Repository<Phone>;

  constructor() {
    this.repository = mysqlConnection.getRepository(Phone);
  }

  async createPhone(data: ICreatePhone): Promise<{ userPhone: Phone }> {
    const userPhone = await this.repository.save(data);

    return { userPhone };
  }

  async updatePhone(data: IUpdatePhone): Promise<{ userPhone: Phone }> {
    const userPhone = await this.repository.save(data);

    return { userPhone };
  }
}

export { PhonesRepository };
