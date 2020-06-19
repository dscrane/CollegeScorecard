import { displaySubsection } from "../../utils";
import { queryScorecardApi } from "../../api";

// add event listener to the document for dom elements not rendered yet
document.addEventListener("click", (e) => {
  // check if the element clicked on is a heading tab
  if (checkClass(e.target, "content__heading")) {
    // reset the styles to remove the active class from previously active tab
    resetHeadingClasses();
    // toggle the current tab to have active style
    e.target.classList.toggle("content__heading-active");
    // pass the current tab to the display function to display correct subsection template
    displaySubsection(e.target.dataset.tab);
  }
});

// test if the clicked element in the document is a tab heading
function checkClass(elem, className) {
  // return the boolean test of the class name passed to the checkClass fn
  return elem.classList.contains(className);
}

// reset the styles for the tab headings to default (non-active)
function resetHeadingClasses() {
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
}
