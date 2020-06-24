import { cleanResponseData } from "../responseCleaning/cleanResponseData.js";
import { handleBasicScorecardData } from "../dataHandlers/handleBasicScorecardData.js";
import { displayScorecards } from "../displayFunctions/displayScorecards.js";
import { scorecardCta } from "../eventListeners/scorecardCta.js";
import { mockPhotosGenerator } from "../dataFields/mockPhotosGenerator.js";

const mockPhotos = mockPhotosGenerator();

export const handleBasicScorecard = (response, currentPage) => {
  console.log(response);
  const cleanBasicResponse = cleanResponseData(response.data.results);
  console.log("[cleanBasicResponse]: ", cleanBasicResponse);

  const basicScorecard = handleBasicScorecardData(
    cleanBasicResponse,
    mockPhotos
  );
  displayScorecards(basicScorecard, currentPage);
  scorecardCta();
};
