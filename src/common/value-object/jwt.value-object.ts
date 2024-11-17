import jwt from "jsonwebtoken";
import * as fs from "fs";

import { JwtAlgorithm } from "../enums/jwt-algorithm.enum";
import {
  InputCompareTokenJwtValueObject,
  InputGenerateTokenJwtValueObject,
} from "../types/jwt-value-object.type";

export class JwtValueObject {
  static generateToken({
    value,
    expiresIn = 1000 * 60 * 60,
    algorithm = JwtAlgorithm.RS512,
  }: InputGenerateTokenJwtValueObject) {
    const privateKey = fs.readFileSync("private_key.pem", "utf8");

    return jwt.sign(value, privateKey, {
      algorithm,
      expiresIn,
    });
  }

  static compareToken({
    token,
    algorithms = [JwtAlgorithm.RS512],
  }: InputCompareTokenJwtValueObject) {
    const publicKey = fs.readFileSync("public_key.pem", "utf8");

    return jwt.verify(token, publicKey, {
      algorithms,
    });
  }
}
