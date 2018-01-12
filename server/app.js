const express = require("express");
const path = require("path");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");

const app = express();
const { dirs } = require("./config");

dotenv.load();

// Configuration

app
  .set("port", process.env.PORT || 8080)
  .set("json spaces", 2);

// Middleware

app
  .use(morgan("tiny"))
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))
  .use(cookieParser())
  .use(express.static(dirs.client.build));

// Routes

app
  .use("/api", (req, res) => {
    res.json({
      sup: "sup"
    });
  })
  .get("*", (req, res) => {
    res.sendFile(`${dirs.client.build}/index.html`);
  });

// Error Handling

module.exports = app;
