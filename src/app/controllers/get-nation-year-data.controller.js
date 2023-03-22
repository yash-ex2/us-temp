const getNationYearlyDataService = require("../services/get-nation-year-data.service");
const getNationYearlyData = async (req, res) => {
  const { year, name } = req.params;
  const resp = await getNationYearlyDataService.getNationYearlyData(year, name);
  res.send(resp);
};
module.exports = {
  getNationYearlyData,
};
