// State FIPs codes
const fipsArray = {
  1: "Alabama",
  2: "Alaska",
  4: "Arizona",
  5: "Arkansas",
  6: "California",
  8: "Colorado",
  9: "Connecticut",
  10: "Delaware",
  11: "District of Columbia",
  12: "Florida",
  13: "Georgia",
  15: "Hawaii",
  16: "Idaho",
  17: "Illinois",
  18: "Indiana",
  19: "Iowa",
  20: "Kansas",
  21: "Kentucky",
  22: "Louisiana",
  23: "Maine",
  24: "Maryland",
  25: "Massachusetts",
  26: "Michigan",
  27: "Minnesota",
  28: "Mississippi",
  29: "Missouri",
  30: "Montana",
  31: "Nebraska",
  32: "Nevada",
  33: "New Hampshire",
  34: "New Jersey",
  35: "New Mexico",
  36: "New York",
  37: "North Carolina",
  38: "North Dakota",
  39: "Ohio",
  40: "Oklahoma",
  41: "Oregon",
  42: "Pennsylvania",
  44: "Rhode Island",
  45: "South Carolina",
  46: "South Dakota",
  47: "Tennessee",
  48: "Texas",
  49: "Utah",
  50: "Vermont",
  51: "Virginia",
  53: "Washington",
  54: "West Virginia",
  55: "Wisconsin",
  56: "Wyoming",
  60: "American Samoa",
  64: "Federated States of Micronesia",
  66: "Guam",
  69: "Northern Mariana Islands",
  70: "Palau",
  72: "Puerto Rico",
  78: "Virgin Islands",
};

// IPEDS Region Codes
const IPEDSCodes = {
  1: "New England",
  2: "Mid East",
  3: "Great Lakes",
  4: "Plains",
  5: "Southeast",
  6: "Southwest",
  7: "Rocky Mountains",
  8: "Far West",
  9: "Outlying Areas",
};

schoolCardQuery();

// Query for the basic school card display
async function schoolCardQuery() {
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

// Display the scorecards on the webpage
function displayScorecard(scoreCard) {
  const gallery = document.querySelector(".gallery");
  scoreCard.forEach((card) => {
    gallery.innerHTML = gallery.innerHTML + schoolCardTemplate(card);
  });
}
