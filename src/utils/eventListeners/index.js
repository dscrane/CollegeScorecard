import { displaySubsection } from "../../utils";

document.addEventListener("click", (e) => {
  // define scorecard display

  if (checkClass(e.target, "content__heading")) {
    console.log("click event happened");
    const currentTab = e.target.dataset.tab;
    displaySubsection(currentTab);
  }
});

function checkClass(elem, className) {
  return elem.classList.contains(className);
}
