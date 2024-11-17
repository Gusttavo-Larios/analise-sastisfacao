import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";
import { TurmaMapper } from "../mappers/turma.mapper";
import { TurmaService } from "../../../application/services/turma.service";

export class TurmaController {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        res.status(422).json({ errors: errors.array() });
        return;
      }

      const turmaService = new TurmaService();
      const turmas = await turmaService.findAll(req.query);
      const mappedTurmas = turmas.map((turma) =>
        TurmaMapper.fromClassObjectToListJsonObject(turma)
      );
      res.status(200).json(mappedTurmas);
      return;
    } catch (error) {
      next(error);
    }
  }
}
