const express = require("express");
const signUpController = require("../controller/signup");
const useSignInController = require("../controller/signin");

const router = express.Router();

router.post("/signup", signUpController);
router.post("/signin", useSignInController);

module.exports = router;
