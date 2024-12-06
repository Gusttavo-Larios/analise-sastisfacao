import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("perguntas")
export class Pergunta {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  texto: string;

  @Column({
    name: "tipo_pergunta",
  })
  tipoPergunta: number;
}
