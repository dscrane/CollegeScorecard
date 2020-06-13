/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./documentation/ignore/keys.js":
/*!**************************************!*\
  !*** ./documentation/ignore/keys.js ***!
  \**************************************/
/*! exports provided: SCORECARDKEY, UNSPLASHKEY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SCORECARDKEY\", function() { return SCORECARDKEY; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UNSPLASHKEY\", function() { return UNSPLASHKEY; });\nvar SCORECARDKEY = \"8nR6JMFPRqJzkksBe7V4aD6wITl4MOWZvcIdgL1b\";\nvar UNSPLASHKEY = \"8xSG2SnwEoxSOvi2MsZzpqDg4fgg8tI-8siiSI-S_QE\";\n\n//# sourceURL=webpack:///./documentation/ignore/keys.js?");

/***/ }),

/***/ "./node_modules/axios/index.js":
/*!*************************************!*\
  !*** ./node_modules/axios/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./lib/axios */ \"./node_modules/axios/lib/axios.js\");\n\n//# sourceURL=webpack:///./node_modules/axios/index.js?");

/***/ }),

/***/ "./node_modules/axios/lib/adapters/xhr.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/adapters/xhr.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ./../utils */ \"./node_modules/axios/lib/utils.js\");\nvar settle = __webpack_require__(/*! ./../core/settle */ \"./node_modules/axios/lib/core/settle.js\");\nvar buildURL = __webpack_require__(/*! ./../helpers/buildURL */ \"./node_modules/axios/lib/helpers/buildURL.js\");\nvar buildFullPath = __webpack_require__(/*! ../core/buildFullPath */ \"./node_modules/axios/lib/core/buildFullPath.js\");\nvar parseHeaders = __webpack_require__(/*! ./../helpers/parseHeaders */ \"./node_modules/axios/lib/helpers/parseHeaders.js\");\nvar isURLSameOrigin = __webpack_require__(/*! ./../helpers/isURLSameOrigin */ \"./node_modules/axios/lib/helpers/isURLSameOrigin.js\");\nvar createError = __webpack_require__(/*! ../core/createError */ \"./node_modules/axios/lib/core/createError.js\");\n\nmodule.exports = function xhrAdapter(config) {\n  return new Promise(function dispatchXhrRequest(resolve, reject) {\n    var requestData = config.data;\n    var requestHeaders = config.headers;\n\n    if (utils.isFormData(requestData)) {\n      delete requestHeaders['Content-Type']; // Let the browser set it\n    }\n\n    var request = new XMLHttpRequest();\n\n    // HTTP basic authentication\n    if (config.auth) {\n      var username = config.auth.username || '';\n      var password = config.auth.password || '';\n      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);\n    }\n\n    var fullPath = buildFullPath(config.baseURL, config.url);\n    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);\n\n    // Set the request timeout in MS\n    request.timeout = config.timeout;\n\n    // Listen for ready state\n    request.onreadystatechange = function handleLoad() {\n      if (!request || request.readyState !== 4) {\n        return;\n      }\n\n      // The request errored out and we didn't get a response, this will be\n      // handled by onerror instead\n      // With one exception: request that using file: protocol, most browsers\n      // will return status as 0 even though it's a successful request\n      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {\n        return;\n      }\n\n      // Prepare the response\n      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;\n      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;\n      var response = {\n        data: responseData,\n        status: request.status,\n        statusText: request.statusText,\n        headers: responseHeaders,\n        config: config,\n        request: request\n      };\n\n      settle(resolve, reject, response);\n\n      // Clean up request\n      request = null;\n    };\n\n    // Handle browser request cancellation (as opposed to a manual cancellation)\n    request.onabort = function handleAbort() {\n      if (!request) {\n        return;\n      }\n\n      reject(createError('Request aborted', config, 'ECONNABORTED', request));\n\n      // Clean up request\n      request = null;\n    };\n\n    // Handle low level network errors\n    request.onerror = function handleError() {\n      // Real errors are hidden from us by the browser\n      // onerror should only fire if it's a network error\n      reject(createError('Network Error', config, null, request));\n\n      // Clean up request\n      request = null;\n    };\n\n    // Handle timeout\n    request.ontimeout = function handleTimeout() {\n      var timeoutErrorMessage = 'timeout of ' + config.timeout + 'ms exceeded';\n      if (config.timeoutErrorMessage) {\n        timeoutErrorMessage = config.timeoutErrorMessage;\n      }\n      reject(createError(timeoutErrorMessage, config, 'ECONNABORTED',\n        request));\n\n      // Clean up request\n      request = null;\n    };\n\n    // Add xsrf header\n    // This is only done if running in a standard browser environment.\n    // Specifically not if we're in a web worker, or react-native.\n    if (utils.isStandardBrowserEnv()) {\n      var cookies = __webpack_require__(/*! ./../helpers/cookies */ \"./node_modules/axios/lib/helpers/cookies.js\");\n\n      // Add xsrf header\n      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?\n        cookies.read(config.xsrfCookieName) :\n        undefined;\n\n      if (xsrfValue) {\n        requestHeaders[config.xsrfHeaderName] = xsrfValue;\n      }\n    }\n\n    // Add headers to the request\n    if ('setRequestHeader' in request) {\n      utils.forEach(requestHeaders, function setRequestHeader(val, key) {\n        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {\n          // Remove Content-Type if data is undefined\n          delete requestHeaders[key];\n        } else {\n          // Otherwise add header to the request\n          request.setRequestHeader(key, val);\n        }\n      });\n    }\n\n    // Add withCredentials to request if needed\n    if (!utils.isUndefined(config.withCredentials)) {\n      request.withCredentials = !!config.withCredentials;\n    }\n\n    // Add responseType to request if needed\n    if (config.responseType) {\n      try {\n        request.responseType = config.responseType;\n      } catch (e) {\n        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.\n        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.\n        if (config.responseType !== 'json') {\n          throw e;\n        }\n      }\n    }\n\n    // Handle progress if needed\n    if (typeof config.onDownloadProgress === 'function') {\n      request.addEventListener('progress', config.onDownloadProgress);\n    }\n\n    // Not all browsers support upload events\n    if (typeof config.onUploadProgress === 'function' && request.upload) {\n      request.upload.addEventListener('progress', config.onUploadProgress);\n    }\n\n    if (config.cancelToken) {\n      // Handle cancellation\n      config.cancelToken.promise.then(function onCanceled(cancel) {\n        if (!request) {\n          return;\n        }\n\n        request.abort();\n        reject(cancel);\n        // Clean up request\n        request = null;\n      });\n    }\n\n    if (requestData === undefined) {\n      requestData = null;\n    }\n\n    // Send the request\n    request.send(requestData);\n  });\n};\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/adapters/xhr.js?");

/***/ }),

/***/ "./node_modules/axios/lib/axios.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/axios.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ./utils */ \"./node_modules/axios/lib/utils.js\");\nvar bind = __webpack_require__(/*! ./helpers/bind */ \"./node_modules/axios/lib/helpers/bind.js\");\nvar Axios = __webpack_require__(/*! ./core/Axios */ \"./node_modules/axios/lib/core/Axios.js\");\nvar mergeConfig = __webpack_require__(/*! ./core/mergeConfig */ \"./node_modules/axios/lib/core/mergeConfig.js\");\nvar defaults = __webpack_require__(/*! ./defaults */ \"./node_modules/axios/lib/defaults.js\");\n\n/**\n * Create an instance of Axios\n *\n * @param {Object} defaultConfig The default config for the instance\n * @return {Axios} A new instance of Axios\n */\nfunction createInstance(defaultConfig) {\n  var context = new Axios(defaultConfig);\n  var instance = bind(Axios.prototype.request, context);\n\n  // Copy axios.prototype to instance\n  utils.extend(instance, Axios.prototype, context);\n\n  // Copy context to instance\n  utils.extend(instance, context);\n\n  return instance;\n}\n\n// Create the default instance to be exported\nvar axios = createInstance(defaults);\n\n// Expose Axios class to allow class inheritance\naxios.Axios = Axios;\n\n// Factory for creating new instances\naxios.create = function create(instanceConfig) {\n  return createInstance(mergeConfig(axios.defaults, instanceConfig));\n};\n\n// Expose Cancel & CancelToken\naxios.Cancel = __webpack_require__(/*! ./cancel/Cancel */ \"./node_modules/axios/lib/cancel/Cancel.js\");\naxios.CancelToken = __webpack_require__(/*! ./cancel/CancelToken */ \"./node_modules/axios/lib/cancel/CancelToken.js\");\naxios.isCancel = __webpack_require__(/*! ./cancel/isCancel */ \"./node_modules/axios/lib/cancel/isCancel.js\");\n\n// Expose all/spread\naxios.all = function all(promises) {\n  return Promise.all(promises);\n};\naxios.spread = __webpack_require__(/*! ./helpers/spread */ \"./node_modules/axios/lib/helpers/spread.js\");\n\nmodule.exports = axios;\n\n// Allow use of default import syntax in TypeScript\nmodule.exports.default = axios;\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/axios.js?");

/***/ }),

/***/ "./node_modules/axios/lib/cancel/Cancel.js":
/*!*************************************************!*\
  !*** ./node_modules/axios/lib/cancel/Cancel.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/**\n * A `Cancel` is an object that is thrown when an operation is canceled.\n *\n * @class\n * @param {string=} message The message.\n */\nfunction Cancel(message) {\n  this.message = message;\n}\n\nCancel.prototype.toString = function toString() {\n  return 'Cancel' + (this.message ? ': ' + this.message : '');\n};\n\nCancel.prototype.__CANCEL__ = true;\n\nmodule.exports = Cancel;\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/cancel/Cancel.js?");

/***/ }),

/***/ "./node_modules/axios/lib/cancel/CancelToken.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/cancel/CancelToken.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar Cancel = __webpack_require__(/*! ./Cancel */ \"./node_modules/axios/lib/cancel/Cancel.js\");\n\n/**\n * A `CancelToken` is an object that can be used to request cancellation of an operation.\n *\n * @class\n * @param {Function} executor The executor function.\n */\nfunction CancelToken(executor) {\n  if (typeof executor !== 'function') {\n    throw new TypeError('executor must be a function.');\n  }\n\n  var resolvePromise;\n  this.promise = new Promise(function promiseExecutor(resolve) {\n    resolvePromise = resolve;\n  });\n\n  var token = this;\n  executor(function cancel(message) {\n    if (token.reason) {\n      // Cancellation has already been requested\n      return;\n    }\n\n    token.reason = new Cancel(message);\n    resolvePromise(token.reason);\n  });\n}\n\n/**\n * Throws a `Cancel` if cancellation has been requested.\n */\nCancelToken.prototype.throwIfRequested = function throwIfRequested() {\n  if (this.reason) {\n    throw this.reason;\n  }\n};\n\n/**\n * Returns an object that contains a new `CancelToken` and a function that, when called,\n * cancels the `CancelToken`.\n */\nCancelToken.source = function source() {\n  var cancel;\n  var token = new CancelToken(function executor(c) {\n    cancel = c;\n  });\n  return {\n    token: token,\n    cancel: cancel\n  };\n};\n\nmodule.exports = CancelToken;\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/cancel/CancelToken.js?");

/***/ }),

/***/ "./node_modules/axios/lib/cancel/isCancel.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/cancel/isCancel.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function isCancel(value) {\n  return !!(value && value.__CANCEL__);\n};\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/cancel/isCancel.js?");

/***/ }),

/***/ "./node_modules/axios/lib/core/Axios.js":
/*!**********************************************!*\
  !*** ./node_modules/axios/lib/core/Axios.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ./../utils */ \"./node_modules/axios/lib/utils.js\");\nvar buildURL = __webpack_require__(/*! ../helpers/buildURL */ \"./node_modules/axios/lib/helpers/buildURL.js\");\nvar InterceptorManager = __webpack_require__(/*! ./InterceptorManager */ \"./node_modules/axios/lib/core/InterceptorManager.js\");\nvar dispatchRequest = __webpack_require__(/*! ./dispatchRequest */ \"./node_modules/axios/lib/core/dispatchRequest.js\");\nvar mergeConfig = __webpack_require__(/*! ./mergeConfig */ \"./node_modules/axios/lib/core/mergeConfig.js\");\n\n/**\n * Create a new instance of Axios\n *\n * @param {Object} instanceConfig The default config for the instance\n */\nfunction Axios(instanceConfig) {\n  this.defaults = instanceConfig;\n  this.interceptors = {\n    request: new InterceptorManager(),\n    response: new InterceptorManager()\n  };\n}\n\n/**\n * Dispatch a request\n *\n * @param {Object} config The config specific for this request (merged with this.defaults)\n */\nAxios.prototype.request = function request(config) {\n  /*eslint no-param-reassign:0*/\n  // Allow for axios('example/url'[, config]) a la fetch API\n  if (typeof config === 'string') {\n    config = arguments[1] || {};\n    config.url = arguments[0];\n  } else {\n    config = config || {};\n  }\n\n  config = mergeConfig(this.defaults, config);\n\n  // Set config.method\n  if (config.method) {\n    config.method = config.method.toLowerCase();\n  } else if (this.defaults.method) {\n    config.method = this.defaults.method.toLowerCase();\n  } else {\n    config.method = 'get';\n  }\n\n  // Hook up interceptors middleware\n  var chain = [dispatchRequest, undefined];\n  var promise = Promise.resolve(config);\n\n  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {\n    chain.unshift(interceptor.fulfilled, interceptor.rejected);\n  });\n\n  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {\n    chain.push(interceptor.fulfilled, interceptor.rejected);\n  });\n\n  while (chain.length) {\n    promise = promise.then(chain.shift(), chain.shift());\n  }\n\n  return promise;\n};\n\nAxios.prototype.getUri = function getUri(config) {\n  config = mergeConfig(this.defaults, config);\n  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\\?/, '');\n};\n\n// Provide aliases for supported request methods\nutils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {\n  /*eslint func-names:0*/\n  Axios.prototype[method] = function(url, config) {\n    return this.request(utils.merge(config || {}, {\n      method: method,\n      url: url\n    }));\n  };\n});\n\nutils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {\n  /*eslint func-names:0*/\n  Axios.prototype[method] = function(url, data, config) {\n    return this.request(utils.merge(config || {}, {\n      method: method,\n      url: url,\n      data: data\n    }));\n  };\n});\n\nmodule.exports = Axios;\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/core/Axios.js?");

/***/ }),

/***/ "./node_modules/axios/lib/core/InterceptorManager.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/core/InterceptorManager.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ./../utils */ \"./node_modules/axios/lib/utils.js\");\n\nfunction InterceptorManager() {\n  this.handlers = [];\n}\n\n/**\n * Add a new interceptor to the stack\n *\n * @param {Function} fulfilled The function to handle `then` for a `Promise`\n * @param {Function} rejected The function to handle `reject` for a `Promise`\n *\n * @return {Number} An ID used to remove interceptor later\n */\nInterceptorManager.prototype.use = function use(fulfilled, rejected) {\n  this.handlers.push({\n    fulfilled: fulfilled,\n    rejected: rejected\n  });\n  return this.handlers.length - 1;\n};\n\n/**\n * Remove an interceptor from the stack\n *\n * @param {Number} id The ID that was returned by `use`\n */\nInterceptorManager.prototype.eject = function eject(id) {\n  if (this.handlers[id]) {\n    this.handlers[id] = null;\n  }\n};\n\n/**\n * Iterate over all the registered interceptors\n *\n * This method is particularly useful for skipping over any\n * interceptors that may have become `null` calling `eject`.\n *\n * @param {Function} fn The function to call for each interceptor\n */\nInterceptorManager.prototype.forEach = function forEach(fn) {\n  utils.forEach(this.handlers, function forEachHandler(h) {\n    if (h !== null) {\n      fn(h);\n    }\n  });\n};\n\nmodule.exports = InterceptorManager;\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/core/InterceptorManager.js?");

/***/ }),

/***/ "./node_modules/axios/lib/core/buildFullPath.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/buildFullPath.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isAbsoluteURL = __webpack_require__(/*! ../helpers/isAbsoluteURL */ \"./node_modules/axios/lib/helpers/isAbsoluteURL.js\");\nvar combineURLs = __webpack_require__(/*! ../helpers/combineURLs */ \"./node_modules/axios/lib/helpers/combineURLs.js\");\n\n/**\n * Creates a new URL by combining the baseURL with the requestedURL,\n * only when the requestedURL is not already an absolute URL.\n * If the requestURL is absolute, this function returns the requestedURL untouched.\n *\n * @param {string} baseURL The base URL\n * @param {string} requestedURL Absolute or relative URL to combine\n * @returns {string} The combined full path\n */\nmodule.exports = function buildFullPath(baseURL, requestedURL) {\n  if (baseURL && !isAbsoluteURL(requestedURL)) {\n    return combineURLs(baseURL, requestedURL);\n  }\n  return requestedURL;\n};\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/core/buildFullPath.js?");

/***/ }),

/***/ "./node_modules/axios/lib/core/createError.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/createError.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar enhanceError = __webpack_require__(/*! ./enhanceError */ \"./node_modules/axios/lib/core/enhanceError.js\");\n\n/**\n * Create an Error with the specified message, config, error code, request and response.\n *\n * @param {string} message The error message.\n * @param {Object} config The config.\n * @param {string} [code] The error code (for example, 'ECONNABORTED').\n * @param {Object} [request] The request.\n * @param {Object} [response] The response.\n * @returns {Error} The created error.\n */\nmodule.exports = function createError(message, config, code, request, response) {\n  var error = new Error(message);\n  return enhanceError(error, config, code, request, response);\n};\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/core/createError.js?");

/***/ }),

/***/ "./node_modules/axios/lib/core/dispatchRequest.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/core/dispatchRequest.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ./../utils */ \"./node_modules/axios/lib/utils.js\");\nvar transformData = __webpack_require__(/*! ./transformData */ \"./node_modules/axios/lib/core/transformData.js\");\nvar isCancel = __webpack_require__(/*! ../cancel/isCancel */ \"./node_modules/axios/lib/cancel/isCancel.js\");\nvar defaults = __webpack_require__(/*! ../defaults */ \"./node_modules/axios/lib/defaults.js\");\n\n/**\n * Throws a `Cancel` if cancellation has been requested.\n */\nfunction throwIfCancellationRequested(config) {\n  if (config.cancelToken) {\n    config.cancelToken.throwIfRequested();\n  }\n}\n\n/**\n * Dispatch a request to the server using the configured adapter.\n *\n * @param {object} config The config that is to be used for the request\n * @returns {Promise} The Promise to be fulfilled\n */\nmodule.exports = function dispatchRequest(config) {\n  throwIfCancellationRequested(config);\n\n  // Ensure headers exist\n  config.headers = config.headers || {};\n\n  // Transform request data\n  config.data = transformData(\n    config.data,\n    config.headers,\n    config.transformRequest\n  );\n\n  // Flatten headers\n  config.headers = utils.merge(\n    config.headers.common || {},\n    config.headers[config.method] || {},\n    config.headers\n  );\n\n  utils.forEach(\n    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],\n    function cleanHeaderConfig(method) {\n      delete config.headers[method];\n    }\n  );\n\n  var adapter = config.adapter || defaults.adapter;\n\n  return adapter(config).then(function onAdapterResolution(response) {\n    throwIfCancellationRequested(config);\n\n    // Transform response data\n    response.data = transformData(\n      response.data,\n      response.headers,\n      config.transformResponse\n    );\n\n    return response;\n  }, function onAdapterRejection(reason) {\n    if (!isCancel(reason)) {\n      throwIfCancellationRequested(config);\n\n      // Transform response data\n      if (reason && reason.response) {\n        reason.response.data = transformData(\n          reason.response.data,\n          reason.response.headers,\n          config.transformResponse\n        );\n      }\n    }\n\n    return Promise.reject(reason);\n  });\n};\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/core/dispatchRequest.js?");

/***/ }),

/***/ "./node_modules/axios/lib/core/enhanceError.js":
/*!*****************************************************!*\
  !*** ./node_modules/axios/lib/core/enhanceError.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/**\n * Update an Error with the specified config, error code, and response.\n *\n * @param {Error} error The error to update.\n * @param {Object} config The config.\n * @param {string} [code] The error code (for example, 'ECONNABORTED').\n * @param {Object} [request] The request.\n * @param {Object} [response] The response.\n * @returns {Error} The error.\n */\nmodule.exports = function enhanceError(error, config, code, request, response) {\n  error.config = config;\n  if (code) {\n    error.code = code;\n  }\n\n  error.request = request;\n  error.response = response;\n  error.isAxiosError = true;\n\n  error.toJSON = function() {\n    return {\n      // Standard\n      message: this.message,\n      name: this.name,\n      // Microsoft\n      description: this.description,\n      number: this.number,\n      // Mozilla\n      fileName: this.fileName,\n      lineNumber: this.lineNumber,\n      columnNumber: this.columnNumber,\n      stack: this.stack,\n      // Axios\n      config: this.config,\n      code: this.code\n    };\n  };\n  return error;\n};\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/core/enhanceError.js?");

/***/ }),

/***/ "./node_modules/axios/lib/core/mergeConfig.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/mergeConfig.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ../utils */ \"./node_modules/axios/lib/utils.js\");\n\n/**\n * Config-specific merge-function which creates a new config-object\n * by merging two configuration objects together.\n *\n * @param {Object} config1\n * @param {Object} config2\n * @returns {Object} New object resulting from merging config2 to config1\n */\nmodule.exports = function mergeConfig(config1, config2) {\n  // eslint-disable-next-line no-param-reassign\n  config2 = config2 || {};\n  var config = {};\n\n  var valueFromConfig2Keys = ['url', 'method', 'params', 'data'];\n  var mergeDeepPropertiesKeys = ['headers', 'auth', 'proxy'];\n  var defaultToConfig2Keys = [\n    'baseURL', 'url', 'transformRequest', 'transformResponse', 'paramsSerializer',\n    'timeout', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',\n    'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress',\n    'maxContentLength', 'validateStatus', 'maxRedirects', 'httpAgent',\n    'httpsAgent', 'cancelToken', 'socketPath'\n  ];\n\n  utils.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {\n    if (typeof config2[prop] !== 'undefined') {\n      config[prop] = config2[prop];\n    }\n  });\n\n  utils.forEach(mergeDeepPropertiesKeys, function mergeDeepProperties(prop) {\n    if (utils.isObject(config2[prop])) {\n      config[prop] = utils.deepMerge(config1[prop], config2[prop]);\n    } else if (typeof config2[prop] !== 'undefined') {\n      config[prop] = config2[prop];\n    } else if (utils.isObject(config1[prop])) {\n      config[prop] = utils.deepMerge(config1[prop]);\n    } else if (typeof config1[prop] !== 'undefined') {\n      config[prop] = config1[prop];\n    }\n  });\n\n  utils.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {\n    if (typeof config2[prop] !== 'undefined') {\n      config[prop] = config2[prop];\n    } else if (typeof config1[prop] !== 'undefined') {\n      config[prop] = config1[prop];\n    }\n  });\n\n  var axiosKeys = valueFromConfig2Keys\n    .concat(mergeDeepPropertiesKeys)\n    .concat(defaultToConfig2Keys);\n\n  var otherKeys = Object\n    .keys(config2)\n    .filter(function filterAxiosKeys(key) {\n      return axiosKeys.indexOf(key) === -1;\n    });\n\n  utils.forEach(otherKeys, function otherKeysDefaultToConfig2(prop) {\n    if (typeof config2[prop] !== 'undefined') {\n      config[prop] = config2[prop];\n    } else if (typeof config1[prop] !== 'undefined') {\n      config[prop] = config1[prop];\n    }\n  });\n\n  return config;\n};\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/core/mergeConfig.js?");

/***/ }),

/***/ "./node_modules/axios/lib/core/settle.js":
/*!***********************************************!*\
  !*** ./node_modules/axios/lib/core/settle.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar createError = __webpack_require__(/*! ./createError */ \"./node_modules/axios/lib/core/createError.js\");\n\n/**\n * Resolve or reject a Promise based on response status.\n *\n * @param {Function} resolve A function that resolves the promise.\n * @param {Function} reject A function that rejects the promise.\n * @param {object} response The response.\n */\nmodule.exports = function settle(resolve, reject, response) {\n  var validateStatus = response.config.validateStatus;\n  if (!validateStatus || validateStatus(response.status)) {\n    resolve(response);\n  } else {\n    reject(createError(\n      'Request failed with status code ' + response.status,\n      response.config,\n      null,\n      response.request,\n      response\n    ));\n  }\n};\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/core/settle.js?");

/***/ }),

/***/ "./node_modules/axios/lib/core/transformData.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/transformData.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ./../utils */ \"./node_modules/axios/lib/utils.js\");\n\n/**\n * Transform the data for a request or a response\n *\n * @param {Object|String} data The data to be transformed\n * @param {Array} headers The headers for the request or response\n * @param {Array|Function} fns A single function or Array of functions\n * @returns {*} The resulting transformed data\n */\nmodule.exports = function transformData(data, headers, fns) {\n  /*eslint no-param-reassign:0*/\n  utils.forEach(fns, function transform(fn) {\n    data = fn(data, headers);\n  });\n\n  return data;\n};\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/core/transformData.js?");

/***/ }),

/***/ "./node_modules/axios/lib/defaults.js":
/*!********************************************!*\
  !*** ./node_modules/axios/lib/defaults.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(process) {\n\nvar utils = __webpack_require__(/*! ./utils */ \"./node_modules/axios/lib/utils.js\");\nvar normalizeHeaderName = __webpack_require__(/*! ./helpers/normalizeHeaderName */ \"./node_modules/axios/lib/helpers/normalizeHeaderName.js\");\n\nvar DEFAULT_CONTENT_TYPE = {\n  'Content-Type': 'application/x-www-form-urlencoded'\n};\n\nfunction setContentTypeIfUnset(headers, value) {\n  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {\n    headers['Content-Type'] = value;\n  }\n}\n\nfunction getDefaultAdapter() {\n  var adapter;\n  if (typeof XMLHttpRequest !== 'undefined') {\n    // For browsers use XHR adapter\n    adapter = __webpack_require__(/*! ./adapters/xhr */ \"./node_modules/axios/lib/adapters/xhr.js\");\n  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {\n    // For node use HTTP adapter\n    adapter = __webpack_require__(/*! ./adapters/http */ \"./node_modules/axios/lib/adapters/xhr.js\");\n  }\n  return adapter;\n}\n\nvar defaults = {\n  adapter: getDefaultAdapter(),\n\n  transformRequest: [function transformRequest(data, headers) {\n    normalizeHeaderName(headers, 'Accept');\n    normalizeHeaderName(headers, 'Content-Type');\n    if (utils.isFormData(data) ||\n      utils.isArrayBuffer(data) ||\n      utils.isBuffer(data) ||\n      utils.isStream(data) ||\n      utils.isFile(data) ||\n      utils.isBlob(data)\n    ) {\n      return data;\n    }\n    if (utils.isArrayBufferView(data)) {\n      return data.buffer;\n    }\n    if (utils.isURLSearchParams(data)) {\n      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');\n      return data.toString();\n    }\n    if (utils.isObject(data)) {\n      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');\n      return JSON.stringify(data);\n    }\n    return data;\n  }],\n\n  transformResponse: [function transformResponse(data) {\n    /*eslint no-param-reassign:0*/\n    if (typeof data === 'string') {\n      try {\n        data = JSON.parse(data);\n      } catch (e) { /* Ignore */ }\n    }\n    return data;\n  }],\n\n  /**\n   * A timeout in milliseconds to abort a request. If set to 0 (default) a\n   * timeout is not created.\n   */\n  timeout: 0,\n\n  xsrfCookieName: 'XSRF-TOKEN',\n  xsrfHeaderName: 'X-XSRF-TOKEN',\n\n  maxContentLength: -1,\n\n  validateStatus: function validateStatus(status) {\n    return status >= 200 && status < 300;\n  }\n};\n\ndefaults.headers = {\n  common: {\n    'Accept': 'application/json, text/plain, */*'\n  }\n};\n\nutils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {\n  defaults.headers[method] = {};\n});\n\nutils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {\n  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);\n});\n\nmodule.exports = defaults;\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ \"./node_modules/process/browser.js\")))\n\n//# sourceURL=webpack:///./node_modules/axios/lib/defaults.js?");

/***/ }),

/***/ "./node_modules/axios/lib/helpers/bind.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/helpers/bind.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function bind(fn, thisArg) {\n  return function wrap() {\n    var args = new Array(arguments.length);\n    for (var i = 0; i < args.length; i++) {\n      args[i] = arguments[i];\n    }\n    return fn.apply(thisArg, args);\n  };\n};\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/helpers/bind.js?");

/***/ }),

/***/ "./node_modules/axios/lib/helpers/buildURL.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/helpers/buildURL.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ./../utils */ \"./node_modules/axios/lib/utils.js\");\n\nfunction encode(val) {\n  return encodeURIComponent(val).\n    replace(/%40/gi, '@').\n    replace(/%3A/gi, ':').\n    replace(/%24/g, '$').\n    replace(/%2C/gi, ',').\n    replace(/%20/g, '+').\n    replace(/%5B/gi, '[').\n    replace(/%5D/gi, ']');\n}\n\n/**\n * Build a URL by appending params to the end\n *\n * @param {string} url The base of the url (e.g., http://www.google.com)\n * @param {object} [params] The params to be appended\n * @returns {string} The formatted url\n */\nmodule.exports = function buildURL(url, params, paramsSerializer) {\n  /*eslint no-param-reassign:0*/\n  if (!params) {\n    return url;\n  }\n\n  var serializedParams;\n  if (paramsSerializer) {\n    serializedParams = paramsSerializer(params);\n  } else if (utils.isURLSearchParams(params)) {\n    serializedParams = params.toString();\n  } else {\n    var parts = [];\n\n    utils.forEach(params, function serialize(val, key) {\n      if (val === null || typeof val === 'undefined') {\n        return;\n      }\n\n      if (utils.isArray(val)) {\n        key = key + '[]';\n      } else {\n        val = [val];\n      }\n\n      utils.forEach(val, function parseValue(v) {\n        if (utils.isDate(v)) {\n          v = v.toISOString();\n        } else if (utils.isObject(v)) {\n          v = JSON.stringify(v);\n        }\n        parts.push(encode(key) + '=' + encode(v));\n      });\n    });\n\n    serializedParams = parts.join('&');\n  }\n\n  if (serializedParams) {\n    var hashmarkIndex = url.indexOf('#');\n    if (hashmarkIndex !== -1) {\n      url = url.slice(0, hashmarkIndex);\n    }\n\n    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;\n  }\n\n  return url;\n};\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/helpers/buildURL.js?");

/***/ }),

/***/ "./node_modules/axios/lib/helpers/combineURLs.js":
/*!*******************************************************!*\
  !*** ./node_modules/axios/lib/helpers/combineURLs.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/**\n * Creates a new URL by combining the specified URLs\n *\n * @param {string} baseURL The base URL\n * @param {string} relativeURL The relative URL\n * @returns {string} The combined URL\n */\nmodule.exports = function combineURLs(baseURL, relativeURL) {\n  return relativeURL\n    ? baseURL.replace(/\\/+$/, '') + '/' + relativeURL.replace(/^\\/+/, '')\n    : baseURL;\n};\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/helpers/combineURLs.js?");

/***/ }),

/***/ "./node_modules/axios/lib/helpers/cookies.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/helpers/cookies.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ./../utils */ \"./node_modules/axios/lib/utils.js\");\n\nmodule.exports = (\n  utils.isStandardBrowserEnv() ?\n\n  // Standard browser envs support document.cookie\n    (function standardBrowserEnv() {\n      return {\n        write: function write(name, value, expires, path, domain, secure) {\n          var cookie = [];\n          cookie.push(name + '=' + encodeURIComponent(value));\n\n          if (utils.isNumber(expires)) {\n            cookie.push('expires=' + new Date(expires).toGMTString());\n          }\n\n          if (utils.isString(path)) {\n            cookie.push('path=' + path);\n          }\n\n          if (utils.isString(domain)) {\n            cookie.push('domain=' + domain);\n          }\n\n          if (secure === true) {\n            cookie.push('secure');\n          }\n\n          document.cookie = cookie.join('; ');\n        },\n\n        read: function read(name) {\n          var match = document.cookie.match(new RegExp('(^|;\\\\s*)(' + name + ')=([^;]*)'));\n          return (match ? decodeURIComponent(match[3]) : null);\n        },\n\n        remove: function remove(name) {\n          this.write(name, '', Date.now() - 86400000);\n        }\n      };\n    })() :\n\n  // Non standard browser env (web workers, react-native) lack needed support.\n    (function nonStandardBrowserEnv() {\n      return {\n        write: function write() {},\n        read: function read() { return null; },\n        remove: function remove() {}\n      };\n    })()\n);\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/helpers/cookies.js?");

/***/ }),

/***/ "./node_modules/axios/lib/helpers/isAbsoluteURL.js":
/*!*********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAbsoluteURL.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/**\n * Determines whether the specified URL is absolute\n *\n * @param {string} url The URL to test\n * @returns {boolean} True if the specified URL is absolute, otherwise false\n */\nmodule.exports = function isAbsoluteURL(url) {\n  // A URL is considered absolute if it begins with \"<scheme>://\" or \"//\" (protocol-relative URL).\n  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed\n  // by any combination of letters, digits, plus, period, or hyphen.\n  return /^([a-z][a-z\\d\\+\\-\\.]*:)?\\/\\//i.test(url);\n};\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/helpers/isAbsoluteURL.js?");

/***/ }),

/***/ "./node_modules/axios/lib/helpers/isURLSameOrigin.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isURLSameOrigin.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ./../utils */ \"./node_modules/axios/lib/utils.js\");\n\nmodule.exports = (\n  utils.isStandardBrowserEnv() ?\n\n  // Standard browser envs have full support of the APIs needed to test\n  // whether the request URL is of the same origin as current location.\n    (function standardBrowserEnv() {\n      var msie = /(msie|trident)/i.test(navigator.userAgent);\n      var urlParsingNode = document.createElement('a');\n      var originURL;\n\n      /**\n    * Parse a URL to discover it's components\n    *\n    * @param {String} url The URL to be parsed\n    * @returns {Object}\n    */\n      function resolveURL(url) {\n        var href = url;\n\n        if (msie) {\n        // IE needs attribute set twice to normalize properties\n          urlParsingNode.setAttribute('href', href);\n          href = urlParsingNode.href;\n        }\n\n        urlParsingNode.setAttribute('href', href);\n\n        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils\n        return {\n          href: urlParsingNode.href,\n          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',\n          host: urlParsingNode.host,\n          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\\?/, '') : '',\n          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',\n          hostname: urlParsingNode.hostname,\n          port: urlParsingNode.port,\n          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?\n            urlParsingNode.pathname :\n            '/' + urlParsingNode.pathname\n        };\n      }\n\n      originURL = resolveURL(window.location.href);\n\n      /**\n    * Determine if a URL shares the same origin as the current location\n    *\n    * @param {String} requestURL The URL to test\n    * @returns {boolean} True if URL shares the same origin, otherwise false\n    */\n      return function isURLSameOrigin(requestURL) {\n        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;\n        return (parsed.protocol === originURL.protocol &&\n            parsed.host === originURL.host);\n      };\n    })() :\n\n  // Non standard browser envs (web workers, react-native) lack needed support.\n    (function nonStandardBrowserEnv() {\n      return function isURLSameOrigin() {\n        return true;\n      };\n    })()\n);\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/helpers/isURLSameOrigin.js?");

/***/ }),

/***/ "./node_modules/axios/lib/helpers/normalizeHeaderName.js":
/*!***************************************************************!*\
  !*** ./node_modules/axios/lib/helpers/normalizeHeaderName.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ../utils */ \"./node_modules/axios/lib/utils.js\");\n\nmodule.exports = function normalizeHeaderName(headers, normalizedName) {\n  utils.forEach(headers, function processHeader(value, name) {\n    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {\n      headers[normalizedName] = value;\n      delete headers[name];\n    }\n  });\n};\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/helpers/normalizeHeaderName.js?");

/***/ }),

/***/ "./node_modules/axios/lib/helpers/parseHeaders.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/parseHeaders.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ./../utils */ \"./node_modules/axios/lib/utils.js\");\n\n// Headers whose duplicates are ignored by node\n// c.f. https://nodejs.org/api/http.html#http_message_headers\nvar ignoreDuplicateOf = [\n  'age', 'authorization', 'content-length', 'content-type', 'etag',\n  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',\n  'last-modified', 'location', 'max-forwards', 'proxy-authorization',\n  'referer', 'retry-after', 'user-agent'\n];\n\n/**\n * Parse headers into an object\n *\n * ```\n * Date: Wed, 27 Aug 2014 08:58:49 GMT\n * Content-Type: application/json\n * Connection: keep-alive\n * Transfer-Encoding: chunked\n * ```\n *\n * @param {String} headers Headers needing to be parsed\n * @returns {Object} Headers parsed into an object\n */\nmodule.exports = function parseHeaders(headers) {\n  var parsed = {};\n  var key;\n  var val;\n  var i;\n\n  if (!headers) { return parsed; }\n\n  utils.forEach(headers.split('\\n'), function parser(line) {\n    i = line.indexOf(':');\n    key = utils.trim(line.substr(0, i)).toLowerCase();\n    val = utils.trim(line.substr(i + 1));\n\n    if (key) {\n      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {\n        return;\n      }\n      if (key === 'set-cookie') {\n        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);\n      } else {\n        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;\n      }\n    }\n  });\n\n  return parsed;\n};\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/helpers/parseHeaders.js?");

/***/ }),

/***/ "./node_modules/axios/lib/helpers/spread.js":
/*!**************************************************!*\
  !*** ./node_modules/axios/lib/helpers/spread.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/**\n * Syntactic sugar for invoking a function and expanding an array for arguments.\n *\n * Common use case would be to use `Function.prototype.apply`.\n *\n *  ```js\n *  function f(x, y, z) {}\n *  var args = [1, 2, 3];\n *  f.apply(null, args);\n *  ```\n *\n * With `spread` this example can be re-written.\n *\n *  ```js\n *  spread(function(x, y, z) {})([1, 2, 3]);\n *  ```\n *\n * @param {Function} callback\n * @returns {Function}\n */\nmodule.exports = function spread(callback) {\n  return function wrap(arr) {\n    return callback.apply(null, arr);\n  };\n};\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/helpers/spread.js?");

/***/ }),

/***/ "./node_modules/axios/lib/utils.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/utils.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar bind = __webpack_require__(/*! ./helpers/bind */ \"./node_modules/axios/lib/helpers/bind.js\");\n\n/*global toString:true*/\n\n// utils is a library of generic helper functions non-specific to axios\n\nvar toString = Object.prototype.toString;\n\n/**\n * Determine if a value is an Array\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is an Array, otherwise false\n */\nfunction isArray(val) {\n  return toString.call(val) === '[object Array]';\n}\n\n/**\n * Determine if a value is undefined\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if the value is undefined, otherwise false\n */\nfunction isUndefined(val) {\n  return typeof val === 'undefined';\n}\n\n/**\n * Determine if a value is a Buffer\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is a Buffer, otherwise false\n */\nfunction isBuffer(val) {\n  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)\n    && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);\n}\n\n/**\n * Determine if a value is an ArrayBuffer\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is an ArrayBuffer, otherwise false\n */\nfunction isArrayBuffer(val) {\n  return toString.call(val) === '[object ArrayBuffer]';\n}\n\n/**\n * Determine if a value is a FormData\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is an FormData, otherwise false\n */\nfunction isFormData(val) {\n  return (typeof FormData !== 'undefined') && (val instanceof FormData);\n}\n\n/**\n * Determine if a value is a view on an ArrayBuffer\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false\n */\nfunction isArrayBufferView(val) {\n  var result;\n  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {\n    result = ArrayBuffer.isView(val);\n  } else {\n    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);\n  }\n  return result;\n}\n\n/**\n * Determine if a value is a String\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is a String, otherwise false\n */\nfunction isString(val) {\n  return typeof val === 'string';\n}\n\n/**\n * Determine if a value is a Number\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is a Number, otherwise false\n */\nfunction isNumber(val) {\n  return typeof val === 'number';\n}\n\n/**\n * Determine if a value is an Object\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is an Object, otherwise false\n */\nfunction isObject(val) {\n  return val !== null && typeof val === 'object';\n}\n\n/**\n * Determine if a value is a Date\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is a Date, otherwise false\n */\nfunction isDate(val) {\n  return toString.call(val) === '[object Date]';\n}\n\n/**\n * Determine if a value is a File\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is a File, otherwise false\n */\nfunction isFile(val) {\n  return toString.call(val) === '[object File]';\n}\n\n/**\n * Determine if a value is a Blob\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is a Blob, otherwise false\n */\nfunction isBlob(val) {\n  return toString.call(val) === '[object Blob]';\n}\n\n/**\n * Determine if a value is a Function\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is a Function, otherwise false\n */\nfunction isFunction(val) {\n  return toString.call(val) === '[object Function]';\n}\n\n/**\n * Determine if a value is a Stream\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is a Stream, otherwise false\n */\nfunction isStream(val) {\n  return isObject(val) && isFunction(val.pipe);\n}\n\n/**\n * Determine if a value is a URLSearchParams object\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is a URLSearchParams object, otherwise false\n */\nfunction isURLSearchParams(val) {\n  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;\n}\n\n/**\n * Trim excess whitespace off the beginning and end of a string\n *\n * @param {String} str The String to trim\n * @returns {String} The String freed of excess whitespace\n */\nfunction trim(str) {\n  return str.replace(/^\\s*/, '').replace(/\\s*$/, '');\n}\n\n/**\n * Determine if we're running in a standard browser environment\n *\n * This allows axios to run in a web worker, and react-native.\n * Both environments support XMLHttpRequest, but not fully standard globals.\n *\n * web workers:\n *  typeof window -> undefined\n *  typeof document -> undefined\n *\n * react-native:\n *  navigator.product -> 'ReactNative'\n * nativescript\n *  navigator.product -> 'NativeScript' or 'NS'\n */\nfunction isStandardBrowserEnv() {\n  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||\n                                           navigator.product === 'NativeScript' ||\n                                           navigator.product === 'NS')) {\n    return false;\n  }\n  return (\n    typeof window !== 'undefined' &&\n    typeof document !== 'undefined'\n  );\n}\n\n/**\n * Iterate over an Array or an Object invoking a function for each item.\n *\n * If `obj` is an Array callback will be called passing\n * the value, index, and complete array for each item.\n *\n * If 'obj' is an Object callback will be called passing\n * the value, key, and complete object for each property.\n *\n * @param {Object|Array} obj The object to iterate\n * @param {Function} fn The callback to invoke for each item\n */\nfunction forEach(obj, fn) {\n  // Don't bother if no value provided\n  if (obj === null || typeof obj === 'undefined') {\n    return;\n  }\n\n  // Force an array if not already something iterable\n  if (typeof obj !== 'object') {\n    /*eslint no-param-reassign:0*/\n    obj = [obj];\n  }\n\n  if (isArray(obj)) {\n    // Iterate over array values\n    for (var i = 0, l = obj.length; i < l; i++) {\n      fn.call(null, obj[i], i, obj);\n    }\n  } else {\n    // Iterate over object keys\n    for (var key in obj) {\n      if (Object.prototype.hasOwnProperty.call(obj, key)) {\n        fn.call(null, obj[key], key, obj);\n      }\n    }\n  }\n}\n\n/**\n * Accepts varargs expecting each argument to be an object, then\n * immutably merges the properties of each object and returns result.\n *\n * When multiple objects contain the same key the later object in\n * the arguments list will take precedence.\n *\n * Example:\n *\n * ```js\n * var result = merge({foo: 123}, {foo: 456});\n * console.log(result.foo); // outputs 456\n * ```\n *\n * @param {Object} obj1 Object to merge\n * @returns {Object} Result of all merge properties\n */\nfunction merge(/* obj1, obj2, obj3, ... */) {\n  var result = {};\n  function assignValue(val, key) {\n    if (typeof result[key] === 'object' && typeof val === 'object') {\n      result[key] = merge(result[key], val);\n    } else {\n      result[key] = val;\n    }\n  }\n\n  for (var i = 0, l = arguments.length; i < l; i++) {\n    forEach(arguments[i], assignValue);\n  }\n  return result;\n}\n\n/**\n * Function equal to merge with the difference being that no reference\n * to original objects is kept.\n *\n * @see merge\n * @param {Object} obj1 Object to merge\n * @returns {Object} Result of all merge properties\n */\nfunction deepMerge(/* obj1, obj2, obj3, ... */) {\n  var result = {};\n  function assignValue(val, key) {\n    if (typeof result[key] === 'object' && typeof val === 'object') {\n      result[key] = deepMerge(result[key], val);\n    } else if (typeof val === 'object') {\n      result[key] = deepMerge({}, val);\n    } else {\n      result[key] = val;\n    }\n  }\n\n  for (var i = 0, l = arguments.length; i < l; i++) {\n    forEach(arguments[i], assignValue);\n  }\n  return result;\n}\n\n/**\n * Extends object a by mutably adding to it the properties of object b.\n *\n * @param {Object} a The object to be extended\n * @param {Object} b The object to copy properties from\n * @param {Object} thisArg The object to bind function to\n * @return {Object} The resulting value of object a\n */\nfunction extend(a, b, thisArg) {\n  forEach(b, function assignValue(val, key) {\n    if (thisArg && typeof val === 'function') {\n      a[key] = bind(val, thisArg);\n    } else {\n      a[key] = val;\n    }\n  });\n  return a;\n}\n\nmodule.exports = {\n  isArray: isArray,\n  isArrayBuffer: isArrayBuffer,\n  isBuffer: isBuffer,\n  isFormData: isFormData,\n  isArrayBufferView: isArrayBufferView,\n  isString: isString,\n  isNumber: isNumber,\n  isObject: isObject,\n  isUndefined: isUndefined,\n  isDate: isDate,\n  isFile: isFile,\n  isBlob: isBlob,\n  isFunction: isFunction,\n  isStream: isStream,\n  isURLSearchParams: isURLSearchParams,\n  isStandardBrowserEnv: isStandardBrowserEnv,\n  forEach: forEach,\n  merge: merge,\n  deepMerge: deepMerge,\n  extend: extend,\n  trim: trim\n};\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/utils.js?");

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// shim for using process in browser\nvar process = module.exports = {};\n\n// cached from whatever global is present so that test runners that stub it\n// don't break things.  But we need to wrap it in a try catch in case it is\n// wrapped in strict mode code which doesn't define any globals.  It's inside a\n// function because try/catches deoptimize in certain engines.\n\nvar cachedSetTimeout;\nvar cachedClearTimeout;\n\nfunction defaultSetTimout() {\n    throw new Error('setTimeout has not been defined');\n}\nfunction defaultClearTimeout () {\n    throw new Error('clearTimeout has not been defined');\n}\n(function () {\n    try {\n        if (typeof setTimeout === 'function') {\n            cachedSetTimeout = setTimeout;\n        } else {\n            cachedSetTimeout = defaultSetTimout;\n        }\n    } catch (e) {\n        cachedSetTimeout = defaultSetTimout;\n    }\n    try {\n        if (typeof clearTimeout === 'function') {\n            cachedClearTimeout = clearTimeout;\n        } else {\n            cachedClearTimeout = defaultClearTimeout;\n        }\n    } catch (e) {\n        cachedClearTimeout = defaultClearTimeout;\n    }\n} ())\nfunction runTimeout(fun) {\n    if (cachedSetTimeout === setTimeout) {\n        //normal enviroments in sane situations\n        return setTimeout(fun, 0);\n    }\n    // if setTimeout wasn't available but was latter defined\n    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {\n        cachedSetTimeout = setTimeout;\n        return setTimeout(fun, 0);\n    }\n    try {\n        // when when somebody has screwed with setTimeout but no I.E. maddness\n        return cachedSetTimeout(fun, 0);\n    } catch(e){\n        try {\n            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally\n            return cachedSetTimeout.call(null, fun, 0);\n        } catch(e){\n            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error\n            return cachedSetTimeout.call(this, fun, 0);\n        }\n    }\n\n\n}\nfunction runClearTimeout(marker) {\n    if (cachedClearTimeout === clearTimeout) {\n        //normal enviroments in sane situations\n        return clearTimeout(marker);\n    }\n    // if clearTimeout wasn't available but was latter defined\n    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {\n        cachedClearTimeout = clearTimeout;\n        return clearTimeout(marker);\n    }\n    try {\n        // when when somebody has screwed with setTimeout but no I.E. maddness\n        return cachedClearTimeout(marker);\n    } catch (e){\n        try {\n            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally\n            return cachedClearTimeout.call(null, marker);\n        } catch (e){\n            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.\n            // Some versions of I.E. have different rules for clearTimeout vs setTimeout\n            return cachedClearTimeout.call(this, marker);\n        }\n    }\n\n\n\n}\nvar queue = [];\nvar draining = false;\nvar currentQueue;\nvar queueIndex = -1;\n\nfunction cleanUpNextTick() {\n    if (!draining || !currentQueue) {\n        return;\n    }\n    draining = false;\n    if (currentQueue.length) {\n        queue = currentQueue.concat(queue);\n    } else {\n        queueIndex = -1;\n    }\n    if (queue.length) {\n        drainQueue();\n    }\n}\n\nfunction drainQueue() {\n    if (draining) {\n        return;\n    }\n    var timeout = runTimeout(cleanUpNextTick);\n    draining = true;\n\n    var len = queue.length;\n    while(len) {\n        currentQueue = queue;\n        queue = [];\n        while (++queueIndex < len) {\n            if (currentQueue) {\n                currentQueue[queueIndex].run();\n            }\n        }\n        queueIndex = -1;\n        len = queue.length;\n    }\n    currentQueue = null;\n    draining = false;\n    runClearTimeout(timeout);\n}\n\nprocess.nextTick = function (fun) {\n    var args = new Array(arguments.length - 1);\n    if (arguments.length > 1) {\n        for (var i = 1; i < arguments.length; i++) {\n            args[i - 1] = arguments[i];\n        }\n    }\n    queue.push(new Item(fun, args));\n    if (queue.length === 1 && !draining) {\n        runTimeout(drainQueue);\n    }\n};\n\n// v8 likes predictible objects\nfunction Item(fun, array) {\n    this.fun = fun;\n    this.array = array;\n}\nItem.prototype.run = function () {\n    this.fun.apply(null, this.array);\n};\nprocess.title = 'browser';\nprocess.browser = true;\nprocess.env = {};\nprocess.argv = [];\nprocess.version = ''; // empty string to avoid regexp issues\nprocess.versions = {};\n\nfunction noop() {}\n\nprocess.on = noop;\nprocess.addListener = noop;\nprocess.once = noop;\nprocess.off = noop;\nprocess.removeListener = noop;\nprocess.removeAllListeners = noop;\nprocess.emit = noop;\nprocess.prependListener = noop;\nprocess.prependOnceListener = noop;\n\nprocess.listeners = function (name) { return [] }\n\nprocess.binding = function (name) {\n    throw new Error('process.binding is not supported');\n};\n\nprocess.cwd = function () { return '/' };\nprocess.chdir = function (dir) {\n    throw new Error('process.chdir is not supported');\n};\nprocess.umask = function() { return 0; };\n\n\n//# sourceURL=webpack:///./node_modules/process/browser.js?");

/***/ }),

/***/ "./src/api/index.js":
/*!**************************!*\
  !*** ./src/api/index.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scorecardApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scorecardApi */ \"./src/api/scorecardApi/index.js\");\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _scorecardApi__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _scorecardApi__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _unsplashApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./unsplashApi */ \"./src/api/unsplashApi/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"stockPhotoQuery\", function() { return _unsplashApi__WEBPACK_IMPORTED_MODULE_1__[\"stockPhotoQuery\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"mockPhotos\", function() { return _unsplashApi__WEBPACK_IMPORTED_MODULE_1__[\"mockPhotos\"]; });\n\n\n\n\n//# sourceURL=webpack:///./src/api/index.js?");

/***/ }),

/***/ "./src/api/scorecardApi/index.js":
/*!***************************************!*\
  !*** ./src/api/scorecardApi/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _queries__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./queries */ \"./src/api/scorecardApi/queries/index.js\");\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _queries__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _queries__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./src/api/scorecardApi/index.js?");

/***/ }),

/***/ "./src/api/scorecardApi/queries/basicScorecardQuery.js":
/*!*************************************************************!*\
  !*** ./src/api/scorecardApi/queries/basicScorecardQuery.js ***!
  \*************************************************************/
/*! exports provided: basicScorecardQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"basicScorecardQuery\", function() { return basicScorecardQuery; });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _documentation_ignore_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../documentation/ignore/keys */ \"./documentation/ignore/keys.js\");\n\n // Define the fields for the basic basicScorecard\n\nvar fields = [\"id\", \"school.name\", \"school.school_url\", \"school.state_fips\", \"school.city\", \"latest.student.enrollment.all\", \"latest.admissions.admission_rate.overall\", \"latest.cost.attendance.academic_year\"]; // Create the URL to fetch from the collegeScorecard API\n\nvar scorecardUrl = \"https://api.data.gov/ed/collegescorecard/v1/schools.json\";\nfunction basicScorecardQuery(params) {\n  // takes array of query parameters\n  var basicScorecardRequest = \"\".concat(scorecardUrl, \"?_fields=\").concat(fields.join(), \"&\").concat(params.join(\"&\"), \"&api_key=\").concat(_documentation_ignore_keys__WEBPACK_IMPORTED_MODULE_1__[\"SCORECARDKEY\"]);\n  console.log(basicScorecardRequest);\n  var basicScorecardPromise = new Promise(function (resolve, reject) {\n    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(basicScorecardRequest).then(function (basicScorecard) {\n      console.log(\"basicScorecardPromise -- success\");\n      resolve(basicScorecard.data);\n    })[\"catch\"](function (error) {\n      console.log(\"basicScorecardPromise -- error\");\n      reject(error.response);\n    });\n  });\n  return basicScorecardPromise;\n}\n\n//# sourceURL=webpack:///./src/api/scorecardApi/queries/basicScorecardQuery.js?");

/***/ }),

/***/ "./src/api/scorecardApi/queries/fullScorecardQuery.js":
/*!************************************************************!*\
  !*** ./src/api/scorecardApi/queries/fullScorecardQuery.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./src/api/scorecardApi/queries/fullScorecardQuery.js?");

/***/ }),

/***/ "./src/api/scorecardApi/queries/index.js":
/*!***********************************************!*\
  !*** ./src/api/scorecardApi/queries/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _basicScorecardQuery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basicScorecardQuery */ \"./src/api/scorecardApi/queries/basicScorecardQuery.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"basicScorecardQuery\", function() { return _basicScorecardQuery__WEBPACK_IMPORTED_MODULE_0__[\"basicScorecardQuery\"]; });\n\n/* harmony import */ var _fullScorecardQuery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fullScorecardQuery */ \"./src/api/scorecardApi/queries/fullScorecardQuery.js\");\n/* harmony import */ var _fullScorecardQuery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fullScorecardQuery__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _fullScorecardQuery__WEBPACK_IMPORTED_MODULE_1__) if([\"basicScorecardQuery\",\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _fullScorecardQuery__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n\n//# sourceURL=webpack:///./src/api/scorecardApi/queries/index.js?");

/***/ }),

/***/ "./src/api/unsplashApi/index.js":
/*!**************************************!*\
  !*** ./src/api/unsplashApi/index.js ***!
  \**************************************/
/*! exports provided: stockPhotoQuery, mockPhotos */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _queries__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./queries */ \"./src/api/unsplashApi/queries/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"stockPhotoQuery\", function() { return _queries__WEBPACK_IMPORTED_MODULE_0__[\"stockPhotoQuery\"]; });\n\n/* harmony import */ var _mockPhotos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mockPhotos */ \"./src/api/unsplashApi/mockPhotos/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"mockPhotos\", function() { return _mockPhotos__WEBPACK_IMPORTED_MODULE_1__[\"mockPhotos\"]; });\n\n\n\n\n//# sourceURL=webpack:///./src/api/unsplashApi/index.js?");

/***/ }),

/***/ "./src/api/unsplashApi/mockPhotos/index.js":
/*!*************************************************!*\
  !*** ./src/api/unsplashApi/mockPhotos/index.js ***!
  \*************************************************/
/*! exports provided: mockPhotos */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mockPhotos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mockPhotos */ \"./src/api/unsplashApi/mockPhotos/mockPhotos.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"mockPhotos\", function() { return _mockPhotos__WEBPACK_IMPORTED_MODULE_0__[\"mockPhotos\"]; });\n\n\n\n//# sourceURL=webpack:///./src/api/unsplashApi/mockPhotos/index.js?");

/***/ }),

/***/ "./src/api/unsplashApi/mockPhotos/mockPhotos.js":
/*!******************************************************!*\
  !*** ./src/api/unsplashApi/mockPhotos/mockPhotos.js ***!
  \******************************************************/
/*! exports provided: mockPhotos */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mockPhotos\", function() { return mockPhotos; });\nvar mockPhotos = [\"https://images.unsplash.com/photo-1561525985-654e6a2fa04a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzODE1Nn0\", \"https://images.unsplash.com/photo-1577648447942-c5bdd624b8b2?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzODE1Nn0\", \"https://images.unsplash.com/photo-1561588016-0fe1e5bde1e8?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzODE1Nn0\", \"https://images.unsplash.com/photo-1547573855-8486915de533?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzODE1Nn0\", \"https://images.unsplash.com/photo-1580068028162-4fb359f81cb1?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzODE1Nn0\", \"https://images.unsplash.com/photo-1566292536119-00c45831a540?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzODE1Nn0\", \"https://images.unsplash.com/photo-1559135197-8a45ea74d367?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzODE1Nn0\", \"https://images.unsplash.com/photo-1585511686939-43e83dc0134a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzODE1Nn0\", \"https://images.unsplash.com/photo-1561417547-4c84cab98e6c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzODE1Nn0\", \"https://images.unsplash.com/photo-1566959621395-9200c65ba74b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzODE1Nn0\", \"https://images.unsplash.com/photo-1526976668912-1a811878dd37?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzODE1Nn0\", \"https://images.unsplash.com/photo-1559397523-59f32c009a28?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzODE1Nn0\", \"https://images.unsplash.com/photo-1559826500-b9603ae353c2?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzODE1Nn0\", \"https://images.unsplash.com/photo-1589129230246-1aa19d2f7519?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzODE1Nn0\", \"https://images.unsplash.com/photo-1571113357441-9ddf596c076a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzODE1Nn0\", \"https://images.unsplash.com/photo-1590454796582-63b9ad257f15?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzODE1Nn0\", \"https://images.unsplash.com/photo-1588933945306-eff59408abf0?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzODE1Nn0\", \"https://images.unsplash.com/photo-1575498225878-7d9a7656dbe4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzODE1Nn0\", \"https://images.unsplash.com/photo-1591268193431-c86baf208255?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzODE1Nn0\", \"https://images.unsplash.com/photo-1557409075-55d39ef624fa?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzODE1Nn0\", \"https://images.unsplash.com/photo-1586210890738-f54bc09a4699?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzODE1Nn0\", \"https://images.unsplash.com/photo-1522211545580-794e07bf6751?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzODE1Nn0\", \"https://images.unsplash.com/photo-1567938637623-7b760dee6496?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzODE1Nn0\", \"https://images.unsplash.com/photo-1585556172862-8c9e53b57339?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzODE1Nn0\", \"https://images.unsplash.com/photo-1547653872-052e3539decc?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzODE1Nn0\", \"https://images.unsplash.com/photo-1589401763799-b2e409e5bd2f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzODE1Nn0\", \"https://images.unsplash.com/photo-1577942948749-a3dbb5c6db0a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzODE1Nn0\", \"https://images.unsplash.com/photo-1527643785850-c813751ec16e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzODE1Nn0\", \"https://images.unsplash.com/photo-1590954771283-08e124e37f17?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzODE1Nn0\", \"https://images.unsplash.com/photo-1554911940-05efc1892bc5?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzODE1Nn0\", \"https://images.unsplash.com/photo-1558406505-2404216c65f1?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzODE1Nn0\", \"https://images.unsplash.com/photo-1542451156-0b0f9cc0c1e4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzODE1Nn0\", \"https://images.unsplash.com/photo-1565572473942-19349e997900?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzODE1Nn0\", \"https://images.unsplash.com/photo-1562855742-bcdfa2de751d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzODE1Nn0\", \"https://images.unsplash.com/photo-1591202481001-06897b4bee16?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzODE1Nn0\", \"https://images.unsplash.com/photo-1543577973-fde5ec465f1a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzODE1Nn0\", \"https://images.unsplash.com/photo-1577801961331-d6719362d442?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzODE1Nn0\", \"https://images.unsplash.com/photo-1549741501-b1e583e94ee3?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzODE1Nn0\", \"https://images.unsplash.com/photo-1588970924000-3679839efe9b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzODE1Nn0\", \"https://images.unsplash.com/photo-1589702167849-dd0e18f8d9ab?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzODE1Nn0\", \"https://images.unsplash.com/photo-1558197464-73ae8a1fc0f6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzODE1Nn0\", \"https://images.unsplash.com/photo-1587243021724-70caecb543b0?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzODE1Nn0\", \"https://images.unsplash.com/photo-1583528163997-30a94f1f9438?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzODE1Nn0\", \"https://images.unsplash.com/photo-1565402170291-8491f14678db?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzODE1Nn0\", \"https://images.unsplash.com/photo-1561482423-8bec9e825f47?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzODE1Nn0\", \"https://images.unsplash.com/photo-1570890511545-55f57c318e0e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzODE1Nn0\", \"https://images.unsplash.com/photo-1569964253294-d57c7f6f7561?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzODE1Nn0\", \"https://images.unsplash.com/photo-1572044643512-c0465c39cec8?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzODE1Nn0\", \"https://images.unsplash.com/photo-1542344773-bed78065a0ca?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzODE1Nn0\", \"https://images.unsplash.com/photo-1511945256206-8f041d42dd78?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzODE1Nn0\", \"https://images.unsplash.com/photo-1577801961209-ab4a800e6e2b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzODE1Nn0\", \"https://images.unsplash.com/photo-1591647772655-ddb114cfbe2b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzODE1Nn0\", \"https://images.unsplash.com/photo-1566203658430-c55bbbaf1d41?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzODE1Nn0\", \"https://images.unsplash.com/photo-1558689934-786848c735fb?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzODE1Nn0\", \"https://images.unsplash.com/photo-1573991289150-f974cfb9504d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzODE1Nn0\", \"https://images.unsplash.com/photo-1542321204-23959c19158b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzODE1Nn0\", \"https://images.unsplash.com/photo-1583086095254-ecf19041c013?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzODE1Nn0\", \"https://images.unsplash.com/photo-1556206346-02882b689a77?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzODE1Nn0\", \"https://images.unsplash.com/photo-1572062063686-dff25d9c6d22?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzODE1Nn0\", \"https://images.unsplash.com/photo-1559669835-2c798d0b821d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzODE1Nn0\"];\n\n//# sourceURL=webpack:///./src/api/unsplashApi/mockPhotos/mockPhotos.js?");

/***/ }),

/***/ "./src/api/unsplashApi/queries/index.js":
/*!**********************************************!*\
  !*** ./src/api/unsplashApi/queries/index.js ***!
  \**********************************************/
/*! exports provided: stockPhotoQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _stockPhotoQuery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stockPhotoQuery */ \"./src/api/unsplashApi/queries/stockPhotoQuery.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"stockPhotoQuery\", function() { return _stockPhotoQuery__WEBPACK_IMPORTED_MODULE_0__[\"stockPhotoQuery\"]; });\n\n\n\n//# sourceURL=webpack:///./src/api/unsplashApi/queries/index.js?");

/***/ }),

/***/ "./src/api/unsplashApi/queries/stockPhotoQuery.js":
/*!********************************************************!*\
  !*** ./src/api/unsplashApi/queries/stockPhotoQuery.js ***!
  \********************************************************/
/*! exports provided: stockPhotoQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"stockPhotoQuery\", function() { return stockPhotoQuery; });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _documentation_ignore_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../documentation/ignore/keys */ \"./documentation/ignore/keys.js\");\n\n\nvar unsplashUrl = \"https://api.unsplash.com/photos/random/\";\nvar unsplashParams = \"count=30&orientation=landscape&query=campus\";\nfunction stockPhotoQuery() {\n  var stockPhotoUrl = \"\".concat(unsplashUrl, \"?\").concat(unsplashParams, \"&client_id=\").concat(_documentation_ignore_keys__WEBPACK_IMPORTED_MODULE_1__[\"UNSPLASHKEY\"]);\n  console.log(stockPhotoUrl);\n  var stockPhotoPromise = new Promise(function (resolve, reject) {\n    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(stockPhotoUrl).then(function (stockPhotoResp) {\n      console.log(\"stockPhotoPromise -- success\");\n      resolve(stockPhotoResp);\n    })[\"catch\"](function (error) {\n      console.log(\"stockPhotoPromise -- error\");\n      console.log(error);\n      reject(error.response);\n    });\n  });\n  return stockPhotoPromise;\n}\n\n//# sourceURL=webpack:///./src/api/unsplashApi/queries/stockPhotoQuery.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ \"./src/api/index.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ \"./src/utils/index.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\nvar homeButton = document.querySelector(\"#home-button\");\nvar searchButton = document.querySelector(\".search__cta\");\nvar loadMoreButton = document.querySelector(\".more__results\");\nvar testRun = \"false\";\nconsole.log(testRun);\nhomeButton.addEventListener(\"click\", function () {\n  console.log(\"button clicked\");\n});\nvar currentPage = 0;\nsearchButton.addEventListener(\"click\", function (e) {\n  e.preventDefault();\n  console.log(\"Search Button: Clicked\");\n  testRun = document.querySelector(\".testRun\").value;\n  makeRequest(currentPage);\n});\nloadMoreButton.addEventListener(\"click\", function () {\n  currentPage += 1;\n  testRun = document.querySelector(\".testRun\").value;\n  makeRequest(currentPage);\n});\n\nfunction makeRequest(currentPage) {\n  var searchValue = document.querySelector(\".search__input\").value;\n  var splitCities = searchValue.split(\",\");\n  var citySearch = splitCities.map(function (city) {\n    return city.replace(\" \", \"%20\");\n  }); // Settings for pagination (if neccessary)\n\n  var page = \"page=\".concat(currentPage);\n  var perPage = \"per_page=\".concat(8);\n  var city = \"school.city=\".concat(citySearch);\n  var params = [page, perPage, city];\n\n  if (testRun === \"true\") {\n    Promise.all([Object(_api__WEBPACK_IMPORTED_MODULE_0__[\"basicScorecardQuery\"])(params)]).then(function (values) {\n      console.log(\"This was a test run\");\n\n      var _values = _slicedToArray(values, 1),\n          scorecards = _values[0];\n\n      var images = _api__WEBPACK_IMPORTED_MODULE_0__[\"mockPhotos\"];\n      return Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"handleScorecards\"])(scorecards, images, testRun);\n    }).then(function (handledScorecards) {\n      return Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"displayScorecard\"])(handledScorecards, currentPage);\n    })[\"catch\"](function (err) {\n      console.log(err);\n    });\n  } else {\n    Promise.all([Object(_api__WEBPACK_IMPORTED_MODULE_0__[\"basicScorecardQuery\"])(params), Object(_api__WEBPACK_IMPORTED_MODULE_0__[\"stockPhotoQuery\"])()]).then(function (values) {\n      var _values2 = _slicedToArray(values, 2),\n          scorecards = _values2[0],\n          images = _values2[1];\n\n      return Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"handleScorecards\"])(scorecards, images, testRun);\n    }).then(function (handledScorecards) {\n      return Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"displayScorecard\"])(handledScorecards, currentPage);\n    })[\"catch\"](function (err) {\n      console.log(err);\n    });\n  }\n}\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/lib/keyValueData/carnegieClassification.js":
/*!********************************************************!*\
  !*** ./src/lib/keyValueData/carnegieClassification.js ***!
  \********************************************************/
/*! exports provided: carnegieClassification */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"carnegieClassification\", function() { return carnegieClassification; });\nvar carnegieClassification = {\n  \"-2\": \"Not applicable\",\n  0: \"(Not classified)\",\n  1: \"Two-year, very small\",\n  2: \"Two-year, small\",\n  3: \"Two-year, medium\",\n  4: \"Two-year, large\",\n  5: \"Two-year, very large\",\n  6: \"Four-year, very small, primarily nonresidential\",\n  7: \"Four-year, very small, primarily residential\",\n  8: \"Four-year, very small, highly residential\",\n  9: \"Four-year, small, primarily nonresidential\",\n  10: \"Four-year, small, primarily residential\",\n  11: \"Four-year, small, highly residential\",\n  12: \"Four-year, medium, primarily nonresidential\",\n  13: \"Four-year, medium, primarily residential\",\n  14: \"Four-year, medium, highly residential\",\n  15: \"Four-year, large, primarily nonresidential\",\n  16: \"Four-year, large, primarily residential\",\n  17: \"Four-year, large, highly residential\",\n  18: \"Exclusively graduate/professional\"\n};\n\n//# sourceURL=webpack:///./src/lib/keyValueData/carnegieClassification.js?");

/***/ }),

/***/ "./src/lib/keyValueData/fipsStates.js":
/*!********************************************!*\
  !*** ./src/lib/keyValueData/fipsStates.js ***!
  \********************************************/
/*! exports provided: fipsStates */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fipsStates\", function() { return fipsStates; });\nvar fipsStates = {\n  1: \"Alabama\",\n  2: \"Alaska\",\n  4: \"Arizona\",\n  5: \"Arkansas\",\n  6: \"California\",\n  8: \"Colorado\",\n  9: \"Connecticut\",\n  10: \"Delaware\",\n  11: \"District of Columbia\",\n  12: \"Florida\",\n  13: \"Georgia\",\n  15: \"Hawaii\",\n  16: \"Idaho\",\n  17: \"Illinois\",\n  18: \"Indiana\",\n  19: \"Iowa\",\n  20: \"Kansas\",\n  21: \"Kentucky\",\n  22: \"Louisiana\",\n  23: \"Maine\",\n  24: \"Maryland\",\n  25: \"Massachusetts\",\n  26: \"Michigan\",\n  27: \"Minnesota\",\n  28: \"Mississippi\",\n  29: \"Missouri\",\n  30: \"Montana\",\n  31: \"Nebraska\",\n  32: \"Nevada\",\n  33: \"New Hampshire\",\n  34: \"New Jersey\",\n  35: \"New Mexico\",\n  36: \"New York\",\n  37: \"North Carolina\",\n  38: \"North Dakota\",\n  39: \"Ohio\",\n  40: \"Oklahoma\",\n  41: \"Oregon\",\n  42: \"Pennsylvania\",\n  44: \"Rhode Island\",\n  45: \"South Carolina\",\n  46: \"South Dakota\",\n  47: \"Tennessee\",\n  48: \"Texas\",\n  49: \"Utah\",\n  50: \"Vermont\",\n  51: \"Virginia\",\n  53: \"Washington\",\n  54: \"West Virginia\",\n  55: \"Wisconsin\",\n  56: \"Wyoming\",\n  60: \"American Samoa\",\n  64: \"Federated States of Micronesia\",\n  66: \"Guam\",\n  69: \"Northern Mariana Islands\",\n  70: \"Palau\",\n  72: \"Puerto Rico\",\n  78: \"Virgin Islands\"\n};\n\n//# sourceURL=webpack:///./src/lib/keyValueData/fipsStates.js?");

/***/ }),

/***/ "./src/lib/keyValueData/index.js":
/*!***************************************!*\
  !*** ./src/lib/keyValueData/index.js ***!
  \***************************************/
/*! exports provided: fipsStates, carnegieClassification, religiousAffiliations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _fipsStates__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fipsStates */ \"./src/lib/keyValueData/fipsStates.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"fipsStates\", function() { return _fipsStates__WEBPACK_IMPORTED_MODULE_0__[\"fipsStates\"]; });\n\n/* harmony import */ var _carnegieClassification__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./carnegieClassification */ \"./src/lib/keyValueData/carnegieClassification.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"carnegieClassification\", function() { return _carnegieClassification__WEBPACK_IMPORTED_MODULE_1__[\"carnegieClassification\"]; });\n\n/* harmony import */ var _religiousAffiliation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./religiousAffiliation */ \"./src/lib/keyValueData/religiousAffiliation.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"religiousAffiliations\", function() { return _religiousAffiliation__WEBPACK_IMPORTED_MODULE_2__[\"religiousAffiliations\"]; });\n\n\n\n\n\n//# sourceURL=webpack:///./src/lib/keyValueData/index.js?");

/***/ }),

/***/ "./src/lib/keyValueData/religiousAffiliation.js":
/*!******************************************************!*\
  !*** ./src/lib/keyValueData/religiousAffiliation.js ***!
  \******************************************************/
/*! exports provided: religiousAffiliations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"religiousAffiliations\", function() { return religiousAffiliations; });\nvar religiousAffiliations = {\n  \"-1\": \"Not reported\",\n  \"-2\": \"Not applicable\",\n  22: \"American Evangelical Lutheran Church\",\n  24: \"African Methodist Episcopal Zion Church\",\n  27: \"Assemblies of God Church\",\n  28: \"Brethren Church\",\n  30: \"Roman Catholic\",\n  33: \"Wisconsin Evangelical Lutheran Synod\",\n  34: \"Christ and Missionary Alliance Church\",\n  35: \"Christian Reformed Church\",\n  36: \"Evangelical Congregational Church\",\n  37: \"Evangelical Covenant Church of America\",\n  38: \"Evangelical Free Church of America\",\n  39: \"Evangelical Lutheran Church\",\n  40: \"International United Pentecostal Church\",\n  41: \"Free Will Baptist Church\",\n  42: \"Interdenominational\",\n  43: \"Mennonite Brethren Church\",\n  44: \"Moravian Church\",\n  45: \"North American Baptist\",\n  47: \"Pentecostal Holiness Church\",\n  48: \"Christian Churches and Churches of Christ\",\n  49: \"Reformed Church in America\",\n  50: \"Episcopal Church, Reformed\",\n  51: \"African Methodist Episcopal\",\n  52: \"American Baptist\",\n  53: \"American Lutheran\",\n  54: \"Baptist\",\n  55: \"Christian Methodist Episcopal\",\n  57: \"Church of God\",\n  58: \"Church of Brethren\",\n  59: \"Church of the Nazarene\",\n  60: \"Cumberland Presbyterian\",\n  61: \"Christian Church (Disciples of Christ)\",\n  64: \"Free Methodist\",\n  65: \"Friends\",\n  66: \"Presbyterian Church (USA)\",\n  67: \"Lutheran Church in America\",\n  68: \"Lutheran Church - Missouri Synod\",\n  69: \"Mennonite Church\",\n  71: \"United Methodist\",\n  73: \"Protestant Episcopal\",\n  74: \"Churches of Christ\",\n  75: \"Southern Baptist\",\n  76: \"United Church of Christ\",\n  77: \"Protestant, not specified\",\n  78: \"Multiple Protestant Denomination\",\n  79: \"Other Protestant\",\n  80: \"Jewish\",\n  81: \"Reformed Presbyterian Church\",\n  84: \"United Brethren Church\",\n  87: \"Missionary Church Inc\",\n  88: \"Undenominational\",\n  89: \"Wesleyan\",\n  91: \"Greek Orthodox\",\n  92: \"Russian Orthodox\",\n  93: \"Unitarian Universalist\",\n  94: \"Latter Day Saints (Mormon Church)\",\n  95: \"Seventh Day Adventists\",\n  97: \"The Presbyterian Church in America\",\n  99: \"Other (none of the above)\",\n  100: \"Original Free Will Baptist\",\n  101: \"Ecumenical Christian\",\n  102: \"Evangelical Christian\",\n  103: \"Presbyterian\",\n  105: \"General Baptist\",\n  106: \"Muslim\",\n  107: \"Plymouth Brethren\"\n};\n\n//# sourceURL=webpack:///./src/lib/keyValueData/religiousAffiliation.js?");

/***/ }),

/***/ "./src/utils/cleanScorecardData/index.js":
/*!***********************************************!*\
  !*** ./src/utils/cleanScorecardData/index.js ***!
  \***********************************************/
/*! exports provided: cleanScorecardData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cleanScorecardData\", function() { return cleanScorecardData; });\n// Cleans up the scorecard data and replaces null values with user friendly display\nfunction cleanScorecardData(scorecards) {\n  // Return an array of cleaned scorecard objects\n  return scorecards.map(function (card) {\n    var schoolScorecard = {}; // Iterate over the data from each school to reformat null values to display 'undisclosed'\n\n    Object.keys(card).forEach(function (key) {\n      schoolScorecard[key] = card[key] === null ? \"Undisclosed\" : card[key];\n    });\n    return schoolScorecard;\n  });\n}\n\n//# sourceURL=webpack:///./src/utils/cleanScorecardData/index.js?");

/***/ }),

/***/ "./src/utils/displayScorecard/index.js":
/*!*********************************************!*\
  !*** ./src/utils/displayScorecard/index.js ***!
  \*********************************************/
/*! exports provided: displayScorecard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"displayScorecard\", function() { return displayScorecard; });\n/* harmony import */ var _scorecardTemplates__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scorecardTemplates */ \"./src/utils/scorecardTemplates/index.js\");\n\nfunction displayScorecard(handledScorecards, currentPage) {\n  var scorecardData = handledScorecards.scorecardData,\n      additionalPages = handledScorecards.additionalPages;\n\n  if (currentPage > additionalPages - 1 || additionalPages < 0) {\n    document.querySelector(\"#page__row-more_id\").style.display = \"none\";\n  } else {\n    document.querySelector(\"#page__row-more_id\").style.display = \"flex\";\n  }\n\n  console.log(scorecardData);\n  var gallery = document.querySelector(\".page__row-gallery\");\n  scorecardData.forEach(function (card) {\n    gallery.innerHTML = gallery.innerHTML + Object(_scorecardTemplates__WEBPACK_IMPORTED_MODULE_0__[\"basicScorecardTemplate\"])(card);\n  });\n}\n\n//# sourceURL=webpack:///./src/utils/displayScorecard/index.js?");

/***/ }),

/***/ "./src/utils/formatNumbers/index.js":
/*!******************************************!*\
  !*** ./src/utils/formatNumbers/index.js ***!
  \******************************************/
/*! exports provided: formatDollarAmounts, formatPercentages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"formatDollarAmounts\", function() { return formatDollarAmounts; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"formatPercentages\", function() { return formatPercentages; });\n// Formats the integer dollar amounts to display like currencies\nfunction formatDollarAmounts(price) {\n  // Stops the format change if the cost is an undisclosed value\n  if (price === \"Undisclosed\") {\n    return price;\n  }\n\n  var currencyFormat = price.toString().replace(/(\\d)(?=(\\d{3})+(?!\\d))/g, \"$1,\");\n  return \"$\".concat(currencyFormat);\n} // Formats the admission rate decimal value to a percentage\n\nfunction formatPercentages(percent) {\n  // Stops the format change if the admission rate is an undisclosed value\n  if (percent === \"Undisclosed\") {\n    return percent;\n  }\n\n  return \"\".concat((percent * 100).toFixed(1), \"%\");\n}\n\n//# sourceURL=webpack:///./src/utils/formatNumbers/index.js?");

/***/ }),

/***/ "./src/utils/formatSchoolUrl/index.js":
/*!********************************************!*\
  !*** ./src/utils/formatSchoolUrl/index.js ***!
  \********************************************/
/*! exports provided: formatSchoolUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"formatSchoolUrl\", function() { return formatSchoolUrl; });\nfunction formatSchoolUrl(website) {\n  var reg_exUrl = new RegExp(\"www.[a-zA-Z0-9-.]+.[a-zA-Z]{0}\"); // console.log(website);\n\n  var firstThreeChrs = website.substring(0, 4); // console.log(firstThreeChrs);\n\n  if (firstThreeChrs === \"www.\") {\n    // console.log(\"simple Urls: \", website);\n    return website;\n  } // console.log(\"simple: \", reg_exUrl.exec(website));\n\n\n  if (!reg_exUrl.exec(website)) {\n    // console.log(\"simple\", `www.${website}`);\n    return \"www.\".concat(website);\n  } else {\n    // console.log(reg_exUrl.exec(website));\n    return reg_exUrl.exec(website);\n  }\n}\n\n//# sourceURL=webpack:///./src/utils/formatSchoolUrl/index.js?");

/***/ }),

/***/ "./src/utils/handleScorecards/index.js":
/*!*********************************************!*\
  !*** ./src/utils/handleScorecards/index.js ***!
  \*********************************************/
/*! exports provided: handleScorecards */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"handleScorecards\", function() { return handleScorecards; });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ \"./src/utils/index.js\");\n\nfunction handleScorecards(scorecards, images, test) {\n  // Clean the scorecard data\n  var schoolScorecardData = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"cleanScorecardData\"])(scorecards.results);\n  /* console.log(schoolCardData); */\n  // Set the number of pages returned from API\n\n  var additionalPages = scorecards.metadata.total / 8 > 1 ? scorecards.metadata.total / 8 : 0; // Image placeholders to fill out the effect of the cards\n\n  var imgUrls = !test ? images.data.map(function (image) {\n    return image.urls.small;\n  }) : images; // Return an array of scorecard objects with clean values and more convinient keys\n\n  var scorecardData = schoolScorecardData.map(function (data, i) {\n    var id = data.id,\n        rateOfAdmission = data[\"latest.admissions.admission_rate.overall\"],\n        schoolAttendance = data[\"latest.student.enrollment.all\"],\n        schoolName = data[\"school.name\"],\n        schoolCity = data[\"school.city\"],\n        schoolWebsite = data[\"school.school_url\"],\n        stateFips = data[\"school.state_fips\"],\n        costPerYear = data[\"latest.cost.attendance.academic_year\"]; // Convert the formatting of the dollar and percent values\n\n    var avgCost = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"formatDollarAmounts\"])(costPerYear);\n    var adminRate = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"formatPercentages\"])(rateOfAdmission);\n    return {\n      adminRate: adminRate,\n      avgCost: avgCost,\n      id: id,\n      imgUrl: imgUrls[i],\n      schoolAttendance: schoolAttendance,\n      schoolCity: schoolCity,\n      schoolName: schoolName,\n      schoolWebsite: schoolWebsite,\n      stateFips: stateFips\n    };\n  });\n  return {\n    additionalPages: additionalPages,\n    scorecardData: scorecardData\n  };\n}\n\n//# sourceURL=webpack:///./src/utils/handleScorecards/index.js?");

/***/ }),

/***/ "./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _handleScorecards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handleScorecards */ \"./src/utils/handleScorecards/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"handleScorecards\", function() { return _handleScorecards__WEBPACK_IMPORTED_MODULE_0__[\"handleScorecards\"]; });\n\n/* harmony import */ var _formatNumbers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formatNumbers */ \"./src/utils/formatNumbers/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"formatDollarAmounts\", function() { return _formatNumbers__WEBPACK_IMPORTED_MODULE_1__[\"formatDollarAmounts\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"formatPercentages\", function() { return _formatNumbers__WEBPACK_IMPORTED_MODULE_1__[\"formatPercentages\"]; });\n\n/* harmony import */ var _cleanScorecardData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cleanScorecardData */ \"./src/utils/cleanScorecardData/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"cleanScorecardData\", function() { return _cleanScorecardData__WEBPACK_IMPORTED_MODULE_2__[\"cleanScorecardData\"]; });\n\n/* harmony import */ var _displayScorecard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./displayScorecard */ \"./src/utils/displayScorecard/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"displayScorecard\", function() { return _displayScorecard__WEBPACK_IMPORTED_MODULE_3__[\"displayScorecard\"]; });\n\n/* harmony import */ var _scorecardTemplates__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scorecardTemplates */ \"./src/utils/scorecardTemplates/index.js\");\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _scorecardTemplates__WEBPACK_IMPORTED_MODULE_4__) if([\"handleScorecards\",\"formatDollarAmounts\",\"formatPercentages\",\"cleanScorecardData\",\"displayScorecard\",\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _scorecardTemplates__WEBPACK_IMPORTED_MODULE_4__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _formatSchoolUrl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./formatSchoolUrl */ \"./src/utils/formatSchoolUrl/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"formatSchoolUrl\", function() { return _formatSchoolUrl__WEBPACK_IMPORTED_MODULE_5__[\"formatSchoolUrl\"]; });\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/utils/index.js?");

/***/ }),

/***/ "./src/utils/scorecardTemplates/basicScorecardTemplate.js":
/*!****************************************************************!*\
  !*** ./src/utils/scorecardTemplates/basicScorecardTemplate.js ***!
  \****************************************************************/
/*! exports provided: basicScorecardTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"basicScorecardTemplate\", function() { return basicScorecardTemplate; });\n/* harmony import */ var _lib_keyValueData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/keyValueData */ \"./src/lib/keyValueData/index.js\");\n // HTML template to populate with the formatted response data from scorecard API\n\nfunction basicScorecardTemplate(cardData) {\n  var imgUrl = cardData.imgUrl,\n      adminRate = cardData.adminRate,\n      avgCost = cardData.avgCost,\n      schoolAttendance = cardData.schoolAttendance,\n      schoolName = cardData.schoolName,\n      schoolCity = cardData.schoolCity,\n      schoolWebsite = cardData.schoolWebsite,\n      stateFips = cardData.stateFips;\n  return \"\\n  <div class=\\\"gallery__card-wrapper\\\">\\n        <div class=\\\"gallery__card\\\">\\n          <div class=\\\"card__section card__section-img\\\">\\n            <img\\n              class=\\\"content__image\\\"\\n              src=\".concat(imgUrl, \"\\n            />\\n          </div>\\n\\n          <div class=\\\"card__section card__section-name\\\">\\n            <div class=\\\"card__content card__content-name\\\">\\n              <div class=\\\"content__title content__title-name\\\">\\n                \").concat(schoolName, \"\\n              </div>\\n            </div>\\n          </div>\\n\\n          <div class=\\\"card__section card__section-location\\\">\\n            <div class=\\\"card__content card__content-location\\\">\\n              <div class=\\\"content__data content__data-location\\\">\\n                \").concat(schoolCity, \", \").concat(_lib_keyValueData__WEBPACK_IMPORTED_MODULE_0__[\"fipsStates\"][stateFips], \"\\n              </div>\\n            </div>\\n          </div>\\n\\n          <div class=\\\"card__section card__section-facts\\\">\\n            <div class=\\\"card__content card__content-facts\\\">\\n              <div class=\\\"content__title content__title-facts\\\">Attendance:</div>\\n              <div class=\\\"content__data content__data-facts\\\">\\n                \").concat(schoolAttendance, \"\\n              </div>\\n            </div>\\n            <div class=\\\"card__content card__content-facts\\\">\\n              <div class=\\\"content__title content__title-facts\\\">\\n                Admission Rate:\\n              </div>\\n              <div class=\\\"content__data content__data-facts\\\">\").concat(adminRate, \"</div>\\n            </div>\\n            <div class=\\\"card__content card__content-facts\\\">\\n              <div class=\\\"content__title content__title-facts\\\">\\n                Average Cost:\\n              </div>\\n              <div class=\\\"content__data content__data-facts\\\">\").concat(avgCost, \"</div>\\n            </div>\\n          </div>\\n          <div class=\\\"card__section card__section-website\\\">\\n            <div class=\\\"card__content card__content-website\\\">\\n              <div class=\\\"content__title content__title-url\\\">Homepage:</div>\\n              <span class=\\\"content__data-website><a class=\\\"content__url\\\" href=\\\"\").concat(schoolWebsite, \"\\\"\\n                >\").concat(schoolWebsite, \"</a\\n              ></span>\\n            </div>\\n          </div>\\n        </div>\\n      </div>\\n\");\n}\n\n//# sourceURL=webpack:///./src/utils/scorecardTemplates/basicScorecardTemplate.js?");

/***/ }),

/***/ "./src/utils/scorecardTemplates/fullScorecardTemplate.js":
/*!***************************************************************!*\
  !*** ./src/utils/scorecardTemplates/fullScorecardTemplate.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./src/utils/scorecardTemplates/fullScorecardTemplate.js?");

/***/ }),

/***/ "./src/utils/scorecardTemplates/index.js":
/*!***********************************************!*\
  !*** ./src/utils/scorecardTemplates/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _basicScorecardTemplate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basicScorecardTemplate */ \"./src/utils/scorecardTemplates/basicScorecardTemplate.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"basicScorecardTemplate\", function() { return _basicScorecardTemplate__WEBPACK_IMPORTED_MODULE_0__[\"basicScorecardTemplate\"]; });\n\n/* harmony import */ var _fullScorecardTemplate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fullScorecardTemplate */ \"./src/utils/scorecardTemplates/fullScorecardTemplate.js\");\n/* harmony import */ var _fullScorecardTemplate__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fullScorecardTemplate__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _fullScorecardTemplate__WEBPACK_IMPORTED_MODULE_1__) if([\"basicScorecardTemplate\",\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _fullScorecardTemplate__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n\n//# sourceURL=webpack:///./src/utils/scorecardTemplates/index.js?");

/***/ })

/******/ });