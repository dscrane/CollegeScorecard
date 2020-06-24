export const displaySubsections = (modalSubsectionData, subsectionTab) => {
  const modalSubsection = document.querySelector(".modal__section-facts");
  let subsectionDisplay = "";
  if (subsectionTab === "schoolOverview") {
    subsectionDisplay = schoolOverviewDisplayTemplate(modalSubsectionData);
  } else if (subsectionTab === "schoolAcademics") {
    subsectionDisplay = schoolAcademicsDisplayTemplate(modalSubsectionData);
  } else if (subsectionTab === "schoolStudentBody") {
    subsectionDisplay = schoolStudentBodyDisplayTemplate(modalSubsectionData);
  } else if (subsectionTab === "schoolFinancial") {
    subsectionDisplay = schoolFinancialDisplayTemplate(modalSubsectionData);
  }

  modalSubsection.innerHTML = subsectionDisplay;
};
