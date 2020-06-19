import { queryScorecardApi, mockPhotos } from "../../api";
import { handleResponses, displayScorecard } from "../../utils";

export function handleApiResponse(currentPage, params, query) {
  queryScorecardApi(params, query)
    .then((values) => {
      console.log(query);
      console.log("[Response Values: ", values);
      const scorecards = values;
      const images = mockPhotos;
      return handleResponses(scorecards, images);
    })
    .then((handledScorecards) => {
      if (query === "basicScorecard") {
        displayScorecard(handledScorecards, currentPage);
      }
    })
    .then(() => {
      handleScorecardCtas();
    })
    .catch((err) => {
      console.log(err);
    });
}
