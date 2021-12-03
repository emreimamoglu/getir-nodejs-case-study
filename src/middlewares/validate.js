const { ValidationError } = require("express-validation");
const { customResponse } = require("../utils/customResponse");

const validationHandler = (error, req, res, next) => {
  if (error instanceof ValidationError) {
    let errorObj = customResponse(
      error.statusCode,
      error.message,
      "details",
      error.details
    );
    return res.status(errorObj.code).send(errorObj);
  }
  return next();
};

module.exports = {
  validationHandler,
};
