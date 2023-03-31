import joi from "joi";

export const doctorSchemma = joi.object({
    CRM: joi.string().required(),
    specialty: joi.string().required(),
    location: joi.string().required()
});

export const horariesSchemma = joi.object({
    horary: joi.date().required()
});