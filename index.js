import { handleDisplay } from "./utils/displayFunctions/handleDisplay.js";

let currentPage = 0;

/* const homeButton = document.querySelector("#home-button");
homeButton.addEventListener("click", () => {
  console.log("Home Button: Clicked");
});*/

/*  ---   BASIC SEARCH FUNCTIONS AND LISTENERS    ---  */
//
const basicSearch = (currentPage) => {
  const query = "basicScorecard";
  const specs = { query, currentPage, isBasicQuery: true };
  handleDisplay(specs);
};

// Event listener for the search bar search button
const searchButton = document.querySelector(".search__cta");
searchButton.addEventListener("click", (e) => {
  e.preventDefault();
  // reset the gallery display when a new search is made
  document.querySelector(".page__row-gallery").innerHTML = "";
  console.log("[Search Button]: Clicked");
  // pass the current page to the query
  basicSearch(currentPage);
});

// Event listener for the load more button
const loadMoreButton = document.querySelector(".more__results");
loadMoreButton.addEventListener("click", () => {
  currentPage += 1;
  console.log("[Load More Button]: Clicked");
  // pass the current page to the query
  basicSearch(currentPage);
});

/*  ---   MODAL CLOSE EVENT LISTENER    ---  */
document.addEventListener("click", (e) => {
  if (checkClass(e.target, "material__icon-close")) {
    // close the modal display
    document.querySelector(".page__modal").style.display = "none";
  }
});

/*  ---   EVENT LISTENERS FOR MODAL TABS    ---  */
// test if the clicked element in the document is a tab heading
const checkClass = (elem, className) => {
  // return the boolean test of the class name passed to the checkClass fn
  return elem.classList.contains(className);
};

// reset the styles for the tab headings to default (non-active)
const resetHeadingClasses = () => {
  // get the list of elemnents that are tab headings
  const headingElems = document.querySelectorAll(".content__heading");
  // iterate through each heading
  headingElems.forEach((heading) => {
    // check if the the heading is already active
    if (heading.classList.contains("content__heading-active")) {
      // toggle the active class if it was already active for a different element
      heading.classList.toggle("content__heading-active");
    }
  });
};

// add event listener to the document for dom elements not rendered yet
document.addEventListener("click", (e) => {
  // check if the element clicked on is a heading tab
  if (checkClass(e.target, "content__heading")) {
    // reset the styles to remove the active class from previously active tab
    resetHeadingClasses();
    // toggle the current tab to have active style
    e.target.classList.toggle("content__heading-active");
    // pass the current tab to the display function to display correct subsection template
    const query = e.target.id;
    const schoolId = e.target.parentNode.parentNode.parentNode.parentNode.getAttribute(
      "id"
    );
    console.log(schoolId);
    const specs = { query, schoolId, isBasicQuery: false };
    handleDisplay(specs);
  }
});
