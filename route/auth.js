const express = require("express");
const { login } = require("../controller/auth");
const { validateSchema } = require("../middleware/validateSchema");
const { loginSchema } = require("../schema/authSchema");
const router = express.Router();


router.post("/login", validateSchema(loginSchema), login)

module.exports = router