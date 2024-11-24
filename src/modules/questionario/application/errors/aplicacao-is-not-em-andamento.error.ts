import { ErrorStatusCode } from "../../../../common/enums/status-code.enum";
import { AbstractError } from "../../../../common/errors/abstract-error.error";

export class AplicacaoIsNotEmAndamentoError extends AbstractError {
  constructor(motivo: string, mensagem: string) {
    super(motivo, mensagem, ErrorStatusCode.BAD_REQUEST);
  }

  static newError() {
    return new AplicacaoIsNotEmAndamentoError(
      "A aplicação do questionário não está em andamento",
      `A aplicação do questionário não está em andamento`
    );
  }
}
