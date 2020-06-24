import { handleSubsectionData } from "../dataHandlers/handleSubsectionData.js";

export const handleModalScorecardData = (modalResponseData, imgUrl) => {
  const {
    id: schoolId,
    "school.name": schoolName,
    ...overviewSubsectionData
  } = modalResponseData;

  const overviewSubsection = handleSubsectionData(
    overviewSubsectionData,
    "schoolOverview"
  );

  return {
    schoolName,
    imgUrl,
    overviewSubsection,
    schoolId,
  };
};
