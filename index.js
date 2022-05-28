"use strict";

const server = require("./src/server");
const mongoose = require("mongoose");
require("dotenv").config();

const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;
mongoose.connect(MONGODB_URI);

server.start(PORT);
