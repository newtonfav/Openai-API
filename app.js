const express = require("express");
const model = require("./routes/modelRoute");
const completion = require("./routes/completionRoute");

const app = express();

app.use(express.json());

app.use("/api/models", model);
app.use("/api/completion", completion);

module.exports = app;
