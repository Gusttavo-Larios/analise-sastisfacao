import { OutputAuthenticateUseCase } from "../../../application/types/output-authenticate-use-case.type";

export class AuthenticateMapper {
  static fromSuccessToJsonObject(value: OutputAuthenticateUseCase) {
    return {
      token: value,
    };
  }
}
