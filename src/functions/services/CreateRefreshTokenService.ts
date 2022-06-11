import { sign } from 'jsonwebtoken';
import { injectable } from 'tsyringe';

import { authenticationConfig } from '../../configs/authentication';
import { RefreshTokensRepository } from '../../database/repositories/mongo/RefreshTokensRepository';
import { UsersRepository } from '../../database/repositories/mysql/UsersRepository';
import { ErrorHandler } from '../../utils/ErrorHandler';

interface IRequest {
  currentRefreshToken: string;
}

interface IResponse {
  token: string;
  refreshToken: string;
}

@injectable()
export class CreateRefreshTokenService {
  public async run({ currentRefreshToken }: IRequest): Promise<IResponse> {
    const refreshTokensRepository = new RefreshTokensRepository();
    const usersRepository = new UsersRepository();

    const { refreshToken: currentRfToken } =
      await refreshTokensRepository.findByToken({
        token: currentRefreshToken,
      });

    if (!currentRfToken) throw new ErrorHandler(404, 'Token não encontrado.');

    const { user } = await usersRepository.findUser({
      id: currentRfToken.idUsuario,
    });

    const jwtConfig =
      user.tipoConta === 1
        ? authenticationConfig.admin.jwt
        : authenticationConfig.client.jwt;

    const { secret, expiresIn } = jwtConfig;

    const newToken = sign({ accessLevel: user.tipoConta }, secret, {
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

    const newRefreshToken = refreshToken.token;

    return { token: newToken, refreshToken: newRefreshToken };
  }
}
