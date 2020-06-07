import axios from "axios";

const scorecardUrl = "https://api.data.gov/ed/collegescorecard/v1/schools.json";
const scorecardKey = scorecardKey;

function makeBasicScorecardUrl() {
  console.log("[Query]: basicScorecard");

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

  // Settings for pagination (if neccessary)
  let page = "0";
  let perPage = "3";

  // Create the URL to fetch from the collegeScorecard API
  let urlToCall = `${scorecardUrl}?_fields=${fields.join()}&page=${page}&per_page=${perPage}&api_key=${scorecardKey}`;

  return urlToCall;
}

export function basicScorecardQuery() {
  const basicScorecardUrl = makeBasicScorecardUrl();
  console.log(basicScorecardUrl);
  const basicScorecardPromise = new Promise((resolve, reject) => {
    try {
      axios
        .get(basicScorecardUrl)
        .then((basicScorecard) => resolve(basicScorecard.data));
    } catch (err) {
      reject(err);
    }
  });
  return basicScorecardPromise;
}
