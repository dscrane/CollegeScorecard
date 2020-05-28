// const axios = require("axios").default;
//import axios from "axios";

//import { schoolCardQuery } from "./API/queries";
let year = "latest";
const scoreCardKey = "8nR6JMFPRqJzkksBe7V4aD6wITl4MOWZvcIdgL1b";
const unsplashKey = "8xSG2SnwEoxSOvi2MsZzpqDg4fgg8tI-8siiSI-S_QE";
const scoreCardUrl = "https://api.data.gov/ed/collegescorecard/v1/schools.json";
const unsplashUrl = "https://source.unsplash.com/random";

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

function schoolCardTemplate(cardData) {
  const {
    imgUrl,
    avgACTScore,
    adminRate,
    avgSATScore,
    inStateCost,
    schoolAttendance,
    schoolName,
    schoolRegion,
    schoolWebsite,
    stateFips,
  } = cardData;
  console.log(stateFips);
  return `
  <div class="gallery__card">
  <div class="card__row card__row-img">
    <img class="card__image" src="${imgUrl}" />
  </div>
  <div class="card__row card__row-content">
    <div class="card__content content__school_title">
      <p id="school_name" class="content__text">
        <span class="content__text-title">${schoolName}</span>
      </p>
    </div>
    <div class="card__content card__content-info">
      <p id="school_city" class="content__text">
        <span class="content__text-title">Region:</span>
        ${IPEDSCodes[schoolRegion]}
      </p>
      <p id="school_state" class="content__text">
        <span class="content__text-title">State:</span>
        ${fipsArray[stateFips]}
      </p>
      <p id="school_website" class="content__text">
        <span class="content__text-title">Website:</span>
        <a
          id="school_link"
          class="content__text-link"
          href="${schoolWebsite}"
          >${schoolWebsite}</a
        >
      </p>
    </div>
    <div class="card__content content__quick_facts">
      <p id="school_attendance" class="content__text">
        <span class="content__text-title">Attendance:</span>
        ${schoolAttendance}
      </p>
      <p id="school_diversity" class="content__text">
        <span class="content__text-title">Admission Rate:</span>
        ${adminRate}
      </p>
      <p id="school_ownership" class="content__text">
        <span class="content__text-title">Public/Private:</span>
        ${inStateCost}
      </p>
      <p id="school_testing" class="content__text">
        <span class="content__text-title">SAT/ACT Scores:</span>
        ${avgSATScore} / ${avgACTScore}
      </p>
    </div>
  </div>
  </div>
`;
}

/* Content for each schools display card
    [] name (school.name)
    [] city (from root.location.lat && root.location.lon)
    [] state (converted from school.state_fips)
    [] admission rate ({year}.admission_rate.overall)
    [] number of students ({year}.student.size)
    [] Public/Private (school.ownership)
    [] school URL (school.schoo_url)
    [] ethinic make up ()
    [] testing numbers
        [] SAT 
          {} cumulative 75th_percentile SAT 
            [
              admissions.sat_scores.75th_percentile.critical_reading, admissions.sat_scores.75th_percentile.math,admissions.sat_scores.75th_percentile.writing,
            ]
          {} cumulative midpoint SAT
            [
              admissions.sat_scores.midpoint.critical_reading,admissions.sat_scores.midpoint.math,admissions.sat_scores.midpoint.writing,
            ]
          {} cumulative 25th_percentile SAT 
            [
              admissions.sat_scores.25th_percentile.criticl_reading,admissions.sat_scores.25th_percentile.math,admissions.sat_scores.25th_percentile.writing,
            ]
        [] ACT 
          {} admissions.act_scores.75th_percentile.cumulative
          {} admissions.act_scores.midpoint.cumulative
          {} admissions.act_scores.25th_percentile.cumulative)
    [] tuition

*/

// Define constants for each query
//const fields = `id,school.name,school.school_url,school.state_fips,school.state_fips,school.region_id,${year}.student.size,${year}.admissions.admission_rate.overall,${year}.admissions.act_scores.midpoint.cumulative,${year}.admissions.sat_scores.average.overall,${year}.cost.tuition.in_state,${year}.cost.tuition.out_of_state`; //const field2 = `id,school.name,school.school_url,school.state_fips,school.state_fips,school.region_id,${year}.student.size,${year}.admissions.admission_rate.overall,${year}.admissions.sat_scores.75th_percentile.critical_reading,${year}.admissions.sat_scores.75th_percentile.math,${year}.admissions.sat_scores.75th_percentile.writing,${year}.admissions.sat_scores.midpoint.critical_reading,${year}.admissions.sat_scores.midpoint.math,${year}.admissions.sat_scores.midpoint.writing,${year}.admissions.sat_scores.25th_percentile.critical_reading,${year}.admissions.sat_scores.25th_percentile.math,${year}.admissions.sat_scores.25th_percentile.writing,${year}.admissions.act_scores.75th_percentile.cumulative,${year}.admissions.act_scores.midpoint.cumulative,${year}.admissions.act_scores.25th_percentile.cumulative,${year}.cost.tuition.in_state,${year}.cost.tuition.out_of_state`;

// Query for the basic school card display
async function schoolCardQuery() {
  // Fields to return from API to fill the basic card
  const fields = [
    "id",
    "school.name",
    "school.school_url",
    "school.state_fips",
    "school.state_fips",
    "school.region_id",
    `${year}.student.size`,
    `${year}.admissions.admission_rate.overall`,
    `${year}.admissions.act_scores.midpoint.cumulative`,
    `${year}.admissions.sat_scores.average.overall`,
    `${year}.cost.tuition.in_state`,
    `${year}.cost.tuition.out_of_state`,
  ];

  let page = "0";
  let perPage = "20";

  let callToApi = `${scoreCardUrl}?_fields=${fields.join()}&page=${page}&per_page=${perPage}&api_key=${scoreCardKey}`;

  let res = await fetch(callToApi);
  let jsonRes = await res.json();
  let data = jsonRes.results;
  console.log(data);

  let imgRes = await axios.get(
    `https://api.unsplash.com/photos/random?orientation=squarish&count=20&client_id=${unsplashKey}`
  );

  const imgArr = imgRes.data;

  const cardData = handleData(data, imgArr);
  console.log(cardData);

  console.log(imgRes);

  displayQueryData(cardData);
}

function displayQueryData(cardData) {
  const gallery = document.querySelector(".gallery");
  cardData.forEach((card) => {
    gallery.innerHTML = gallery.innerHTML + schoolCardTemplate(card);
  });
}

function handleData(data, imgArr) {
  return data.map((d, i) => {
    const {
      id,
      "latest.admissions.act_scores.midpoint.cumulative": avgACTScore,
      "latest.admissions.admission_rate.overall": adminRate,
      "latest.admissions.sat_scores.average.overall": avgSATScore,
      "latest.cost.tuition.in_state": inStateCost,
      "latest.cost.tuition.out_of_state": outOfStateCost,
      "latest.student.size": schoolAttendance,
      "school.name": schoolName,
      "school.region_id": schoolRegion,
      "school.school_url": schoolWebsite,
      "school.state_fips": stateFipsArr,
    } = d;
    let imgUrl = imgArr[i].urls.small;
    let stateFips = stateFipsArr[0];
    return {
      imgUrl,
      id,
      avgACTScore,
      adminRate,
      avgSATScore,
      inStateCost,
      outOfStateCost,
      schoolAttendance,
      schoolName,
      schoolRegion,
      schoolWebsite,
      stateFips,
    };
  });
}
