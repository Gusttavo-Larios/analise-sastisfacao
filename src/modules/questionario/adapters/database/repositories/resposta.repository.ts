import { AppDataSource } from "../../../../../database/data-source";
import { RespostaRepository } from "../../../application/interfaces/resposta.repository";
import { Resposta } from "../../../core/entities/resposta.entity";

export class ImplRespostaRepository implements RespostaRepository {
  private RespostaRepository = AppDataSource.getRepository(Resposta);

  async save<Resposta>(entity: Resposta): Promise<Resposta> {
    return this.RespostaRepository.save(entity);
  }
}
