"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/favourite",{

/***/ "./src/pages/favourite.tsx":
/*!*********************************!*\
  !*** ./src/pages/favourite.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ FavSubBreed; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ \"./src/components/Layout.tsx\");\n/* harmony import */ var _styles_DogCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/DogCard */ \"./src/styles/DogCard.ts\");\n/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/theme */ \"./src/styles/theme.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/andreiilisei/Coding Practice/practiceProjShape/ShapeDogTest/ShapeDogTest/src/pages/favourite.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction FavSubBreed() {\n  _s();\n\n  var _this = this;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),\n      notes = _useState[0],\n      setNotes = _useState[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    var json = localStorage.getItem(\"favPic\");\n    var savedNotes = JSON.parse(json);\n\n    if (savedNotes) {\n      setNotes(savedNotes);\n    }\n  }, []);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    if (localStorage) {\n      var getLocalState = localStorage.getItem(\"favPic\");\n      console.log(\"LocalState: \", getLocalState);\n    }\n  }, []);\n  var favouriteSubBreedPicture = JSON.parse(localStorage.getItem(\"favPic\") || \"null\");\n\n  var getSubBreedName = function getSubBreedName(picture) {\n    return \"\".concat(picture.split(\"/\")[4]);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    children: notes.map(function (subBreedName) {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_styles_DogCard__WEBPACK_IMPORTED_MODULE_2__.DogCard, {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_styles_DogCard__WEBPACK_IMPORTED_MODULE_2__.DogImage, {\n            src: subBreedName.picture\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 39,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_styles_DogCard__WEBPACK_IMPORTED_MODULE_2__.DogName, {\n            theme: _styles_theme__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n            children: getSubBreedName(subBreedName.picture)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 40,\n            columnNumber: 15\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 38,\n          columnNumber: 13\n        }, _this)\n      }, subBreedName.id, false, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 11\n      }, _this);\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 34,\n    columnNumber: 5\n  }, this);\n}\n\n_s(FavSubBreed, \"eI97U74WWn7LZv8elnKHdI/J0uk=\");\n\n_c = FavSubBreed;\n\nvar _c;\n\n$RefreshReg$(_c, \"FavSubBreed\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvZmF2b3VyaXRlLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdBOztBQUVlLFNBQVNRLFdBQVQsR0FBdUI7QUFBQTs7QUFBQTs7QUFDcEMsa0JBQTBCRCwrQ0FBUSxDQUFDLEVBQUQsQ0FBbEM7QUFBQSxNQUFPRSxLQUFQO0FBQUEsTUFBY0MsUUFBZDs7QUFFQUosRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTUssSUFBSSxHQUFHQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsUUFBckIsQ0FBYjtBQUNBLFFBQU1DLFVBQVUsR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdMLElBQVgsQ0FBbkI7O0FBQ0EsUUFBSUcsVUFBSixFQUFnQjtBQUNkSixNQUFBQSxRQUFRLENBQUNJLFVBQUQsQ0FBUjtBQUNEO0FBQ0YsR0FOUSxFQU1OLEVBTk0sQ0FBVDtBQVFBUixFQUFBQSxnREFBUyxDQUFDLFlBQU07QUFDZCxRQUFJTSxZQUFKLEVBQWtCO0FBQ2hCLFVBQU1LLGFBQWEsR0FBR0wsWUFBWSxDQUFDQyxPQUFiLENBQXFCLFFBQXJCLENBQXRCO0FBQ0FLLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGNBQVosRUFBNEJGLGFBQTVCO0FBQ0Q7QUFDRixHQUxRLEVBS04sRUFMTSxDQUFUO0FBT0EsTUFBTUcsd0JBQXdCLEdBQUdMLElBQUksQ0FBQ0MsS0FBTCxDQUFXSixZQUFZLENBQUNDLE9BQWIsQ0FBcUIsUUFBckIsS0FBa0MsTUFBN0MsQ0FBakM7O0FBRUEsTUFBTVEsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDQyxPQUFELEVBQXFCO0FBQzNDLHFCQUFVQSxPQUFPLENBQUNDLEtBQVIsQ0FBYyxHQUFkLEVBQW1CLENBQW5CLENBQVY7QUFDRCxHQUZEOztBQUlBLHNCQUNFLDhEQUFDLDBEQUFEO0FBQUEsY0FDR2QsS0FBSyxDQUFDZSxHQUFOLENBQVUsVUFBQ0MsWUFBRCxFQUF1QjtBQUNoQywwQkFDRTtBQUFBLCtCQUNFLDhEQUFDLG9EQUFEO0FBQUEsa0NBQ0UsOERBQUMscURBQUQ7QUFBVSxlQUFHLEVBQUVBLFlBQVksQ0FBQ0g7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFLDhEQUFDLG9EQUFEO0FBQVMsaUJBQUssRUFBRWpCLHFEQUFoQjtBQUFBLHNCQUF3QmdCLGVBQWUsQ0FBQ0ksWUFBWSxDQUFDSCxPQUFkO0FBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsU0FBVUcsWUFBWSxDQUFDQyxFQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFRRCxLQVRBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBY0Q7O0dBdEN1QmxCOztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvZmF2b3VyaXRlLnRzeD8wMzBjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcbmltcG9ydCB7IERvZ0NhcmQsIERvZ0ltYWdlLCBEb2dOYW1lIH0gZnJvbSBcIi4uL3N0eWxlcy9Eb2dDYXJkXCI7XG5pbXBvcnQgdGhlbWUgZnJvbSBcIi4uL3N0eWxlcy90aGVtZVwiO1xuaW1wb3J0IHsgRG9nIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgRHJvcGRvd24gZnJvbSBcInJlYWN0LWRyb3Bkb3duXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZhdlN1YkJyZWVkKCkge1xuICBjb25zdCBbbm90ZXMsIHNldE5vdGVzXSA9IHVzZVN0YXRlKFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImZhdlBpY1wiKTtcbiAgICBjb25zdCBzYXZlZE5vdGVzID0gSlNPTi5wYXJzZShqc29uKTtcbiAgICBpZiAoc2F2ZWROb3Rlcykge1xuICAgICAgc2V0Tm90ZXMoc2F2ZWROb3Rlcyk7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAobG9jYWxTdG9yYWdlKSB7XG4gICAgICBjb25zdCBnZXRMb2NhbFN0YXRlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJmYXZQaWNcIik7XG4gICAgICBjb25zb2xlLmxvZyhcIkxvY2FsU3RhdGU6IFwiLCBnZXRMb2NhbFN0YXRlKTtcbiAgICB9XG4gIH0sIFtdKTtcblxuICBjb25zdCBmYXZvdXJpdGVTdWJCcmVlZFBpY3R1cmUgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZmF2UGljXCIpIHx8IFwibnVsbFwiKTtcblxuICBjb25zdCBnZXRTdWJCcmVlZE5hbWUgPSAocGljdHVyZTogc3RyaW5nKSA9PiB7XG4gICAgcmV0dXJuIGAke3BpY3R1cmUuc3BsaXQoXCIvXCIpWzRdfWA7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAge25vdGVzLm1hcCgoc3ViQnJlZWROYW1lOiBEb2cpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGtleT17c3ViQnJlZWROYW1lLmlkfT5cbiAgICAgICAgICAgIDxEb2dDYXJkPlxuICAgICAgICAgICAgICA8RG9nSW1hZ2Ugc3JjPXtzdWJCcmVlZE5hbWUucGljdHVyZX0gLz5cbiAgICAgICAgICAgICAgPERvZ05hbWUgdGhlbWU9e3RoZW1lfT57Z2V0U3ViQnJlZWROYW1lKHN1YkJyZWVkTmFtZS5waWN0dXJlKX08L0RvZ05hbWU+XG4gICAgICAgICAgICA8L0RvZ0NhcmQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgICB9KX1cbiAgICA8L0xheW91dD5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkxheW91dCIsIkRvZ0NhcmQiLCJEb2dJbWFnZSIsIkRvZ05hbWUiLCJ0aGVtZSIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiRmF2U3ViQnJlZWQiLCJub3RlcyIsInNldE5vdGVzIiwianNvbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzYXZlZE5vdGVzIiwiSlNPTiIsInBhcnNlIiwiZ2V0TG9jYWxTdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJmYXZvdXJpdGVTdWJCcmVlZFBpY3R1cmUiLCJnZXRTdWJCcmVlZE5hbWUiLCJwaWN0dXJlIiwic3BsaXQiLCJtYXAiLCJzdWJCcmVlZE5hbWUiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/favourite.tsx\n");

/***/ })

});