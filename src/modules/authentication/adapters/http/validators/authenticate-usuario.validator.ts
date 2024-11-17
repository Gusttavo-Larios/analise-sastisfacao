import { body } from "express-validator";

export const authenticateValidator = [
  body("email", "O campo e-mail é obrigatório").isEmail(),
  body("senha", "O campo senha é obrigatório").not().isEmpty(),
];
