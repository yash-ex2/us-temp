const { Op } = require("sequelize");
const { CountyYearlyModel } = require("../models/county-yearly-data.model");
const { CountyModel } = require("../models/county.model");

const getCountyYearlyInRangeData = async (yearStart, yearEnd, name) => {
  const data = await CountyYearlyModel.findAll({
    include: [
      {
        model: CountyModel,
        required: true,
        where: { Name: { [Op.eq]: name } },
      },
    ],
    where: {
      [Op.and]: [{ Year: { [Op.between]: [yearStart, yearEnd] } }],
    },
  });
  return data;
};
module.exports = {
  getCountyYearlyInRangeData,
};
