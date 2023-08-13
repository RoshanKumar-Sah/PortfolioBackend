const express = require("express")
const { validateSchema } = require("../middleware/validateSchema")
const checkAuthentication = require("../middleware/checkAuth")
const { testimonialSchema } = require("../schema/testimonialSchema")
const { postTestimonial, updateTestimonial } = require("../controller/testimonial")

const router = express.Router()




router.post("/testimonial", checkAuthentication(process.env.JWT_KEY), validateSchema(testimonialSchema), postTestimonial)
router.put("/testimonial",checkAuthentication(process.env.JWT_KEY), validateSchema(testimonialSchema), updateTestimonial)


module.exports = router