import { SelectQueryBuilder } from "typeorm";
import { AppDataSource } from "../../../../../database/data-source";
import { Turma } from "../../../core/entities/turma.entity";
import {
  QueryTurmas,
  TurmaRepository,
} from "../../../application/interfaces/turma.repository";

export class ImplTurmaRepository implements TurmaRepository {
  private turmaRepository = AppDataSource.getRepository(Turma);

  async save<Turma>(entity: Turma): Promise<Turma> {
    return this.turmaRepository.save(entity);
  }

  async findAllTurmas(query: QueryTurmas): Promise<Turma[]> {
    const queryBuilder = this.turmaRepository.createQueryBuilder("turma");

    if (query.keyword) {
      this.applyKeywordFilter(queryBuilder, query.keyword);
    }

    return queryBuilder.getMany();
  }

  private applyKeywordFilter(
    queryBuilder: SelectQueryBuilder<Turma>,
    keyword: string
  ) {
    return queryBuilder.andWhere("UPPER(turma.nome) LIKE UPPER(:keyword)", {
      keyword: `%${keyword}%`,
    });
  }
}
