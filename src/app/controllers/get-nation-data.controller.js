const getNationDataService = require("../services/get-nation-data.service");
const getNationData = async (req, res) => {
  const resp = await getNationDataService.getNationData();
  res.send(resp);
};
module.exports = {
  getNationData,
};
