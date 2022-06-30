import { Repository } from 'typeorm';

import { mysqlConnection } from '../../configs/mysql';
import { Provider } from '../../entities/mysql/Provider';

class ProvidersRepository {
  private repository: Repository<Provider>;

  constructor() {
    this.repository = mysqlConnection.getRepository(Provider);
  }

  async listProviders(): Promise<{ providers: Provider[] }> {
    const providers = await this.repository.find();

    return { providers };
  }
}

export { ProvidersRepository };
