import { basicScorecardQuery, stockPhotoQuery } from "./src/api";
import { handleScorecards, displayScorecard } from "./src/utils";

const homeButton = document.querySelector(".test_button");

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
let page = "page=0";
let perPage = "per_page=16";

const params = [page, perPage];

// Create the URL to fetch from the collegeScorecard API
const scorecardUrl = "https://api.data.gov/ed/collegescorecard/v1/schools.json";
const scorecardKey = "8nR6JMFPRqJzkksBe7V4aD6wITl4MOWZvcIdgL1b";

const scorecardQueryParams = { scorecardUrl, fields, scorecardKey, params };

const unsplashUrl = "https://api.unsplash.com/photos/";
const unsplashKey = "8xSG2SnwEoxSOvi2MsZzpqDg4fgg8tI-8siiSI-S_QE";
const unsplashParams = "collections=9576801&orientation=landscape&count=16";

const unsplashQueryParams = { unsplashUrl, unsplashKey, unsplashParams };

homeButton.addEventListener("click", () => {
  console.log("button clicked");
  Promise.all([
    basicScorecardQuery(scorecardQueryParams),
    stockPhotoQuery(unsplashQueryParams),
  ])
    .then((values) => {
      const [scorecards, images] = values;
      return handleScorecards(scorecards, images);
    })
    .then((cleanedScorecardData) => displayScorecard(cleanedScorecardData))
    .catch((err) => {
      console.log(err);
    });
});
