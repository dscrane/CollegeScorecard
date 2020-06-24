export const fullScorecardTemplate = (scorecardDisplay) => {
  const {
    schoolId,
    schoolName,
    imgUrl,
    defaultSubsectionDisplay,
  } = scorecardDisplay;
  return `
  <i class="material-icons md-light material__icon-close">close</i>
  <div id=${schoolId} class="modal__card">
  <div class="modal__card-wrapper">
    <div class="modal__section modal__section-name">
      <div class="modal__content modal__content-name">
        <div class="content__title content__title-name">
          ${schoolName}
        </div>
      </div>
    </div>

    <div class="modal__section modal__section-image">
      <div class="modal__content modal__content-image">
        <img
          class="content__image"
          src=${imgUrl}
        />
      </div>
    </div>

    <div class="modal__section modal__section-headings">
      <div class="modal__content modal__content-headings">
        <div
          id="schoolOverview"
          class="content__heading content__heading-left content__heading-active"
          data-tab="0"
        >
          Overview
        </div>
        <div id="schoolAcademics" class="content__heading" data-tab="1">
          Academics
        </div>
        <div id="schoolStudentBody" class="content__heading" data-tab="2">
          Student Body
        </div>
        <div id="schoolFinancial" class="content__heading content__heading-right" data-tab="3">
          Finances
        </div>
      </div>
    </div>

    <div class="modal__section modal__section-facts">
      <!-- Subheading display information --> 
      ${defaultSubsectionDisplay}
    </div>
  </div>
</div>
`;
};
