const getCountyYearlyDataRepo = require("../repositories/get-county-year-data.repository");

const getCountyYearlyData = async (year, name) => {
  return await getCountyYearlyDataRepo.getCountyYearlyData(year, name);
};
module.exports = {
  getCountyYearlyData,
};
