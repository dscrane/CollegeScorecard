import { basicScorecard } from "./api/collegeScorecard/queries/basicScorecard";

const testButton = document.querySelector(".test_button");

testButton.addEventListener("click", () => {
  console.log("button clicked");
  console.log(basicScorecard());
});
