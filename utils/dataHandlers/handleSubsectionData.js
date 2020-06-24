export const handleSubsectionData = (subsectionResponse, query) => {
  if (query === "schoolOverview") {
    const {
      "school.carnegie_size_setting": schoolCarnegieCode,
      "school.school_url": schoolWebsite,
      "school.state_fips": schoolStateId,
      "school.city": schoolCity,
      "school.branches": schoolBranches,
      "school.main_campus": schoolMainCampusCode,
      "school.ownership": schoolOwnershipCode,
      "school.religious_affiliation": schoolReligion,
      "school.degrees_awarded.predominant": degreesAwardedCode,
      "school.institutional_characteristics.level": schoolCharacteristicCode,
      ...minorityServing
    } = subsectionResponse;

    const schoolSpecialConciderations = filterSpecialConciderations(
      minorityServing
    );

    const schoolLocal = carnegieClassification[schoolCarnegieCode]
      .split(",")
      .slice(1)
      .join(" -- ");

    return {
      schoolWebsite,
      schoolCity,
      schoolOwnership: schoolOwnershipCodes[schoolOwnershipCode],
      schoolBranches,
      schoolMainCampus: schoolMainCampusCode ? "-- Main Campus" : "",
      schoolReligion,
      schoolType: schoolCharacteristicCodes[schoolCharacteristicCode],
      schoolLocal,
      schoolDegreesAwarded: prodominantDegreesAwarded[degreesAwardedCode],
      schoolSpecialConciderations,
      schoolState: fipsStates[schoolStateId],
    };
  }

  if (query === "schoolAcademics") {
    const {
      "school.accreditor": schoolAccreditor,
      "school.online_only": onlineOnly,
      "latest.admissions.admission_rate.overall": schoolAdmission,
      "latest.admissions.sat_scores.average.overall": schoolAverageSAT,
      "latest.admissions.act_scores.midpoint.cumulative": schoolAverageACT,
      "latest.student.retention_rate.four_year.full_time_pooled": schoolRetention,
      "latest.completion.completion_rate_4yr_100nt": schoolCompletion,
      "latest.completion.transfer_rate.4yr.full_time": schoolTransfer,
      ...schoolMajors
    } = subsectionResponse;

    console.log(schoolMajors);

    const schoolPopularMajors = calculatePopularMajors(schoolMajors);

    /* --- NEEDS TO BE REFACTORED AT SOMEPOINT --- */
    const schoolRetentionRate = formatPercentages(schoolRetention);
    const schoolCompletionRate = formatPercentages(schoolCompletion);
    const schoolTransferRate = formatPercentages(schoolTransfer);
    const schoolAdmissionRate = formatPercentages(schoolAdmission);
    /* ---    --- */

    const schoolOnlineOnly = onlineOnly === 0 ? "No" : "Yes";

    return {
      schoolAdmissionRate,
      schoolAverageACT,
      schoolAverageSAT,
      schoolAccreditor,
      schoolRetentionRate,
      schoolTransferRate,
      schoolCompletionRate,
      schoolOnlineOnly,
      schoolPopularMajors,
    };
  }

  if (query === "schoolStudentBody") {
    const {
      "latest.student.share_firstgeneration": percentFirstGen,
      "latest.student.part_time_share": percentPartTime,
      "latest.student.demographics.race_ethnicity.white": demoWhite,
      "latest.student.demographics.race_ethnicity.black": demoBlack,
      "latest.student.demographics.race_ethnicity.hispanic": demoHispanic,
      "latest.student.demographics.race_ethnicity.asian": demoAsian,
      "latest.student.demographics.race_ethnicity.aian": demoAmericanIndian,
      "latest.student.demographics.race_ethnicity.nhpi": demoPacificIslander,
      "latest.student.demographics.race_ethnicity.two_or_more": demoTwoOrMore,
      "latest.student.demographics.women": demoWomen,
      "latest.student.demographics.men": demoMen,
    } = subsectionResponse;

    const demoOther = demoAmericanIndian + demoPacificIslander + demoTwoOrMore;

    /* --- NEEDS TO BE REFACTORED AT SOMEPOINT */
    const schoolDemoWhite = formatPercentages(demoWhite);
    const schoolDemoBlack = formatPercentages(demoBlack);
    const schoolDemoHispanic = formatPercentages(demoHispanic);
    const schoolDemoAsian = formatPercentages(demoAsian);
    const schoolDemoOther = formatPercentages(demoOther);
    const schoolDemoWomen = formatPercentages(demoWomen);
    const schoolDemoMen = formatPercentages(demoMen);
    const schoolPercentPartTime = formatPercentages(percentPartTime);
    const schoolPercentFirstGen = formatPercentages(percentFirstGen);

    /* ---    --- */

    return {
      schoolDemoOther,
      schoolDemoWhite,
      schoolDemoBlack,
      schoolDemoHispanic,
      schoolDemoAsian,
      schoolDemoWomen,
      schoolDemoMen,
      schoolPercentFirstGen,
      schoolPercentPartTime,
    };
  }
  if (query === "schoolFinancial") {
    const {
      "latest.cost.tuition.in_state": tuitionInState,
      "latest.cost.tuition.out_of_state": tuitionOutOfState,
      "latest.cost.attendance.academic_year": costPerYear,
      "latest.aid.federal_loan_rate": federalLoanRate,
      "latest.aid.median_debt.completers.overall": debtAtCompletion,
      "latest.aid.pell_grant_rate": pellGrantRate,
      "latest.student.undergrads_with_pell_grant_or_federal_student_loan": pellFederalRate,
    } = subsectionResponse;

    const schoolTuitionInState = formatDollarAmounts(tuitionInState);
    const schoolTuitionOutOfState = formatDollarAmounts(tuitionOutOfState);
    const schoolCostPerYear = formatDollarAmounts(costPerYear);
    const schoolDebtAtCompletion = formatDollarAmounts(debtAtCompletion);

    const schoolFederalLoanRate = formatPercentages(federalLoanRate);
    const schoolPellGrantRate = formatPercentages(pellGrantRate);

    const schoolPellFederalNumber = formatNumericValues(pellFederalRate);

    return {
      schoolTuitionInState,
      schoolTuitionOutOfState,
      schoolCostPerYear,
      schoolDebtAtCompletion,
      schoolFederalLoanRate,
      schoolPellGrantRate,
      schoolPellFederalNumber,
    };
  }
};
