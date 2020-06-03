import { basicScorecard } from "./api/collegeScorecard/queries.js";
import { handleScorecard, displayScorecard } from "../../../../utils";
import { testImgs } from "./lib";

const testButton = document.querySelector(".test_button");

testButton.addEventListener("click", () => {
  console.log("button clicked");
  basicScorecard()
    .then((scorecardPromise) => scorecardPromise.results)
    .then((scorecardData) => handleScorecard(scorecardData, testImgs))
    .then((cleanedScorecardData) => displayScorecard(cleanedScorecardData));
});
