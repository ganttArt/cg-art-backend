"use strict";

const express = require("express");
const router = express.Router();

router.get("/health", health);

async function health(req, res) {
  res.status(200).send("API health check successful");
}

module.exports = router;
