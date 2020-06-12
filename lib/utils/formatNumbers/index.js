"use strict";

require("core-js/modules/es.number.to-fixed");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.replace");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatDollarAmounts = formatDollarAmounts;
exports.formatPercentages = formatPercentages;

// Formats the integer dollar amounts to display like currencies
function formatDollarAmounts(price) {
  // Stops the format change if the cost is an undisclosed value
  if (price === "Undisclosed") {
    return price;
  }

  const currencyFormat = price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  return "$".concat(currencyFormat);
} // Formats the admission rate decimal value to a percentage


function formatPercentages(percent) {
  // Stops the format change if the admission rate is an undisclosed value
  if (percent === "Undisclosed") {
    return percent;
  }

  return "".concat((percent * 100).toFixed(1), "%");
}