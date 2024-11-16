import { AbstractError } from "./abstract-error.error";

export class InternalError extends AbstractError {
  constructor(motivo: string, mensagem: string) {
    super(motivo, mensagem, 500);
  }

  static newError() {
    return new InternalError(
      "Error interno do servidor",
      `Error interno do servidor`
    );
  }
}
