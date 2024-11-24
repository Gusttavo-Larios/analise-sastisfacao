import { NextFunction, Response } from "express";
import { validationResult } from "express-validator";

import { AuthenticatedRequest } from "../../../../../common/interfaces/authenticated-request.interface";

import { ImplAplicacaoRepository } from "../../database/repositories/aplicacao.repository";
import { AplicacaoMapper } from "../mappers/aplicacao.mapper";

export class AplicacaoController {
  async getLastAplicacao(
    req: AuthenticatedRequest,
    res: Response,
    next: NextFunction
  ) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        res.status(422).json({ errors: errors.array() });
        return;
      }

      const aplicacaoRepository = new ImplAplicacaoRepository();
      const aplicacao = await aplicacaoRepository.findLastAplicacao(req.query);

      const mappedAplicacao = aplicacao
        ? AplicacaoMapper.fromClassObjectToJsonObject(aplicacao)
        : null;

      res.status(200).json(mappedAplicacao);
      return;
    } catch (error) {
      next(error);
    }
  }
}
