const { YearDataModel } = require("./models/nation-yearly-data.model");
const csvToJson = require("csvtojson");

const path = require("path");
const { NationYearlyModel } = require("./models/nation-yearly-data.model");
const { NationModel } = require("./models/nation.model");
const { StateYearlyModel } = require("./models/state-yearly-data.model");
const { CountyYearlyModel } = require("./models/county-yearly-data.model");
const { StateModel } = require("./models/state.model");
const { CountyModel } = require("./models/county.model");

const x = async () => {
  const AllcountyData = await csvToJson().fromFile(
    path.resolve(__dirname, "./csv/climdiv_county_year.csv")
  );
  const countyData = AllcountyData.slice(190000, 200000); //done till 190000
  countyData.forEach(async (element) => {
    const county = CountyModel.findAll({
      where: { Fips: element.fips },
    });
    county.then((countyRes) => {
      CountyYearlyModel.create({
        Year: element.year,
        TempInC: element.tempc,
        TempInF: element.temp,
        div_id: countyRes[0].id,
      });
    });
  });
};

const s = async () => {
  const stateData = await csvToJson().fromFile(
    path.resolve(__dirname, "./csv/climdiv_state_year.csv")
  );
  stateData.forEach(async (element) => {
    const state = await StateModel.findOne({ where: { Fips: element.fips } });
    await StateYearlyModel.create({
      Year: element.year,
      TempInC: element.tempc,
      TempInF: element.temp,
      div_id: state.id,
    });
  });
};
const n = async () => {
  const nationData = await csvToJson().fromFile(
    path.resolve(__dirname, "./csv/climdiv_national_year.csv")
  );
  nationData.forEach(async (element) => {
    const nation = await NationModel.findAll();
    const val = await NationYearlyModel.create({
      Year: element.year,
      TempInC: element.tempc,
      TempInF: element.temp,
      div_id: nation.id,
    });
  });
};
const na = async () => {
  const state = await csvToJson().fromFile(
    path.resolve(__dirname, "./csv/model_state.csv")
  );
  state.forEach((element) => {
    StateModel.create({
      Name: element.STATE_NAME,
      Fips: element.fips,
    });
  });
  const county = await csvToJson().fromFile(
    path.resolve(__dirname, "./csv/model_county.csv")
  );
  county.forEach((element) => {
    CountyModel.create({
      Name: element.CTYNAME,
      Fips: element.fips,
    });
  });
  NationModel.create({
    Name: "Us",
    Fips: 0,
  });
};

const dbs = async () => {
  console.log("sdsd");
  //x();
  //s();
  //n();
  //na();
  console.log("done");
};

module.exports = { dbs };
