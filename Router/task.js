const express = require("express");
const router = express.Router();
const {
  getAllTask,
  createTask,
  getTask,
  updateTask,
  deleteTask,
} = require("../Controllers/task");

// Routes
router.get("/", getAllTask);
router.post("/", createTask);
router.get("/:id", getTask);
router.patch("/:id", updateTask);
router.delete("/:id", deleteTask);

// Add other CRUD operations as needed

module.exports = router;
