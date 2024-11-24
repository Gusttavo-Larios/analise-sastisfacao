import { ErrorStatusCode } from "../../../../common/enums/status-code.enum";
import { AbstractError } from "../../../../common/errors/abstract-error.error";

export class AplicacaoNotExistsError extends AbstractError {
  constructor(motivo: string, mensagem: string) {
    super(motivo, mensagem, ErrorStatusCode.NOT_FOUND);
  }

  static fromId(id: number) {
    return new AplicacaoNotExistsError(
      "O ID de aplicação informado não existe no banco de dados",
      `O ID ${id} de aplicação informado não existe no banco de dados`
    );
  }
}
