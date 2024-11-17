import { AbstractError } from "../errors/abstract-error.error";
import { InternalError } from "../errors/internal.error";

export const normalizeError = (err: Error) => {
  if (err instanceof AbstractError) {
    return err;
  }

  return InternalError.newError(err.message);
};
