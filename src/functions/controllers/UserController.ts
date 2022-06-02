import { Request, Response } from 'express';

import { CreateUserService } from '../services/CreateUserService';
import { ListUsersService } from '../services/ListUsersService';

export class UserController {
  public async index(req: Request, res: Response): Promise<Response> {
    const listUsersService = new ListUsersService();

    const { usuarios } = await listUsersService.run();

    return res.json({ usuarios });
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

    const { usuario, enderecosUsuario, telefonesUsuario } =
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

    return res.json({ usuario, enderecosUsuario, telefonesUsuario });
  }
}
