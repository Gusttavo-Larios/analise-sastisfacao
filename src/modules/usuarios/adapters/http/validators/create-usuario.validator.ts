import { body } from "express-validator";

export const createUsuarioValidator = [
  body("nome", "O campo nome é obrigatório")
    .isString()
    .withMessage("O campo nome deve ser um texto")
    .not()
    .isEmpty(),
  body("email", "O campo e-mail é obrigatório")
    .isString()
    .withMessage("O campo email deve ser um texto")
    .isEmail(),
  body("senha", "O campo senha é obrigatório")
    .isString()
    .withMessage("O campo senha deve ser um texto")
    .not()
    .isEmpty(),
  body("turmaId", "O campo turmaId é obrigatório")
    .isNumeric()
    .withMessage("O campo turmaId deve ser um númerico")
    .not()
    .isEmpty(),
];
