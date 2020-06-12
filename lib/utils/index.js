"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _handleScorecards = require("./handleScorecards");

Object.keys(_handleScorecards).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _handleScorecards[key];
    }
  });
});

var _formatNumbers = require("./formatNumbers");

Object.keys(_formatNumbers).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _formatNumbers[key];
    }
  });
});

var _cleanScorecardData = require("./cleanScorecardData");

Object.keys(_cleanScorecardData).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _cleanScorecardData[key];
    }
  });
});

var _displayScorecard = require("./displayScorecard");

Object.keys(_displayScorecard).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _displayScorecard[key];
    }
  });
});

var _scorecardTemplates = require("./scorecardTemplates");

Object.keys(_scorecardTemplates).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _scorecardTemplates[key];
    }
  });
});

var _formatSchoolUrl = require("./formatSchoolUrl");

Object.keys(_formatSchoolUrl).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _formatSchoolUrl[key];
    }
  });
});