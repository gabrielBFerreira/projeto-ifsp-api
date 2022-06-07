import { Repository } from 'typeorm';
import { v4 as uuid } from 'uuid';

import { mongoConnection } from '../../configs/mongo';
import { RefreshToken } from '../../entities/mongo/RefreshToken';

interface ICreateRefreshToken {
  idUsuario: number;
  dataExpiracao: Date;
}

class RefreshTokensRepository {
  private repository: Repository<RefreshToken>;

  constructor() {
    this.repository = mongoConnection.getRepository(RefreshToken);
  }

  async createRefreshToken({
    idUsuario,
    dataExpiracao,
  }: ICreateRefreshToken): Promise<{ refreshToken: RefreshToken }> {
    await this.repository.delete(idUsuario);

    const refreshTokenObject = {
      token: uuid(),
      idUsuario,
      dataExpiracao,
      dataCriacao: new Date(),
    };

    const refreshToken = await this.repository.save(refreshTokenObject);

    return { refreshToken };
  }
}

export { RefreshTokensRepository };
