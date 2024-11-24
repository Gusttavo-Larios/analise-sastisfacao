import { Aplicacao } from "../../../core/entities/aplicacao.entity";

export class AplicacaoMapper {
  static fromClassObjectToJsonObject(aplicacao: Aplicacao) {
    return {
      id: aplicacao.id,
      dataInicio: aplicacao.dataInicio,
      dataFim: aplicacao.dataFim,
      situacao: aplicacao.getSituacao(),
    };
  }
}
