import {
  overviewDisplayTemplate,
  academicsDisplayTemplate,
  studentLifeDisplayTemplate,
  financialDisplayTemplate,
} from "../../lib";

// define tab numbers to subsection content
const sectionTabs = {
  0: overviewDisplayTemplate(),
  1: academicsDisplayTemplate(),
  2: studentLifeDisplayTemplate(),
  3: financialDisplayTemplate(),
};

export function displaySubsection(currentTab, scorecardData) {
  const subsectionDisplay = document.querySelector(".modal__section-facts");

  switch (currentTab) {
    case "schoolOverview":
      subsectionDisplay.innerHTML = schoolOverviewDisplayTemplate(
        scorecardData
      );
    case "schoolAcademics":
      subsectionDisplay.innerHTML = schoolAcademicsDisplayTemplate(
        scorecardData
      );
    case "schoolOverview":
      subsectionDisplay.innerHTML = schoolStudentLifeDisplayTemplate(
        scorecardData
      );
    case "schoolOverview":
      subsectionDisplay.innerHTML = schoolFinancialDisplayTemplate(
        scorecardData
      );
  }
}
