"use strict";

require("core-js/modules/es.promise");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.basicScorecardQuery = basicScorecardQuery;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Define the fields for the basic basicScorecard
const fields = ["id", "school.name", "school.school_url", "school.state_fips", "school.city", "latest.student.enrollment.all", "latest.admissions.admission_rate.overall", "latest.cost.attendance.academic_year"]; // Create the URL to fetch from the collegeScorecard API

const scorecardUrl = "https://api.data.gov/ed/collegescorecard/v1/schools.json";
const scorecardKey = "8nR6JMFPRqJzkksBe7V4aD6wITl4MOWZvcIdgL1b";

function basicScorecardQuery(params) {
  // takes array of query parameters
  const basicScorecardRequest = "".concat(scorecardUrl, "?_fields=").concat(fields.join(), "&").concat(params.join("&"), "&api_key=").concat(scorecardKey);
  console.log(basicScorecardRequest);
  const basicScorecardPromise = new Promise((resolve, reject) => {
    _axios.default.get(basicScorecardRequest).then(basicScorecard => {
      console.log("basicScorecardPromise -- success");
      resolve(basicScorecard.data);
    }).catch(function (error) {
      console.log("basicScorecardPromise -- error");
      reject(error.response);
    });
  });
  return basicScorecardPromise;
}