var bcrypt = require("bcryptjs");
const userModel = require("../models/usersModel");

const signUpController = async () => {
  try {
    const { name, email, password } = req.body;
    const user = await userModel.findOne({ email });
    console.log(user);
    console.log("req.body", req.body);
    if (!email) {
      throw new Error("Please Provide Your Email");
    }
    if (!password) {
      throw new Error("Please Provide Your password");
    }
    if (!name) {
      throw new Error("Please Provide Your name");
    }

    var salt = bcrypt.genSaltSync(10);
    var hashPass = bcrypt.hashSync(password, salt);

    if (!hashPass) {
      throw new Error("Something went wrong!");
    }
    const payload = {
      ...req.body,
      password: hashPass,
    };

    const userData = new userModel(payload);
    const saveData = userData.save();

    res.status(201).json({
      data: saveData,
      error: false,
      success: true,
      message: "User Added Successfully",
    });
  } catch (err) {
    res.json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
};

module.exports = signUpController;
