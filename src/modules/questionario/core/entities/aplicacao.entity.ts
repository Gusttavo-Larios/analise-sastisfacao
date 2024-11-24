import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Resposta } from "./resposta.entity";
import { SituacaoAplicacao } from "../enum/situacao-aplicacao.enum";
import { DateValueObject } from "../../../../common/value-object/date.value-object";
import { Usuario } from "../../../usuarios/core/entities/usuario.entity";

@Entity("aplicacoes")
export class Aplicacao {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: "data_inicio",
  })
  dataInicio: Date;

  @Column({
    name: "data_fim",
  })
  dataFim: Date;

  @Column()
  situacao: number;

  @OneToMany(() => Resposta, (resposta) => resposta.aplicacao)
  respostas: Resposta[];

  getSituacao() {
    return SituacaoAplicacao[this.situacao];
  }

  isEmAndamento() {
    return this.situacao === SituacaoAplicacao.EM_ANDAMENTO;
  }

  isAcceptRespostas() {
    const startDate = DateValueObject.create(this.dataInicio);
    const endDate = DateValueObject.create(this.dataFim);
    const today = DateValueObject.today();

    return today.isBetween(startDate, endDate);
  }

  alreadyRepondeuQuestionario(usuario: Usuario) {
    return this.respostas?.some(
      (resposta) => resposta.usuarioId === usuario.id
    );
  }
}
