const getStateYearlyDataService = require("../services/get-state-year-data.service");
const getStateYearlyData = async (req, res) => {
  const { year, name } = req.params;

  const resp = await getStateYearlyDataService.getStateYearlyData(year, name);
  res.send(resp);
};
module.exports = {
  getStateYearlyData,
};
