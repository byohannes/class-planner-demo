const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateCourseCalendarInput(data) {
  let errors = {};

  data.intakeName = !isEmpty(data.intakeName) ? data.intakeName : "";
  data.cityName = !isEmpty(data.cityName) ? data.cityName : "";
  data.startDate = !isEmpty(data.startDate) ? data.startDate : "";
  data.endDate = !isEmpty(data.endDate) ? data.endDate : "";

  if (Validator.isEmpty(data.intakeName)) {
    errors.intakeName = "Intake Name field is required";
  }
  if (Validator.isEmpty(data.cityName)) {
    errors.cityName = "City Name field is required";
  }
  if (Validator.isEmpty(data.startDate)) {
    errors.startDate = "Start Date field is required";
  }
  if (Validator.isEmpty(data.endDate)) {
    errors.endDate = "End Date field is required";
  }
  return { errors, isValid: isEmpty(errors) };
};
