"use strict";

require("core-js/modules/es.promise");

require("core-js/modules/es.string.replace");

require("core-js/modules/es.string.split");

require("core-js/modules/web.dom-collections.iterator");

var _api = require("./api");

var _utils = require("./utils");

const homeButton = document.querySelector("#home-button");
const searchButton = document.querySelector(".search__cta");
const loadMoreButton = document.querySelector(".more__results");
homeButton.addEventListener("click", () => {
  console.log("button clicked");
});
let currentPage = 0;
searchButton.addEventListener("click", e => {
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
  const citySearch = splitCities.map(city => city.replace(" ", "%20")); // Settings for pagination (if neccessary)

  let page = "page=".concat(currentPage);
  let perPage = "per_page=".concat(8);
  let city = "school.city=".concat(citySearch);
  const params = [page, perPage, city];
  Promise.all([(0, _api.basicScorecardQuery)(params), (0, _api.stockPhotoQuery)()]).then(values => {
    const [scorecards, images] = values;
    return (0, _utils.handleScorecards)(scorecards, images);
  }).then(handledScorecards => (0, _utils.displayScorecard)(handledScorecards, currentPage)).catch(err => {
    console.log(err);
  });
}