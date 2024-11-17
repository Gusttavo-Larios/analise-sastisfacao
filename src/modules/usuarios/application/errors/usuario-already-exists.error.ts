import { ErrorStatusCode } from "../../../../common/enums/status-code.enum";
import { AbstractError } from "../../../../common/errors/abstract-error.error";

export class UsuarioAlreadyExistsError extends AbstractError {
  constructor(motivo: string, mensagem: string) {
    super(motivo, mensagem, ErrorStatusCode.UNPROCESSABLE_ENTITY);
  }

  static fromEmail(email: string) {
    return new UsuarioAlreadyExistsError(
      "O e-mail informado já existe no banco de dados",
      `O e-mail ${email} informado já existe no banco de dados`
    );
  }
}
