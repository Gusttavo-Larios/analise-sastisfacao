import { NextFunction, Response } from "express";
import { validationResult } from "express-validator";
import { AuthenticatedRequest } from "../../../../../common/interfaces/authenticated-request.interface";
import { CalcularResultadoUseCase } from "../../../application/use-cases/calcular-resultado.use-case";

export class ResultadoController {
  async calcularResultado(
    req: AuthenticatedRequest,
    res: Response,
    next: NextFunction
  ) {
    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );
    res.setHeader("Content-Disposition", "attachment; filename=planilha.xlsx");

    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        res.status(422).json({ errors: errors.array() });
        return;
      }

      const calcularResultadoUseCase = new CalcularResultadoUseCase();
      const resultado = await calcularResultadoUseCase.execute(req.body);

      res.status(200).download(resultado.filePath, resultado.fileName);
      return;
    } catch (error) {
      next(error);
    }
  }
}
