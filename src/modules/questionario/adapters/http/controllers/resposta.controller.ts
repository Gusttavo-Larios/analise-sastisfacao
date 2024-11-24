import { NextFunction, Response } from "express";
import { validationResult } from "express-validator";
import { SaveRespostasUseCase } from "../../../application/use-cases/save-respostas.use-case";
import { AuthenticatedRequest } from "../../../../../common/interfaces/authenticated-request.interface";

export class RespostaController {
  async saveResposta(
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

      const saveRespostasUseCase = new SaveRespostasUseCase();
      await saveRespostasUseCase.execute(req.user, req.body);

      res.status(200).json({
        mensagem: "Respostas salvas com sucesso",
      });
      return;
    } catch (error) {
      next(error);
    }
  }
}
