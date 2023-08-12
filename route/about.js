const express = require("express")
const { postAbout, updateAbout } = require("../controller/about")
const { validateSchema } = require("../middleware/validateSchema")
const { aboutSchema } = require("../schema/aboutSchema")
const checkAuthentication = require("../middleware/checkAuth")
const router = express.Router()

router.post("/about", checkAuthentication(process.env.JWT_KEY) ,validateSchema(aboutSchema), postAbout)
router.put("/about/:id",updateAbout)


module.exports = router