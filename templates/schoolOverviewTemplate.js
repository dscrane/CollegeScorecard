export const schoolOverviewDisplayTemplate = (overviewSubsection) => {
  const {
    schoolLocal,
    schoolCity,
    schoolOwnership,
    schoolReligion,
    schoolState,
    schoolType,
    schoolWebsite,
    schoolDegreesAwarded,
    schoolBranches,
    schoolMainCampus,
    schoolSpecialConciderations,
  } = overviewSubsection;

  return `
  <div class="scorecard__view scorecard__view-overview">
    <div class="view__wrapper">
      <div class="view__row">
        <div class="view__item view__item-title">
          Location:
        </div>
        <div class="view__item view__item-content">
          ${schoolCity}, ${schoolState}
        </div>
      </div>
      <div class="view__row">
        <div class="view__item view__item-title">Branches:</div>
        <div class="view__item view__item-content">${schoolBranches} ${schoolMainCampus}</div>
      </div>
      <div class="view__row">
        <div class="view__item view__item-title">School Type:</div>
        <div class="view__item view__item-content">
          ${schoolOwnership}, ${schoolType}
        </div>
      </div>
      <div class="view__row">
        <div class="view__item view__item-title">Size & Setting:</div>
        <div class="view__item view__item-content">
          ${schoolLocal}
        </div>
      </div>
      <div class="view__row">
        <div class="view__item view__item-title">Degrees Awarded:</div>
        <div class="view__item view__item-content">${schoolDegreesAwarded}</div>
      </div>
      <div class="view__row">
        <div class="view__item view__item-title">Religious Affiliation:</div>
        <div class="view__item view__item-content">${schoolReligion}</div>
      </div>
      <div class="view__row">
        <div class="view__item view__item-title">School Homepage:</div>
        <div class="view__item view__item-content">
          <a href="${schoolWebsite}">${schoolWebsite}</a>
        </div>
      </div>
      <div class="view__row view__row-section">
        <div class="view__item view__item-section">Special Conciderations:</div>
        <div class="view__section">
          ${schoolSpecialConciderations}
        </div>
      </div>
    </div>
  </div>
`;
};
