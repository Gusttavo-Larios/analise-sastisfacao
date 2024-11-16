import { NextFunction, Request, Response } from "express";
import { normalizeError } from "../utils/normalize-error.util";

export const errorHandlerMiddleware = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (res.headersSent) {
    return next(err);
  }

  const error = normalizeError(err).getError();

  const statusCode = error.codigo;

  res.status(statusCode).send(error);
};
