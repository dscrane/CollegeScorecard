import {
  cleanScorecardData,
  formatDollarAmounts,
  formatPercentages,
} from "../../utils";

export function handleScorecards(scorecards, images) {
  // Clean the scorecard data
  const schoolScorecardData = cleanScorecardData(scorecards);
  /* console.log(schoolCardData); */

  // Image placeholders to fill out the effect of the cards
  let imgUrls = images.map((image) => image.urls.small);

  // Return an array of scorecard objects with clean values and more convinient keys
  return schoolScorecardData.map((d, i) => {
    const {
      id,
      "latest.admissions.admission_rate.overall": rateOfAdmission,
      "latest.student.enrollment.all": schoolAttendance,
      "school.name": schoolName,
      "school.city": schoolCity,
      "school.school_url": schoolWebsite,
      "school.state_fips": stateFips,
      "latest.cost.attendance.academic_year": costPerYear,
    } = d;

    // Convert the formatting of the dollar and percent values
    let avgCost = formatDollarAmounts(costPerYear);
    let adminRate = formatPercentages(rateOfAdmission);

    return {
      adminRate,
      avgCost,
      id,
      schoolAttendance,
      schoolCity,
      schoolName,
      schoolWebsite,
      stateFips,
      imgUrl: imgUrls[i],
    };
  });
}
