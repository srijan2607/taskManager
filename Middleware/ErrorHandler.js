const { CoustomErrorHandler } = require("../Errors/Coustim-error");
const errorHandler = (err, req, res, next) => {
  if (err instanceof CoustomErrorHandler) {
    return res.status(err.status).json({ msg: err.message });
  }
  return res
    .status(500)
    .json({ msg: "Something went wrong, please try again" });
};

module.exports = errorHandler;
