const express = require("express");
const app = express();
const { readFileSync } = require("fs");
const tasksRouter = require("./Router/task");
const ConnectDB = require("./DB/connect");
const { log } = require("console");
const indexHtml = readFileSync("./sample/Task.html", "utf-8"); // Ensure this path is correct
require("dotenv").config();
const NotFound = require("./Middleware/Notfound");
const ErrorHandler = require("./Middleware/ErrorHandler");
// Middleware
app.use(express.static("./public"));
app.use(express.json());

// Routes
app.use("/api/v1/tasks", tasksRouter);
app.use(NotFound);
app.use(ErrorHandler);
app.get("/hello", (req, res) => {
  res.send(indexHtml);
});

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await ConnectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`The Server is listening on ${port}.....`));
  } catch (err) {
    console.log(err);
  }
};
start();
