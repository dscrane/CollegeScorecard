import { schoolCardQuery } from "./API/queries";

const testButton = document.querySelector(".test_button");
testButton.addEventListener("click", schoolCardQuery());

// Display the scorecards on the webpage
