import joi from "joi";

export const appointmentSchemma = joi.object({
    horary_id: joi.number().integer().required()
});