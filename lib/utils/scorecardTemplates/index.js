"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _basicScorecardTemplate = require("./basicScorecardTemplate");

Object.keys(_basicScorecardTemplate).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _basicScorecardTemplate[key];
    }
  });
});

var _fullScorecardTemplate = require("./fullScorecardTemplate");

Object.keys(_fullScorecardTemplate).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _fullScorecardTemplate[key];
    }
  });
});