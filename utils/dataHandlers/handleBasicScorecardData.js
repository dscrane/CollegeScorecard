import { formatDollarAmounts } from "../formatting/formatDollarAmounts.js";
import { formatPercentages } from "../formatting/formatPercentages.js";
import { formatNumericValues } from "../formatting/formatNumericValues.js";
import { formatSchoolUrl } from "../formatting/formatSchoolUrl.js";

import { fipsStateGenerator } from "../dataFields/fipsStateGenerator.js";

const fipsStates = fipsStateGenerator();

export const handleBasicScorecardData = (basicResponseData, images) => {
  // Image placeholders to fill out the effect of the cards
  const imgUrls = images;
  // Return an array of scorecard objects with clean values and more convinient keys
  const scorecardData = basicResponseData.map((data, i) => {
    const {
      id,
      "latest.admissions.admission_rate.overall": rateOfAdmission,
      "latest.student.size": studentSize,
      "school.name": schoolName,
      "school.city": schoolCity,
      "school.school_url": schoolWebsite,
      "school.state_fips": schoolStateId,
      "latest.cost.attendance.academic_year": costPerYear,
    } = data;

    // Convert the formatting of the dollar and percent values
    const avgCost = formatDollarAmounts(costPerYear);
    const adminRate = formatPercentages(rateOfAdmission);
    const schoolAttendance = formatNumericValues(studentSize);
    const schoolSimpleWebsite = formatSchoolUrl(schoolWebsite);

    return {
      adminRate,
      avgCost,
      schoolAttendance,
      schoolCity,
      schoolName,
      schoolWebsite,
      schoolSimpleWebsite,
      schoolState: fipsStates[schoolStateId],
      schoolId: id,
      imgUrl: imgUrls[i],
    };
  });

  return { scorecardData };
};
