"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.basicScorecardTemplate = basicScorecardTemplate;

var _fipsObject = require("../../lib/keyValueData/fipsObject");

// HTML template to populate with the formatted response data from scorecard API
function basicScorecardTemplate(cardData) {
  const {
    imgUrl,
    adminRate,
    avgCost,
    schoolAttendance,
    schoolName,
    schoolCity,
    schoolWebsite,
    stateFips
  } = cardData;
  return "\n  <div class=\"gallery__card-wrapper\">\n        <div class=\"gallery__card\">\n          <div class=\"card__section card__section-img\">\n            <img\n              class=\"content__image\"\n              src=".concat(imgUrl, "\n            />\n          </div>\n\n          <div class=\"card__section card__section-name\">\n            <div class=\"card__content card__content-name\">\n              <div class=\"content__title content__title-name\">\n                ").concat(schoolName, "\n              </div>\n            </div>\n          </div>\n\n          <div class=\"card__section card__section-location\">\n            <div class=\"card__content card__content-location\">\n              <div class=\"content__data content__data-location\">\n                ").concat(schoolCity, ", ").concat(_fipsObject.fipsStates[stateFips], "\n              </div>\n            </div>\n          </div>\n\n          <div class=\"card__section card__section-facts\">\n            <div class=\"card__content card__content-facts\">\n              <div class=\"content__title content__title-facts\">Attendance:</div>\n              <div class=\"content__data content__data-facts\">\n                ").concat(schoolAttendance, "\n              </div>\n            </div>\n            <div class=\"card__content card__content-facts\">\n              <div class=\"content__title content__title-facts\">\n                Admission Rate:\n              </div>\n              <div class=\"content__data content__data-facts\">").concat(adminRate, "</div>\n            </div>\n            <div class=\"card__content card__content-facts\">\n              <div class=\"content__title content__title-facts\">\n                Average Cost:\n              </div>\n              <div class=\"content__data content__data-facts\">").concat(avgCost, "</div>\n            </div>\n          </div>\n          <div class=\"card__section card__section-website\">\n            <div class=\"card__content card__content-website\">\n              <div class=\"content__title content__title-url\">Homepage:</div>\n              <span class=\"content__data-website><a class=\"content__url\" href=\"").concat(schoolWebsite, "\"\n                >").concat(schoolWebsite, "</a\n              ></span>\n            </div>\n          </div>\n        </div>\n      </div>\n");
}