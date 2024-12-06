import { AppDataSource } from "../../../../../database/data-source";
import { PerguntaRepository } from "../../../application/interfaces/pergunta.repository";
import { Pergunta } from "../../../core/entities/pergunta.entity";

export class ImplPerguntaRepository implements PerguntaRepository {
  private perguntaRepository = AppDataSource.getRepository(Pergunta);

  async save<Pergunta>(entity: Pergunta): Promise<Pergunta> {
    return this.perguntaRepository.save(entity);
  }

  async findAllPerguntas(): Promise<Pergunta[]> {
    return this.perguntaRepository.createQueryBuilder("pergunta").getMany();
  }
}
