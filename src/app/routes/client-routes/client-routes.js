const express = require("express");
// const {
//   getAllClients,
// } = require("../../controllers/client-controllers/get-all-clients.controller");
// const {
//   createClient,
// } = require("../../controllers/client-controllers/create-client.controller");
// const {
//   getClient,
// } = require("../../controllers/client-controllers/get-client.controller");
// const {
//   editClient,
// } = require("../../controllers/client-controllers/edit-client.controller");
// const {
//   deleteClient,
// } = require("../../controllers/client-controllers/delete-client.controller");

const router = express.Router();

router.get("/all", (req, res) => {
  res.send("d");
});
// router.post("/", createClient);
// router.get("/:id", getClient);
// router.put("/:id", editClient);
// router.delete("/:id", deleteClient);

module.exports = router;
