/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/easydemo.css":
/*!***************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/easydemo.css ***!
  \***************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".easydemo {\\r\\n    height: 500px;\\r\\n    width: 500px;\\r\\n}\\r\\n  \\r\\n.easydemo p {\\r\\n    display: flex;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack4.0/./src/components/easydemo.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://webpack4.0/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/components/easydemo.html":
/*!**************************************!*\
  !*** ./src/components/easydemo.html ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Module\nvar code = \"<div class=\\\"easydemo\\\">\\r\\n    \\r\\n    <canvas id=\\\"rateCanvas\\\" width=\\\"500\\\" height=\\\"500\\\"></canvas>\\r\\n\\r\\n</div>\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://webpack4.0/./src/components/easydemo.html?");

/***/ }),

/***/ "./src/components/easydemo.css":
/*!*************************************!*\
  !*** ./src/components/easydemo.css ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_easydemo_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./easydemo.css */ \"./node_modules/css-loader/dist/cjs.js!./src/components/easydemo.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_easydemo_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_easydemo_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://webpack4.0/./src/components/easydemo.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack4.0/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/components/easydemo.js":
/*!************************************!*\
  !*** ./src/components/easydemo.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _easydemo_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./easydemo.html */ \"./src/components/easydemo.html\");\n/* harmony import */ var _easydemo_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./easydemo.css */ \"./src/components/easydemo.css\");\n\r\n\r\n\r\nfunction easydemo () {\r\n    return {\r\n      name: 'easydemo',\r\n      template: _easydemo_html__WEBPACK_IMPORTED_MODULE_0__.default\r\n    }\r\n  }\r\n  \r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (easydemo);\n\n//# sourceURL=webpack://webpack4.0/./src/components/easydemo.js?");

/***/ }),

/***/ "./src/components/ratecanvas.js":
/*!**************************************!*\
  !*** ./src/components/ratecanvas.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ RateCanvas)\n/* harmony export */ });\n\r\nclass RateCanvas {\r\n    constructor(params){\r\n        params = params || {};\r\n        this.unit = params.unit || '';   //占比单位\r\n        this.speed = params.speed || 1;  //动画速度\r\n        this.bRepeatAni = params.bRepeatAni || false;   //是否重复动画\r\n        this.delayTime = params.delayTime || 10*1000;   //重复执行动画的间隔\r\n        this.circelLineBg = params.circelLineBg || 'rgba(233,95,104,0.6)';   //圆圈背景\r\n        this.gradientBgStart = params.gradientBgStart || 'rgba(4,178,195,0.6)';   //占比渐变开始\r\n        this.gradientBgEnd = params.gradientBgEnd || 'rgba(4,178,195,1)';   //占比渐变结束\r\n        this.innerLineStart = params.innerLineStart || 'rgba(2, 184, 198, 0)';   //内部线\r\n        this.innerLineEnd = params.innerLineEnd || 'rgba(4,178,195,1)';   //内部线\r\n        this.gradientLineWidth = params.gradientLineWidth || 30;   //宽\r\n        this.borderWidth = params.borderWidth || 3;   //边框\r\n        this.borderColor = params.borderColor ||'#000000';   //边框\r\n        this.tickBorderWidth = params.tickBorderWidth || 5;   //刻度块\r\n        this.tickBorderColor = params.tickBorderColor || '#00feff';   //刻度块色值\r\n        this.showPercent = params.showPercent || true;\r\n        this.showValue = params.showValue || true;\r\n        this.vPositionX = params.vPositionX || 'center';\r\n        this.vPositionY = params.vPositionY || 80;\r\n        this.detailFontSize = params.detailFontSize || 48;\r\n        this.detailFontFamily = params.detailFontFamily || 'Arial';\r\n        this.detailFontColor = params.detailFontColor || '#000000';\r\n        this.footerImg = params.footerImg || null;\r\n        this.promises = params.promises || [];\r\n    }\r\n    init(dom,dataInfo){\r\n        let _this = this;\r\n        let canvas = dom;\r\n        let gradientBgStart = this.gradientBgStart || 'rgba(4,178,195,0.6)',\r\n            gradientBgEnd = this.gradientBgEnd || 'rgba(4,178,195,1)',\r\n            innerLineStart = this.innerLineStart || 'rgba(2, 184, 198, 0)',\r\n            innerLineEnd = this.innerLineEnd || 'rgba(2, 184, 198, 1)';\r\n\r\n        if(!canvas) throw new Error(\"config not found: \"+canvasId);\r\n\r\n        this._radius = Math.min(canvas.offsetWidth, canvas.offsetHeight) * 0.5;\r\n        canvas.width = this._radius * 2;\r\n        canvas.height = this._radius * 2;\r\n        this._ctx = canvas.getContext('2d');\r\n        this._ctx.translate(this._radius, this._radius); //将坐标原点移到画布中心\r\n\r\n        // 圆环颜色渐变\r\n        this._fillGrad = this._ctx.createRadialGradient(this._radius, this._radius, 0, this._radius, this._radius, this._radius * 2);    \r\n        this._fillGrad.addColorStop(0.0,gradientBgStart);  //'#0b3e59' \r\n        //this._fillGrad.addColorStop(0.5,'rgba(4,178,195,0.5)');  //'#0c6f89'\r\n        this._fillGrad.addColorStop(1,gradientBgEnd);  //'#04b2c3'\r\n\r\n        // 内部线渐变\r\n        this._lineGrd = this._ctx.createLinearGradient( 0, this._radius, 0, - this._radius * 0.5);     \r\n        this._lineGrd.addColorStop(0.5, innerLineStart);      \r\n        this._lineGrd.addColorStop(1, innerLineEnd);\r\n\r\n        var gradientLineWidth = isNaN(this.gradientLineWidth) ? 100 : Math.abs(100-this.gradientLineWidth);\r\n        this._innerRadius = this._radius*gradientLineWidth/100;\r\n        this._outerRadius = this._radius;\r\n        this._borderLineWidth = this.borderWidth || 0;\r\n        this._brickLineWidth = this.tickBorderWidth || 0;\r\n        this._borderColor = this.borderColor || 'transparent';\r\n        this._brickColor = this.tickBorderColor || 'transparent'; // 亮绿色的宽度\r\n        this._startAngle = 150 * Math.PI / 180;\r\n        this._totalAngle = 240 * Math.PI / 180;\r\n        this._textDistance = (this._innerRadius + this._outerRadius) * 0.5;\r\n        this._currentNum = 0; // 显示百分数\r\n\r\n        // let promise = new Promise(function(resolve, reject){\r\n        //     var img = new Image();\r\n        //     img.onload = function(){\r\n        //         _this.footerImg = img;\r\n        //         resolve();\r\n        //     }\r\n        //     img.src = '../assets/footer.png';\r\n        // });\r\n        // this.promises.push(promise);\r\n\r\n        this.initData(dataInfo)\r\n    }\r\n    initData(data=[]){\r\n        let _this = this;\r\n        if(data.length){\r\n            data = data[0];\r\n            this._totalRate = (data.currentNum / data.totalNum).toFixed(4) * 100;\r\n\r\n            this._currentNum = data.currentNum;\r\n            this._totalNum = data.totalNum;\r\n            this._currentName = data.currentName;\r\n            this._curRate = 0; // 百分比文字\r\n            this._curAngle = 0; // 环形填充角度\r\n            if(this._requestID) {\r\n                cancelAnimationFrame(this._requestID);\r\n            }\r\n            if(this._timeoutID) {\r\n                clearTimeout(this._timeoutID);\r\n            }\r\n\r\n            Promise.all(this.promises).then(() => {\r\n                _this.drawCanvasContent(); \r\n            });\r\n            \r\n        }\r\n    }\r\n    drawCanvasContent(){//绘制完整canvas rate: 百分比\r\n        this._clearCanvasRect();\r\n        this._curRate = Math.min(this._curRate, this._totalRate);\r\n        this._drawRing(this._totalAngle, this.circelLineBg ||'rgba(233,95,104,0.8)'); \r\n        this._curAngle && this._drawRing(this._curAngle, this._fillGrad);\r\n        this._drawInnerCircleBg();\r\n        if(this.showValue) this._drawfooterText();\r\n        this._ringInnerText();\r\n        if(!this._totalRate) return;\r\n        this._curRate += this.speed;\r\n        this._curAngle = this._totalAngle * this._curRate / 100;\r\n        if(this._curRate < this._totalRate + this.speed){\r\n          this._requestID = requestAnimationFrame(() => {this.drawCanvasContent()});\r\n        } else {\r\n            if(this.bRepeatAni) {\r\n                this._timeoutID = setTimeout(() => {\r\n                    this._curRate = 0;\r\n                    this._curAngle = 0; // 环形填充角度\r\n                    this.drawCanvasContent();\r\n                }, this.delayTime);\r\n            }\r\n        }\r\n    }\r\n    _clearCanvasRect(){//清除canvas内容\r\n        this._ctx.clearRect(-this._radius, -this._radius, this._radius * 2, this._radius * 2);\r\n    }\r\n    _drawRing(angle, fillColor){// 红色背景圆环, 蓝色渐变进度\r\n        this._ctx.save();\r\n        // 裁切扇形 闭合区域\r\n        this._ctx.beginPath();\r\n        this._ctx.rotate(this._startAngle);\r\n        this._ctx.arc(0, 0, this._outerRadius, 0, angle, false);\r\n        this._ctx.arc(0, 0, this._innerRadius, angle, 0, true);\r\n        this._ctx.closePath();\r\n        this._ctx.clip();\r\n        this._ctx.fillStyle = fillColor;\r\n        this._ctx.fill();\r\n        // 画弧线顶部边界线\r\n        this._ctx.strokeStyle = this._borderColor;\r\n        this._ctx.lineWidth = this._borderLineWidth; \r\n        this._ctx.beginPath();\r\n        this._ctx.arc(0, 0, this._outerRadius, 0, this._totalAngle, false);\r\n        this._ctx.stroke();\r\n        // 画弧线底部边界线\r\n        this._ctx.strokeStyle = this._borderColor;\r\n        this._ctx.lineWidth = this._borderLineWidth; \r\n        this._ctx.beginPath();\r\n        this._ctx.arc(0, 0, this._innerRadius, 0, this._totalAngle, false);\r\n        this._ctx.stroke(); \r\n        this._ctx.restore();\r\n        // 起始位置添加横条\r\n        this._ctx.save();\r\n        this._ctx.rotate(this._startAngle);\r\n        this._ctx.strokeStyle = this._brickColor;\r\n        this._ctx.lineWidth = this._brickLineWidth; \r\n        this._ctx.beginPath();\r\n        this._ctx.moveTo(this._innerRadius, 0);\r\n        this._ctx.lineTo(this._outerRadius, 0);\r\n        this._ctx.closePath();\r\n        this._ctx.stroke();\r\n        this._ctx.restore();\r\n        this._ctx.save();\r\n        //终止位置添加横条\r\n        var endAngle = this._startAngle + angle;\r\n        this._ctx.rotate(endAngle);\r\n        this._ctx.strokeStyle = this._brickColor;\r\n        this._ctx.lineWidth = this._brickLineWidth; \r\n        this._ctx.beginPath();\r\n        this._ctx.moveTo(this._innerRadius, 0);\r\n        this._ctx.lineTo(this._outerRadius, 0);\r\n        this._ctx.closePath();\r\n        this._ctx.stroke();\r\n        this._ctx.restore();\r\n    }\r\n    _drawInnerCircleBg(){// 内部圆圈+文字\r\n        this._ctx.beginPath();\r\n        // 渐变弧形\r\n        this._ctx.arc(0, 0, this._innerRadius * 0.8, this._startAngle, this._startAngle + this._totalAngle);\r\n        this._ctx.strokeStyle = this._lineGrd;\r\n        this._ctx.lineWidth = this._borderLineWidth;\r\n        this._ctx.stroke();\r\n        // 增加文字\r\n        if(this.showPercent){\r\n            this._ctx.font = this.detailFontSize+\"px \"+this.detailFontFamily;\r\n            this._ctx.fillStyle = this.detailFontColor || \"#00f5ff\";\r\n            this._ctx.textAlign='center';\r\n            this._ctx.textBaseline = 'middle';\r\n            // this._ctx.fillText(this._curRate.toFixed(0) + this.unit, 0, 0);\r\n            this._ctx.fillText(this._currentNum.toFixed(0) + this.unit, 0, 0);\r\n        }\r\n    }\r\n    _drawfooterText(){// 底部文字+底座图片\r\n        this._ctx.save();\r\n        this._ctx.translate(0, this._innerRadius * this.vPositionY/100);\r\n        this._ctx.font = this.detailFontSize+\"px \"+this.detailFontFamily;\r\n        this._ctx.fillStyle = this.detailFontColor ||\"#00f5ff\";\r\n        this._ctx.textAlign= this.vPositionX ||'center';\r\n        this._ctx.textBaseline = 'middle';\r\n        this._ctx.fillText(this._currentName ||0, 0, 0);\r\n        this._ctx.restore();\r\n\r\n        // this._ctx.save();\r\n        // this._ctx.translate(0, this._innerRadius);\r\n        // this._ctx.scale(1, 1);\r\n        // this._ctx.drawImage(this.footerImg, -this.footerImg.width / 2, -this.footerImg.height / 2, this.footerImg.width, this.footerImg.height);\r\n        // this._ctx.restore();\r\n    }\r\n    _ringInnerText(){// 环形上的文字\r\n        this._ctx.save();\r\n        this._ctx.rotate(this._startAngle * 1.08);\r\n        this._ctx.font = \"24px Arial\";\r\n        this._ctx.fillStyle = this.tickBorderColor || \"#ecebeb\";\r\n        this._ctx.textAlign='center';\r\n        this._ctx.textBaseline = 'middle';\r\n        this._ctx.fillText('0', this._textDistance, 0);\r\n        this._ctx.restore();\r\n        this._ctx.save();\r\n        var endAngle = this._startAngle + this._totalAngle;\r\n        this._ctx.rotate(endAngle * 0.97);\r\n        this._ctx.font = \"24px Arial\";\r\n        this._ctx.fillStyle = this.tickBorderColor ||\"#ecebeb\";\r\n        this._ctx.textAlign='center';\r\n        this._ctx.textBaseline = 'middle';\r\n        this._ctx.fillText(this._totalNum||0, this._textDistance, 0);\r\n        this._ctx.restore();\r\n    }\r\n};\n\n//# sourceURL=webpack://webpack4.0/./src/components/ratecanvas.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_easydemo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/easydemo */ \"./src/components/easydemo.js\");\n/* harmony import */ var _components_ratecanvas_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/ratecanvas.js */ \"./src/components/ratecanvas.js\");\n\r\n\r\n\r\nconst App = function () {\r\n  var dom = document.getElementById('app')\r\n  var easydemo = new _components_easydemo__WEBPACK_IMPORTED_MODULE_0__.default()\r\n  var rateCanvas = new _components_ratecanvas_js__WEBPACK_IMPORTED_MODULE_1__.default()\r\n  dom.innerHTML = easydemo.template\r\n  rateCanvas.init(dom.querySelector(\"#rateCanvas\"),[{currentNum:60,totalNum:100,currentName:\"12\"}])\r\n}\r\n\r\nnew App()\n\n//# sourceURL=webpack://webpack4.0/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;