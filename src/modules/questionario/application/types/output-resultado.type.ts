import { Pergunta } from "../../core/entities/pergunta.entity";
import { TipoPergunta } from "../../core/enum/tipo-pergunta.enum";

export type OutuptResultado = {
  readonly tipoPergunta: TipoPergunta | string;
  readonly mediaExpectativa: number;
  readonly mediaRealidade: number;
  readonly total: number;
  readonly resultadoPerguntas: OutuptResultadoPergunta[];
};

export type OutuptResultadoPergunta = {
  readonly pergunta: Pergunta;
  readonly mediaExpectativa: number;
  readonly mediaRealidade: number;
  readonly qualidadePercebida: number;
};
