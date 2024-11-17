import "reflect-metadata";
import { DataSource } from "typeorm";

import { Usuario } from "../modules/usuarios/core/entities/usuario.entity";
import { ENVS } from "../common/constants/envs.const";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: ENVS.DB_HOST,
  port: Number(ENVS.DB_PORT),
  username: ENVS.DB_USER,
  password: ENVS.DB_PASSWORD,
  database: ENVS.DB_NAME,
  synchronize: true,
  logging: true,
  entities: [Usuario],
  migrations: ["src/database/migrations/**/*{.ts,.js}"],
  subscribers: [],
});
