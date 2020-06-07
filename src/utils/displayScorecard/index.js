import { basicScorecardTemplate } from "../scorecardTemplates";

export function displayScorecard(scorecard) {
  const gallery = document.querySelector(".gallery");
  scorecard.forEach((card) => {
    gallery.innerHTML = gallery.innerHTML + basicScorecardTemplate(card);
  });
}
