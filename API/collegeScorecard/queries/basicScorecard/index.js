import axios from "axios";
import { handleScorecard, displayScorecard } from "../../../../utils";
import { testImgs } from "../../../../lib";

const scorecardUrl = "https://api.data.gov/ed/collegescorecard/v1/schools.json";
const scorecardKey = "8nR6JMFPRqJzkksBe7V4aD6wITl4MOWZvcIdgL1b";

export async function basicScorecard() {
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
    `${year}.cost.attendance.academic_year`
  ];

  // Settings for pagination (if neccessary)
  let page = "0";
  let perPage = "3";

  // Create the URL to fetch from the collegeScorecard API
  let basicScorecardCall = `${scorecardUrl}?_fields=${fields.join()}&page=${page}&per_page=${perPage}&api_key=${scorecardKey}`;

  // Call the API and handle the response formatting
  let response = await axios.get(basicScorecardCall);
  let scorecardData = response.data.results;

  console.log(testImgs);

  const scorecard = handleScorecard(scorecardData, testImgs);

  displayScorecard(scorecard);
}
