const { Sequelize, DataTypes } = require("sequelize");
const { sequelize } = require("../sequelize");

const StateYearlyModel = sequelize.define(
  "state_yearly_data",
  {
    Year: {
      type: DataTypes.INTEGER,
    },

    TempInC: {
      type: DataTypes.FLOAT,
    },
    TempInF: {
      type: DataTypes.FLOAT,
    },
  },
  { underscored: true }
);

module.exports = {
  StateYearlyModel,
};
