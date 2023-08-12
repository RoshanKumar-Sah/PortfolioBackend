const Joi = require("joi")

const aboutSchema = Joi.object({
    summary: Joi.string()
        .required(),

    stream: Joi.string()
        .required(),

    name: Joi.string()
        .required(),

    address: Joi.string()
        .required(),

    study: Joi.string()
        .required(),

    degree: Joi.string()
        .required(),

    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ["com", "net", "np"] } })
        .required(),

    phone: Joi.number()
        .integer()
        .required(),

    service: Joi.array()
        .required(),

    interest: Joi.array()
        .required(),

    programming: Joi.array()
        .required(),
    language: Joi.array()
        .required(),

    education: Joi.array()
        .required(),

    experience: Joi.array()
        .required(),

    training: Joi.array()
        .required(),
})

module.exports = {
    aboutSchema
}