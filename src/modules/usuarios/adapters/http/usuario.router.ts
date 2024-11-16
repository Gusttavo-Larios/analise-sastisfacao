import express from "express";
import { UsuarioController } from "./controllers/usuario.controller";
import { createUsuarioValidator } from "./validators/create-usuario.validator";

const usuairoRouter = express.Router();

const usuarioController = new UsuarioController();

usuairoRouter.post(
  "/usuarios",
  createUsuarioValidator,
  usuarioController.create
);

export { usuairoRouter };
