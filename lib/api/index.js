"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _scorecardApi = require("./scorecardApi");

Object.keys(_scorecardApi).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _scorecardApi[key];
    }
  });
});

var _unsplashApi = require("./unsplashApi");

Object.keys(_unsplashApi).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _unsplashApi[key];
    }
  });
});

var _images = require("./images");

Object.keys(_images).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _images[key];
    }
  });
});