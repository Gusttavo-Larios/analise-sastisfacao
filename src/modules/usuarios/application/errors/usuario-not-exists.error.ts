import { ErrorStatusCode } from "../../../../common/enums/status-code.enum";
import { AbstractError } from "../../../../common/errors/abstract-error.error";

export class UsuarioNotExistsError extends AbstractError {
  constructor(motivo: string, mensagem: string) {
    super(motivo, mensagem, ErrorStatusCode.NOT_FOUND);
  }

  static fromEmail(email: string) {
    return new UsuarioNotExistsError(
      "O e-mail informado não existe no banco de dados",
      `O e-mail ${email} informado não existe no banco de dados`
    );
  }
}
