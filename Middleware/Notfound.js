const express = require("express");
const app = express();
const { readFileSync } = require("fs");
const path = require("path");

// Correctly resolve the path to the HTML file
const ErrorHtml = readFileSync(
  path.join(__dirname, "../sample/Error/Error.html"),
  "utf8"
);

const NotFound = (req, res) => {
  res.status(404).send(ErrorHtml);
};

module.exports = NotFound;
