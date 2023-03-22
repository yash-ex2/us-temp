const getCountyDataService = require("../services/get-county-data.service");
const getCountyData = async (req, res) => {
  const resp = await getCountyDataService.getCountyData();
  res.send(resp);
};
module.exports = {
  getCountyData,
};
