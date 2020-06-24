export const generateScorecardQureyString = (querySpecs) => {
  const { query, currentPage, isBasicQuery, schoolId } = querySpecs;

  const scorecardUrl =
    "https://api.data.gov/ed/collegescorecard/v1/schools.json";
  const SCORECARDKEY = "8nR6JMFPRqJzkksBe7V4aD6wITl4MOWZvcIdgL1b";
  let apiKey = `api_key=${SCORECARDKEY}`;
  let params = "";
  let fields = `_fields=${queryFields[query].join()}`;
  if (isBasicQuery) {
    const searchValue = document.querySelector(".search__input").value;
    const citySearch = searchValue
      .replace(/[,]{1}[\s]?/, ",")
      .split(",")
      .map((city) => city.replace(" ", "%20"))
      .join(",");
    console.log(citySearch);
    // Settings for pagination (if neccessary)
    let page = `page=${currentPage}`;
    let perPage = `per_page=${8}`;
    let searchParameter = `school.city=${citySearch}`;
    let institutionType = `school.degrees_awarded.predominant=2,3`;

    params = `${fields}&${searchParameter}&${page}&${perPage}&${institutionType}&${apiKey}`;
  } else {
    let searchParameter = `id=${schoolId}`;
    params = `${fields}&${searchParameter}&${apiKey}`;
  }

  const queryString = `${scorecardUrl}?${params}`;
  return queryString;
  // handleApiRequest(query, params, fields, currentPage);
};
