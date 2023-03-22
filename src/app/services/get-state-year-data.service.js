const getStateYearlyDataRepo = require("../repositories/get-state-year-data.repository");

const getStateYearlyData = async (year, name) => {
  return await getStateYearlyDataRepo.getStateYearlyData(year, name);
};
module.exports = {
  getStateYearlyData,
};
