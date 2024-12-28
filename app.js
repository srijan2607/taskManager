const express = require("express");
const app = express();
const { readFileSync } = require("fs");
const tasksRouter = require("./Router/task");
const ConnectDB = require("./DB/connect");
const { log } = require("console");
const indexHtml = readFileSync("./sample/Task.html", "utf-8"); // Ensure this path is correct
require("dotenv").config();
// Middleware
app.use(express.json());

// Routes
app.use("/api/v1/tasks", tasksRouter);

app.get("/hello", (req, res) => {
  res.send(indexHtml);
});

// Uncomment the comments below once CRUD is implemented:
// app.get('/api/v1/tasks')         - get all tasks
// app.post('/api/v1/tasks')        - create a new task
// app.get('/api/v1/tasks/:id')     - get a single task
// app.patch('/api/v1/tasks/:id')   - update a task
// app.delete('/api/v1/tasks/:id')  - delete a task

const port = 3000;

const start = async () => {
  try {
    await ConnectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`The Server is listening on ${port}.....`));
  } catch (err) {
    console.log(err);
  }
};
start();
