import express from "express";
import { authenticateValidator } from "./validators/authenticate-usuario.validator";
import { AuthenticationController } from "./controllers/authentication.controller";

const authenticationRouter = express.Router();

const authenticationController = new AuthenticationController();

authenticationRouter.post(
  "/autenticacao/autenticar",
  authenticateValidator,
  authenticationController.authenticate
);

export { authenticationRouter };
