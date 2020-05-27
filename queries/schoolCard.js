// Query for the basic school card display
const testUrl =
  "https://api.data.gov/ed/collegescorecard/v1/schools.json?_fields=&school.region_id=1&page=0&per_page=10&2018.admissions.sat_scores.average.overall__range=0..2500&2018.admissions.act_scores.midpoint.cumulative__range=0..2500&api_key=8nR6JMFPRqJzkksBe7V4aD6wITl4MOWZvcIdgL1b";
("{apiUrl2}?_fields=&school.region_id=1&page=0&per_page=10&2018.admissions.sat_scores.average.overall__range=0..2500&2018.admissions.act_scores.midpoint.cumulative__range=0..2500&api_key=8nR6JMFPRqJzkksBe7V4aD6wITl4MOWZvcIdgL1b");

const apiKey = "8nR6JMFPRqJzkksBe7V4aD6wITl4MOWZvcIdgL1b";
const apiUrl = "https://api.data.gov/ed/collegescorecard/v1/schools.json?";
const apiUrl2 = "https://api.data.gov/ed/collegescorecard/v1/schools.json";

let schoolId = "166027";
let year = "latest";
let region = "";
let page = "0";
let perPage = "20";
const fields = `id,school.name,school.school_url,school.state_fips,school.state_fips,school.region_id,${year}.student.size,${year}.admissions.admission_rate.overall,${year}.admissions.sat_scores.75th_percentile.critical_reading,${year}.admissions.sat_scores.75th_percentile.math,${year}.admissions.sat_scores.75th_percentile.writing,${year}.admissions.sat_scores.midpoint.critical_reading,${year}.admissions.sat_scores.midpoint.math,${year}.admissions.sat_scores.midpoint.writing,${year}.admissions.sat_scores.25th_percentile.critical_reading,${year}.admissions.sat_scores.25th_percentile.math,${year}.admissions.sat_scores.25th_percentile.writing,${year}.admissions.act_scores.75th_percentile.cumulative,${year}.admissions.act_scores.midpoint.cumulative,${year}.admissions.act_scores.25th_percentile.cumulative,${year}.cost.tuition.in_state,${year}.cost.tuition.out_of_state`;
const field2 = `id,school.name,school.school_url,school.state_fips,school.state_fips,school.region_id,${year}.student.size,${year}.admissions.admission_rate.overall,${year}.admissions.sat_scores.75th_percentile.critical_reading,${year}.admissions.sat_scores.75th_percentile.math,${year}.admissions.sat_scores.75th_percentile.writing,${year}.admissions.sat_scores.midpoint.critical_reading,${year}.admissions.sat_scores.midpoint.math,${year}.admissions.sat_scores.midpoint.writing,${year}.admissions.sat_scores.25th_percentile.critical_reading,${year}.admissions.sat_scores.25th_percentile.math,${year}.admissions.sat_scores.25th_percentile.writing,${year}.admissions.act_scores.75th_percentile.cumulative,${year}.admissions.act_scores.midpoint.cumulative,${year}.admissions.act_scores.25th_percentile.cumulative,${year}.cost.tuition.in_state,${year}.cost.tuition.out_of_state`;

let callToApi = `${apiUrl2}_fields=${fields}&id=${schoolId}&page=${page}&per_page=${perPage}&api_key=${apiKey}`;

let callHeaders = new Headers();
callHeaders.set("Content-Type", "application/json");
callHeaders.set("Access-Control-Allow-Origin", "*");

callHeaders.forEach((i) => console.log(i));

const apiInit = {
  method: "GET",
  headers: callHeaders,
  mode: "cors",
};

console.log(callToApi);
const request = new Request(callToApi, apiInit);

fetch(request)
  .then((res) => res.json())
  .then((data) => console.log(data.results));

// https://api.data.gov/ed/collegescorecard/v1/schools.json?_fields=id,school.name,school.school_url,school.state_fips,school.state_fips,school.region_id,${year}.student.size,${year}.admissions.admission_rate.overall,${year}.admissions.sat_scores.75th_percentile.critical_reading,${year}.admissions.sat_scores.75th_percentile.math,${year}.admissions.sat_scores.75th_percentile.writing,${year}.admissions.sat_scores.midpoint.critical_reading,${year}.admissions.sat_scores.midpoint.math,${year}.admissions.sat_scores.midpoint.writing,${year}.admissions.sat_scores.25th_percentile.critical_reading,${year}.admissions.sat_scores.25th_percentile.math,${year}.admissions.sat_scores.25th_percentile.writing,${year}.admissions.act_scores.75th_percentile.cumulative,${year}.admissions.act_scores.midpoint.cumulative,${year}.admissions.act_scores.25th_percentile.cumulative,${year}.cost.tuition.in_state,${year}.cost.tuition.out_of_state&school.region_id=1&page=0&per_page=10&${year}.admissions.sat_scores.average.overall__range=0..2500&${year}.admissions.act_scores.midpoint.cumulative__range=0..2500&api_key=8nR6JMFPRqJzkksBe7V4aD6wITl4MOWZvcIdgL1b
