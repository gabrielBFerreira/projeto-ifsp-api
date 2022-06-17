import { Request, Response } from 'express';

import { CreateUserService } from '../services/CreateUserService';
import { ListUsersService } from '../services/ListUsersService';
import { ShowUserProfileService } from '../services/ShowUserProfileService';

export class UserController {
  public async index(req: Request, res: Response): Promise<Response> {
    const listUsersService = new ListUsersService();

    const { usuarios } = await listUsersService.run();

    return res.json({ usuarios });
  }

  public async show(req: Request, res: Response): Promise<Response> {
    const { idUsuario } = req.params;

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
}
