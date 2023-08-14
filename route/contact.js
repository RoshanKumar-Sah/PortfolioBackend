const express = require("express")
const { validateSchema } = require("../middleware/validateSchema")
const checkAuthentication = require("../middleware/checkAuth")
const { postContact, getContact, getSingleContact, removeContact } = require("../controller/contact")
const { contactSchema } = require("../schema/contactSchema")


const router = express.Router()



router.get("/contact",checkAuthentication(process.env.JWT_KEY), getContact)
router.get("/contact/:id",checkAuthentication(process.env.JWT_KEY), getSingleContact)
router.post("/contact", validateSchema(contactSchema), postContact)
router.delete("/contact/:id",checkAuthentication(process.env.JWT_KEY), removeContact)

module.exports = router