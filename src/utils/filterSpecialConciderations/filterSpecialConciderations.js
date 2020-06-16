const categories = [
  "Asian American or Native American or Pacific Islander Serving Institurion",
  "Alaska Native or Native Hawaiian Serving Institution",
  "Historically Black Instituion",
  "Male Only Institution",
  "Native American (non-tribal) Institution",
  "Predominantly Black Instituion",
  "Tribal College or University",
  "Women's Only Institution",
];

export function filterSpecialConciderations(schoolData) {
  schoolData.map((data, i) => {
    if (data !== 0) {
      return categories[i];
    }
  });
}
