const express = require("express")
const { postAbout, updateAbout, getAbout } = require("../controller/about")
const { validateSchema } = require("../middleware/validateSchema")
const { aboutSchema } = require("../schema/aboutSchema")
const checkAuthentication = require("../middleware/checkAuth")
const router = express.Router()


router.get("/about", getAbout)
router.post("/about", checkAuthentication(process.env.JWT_KEY) ,validateSchema(aboutSchema), postAbout)
router.put("/about/:id", checkAuthentication(process.env.JWT_KEY) ,validateSchema(aboutSchema), updateAbout)


module.exports = router