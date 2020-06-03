import axios from "axios";

const scorecardUrl = "https://api.data.gov/ed/collegescorecard/v1/schools.json";
const scorecardKey = "8nR6JMFPRqJzkksBe7V4aD6wITl4MOWZvcIdgL1b";

function apiCall() {
  console.log("apiCall called");
  // Define year being searched -- latest by default for most up to date data
  const year = "latest";

  // Define the fields for the basic basicScorecard
  const fields = [
    "id",
    "school.name",
    "school.school_url",
    "school.state_fips",
    "school.city",
    `${year}.student.enrollment.all`,
    `${year}.admissions.admission_rate.overall`,
    `${year}.cost.attendance.academic_year`,
  ];

  // Settings for pagination (if neccessary)
  let page = "0";
  let perPage = "3";

  // Create the URL to fetch from the collegeScorecard API
  let urlToCall = `${scorecardUrl}?_fields=${fields.join()}&page=${page}&per_page=${perPage}&api_key=${scorecardKey}`;

  return urlToCall;
}

export function apiResponse() {
  const urlToCall = apiCall();
  console.log(urlToCall);
  const basicScorecardPromise = new Promise((resolve, reject) => {
    try {
      axios
        .get(urlToCall)
        .then((basicScorecard) => resolve(basicScorecard.data));
    } catch (err) {
      reject(err);
    }
  });
  return basicScorecardPromise;
}
