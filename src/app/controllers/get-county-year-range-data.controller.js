const getCountyYearlyInRangeDataService = require("../services/get-county-year-range-data.service");
const getCountyYearlyInRangeData = async (req, res) => {
  const { year, endyear, name } = req.params;
  const resp =
    await getCountyYearlyInRangeDataService.getCountyYearlyInRangeData(
      year,
      endyear,
      name
    );
  res.send(resp);
};
module.exports = {
  getCountyYearlyInRangeData,
};
