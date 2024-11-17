import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { TipoCurso } from "../enums/tipo-curso.enum";
import { Usuario } from "../../../usuarios/core/entities/usuario.entity";

@Entity("turmas")
export class Turma {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  ano: number;

  @Column({
    name: "tipo_curso",
  })
  tipoCurso: number;

  @OneToMany(() => Usuario, (alunos) => alunos.turma)
  alunos: Usuario[];

  getTipoCurso() {
    return TipoCurso[this.tipoCurso];
  }
}
