import { body } from "express-validator";

export const createUsuarioValidator = [
  body("nome", "O campo nome é obrigatório").not().isEmpty(),
  body("email", "O campo e-mail é obrigatório").isEmail(),
  body("senha", "O campo senha é obrigatório").not().isEmpty(),
];
