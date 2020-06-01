import { schoolCardTemplate } from "../../utils";

export function displayScorecard(scoreCard) {
  const gallery = document.querySelector(".gallery");
  scoreCard.forEach(card => {
    gallery.innerHTML = gallery.innerHTML + schoolCardTemplate(card);
  });
}
