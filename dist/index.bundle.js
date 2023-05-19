/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/galaxy.jpg */ "./src/assets/galaxy.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n}\r\n\r\n#main_container {\r\n  width: 40vw;\r\n  height: 35vw;\r\n  background-color: rgb(225, 232, 233);\r\n  margin-top: 3vw;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  border-top: 25px black solid;\r\n  border-bottom: 25px black solid;\r\n}\r\n\r\n#list_container {\r\n  width: 35vw;\r\n  height: 30vw;\r\n  border: 0.5px rgb(82, 81, 81) solid;\r\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.6);\r\n  background-color: whitesmoke;\r\n  padding-left: 0;\r\n  margin-top: 2.5vw;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-start;\r\n}\r\n\r\n#tasks_list {\r\n  width: 35vw;\r\n  height: 2vw;\r\n  list-style: none;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n#list_title {\r\n  width: 34.5vw;\r\n  height: 2vw;\r\n  border-bottom: 0.3px rgb(207, 205, 205) solid;\r\n  padding-top: 0;\r\n  padding-left: 0.5vw;\r\n  font-family: 'Courier New', Courier, monospace;\r\n  font-weight: 800;\r\n  font-size: 1.5vw;\r\n  color: rgb(46, 46, 46);\r\n}\r\n\r\n#sync_button {\r\n  width: 1.5vw;\r\n  margin-left: 20.8vw;\r\n}\r\n\r\n.task {\r\n  position: relative;\r\n  width: 34.5vw;\r\n  height: 2vw;\r\n  border-bottom: 0.3px rgb(207, 205, 205) solid;\r\n  font-family: 'Courier New', Courier, monospace;\r\n  color: rgb(46, 46, 46);\r\n  font-size: 1.2vw;\r\n  font-weight: 400;\r\n  padding-top: 0.5vw;\r\n  padding-left: 0.5vw;\r\n}\r\n\r\n.task .menu_button {\r\n  position: absolute;\r\n  top: 50%;\r\n  transform: translateY(-50%);\r\n  right: 0.2vw;\r\n  width: 1.3vw;\r\n}\r\n\r\n.task .button_remove {\r\n  position: absolute;\r\n  top: 50%;\r\n  transform: translateY(-50%);\r\n  right: 1vw;\r\n  width: 1.3vw;\r\n}\r\n\r\n#add_new_task {\r\n  border-bottom: 0.3px rgb(207, 205, 205) solid;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: baseline;\r\n}\r\n\r\n#description {\r\n  width: 30vw;\r\n  height: 2.2vw;\r\n  border: none;\r\n  outline: none;\r\n  font-family: 'Courier New', Courier, monospace;\r\n  background-color: whitesmoke;\r\n  font-style: italic;\r\n  font-size: 1vw;\r\n  color: rgb(167, 166, 166);\r\n  padding-left: 0.5vw;\r\n}\r\n\r\n.button_add {\r\n  position: relative;\r\n  padding: 0;\r\n  right: 0.5vw;\r\n  width: 1.5vw;\r\n  top: 0.3vw;\r\n}\r\n\r\n.sync_img {\r\n  width: 1.5vw;\r\n  position: relative;\r\n  top: 0.2vw;\r\n}\r\n\r\n#clear_button {\r\n  position: relative;\r\n  top: 19.4vw;\r\n  height: 4vw;\r\n  width: 35vw;\r\n  border-top: 0.3px rgb(207, 205, 205) solid;\r\n  background-color: rgb(225, 232, 233);\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n#clear_all {\r\n  display: block;\r\n  text-decoration: none;\r\n  color: rgb(167, 166, 166);\r\n  text-align: center;\r\n  font-family: 'Courier New', Courier, monospace;\r\n  font-weight: 400;\r\n}\r\n\r\n.edit_input {\r\n  width: 30vw;\r\n  height: 2.3vw;\r\n  border: none;\r\n  outline: none;\r\n  font-family: 'Courier New', Courier, monospace;\r\n  background-color: whitesmoke;\r\n  font-style: italic;\r\n  font-size: 1vw;\r\n  color: rgb(167, 166, 166);\r\n  padding-left: 0.5vw;\r\n  margin-top: -1vw;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,yDAA4C;EAC5C,4BAA4B;EAC5B,sBAAsB;AACxB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,oCAAoC;EACpC,eAAe;EACf,aAAa;EACb,sBAAsB;EACtB,2BAA2B;EAC3B,mBAAmB;EACnB,4BAA4B;EAC5B,+BAA+B;AACjC;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,mCAAmC;EACnC,sCAAsC;EACtC,4BAA4B;EAC5B,eAAe;EACf,iBAAiB;EACjB,aAAa;EACb,sBAAsB;EACtB,2BAA2B;AAC7B;;AAEA;EACE,WAAW;EACX,WAAW;EACX,gBAAgB;EAChB,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,WAAW;EACX,6CAA6C;EAC7C,cAAc;EACd,mBAAmB;EACnB,8CAA8C;EAC9C,gBAAgB;EAChB,gBAAgB;EAChB,sBAAsB;AACxB;;AAEA;EACE,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,WAAW;EACX,6CAA6C;EAC7C,8CAA8C;EAC9C,sBAAsB;EACtB,gBAAgB;EAChB,gBAAgB;EAChB,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,QAAQ;EACR,2BAA2B;EAC3B,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,QAAQ;EACR,2BAA2B;EAC3B,UAAU;EACV,YAAY;AACd;;AAEA;EACE,6CAA6C;EAC7C,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,qBAAqB;AACvB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,YAAY;EACZ,aAAa;EACb,8CAA8C;EAC9C,4BAA4B;EAC5B,kBAAkB;EAClB,cAAc;EACd,yBAAyB;EACzB,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,UAAU;EACV,YAAY;EACZ,YAAY;EACZ,UAAU;AACZ;;AAEA;EACE,YAAY;EACZ,kBAAkB;EAClB,UAAU;AACZ;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,WAAW;EACX,WAAW;EACX,0CAA0C;EAC1C,oCAAoC;EACpC,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,cAAc;EACd,qBAAqB;EACrB,yBAAyB;EACzB,kBAAkB;EAClB,8CAA8C;EAC9C,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,YAAY;EACZ,aAAa;EACb,8CAA8C;EAC9C,4BAA4B;EAC5B,kBAAkB;EAClB,cAAc;EACd,yBAAyB;EACzB,mBAAmB;EACnB,gBAAgB;AAClB","sourcesContent":["body {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  background-image: url(\"./assets/galaxy.jpg\");\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n}\r\n\r\n#main_container {\r\n  width: 40vw;\r\n  height: 35vw;\r\n  background-color: rgb(225, 232, 233);\r\n  margin-top: 3vw;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  border-top: 25px black solid;\r\n  border-bottom: 25px black solid;\r\n}\r\n\r\n#list_container {\r\n  width: 35vw;\r\n  height: 30vw;\r\n  border: 0.5px rgb(82, 81, 81) solid;\r\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.6);\r\n  background-color: whitesmoke;\r\n  padding-left: 0;\r\n  margin-top: 2.5vw;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-start;\r\n}\r\n\r\n#tasks_list {\r\n  width: 35vw;\r\n  height: 2vw;\r\n  list-style: none;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n#list_title {\r\n  width: 34.5vw;\r\n  height: 2vw;\r\n  border-bottom: 0.3px rgb(207, 205, 205) solid;\r\n  padding-top: 0;\r\n  padding-left: 0.5vw;\r\n  font-family: 'Courier New', Courier, monospace;\r\n  font-weight: 800;\r\n  font-size: 1.5vw;\r\n  color: rgb(46, 46, 46);\r\n}\r\n\r\n#sync_button {\r\n  width: 1.5vw;\r\n  margin-left: 20.8vw;\r\n}\r\n\r\n.task {\r\n  position: relative;\r\n  width: 34.5vw;\r\n  height: 2vw;\r\n  border-bottom: 0.3px rgb(207, 205, 205) solid;\r\n  font-family: 'Courier New', Courier, monospace;\r\n  color: rgb(46, 46, 46);\r\n  font-size: 1.2vw;\r\n  font-weight: 400;\r\n  padding-top: 0.5vw;\r\n  padding-left: 0.5vw;\r\n}\r\n\r\n.task .menu_button {\r\n  position: absolute;\r\n  top: 50%;\r\n  transform: translateY(-50%);\r\n  right: 0.2vw;\r\n  width: 1.3vw;\r\n}\r\n\r\n.task .button_remove {\r\n  position: absolute;\r\n  top: 50%;\r\n  transform: translateY(-50%);\r\n  right: 1vw;\r\n  width: 1.3vw;\r\n}\r\n\r\n#add_new_task {\r\n  border-bottom: 0.3px rgb(207, 205, 205) solid;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: baseline;\r\n}\r\n\r\n#description {\r\n  width: 30vw;\r\n  height: 2.2vw;\r\n  border: none;\r\n  outline: none;\r\n  font-family: 'Courier New', Courier, monospace;\r\n  background-color: whitesmoke;\r\n  font-style: italic;\r\n  font-size: 1vw;\r\n  color: rgb(167, 166, 166);\r\n  padding-left: 0.5vw;\r\n}\r\n\r\n.button_add {\r\n  position: relative;\r\n  padding: 0;\r\n  right: 0.5vw;\r\n  width: 1.5vw;\r\n  top: 0.3vw;\r\n}\r\n\r\n.sync_img {\r\n  width: 1.5vw;\r\n  position: relative;\r\n  top: 0.2vw;\r\n}\r\n\r\n#clear_button {\r\n  position: relative;\r\n  top: 19.4vw;\r\n  height: 4vw;\r\n  width: 35vw;\r\n  border-top: 0.3px rgb(207, 205, 205) solid;\r\n  background-color: rgb(225, 232, 233);\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n#clear_all {\r\n  display: block;\r\n  text-decoration: none;\r\n  color: rgb(167, 166, 166);\r\n  text-align: center;\r\n  font-family: 'Courier New', Courier, monospace;\r\n  font-weight: 400;\r\n}\r\n\r\n.edit_input {\r\n  width: 30vw;\r\n  height: 2.3vw;\r\n  border: none;\r\n  outline: none;\r\n  font-family: 'Courier New', Courier, monospace;\r\n  background-color: whitesmoke;\r\n  font-style: italic;\r\n  font-size: 1vw;\r\n  color: rgb(167, 166, 166);\r\n  padding-left: 0.5vw;\r\n  margin-top: -1vw;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/add_remove_task.js":
/*!****************************************!*\
  !*** ./src/modules/add_remove_task.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addTaskSubmit": () => (/* binding */ addTaskSubmit),
/* harmony export */   "removeTaskClick": () => (/* binding */ removeTaskClick)
/* harmony export */ });
/* harmony import */ var _task_class_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task_class.js */ "./src/modules/task_class.js");


const tasks = new _task_class_js__WEBPACK_IMPORTED_MODULE_0__.Tasks();

function addTaskSubmit() {
  const enterTask = document.querySelector('.enter_task');
  const inputField = document.getElementById('description');
  inputField.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      const description = inputField.value;
      tasks.addTask(description);
      tasks.displayTasks();
      document.getElementById('add_new_task').reset();
    }
  });
  enterTask.addEventListener('click', (event) => {
    event.preventDefault();
    const description = document.getElementById('description').value;
    tasks.addTask(description);
    tasks.displayTasks();
    document.getElementById('add_new_task').reset();
  });
}

const removeTaskClick = () => {
  const taskList = document.getElementById('tasks_list');
  taskList.addEventListener('click', (event) => {
    if (event.target.classList.contains('button_remove')) {
      const { id } = event.target.dataset.id;
      tasks.removeTask(id);
      tasks.displayTasks();
    }
  });
};



/***/ }),

/***/ "./src/modules/checkbox_events.js":
/*!****************************************!*\
  !*** ./src/modules/checkbox_events.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const statusMethods = {
  updateStatus(id, completed) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const taskIndex = tasks.findIndex((task) => task.id === id);
    if (taskIndex !== -1) {
      tasks[taskIndex].completed = completed;
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  },
  clearCompletedTasks() {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks = tasks.filter((task) => !task.completed);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  },
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (statusMethods);


/***/ }),

/***/ "./src/modules/task_class.js":
/*!***********************************!*\
  !*** ./src/modules/task_class.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tasks": () => (/* binding */ Tasks),
/* harmony export */   "default": () => (/* binding */ Tasks)
/* harmony export */ });
/* harmony import */ var _checkbox_events_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkbox_events.js */ "./src/modules/checkbox_events.js");
/* harmony import */ var _assets_trash_outline_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/trash-outline.svg */ "./src/assets/trash-outline.svg");
/* harmony import */ var _assets_ellipsis_vertical_outline_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/ellipsis-vertical-outline.svg */ "./src/assets/ellipsis-vertical-outline.svg");




class Tasks {
  constructor() {
    this.tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  }

  addTask(description) {
    const task = { description, completed: false, id: this.tasks.length + 1 };
    this.tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  removeTask(id) {
    const index = this.tasks.findIndex((task) => task.id === Number(id));
    if (index !== -1) {
      this.tasks.splice(index, 1);
      this.updateTaskIds();
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
  }

  updateTaskIds() {
    for (let i = 0; i < this.tasks.length; i += 1) {
      this.tasks[i].id = i + 1;
    }
  }

  editTask(id, newDescription) {
    const index = this.tasks.findIndex((task) => task.id === Number(id));
    if (index !== -1) {
      this.tasks[index].description = newDescription;
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
  }

  clearCompletedTasks() {
    this.tasks = this.tasks.filter((task) => task.completed === false);
    this.updateTaskIds();
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  displayTasks() {
    const tasksList = document.getElementById('tasks_list');
    tasksList.innerHTML = '';
    this.tasks.forEach((task) => {
      const taskItem = document.createElement('li');
      taskItem.classList.add('task');

      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.name = 'task_status';
      checkbox.classList.add('checkbox');
      checkbox.id = `task_${task.id}`;
      checkbox.checked = task.completed;
      taskItem.appendChild(checkbox);

      const label = document.createElement('label');
      label.textContent = task.description;
      label.setAttribute('for', checkbox.id);
      taskItem.appendChild(label);

      const removeButton = document.createElement('img');
      removeButton.classList.add('button_remove');
      removeButton.dataset.id = task.id;
      removeButton.src = _assets_trash_outline_svg__WEBPACK_IMPORTED_MODULE_1__;
      removeButton.alt = '';
      taskItem.appendChild(removeButton);

      const menuButton = document.createElement('img');
      menuButton.classList.add('menu_button');
      menuButton.src = _assets_ellipsis_vertical_outline_svg__WEBPACK_IMPORTED_MODULE_2__;
      menuButton.alt = '';
      taskItem.appendChild(menuButton);

      tasksList.appendChild(taskItem);

      removeButton.addEventListener('click', (event) => {
        const { id } = event.target.dataset;
        this.removeTask(id);
        this.displayTasks();
      });

      checkbox.addEventListener('click', (event) => {
        event.stopPropagation();

        const { id } = task;
        const completed = event.target.checked;
        this.updateTaskStatus(id, completed);
      });

      checkbox.addEventListener('change', (event) => {
        const { id } = task;
        const completed = event.target.checked;
        _checkbox_events_js__WEBPACK_IMPORTED_MODULE_0__["default"].updateStatus(id, completed);
      });

      taskItem.addEventListener('click', (event) => {
        const { id } = task;
        const taskText = event.target.textContent;
        const input = document.createElement('input');
        input.type = 'text';
        input.value = taskText.trim();
        input.classList.add('edit_input');
        taskItem.innerHTML = '';
        taskItem.appendChild(input);
        input.focus();

        input.addEventListener('blur', () => {
          const newDescription = input.value;
          this.editTask(id, newDescription);
          this.displayTasks();
        });

        input.addEventListener('keydown', (e) => {
          if (e.key === 'Enter') {
            const newDescription = input.value;
            this.editTask(id, newDescription);
            this.displayTasks();
          }
        });
      });
    });
  }

  updateTaskStatus(id, completed) {
    const index = this.tasks.findIndex((task) => task.id === Number(id));
    if (index !== -1) {
      this.tasks[index].completed = completed;
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
  }
}




/***/ }),

/***/ "./src/assets/ellipsis-vertical-outline.svg":
/*!**************************************************!*\
  !*** ./src/assets/ellipsis-vertical-outline.svg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "10142f19ab3a29829b52.svg";

/***/ }),

/***/ "./src/assets/enter.svg":
/*!******************************!*\
  !*** ./src/assets/enter.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6c0587d7d89eb504e39f.svg";

/***/ }),

/***/ "./src/assets/galaxy.jpg":
/*!*******************************!*\
  !*** ./src/assets/galaxy.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e2ce6abeb51c3a60af46.jpg";

/***/ }),

/***/ "./src/assets/sync-outline.svg":
/*!*************************************!*\
  !*** ./src/assets/sync-outline.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0fb056530166a32cd466.svg";

/***/ }),

/***/ "./src/assets/trash-outline.svg":
/*!**************************************!*\
  !*** ./src/assets/trash-outline.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "83e6e062d02de7526268.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_task_class_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/task_class.js */ "./src/modules/task_class.js");
/* harmony import */ var _modules_add_remove_task_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/add_remove_task.js */ "./src/modules/add_remove_task.js");
/* harmony import */ var _modules_checkbox_events_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/checkbox_events.js */ "./src/modules/checkbox_events.js");
/* harmony import */ var _assets_sync_outline_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/sync-outline.svg */ "./src/assets/sync-outline.svg");
/* harmony import */ var _assets_enter_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/enter.svg */ "./src/assets/enter.svg");







const syncLocation = document.querySelector('#sync_button');
const syncImg = document.createElement('img');
syncImg.classList.add('sync_img');
syncImg.src = _assets_sync_outline_svg__WEBPACK_IMPORTED_MODULE_4__;
syncImg.alt = '';
syncLocation.appendChild(syncImg);

const enterLocation = document.querySelector('.button_add');
const enterImg = document.createElement('img');
enterImg.classList.add('enter_task');
enterImg.src = _assets_enter_svg__WEBPACK_IMPORTED_MODULE_5__;
enterImg.alt = '';
enterLocation.appendChild(enterImg);

const tasks = new _modules_task_class_js__WEBPACK_IMPORTED_MODULE_1__.Tasks();
tasks.displayTasks();
(0,_modules_add_remove_task_js__WEBPACK_IMPORTED_MODULE_2__.addTaskSubmit)();
(0,_modules_add_remove_task_js__WEBPACK_IMPORTED_MODULE_2__.removeTaskClick)();

const clearAllButton = document.getElementById('clear_all');
clearAllButton.addEventListener('click', () => {
  _modules_checkbox_events_js__WEBPACK_IMPORTED_MODULE_3__["default"].clearCompletedTasks();
  tasks.clearCompletedTasks();
  tasks.displayTasks();
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC1wcm9qZWN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvbGlzdC1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QtcHJvamVjdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvbGlzdC1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG9saXN0LXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG9saXN0LXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG9saXN0LXByb2plY3QvLi9zcmMvbW9kdWxlcy9hZGRfcmVtb3ZlX3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QtcHJvamVjdC8uL3NyYy9tb2R1bGVzL2NoZWNrYm94X2V2ZW50cy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC1wcm9qZWN0Ly4vc3JjL21vZHVsZXMvdGFza19jbGFzcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC1wcm9qZWN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9saXN0LXByb2plY3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QtcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QtcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG9saXN0LXByb2plY3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvbGlzdC1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QtcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvbGlzdC1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvZG9saXN0LXByb2plY3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG9saXN0LXByb2plY3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2dhbGF4eS5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxufVxcclxcblxcclxcbiNtYWluX2NvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogNDB2dztcXHJcXG4gIGhlaWdodDogMzV2dztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjUsIDIzMiwgMjMzKTtcXHJcXG4gIG1hcmdpbi10b3A6IDN2dztcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJvcmRlci10b3A6IDI1cHggYmxhY2sgc29saWQ7XFxyXFxuICBib3JkZXItYm90dG9tOiAyNXB4IGJsYWNrIHNvbGlkO1xcclxcbn1cXHJcXG5cXHJcXG4jbGlzdF9jb250YWluZXIge1xcclxcbiAgd2lkdGg6IDM1dnc7XFxyXFxuICBoZWlnaHQ6IDMwdnc7XFxyXFxuICBib3JkZXI6IDAuNXB4IHJnYig4MiwgODEsIDgxKSBzb2xpZDtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMCA1cHggcmdiYSgwLCAwLCAwLCAwLjYpO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXHJcXG4gIHBhZGRpbmctbGVmdDogMDtcXHJcXG4gIG1hcmdpbi10b3A6IDIuNXZ3O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxufVxcclxcblxcclxcbiN0YXNrc19saXN0IHtcXHJcXG4gIHdpZHRoOiAzNXZ3O1xcclxcbiAgaGVpZ2h0OiAydnc7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuI2xpc3RfdGl0bGUge1xcclxcbiAgd2lkdGg6IDM0LjV2dztcXHJcXG4gIGhlaWdodDogMnZ3O1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMC4zcHggcmdiKDIwNywgMjA1LCAyMDUpIHNvbGlkO1xcclxcbiAgcGFkZGluZy10b3A6IDA7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDAuNXZ3O1xcclxcbiAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XFxyXFxuICBmb250LXNpemU6IDEuNXZ3O1xcclxcbiAgY29sb3I6IHJnYig0NiwgNDYsIDQ2KTtcXHJcXG59XFxyXFxuXFxyXFxuI3N5bmNfYnV0dG9uIHtcXHJcXG4gIHdpZHRoOiAxLjV2dztcXHJcXG4gIG1hcmdpbi1sZWZ0OiAyMC44dnc7XFxyXFxufVxcclxcblxcclxcbi50YXNrIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHdpZHRoOiAzNC41dnc7XFxyXFxuICBoZWlnaHQ6IDJ2dztcXHJcXG4gIGJvcmRlci1ib3R0b206IDAuM3B4IHJnYigyMDcsIDIwNSwgMjA1KSBzb2xpZDtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XFxyXFxuICBjb2xvcjogcmdiKDQ2LCA0NiwgNDYpO1xcclxcbiAgZm9udC1zaXplOiAxLjJ2dztcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICBwYWRkaW5nLXRvcDogMC41dnc7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDAuNXZ3O1xcclxcbn1cXHJcXG5cXHJcXG4udGFzayAubWVudV9idXR0b24ge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiA1MCU7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxyXFxuICByaWdodDogMC4ydnc7XFxyXFxuICB3aWR0aDogMS4zdnc7XFxyXFxufVxcclxcblxcclxcbi50YXNrIC5idXR0b25fcmVtb3ZlIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogNTAlO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcclxcbiAgcmlnaHQ6IDF2dztcXHJcXG4gIHdpZHRoOiAxLjN2dztcXHJcXG59XFxyXFxuXFxyXFxuI2FkZF9uZXdfdGFzayB7XFxyXFxuICBib3JkZXItYm90dG9tOiAwLjNweCByZ2IoMjA3LCAyMDUsIDIwNSkgc29saWQ7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcXHJcXG59XFxyXFxuXFxyXFxuI2Rlc2NyaXB0aW9uIHtcXHJcXG4gIHdpZHRoOiAzMHZ3O1xcclxcbiAgaGVpZ2h0OiAyLjJ2dztcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXHJcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gIGZvbnQtc2l6ZTogMXZ3O1xcclxcbiAgY29sb3I6IHJnYigxNjcsIDE2NiwgMTY2KTtcXHJcXG4gIHBhZGRpbmctbGVmdDogMC41dnc7XFxyXFxufVxcclxcblxcclxcbi5idXR0b25fYWRkIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICByaWdodDogMC41dnc7XFxyXFxuICB3aWR0aDogMS41dnc7XFxyXFxuICB0b3A6IDAuM3Z3O1xcclxcbn1cXHJcXG5cXHJcXG4uc3luY19pbWcge1xcclxcbiAgd2lkdGg6IDEuNXZ3O1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgdG9wOiAwLjJ2dztcXHJcXG59XFxyXFxuXFxyXFxuI2NsZWFyX2J1dHRvbiB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB0b3A6IDE5LjR2dztcXHJcXG4gIGhlaWdodDogNHZ3O1xcclxcbiAgd2lkdGg6IDM1dnc7XFxyXFxuICBib3JkZXItdG9wOiAwLjNweCByZ2IoMjA3LCAyMDUsIDIwNSkgc29saWQ7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI1LCAyMzIsIDIzMyk7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jY2xlYXJfYWxsIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgY29sb3I6IHJnYigxNjcsIDE2NiwgMTY2KTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbn1cXHJcXG5cXHJcXG4uZWRpdF9pbnB1dCB7XFxyXFxuICB3aWR0aDogMzB2dztcXHJcXG4gIGhlaWdodDogMi4zdnc7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxyXFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuICBmb250LXNpemU6IDF2dztcXHJcXG4gIGNvbG9yOiByZ2IoMTY3LCAxNjYsIDE2Nik7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDAuNXZ3O1xcclxcbiAgbWFyZ2luLXRvcDogLTF2dztcXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLHlEQUE0QztFQUM1Qyw0QkFBNEI7RUFDNUIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixvQ0FBb0M7RUFDcEMsZUFBZTtFQUNmLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCLG1CQUFtQjtFQUNuQiw0QkFBNEI7RUFDNUIsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixtQ0FBbUM7RUFDbkMsc0NBQXNDO0VBQ3RDLDRCQUE0QjtFQUM1QixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsNkNBQTZDO0VBQzdDLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsOENBQThDO0VBQzlDLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsV0FBVztFQUNYLDZDQUE2QztFQUM3Qyw4Q0FBOEM7RUFDOUMsc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsMkJBQTJCO0VBQzNCLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLDJCQUEyQjtFQUMzQixVQUFVO0VBQ1YsWUFBWTtBQUNkOztBQUVBO0VBQ0UsNkNBQTZDO0VBQzdDLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsWUFBWTtFQUNaLGFBQWE7RUFDYiw4Q0FBOEM7RUFDOUMsNEJBQTRCO0VBQzVCLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsWUFBWTtFQUNaLFlBQVk7RUFDWixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsV0FBVztFQUNYLFdBQVc7RUFDWCwwQ0FBMEM7RUFDMUMsb0NBQW9DO0VBQ3BDLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsY0FBYztFQUNkLHFCQUFxQjtFQUNyQix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLDhDQUE4QztFQUM5QyxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLFlBQVk7RUFDWixhQUFhO0VBQ2IsOENBQThDO0VBQzlDLDRCQUE0QjtFQUM1QixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi9hc3NldHMvZ2FsYXh5LmpwZ1xcXCIpO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxufVxcclxcblxcclxcbiNtYWluX2NvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogNDB2dztcXHJcXG4gIGhlaWdodDogMzV2dztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjUsIDIzMiwgMjMzKTtcXHJcXG4gIG1hcmdpbi10b3A6IDN2dztcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJvcmRlci10b3A6IDI1cHggYmxhY2sgc29saWQ7XFxyXFxuICBib3JkZXItYm90dG9tOiAyNXB4IGJsYWNrIHNvbGlkO1xcclxcbn1cXHJcXG5cXHJcXG4jbGlzdF9jb250YWluZXIge1xcclxcbiAgd2lkdGg6IDM1dnc7XFxyXFxuICBoZWlnaHQ6IDMwdnc7XFxyXFxuICBib3JkZXI6IDAuNXB4IHJnYig4MiwgODEsIDgxKSBzb2xpZDtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMCA1cHggcmdiYSgwLCAwLCAwLCAwLjYpO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXHJcXG4gIHBhZGRpbmctbGVmdDogMDtcXHJcXG4gIG1hcmdpbi10b3A6IDIuNXZ3O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxufVxcclxcblxcclxcbiN0YXNrc19saXN0IHtcXHJcXG4gIHdpZHRoOiAzNXZ3O1xcclxcbiAgaGVpZ2h0OiAydnc7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuI2xpc3RfdGl0bGUge1xcclxcbiAgd2lkdGg6IDM0LjV2dztcXHJcXG4gIGhlaWdodDogMnZ3O1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMC4zcHggcmdiKDIwNywgMjA1LCAyMDUpIHNvbGlkO1xcclxcbiAgcGFkZGluZy10b3A6IDA7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDAuNXZ3O1xcclxcbiAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XFxyXFxuICBmb250LXNpemU6IDEuNXZ3O1xcclxcbiAgY29sb3I6IHJnYig0NiwgNDYsIDQ2KTtcXHJcXG59XFxyXFxuXFxyXFxuI3N5bmNfYnV0dG9uIHtcXHJcXG4gIHdpZHRoOiAxLjV2dztcXHJcXG4gIG1hcmdpbi1sZWZ0OiAyMC44dnc7XFxyXFxufVxcclxcblxcclxcbi50YXNrIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHdpZHRoOiAzNC41dnc7XFxyXFxuICBoZWlnaHQ6IDJ2dztcXHJcXG4gIGJvcmRlci1ib3R0b206IDAuM3B4IHJnYigyMDcsIDIwNSwgMjA1KSBzb2xpZDtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XFxyXFxuICBjb2xvcjogcmdiKDQ2LCA0NiwgNDYpO1xcclxcbiAgZm9udC1zaXplOiAxLjJ2dztcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICBwYWRkaW5nLXRvcDogMC41dnc7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDAuNXZ3O1xcclxcbn1cXHJcXG5cXHJcXG4udGFzayAubWVudV9idXR0b24ge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiA1MCU7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxyXFxuICByaWdodDogMC4ydnc7XFxyXFxuICB3aWR0aDogMS4zdnc7XFxyXFxufVxcclxcblxcclxcbi50YXNrIC5idXR0b25fcmVtb3ZlIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogNTAlO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcclxcbiAgcmlnaHQ6IDF2dztcXHJcXG4gIHdpZHRoOiAxLjN2dztcXHJcXG59XFxyXFxuXFxyXFxuI2FkZF9uZXdfdGFzayB7XFxyXFxuICBib3JkZXItYm90dG9tOiAwLjNweCByZ2IoMjA3LCAyMDUsIDIwNSkgc29saWQ7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcXHJcXG59XFxyXFxuXFxyXFxuI2Rlc2NyaXB0aW9uIHtcXHJcXG4gIHdpZHRoOiAzMHZ3O1xcclxcbiAgaGVpZ2h0OiAyLjJ2dztcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXHJcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gIGZvbnQtc2l6ZTogMXZ3O1xcclxcbiAgY29sb3I6IHJnYigxNjcsIDE2NiwgMTY2KTtcXHJcXG4gIHBhZGRpbmctbGVmdDogMC41dnc7XFxyXFxufVxcclxcblxcclxcbi5idXR0b25fYWRkIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICByaWdodDogMC41dnc7XFxyXFxuICB3aWR0aDogMS41dnc7XFxyXFxuICB0b3A6IDAuM3Z3O1xcclxcbn1cXHJcXG5cXHJcXG4uc3luY19pbWcge1xcclxcbiAgd2lkdGg6IDEuNXZ3O1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgdG9wOiAwLjJ2dztcXHJcXG59XFxyXFxuXFxyXFxuI2NsZWFyX2J1dHRvbiB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB0b3A6IDE5LjR2dztcXHJcXG4gIGhlaWdodDogNHZ3O1xcclxcbiAgd2lkdGg6IDM1dnc7XFxyXFxuICBib3JkZXItdG9wOiAwLjNweCByZ2IoMjA3LCAyMDUsIDIwNSkgc29saWQ7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI1LCAyMzIsIDIzMyk7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jY2xlYXJfYWxsIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgY29sb3I6IHJnYigxNjcsIDE2NiwgMTY2KTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbn1cXHJcXG5cXHJcXG4uZWRpdF9pbnB1dCB7XFxyXFxuICB3aWR0aDogMzB2dztcXHJcXG4gIGhlaWdodDogMi4zdnc7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxyXFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuICBmb250LXNpemU6IDF2dztcXHJcXG4gIGNvbG9yOiByZ2IoMTY3LCAxNjYsIDE2Nik7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDAuNXZ3O1xcclxcbiAgbWFyZ2luLXRvcDogLTF2dztcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBUYXNrcyB9IGZyb20gJy4vdGFza19jbGFzcy5qcyc7XG5cbmNvbnN0IHRhc2tzID0gbmV3IFRhc2tzKCk7XG5cbmZ1bmN0aW9uIGFkZFRhc2tTdWJtaXQoKSB7XG4gIGNvbnN0IGVudGVyVGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbnRlcl90YXNrJyk7XG4gIGNvbnN0IGlucHV0RmllbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY3JpcHRpb24nKTtcbiAgaW5wdXRGaWVsZC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2ZW50KSA9PiB7XG4gICAgaWYgKGV2ZW50LmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gaW5wdXRGaWVsZC52YWx1ZTtcbiAgICAgIHRhc2tzLmFkZFRhc2soZGVzY3JpcHRpb24pO1xuICAgICAgdGFza3MuZGlzcGxheVRhc2tzKCk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkX25ld190YXNrJykucmVzZXQoKTtcbiAgICB9XG4gIH0pO1xuICBlbnRlclRhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NyaXB0aW9uJykudmFsdWU7XG4gICAgdGFza3MuYWRkVGFzayhkZXNjcmlwdGlvbik7XG4gICAgdGFza3MuZGlzcGxheVRhc2tzKCk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZF9uZXdfdGFzaycpLnJlc2V0KCk7XG4gIH0pO1xufVxuXG5jb25zdCByZW1vdmVUYXNrQ2xpY2sgPSAoKSA9PiB7XG4gIGNvbnN0IHRhc2tMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tzX2xpc3QnKTtcbiAgdGFza0xpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYnV0dG9uX3JlbW92ZScpKSB7XG4gICAgICBjb25zdCB7IGlkIH0gPSBldmVudC50YXJnZXQuZGF0YXNldC5pZDtcbiAgICAgIHRhc2tzLnJlbW92ZVRhc2soaWQpO1xuICAgICAgdGFza3MuZGlzcGxheVRhc2tzKCk7XG4gICAgfVxuICB9KTtcbn07XG5cbmV4cG9ydCB7IGFkZFRhc2tTdWJtaXQsIHJlbW92ZVRhc2tDbGljayB9OyIsImNvbnN0IHN0YXR1c01ldGhvZHMgPSB7XG4gIHVwZGF0ZVN0YXR1cyhpZCwgY29tcGxldGVkKSB7XG4gICAgY29uc3QgdGFza3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrcycpKSB8fCBbXTtcbiAgICBjb25zdCB0YXNrSW5kZXggPSB0YXNrcy5maW5kSW5kZXgoKHRhc2spID0+IHRhc2suaWQgPT09IGlkKTtcbiAgICBpZiAodGFza0luZGV4ICE9PSAtMSkge1xuICAgICAgdGFza3NbdGFza0luZGV4XS5jb21wbGV0ZWQgPSBjb21wbGV0ZWQ7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza3MnLCBKU09OLnN0cmluZ2lmeSh0YXNrcykpO1xuICAgIH1cbiAgfSxcbiAgY2xlYXJDb21wbGV0ZWRUYXNrcygpIHtcbiAgICBsZXQgdGFza3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrcycpKSB8fCBbXTtcbiAgICB0YXNrcyA9IHRhc2tzLmZpbHRlcigodGFzaykgPT4gIXRhc2suY29tcGxldGVkKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza3MnLCBKU09OLnN0cmluZ2lmeSh0YXNrcykpO1xuICB9LFxufTtcbmV4cG9ydCBkZWZhdWx0IHN0YXR1c01ldGhvZHM7XG4iLCJpbXBvcnQgc3RhdHVzTWV0aG9kcyBmcm9tICcuL2NoZWNrYm94X2V2ZW50cy5qcyc7XG5pbXBvcnQgdHJhc2ggZnJvbSAnLi4vYXNzZXRzL3RyYXNoLW91dGxpbmUuc3ZnJztcbmltcG9ydCBtZW51IGZyb20gJy4uL2Fzc2V0cy9lbGxpcHNpcy12ZXJ0aWNhbC1vdXRsaW5lLnN2Zyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2tzIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy50YXNrcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2tzJykpIHx8IFtdO1xuICB9XG5cbiAgYWRkVGFzayhkZXNjcmlwdGlvbikge1xuICAgIGNvbnN0IHRhc2sgPSB7IGRlc2NyaXB0aW9uLCBjb21wbGV0ZWQ6IGZhbHNlLCBpZDogdGhpcy50YXNrcy5sZW5ndGggKyAxIH07XG4gICAgdGhpcy50YXNrcy5wdXNoKHRhc2spO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrcycsIEpTT04uc3RyaW5naWZ5KHRoaXMudGFza3MpKTtcbiAgfVxuXG4gIHJlbW92ZVRhc2soaWQpIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMudGFza3MuZmluZEluZGV4KCh0YXNrKSA9PiB0YXNrLmlkID09PSBOdW1iZXIoaWQpKTtcbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICB0aGlzLnRhc2tzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICB0aGlzLnVwZGF0ZVRhc2tJZHMoKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrcycsIEpTT04uc3RyaW5naWZ5KHRoaXMudGFza3MpKTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVUYXNrSWRzKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50YXNrcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgdGhpcy50YXNrc1tpXS5pZCA9IGkgKyAxO1xuICAgIH1cbiAgfVxuXG4gIGVkaXRUYXNrKGlkLCBuZXdEZXNjcmlwdGlvbikge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy50YXNrcy5maW5kSW5kZXgoKHRhc2spID0+IHRhc2suaWQgPT09IE51bWJlcihpZCkpO1xuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHRoaXMudGFza3NbaW5kZXhdLmRlc2NyaXB0aW9uID0gbmV3RGVzY3JpcHRpb247XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza3MnLCBKU09OLnN0cmluZ2lmeSh0aGlzLnRhc2tzKSk7XG4gICAgfVxuICB9XG5cbiAgY2xlYXJDb21wbGV0ZWRUYXNrcygpIHtcbiAgICB0aGlzLnRhc2tzID0gdGhpcy50YXNrcy5maWx0ZXIoKHRhc2spID0+IHRhc2suY29tcGxldGVkID09PSBmYWxzZSk7XG4gICAgdGhpcy51cGRhdGVUYXNrSWRzKCk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzJywgSlNPTi5zdHJpbmdpZnkodGhpcy50YXNrcykpO1xuICB9XG5cbiAgZGlzcGxheVRhc2tzKCkge1xuICAgIGNvbnN0IHRhc2tzTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrc19saXN0Jyk7XG4gICAgdGFza3NMaXN0LmlubmVySFRNTCA9ICcnO1xuICAgIHRoaXMudGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgY29uc3QgdGFza0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgdGFza0l0ZW0uY2xhc3NMaXN0LmFkZCgndGFzaycpO1xuXG4gICAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICBjaGVja2JveC50eXBlID0gJ2NoZWNrYm94JztcbiAgICAgIGNoZWNrYm94Lm5hbWUgPSAndGFza19zdGF0dXMnO1xuICAgICAgY2hlY2tib3guY2xhc3NMaXN0LmFkZCgnY2hlY2tib3gnKTtcbiAgICAgIGNoZWNrYm94LmlkID0gYHRhc2tfJHt0YXNrLmlkfWA7XG4gICAgICBjaGVja2JveC5jaGVja2VkID0gdGFzay5jb21wbGV0ZWQ7XG4gICAgICB0YXNrSXRlbS5hcHBlbmRDaGlsZChjaGVja2JveCk7XG5cbiAgICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgIGxhYmVsLnRleHRDb250ZW50ID0gdGFzay5kZXNjcmlwdGlvbjtcbiAgICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgY2hlY2tib3guaWQpO1xuICAgICAgdGFza0l0ZW0uYXBwZW5kQ2hpbGQobGFiZWwpO1xuXG4gICAgICBjb25zdCByZW1vdmVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgIHJlbW92ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdidXR0b25fcmVtb3ZlJyk7XG4gICAgICByZW1vdmVCdXR0b24uZGF0YXNldC5pZCA9IHRhc2suaWQ7XG4gICAgICByZW1vdmVCdXR0b24uc3JjID0gdHJhc2g7XG4gICAgICByZW1vdmVCdXR0b24uYWx0ID0gJyc7XG4gICAgICB0YXNrSXRlbS5hcHBlbmRDaGlsZChyZW1vdmVCdXR0b24pO1xuXG4gICAgICBjb25zdCBtZW51QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICBtZW51QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ21lbnVfYnV0dG9uJyk7XG4gICAgICBtZW51QnV0dG9uLnNyYyA9IG1lbnU7XG4gICAgICBtZW51QnV0dG9uLmFsdCA9ICcnO1xuICAgICAgdGFza0l0ZW0uYXBwZW5kQ2hpbGQobWVudUJ1dHRvbik7XG5cbiAgICAgIHRhc2tzTGlzdC5hcHBlbmRDaGlsZCh0YXNrSXRlbSk7XG5cbiAgICAgIHJlbW92ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICBjb25zdCB7IGlkIH0gPSBldmVudC50YXJnZXQuZGF0YXNldDtcbiAgICAgICAgdGhpcy5yZW1vdmVUYXNrKGlkKTtcbiAgICAgICAgdGhpcy5kaXNwbGF5VGFza3MoKTtcbiAgICAgIH0pO1xuXG4gICAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICBjb25zdCB7IGlkIH0gPSB0YXNrO1xuICAgICAgICBjb25zdCBjb21wbGV0ZWQgPSBldmVudC50YXJnZXQuY2hlY2tlZDtcbiAgICAgICAgdGhpcy51cGRhdGVUYXNrU3RhdHVzKGlkLCBjb21wbGV0ZWQpO1xuICAgICAgfSk7XG5cbiAgICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChldmVudCkgPT4ge1xuICAgICAgICBjb25zdCB7IGlkIH0gPSB0YXNrO1xuICAgICAgICBjb25zdCBjb21wbGV0ZWQgPSBldmVudC50YXJnZXQuY2hlY2tlZDtcbiAgICAgICAgc3RhdHVzTWV0aG9kcy51cGRhdGVTdGF0dXMoaWQsIGNvbXBsZXRlZCk7XG4gICAgICB9KTtcblxuICAgICAgdGFza0l0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgY29uc3QgeyBpZCB9ID0gdGFzaztcbiAgICAgICAgY29uc3QgdGFza1RleHQgPSBldmVudC50YXJnZXQudGV4dENvbnRlbnQ7XG4gICAgICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgaW5wdXQudHlwZSA9ICd0ZXh0JztcbiAgICAgICAgaW5wdXQudmFsdWUgPSB0YXNrVGV4dC50cmltKCk7XG4gICAgICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2VkaXRfaW5wdXQnKTtcbiAgICAgICAgdGFza0l0ZW0uaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIHRhc2tJdGVtLmFwcGVuZENoaWxkKGlucHV0KTtcbiAgICAgICAgaW5wdXQuZm9jdXMoKTtcblxuICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IG5ld0Rlc2NyaXB0aW9uID0gaW5wdXQudmFsdWU7XG4gICAgICAgICAgdGhpcy5lZGl0VGFzayhpZCwgbmV3RGVzY3JpcHRpb24pO1xuICAgICAgICAgIHRoaXMuZGlzcGxheVRhc2tzKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4ge1xuICAgICAgICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgICAgICAgY29uc3QgbmV3RGVzY3JpcHRpb24gPSBpbnB1dC52YWx1ZTtcbiAgICAgICAgICAgIHRoaXMuZWRpdFRhc2soaWQsIG5ld0Rlc2NyaXB0aW9uKTtcbiAgICAgICAgICAgIHRoaXMuZGlzcGxheVRhc2tzKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgdXBkYXRlVGFza1N0YXR1cyhpZCwgY29tcGxldGVkKSB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLnRhc2tzLmZpbmRJbmRleCgodGFzaykgPT4gdGFzay5pZCA9PT0gTnVtYmVyKGlkKSk7XG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgdGhpcy50YXNrc1tpbmRleF0uY29tcGxldGVkID0gY29tcGxldGVkO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzJywgSlNPTi5zdHJpbmdpZnkodGhpcy50YXNrcykpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgeyBUYXNrcyB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiaW5kZXhcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBUYXNrcyB9IGZyb20gJy4vbW9kdWxlcy90YXNrX2NsYXNzLmpzJztcbmltcG9ydCB7IGFkZFRhc2tTdWJtaXQsIHJlbW92ZVRhc2tDbGljayB9IGZyb20gJy4vbW9kdWxlcy9hZGRfcmVtb3ZlX3Rhc2suanMnO1xuaW1wb3J0IHN0YXR1c01ldGhvZHMgZnJvbSAnLi9tb2R1bGVzL2NoZWNrYm94X2V2ZW50cy5qcyc7XG5pbXBvcnQgc3luYyBmcm9tICcuL2Fzc2V0cy9zeW5jLW91dGxpbmUuc3ZnJztcbmltcG9ydCBlbnRlciBmcm9tICcuL2Fzc2V0cy9lbnRlci5zdmcnO1xuXG5jb25zdCBzeW5jTG9jYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3luY19idXR0b24nKTtcbmNvbnN0IHN5bmNJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbnN5bmNJbWcuY2xhc3NMaXN0LmFkZCgnc3luY19pbWcnKTtcbnN5bmNJbWcuc3JjID0gc3luYztcbnN5bmNJbWcuYWx0ID0gJyc7XG5zeW5jTG9jYXRpb24uYXBwZW5kQ2hpbGQoc3luY0ltZyk7XG5cbmNvbnN0IGVudGVyTG9jYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uX2FkZCcpO1xuY29uc3QgZW50ZXJJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbmVudGVySW1nLmNsYXNzTGlzdC5hZGQoJ2VudGVyX3Rhc2snKTtcbmVudGVySW1nLnNyYyA9IGVudGVyO1xuZW50ZXJJbWcuYWx0ID0gJyc7XG5lbnRlckxvY2F0aW9uLmFwcGVuZENoaWxkKGVudGVySW1nKTtcblxuY29uc3QgdGFza3MgPSBuZXcgVGFza3MoKTtcbnRhc2tzLmRpc3BsYXlUYXNrcygpO1xuYWRkVGFza1N1Ym1pdCgpO1xucmVtb3ZlVGFza0NsaWNrKCk7XG5cbmNvbnN0IGNsZWFyQWxsQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NsZWFyX2FsbCcpO1xuY2xlYXJBbGxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIHN0YXR1c01ldGhvZHMuY2xlYXJDb21wbGV0ZWRUYXNrcygpO1xuICB0YXNrcy5jbGVhckNvbXBsZXRlZFRhc2tzKCk7XG4gIHRhc2tzLmRpc3BsYXlUYXNrcygpO1xufSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9