import { basicScorecardQuery, stockPhotoQuery } from "./src/api";
import { handleScorecards, displayScorecard } from "./src/utils";

const homeButton = document.querySelector("#home-button");
const searchButton = document.querySelector(".search__cta");
const loadMoreButton = document.querySelector(".more__results");

homeButton.addEventListener("click", () => {
  console.log("button clicked");
});

let currentPage = 0;

searchButton.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("Search Button: Clicked");
  makeRequest(currentPage);
});

loadMoreButton.addEventListener("click", () => {
  currentPage += 1;
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

  Promise.all([basicScorecardQuery(params), stockPhotoQuery()])
    .then((values) => {
      const [scorecards, images] = values;
      return handleScorecards(scorecards, images);
    })
    .then((handledScorecards) =>
      displayScorecard(handledScorecards, currentPage)
    )
    .catch((err) => {
      console.log(err);
    });
}
