import { fipsStates } from "../../lib/keyValueData";

// HTML template to populate with the formatted response data from scorecard API
export function basicScorecardTemplate(cardData) {
  const {
    schoolId,
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
  <div id=${schoolId} class="gallery__card-wrapper">
        <div class="gallery__card">
          <div class="card__section card__section-img">
            <img
              class="content__image"
              src=${imgUrl}
            />
          </div>

          <div class="card__section card__section-name">
            <div class="card__content card__content-name">
              <div class="content__title content__title-name">
                ${schoolName}
              </div>
            </div>
          </div>

          <div class="card__section card__section-location">
            <div class="card__content card__content-location">
              <div class="content__data content__data-location">
                ${schoolCity}, ${fipsStates[stateFips]}
              </div>
            </div>
          </div>

          <div class="card__section card__section-facts">
            <div class="card__content card__content-facts">
              <div class="content__title content__title-facts">Attendance:</div>
              <div class="content__data content__data-facts">
                ${schoolAttendance}
              </div>
            </div>
            <div class="card__content card__content-facts">
              <div class="content__title content__title-facts">
                Admission Rate:
              </div>
              <div class="content__data content__data-facts">${adminRate}</div>
            </div>
            <div class="card__content card__content-facts">
              <div class="content__title content__title-facts">
                Average Cost:
              </div>
              <div class="content__data content__data-facts">${avgCost}</div>
            </div>
          </div>
          <div class="card__section card__section-website">
            <div class="card__content card__content-website">
              <div class="content__title content__title-url">Homepage:</div>
              <span class="content__data-website><a class="content__url" href="${schoolWebsite}"
                >${schoolWebsite}</a
              ></span>
            </div>
          </div>
        </div>
      </div>
`;
}
