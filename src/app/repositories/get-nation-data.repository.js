const { Op } = require("sequelize");

const { NationModel } = require("../models/nation.model");

const getNationData = async () => {
  const data = await NationModel.findAll({
    attributes: ["Name", "lang", "lat"],
  });
  return data;
};
module.exports = {
  getNationData,
};
