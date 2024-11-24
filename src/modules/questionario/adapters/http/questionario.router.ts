import express from "express";
import { RespostaController } from "./controllers/resposta.controller";
import { saveRespostasValidator } from "./validators/save-respostas.validator";
import { AplicacaoController } from "./controllers/aplicacao.controller";
import { getLastAplicacaoValidator } from "./validators/get-last-aplicacao.validator";

const questionarioRouter = express.Router();

const aplicacaoController = new AplicacaoController();
const respostaController = new RespostaController();

questionarioRouter.get(
  "/questionario/aplicacao/ultimo",
  getLastAplicacaoValidator,
  aplicacaoController.getLastAplicacao
);

questionarioRouter.post(
  "/questionario/resposta",
  saveRespostasValidator,
  respostaController.saveResposta
);

export { questionarioRouter };
