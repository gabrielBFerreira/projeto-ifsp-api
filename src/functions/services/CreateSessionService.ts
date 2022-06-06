import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

import { authenticationConfig } from '../../database/configs/authentication';
import { User } from '../../database/entities/mysql/User';
import { UsersRepository } from '../../database/repositories/mysql/UsersRepository';
import { ErrorHandler } from '../../utils/ErrorHandler';

interface IRequest {
  email: string;
  senha: string;
}

interface IResponse {
  usuario: Omit<User, 'senha'>;
  token: string;
  refreshToken: string;
}

export class CreateSessionService {
  public async run({ email, senha }: IRequest): Promise<IResponse> {
    if (!email || !senha) throw new ErrorHandler(400, 'Parâmetros inválidos.');

    const usersRepository = new UsersRepository();

    const { user } = await usersRepository.findUser({ email });

    if (!user) throw new ErrorHandler(404, 'Usuário não encontrado.');

    const rightPassword = compare(senha, user.senha);

    if (!rightPassword)
      throw new ErrorHandler(401, 'Usuário ou senha errados.');

    const { secret, expiresIn } = authenticationConfig.user.jwt;

    const token = sign({}, secret, {
      subject: user.id.toString(),
      expiresIn: `${expiresIn}d`,
    });

    const today = new Date();

    const refreshToken = await this.refreshTokensRepository.createToken({
      userId: user.id,
      expire: new Date(
        today.setDate(today.getDate() + authenticationConfig.user.jwt.expiresIn)
      ),
    });

    return { usuario: user, token, refreshToken };
  }
}
