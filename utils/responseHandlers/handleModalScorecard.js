import { cleanResponseData } from "../responseCleaning/cleanResponseData.js";
import { handleModalScorecardData } from "../dataHandlers/handleModalScorecardData.js";
import { displayModalScorecard } from "../displayFunctions/displayModalScorecard.js";

export const handleModalScorecard = (response, query, imgUrl) => {
  const cleanModalResponse = cleanResponseData(response.data.results[0]);
  const modalScorecard = handleModalScorecardData(cleanModalResponse, imgUrl);

  displayModalScorecard(modalScorecard, query);
};
