const getStateYearlyInRangeDataRepo = require("../repositories/get-state-year-range-data.repository");

const getStateYearlyInRangeData = async (yearStart, yearEnd, name) => {
  return await getStateYearlyInRangeDataRepo.getStateYearlyInRangeData(
    yearStart,
    yearEnd,
    name
  );
};
module.exports = {
  getStateYearlyInRangeData,
};
