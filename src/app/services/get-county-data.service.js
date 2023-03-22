const getCountyDataRepo = require("../repositories/get-county-data.repository");
const getCountyData = async (req, res) => {
  return await getCountyDataRepo.getCountyData();
};
module.exports = {
  getCountyData,
};
