import { ErrorStatusCode } from "../../../../common/enums/status-code.enum";
import { AbstractError } from "../../../../common/errors/abstract-error.error";

export class UsuarioAlreadyRespondeuQuestionarioError extends AbstractError {
  constructor(motivo: string, mensagem: string) {
    super(motivo, mensagem, ErrorStatusCode.BAD_REQUEST);
  }

  static newError() {
    return new UsuarioAlreadyRespondeuQuestionarioError(
      "O usuário já respondeu o questionário",
      `O usuário já respondeu o questionário`
    );
  }
}
