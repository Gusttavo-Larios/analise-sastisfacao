export type InputSaveRespostas = {
  readonly aplicacaoId: number;
  readonly respostas: {
    readonly perguntaId: number;
    readonly expectativa: number;
    readonly realidade: number;
  }[];
};
