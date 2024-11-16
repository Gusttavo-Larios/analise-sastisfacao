import { AppDataSource } from "../../../../../database/data-source";
import { Usuario } from "../../../core/entities/usuario.entity";
import { UsuarioRepository } from "../../../application/interfaces/usuario.repository";

export class ImplUsuarioRepository implements UsuarioRepository {
  private usuarioRepository = AppDataSource.getRepository(Usuario);

  async save<Usuario>(entity: Usuario): Promise<Usuario> {
    return this.usuarioRepository.save(entity);
  }

  async findUsuarioByEmail(email: string): Promise<Usuario | null> {
    return this.usuarioRepository
      .createQueryBuilder("usuario")
      .where("usuario.email = :email", { email })
      .getOne();
  }
}
