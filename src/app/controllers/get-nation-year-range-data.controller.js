const getNationYearlyInRangeDataService = require("../services/get-nation-year-range-data.service");
const getNationYearlyInRangeData = async (req, res) => {
  const { year, endyear, name } = req.params;
  console.log(year, endyear, name);
  const resp =
    await getNationYearlyInRangeDataService.getNationYearlyInRangeData(
      year,
      endyear,
      name
    );
  res.json(resp);
};
module.exports = {
  getNationYearlyInRangeData,
};
