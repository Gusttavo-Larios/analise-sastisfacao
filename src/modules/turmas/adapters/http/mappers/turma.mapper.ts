import { Turma } from "../../../core/entities/turma.entity";

export class TurmaMapper {
  static fromClassObjectToListJsonObject(turma: Turma) {
    return {
      id: turma.id,
      nome: turma.nome,
      ano: turma.ano,
      tipoCurso: turma.getTipoCurso(),
    };
  }
}
