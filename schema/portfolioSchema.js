const Joi = require("joi")

const portfolioSchema = Joi.object({
    description: Joi.string()
        .required(),

    title: Joi.string()
        .required(),

    category: Joi.string()
        .lowercase()
        .valid("full-stack", "frontend", "landing-page")
        .required(),

    liveURL: Joi.string()
        .required(),

    repoURL: Joi.string()
        .required(),
})

module.exports = {
    portfolioSchema
}