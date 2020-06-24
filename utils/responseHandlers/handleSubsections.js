import { cleanResponseData } from "../responseCleaning/cleanResponseData.js";
import { handleSubsectionData } from "../dataHandlers/handleSubsectionData.js";
import { displaySubsections } from "../displayFunctions/displaySubsections.js";

export const handleSubsections = (response, query) => {
  const cleanSubsectionResponse = cleanResponseData(response.data.results[0]);
  console.log("[cleanSubsectionResponse]: ", cleanSubsectionResponse);

  const subsectionData = handleSubsectionData(cleanSubsectionResponse, query);
  console.log("[subsectionData]: ", subsectionData);
  displaySubsections(subsectionData, query);
};
