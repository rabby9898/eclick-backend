const productsModel = require("../../models/productsModel");

const searchProduct = async (req, res) => {
  try {
    const query = req.query.q;
    const regex = new RegExp(query, "i", "g");

    const product = await productsModel.find({
      $or: [
        {
          productName: regex,
        },
        {
          searchProduct: regex,
        },
      ],
    });

    res.json({
      data: product,
      message: "Searching Product",
      success: true,
      error: false,
    });
  } catch {
    return res.json({
      message: "Search Failed",
      success: false,
      error: true,
    });
  }
};

module.exports = searchProduct;
