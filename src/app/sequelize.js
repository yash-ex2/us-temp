const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = new Sequelize("db", "postgres", "root", {
  //host: "ep-snowy-pond-244967.ap-southeast-1.aws.neon.tech",
  //port: "5432",
  dialect: "postgres",
  //ssl: true,
  underscored: true,
  //dialectOptions: { ssl: true },
});

module.exports = {
  sequelize,
};
