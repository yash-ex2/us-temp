const getStateDataRepo = require("../repositories/get-state-data.repository");
const getStateData = async () => {
  return await getStateDataRepo.getStateData();
};
module.exports = {
  getStateData,
};
