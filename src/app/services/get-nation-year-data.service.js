const getNationYearlyDataRepo = require("../repositories/get-nation-year-data.repository");

const getNationYearlyData = async (year, name) => {
  return await getNationYearlyDataRepo.getNationYearlyData(year, name);
};
module.exports = {
  getNationYearlyData,
};
