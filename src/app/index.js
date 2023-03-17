const express = require("express");
const routes = require("./routes/routes");
const bodyParser = require("body-parser");
const cors = require("cors");
const pg = require("pg");

const { models } = require("./models/models");
const { dbs } = require("./initialize.db");

const app = express();
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use("/v1", routes);

const syncFunc = async () => {
  Object.keys(models).forEach(async (model) => {
    await models[model].sync({});
  });
};

dbs();

syncFunc().then(() => {
  app.listen(8000, () => {
    console.log("App is listening on Port 8000");
  });
});
