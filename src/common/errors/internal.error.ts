import { ErrorStatusCode } from "../enums/status-code.enum";
import { AbstractError } from "./abstract-error.error";

export class InternalError extends AbstractError {
  constructor(motivo: string, mensagem: string) {
    super(motivo, mensagem, ErrorStatusCode.INTERNAL_SERVER_ERROR);
  }

  static newError(motivo: string) {
    return new InternalError(motivo, `Error interno do servidor`);
  }
}
