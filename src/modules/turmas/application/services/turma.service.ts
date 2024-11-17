import { ImplTurmaRepository } from "../../adapters/database/repositories/turma.repository";
import { TurmaRepository } from "../interfaces/turma.repository";
import { InputFindAllTurmas } from "../types/input-find-all-turmas.type";

export class TurmaService {
  private turmaRepository: TurmaRepository = new ImplTurmaRepository();

  async findAll(input: InputFindAllTurmas) {
    const turma = await this.turmaRepository.findAllTurmas(input);

    return turma;
  }
}
