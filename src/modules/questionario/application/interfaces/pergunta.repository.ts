import { Repository } from "../../../../common/interfaces/repository.interface";
import { Pergunta } from "../../core/entities/pergunta.entity";

export interface PerguntaRepository extends Repository {
  readonly findAllPerguntas: () => Promise<Pergunta[]>;
}
