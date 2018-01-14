const express = require("express");
const path = require("path");
const morgan = require("morgan");
const mongoose    = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");

const app = express();
const db  = require("./db");

const { dirs, port } = require("./config").app;
const { isProd } = require("./utils");
const routes = require("./routes/api");
const errors = require("./middlewares/errors");

dotenv.load();

// Configuration

app
  .set("port", port)
  .set("json spaces", 2);

// Middleware

app
  .use(morgan("tiny"))
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))
  .use(cookieParser())
  .use(express.static(dirs.client.build));

// Routes

app.use("/api", routes);

if (isProd) {
  app.get("*", (req, res) => {
    res.sendFile(`${dirs.client.build}/index.html`);
  });
} else {
  app.use("*", (req, res) => {
    res
      .status(404)
      .json({
        status: 404,
        message: "Not Found"
      });
  });
}

// Error Handling

app
  .use(errors.log)
  .use(errors.server);

module.exports = app;
