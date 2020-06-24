import { schoolOverviewTemplate } from "../../templates/schoolOverviewTemplate.js";
import { fullScorecardTemplate } from "../../templates/fullScorecardTemplate.js";

export const displayModalScorecard = (defaultModalData) => {
  const { schoolId, schoolName, imgUrl, overviewSubsection } = defaultModalData;
  const pageModal = document.querySelector(".page__modal");
  pageModal.style.display = "flex";

  const defaultSubsectionDisplay = schoolOverviewTemplate(overviewSubsection);

  const scorecardDisplay = {
    schoolName,
    schoolId,
    imgUrl,
    defaultSubsectionDisplay,
  };
  pageModal.innerHTML = fullScorecardTemplate(scorecardDisplay);
};
