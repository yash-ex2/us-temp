const getNationDataRepo = require("../repositories/get-nation-data.repository");
const getNationData = async () => {
  return await getNationDataRepo.getNationData();
};
module.exports = {
  getNationData,
};
