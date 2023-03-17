const { Sequelize, DataTypes } = require("sequelize");
const { sequelize } = require("../sequelize");

const { NationYearlyModel } = require("./nation-yearly-data.model");
const { CountyModel } = require("../models/county.model");
const { NationModel } = require("../models/nation.model");
const { StateModel } = require("../models/state.model");
const { CountyYearlyModel } = require("../models/county-yearly-data.model");
const { StateYearlyModel } = require("../models/state-yearly-data.model");

const models = {
  CountyYearlyData: CountyYearlyModel,
  NationYearlyData: NationYearlyModel,
  StateYearlyData: StateYearlyModel,
  County: CountyModel,
  State: StateModel,
  Nation: NationModel,
};

CountyModel.hasMany(CountyYearlyModel);
CountyYearlyModel.belongsTo(CountyModel, {
  foreignKey: "div_id",
});
StateModel.hasMany(StateYearlyModel);
StateYearlyModel.belongsTo(StateModel, {
  foreignKey: "div_id",
});
NationModel.hasMany(NationYearlyModel);
NationYearlyModel.belongsTo(NationModel, {
  foreignKey: "div_id",
});
module.exports = {
  models,
};
