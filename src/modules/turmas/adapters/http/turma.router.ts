import express from "express";
import { TurmaController } from "./controllers/turma.controller";
import { findAllTurmasValidator } from "./validators/find-all-turmas.validator";

const turmaRouter = express.Router();

const turmaController = new TurmaController();

turmaRouter.get("/turmas", findAllTurmasValidator, turmaController.create);

export { turmaRouter };
