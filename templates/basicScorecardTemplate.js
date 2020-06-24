export const basicScorecardTemplate = (cardData) => {
  const {
    schoolId,
    imgUrl,
    adminRate,
    avgCost,
    schoolAttendance,
    schoolName,
    schoolCity,
    schoolWebsite,
    schoolState,
  } = cardData;
  return `
  <div id=${schoolId} class="gallery__card-wrapper">
    <div class="gallery__card">
      <div class="card__section card__section-img">
        <img
          class="card__content-image"
          src=${imgUrl}
        />
      </div>

      <div class="card__section card__section-name">
        <div class="card__content card__content-name">
          <div class="card__content-title card__content-title-name">
            ${schoolName}
          </div>
        </div>
      </div>

      <div class="card__section card__section-location">
        <div class="card__content card__content-location">
          <div class="card__content-data card__content-data_location">
            ${schoolCity}, ${schoolState}
          </div>
        </div>
      </div>

      <div class="card__section card__section-facts">
        <div class="card__content card__content-facts">
          <div class="card__content-title card__content-title_facts">Attendance:</div>
          <div class="card__content-data card__content-data_facts">
            ${schoolAttendance}
          </div>
        </div>
        <div class="card__content card__content-facts">
          <div class="card__content-title card__content-title_facts">
            Admission Rate:
          </div>
          <div class="card__content-data card__content-data_facts">${adminRate}</div>
        </div>
        <div class="card__content card__content-facts">
          <div class="card__content-title card__content-title_facts">
            Average Cost:
          </div>
          <div class="card__content-data card__content-data_facts">${avgCost}</div>
        </div>
      </div>
      <div class="card__section card__section-website">
        <div class="card__content card__content-website">
          <div class="card__content-title card__content-title_url">Homepage:</div>
          <span class="card__content-data-website><a class="card__content-url" href="${schoolWebsite}"
            >${schoolWebsite}</a
          ></span>
        </div>
      </div>
    </div>
  </div>
`;
};
