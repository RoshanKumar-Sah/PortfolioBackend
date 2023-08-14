const express = require("express")
const { validateSchema } = require("../middleware/validateSchema")
const checkAuthentication = require("../middleware/checkAuth")
const { postPortfolio, updatePortfolio, removePortfolio, getPortfolio, getSinglePortfolio } = require("../controller/portfolio")
const { portfolioSchema } = require("../schema/portfolioSchema")


const router = express.Router()



router.get("/portfolio", getPortfolio)
router.get("/portfolio/:id", getSinglePortfolio)
router.post("/portfolio", checkAuthentication(process.env.JWT_KEY), validateSchema(portfolioSchema), postPortfolio)
router.put("/portfolio/:id",checkAuthentication(process.env.JWT_KEY), validateSchema(portfolioSchema), updatePortfolio)
router.delete("/portfolio/:id",checkAuthentication(process.env.JWT_KEY), removePortfolio)

module.exports = router