const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Wtf Bro Where Is the Name You DumbAss"],
    trim: true,
    maxlength: [
      20,
      "WTF who are you dude like the name more than 20 characters WTF ",
    ],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Task", TaskSchema);
