import { body } from "express-validator";

export const calcularResultadoValidator = [
  body(
    "aplicacaoId",
    "O campo 'aplicacaoId' deve ser um número e não pode estar vazio."
  ).isNumeric(),
  body(
    "turmaId",
    "O campo 'turmaId' deve ser um número e não pode estar vazio."
  )
    .isNumeric()
    .optional(),
];
