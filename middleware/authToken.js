const jwt = require("jsonwebtoken");

const authToken = async (req, res, next) => {
  try {
    const token = req.cookies?.token;
    console.log("token", token);

    if (!token) {
      return res.json({
        message: "User not logged in",
        error: true,
        success: false,
      });
    }
    jwt.verify(token, process.env.TOKEN_SECRET_KEY, function (err, decoded) {
      console.log("jwt-errror------", err);
      console.log("Decoded user", decoded);
    });

    if (err) {
      console.log("Error Auth", err);
    }
    req.user.id = decoded._id;
    next();
  } catch (err) {
    res.status(400).json({
      message: err.message || err,
      data: [],
      error: true,
      success: false,
    });
  }
};

module.exports = authToken;
