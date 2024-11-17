import { Repository } from "../../../../common/interfaces/repository.interface";
import { Turma } from "../../core/entities/turma.entity";

export type QueryTurmas = {
  readonly keyword?: string;
};

export interface TurmaRepository extends Repository {
  findAllTurmas(query: QueryTurmas): Promise<Turma[]>;
}
