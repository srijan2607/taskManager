const Task = require("../Models/Task");
const getAllTask = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
  } catch (err) {
    res.status(500).json({ msg: "There Was a problem getting the tasks" });
  }
};
// POST
const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (err) {
    res.status(500).json({ msg: "There Was a problem creating the task" });
  }
};
const getTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOne({ _id: taskID });

    if (!task) {
      return res
        .status(404)
        .json({ msg: `No Such Task With the ID ${taskID}` });
    }

    res.status(200).json({ task }); // Send response only if the task exists
  } catch (err) {
    res.status(500).json({ msg: "There was a problem getting the task" });
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndDelete({ _id: taskID });
    if (!task) {
      return res
        .status(404)
        .json({ msg: `No such Task with the ID ${taskID}` });
    }
    res.status(200).json({ task });
  } catch (err) {
    res.status(500).json({ msg: "There was a problem deleting the task" });
  }
};
const updateTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body);
    if (!task) {
      return res
        .status(404)
        .json({ msg: `No Such Task with the ID ${taskID}` });
    }
    res.status(200).json({ task });
  } catch (err) {
    res.status(500).json({ msg: "There was a problem updating the task" });
  }
};
module.exports = {
  getAllTask,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
