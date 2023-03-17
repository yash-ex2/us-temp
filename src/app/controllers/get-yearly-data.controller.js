const getYearlyDataService = require("../services/get-yearly-data.service");
const getYearlyData = async (req, res) => {
  const { code, year } = req.query;
  const resp = await getYearlyDataService.getYearlyData(code, year);
  res.send(resp);
};
module.exports = {
  getYearlyData,
};
