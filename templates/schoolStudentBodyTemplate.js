export const schoolStudentBodyDisplayTemplate = (studentLifeSubsection) => {
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
  <div class="view__wrapper view__wrapper-alt">
    <div class="view__column">
      <div class="column__row">
        <div class="view__item view__item-title view__item-title_alt">Share of First Generation Students: </div>
        <div class="view__item view__item-content view__item-content_alt">${schoolPercentFirstGen}</div>
      </div>
      <div class="column__row">
        <div class="view__item view__item-title view__item-title_alt">Share of Part Time Students:</div>
        <div class="view__item view__item-content view__item-content_alt">
        ${schoolPercentPartTime}
        </div>
      </div>
      <div class="column__row">
        <div class="view__item view__item-title view__item-title_alt">Retention Rate:</div>
        <div class="view__item view__item-content view__item-content_alt">xx%</div>
      </div>
      <div class="column__row">
        <div class="view__item view__item-title view__item-title_alt">Completion Rate:</div>
        <div class="view__item view__item-content view__item-content_alt">75%</div>
      </div>
      <div class="column__row">
        <div class="view__item view__item-title view__item-title_alt">Transfer Rate:</div>
        <div class="view__item view__item-content view__item-content_alt">20%</div>
      </div>
      <div class="column__row">
        <div class="view__item view__item-title view__item-title_alt">On-Line Only:</div>
        <div class="view__item view__item-content view__item-content_alt">No</div>
      </div>
    </div>
    <div class="view__column view__column-section">
      <div class="column__row">
        <div class="view__item view__item-title view__item-title_header">Demographics:</div>
      </div>
      <div class="column__row">
        <div class="view__section view__section-column">
          <div class="section__row">
            <div class="section__item section__item-alt section__item-title">Percent Male:</div>
            <div class="section__item section__item-alt section__item-content">${schoolDemoMen}</div>
          </div>
          <div class="section__row">
            <div class="section__item section__item-alt section__item-title">Percent Female:</div>
            <div class="section__item section__item-alt section__item-content">${schoolDemoWomen}</div>
          </div>
          <div class="section__row">
            <div class="section__item section__item-alt section__item-title">White:</div>
            <div class="section__item section__item-alt section__item-content">${schoolDemoWhite}</div>
          </div>
          <div class="section__row">
            <div class="section__item section__item-alt section__item-title">Black:</div>
            <div class="section__item section__item-alt section__item-content">${schoolDemoBlack}</div>
          </div>
          <div class="section__row">
            <div class="section__item section__item-alt section__item-title">Hispanic:</div>
            <div class="section__item section__item-alt section__item-content">${schoolDemoHispanic}</div>
          </div>
          <div class="section__row">
            <div class="section__item section__item-alt section__item-title">Asian:</div>
            <div class="section__item section__item-alt section__item-content">${schoolDemoAsian}</div>
          </div>
          <div class="section__row">
            <div class="section__item section__item-alt section__item-title">Two+ & Other:</div>
            <div class="section__item section__item-alt section__item-content">${schoolDemoOther}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
`;
};
