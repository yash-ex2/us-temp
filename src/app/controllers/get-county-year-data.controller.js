const getCountyYearlyDataService = require("../services/get-county-year-data.service");
const getCountyYearlyData = async (req, res) => {
  const { year, name } = req.params;
  const resp = await getCountyYearlyDataService.getCountyYearlyData(year, name);
  res.send(resp);
};
module.exports = {
  getCountyYearlyData,
};
