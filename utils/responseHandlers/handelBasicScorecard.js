export const handleBasicScorecard = (response, currentPage) => {
  const responseMetadata = response.data.metadata;
  const cleanBasicResponse = cleanResponseData(response.data.results);
  console.log("[cleanBasicResponse]: ", cleanBasicResponse);

  const basicScorecard = handleBasicScorecardData(
    cleanBasicResponse,
    mockPhotos,
    responseMetadata
  );
  displayScorecard(basicScorecard, currentPage);
  handleScorecardCtas();
};
