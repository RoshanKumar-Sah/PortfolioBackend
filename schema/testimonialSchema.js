const Joi = require("joi")

const testimonialSchema = Joi.object({
    description: Joi.string()
        .required(),

    name: Joi.string()
        .required(),

    title: Joi.string()
        .required()

})

module.exports = {
    testimonialSchema
}