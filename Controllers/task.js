const Task = require("../Models/Task");
const asyncWrapper = require("../Middleware/Async");
const { createCustomError } = require("../Errors/Coustim-error");
// Read

const getAllTask = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({ tasks });
});
// Creat
const createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
});

const getTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params;
  const task = await Task.findOne({ _id: taskID });

  if (!task) {
    return next(createCustomError(`No Such Task With the ID ${taskID}`, 404));
  }

  res.status(200).json({ task }); // Send response only if the task exists
});

// Delete

const deleteTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndDelete({ _id: taskID });
  if (!task) {
    return next(createCustomError(`No Such Task With the ID ${taskID}`, 404));
  }
  res.status(200).json({ task });
});

// Update

const updateTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!task) {
    return next(createCustomError(`No Such Task With the ID ${taskID}`, 404));
  }
  res.status(200).json({ task });
});
module.exports = {
  getAllTask,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
