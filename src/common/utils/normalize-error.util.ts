import { AbstractError } from "../errors/abstract-error.error";
import { InternalError } from "../errors/internal.error";

export const normalizeError = (err) => {
  if (err instanceof AbstractError) {
    return err;
  }

  return InternalError.newError();
};
