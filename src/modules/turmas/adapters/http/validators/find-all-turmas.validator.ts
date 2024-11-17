import { query } from "express-validator";

export const findAllTurmasValidator = [query("keyword").isString().optional()];
