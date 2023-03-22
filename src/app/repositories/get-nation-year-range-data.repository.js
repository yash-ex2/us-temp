const { Op } = require("sequelize");
const { NationYearlyModel } = require("../models/nation-yearly-data.model");
const { NationModel } = require("../models/nation.model");

const getNationYearlyInRangeData = async (yearStart, yearEnd, name) => {
  const data = await NationYearlyModel.findAll({
    include: [
      {
        model: NationModel,
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
  getNationYearlyInRangeData,
};
