const express = require("express");
const router = express.Router();

const { getYearlyData } = require("../controllers/get-yearly-data.controller");

router.get("/all", getYearlyData);
module.exports = router;
