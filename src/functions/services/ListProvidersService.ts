import { Provider } from '../../database/entities/mysql/Provider';
import { ProvidersRepository } from '../../database/repositories/mysql/ProvidersRepository';

interface IResponse {
  fornecedores: Provider[];
}

export class ListProvidersService {
  public async run(): Promise<IResponse> {
    const providersRepository = new ProvidersRepository();

    const { providers } = await providersRepository.listProviders();

    return { fornecedores: providers };
  }
}
