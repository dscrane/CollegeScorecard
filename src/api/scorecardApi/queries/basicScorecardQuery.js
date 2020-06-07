import axios from "axios";

export function basicScorecard(args) {
  // takes [url, [fields], key, [params]]
  const { scorecardUrl, fields, scorecardKey, params } = args;

  const basicScorecardRequest = `${scorecardUrl}?_fields=${fields.join()}&${params.join(
    "&"
  )}&api_key=${scorecardKey}`;
  console.log(basicScorecardRequest);

  const basicScorecardPromise = new Promise((resolve, reject) => {
    axios
      .get(basicScorecardRequest)
      .then((basicScorecard) => {
        console.log("axios promise -- success");
        resolve(basicScorecard.data.results);
      })
      .catch(function (error) {
        console.log("axios promise -- error");
        reject(error.response);
      });
  });
  return basicScorecardPromise;
}
