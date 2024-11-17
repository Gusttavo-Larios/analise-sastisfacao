import { JwtValueObject } from "../../../../common/value-object/jwt.value-object";

export class ValidateTokenUseCase {
  execute(token: string) {
    return JwtValueObject.compareToken({
      token,
    });
  }
}
