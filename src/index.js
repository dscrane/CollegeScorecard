import { basicScorecardQuery, stockPhotoQuery, mockPhotos } from "./api";
import { handleScorecards, displayScorecard } from "./utils";

const homeButton = document.querySelector("#home-button");
const searchButton = document.querySelector(".search__cta");
const loadMoreButton = document.querySelector(".more__results");
let testRun = "false";
console.log(testRun);

homeButton.addEventListener("click", () => {
  console.log("Home Button: Clicked");
});

let currentPage = 0;

searchButton.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("Search Button: Clicked");
  testRun = document.querySelector(".testRun").value;
  makeRequest(currentPage);
});

loadMoreButton.addEventListener("click", () => {
  currentPage += 1;
  testRun = document.querySelector(".testRun").value;
  makeRequest(currentPage);
});

function makeRequest(currentPage) {
  const searchValue = document.querySelector(".search__input").value;

  const splitCities = searchValue.split(",");

  const citySearch = splitCities.map((city) => city.replace(" ", "%20"));

  // Settings for pagination (if neccessary)
  let page = `page=${currentPage}`;
  let perPage = `per_page=${8}`;
  let city = `school.city=${citySearch}`;

  const params = [page, perPage, city];

  if (testRun === "true") {
    Promise.all([basicScorecardQuery(params)])
      .then((values) => {
        console.log("This was a test run");
        const [scorecards] = values;
        const images = mockPhotos;
        return handleScorecards(scorecards, images, testRun);
      })
      .then((handledScorecards) =>
        displayScorecard(handledScorecards, currentPage)
      )
      .catch((err) => {
        console.log(err);
      });
  } else {
    Promise.all([basicScorecardQuery(params), stockPhotoQuery()])
      .then((values) => {
        const [scorecards, images] = values;
        return handleScorecards(scorecards, images, testRun);
      })
      .then((handledScorecards) =>
        displayScorecard(handledScorecards, currentPage)
      )
      .catch((err) => {
        console.log(err);
      });
  }
}
