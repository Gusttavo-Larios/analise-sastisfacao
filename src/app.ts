import "reflect-metadata";

import express, { Request, Response } from "express";
import cors from "cors";

import { AppDataSource } from "./database/data-source";
import { errorHandlerMiddleware } from "./common/middlewares/error-handler.middleware";
import { usuairoRouter } from "./modules/usuarios/adapters/http/usuario.router";
import { ENVS } from "./common/constants/envs.const";
import { authenticationRouter } from "./modules/authentication/adapters/http/usuario.router";
import { authenticationMiddleware } from "./modules/authentication/adapters/http/middlewares/authentication.middleware";

AppDataSource.initialize().then(() => {
  console.log("Conexão com o BD foi iniciada");
});

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use("/api", usuairoRouter);
app.use("/api", authenticationRouter);
app.use(authenticationMiddleware);
app.get("/api/teste", (req, res) => {
  res.json({ ok: "ok" });
  return;
});

app.use((request: Request, response: Response) => {
  console.log("app.routes");
  console.log(app.routes);
  response.status(404).send("Página não encontrada");
});

app.use(errorHandlerMiddleware);

// Captura de exceções não tratadas
process.on("uncaughtException", (err) => {
  console.error("Exceção não tratada:", err);
  // Registrar o erro ou enviar para um sistema de log, mas não finalizar o processo
  // Reiniciar a aplicação ou continuar com o processo
});

// Captura de promessas rejeitadas não tratadas
process.on("unhandledRejection", (reason, promise) => {
  console.error("Promessa rejeitada não tratada:", reason);
  // Registrar o erro ou enviar para um sistema de log
  // Mas, novamente, não finalizar o processo
});

app.listen(ENVS.PORT, () => {
  console.log("App rondando na porta: " + ENVS.PORT);
});
