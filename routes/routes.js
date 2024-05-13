const express = require("express");
const signUpController = require("../controller/signup");
const useSignInController = require("../controller/signin");
const userDetailsCOntroller = require("../controller/userDetailsCOntroller");
const authToken = require("../middleware/authToken");
const userLogout = require("../controller/userLogout");
const allUsers = require("../controller/allUsers");
const updateUser = require("../controller/updateUser");
const UploadProductController = require("../controller/product/uploadProduct");

const router = express.Router();

router.post("/signup", signUpController);
router.post("/signin", useSignInController);
router.get("/user-details", authToken, userDetailsCOntroller);
router.get("/logout", authToken, userLogout);

// admin routes
router.get("/all-users", authToken, allUsers);
router.post("/update-user", authToken, updateUser);

// products routes
router.post("/upload-product", authToken, UploadProductController);

module.exports = router;
