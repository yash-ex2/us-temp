const getYearlyDataRepo = require("../repositories/get-yearly-data.repository");
const getYearlyData = async (code, year) => {
  yearEnd = parseInt(year) + 10;
  const data = await getYearlyDataRepo.getYearlyData(
    code,
    parseInt(year),
    yearEnd
  );
  return data;
};
module.exports = {
  getYearlyData,
};
