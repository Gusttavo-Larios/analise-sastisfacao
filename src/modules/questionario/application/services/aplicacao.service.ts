import { ImplAplicacaoRepository } from "../../adapters/database/repositories/aplicacao.repository";
import { AplicacaoNotExistsError } from "../errors/aplicacao-not-exists.error";
import { AplicacaoRepository } from "../interfaces/aplicacao.repository";

export class AplicacaoService {
  private readonly aplicacaoRepository: AplicacaoRepository =
    new ImplAplicacaoRepository();

  async findById(aplicacaoId: number) {
    const aplicacao = await this.aplicacaoRepository.findAplicacaoById(
      aplicacaoId
    );

    if (!aplicacao) {
      throw AplicacaoNotExistsError.fromId(aplicacaoId);
    }

    return aplicacao;
  }
}
