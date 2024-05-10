const authToken = async (req, res, next) => {
  try {
    const token = req.cookies || req.header;
    console.log("token", token);
  } catch (err) {
    res.status(400).json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
};

module.exports = authToken;
