const express = require("express");
const signUpController = require("../controller/signup");
const useSignInController = require("../controller/signin");
const userDetailsCOntroller = require("../controller/userDetailsCOntroller");

const router = express.Router();

router.post("/signup", signUpController);
router.post("/signin", useSignInController);
router.get("/user-details", userDetailsCOntroller);

module.exports = router;
