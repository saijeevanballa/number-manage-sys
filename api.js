const express = require("express");
const numRouter = require("./numbers/router");
const auth = require("./utils/authenticate");
const app = express();

app.use("/numbers", auth, numRouter);

module.exports = app;
