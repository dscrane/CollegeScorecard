import {
  cleanScorecardData,
  formatDollarAmounts,
  formatPercentages,
} from "../../utils";

export function handleResponses(scorecards, images) {
  // Clean the scorecard data
  const schoolScorecardData = cleanScorecardData(scorecards.results);
  console.log(schoolScorecardData);

  // Set the number of pages returned from API
  const additionalPages =
    scorecards.metadata.total / 8 > 1 ? scorecards.metadata.total / 8 : 0;

  // Image placeholders to fill out the effect of the cards
  const imgUrls = images;
  // Return an array of scorecard objects with clean values and more convinient keys
  const scorecardData = schoolScorecardData.map((data, i) => {
    const {
      id,
      "latest.admissions.admission_rate.overall": rateOfAdmission,
      "latest.student.enrollment.all": schoolAttendance,
      "school.name": schoolName,
      "school.city": schoolCity,
      "school.school_url": schoolWebsite,
      "school.state_fips": stateFips,
      "latest.cost.attendance.academic_year": costPerYear,
    } = data;

    // Convert the formatting of the dollar and percent values
    let avgCost = formatDollarAmounts(costPerYear);
    let adminRate = formatPercentages(rateOfAdmission);

    return {
      adminRate,
      avgCost,
      schoolAttendance,
      schoolCity,
      schoolName,
      schoolWebsite,
      stateFips,
      schoolId: id,
      imgUrl: imgUrls[i],
    };
  });

  return { additionalPages, scorecardData };
}