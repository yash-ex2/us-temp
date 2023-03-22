const express = require("express");
const router = express.Router();

const { getNationData } = require("../controllers/get-nation-data.controller");
const { getStateData } = require("../controllers/get-state-data.controller");
const { getCountyData } = require("../controllers/get-county-data.controller");
const {
  getNationYearlyData,
} = require("../controllers/get-nation-year-data.controller");
const {
  getStateYearlyData,
} = require("../controllers/get-state-year-data.controller");
const {
  getCountyYearlyData,
} = require("../controllers/get-county-year-data.controller");
const {
  getNationYearlyInRangeData,
} = require("../controllers/get-nation-year-range-data.controller");
const {
  getStateYearlyInRangeData,
} = require("../controllers/get-state-year-range-data.controller");
const {
  getCountyYearlyInRangeData,
} = require("../controllers/get-county-year-range-data.controller");
router.get("/nation", getNationData);
router.get("/state", getStateData);
router.get("/county", getCountyData);
router.post("/nation/:year/:name", getNationYearlyData);
router.post("/state/:year/:name", getStateYearlyData);
router.post("/county/:year/:name", getCountyYearlyData);
router.post("/nation/:year/:endyear/:name", getNationYearlyInRangeData);
router.post("/state/:year/:endyear/:name", getStateYearlyInRangeData);
router.post("/county/:year/:endyear/:name", getCountyYearlyInRangeData);

module.exports = router;
