const { Op } = require("sequelize");
const { NationYearlyModel } = require("../models/nation-yearly-data.model");
const { NationModel } = require("../models/nation.model");
const { StateYearlyModel } = require("../models/state-yearly-data.model");
const { CountyYearlyModel } = require("../models/county-yearly-data.model");

const { StateModel } = require("../models/state.model");
const { CountyModel } = require("../models/county.model");

const name = {
  c: {
    model: CountyYearlyModel,
    includeModel: CountyModel,
    required: true,
  },
  s: {
    model: StateYearlyModel,
    includeModel: StateModel,
    required: true,
  },
  n: {
    model: NationYearlyModel,
    includeModel: NationModel,
    required: true,
  },
};
const getYearlyData = async (code, yearStart, yearEnd) => {
  const data = await name[code].model.findAll({
    include: [
      {
        model: name[code].includeModel,
        required: name[code].required,
      },
    ],
    where: {
      [Op.and]: [{ Year: { [Op.between]: [yearStart, yearEnd] } }],
    },
  });
  return data;
};
module.exports = {
  getYearlyData,
};
