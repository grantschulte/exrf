const express = require("express");
const path = require("path");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");

const app = express();
const { dirs } = require("./config");

// Mock data

const mocks = require("./data");

dotenv.load();

// Configuration

app
  .set("port", process.env.PORT || 8080)
  .set("view engine", "pug")
  .set("views", path.join(__dirname, "views"))
  .set("json spaces", 2);

app.locals = {
  version: require("../package.json").version,
  data: mocks
};

// Middleware

app
  .use(morgan("tiny"))
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))
  .use(cookieParser())
  .use(express.static(dirs.public));

// Routes

app
  .use("/lcars", (req, res, next) => {
    res.render("lcars");
  })
  .use("*", (req, res) => {
    res
      .status(404)
      .render("404");
  });

// Error Handling

module.exports = app;
