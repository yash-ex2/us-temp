const { Op } = require("sequelize");
const { CountyYearlyModel } = require("../models/county-yearly-data.model");
const { CountyModel } = require("../models/county.model");

const getCountyYearlyData = async (year, name) => {
  const data = await CountyYearlyModel.findAll({
    include: [
      {
        model: CountyModel,
        required: true,
        attributes: ["Name", "lang", "lat"],
        where: { Name: { [Op.eq]: name } },
      },
    ],
    where: {
      [Op.and]: [{ Year: { [Op.eq]: [year] } }],
    },
    attributes: ["Year", "TempInC", "TempInF"],
  });
  return data;
};
module.exports = {
  getCountyYearlyData,
};
