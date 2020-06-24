export const schoolFinancialTemplate = (financialSubsection) => {
  const {
    schoolTuitionInState,
    schoolTuitionOutOfState,
    schoolCostPerYear,
    schoolDebtAtCompletion,
    schoolFederalLoanRate,
    schoolPellGrantRate,
    schoolPellFederalNumber,
  } = financialSubsection;

  return `
  <div class="scorecard__view scorecard__view-overview">
  <div class="view__wrapper">
    <!-- ---This needs to be worked on display wise to only show a single tuition if there is no difference for in-state vs out-of-state--- -->
    <div class="view__row">
      <div class="view__item view__item-title">
        Tuition (in state):
      </div>
      <div class="view__item view__item-content">
        ${schoolTuitionInState}
      </div>
    </div>
    <div class="view__row">
      <div class="view__item view__item-title">Tuition (out of state):</div>
      <div class="view__item view__item-content">${schoolTuitionOutOfState}</div>
    </div>
    <!-- ---    --- -->
    <div class="view__row">
      <div class="view__item view__item-title">Average Cost:</div>
      <div class="view__item view__item-content">
        ${schoolCostPerYear}
      </div>
    </div>
    <div class="view__row">
      <div class="view__item view__item-title">Average Debt at Completion:</div>
      <div class="view__item view__item-content">${schoolDebtAtCompletion}</div>
    </div>
    <div class="view__row">
      <div class="view__item view__item-title">Federal Loan Rates:</div>
      <div class="view__item view__item-content">${schoolFederalLoanRate}</div>
    </div>
    <div class="view__row">
      <div class="view__item view__item-title">Pell Grant Rate:</div>
      <div class="view__item view__item-content">
        ${schoolPellGrantRate}
      </div>
    </div>
    <div class="view__row">
      <div class="view__item view__item-title">Federal or Pell Grant Rate:</div>
      <div class="view__item view__item-content">
        ${schoolPellFederalNumber}
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
};
