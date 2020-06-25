export const schoolStudentBodyTemplate = (studentLifeSubsection) => {
  const {
    schoolDemoWhite,
    schoolDemoBlack,
    schoolDemoHispanic,
    schoolDemoAsian,
    schoolDemoOther,
    schoolDemoWomen,
    schoolDemoMen,
    schoolPercentFirstGen,
    schoolPercentPartTime,
  } = studentLifeSubsection;
  return `<div class="scorecard__view scorecard__view-student">
    <div class="view__wrapper">
      <div class="view__row">
        <div class="view__item view__item-title">Share of First Generation Students: </div>
        <div class="view__item view__item-content">${schoolPercentFirstGen}</div>
      </div>
      <div class="view__row">
        <div class="view__item view__item-title">Share of Part Time Students:</div>
        <div class="view__item view__item-content">
        ${schoolPercentPartTime}
        </div>
      </div>
      <div class="view__row">
        <div class="view__item view__item-title">Percent Male:</div>
        <div class="view__item view__item-content">${schoolDemoMen}</div>
      </div>
      <div class="view__row">
        <div class="view__item view__item-title">Percent Female:</div>
        <div class="view__item view__item-content">${schoolDemoWomen}</div>
      </div>
      <div class="view__row view__row-section_alt">
        <div class="view__item view__item-section">Demographics:</div>
          <div class="view__section view__section-alt ">
            <div class="section__row">
              <div class="section__item section__item-title">White:</div>
              <div class="section__item section__item-content">${schoolDemoWhite}</div>
            </div>
            <div class="section__row">
              <div class="section__item section__item-title">Black:</div>
              <div class="section__item section__item-content">${schoolDemoBlack}</div>
            </div>
            <div class="section__row">
              <div class="section__item section__item-title">Hispanic:</div>
              <div class="section__item section__item-content">${schoolDemoHispanic}</div>
            </div>
            <div class="section__row">
              <div class="section__item section__item-title">Asian:</div>
              <div class="section__item section__item-content">${schoolDemoAsian}</div>
            </div>
            <div class="section__row">
              <div class="section__item section__item-title">Two+ & Other:</div>
              <div class="section__item section__item-content">${schoolDemoOther}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
`;
};
