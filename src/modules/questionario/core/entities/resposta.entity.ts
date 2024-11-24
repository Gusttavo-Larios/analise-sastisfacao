import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { Usuario } from "../../../usuarios/core/entities/usuario.entity";
import { Aplicacao } from "./aplicacao.entity";

@Entity("respostas")
export class Resposta {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: "usuario_id",
  })
  usuarioId: number;

  @Column({
    name: "aplicacao_id",
  })
  aplicacaoId: number;

  @Column({
    name: "pergunta_id",
  })
  perguntaId: number;

  @Column()
  expectativa: number;

  @Column()
  realidade: number;

  @JoinColumn({
    name: "usuario_id",
  })
  @ManyToOne(() => Usuario, (usuario) => usuario.respostas)
  usuario: Usuario;

  @JoinColumn({
    name: "usuario_id",
  })
  @ManyToOne(() => Aplicacao, (aplicacao) => aplicacao.respostas)
  aplicacao: Aplicacao;

  static createResposta(
    usuarioId: number,
    aplicacaoId: number,
    perguntaId: number,
    expectativa: number,
    realidade: number
  ) {
    const resposta = new Resposta();

    resposta.usuarioId = usuarioId;
    resposta.aplicacaoId = aplicacaoId;
    resposta.perguntaId = perguntaId;
    resposta.expectativa = expectativa;
    resposta.realidade = realidade;

    return resposta;
  }
}
