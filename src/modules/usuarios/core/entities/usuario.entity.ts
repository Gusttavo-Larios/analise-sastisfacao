import { Entity, Column, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { TipoUsuario } from "../enums/tipo-usuario.enum";
import { CryptoValueObject } from "../../../../common/value-object/crypto.value-object";

@Entity("USUARIOS")
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  email: string;

  @Column()
  senha: string;

  @Column()
  saltSenha: string;

  @Column()
  tipoUsuario: number;

  @Column({
    nullable: true,
  })
  turmaId: number;

  static createUsuario(nome: string, email: string, senha: string) {
    const usuario = new Usuario();

    usuario.nome = nome;
    usuario.email = email;
    usuario.saltSenha = CryptoValueObject.generateSalt();
    usuario.senha = CryptoValueObject.generateHashPBKDF2(
      senha,
      usuario.saltSenha
    );
    usuario.tipoUsuario = TipoUsuario.ADMINISTRADOR;

    return usuario;
  }
}
