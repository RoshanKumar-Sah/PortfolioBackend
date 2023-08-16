const express = require("express");
const checkAuthentication = require("../middleware/checkAuth");
const { getUser } = require("../controller/user");
const router = express.Router();

router.get("/getUser", checkAuthentication(process.env.JWT_KEY), getUser)

module.exports = router