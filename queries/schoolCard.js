import { handleScorecards, displayScorecard } from "..utils/";
import {
  scoreCardUrl,
  scoreCardKey,
  unsplashUrl,
  unsplashKey,
} from "../API/keys";

// Query for the basic school card display
export async function schoolCardQuery() {
  // Define year being searched
  let year = "latest";

  // Fields to return from API to fill the basic card
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

  // Settings for pagination if necessary
  let page = "0";
  let perPage = "20";

  // Create the URL to fetch from the collegeScorecard API
  let callToCollegeScorecardApi = `${scoreCardUrl}?_fields=${fields.join()}&page=${page}&per_page=${perPage}&api_key=${scoreCardKey}`;

  // Call the API and handle response formatting
  let response = await axios.get(callToCollegeScorecardApi);
  /* console.log(response); */
  let scoreCardData = response.data.results;
  /* console.log(scoreCardData); */

  //
  let callToUnsplashApi = `${unsplashUrl}?collections=9576801&orientation=landscape&count=20&client_id=8xSG2SnwEoxSOvi2MsZzpqDg4fgg8tI-8siiSI-S_QE`; // ?client_id=${unsplashKey}&orientation=landscape&query=university&count=20`;

  // Call image API for placeholder images
  let imgRes = await axios.get(callToUnsplashApi);
  /* console.log(imgRes); */
  // Create an array with the returned images
  const imgArr = imgRes.data;
  /*  console.log(imgArr); */

  // Handle incoming query data and format the data in a usable way
  const scoreCard = handleScorecards(scoreCardData, imgArr);
  /* console.log(scoreCard); */

  // Display query results in the form of cards for each school
  displayScorecard(scoreCard);
}
