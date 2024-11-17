import {
  Entity,
  Column,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { TipoUsuario } from "../enums/tipo-usuario.enum";
import { CryptoValueObject } from "../../../../common/value-object/crypto.value-object";
import { Turma } from "../../../turmas/core/entities/turma.entity";

@Entity("usuarios")
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  email: string;

  @Column()
  senha: string;

  @Column({
    name: "salt_senha",
  })
  saltSenha: string;

  @Column({
    name: "tipo_usuario",
  })
  tipoUsuario: number;

  @Column({
    nullable: true,
    name: "turma_id",
  })
  turmaId: number;

  @JoinColumn({
    name: "turma_id",
  })
  @ManyToOne(() => Turma, (turma) => turma.alunos)
  turma: Turma;

  isSameSenha(senha: string) {
    return CryptoValueObject.compareHashPBKDF2(
      senha,
      this.saltSenha,
      this.senha
    );
  }

  static createUsuario(
    nome: string,
    email: string,
    senha: string,
    turmaId: number
  ) {
    const usuario = new Usuario();

    usuario.nome = nome;
    usuario.email = email;
    usuario.saltSenha = CryptoValueObject.generateSalt();
    usuario.senha = CryptoValueObject.generateHashPBKDF2(
      senha,
      usuario.saltSenha
    );
    usuario.tipoUsuario = TipoUsuario.ADMINISTRADOR;
    usuario.turmaId = turmaId;

    return usuario;
  }
}
