"use strict";

require("core-js/modules/es.regexp.constructor");

require("core-js/modules/es.regexp.to-string");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatSchoolUrl = formatSchoolUrl;

function formatSchoolUrl(website) {
  const reg_exUrl = new RegExp("www.[a-zA-Z0-9-.]+.[a-zA-Z]{0}"); // console.log(website);

  const firstThreeChrs = website.substring(0, 4); // console.log(firstThreeChrs);

  if (firstThreeChrs === "www.") {
    // console.log("simple Urls: ", website);
    return website;
  } // console.log("simple: ", reg_exUrl.exec(website));


  if (!reg_exUrl.exec(website)) {
    // console.log("simple", `www.${website}`);
    return "www.".concat(website);
  } else {
    // console.log(reg_exUrl.exec(website));
    return reg_exUrl.exec(website);
  }
}