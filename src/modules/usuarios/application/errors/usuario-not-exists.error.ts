import { ErrorStatusCode } from "../../../../common/enums/status-code.enum";
import { AbstractError } from "../../../../common/errors/abstract-error.error";

export class UsuarioNotExistsError extends AbstractError {
  constructor(motivo: string, mensagem: string) {
    super(motivo, mensagem, ErrorStatusCode.NOT_FOUND);
  }

  static fromEmail(email: string) {
    return new UsuarioNotExistsError(
      "O e-mail de usuário informado não existe no banco de dados",
      `O e-mail de usuário ${email} informado não existe no banco de dados`
    );
  }

  static fromId(usuarioId: number) {
    return new UsuarioNotExistsError(
      "O ID de usuário informado não existe no banco de dados",
      `O ID de usuário ${usuarioId} informado não existe no banco de dados`
    );
  }
}
