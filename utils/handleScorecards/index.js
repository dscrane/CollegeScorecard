function handleScorecards(scorecards, imgArr) {
  // Clean the scorecard data
  const schoolScorecardData = cleanScorecardData(scorecards);
  /* console.log(schoolCardData); */

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

    // Image placeholders to fill out the effect of the cards
    let imgUrl = imgArr[i].urls.small;

    // Convert the formatting of the dollar and percent values
    let avgCost = formatDollarAmounts(costPerYear);
    let adminRate = formatPercentages(rateOfAdmission);

    return {
      adminRate,
      avgCost,
      id,
      imgUrl,
      schoolAttendance,
      schoolCity,
      schoolName,
      schoolWebsite,
      stateFips,
    };
  });
}
