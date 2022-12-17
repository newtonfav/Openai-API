const express = require("express");
const openaiController = require("../controller/modelController");
const router = express.Router();

router.route("/").get(openaiController.getModels);

router.route("/:id").get(openaiController.getModel);

module.exports = router;
