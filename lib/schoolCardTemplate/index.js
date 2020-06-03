// HTML template to populate with the formatted response data from scorecard API
export function schoolCardTemplate(cardData) {
  const {
    imgUrl,
    adminRate,
    avgCost,
    schoolAttendance,
    schoolName,
    schoolCity,
    schoolWebsite,
    stateFips,
  } = cardData;
  return `
  <div class="gallery__card">
    <div class="card__row card__row-title">
      <div class="card__content card__content-name">
        <p id="school_name" class="content__title">
          ${schoolName}
        </p>
      </div>
    </div>
    <div class="card__row card__row-img">
      <img class="card__image" src="${imgUrl}" />
    </div>
    <div class="card__row card__row-content">
      <div class="card__content card__content-info">
        <p id="school_city" class="content__text">
          <span class="content__text-title">City:</span>
          ${schoolCity}
        </p>
        <p id="school_state" class="content__text">
          <span class="content__text-title">State:</span>
          ${fipsArray[stateFips]}
        </p>
      </div>
      <div class="card__content content__quick-facts">
        <p id="school_attendance" class="content__text">
          <span class="content__text-title">Attendance:</span>
          ${schoolAttendance}
        </p>
        <p id="school_diversity" class="content__text">
          <span class="content__text-title">Admission Rate:</span>
          ${adminRate}
        </p>
        <p id="school_ownership" class="content__text">
          <span class="content__text-title">Average Cost:</span>
          ${avgCost}
        </p>
      </div>
    </div>
      <div class="card__row card__row-website>
        <div class="card__content card__content-link">
          <p id="school_website" class="content__text">
          <span class="content__text-title">Homepage:</span>
          <a
            id="school_link"
            class="content__text-link"
            href="${schoolWebsite}"
            >${schoolWebsite}</a
          >
          </p>
        </div>
      </div>
    </div>
  </div>
`;
}
