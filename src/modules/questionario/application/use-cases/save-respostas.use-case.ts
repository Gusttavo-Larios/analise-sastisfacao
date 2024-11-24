import { Resposta } from "../../core/entities/resposta.entity";
import { InputSaveRespostas } from "../types/input-save-respostas.type";
import { ImplRespostaRepository } from "../../adapters/database/repositories/resposta.repository";
import { AplicacaoService } from "../services/aplicacao.service";
import { AplicacaoPeriodoIsEndedError } from "../errors/aplicacao-periodo-is-ended.error";
import { AplicacaoIsNotEmAndamentoError } from "../errors/aplicacao-is-not-em-andamento.error";
import { Usuario } from "../../../usuarios/core/entities/usuario.entity";
import { UsuarioAlreadyRespondeuQuestionarioError } from "../errors/usuario-already-respondeu-questionario.error";

export class SaveRespostasUseCase {
  private readonly aplicacaoService = new AplicacaoService();
  private readonly respostaRepository = new ImplRespostaRepository();

  async execute(usuario: Usuario, input: InputSaveRespostas) {
    const aplicacao = await this.aplicacaoService.findById(input.aplicacaoId);

    if (!aplicacao.isEmAndamento()) {
      throw AplicacaoIsNotEmAndamentoError.newError();
    }

    if (!aplicacao.isAcceptRespostas()) {
      throw AplicacaoPeriodoIsEndedError.newError();
    }

    if (aplicacao.alreadyRepondeuQuestionario(usuario)) {
      throw UsuarioAlreadyRespondeuQuestionarioError.newError();
    }

    const respostasEntities = input.respostas.map((resposta) =>
      Resposta.createResposta(
        usuario.id,
        input.aplicacaoId,
        resposta.perguntaId,
        resposta.expectativa,
        resposta.realidade
      )
    );

    return this.respostaRepository.save(respostasEntities);
  }
}
