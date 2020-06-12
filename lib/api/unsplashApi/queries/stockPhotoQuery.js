"use strict";

require("core-js/modules/es.promise");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stockPhotoQuery = stockPhotoQuery;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import { unsplashKey } from "../../../ignore/keys";
const unsplashUrl = "https://api.unsplash.com/photos/";
const unsplashKey = "8xSG2SnwEoxSOvi2MsZzpqDg4fgg8tI-8siiSI-S_QE";
const unsplashParams = "collections=9576801&orientation=landscape&count=16";

function stockPhotoQuery() {
  const stockPhotoUrl = "".concat(unsplashUrl, "?").concat(unsplashParams, "&client_id=").concat(unsplashKey);
  console.log(stockPhotoUrl);
  const stockPhotoPromise = new Promise((resolve, reject) => {
    _axios.default.get(stockPhotoUrl).then(stockPhotoResp => {
      console.log("stockPhotoPromise -- success");
      resolve(stockPhotoResp.data);
    }).catch(function (error) {
      console.log("stockPhotoPromise -- error");
      reject(error.response);
    });
  });
  return stockPhotoPromise;
}