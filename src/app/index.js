const express = require("express");
const routes = require("./routes/routes");
const bodyParser = require("body-parser");
const cors = require("cors");
const pg = require("pg");

const postgres = require("postgres");

const { models } = require("./models/models");
const { dbs } = require("./initialize.db");

const app = express();
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use("/v1", routes);

const URL = `postgres://ygoel:rYlMD4X7swge@ep-snowy-pond-244967.ap-southeast-1.aws.neon.tech:5432/neondb?sslmode=require`;

const sql = postgres(URL, { sslmode: "require" });

const syncFunc = async () => {
  Object.keys(models).forEach(async (model) => {
    await models[model].sync({});
  });
};

//dbs();

syncFunc().then(() => {
  app.listen(8000, () => {
    console.log("App is listening on Port 8000");
  });
});
