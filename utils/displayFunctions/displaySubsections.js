import { schoolOverviewTemplate } from "../../templates/schoolOverviewTemplate.js";
import { schoolAcademicsTemplate } from "../../templates/schoolAcademicsTemplate.js";
import { schoolStudentBodyTemplate } from "../../templates/schoolStudentBodyTemplate.js";
import { schoolFinancialTemplate } from "../../templates/schoolFinancialTemplate.js";

export const displaySubsections = (modalSubsectionData, subsectionTab) => {
  const modalSubsection = document.querySelector(".modal__section-facts");
  let subsectionDisplay = "";
  if (subsectionTab === "schoolOverview") {
    subsectionDisplay = schoolOverviewTemplate(modalSubsectionData);
  } else if (subsectionTab === "schoolAcademics") {
    subsectionDisplay = schoolAcademicsTemplate(modalSubsectionData);
  } else if (subsectionTab === "schoolStudentBody") {
    subsectionDisplay = schoolStudentBodyTemplate(modalSubsectionData);
  } else if (subsectionTab === "schoolFinancial") {
    subsectionDisplay = schoolFinancialTemplate(modalSubsectionData);
  }

  modalSubsection.innerHTML = subsectionDisplay;
};
