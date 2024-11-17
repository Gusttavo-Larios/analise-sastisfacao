import { UsuarioAlreadyExistsError } from "../errors/usuario-already-exists.error";
import { Usuario } from "../../core/entities/usuario.entity";
import { ImplUsuarioRepository } from "../../adapters/database/repositories/usuario.repository";
import { InputCreateUsuario } from "../types/input-create-usuario.type";

export class CreateUsuarioUseCase {
  private usuarioRepository = new ImplUsuarioRepository();

  async execute(input: InputCreateUsuario) {
    const usuarioExists = await this.usuarioRepository.findUsuarioByEmail(
      input.email
    );

    if (usuarioExists) {
      throw UsuarioAlreadyExistsError.fromEmail(input.email);
    }

    const usuarioEntity = Usuario.createUsuario(
      input.nome,
      input.email,
      input.senha,
      input.turmaId
    );
    return this.usuarioRepository.save(usuarioEntity);
  }
}
