import joi from "joi";

export const userSchemma = joi.object({
  name: joi.string().required(),
  email: joi.string().email().required(),
  password: joi.string().required(),
  cpf: joi.string().max(11).required()
});