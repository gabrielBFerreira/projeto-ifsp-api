import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { injectable } from 'tsyringe';

import { authenticationConfig } from '../../configs/authentication';
import { User } from '../../database/entities/mysql/User';
import { RefreshTokensRepository } from '../../database/repositories/mongo/RefreshTokensRepository';
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

@injectable()
export class CreateSessionService {
  public async run({ email, senha }: IRequest): Promise<IResponse> {
    if (!email || !senha) throw new ErrorHandler(400, 'Parâmetros inválidos.');

    const usersRepository = new UsersRepository();
    const refreshTokensRepository = new RefreshTokensRepository();

    const { user } = await usersRepository.findUser({ email });

    if (!user) throw new ErrorHandler(404, 'Usuário não encontrado.');

    const rightPassword = await compare(senha, user.senha);

    if (!rightPassword)
      throw new ErrorHandler(401, 'Usuário ou senha errados.');

    const jwtConfig =
      user.tipoConta === 1
        ? authenticationConfig.user.jwt
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

    return { usuario: user, token, refreshToken: refreshToken.token };
  }
}
