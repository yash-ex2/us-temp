const { Op } = require("sequelize");
const { NationYearlyModel } = require("../models/nation-yearly-data.model");
const { NationModel } = require("../models/nation.model");

const getNationYearlyInRangeData = async (yearStart, yearEnd, name) => {
  const data = await NationYearlyModel.findAll({
    include: [
      {
        model: NationModel,
        required: true,
        attributes: ["Name", "lang", "lat"],
        where: { Name: { [Op.eq]: name } },
      },
    ],
    where: {
      [Op.and]: [{ Year: { [Op.between]: [yearStart, yearEnd] } }],
    },
    attributes: ["Year", "TempInC", "TempInF"],
  });
  return data;
};
module.exports = {
  getNationYearlyInRangeData,
};
