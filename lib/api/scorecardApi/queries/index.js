"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _basicScorecardQuery = require("./basicScorecardQuery");

Object.keys(_basicScorecardQuery).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _basicScorecardQuery[key];
    }
  });
});

var _fullScorecardQuery = require("./fullScorecardQuery");

Object.keys(_fullScorecardQuery).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _fullScorecardQuery[key];
    }
  });
});