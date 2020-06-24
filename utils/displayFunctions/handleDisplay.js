export const handleResponseDisplay = (specs) => {
  const { query, currentPage, isBasicQuery, imgUrl, schoolId } = specs;
  console.log("[Specs]: ", query, currentPage, isBasicQuery, imgUrl, schoolId);
  if (isBasicQuery) {
    const querySpecs = { query, currentPage, isBasicQuery };
    const queryString = generateScorecardQureyString(querySpecs);
    console.log("[isBasic queryString]: ", queryString);
    makeScorecardApiRequest(queryString).then((response) =>
      handleBasicScorecard(response, currentPage)
    );
    return;
  }
  if (query === "defaultQuery") {
    const querySpecs = { query, schoolId };
    const queryString = generateScorecardQureyString(querySpecs);
    console.log("[!isBasic queryString]: ", queryString);

    makeScorecardApiRequest(queryString).then((response) =>
      handleModalScorecard(response, query, imgUrl)
    );
    return;
  }

  const querySpecs = { query, schoolId };
  const queryString = generateScorecardQureyString(querySpecs);
  makeScorecardApiRequest(queryString).then((response) => {
    handleModalSubsection(response, query);
  });
};
