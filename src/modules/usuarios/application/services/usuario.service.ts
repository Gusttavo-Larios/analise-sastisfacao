import { ImplUsuarioRepository } from "../../adapters/database/repositories/usuario.repository";
import { Usuario } from "../../core/entities/usuario.entity";
import { UsuarioNotExistsError } from "../errors/usuario-not-exists.error";
import { UsuarioRepository } from "../interfaces/usuario.repository";

export class UsuarioService {
  private usuarioRepository: UsuarioRepository = new ImplUsuarioRepository();

  async findByEmail(email: string) {
    const usuario = await this.usuarioRepository.findUsuarioByEmail(email);

    if (!usuario) throw UsuarioNotExistsError.fromEmail(email);

    return usuario;
  }
}
