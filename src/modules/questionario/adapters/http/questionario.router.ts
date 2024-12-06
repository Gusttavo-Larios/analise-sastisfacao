import express from "express";
import { RespostaController } from "./controllers/resposta.controller";
import { saveRespostasValidator } from "./validators/save-respostas.validator";
import { AplicacaoController } from "./controllers/aplicacao.controller";
import { getLastAplicacaoValidator } from "./validators/get-last-aplicacao.validator";
import { ResultadoController } from "./controllers/resultado.controller";
import { calcularResultadoValidator } from "./validators/calcular-resultado.validator";

const questionarioRouter = express.Router();

const aplicacaoController = new AplicacaoController();
const respostaController = new RespostaController();
const resultadoController = new ResultadoController();

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

questionarioRouter.post(
  "/questionario/resultado",
  calcularResultadoValidator,
  resultadoController.calcularResultado
);

export { questionarioRouter };
