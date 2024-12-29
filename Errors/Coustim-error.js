class CoustomAPIError extends Error {
  constructor(message, statuscode) {
    super(message);
    this.statuscode = statuscode;
  }
}

const createCoustomError = (message, statuscode) => {
  return CoustomAPIError(message, statuscode);
};

module.exports = { createCoustomError, CoustomAPIError };
