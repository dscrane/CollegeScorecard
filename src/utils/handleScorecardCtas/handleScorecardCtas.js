import { fullScorecardTemplate } from "../../utils";

const pageModal = document.querySelector(".page__modal");

export function handleScorecardCtas() {
  let scorecardCtas = document.querySelectorAll(".gallery__card-wrapper");
  scorecardCtas.forEach((cardCta) => {
    cardCta.addEventListener("click", function () {
      handleOnClick(this.getAttribute("id"));
    });
  });
}

function handleOnClick(schoolId) {
  console.log(schoolId);
  pageModal.style.display = "flex";
  pageModal.innerHTML = fullScorecardTemplate();
}
