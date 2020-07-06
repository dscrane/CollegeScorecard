export const filterSpecialConciderations = (schoolConciderations) => {
  const categories = {
    "school.minority_serving.aanipi":
      "Asian American, Native American or Pacific Islander Serving Institution",
    "school.minority_serving.annh":
      "Alaska Native or Native Hawaiian Serving Institution",
    "school.minority_serving.historically_black":
      "Historically Black Instituion",
    "school.minority_serving.nant": "Native American (non-tribal) Institution",
    "school.minority_serving.predominantly_black":
      "Predominantly Black Instituion",
    "school.minority_serving.tribal": "Tribal College or University",
    "school.men_only": "Men's Only Institution",
    "school.women_only": "Women's Only Institution",
    "school.minority_serving.hispanic": "Hispanic Serving Institution",
  };

  const filteredCondiderations = Object.keys(schoolConciderations).filter(
    (key) => schoolConciderations[key] !== 0
  );

  let specialConciderations;

  if (filteredCondiderations.length > 0) {
    specialConciderations = filteredCondiderations.map((concideration) => {
      return `<div class='section__item'>${categories[concideration]}</div>`;
    });
    return specialConciderations.join("");
  } else {
    specialConciderations =
      "<div class='section__item'>No Specific Special Conciderations</div>";
    return specialConciderations;
  }
};
