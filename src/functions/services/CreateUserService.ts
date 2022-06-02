import { Address } from '../../database/entities/mysql/Address';
import { Phone } from '../../database/entities/mysql/Phone';
import { User } from '../../database/entities/mysql/User';
import { AddressesRepository } from '../../database/repositories/mysql/AddressesRepository';
import { PhonesRepository } from '../../database/repositories/mysql/PhonesRepository';
import { UsersRepository } from '../../database/repositories/mysql/UsersRepository';

interface IUserAddress {
  rua: string;
  numero: string;
  complemento: string;
  bairro: string;
  cidade: string;
  uf: string;
  cep: string;
}

interface IUserPhone {
  ddi: string;
  ddd: string;
  numero: string;
  tipoTelefone: string;
}

interface IRequest {
  nome: string;
  email: string;
  senha: string;
  dataNasc: string;
  sexo: string;
  genero: string;
  tipoConta: number;
  enderecos: IUserAddress[];
  telefones: IUserPhone[];
}

interface IResponse {
  usuario: User;
  enderecosUsuario: Address[];
  telefonesUsuario: Phone[];
}

export class CreateUserService {
  public async run({
    nome,
    email,
    senha,
    dataNasc,
    sexo,
    genero,
    tipoConta,
    enderecos,
    telefones,
  }: IRequest): Promise<IResponse> {
    const usersRepository = new UsersRepository();
    const addressesRepository = new AddressesRepository();
    const phonesRepository = new PhonesRepository();

    const { user } = await usersRepository.createUser({
      nome,
      email,
      senha,
      dataNasc,
      sexo,
      genero,
      tipoConta,
    });

    const addressesPromise = enderecos.map(async (address) => {
      const { userAddress } = await addressesRepository.createAddress({
        ...address,
        idUsuario: user.id,
      });

      return userAddress;
    });

    const userAddressses = await Promise.all(addressesPromise);

    const phonesPromise = telefones.map(async (phone) => {
      const { userPhone } = await phonesRepository.createPhone({
        ...phone,
        idUsuario: user.id,
      });

      return userPhone;
    });

    const userPhones = await Promise.all(phonesPromise);

    return {
      usuario: user,
      enderecosUsuario: userAddressses,
      telefonesUsuario: userPhones,
    };
  }
}
