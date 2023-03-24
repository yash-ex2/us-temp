const { Op } = require("sequelize");
const { StateYearlyModel } = require("../models/state-yearly-data.model");
const { StateModel } = require("../models/state.model");

const getStateYearlyInRangeData = async (yearStart, yearEnd, name) => {
  const data = await StateYearlyModel.findAll({
    include: [
      {
        model: StateModel,
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
  getStateYearlyInRangeData,
};
