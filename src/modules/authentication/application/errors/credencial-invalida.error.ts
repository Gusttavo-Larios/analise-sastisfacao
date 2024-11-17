import { ErrorStatusCode } from "../../../../common/enums/status-code.enum";
import { AbstractError } from "../../../../common/errors/abstract-error.error";

export class CredencialInvalidaError extends AbstractError {
  constructor(motivo: string, mensagem: string) {
    super(motivo, mensagem, ErrorStatusCode.UNAUTHORIZED);
  }

  static newError() {
    return new CredencialInvalidaError(
      "Credencial inválida",
      `Credencial inválida`
    );
  }
}
