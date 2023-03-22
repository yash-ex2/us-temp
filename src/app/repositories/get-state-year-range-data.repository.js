const { Op } = require("sequelize");
const { StateYearlyModel } = require("../models/state-yearly-data.model");
const { StateModel } = require("../models/state.model");

const getStateYearlyInRangeData = async (yearStart, yearEnd, name) => {
  const data = await StateYearlyModel.findAll({
    include: [
      {
        model: StateModel,
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
  getStateYearlyInRangeData,
};
