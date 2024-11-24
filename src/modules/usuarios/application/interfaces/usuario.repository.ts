import { Repository } from "../../../../common/interfaces/repository.interface";
import { Usuario } from "../../core/entities/usuario.entity";

export interface UsuarioRepository extends Repository {
  findUsuarioByEmail(email: string): Promise<Usuario | null>;
  findUsuarioById(usuarioId: number): Promise<Usuario | null>;
}
