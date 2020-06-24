export const handleBasicScorecardData = (
  basicResponseData,
  images,
  responseMetadata
) => {
  // Set the number of pages returned from API
  const additionalPages =
    responseMetadata.total / 8 > 1 ? responseMetadata.total / 8 : 0;

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
    let avgCost = formatDollarAmounts(costPerYear);
    let adminRate = formatPercentages(rateOfAdmission);
    let schoolAttendance = formatNumericValues(studentSize);

    return {
      adminRate,
      avgCost,
      schoolAttendance,
      schoolCity,
      schoolName,
      schoolWebsite,
      schoolState: fipsStates[schoolStateId],
      schoolId: id,
      imgUrl: imgUrls[i],
    };
  });

  return { additionalPages, scorecardData };
};
