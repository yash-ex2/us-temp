const getStateDataService = require("../services/get-state-data.service");
const getStateData = async (req, res) => {
  const resp = await getStateDataService.getStateData();
  res.send(resp);
};
module.exports = {
  getStateData,
};
