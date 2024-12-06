import { Repository } from "../../../../common/interfaces/repository.interface";
import { Resposta } from "../../core/entities/resposta.entity";

export type QueryRespostas = {
  readonly aplicacaoId?: number;
  readonly turmaId?: number;
};

export interface RespostaRepository extends Repository {
  readonly findAllRespostas: (query: QueryRespostas) => Promise<Resposta[]>;
}
