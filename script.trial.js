// Define request variables
const scoreCardKey = "";
const unsplashKey = "";
const scoreCardUrl = "https://api.data.gov/ed/collegescorecard/v1/schools.json";
const unsplashUrl = "https://source.unsplash.com/random";

// Place holder test images
const imgs = [
  "https://images.unsplash.com/photo-1573875133405-66562f496fa9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzODE1Nn0",
  "https://images.unsplash.com/photo-1530455572253-e84f0a81f460?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzODE1Nn0",
  "https://images.unsplash.com/photo-1570072580163-2beda58b72da?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzODE1Nn0",
  "https://images.unsplash.com/photo-1537089521202-eea9ded4aec0?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzODE1Nn0",
  "https://images.unsplash.com/photo-1565608093437-c6c32457b439?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzODE1Nn0",
  "https://images.unsplash.com/photo-1561646581-c7c0e0962594?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzODE1Nn0",
  "https://images.unsplash.com/photo-1555935622-9a315a05756d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzODE1Nn0",
  "https://images.unsplash.com/photo-1539043781175-aa17934d3ffc?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzODE1Nn0",
  "https://images.unsplash.com/photo-1584518969469-c2d99c7760a0?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzODE1Nn0",
  "https://images.unsplash.com/photo-1555863543-313a3e93f711?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzODE1Nn0",
  "https://images.unsplash.com/photo-1566647224772-1089079206e0?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzODE1Nn0",
  "https://images.unsplash.com/photo-1560878465-441a162bb4b8?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzODE1Nn0",
  "https://images.unsplash.com/photo-1567056171064-f3b5fd1d846e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzODE1Nn0",
  "https://images.unsplash.com/photo-1560259051-f5849bca44a4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzODE1Nn0",
  "https://images.unsplash.com/photo-1565795007633-3adae6add894?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzODE1Nn0",
  "https://images.unsplash.com/photo-1559662780-fc226c7c4f86?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzODE1Nn0",
  "https://images.unsplash.com/photo-1566210123689-a69492ec01c6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzODE1Nn0",
  "https://images.unsplash.com/photo-1578653775124-b0963b67ffa4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzODE1Nn0",
  "https://images.unsplash.com/photo-1568132549924-1264e9dad1d9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzODE1Nn0",
  "https://images.unsplash.com/photo-1561786527-999d27422f3a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzODE1Nn0",
];

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

// HTML template to populate with the formatted response data from scorecard API
function schoolCardTemplate(cardData) {
  const {
    imgUrl,
    adminRate,
    avgCost,
    schoolAttendance,
    schoolName,
    schoolCity,
    schoolWebsite,
    stateFips,
  } = cardData;
  return `
  <div class="gallery__card">
    <div class="card__row card__row-title">
      <div class="card__content card__content-name">
        <p id="school_name" class="content__title">
          ${schoolName}
        </p>
      </div>
    </div>
    <div class="card__row card__row-img">
      <img class="card__image" src="${imgUrl}" />
    </div>
    <div class="card__row card__row-content">
      <div class="card__content card__content-info">
        <p id="school_city" class="content__text">
          <span class="content__text-title">City:</span>
          ${schoolCity}
        </p>
        <p id="school_state" class="content__text">
          <span class="content__text-title">State:</span>
          ${fipsArray[stateFips]}
        </p>
      </div>
      <div class="card__content content__quick-facts">
        <p id="school_attendance" class="content__text">
          <span class="content__text-title">Attendance:</span>
          ${schoolAttendance}
        </p>
        <p id="school_diversity" class="content__text">
          <span class="content__text-title">Admission Rate:</span>
          ${adminRate}
        </p>
        <p id="school_ownership" class="content__text">
          <span class="content__text-title">Average Cost:</span>
          ${avgCost}
        </p>
      </div>
    </div>
      <div class="card__row card__row-website>
        <div class="card__content card__content-link">
          <p id="school_website" class="content__text">
          <span class="content__text-title">Homepage:</span>
          <a
            id="school_link"
            class="content__text-link"
            href="${schoolWebsite}"
            >${schoolWebsite}</a
          >
          </p>
        </div>
      </div>
    </div>
  </div>
`;
}

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
  let callToApi = `${scoreCardUrl}?_fields=${fields.join()}&page=${page}&per_page=${perPage}&api_key=${scoreCardKey}`;

  // Call the API and handle response formatting
  let response = await axios.get(callToApi);
  /* console.log(response); */
  let scoreCardData = response.data.results;
  /* console.log(scoreCardData); */

  // Handle incoming query data and format the data in a usable way
  const scoreCard = handleScorecards(scoreCardData, imgs);
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

// Handles the incoming scorecard data and returns and array of clean easy to work with scorecard objects
function handleScorecards(scorecards, imgs) {
  // Clean the scorecard data
  const schoolScorecardData = cleanScorecardData(scorecards);
  /* console.log(schoolCardData); */

  // Return an array of scorecard objects with clean values and more convinient keys
  return schoolScorecardData.map((d, i) => {
    const {
      id,
      "latest.admissions.admission_rate.overall": rateOfAdmission,
      "latest.student.enrollment.all": schoolAttendance,
      "school.name": schoolName,
      "school.city": schoolCity,
      "school.school_url": schoolWebsite,
      "school.state_fips": stateFips,
      "latest.cost.attendance.academic_year": costPerYear,
    } = d;

    // Image placeholders to fill out the effect of the cards
    let imgUrl = imgs[i];

    // Convert the formatting of the dollar and percent values
    let avgCost = formatDollarAmounts(costPerYear);
    let adminRate = formatPercentages(rateOfAdmission);

    return {
      adminRate,
      avgCost,
      id,
      imgUrl,
      schoolAttendance,
      schoolCity,
      schoolName,
      schoolWebsite,
      stateFips,
    };
  });
}

// Formats the integer dollar amounts to display like currencies
function formatDollarAmounts(price) {
  // Stops the format change if the cost is an undisclosed value
  if (price === "Undisclosed") {
    return price;
  }

  const currencyFormat = price
    .toString()
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  return `$${currencyFormat}`;
}

// Formats the admission rate decimal value to a percentage
function formatPercentages(percent) {
  // Stops the format change if the admission rate is an undisclosed value
  if (percent === "Undisclosed") {
    return percent;
  }

  return `${(percent * 100).toFixed(1)}%`;
}

// Cleans up the scorecard data and replaces null values with user friendly display
function cleanScorecardData(scorecards) {
  // Return an array of cleaned scorecard objects
  return scorecards.map((card) => {
    let schoolScorecard = {};
    // Iterate over the data from each school to reformat null values to display 'undisclosed'
    Object.keys(card).forEach((key) => {
      schoolScorecard[key] = card[key] === null ? "Undisclosed" : card[key];
    });

    return schoolScorecard;
  });
}
