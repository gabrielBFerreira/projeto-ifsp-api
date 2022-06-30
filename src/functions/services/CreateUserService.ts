import { hash } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

import { authenticationConfig } from '../../configs/authentication';
import { Address } from '../../database/entities/mysql/Address';
import { Phone } from '../../database/entities/mysql/Phone';
import { User } from '../../database/entities/mysql/User';
import { RefreshTokensRepository } from '../../database/repositories/mongo/RefreshTokensRepository';
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
  token: string;
  refreshToken: string;
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
    const refreshTokensRepository = new RefreshTokensRepository();

    const { user } = await usersRepository.createUser({
      nome,
      email,
      senha: await hash(senha, 8),
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

    const jwtConfig =
      user.tipoConta === 1
        ? authenticationConfig.admin.jwt
        : authenticationConfig.client.jwt;

    const { secret, expiresIn } = jwtConfig;

    const token = sign({ accessLevel: user.tipoConta }, secret, {
      subject: user.id.toString(),
      expiresIn: `${expiresIn}d`,
    });

    const today = new Date();

    const { refreshToken } = await refreshTokensRepository.createRefreshToken({
      idUsuario: user.id,
      dataExpiracao: new Date(
        today.setDate(today.getDate() + jwtConfig.expiresIn)
      ),
    });

    return {
      usuario: user,
      enderecosUsuario: userAddressses,
      telefonesUsuario: userPhones,
      token,
      refreshToken: refreshToken.token,
    };
  }
}
