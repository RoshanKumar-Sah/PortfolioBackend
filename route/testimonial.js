const express = require("express")
const { validateSchema } = require("../middleware/validateSchema")
const checkAuthentication = require("../middleware/checkAuth")
const { testimonialSchema } = require("../schema/testimonialSchema")
const { postTestimonial, updateTestimonial, getTestimonials, removeTestimonial } = require("../controller/testimonial")

const router = express.Router()



router.get("/testimonial", getTestimonials)
router.post("/testimonial", checkAuthentication(process.env.JWT_KEY), validateSchema(testimonialSchema), postTestimonial)
router.put("/testimonial/:id",checkAuthentication(process.env.JWT_KEY), validateSchema(testimonialSchema), updateTestimonial)
router.delete("/testimonial/:id",checkAuthentication(process.env.JWT_KEY), removeTestimonial)

module.exports = router