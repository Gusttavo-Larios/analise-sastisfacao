import { AppDataSource } from "../../../../../database/data-source";
import {
  QueryRespostas,
  RespostaRepository,
} from "../../../application/interfaces/resposta.repository";
import { Resposta } from "../../../core/entities/resposta.entity";

export class ImplRespostaRepository implements RespostaRepository {
  private respostaRepository = AppDataSource.getRepository(Resposta);

  async save<Resposta>(entity: Resposta): Promise<Resposta> {
    return this.respostaRepository.save(entity);
  }

  async findAllRespostas(query: QueryRespostas): Promise<Resposta[]> {
    const queryBuilder = this.respostaRepository.createQueryBuilder("resposta");

    if (query.aplicacaoId) {
      queryBuilder.where("resposta.aplicacaoId = :aplicacaoId", {
        aplicacaoId: query.aplicacaoId,
      });
    }

    if (query.turmaId) {
      queryBuilder.where("resposta.turmaId = :turmaId", {
        turmaId: query.turmaId,
      });
    }

    return queryBuilder.getMany();
  }
}
