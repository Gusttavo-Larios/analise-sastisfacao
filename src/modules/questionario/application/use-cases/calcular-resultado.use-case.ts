import { ImplRespostaRepository } from "../../adapters/database/repositories/resposta.repository";
import { InputCalcularResultado } from "../types/input-calcular-resultado.type";
import { ImplPerguntaRepository } from "../../adapters/database/repositories/pergunta.repository";
import { TipoPergunta } from "../../core/enum/tipo-pergunta.enum";
import {
  OutuptResultado,
  OutuptResultadoPergunta,
} from "../types/output-resultado.type";
import { GeneratePlanilhaResultadoService } from "../services/generate-planilha-resultado.service";

export class CalcularResultadoUseCase {
  private readonly respostaRepository = new ImplRespostaRepository();
  private readonly perguntaRepository = new ImplPerguntaRepository();
  private readonly generatePlanilhaResultadoService =
    new GeneratePlanilhaResultadoService();

  async execute(input: InputCalcularResultado) {
    const perguntas = await this.perguntaRepository.findAllPerguntas();
    const respostas = await this.respostaRepository.findAllRespostas(input);

    let resultadosPerguntas: OutuptResultadoPergunta[] = [];

    for (const pergunta of perguntas) {
      const respostasByPergunta = respostas.filter(
        (resposta) => resposta.perguntaId === pergunta.id
      );
      const totalExpectativa = respostasByPergunta.reduce(
        (acc, resposta) => acc + resposta.expectativa,
        0
      );
      const totalRealidade = respostasByPergunta.reduce(
        (acc, resposta) => acc + resposta.realidade,
        0
      );

      const mediaExpectativa = totalExpectativa / respostasByPergunta.length;
      const mediaRealidade = totalRealidade / respostasByPergunta.length;

      resultadosPerguntas.push({
        pergunta,
        mediaExpectativa,
        mediaRealidade,
        qualidadePercebida: mediaRealidade - mediaExpectativa,
      });
    }

    const tiposPergunta = Object.values(TipoPergunta).filter(
      (value) => typeof value === "number"
    ) as number[];

    const resultados: OutuptResultado[] = [];

    for (const tipoPergunta of tiposPergunta) {
      const resultadosPerguntasByTipo = resultadosPerguntas.filter(
        (resultadoPergunta) =>
          resultadoPergunta.pergunta.tipoPergunta === tipoPergunta
      );

      const totalExpectativa = resultadosPerguntasByTipo.reduce(
        (acc, resposta) => acc + resposta.mediaExpectativa,
        0
      );
      const totalRealidade = resultadosPerguntasByTipo.reduce(
        (acc, resposta) => acc + resposta.mediaRealidade,
        0
      );

      const mediaExpectativa =
        totalExpectativa / resultadosPerguntasByTipo.length;
      const mediaRealidade = totalRealidade / resultadosPerguntasByTipo.length;

      resultados.push({
        tipoPergunta,
        mediaExpectativa,
        mediaRealidade,
        total: mediaRealidade - mediaExpectativa,
        resultadoPerguntas: resultadosPerguntasByTipo,
      });
    }

    const file = await this.generatePlanilhaResultadoService.generate(
      resultados
    );

    return file;
  }
}
