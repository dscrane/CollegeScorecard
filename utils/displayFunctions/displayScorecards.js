export const displayScorecards = (handledScorecards, currentPage) => {
  const { scorecardData, additionalPages } = handledScorecards;

  if (currentPage > additionalPages - 1 || additionalPages < 0) {
    document.querySelector("#page__row-more_id").style.display = "none";
  } else {
    document.querySelector("#page__row-more_id").style.display = "flex";
  }

  const gallery = document.querySelector(".page__row-gallery");
  scorecardData.forEach((card) => {
    gallery.innerHTML = gallery.innerHTML + basicScorecardTemplate(card);
  });
};
