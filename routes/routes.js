const express = require("express");
const signUpController = require("../controller/signup");

const router = express.Router();

router.post("/signup", signUpController);
module.exports = router;
