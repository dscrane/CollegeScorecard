import { cleanResponseData } from "../responseCleaning/cleanResponseData.js";
import { handleSubsectionData } from "../dataHandlers/handleSubsectionData.js";
import { displaySubsections } from "../displayFunctions/displaySubsections.js";

export const handleSubsections = (response, query) => {
  const cleanSubsectionResponse = cleanResponseData(response.data.results[0]);
  const subsectionData = handleSubsectionData(cleanSubsectionResponse, query);

  displaySubsections(subsectionData, query);
};
