import { NextFunction, Response } from "express";
import { ValidateTokenUseCase } from "../../../application/use-cases/validate-token.use-case";
import { AuthenticatedRequest } from "../../../../../common/interfaces/authenticated-request.interface";
import { UsuarioService } from "../../../../usuarios/application/services/usuario.service";
import { TokenIsRequiredError } from "../../../application/errors/token-is-required.error";

export const authenticationMiddleware = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  const usuarioService = new UsuarioService();
  const validateTokenUseCase = new ValidateTokenUseCase();
  try {
    if (!req.headers.authorization) {
      throw TokenIsRequiredError.newError();
    }

    const [_, token] = req.headers.authorization.split(" ");
    const value: any = validateTokenUseCase.execute(token);

    const usuario = await usuarioService.findById(value.id);

    Object.defineProperty(req, "user", {
      value: usuario,
    });
    next();
  } catch (error) {
    next(error);
  }
};
