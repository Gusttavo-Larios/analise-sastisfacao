import { AppDataSource } from "../../../../../database/data-source";
import {
  AplicacaoRepository,
  QueryFindLastAplicacao,
} from "../../../application/interfaces/aplicacao.repository";
import { Aplicacao } from "../../../core/entities/aplicacao.entity";

export class ImplAplicacaoRepository implements AplicacaoRepository {
  private aplicacaoRepository = AppDataSource.getRepository(Aplicacao);

  async save<Aplicacao>(entity: Aplicacao): Promise<Aplicacao> {
    return this.aplicacaoRepository.save(entity);
  }

  async findLastAplicacao(
    query: QueryFindLastAplicacao
  ): Promise<Aplicacao | null> {
    const queryBuilder =
      this.aplicacaoRepository.createQueryBuilder("aplicacao");

    if (query.situacao) {
      queryBuilder.andWhere("aplicacao.situacao = :situacao", {
        situacao: query.situacao,
      });
    }

    return queryBuilder.orderBy("aplicacao.id", "DESC").getOne();
  }

  async findAplicacaoById(aplicacaoId: number): Promise<Aplicacao | null> {
    return this.aplicacaoRepository
      .createQueryBuilder("aplicacao")
      .leftJoinAndSelect("aplicacao.respostas", "respostas")
      .where("aplicacao.id = :aplicacaoId", {
        aplicacaoId,
      })
      .getOne();
  }
}
