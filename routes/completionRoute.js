const express = require("express");
const completionController = require("../controller/completionController");
const router = express.Router();

router.route("/").post(completionController.complete);

module.exports = router;
