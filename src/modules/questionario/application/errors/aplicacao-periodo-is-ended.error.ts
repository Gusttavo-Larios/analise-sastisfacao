import { ErrorStatusCode } from "../../../../common/enums/status-code.enum";
import { AbstractError } from "../../../../common/errors/abstract-error.error";

export class AplicacaoPeriodoIsEndedError extends AbstractError {
  constructor(motivo: string, mensagem: string) {
    super(motivo, mensagem, ErrorStatusCode.BAD_REQUEST);
  }

  static newError() {
    return new AplicacaoPeriodoIsEndedError(
      "O período de aplicação do questionário chegou ao fim",
      `O período de aplicação do questionário chegou ao fim`
    );
  }
}
