const userModel = require("../models/userModel");

const userDetailsController = async (req, res) => {
  try {
    console.log("userId:------", req.userId);

    const user = await userModel.findById(req.userId);
    console.log(user);

    res.status(200).json({
      data: user,
      message: "login successful",
      error: false,
      success: true,
    });
  } catch (err) {
    res.json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
};

module.exports = userDetailsController;
