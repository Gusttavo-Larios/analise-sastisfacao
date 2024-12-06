import "reflect-metadata";
import { DataSource } from "typeorm";

import { Usuario } from "../modules/usuarios/core/entities/usuario.entity";
import { ENVS } from "../common/constants/envs.const";
import { Turma } from "../modules/turmas/core/entities/turma.entity";
import { Resposta } from "../modules/questionario/core/entities/resposta.entity";
import { Aplicacao } from "../modules/questionario/core/entities/aplicacao.entity";
import { Pergunta } from "../modules/questionario/core/entities/pergunta.entity";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: ENVS.DB_HOST,
  port: Number(ENVS.DB_PORT),
  username: ENVS.DB_USER,
  password: ENVS.DB_PASSWORD,
  database: ENVS.DB_NAME,
  synchronize: false,
  logging: true,
  entities: [Usuario, Turma, Aplicacao, Resposta, Pergunta],
  migrations: ["src/database/migrations/**/*{.ts,.js}"],
  subscribers: [],
});
