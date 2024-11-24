import { query } from "express-validator";
import { SituacaoAplicacao } from "../../../core/enum/situacao-aplicacao.enum";

export const getLastAplicacaoValidator = [
  query("situacao")
    .isIn([SituacaoAplicacao.EM_ANDAMENTO, SituacaoAplicacao.ENCERRADO])
    .not()
    .optional()
    .escape(),
];
