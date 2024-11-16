import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";
import { UsuarioMapper } from "../mappers/usuario.mapper";
import { CreateUsuarioUseCase } from "../../../application/use-cases/create-usuario.use-case";

export class UsuarioController {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        res.status(422).json({ errors: errors.array() });
        return;
      }

      const createUsuarioUseCase = new CreateUsuarioUseCase();
      const usuario = await createUsuarioUseCase.execute(req.body);
      res.status(200).json(UsuarioMapper.fromClassObjectToJsonObject(usuario));
      return;
    } catch (error) {
      next(error);
    }
  }
}
