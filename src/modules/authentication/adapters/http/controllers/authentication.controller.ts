import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";
import { AuthenticateUseCase } from "../../../application/use-cases/authenticate.use-case";
import { AuthenticateMapper } from "../mappers/authenticate.mapper";

export class AuthenticationController {
  async authenticate(req: Request, res: Response, next: NextFunction) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        res.status(422).json({ errors: errors.array() });
        return;
      }

      const authenticateUseCase = new AuthenticateUseCase();
      const output = await authenticateUseCase.execute(req.body);
      res.status(200).json(AuthenticateMapper.fromSuccessToJsonObject(output));
      return;
    } catch (error) {
      next(error);
    }
  }
}
