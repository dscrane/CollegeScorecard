import {
  cleanScorecardData,
  formatDollarAmounts,
  formatPercentages,
} from "../../utils";

export function handleScorecards(scorecards, images, test) {
  // Clean the scorecard data
  const schoolScorecardData = cleanScorecardData(scorecards.results);
  /* console.log(schoolCardData); */

  // Set the number of pages returned from API
  const additionalPages =
    scorecards.metadata.total / 8 > 1 ? scorecards.metadata.total / 8 : 0;

  // Image placeholders to fill out the effect of the cards
  const imgUrls = !test
    ? images.data.map((image) => {
        return image.urls.small;
      })
    : images;

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
