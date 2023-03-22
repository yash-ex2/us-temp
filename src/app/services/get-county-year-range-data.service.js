const getCountyYearlyInRangeDataRepo = require("../repositories/get-county-year-range-data.repository");

const getCountyYearlyInRangeData = async (yearStart, yearEnd, name) => {
  return await getCountyYearlyInRangeDataRepo.getCountyYearlyInRangeData(
    yearStart,
    yearEnd,
    name
  );
};
module.exports = {
  getCountyYearlyInRangeData,
};
