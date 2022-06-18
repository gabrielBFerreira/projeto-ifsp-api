import { hash } from 'bcryptjs';

import { Address } from '../../database/entities/mysql/Address';
import { Phone } from '../../database/entities/mysql/Phone';
import { User } from '../../database/entities/mysql/User';
import { AddressesRepository } from '../../database/repositories/mysql/AddressesRepository';
import { PhonesRepository } from '../../database/repositories/mysql/PhonesRepository';
import { UsersRepository } from '../../database/repositories/mysql/UsersRepository';

interface IUserAddress {
  id: number;
  rua?: string;
  numero?: string;
  complemento?: string;
  bairro?: string;
  cidade?: string;
  uf?: string;
  cep?: string;
}

interface IUserPhone {
  id: number;
  ddi?: string;
  ddd?: string;
  numero?: string;
  tipoTelefone?: string;
}

interface IRequest {
  id: number;
  nome?: string;
  email?: string;
  senha?: string;
  dataNasc?: string;
  sexo?: string;
  genero?: string;
  enderecos?: IUserAddress[];
  telefones?: IUserPhone[];
}

interface IResponse {
  usuario: User;
  enderecosUsuario: Address[];
  telefonesUsuario: Phone[];
}

export class UpdateUserService {
  public async run({
    id,
    nome,
    email,
    senha,
    dataNasc,
    sexo,
    genero,
    enderecos,
    telefones,
  }: IRequest): Promise<IResponse> {
    const usersRepository = new UsersRepository();
    const addressesRepository = new AddressesRepository();
    const phonesRepository = new PhonesRepository();

    const passwordHash = senha ? await hash(senha, 8) : undefined;

    const data = {
      id,
      ...(nome ? { nome } : {}),
      ...(email ? { email } : {}),
      ...(senha ? { senha: passwordHash } : {}),
      ...(dataNasc ? { dataNasc } : {}),
      ...(sexo ? { sexo } : {}),
      ...(genero ? { genero } : {}),
    };

    const { user } = await usersRepository.updateUser(data);

    const addressesPromise = enderecos.map(async (address) => {
      const { userAddress } = await addressesRepository.updateAddress({
        ...address,
      });

      return userAddress;
    });

    const userAddressses = await Promise.all(addressesPromise);

    const phonesPromise = telefones.map(async (phone) => {
      const { userPhone } = await phonesRepository.updatePhone({
        ...phone,
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
