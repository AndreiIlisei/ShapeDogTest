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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ FavSubBreed; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ \"./src/components/Layout.tsx\");\n/* harmony import */ var _styles_DogCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/DogCard */ \"./src/styles/DogCard.ts\");\n/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/theme */ \"./src/styles/theme.ts\");\n/* harmony import */ var _styles_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Container */ \"./src/styles/Container.tsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/andreiilisei/Coding Practice/practiceProjShape/ShapeDogTest/ShapeDogTest/src/pages/favourite.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction FavSubBreed() {\n  _s();\n\n  var _this = this;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),\n      favouritePic = _useState[0],\n      setfavouritePic = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"All Breeds\"),\n      selectedDog = _useState2[0],\n      setSelectedDog = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),\n      filteredDogs = _useState3[0],\n      setFilteredDogs = _useState3[1]; // Check if the favPic exists.\n\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    var favouriteDogs = localStorage.getItem(\"favPic\");\n    var savedDogs = JSON.parse(favouriteDogs);\n\n    if (savedDogs) {\n      setfavouritePic(savedDogs);\n    }\n  }, []); // Get the name of the Dogs from the string.\n\n  var getSubBreedName = function getSubBreedName(picture) {\n    return \"\".concat(picture.split(\"/\")[4]);\n  };\n\n  var getBreedNames = function getBreedNames() {\n    var breedNames = [\"All Breeds\"];\n    favouritePic.forEach(function (name) {\n      var dogName = name.picture.split(\"/\")[4];\n      if (breedNames.indexOf(dogName) === -1) breedNames.push(dogName);\n    });\n    return breedNames;\n  };\n\n  var handleDogChange = function handleDogChange(event) {\n    setfavouritePic(event.target);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_styles_Container__WEBPACK_IMPORTED_MODULE_4__.FavouriteContainer, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_styles_Container__WEBPACK_IMPORTED_MODULE_4__.FilterContainer, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"span\", {\n          children: \" FIlter by breed\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 48,\n          columnNumber: 9\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_styles_Container__WEBPACK_IMPORTED_MODULE_4__.DropDownContainer, {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_styles_Container__WEBPACK_IMPORTED_MODULE_4__.DropDownHeader, {\n            children: \"Mangoes\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 50,\n            columnNumber: 9\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_styles_Container__WEBPACK_IMPORTED_MODULE_4__.DropDownListContainer, {\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_styles_Container__WEBPACK_IMPORTED_MODULE_4__.DropDownList, {\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_styles_Container__WEBPACK_IMPORTED_MODULE_4__.ListItem, {\n                children: \"Mangoes\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 53,\n                columnNumber: 13\n              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_styles_Container__WEBPACK_IMPORTED_MODULE_4__.ListItem, {\n                children: \"Apples\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 54,\n                columnNumber: 13\n              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_styles_Container__WEBPACK_IMPORTED_MODULE_4__.ListItem, {\n                children: \"Oranges\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 55,\n                columnNumber: 13\n              }, this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 52,\n              columnNumber: 11\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 51,\n            columnNumber: 9\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 9\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 7\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_styles_Container__WEBPACK_IMPORTED_MODULE_4__.DogContainer, {\n        children: favouritePic.map(function (subBreedName) {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_styles_DogCard__WEBPACK_IMPORTED_MODULE_2__.DogCard, {\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_styles_DogCard__WEBPACK_IMPORTED_MODULE_2__.DogImage, {\n                src: subBreedName.picture\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 65,\n                columnNumber: 17\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_styles_DogCard__WEBPACK_IMPORTED_MODULE_2__.DogName, {\n                theme: _styles_theme__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                children: getSubBreedName(subBreedName.picture)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 66,\n                columnNumber: 17\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 64,\n              columnNumber: 15\n            }, _this)\n          }, subBreedName.id, false, {\n            fileName: _jsxFileName,\n            lineNumber: 63,\n            columnNumber: 13\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 7\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 45,\n    columnNumber: 5\n  }, this);\n}\n\n_s(FavSubBreed, \"YEV3zRsJnW4xjBQCjOUOaXCGtro=\");\n\n_c = FavSubBreed;\n\nvar _c;\n\n$RefreshReg$(_c, \"FavSubBreed\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FDRSw4REFBQyxxREFBRDtBQUFVLG1CQUFHLEVBQUVBLFlBQVksQ0FBQ2I7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixlQUVFLDhEQUFDLG9EQUFEO0FBQVMscUJBQUssRUFBRXpCLHFEQUFoQjtBQUFBLDBCQUF3QndCLGVBQWUsQ0FBQ2MsWUFBWSxDQUFDYixPQUFkO0FBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsYUFBVWEsWUFBWSxDQUFDQyxFQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGO0FBUUQsU0FUQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FkQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUErQkQ7O0dBakV1QjVCOztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvZmF2b3VyaXRlLnRzeD8wMzBjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcbmltcG9ydCB7IERvZ0NhcmQsIERvZ0ltYWdlLCBEb2dOYW1lIH0gZnJvbSBcIi4uL3N0eWxlcy9Eb2dDYXJkXCI7XG5pbXBvcnQgdGhlbWUgZnJvbSBcIi4uL3N0eWxlcy90aGVtZVwiO1xuaW1wb3J0IHsgRG9nIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgRHJvcGRvd24gZnJvbSBcInJlYWN0LWRyb3Bkb3duXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBEb2dDb250YWluZXIsIERyb3BEb3duQ29udGFpbmVyLCBEcm9wRG93bkhlYWRlciwgRHJvcERvd25MaXN0LCBEcm9wRG93bkxpc3RDb250YWluZXIsIEZhdm91cml0ZUNvbnRhaW5lciwgRmlsdGVyQ29udGFpbmVyLCBMaXN0SXRlbSB9IGZyb20gXCIuLi9zdHlsZXMvQ29udGFpbmVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZhdlN1YkJyZWVkKCkge1xuICBjb25zdCBbZmF2b3VyaXRlUGljLCBzZXRmYXZvdXJpdGVQaWNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbc2VsZWN0ZWREb2csIHNldFNlbGVjdGVkRG9nXSA9IHVzZVN0YXRlKFwiQWxsIEJyZWVkc1wiKTtcbiAgY29uc3QgW2ZpbHRlcmVkRG9ncywgc2V0RmlsdGVyZWREb2dzXSA9IHVzZVN0YXRlKFtdKVxuXG4gIC8vIENoZWNrIGlmIHRoZSBmYXZQaWMgZXhpc3RzLlxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGZhdm91cml0ZURvZ3MgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImZhdlBpY1wiKTtcbiAgICBjb25zdCBzYXZlZERvZ3MgPSBKU09OLnBhcnNlKGZhdm91cml0ZURvZ3MpO1xuICAgIGlmIChzYXZlZERvZ3MpIHtcbiAgICAgIHNldGZhdm91cml0ZVBpYyhzYXZlZERvZ3MpO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIC8vIEdldCB0aGUgbmFtZSBvZiB0aGUgRG9ncyBmcm9tIHRoZSBzdHJpbmcuXG4gIGNvbnN0IGdldFN1YkJyZWVkTmFtZSA9IChwaWN0dXJlOiBzdHJpbmcpID0+IHtcbiAgICByZXR1cm4gYCR7cGljdHVyZS5zcGxpdChcIi9cIilbNF19YDtcbiAgfTtcblxuICBjb25zdCBnZXRCcmVlZE5hbWVzID0gKCkgPT4ge1xuICAgIGNvbnN0IGJyZWVkTmFtZXMgPSBbXCJBbGwgQnJlZWRzXCJdO1xuICAgIGZhdm91cml0ZVBpYy5mb3JFYWNoKChuYW1lKSA9PiB7XG4gICAgICBjb25zdCBkb2dOYW1lID0gbmFtZS5waWN0dXJlLnNwbGl0KFwiL1wiKVs0XTtcbiAgICAgIGlmIChicmVlZE5hbWVzLmluZGV4T2YoZG9nTmFtZSkgPT09IC0xKSBicmVlZE5hbWVzLnB1c2goZG9nTmFtZSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGJyZWVkTmFtZXM7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlRG9nQ2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgc2V0ZmF2b3VyaXRlUGljKGV2ZW50LnRhcmdldClcbiAgfVxuXG4gIFxuXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxGYXZvdXJpdGVDb250YWluZXI+XG4gICAgICA8RmlsdGVyQ29udGFpbmVyPlxuICAgICAgICA8c3Bhbj4gRklsdGVyIGJ5IGJyZWVkPC9zcGFuPlxuICAgICAgICA8RHJvcERvd25Db250YWluZXI+XG4gICAgICAgIDxEcm9wRG93bkhlYWRlcj5NYW5nb2VzPC9Ecm9wRG93bkhlYWRlcj5cbiAgICAgICAgPERyb3BEb3duTGlzdENvbnRhaW5lcj5cbiAgICAgICAgICA8RHJvcERvd25MaXN0PlxuICAgICAgICAgICAgPExpc3RJdGVtPk1hbmdvZXM8L0xpc3RJdGVtPlxuICAgICAgICAgICAgPExpc3RJdGVtPkFwcGxlczwvTGlzdEl0ZW0+XG4gICAgICAgICAgICA8TGlzdEl0ZW0+T3JhbmdlczwvTGlzdEl0ZW0+XG4gICAgICAgICAgPC9Ecm9wRG93bkxpc3Q+XG4gICAgICAgIDwvRHJvcERvd25MaXN0Q29udGFpbmVyPlxuICAgICAgPC9Ecm9wRG93bkNvbnRhaW5lcj5cbiAgICAgIDwvRmlsdGVyQ29udGFpbmVyPlxuICAgICAgPERvZ0NvbnRhaW5lcj5cbiAgICAgICAge2Zhdm91cml0ZVBpYy5tYXAoKHN1YkJyZWVkTmFtZTogRG9nKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYga2V5PXtzdWJCcmVlZE5hbWUuaWR9PlxuICAgICAgICAgICAgICA8RG9nQ2FyZD5cbiAgICAgICAgICAgICAgICA8RG9nSW1hZ2Ugc3JjPXtzdWJCcmVlZE5hbWUucGljdHVyZX0gLz5cbiAgICAgICAgICAgICAgICA8RG9nTmFtZSB0aGVtZT17dGhlbWV9PntnZXRTdWJCcmVlZE5hbWUoc3ViQnJlZWROYW1lLnBpY3R1cmUpfTwvRG9nTmFtZT5cbiAgICAgICAgICAgICAgPC9Eb2dDYXJkPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L0RvZ0NvbnRhaW5lcj5cbiAgICAgIDwvRmF2b3VyaXRlQ29udGFpbmVyPlxuICAgIDwvTGF5b3V0PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiTGF5b3V0IiwiRG9nQ2FyZCIsIkRvZ0ltYWdlIiwiRG9nTmFtZSIsInRoZW1lIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJEb2dDb250YWluZXIiLCJEcm9wRG93bkNvbnRhaW5lciIsIkRyb3BEb3duSGVhZGVyIiwiRHJvcERvd25MaXN0IiwiRHJvcERvd25MaXN0Q29udGFpbmVyIiwiRmF2b3VyaXRlQ29udGFpbmVyIiwiRmlsdGVyQ29udGFpbmVyIiwiTGlzdEl0ZW0iLCJGYXZTdWJCcmVlZCIsImZhdm91cml0ZVBpYyIsInNldGZhdm91cml0ZVBpYyIsInNlbGVjdGVkRG9nIiwic2V0U2VsZWN0ZWREb2ciLCJmaWx0ZXJlZERvZ3MiLCJzZXRGaWx0ZXJlZERvZ3MiLCJmYXZvdXJpdGVEb2dzIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInNhdmVkRG9ncyIsIkpTT04iLCJwYXJzZSIsImdldFN1YkJyZWVkTmFtZSIsInBpY3R1cmUiLCJzcGxpdCIsImdldEJyZWVkTmFtZXMiLCJicmVlZE5hbWVzIiwiZm9yRWFjaCIsIm5hbWUiLCJkb2dOYW1lIiwiaW5kZXhPZiIsInB1c2giLCJoYW5kbGVEb2dDaGFuZ2UiLCJldmVudCIsInRhcmdldCIsIm1hcCIsInN1YkJyZWVkTmFtZSIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/favourite.tsx\n");

/***/ })

});