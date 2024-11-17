import { NextFunction, Request, Response } from "express";
import { ValidateTokenUseCase } from "../../../application/use-cases/validate-token.use-case";

export const authenticationMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const validateTokenUseCase = new ValidateTokenUseCase();
  try {
    validateTokenUseCase.execute(req.headers.authorization);
    next();
  } catch (error) {
    next(error);
  }
};
