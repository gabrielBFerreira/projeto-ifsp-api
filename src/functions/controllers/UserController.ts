import { Request, Response } from 'express';

import { ErrorHandler } from '../../utils/ErrorHandler';
import { CreateUserService } from '../services/CreateUserService';
import { ListUsersService } from '../services/ListUsersService';
import { ShowUserProfileService } from '../services/ShowUserProfileService';
import { UpdateUserService } from '../services/UpdateUserService';

interface IQueryParams {
  tipoConta: string;
}

export class UserController {
  public async index(req: Request, res: Response): Promise<Response> {
    const { tipoConta } = req.query as unknown as IQueryParams;

    const listUsersService = new ListUsersService();

    const { usuarios } = await listUsersService.run({ tipoConta });

    return res.json({ usuarios });
  }

  public async show(req: Request, res: Response): Promise<Response> {
    const { idUsuario } = req.params;

    if (idUsuario !== req.user.id)
      throw new ErrorHandler(401, 'Acesso negado.');

    const showUserProfileService = new ShowUserProfileService();

    const usuario = await showUserProfileService.run(idUsuario);

    return res.json({ usuario });
  }

  public async create(req: Request, res: Response): Promise<Response> {
    const {
      nome,
      email,
      senha,
      dataNasc,
      sexo,
      genero,
      tipoConta,
      enderecos,
      telefones,
    } = req.body;

    const createUserService = new CreateUserService();

    const { usuario, enderecosUsuario, telefonesUsuario, token, refreshToken } =
      await createUserService.run({
        nome,
        email,
        senha,
        dataNasc,
        sexo,
        genero,
        tipoConta,
        enderecos,
        telefones,
      });

    return res.json({
      usuario,
      enderecosUsuario,
      telefonesUsuario,
      token,
      refreshToken,
    });
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const { nome, email, senha, dataNasc, sexo, genero, enderecos, telefones } =
      req.body;

    const updateUserService = new UpdateUserService();

    const { usuario, enderecosUsuario, telefonesUsuario } =
      await updateUserService.run({
        id: Number(req.user.id),
        nome,
        email,
        senha,
        dataNasc,
        sexo,
        genero,
        enderecos,
        telefones,
      });

    return res.json({
      usuario,
      enderecosUsuario,
      telefonesUsuario,
    });
  }
}
