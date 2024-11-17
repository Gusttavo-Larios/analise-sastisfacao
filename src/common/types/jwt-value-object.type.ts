import { JwtAlgorithm } from "../enums/jwt-algorithm.enum";

export type InputGenerateTokenJwtValueObject = {
  readonly value: Object;
  readonly expiresIn: number;
  readonly algorithm?: JwtAlgorithm;
  readonly secretKey?: string;
};

export type InputCompareTokenJwtValueObject = {
  readonly token: string;
  readonly algorithms?: JwtAlgorithm[];
  readonly secretKey?: string;
};
