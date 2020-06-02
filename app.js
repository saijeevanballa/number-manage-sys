const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const api = require("./api");
const app = express();

// mongoose connection
mongoose
  .connect(process.env.MONGO_URL || "mongodb://localhost:27017/numbers", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(
    () => {
      console.log("Mongo DB Connection established successfully");
    },
    err => {
      console.log("Failed Connection to Mongo");
    }
  );

// cors middleware
app.use(cors());
// body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", function(req, res) {
  res.status(200).send(`Hello`);
});

//  serve Static files
app.use(express.static("public"));
app.use("/v1", api);

// 404 Handler
app.get("*", (req, res) => res.status(404).send("Page Not found 404"));

// Error Handler
app.use((error, req, res, next) => {
  console.error(error);
  res.status(error.code < 600 ? error.code : 500).send({
    errors: error.message || error.error || "Internal Server Error 500"
  });
});

module.exports = app;
