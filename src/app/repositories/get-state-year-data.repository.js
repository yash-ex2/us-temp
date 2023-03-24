const { Op } = require("sequelize");
const { StateYearlyModel } = require("../models/state-yearly-data.model");
const { StateModel } = require("../models/state.model");

const getStateYearlyData = async (year, name) => {
  const data = await StateYearlyModel.findAll({
    include: [
      {
        model: StateModel,
        attributes: ["Name", "lang", "lat"],
        required: true,
        where: { Name: { [Op.eq]: name } },
      },
    ],
    where: { Year: { [Op.eq]: [year] } },
    attributes: ["Year", "TempInC", "TempInF"],
  });
  return data;
};
module.exports = {
  getStateYearlyData,
};
