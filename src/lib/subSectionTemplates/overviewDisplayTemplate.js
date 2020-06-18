export function overviewDisplayTemplate(/* overviewData */) {
  return `
  <div class="scorecard__view scorecard__view-overview">
    <div class="view__wrapper">
      <div class="view__row">
        <div class="view__item view__item-title">
          Location:
        </div>
        <div class="view__item view__item-content">
          Boston, MA
        </div>
      </div>
      <div class="view__row">
        <div class="view__item view__item-title">Branches:</div>
        <div class="view__item view__item-content">3 -- Main Branch</div>
      </div>
      <div class="view__row">
        <div class="view__item view__item-title">School Type:</div>
        <div class="view__item view__item-content">
          Public 4 Year
        </div>
      </div>
      <div class="view__row">
        <div class="view__item view__item-title">Degrees Awarded:</div>
        <div class="view__item view__item-content">Associate's, Bachelor's and Graduate Degrees</div>
      </div>
      <div class="view__row">
        <div class="view__item view__item-title">Religious Affiliation:</div>
        <div class="view__item view__item-content">Not Applicable</div>
      </div>
      <div class="view__row">
        <div class="view__item view__item-title">School Homepage:</div>
        <div class="view__item view__item-content">
          <a href="#">www.fakeschoolsite.com</a>
        </div>
      </div>
      <div class="view__row view__row-section">
        <div class="view__item view__item-section">Special Conciderations:</div>
        <div class="view__section">
          <div class="section__item">Women's Only Institution</div>
          <div class="section__item">Historically Black Institution</div>
          <div class="section__item">Predominantly Black Instituion</div>
        </div>
      </div>
    </div>
  </div>
`;
}
