import { Repository } from "../../../../common/interfaces/repository.interface";
import { Aplicacao } from "../../core/entities/aplicacao.entity";
import { SituacaoAplicacao } from "../../core/enum/situacao-aplicacao.enum";

export type QueryFindLastAplicacao = {
  readonly situacao?: SituacaoAplicacao;
};

export interface AplicacaoRepository extends Repository {
  findLastAplicacao(query: QueryFindLastAplicacao): Promise<Aplicacao | null>;

  findAplicacaoById(aplicacaoId: number): Promise<Aplicacao | null>;
}
