import { basicScorecardTemplate } from "../scorecardTemplates";

export function displayScorecard(handledScorecards, currentPage) {
  const { scorecardData, additionalPages } = handledScorecards;

  if (currentPage > additionalPages - 1 || additionalPages < 0) {
    document.querySelector("#page__row-more_id").style.display = "none";
  } else {
    document.querySelector("#page__row-more_id").style.display = "flex";
  }

  console.log(scorecardData);
  const gallery = document.querySelector(".page__row-gallery");
  scorecardData.forEach((card) => {
    gallery.innerHTML = gallery.innerHTML + basicScorecardTemplate(card);
  });
}
