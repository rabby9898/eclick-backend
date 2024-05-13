const productsModel = require("../../models/productsModel");

const getProductController = async (req, res) => {
  try {
    const allProduct = await productsModel.find().sort({ createdAt: -1 });

    res.json({
      message: "All Product",
      success: true,
      error: false,
      data: allProduct,
    });
  } catch (err) {
    res.status(400).json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
};

module.exports = getProductController;
