import { handleApiResponse } from "./utils/handleApiResponse";

const homeButton = document.querySelector("#home-button");
const searchButton = document.querySelector(".search__cta");
const loadMoreButton = document.querySelector(".more__results");

let currentPage = 0;

let testRun = "false";
console.log(testRun);

homeButton.addEventListener("click", () => {
  console.log("Home Button: Clicked");
});

searchButton.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("Search Button: Clicked");
  testRun = document.querySelector(".testRun").value;
  const query = "basicScorecard";
  makeRequest(currentPage, query);
});

loadMoreButton.addEventListener("click", () => {
  currentPage += 1;
  testRun = document.querySelector(".testRun").value;
  const query = "basicScorecard";
  makeRequest(currentPage, query);
});

function makeRequest(currentPage, query) {
  const searchValue = document.querySelector(".search__input").value;
  const citySearch = searchValue
    .split(",")
    .map((city) => city.replace(" ", "%20"));

  // Settings for pagination (if neccessary)
  let page = `page=${currentPage}`;
  let perPage = `per_page=${8}`;
  let city = `school.city=${citySearch}`;
  let institutionType = `school.degrees_awarded.predominant=2,3`;

  const params = [page, perPage, city, institutionType];

  handleApiResponse(currentPage, params, query);
}
