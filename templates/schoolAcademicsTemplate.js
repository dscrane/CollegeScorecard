export const schoolAcademicsTemplate = (academicSubsection) => {
  const {
    schoolAdmissionRate,
    schoolAverageACT,
    schoolAverageSAT,
    schoolAccreditor,
    schoolRetentionRate,
    schoolTransferRate,
    schoolCompletionRate,
    schoolOnlineOnly,
    schoolPopularMajors,
  } = academicSubsection;

  return `<div class="scorecard__view scorecard__view-academics">
  <div class="view__wrapper">
    <div class="view__row">
      <div class="view__item view__item-title">
        Admission Rate:
      </div>
      <div class="view__item view__item-content">
        ${schoolAdmissionRate}
      </div>
    </div>
    <div class="view__row">
      <div class="view__item view__item-title">Average SAT Scores:</div>
      <div class="view__item view__item-content">${schoolAverageSAT}</div>
    </div>
    <div class="view__row">
      <div class="view__item view__item-title">Average ACT Scores:</div>
      <div class="view__item view__item-content">${schoolAverageACT}</div>
    </div>
    <div class="view__row">
      <div class="view__item view__item-title">On-Line Only:</div>
      <div class="view__item view__item-content">${schoolOnlineOnly}</div>
    </div>
    <div class="view__row">
      <div class="view__item view__item-title">Completion Rate:</div>
      <div class="view__item view__item-content">${schoolCompletionRate}</div>
    </div>
    <div class="view__row">
      <div class="view__item view__item-title">Retention Rate:</div>
      <div class="view__item view__item-content">${schoolRetentionRate}</div>
    </div>
    <div class="view__row">
      <div class="view__item view__item-title">Transfer Rate:</div>
      <div class="view__item view__item-content">${schoolTransferRate}</div>
    </div>
    <div class="view__row view__row-section">
      <div class="view__item view__item-section">Popular Majors:</div>
      <div class="view__section">
        ${schoolPopularMajors}
      </div>
  </div>
</div>
`;
};
