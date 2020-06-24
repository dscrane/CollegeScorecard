export const displayModalScorecard = (defaultModalData) => {
  const { schoolId, schoolName, imgUrl, overviewSubsection } = defaultModalData;
  const pageModal = document.querySelector(".page__modal");
  pageModal.style.display = "flex";

  const defaultSubsectionDisplay = schoolOverviewDisplayTemplate(
    overviewSubsection
  );

  const scorecardDisplay = {
    schoolName,
    schoolId,
    imgUrl,
    defaultSubsectionDisplay,
  };
  pageModal.innerHTML = fullScorecardTemplate(scorecardDisplay);
};
