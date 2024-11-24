import { body } from "express-validator";

export const saveRespostasValidator = [
  body(
    "aplicacaoId",
    "O campo 'aplicacaoId' deve ser um número e não pode estar vazio."
  ).isNumeric(),
  body("respostas")
    .isArray({
      min: 23,
      max: 23,
    })
    .withMessage('O campo "respostas" deve ser um array.')
    .custom((value) => {
      value.forEach((resposta, index) => {
        if (
          !resposta.hasOwnProperty("perguntaId") ||
          !resposta.perguntaId ||
          typeof resposta.perguntaId !== "number"
        ) {
          throw new Error(
            `O campo "perguntaId" da resposta na posição ${index} deve ser um número e não pode estar vazio.`
          );
        }

        if (
          !resposta.hasOwnProperty("expectativa") ||
          !resposta.expectativa ||
          typeof resposta.expectativa !== "number"
        ) {
          throw new Error(
            `O campo "expectativa" da resposta na posição ${index} deve ser um número e não pode estar vazio.`
          );
        }

        if (
          !resposta.hasOwnProperty("realidade") ||
          !resposta.realidade ||
          typeof resposta.realidade !== "number"
        ) {
          throw new Error(
            `O campo "realidade" da resposta na posição ${index} deve ser um número e não pode estar vazio.`
          );
        }
      });
      return true;
    }),
];
