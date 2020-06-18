export function financialDisplayTemplate() {
  return `
  <div class="scorecard__view scorecard__view-overview">
  <div class="view__wrapper">
    <div class="view__row">
      <div class="view__item view__item-title">
        Tuition (in state):
      </div>
      <div class="view__item view__item-content">
        $38,000
      </div>
    </div>
    <div class="view__row">
      <div class="view__item view__item-title">Tuition (out of state):</div>
      <div class="view__item view__item-content">$45,000</div>
    </div>
    <div class="view__row">
      <div class="view__item view__item-title">Average Cost:</div>
      <div class="view__item view__item-content">
        $60,000
      </div>
    </div>
    <div class="view__row">
      <div class="view__item view__item-title">Federal Loan Rates:</div>
      <div class="view__item view__item-content">60%</div>
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
