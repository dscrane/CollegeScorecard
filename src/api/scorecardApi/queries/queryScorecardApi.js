import axios from "axios";
import { SCORECARDKEY } from "../../../../documentation/ignore/keys";
import { queryFields } from "../../../lib";

// Create the URL to fetch from the collegeScorecard API
const scorecardUrl = "https://api.data.gov/ed/collegescorecard/v1/schools.json";

export function queryScorecardApi(params, query) {
  const scorecardRequest = `${scorecardUrl}?_fields=${queryFields[
    query
  ].join()}&${params.join("&")}&api_key=${SCORECARDKEY}`;

  const scorecardPromise = new Promise((resolve, reject) => {
    axios
      .get(scorecardRequest)
      .then((scorecardResponse) => {
        console.log(`[${queryFields[query]} Promise]: Success`);
        //console.log("[Query Fields]: ", queryFields[query]);
        resolve(scorecardResponse.data);
      })
      .catch(function (error) {
        console.log(`[${queryFields[query]} Promise]: Failure`);
        reject(error.response);
      });
  });

  return scorecardPromise;
}
