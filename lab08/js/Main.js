/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/ts/Main.ts":
/*!************************!*\
  !*** ./src/ts/Main.ts ***!
  \************************/
/***/ (() => {

eval("\n\nvar buttonSpan = document.getElementById('Buttons');\nvar s = document.getElementById(\"styl\");\nvar styles = [\"./css/style.css\", \"./css/style2.css\"];\nvar currentStyle = Math.floor(Math.random() * styles.length) + 1;\nif (s) {\n  if (currentStyle > 0 && currentStyle <= styles.length) {\n    currentStyle -= 1;\n    s.setAttribute(\"href\", styles[currentStyle]);\n  }\n}\n;\nvar _loop_1 = function _loop_1(i) {\n  var btn = document.createElement(\"button\");\n  btn.addEventListener('click', function handleClick(event) {\n    if (s) {\n      s.setAttribute(\"href\", styles[i]);\n    }\n  });\n  var text = document.createTextNode(\"STYL: \" + i);\n  btn.appendChild(text);\n  buttonSpan === null || buttonSpan === void 0 ? void 0 : buttonSpan.appendChild(btn);\n};\nfor (var i = 0; i < styles.length; ++i) {\n  _loop_1(i);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvTWFpbi50cy5qcyIsIm1hcHBpbmdzIjoiQUFBYTs7QUFDYixJQUFJQSxVQUFVLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLFNBQVMsQ0FBQztBQUNuRCxJQUFJQyxDQUFDLEdBQUdGLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLE1BQU0sQ0FBQztBQUN2QyxJQUFJRSxNQUFNLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxrQkFBa0IsQ0FBQztBQUNwRCxJQUFJQyxZQUFZLEdBQUdDLElBQUksQ0FBQ0MsS0FBSyxDQUFDRCxJQUFJLENBQUNFLE1BQU0sRUFBRSxHQUFHSixNQUFNLENBQUNLLE1BQU0sQ0FBQyxHQUFHLENBQUM7QUFDaEUsSUFBSU4sQ0FBQyxFQUFFO0VBQ0gsSUFBSUUsWUFBWSxHQUFHLENBQUMsSUFBSUEsWUFBWSxJQUFJRCxNQUFNLENBQUNLLE1BQU0sRUFBRTtJQUNuREosWUFBWSxJQUFJLENBQUM7SUFDakJGLENBQUMsQ0FBQ08sWUFBWSxDQUFDLE1BQU0sRUFBRU4sTUFBTSxDQUFDQyxZQUFZLENBQUMsQ0FBQztFQUNoRDtBQUNKO0FBQ0E7QUFDQSxJQUFJTSxPQUFPLEdBQUcsU0FBVkEsT0FBTyxDQUFhQyxDQUFDLEVBQUU7RUFDdkIsSUFBSUMsR0FBRyxHQUFHWixRQUFRLENBQUNhLGFBQWEsQ0FBQyxRQUFRLENBQUM7RUFDMUNELEdBQUcsQ0FBQ0UsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFNBQVNDLFdBQVcsQ0FBQ0MsS0FBSyxFQUFFO0lBQ3RELElBQUlkLENBQUMsRUFBRTtNQUNIQSxDQUFDLENBQUNPLFlBQVksQ0FBQyxNQUFNLEVBQUVOLE1BQU0sQ0FBQ1EsQ0FBQyxDQUFDLENBQUM7SUFDckM7RUFDSixDQUFDLENBQUM7RUFDRixJQUFJTSxJQUFJLEdBQUdqQixRQUFRLENBQUNrQixjQUFjLENBQUMsUUFBUSxHQUFHUCxDQUFDLENBQUM7RUFDaERDLEdBQUcsQ0FBQ08sV0FBVyxDQUFDRixJQUFJLENBQUM7RUFDckJsQixVQUFVLEtBQUssSUFBSSxJQUFJQSxVQUFVLEtBQUssS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDLEdBQUdBLFVBQVUsQ0FBQ29CLFdBQVcsQ0FBQ1AsR0FBRyxDQUFDO0FBQ3ZGLENBQUM7QUFDRCxLQUFLLElBQUlELENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR1IsTUFBTSxDQUFDSyxNQUFNLEVBQUUsRUFBRUcsQ0FBQyxFQUFFO0VBQ3BDRCxPQUFPLENBQUNDLENBQUMsQ0FBQztBQUNkIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGFyYXZlbC8uL3NyYy90cy9NYWluLnRzPzQ4OGUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgYnV0dG9uU3BhbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdCdXR0b25zJyk7XG52YXIgcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3R5bFwiKTtcbnZhciBzdHlsZXMgPSBbXCIuL2Nzcy9zdHlsZS5jc3NcIiwgXCIuL2Nzcy9zdHlsZTIuY3NzXCJdO1xudmFyIGN1cnJlbnRTdHlsZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHN0eWxlcy5sZW5ndGgpICsgMTtcbmlmIChzKSB7XG4gICAgaWYgKGN1cnJlbnRTdHlsZSA+IDAgJiYgY3VycmVudFN0eWxlIDw9IHN0eWxlcy5sZW5ndGgpIHtcbiAgICAgICAgY3VycmVudFN0eWxlIC09IDE7XG4gICAgICAgIHMuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBzdHlsZXNbY3VycmVudFN0eWxlXSk7XG4gICAgfVxufVxuO1xudmFyIF9sb29wXzEgPSBmdW5jdGlvbiAoaSkge1xuICAgIHZhciBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIGhhbmRsZUNsaWNrKGV2ZW50KSB7XG4gICAgICAgIGlmIChzKSB7XG4gICAgICAgICAgICBzLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgc3R5bGVzW2ldKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHZhciB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJTVFlMOiBcIiArIGkpO1xuICAgIGJ0bi5hcHBlbmRDaGlsZCh0ZXh0KTtcbiAgICBidXR0b25TcGFuID09PSBudWxsIHx8IGJ1dHRvblNwYW4gPT09IHZvaWQgMCA/IHZvaWQgMCA6IGJ1dHRvblNwYW4uYXBwZW5kQ2hpbGQoYnRuKTtcbn07XG5mb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7ICsraSkge1xuICAgIF9sb29wXzEoaSk7XG59XG4iXSwibmFtZXMiOlsiYnV0dG9uU3BhbiIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzIiwic3R5bGVzIiwiY3VycmVudFN0eWxlIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibGVuZ3RoIiwic2V0QXR0cmlidXRlIiwiX2xvb3BfMSIsImkiLCJidG4iLCJjcmVhdGVFbGVtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhbmRsZUNsaWNrIiwiZXZlbnQiLCJ0ZXh0IiwiY3JlYXRlVGV4dE5vZGUiLCJhcHBlbmRDaGlsZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/ts/Main.ts\n");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY3NzL3N0eWxlLmNzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sYXJhdmVsLy4vc3JjL2Nzcy9zdHlsZS5jc3M/NGVhYyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/css/style.css\n");

/***/ }),

/***/ "./src/css/style2.css":
/*!****************************!*\
  !*** ./src/css/style2.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY3NzL3N0eWxlMi5jc3MuanMiLCJtYXBwaW5ncyI6IjtBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGFyYXZlbC8uL3NyYy9jc3Mvc3R5bGUyLmNzcz8xNWEyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/css/style2.css\n");

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
/******/ 			// no module.id needed
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
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/Main": 0,
/******/ 			"css/style2": 0,
/******/ 			"css/style": 0
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
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunklaravel"] = self["webpackChunklaravel"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/style2","css/style"], () => (__webpack_require__("./src/ts/Main.ts")))
/******/ 	__webpack_require__.O(undefined, ["css/style2","css/style"], () => (__webpack_require__("./src/css/style.css")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/style2","css/style"], () => (__webpack_require__("./src/css/style2.css")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;