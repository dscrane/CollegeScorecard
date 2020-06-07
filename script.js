import { basicScorecardQuery, stockPhotoQuery } from "./src/api";
import { handleScorecard, displayScorecard } from "./src/utils";

const testButton = document.querySelector(".test_button");

testButton.addEventListener("click", () => {
  console.log("button clicked");
  Promise.all([basicScorecardQuery, stockPhotoQuery])
    .then((basicScorecardPromise, stockPhotoPromise) =>
      handleScorecard(basicScorecardPromise.results, stockPhotoPromise.results)
    )
    .then((cleanedScorecardData) => displayScorecard(cleanedScorecardData));
});
