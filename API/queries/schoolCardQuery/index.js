// Define constants for each query
let year = "latest";
const apiKey = "";
const apiUrl = "https://api.data.gov/ed/collegescorecard/v1/schools.json"; //const fields = `id,school.name,school.school_url,school.state_fips,school.state_fips,school.region_id,${year}.student.size,${year}.admissions.admission_rate.overall,${year}.admissions.act_scores.midpoint.cumulative,${year}.admissions.sat_scores.average.overall,${year}.cost.tuition.in_state,${year}.cost.tuition.out_of_state`; //const field2 = `id,school.name,school.school_url,school.state_fips,school.state_fips,school.region_id,${year}.student.size,${year}.admissions.admission_rate.overall,${year}.admissions.sat_scores.75th_percentile.critical_reading,${year}.admissions.sat_scores.75th_percentile.math,${year}.admissions.sat_scores.75th_percentile.writing,${year}.admissions.sat_scores.midpoint.critical_reading,${year}.admissions.sat_scores.midpoint.math,${year}.admissions.sat_scores.midpoint.writing,${year}.admissions.sat_scores.25th_percentile.critical_reading,${year}.admissions.sat_scores.25th_percentile.math,${year}.admissions.sat_scores.25th_percentile.writing,${year}.admissions.act_scores.75th_percentile.cumulative,${year}.admissions.act_scores.midpoint.cumulative,${year}.admissions.act_scores.25th_percentile.cumulative,${year}.cost.tuition.in_state,${year}.cost.tuition.out_of_state`;

// Query for the basic school card display
export async function schoolCardQuery() {
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

  let callToApi = `${apiUrl}?_fields=${fields.join()}&page=${page}&per_page=${perPage}&api_key=${apiKey}`;

  let res = await fetch(callToApi);
  let data = await res.json();

  console.log(data.results);
}
