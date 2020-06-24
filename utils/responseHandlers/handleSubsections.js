export const handleModalSubsection = (response, query) => {
  const cleanSubsectionResponse = cleanResponseData(response.data.results[0]);
  console.log("[cleanSubsectionResponse]: ", cleanSubsectionResponse);

  const subsectionData = handleSubsectionData(cleanSubsectionResponse, query);
  console.log("[subsectionData]: ", subsectionData);
  displayModalSubsection(subsectionData, query);
};
