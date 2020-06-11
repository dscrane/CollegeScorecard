import axios from "axios";

// Define the fields for the basic basicScorecard
const fields = [
  "id",
  "school.name",
  "school.school_url",
  "school.state_fips",
  "school.city",
  "latest.student.enrollment.all",
  "latest.admissions.admission_rate.overall",
  "latest.cost.attendance.academic_year",
];

// Create the URL to fetch from the collegeScorecard API
const scorecardUrl = "https://api.data.gov/ed/collegescorecard/v1/schools.json";
const scorecardKey = "8nR6JMFPRqJzkksBe7V4aD6wITl4MOWZvcIdgL1b";

export function basicScorecardQuery(params) {
  // takes array of query parameters
  const basicScorecardRequest = `${scorecardUrl}?_fields=${fields.join()}&${params.join(
    "&"
  )}&api_key=${scorecardKey}`;
  console.log(basicScorecardRequest);

  const basicScorecardPromise = new Promise((resolve, reject) => {
    axios
      .get(basicScorecardRequest)
      .then((basicScorecard) => {
        console.log("basicScorecardPromise -- success");
        resolve(basicScorecard.data);
      })
      .catch(function (error) {
        console.log("basicScorecardPromise -- error");
        reject(error.response);
      });
  });
  return basicScorecardPromise;
}
