const express = require("express");
const path = require("path");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const app = express();

dotenv.load();

const isDev = process.env.NODE_ENV !== "production";

// Configuration

app
  .set("port", process.env.PORT || 3000)
  .set("view engine", "pug")
  .set("views", path.join(__dirname, "views"))
  .set("json spaces", 2);

// Middleware

app
  .use(morgan("tiny"))
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))
  .use(cookieParser());

// Routes

app.use("/", (req, res, next) => {
  res.render("home", { title: "Home" });
});

module.exports = app;
