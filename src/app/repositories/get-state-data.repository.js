const { Op } = require("sequelize");

const { StateModel } = require("../models/state.model");

const getStateData = async () => {
  const data = await StateModel.findAll({
    attributes: ["Name", "lang", "lat"],
  });
  return data;
};
module.exports = {
  getStateData,
};
