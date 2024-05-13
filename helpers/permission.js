const usersModel = require("../models/usersModel");

const uploadProductPermission = async (userId) => {
  const user = await usersModel.findById(userId);

  if (user.role === "ADMIN") {
    return true;
  }

  return false;
};

module.exports = uploadProductPermission;
