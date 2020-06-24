export const handleModalScorecard = (response, query, imgUrl) => {
  const cleanModalResponse = cleanResponseData(response.data.results[0]);
  console.log("[cleanModalResponse]: ", cleanModalResponse);

  const modalScorecard = handleModalScorecardData(cleanModalResponse, imgUrl);
  console.log("[modalScorecard]: ", modalScorecard);
  displayModalScorecard(modalScorecard, query);
};
