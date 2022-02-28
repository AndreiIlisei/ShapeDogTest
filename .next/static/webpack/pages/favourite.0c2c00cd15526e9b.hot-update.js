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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ FavSubBreed; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ \"./src/components/Layout.tsx\");\n/* harmony import */ var _styles_DogCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/DogCard */ \"./src/styles/DogCard.ts\");\n/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/theme */ \"./src/styles/theme.ts\");\n/* harmony import */ var react_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dropdown */ \"./node_modules/react-dropdown/dist/index.js\");\n/* harmony import */ var _styles_Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Container */ \"./src/styles/Container.tsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/andreiilisei/Coding Practice/practiceProjShape/ShapeDogTest/ShapeDogTest/src/pages/favourite.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction FavSubBreed() {\n  _s();\n\n  var _this = this;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),\n      favouritePic = _useState[0],\n      setfavouritePic = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"All Breeds\"),\n      selectedDog = _useState2[0],\n      setSelectedDog = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),\n      filteredDogs = _useState3[0],\n      setFilteredDogs = _useState3[1]; // Check if the favPic exists.\n\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    var favouriteDogs = localStorage.getItem(\"favPic\");\n    var savedDogs = JSON.parse(favouriteDogs);\n\n    if (savedDogs) {\n      setfavouritePic(savedDogs);\n    }\n  }, []); // Get the name of the Dogs from the string.\n\n  var getSubBreedName = function getSubBreedName(picture) {\n    return \"\".concat(picture.split(\"/\")[4]);\n  };\n\n  var getBreedNames = function getBreedNames() {\n    var breedNames = [\"All Breeds\"];\n    favouritePic.forEach(function (name) {\n      var dogName = name.picture.split(\"/\")[4];\n      if (breedNames.indexOf(dogName) === -1) breedNames.push(dogName);\n    });\n    return breedNames;\n  };\n\n  var handleDogChange = function handleDogChange(event) {\n    setfavouritePic(event.target);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"span\", {\n          children: \" FIlter by breed\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 48,\n          columnNumber: 9\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_dropdown__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n          onChange: handleDogChange,\n          options: getBreedNames()\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 9\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 7\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_styles_Container__WEBPACK_IMPORTED_MODULE_5__.DogContainer, {\n        children: favouritePic.map(function (subBreedName) {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_styles_DogCard__WEBPACK_IMPORTED_MODULE_2__.DogCard, {\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_styles_DogCard__WEBPACK_IMPORTED_MODULE_2__.DogImage, {\n                src: subBreedName.picture\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 58,\n                columnNumber: 17\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_styles_DogCard__WEBPACK_IMPORTED_MODULE_2__.DogName, {\n                theme: _styles_theme__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                children: getSubBreedName(subBreedName.picture)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 59,\n                columnNumber: 17\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 57,\n              columnNumber: 15\n            }, _this)\n          }, subBreedName.id, false, {\n            fileName: _jsxFileName,\n            lineNumber: 56,\n            columnNumber: 13\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 7\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 45,\n    columnNumber: 5\n  }, this);\n}\n\n_s(FavSubBreed, \"YEV3zRsJnW4xjBQCjOUOaXCGtro=\");\n\n_c = FavSubBreed;\n\nvar _c;\n\n$RefreshReg$(_c, \"FavSubBreed\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBO0FBQUEsY0FQQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUF3QkQ7O0dBMUR1QjVCOztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvZmF2b3VyaXRlLnRzeD8wMzBjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcbmltcG9ydCB7IERvZ0NhcmQsIERvZ0ltYWdlLCBEb2dOYW1lIH0gZnJvbSBcIi4uL3N0eWxlcy9Eb2dDYXJkXCI7XG5pbXBvcnQgdGhlbWUgZnJvbSBcIi4uL3N0eWxlcy90aGVtZVwiO1xuaW1wb3J0IHsgRG9nIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgRHJvcGRvd24gZnJvbSBcInJlYWN0LWRyb3Bkb3duXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBEb2dDb250YWluZXIgfSBmcm9tIFwiLi4vc3R5bGVzL0NvbnRhaW5lclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGYXZTdWJCcmVlZCgpIHtcbiAgY29uc3QgW2Zhdm91cml0ZVBpYywgc2V0ZmF2b3VyaXRlUGljXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3NlbGVjdGVkRG9nLCBzZXRTZWxlY3RlZERvZ10gPSB1c2VTdGF0ZShcIkFsbCBCcmVlZHNcIik7XG4gIGNvbnN0IFtmaWx0ZXJlZERvZ3MsIHNldEZpbHRlcmVkRG9nc10gPSB1c2VTdGF0ZShbXSlcblxuICAvLyBDaGVjayBpZiB0aGUgZmF2UGljIGV4aXN0cy5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBmYXZvdXJpdGVEb2dzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJmYXZQaWNcIik7XG4gICAgY29uc3Qgc2F2ZWREb2dzID0gSlNPTi5wYXJzZShmYXZvdXJpdGVEb2dzKTtcbiAgICBpZiAoc2F2ZWREb2dzKSB7XG4gICAgICBzZXRmYXZvdXJpdGVQaWMoc2F2ZWREb2dzKTtcbiAgICB9XG4gIH0sIFtdKTtcblxuICAvLyBHZXQgdGhlIG5hbWUgb2YgdGhlIERvZ3MgZnJvbSB0aGUgc3RyaW5nLlxuICBjb25zdCBnZXRTdWJCcmVlZE5hbWUgPSAocGljdHVyZTogc3RyaW5nKSA9PiB7XG4gICAgcmV0dXJuIGAke3BpY3R1cmUuc3BsaXQoXCIvXCIpWzRdfWA7XG4gIH07XG5cbiAgY29uc3QgZ2V0QnJlZWROYW1lcyA9ICgpID0+IHtcbiAgICBjb25zdCBicmVlZE5hbWVzID0gW1wiQWxsIEJyZWVkc1wiXTtcbiAgICBmYXZvdXJpdGVQaWMuZm9yRWFjaCgobmFtZSkgPT4ge1xuICAgICAgY29uc3QgZG9nTmFtZSA9IG5hbWUucGljdHVyZS5zcGxpdChcIi9cIilbNF07XG4gICAgICBpZiAoYnJlZWROYW1lcy5pbmRleE9mKGRvZ05hbWUpID09PSAtMSkgYnJlZWROYW1lcy5wdXNoKGRvZ05hbWUpO1xuICAgIH0pO1xuICAgIHJldHVybiBicmVlZE5hbWVzO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZURvZ0NoYW5nZSA9IChldmVudCkgPT4ge1xuICAgIHNldGZhdm91cml0ZVBpYyhldmVudC50YXJnZXQpXG4gIH1cblxuICBcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8ZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAgPHNwYW4+IEZJbHRlciBieSBicmVlZDwvc3Bhbj5cbiAgICAgICAgPERyb3Bkb3duXG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVEb2dDaGFuZ2V9XG4gICAgICAgICBvcHRpb25zPXtnZXRCcmVlZE5hbWVzKCl9IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxEb2dDb250YWluZXI+XG4gICAgICAgIHtmYXZvdXJpdGVQaWMubWFwKChzdWJCcmVlZE5hbWU6IERvZykgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGtleT17c3ViQnJlZWROYW1lLmlkfT5cbiAgICAgICAgICAgICAgPERvZ0NhcmQ+XG4gICAgICAgICAgICAgICAgPERvZ0ltYWdlIHNyYz17c3ViQnJlZWROYW1lLnBpY3R1cmV9IC8+XG4gICAgICAgICAgICAgICAgPERvZ05hbWUgdGhlbWU9e3RoZW1lfT57Z2V0U3ViQnJlZWROYW1lKHN1YkJyZWVkTmFtZS5waWN0dXJlKX08L0RvZ05hbWU+XG4gICAgICAgICAgICAgIDwvRG9nQ2FyZD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC9Eb2dDb250YWluZXI+XG4gICAgICA8L2Rpdj5cbiAgICA8L0xheW91dD5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkxheW91dCIsIkRvZ0NhcmQiLCJEb2dJbWFnZSIsIkRvZ05hbWUiLCJ0aGVtZSIsIkRyb3Bkb3duIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJEb2dDb250YWluZXIiLCJGYXZTdWJCcmVlZCIsImZhdm91cml0ZVBpYyIsInNldGZhdm91cml0ZVBpYyIsInNlbGVjdGVkRG9nIiwic2V0U2VsZWN0ZWREb2ciLCJmaWx0ZXJlZERvZ3MiLCJzZXRGaWx0ZXJlZERvZ3MiLCJmYXZvdXJpdGVEb2dzIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInNhdmVkRG9ncyIsIkpTT04iLCJwYXJzZSIsImdldFN1YkJyZWVkTmFtZSIsInBpY3R1cmUiLCJzcGxpdCIsImdldEJyZWVkTmFtZXMiLCJicmVlZE5hbWVzIiwiZm9yRWFjaCIsIm5hbWUiLCJkb2dOYW1lIiwiaW5kZXhPZiIsInB1c2giLCJoYW5kbGVEb2dDaGFuZ2UiLCJldmVudCIsInRhcmdldCIsIm1hcCIsInN1YkJyZWVkTmFtZSIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/favourite.tsx\n");

/***/ })

});