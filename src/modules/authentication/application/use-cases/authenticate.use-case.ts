import { Time } from "../../../../common/enums/time.enum";
import { JwtValueObject } from "../../../../common/value-object/jwt.value-object";
import { ImplUsuarioRepository } from "../../../usuarios/adapters/database/repositories/usuario.repository";
import { UsuarioRepository } from "../../../usuarios/application/interfaces/usuario.repository";
import { CredencialInvalidaError } from "../errors/credencial-invalida.error";
import { InputAuthenticate } from "../types/input-authenticate.type";
import { OutputAuthenticateUseCase } from "../types/output-authenticate-use-case.type";

export class AuthenticateUseCase {
  private usuarioRepository: UsuarioRepository = new ImplUsuarioRepository();

  async execute(input: InputAuthenticate): Promise<OutputAuthenticateUseCase> {
    const usuario = await this.usuarioRepository.findUsuarioByEmail(
      input.email
    );

    if (!usuario) throw CredencialInvalidaError.newError();

    const isSameSenha = usuario.isSameSenha(input.senha);

    if (!isSameSenha) throw CredencialInvalidaError.newError();

    return JwtValueObject.generateToken({
      value: {
        id: usuario.id,
      },
      expiresIn: Time.ONE_HOUR,
    });
  }
}
