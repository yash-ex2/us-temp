const { Sequelize, DataTypes } = require("sequelize");
const { sequelize } = require("../sequelize");

const CountyModel = sequelize.define(
  "county",
  {
    Name: {
      type: DataTypes.STRING,
    },
    Fips: {
      type: DataTypes.INTEGER,
      unique: true,
    },
  },
  { underscored: true }
);

module.exports = {
  CountyModel,
};
