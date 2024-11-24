import { Request } from "express";
import { Usuario } from "../../modules/usuarios/core/entities/usuario.entity";

export interface AuthenticatedRequest extends Request {
  user: Usuario;
}
