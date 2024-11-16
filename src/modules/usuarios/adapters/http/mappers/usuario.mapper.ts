import { Usuario } from "../../../core/entities/usuario.entity";

export class UsuarioMapper {
  static fromClassObjectToJsonObject(usuario: Usuario) {
    return {
      nome: usuario.nome,
      email: usuario.email,
      tipoUsuario: usuario.tipoUsuario,
      turmaId: usuario.turmaId,
    };
  }
}
