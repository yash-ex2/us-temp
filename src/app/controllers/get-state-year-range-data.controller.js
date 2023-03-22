const getStateYearlyInRangeDataService = require("../services/get-state-year-range-data.service");
const getStateYearlyInRangeData = async (req, res) => {
  const { year, endyear, name } = req.params;
  const resp = await getStateYearlyInRangeDataService.getStateYearlyInRangeData(
    year,
    endyear,
    name
  );
  res.send(resp);
};
module.exports = {
  getStateYearlyInRangeData,
};
