const getNationYearlyInRangeDataRepo = require("../repositories/get-nation-year-range-data.repository");

const getNationYearlyInRangeData = async (yearStart, yearEnd, name) => {
  return await getNationYearlyInRangeDataRepo.getNationYearlyInRangeData(
    yearStart,
    yearEnd,
    name
  );
};
module.exports = {
  getNationYearlyInRangeData,
};
