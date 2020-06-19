import { cleanScorecardData, filterSpecialConciderations } from "../../lib";

export function handleOverviewSubsection(overviewResponse) {
  const overviewData = cleanScorecardData(overviewResponse);

  const overviewSubsection = overviewData.map((data) => {
    const {
      id,
      "school.school_url": schoolWebsite,
      "school.school_fips": schoolState,
      "school.city": schoolCity,
      "school.ownership": schoolOwnership,
      "school.religious_affiliation": schoolReligion,
      "school.institutional_characteristics.level": schoolType,
      ...minorityServing
    } = data;

    const specialConciderations = filterSpecialConciderations(minorityServing);

    return {
      id,
      schoolWebsite,
      schoolState,
      schoolCity,
      schoolOwnership,
      schoolReligion,
      schoolType,
      specialConciderations,
    };
  });

  return overviewSubsection;
}
