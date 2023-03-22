const { Op } = require("sequelize");
const { NationYearlyModel } = require("../models/nation-yearly-data.model");
const { NationModel } = require("../models/nation.model");

const getNationYearlyData = async (year, name) => {
  const data = await NationYearlyModel.findAll({
    include: [
      {
        model: NationModel,
        attributes: Name,
        required: true,
        where: { Name: { [Op.eq]: name } },
      },
    ],
    where: {
      [Op.and]: [{ Year: { [Op.eq]: [year] } }],
    },
  });
  return data;
};
module.exports = {
  getNationYearlyData,
};
