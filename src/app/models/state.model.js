const { Sequelize, DataTypes } = require("sequelize");
const { sequelize } = require("../sequelize");

const StateModel = sequelize.define(
  "state",
  {
    Name: {
      type: DataTypes.STRING,
    },
    Fips: {
      type: DataTypes.INTEGER,
      unique: true,
    },
    lang: DataTypes.FLOAT,
    lat: DataTypes.FLOAT,
  },
  { underscored: true }
);

module.exports = {
  StateModel,
};
