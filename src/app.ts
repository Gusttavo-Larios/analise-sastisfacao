import "reflect-metadata";
import express, { Request, Response } from "express";
import { AppDataSource } from "./database/data-source";

AppDataSource.initialize().then(() => {
  console.log("Conexão com o BD foi iniciada");
});

const app = express();

app.get("/", (requeste: Request, response: Response) => {});

//Página 404
app.use((request: Request, response: Response) => {
  response.status(404).send("Página não encontrada");
});

app.listen(process.env.PORT, () => {
  console.log("App rondando na porta: " + process.env.PORT);
});
