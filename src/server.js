"use strict";

const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const healthRoute = require("./routes/health");
const notFoundHandler = require("./error-handlers/404");

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(healthRoute);
app.use("*", notFoundHandler);

module.exports = {
  server: app,
  start: (PORT) => {
    app.listen(PORT, () => {
      console.log(`Started on server ${PORT}`);
    });
  },
};