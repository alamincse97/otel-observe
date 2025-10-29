const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const errorHandler = require("./errorHandler");

const app = express();

app.use(cors());
app.use(express.json());
app.use(helmet());

app.use(errorHandler);

module.exports = app;