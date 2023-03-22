const { Op } = require("sequelize");

const { StateModel } = require("../models/state.model");

const getStateData = async () => {
  const data = await StateModel.findAll();
  return data;
};
module.exports = {
  getStateData,
};
