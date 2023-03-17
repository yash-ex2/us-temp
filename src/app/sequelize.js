const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = new Sequelize("db", "postgres", "root", {
  dialect: "postgres",
  underscored: true,
});

module.exports = {
  sequelize,
};
