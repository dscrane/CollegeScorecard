"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fipsObject = require("./fipsObject");

Object.keys(_fipsObject).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _fipsObject[key];
    }
  });
});

var _carnegieClassification = require("./carnegieClassification");

Object.keys(_carnegieClassification).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _carnegieClassification[key];
    }
  });
});

var _religiousAffiliation = require("./religiousAffiliation");

Object.keys(_religiousAffiliation).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _religiousAffiliation[key];
    }
  });
});