const { Op } = require("sequelize");
const { object } = require("webidl-conversions");

const { CountyModel } = require("../models/county.model");

const getCountyData = async () => {
  const data = await CountyModel.findAll();
  return data;
};
module.exports = {
  getCountyData,
};
