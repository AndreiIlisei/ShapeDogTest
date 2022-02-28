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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ FavSubBreed; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ \"./src/components/Layout.tsx\");\n/* harmony import */ var _styles_DogCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/DogCard */ \"./src/styles/DogCard.ts\");\n/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/theme */ \"./src/styles/theme.ts\");\n/* harmony import */ var _styles_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Container */ \"./src/styles/Container.tsx\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/index.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/andreiilisei/Coding Practice/practiceProjShape/ShapeDogTest/ShapeDogTest/src/pages/favourite.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction FavSubBreed() {\n  _s();\n\n  var _this = this;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),\n      favouritePic = _useState[0],\n      setfavouritePic = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      isOpen = _useState2[0],\n      setIsOpen = _useState2[1];\n\n  var toggling = function toggling() {\n    return setIsOpen(!isOpen);\n  };\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"All Breeds\"),\n      selectedDog = _useState3[0],\n      setSelectedDog = _useState3[1];\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),\n      selectedOption = _useState4[0],\n      setSelectedOption = _useState4[1];\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),\n      filteredDogs = _useState5[0],\n      setFilteredDogs = _useState5[1]; // Check if the favPic exists.\n\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    var favouriteDogs = localStorage.getItem(\"favPic\");\n    var savedDogs = JSON.parse(favouriteDogs);\n\n    if (savedDogs) {\n      setfavouritePic(savedDogs);\n    }\n  }, []); // Get the name of the Dogs from the string.\n\n  var getSubBreedName = function getSubBreedName(picture) {\n    return \"\".concat(picture.split(\"/\")[4]);\n  }; // Retreive all the names of the dogs that have been liked from the storage.\n\n\n  var getBreedNames = function getBreedNames() {\n    var breedNames = [\"All Breeds\"];\n    favouritePic.forEach(function (name) {\n      var dogName = name.picture.split(\"/\")[4];\n      if (breedNames.indexOf(dogName) === -1) breedNames.push(dogName);\n    });\n    return breedNames;\n  };\n\n  var getName = getBreedNames();\n\n  var onOptionClicked = function onOptionClicked(value) {\n    return function () {\n      setSelectedOption(value);\n      setIsOpen(false);\n      console.log(selectedOption);\n    };\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_styles_Container__WEBPACK_IMPORTED_MODULE_4__.FavouriteContainer, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_styles_Container__WEBPACK_IMPORTED_MODULE_4__.FilterContainer, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"span\", {\n          children: \" FIlter by breed\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 57,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_styles_Container__WEBPACK_IMPORTED_MODULE_4__.DropDownContainer, {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_styles_Container__WEBPACK_IMPORTED_MODULE_4__.DropDownHeader, {\n            onClick: toggling,\n            children: selectedOption || selectedDog\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 59,\n            columnNumber: 13\n          }, this), isOpen && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_styles_Container__WEBPACK_IMPORTED_MODULE_4__.DropDownListContainer, {\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_styles_Container__WEBPACK_IMPORTED_MODULE_4__.DropDownList, {\n              children: getName.map(function (name) {\n                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_styles_Container__WEBPACK_IMPORTED_MODULE_4__.ListItem, {\n                  onClick: onOptionClicked(name),\n                  children: [\" \", name, \" \"]\n                }, (0,uuid__WEBPACK_IMPORTED_MODULE_6__.v4)(), true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 64,\n                  columnNumber: 28\n                }, _this);\n              })\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 62,\n              columnNumber: 17\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 61,\n            columnNumber: 15\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 58,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_styles_Container__WEBPACK_IMPORTED_MODULE_4__.DogContainer, {\n        children: favouritePic.map(function (subBreedName) {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_styles_DogCard__WEBPACK_IMPORTED_MODULE_2__.DogCard, {\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_styles_DogCard__WEBPACK_IMPORTED_MODULE_2__.DogImage, {\n                src: subBreedName.picture\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 76,\n                columnNumber: 19\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_styles_DogCard__WEBPACK_IMPORTED_MODULE_2__.DogName, {\n                theme: _styles_theme__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                children: getSubBreedName(subBreedName.picture)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 77,\n                columnNumber: 19\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 75,\n              columnNumber: 17\n            }, _this)\n          }, subBreedName.id, false, {\n            fileName: _jsxFileName,\n            lineNumber: 74,\n            columnNumber: 15\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 71,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 54,\n    columnNumber: 5\n  }, this);\n}\n\n_s(FavSubBreed, \"Co+4nIwNGDASdDjBkt2BEuWmhqo=\");\n\n_c = FavSubBreed;\n\nvar _c;\n\n$RefreshReg$(_c, \"FavSubBreed\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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MDMwYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgeyBEb2dDYXJkLCBEb2dJbWFnZSwgRG9nTmFtZSB9IGZyb20gXCIuLi9zdHlsZXMvRG9nQ2FyZFwiO1xuaW1wb3J0IHRoZW1lIGZyb20gXCIuLi9zdHlsZXMvdGhlbWVcIjtcbmltcG9ydCB7IERvZyB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IERyb3Bkb3duIGZyb20gXCJyZWFjdC1kcm9wZG93blwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRG9nQ29udGFpbmVyLCBEcm9wRG93bkNvbnRhaW5lciwgRHJvcERvd25IZWFkZXIsIERyb3BEb3duTGlzdCwgRHJvcERvd25MaXN0Q29udGFpbmVyLCBGYXZvdXJpdGVDb250YWluZXIsIEZpbHRlckNvbnRhaW5lciwgTGlzdEl0ZW0gfSBmcm9tIFwiLi4vc3R5bGVzL0NvbnRhaW5lclwiO1xuaW1wb3J0IHsgdjQgfSBmcm9tIFwidXVpZFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGYXZTdWJCcmVlZCgpIHtcbiAgY29uc3QgW2Zhdm91cml0ZVBpYywgc2V0ZmF2b3VyaXRlUGljXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgdG9nZ2xpbmcgPSAoKSA9PiBzZXRJc09wZW4oIWlzT3Blbik7XG4gIGNvbnN0IFtzZWxlY3RlZERvZywgc2V0U2VsZWN0ZWREb2ddID0gdXNlU3RhdGUoXCJBbGwgQnJlZWRzXCIpO1xuXG4gIGNvbnN0IFtzZWxlY3RlZE9wdGlvbiwgc2V0U2VsZWN0ZWRPcHRpb25dID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgY29uc3QgW2ZpbHRlcmVkRG9ncywgc2V0RmlsdGVyZWREb2dzXSA9IHVzZVN0YXRlKFtdKTtcblxuICAvLyBDaGVjayBpZiB0aGUgZmF2UGljIGV4aXN0cy5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBmYXZvdXJpdGVEb2dzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJmYXZQaWNcIik7XG4gICAgY29uc3Qgc2F2ZWREb2dzID0gSlNPTi5wYXJzZShmYXZvdXJpdGVEb2dzKTtcbiAgICBpZiAoc2F2ZWREb2dzKSB7XG4gICAgICBzZXRmYXZvdXJpdGVQaWMoc2F2ZWREb2dzKTtcbiAgICB9XG4gIH0sIFtdKTtcblxuICAvLyBHZXQgdGhlIG5hbWUgb2YgdGhlIERvZ3MgZnJvbSB0aGUgc3RyaW5nLlxuICBjb25zdCBnZXRTdWJCcmVlZE5hbWUgPSAocGljdHVyZTogc3RyaW5nKSA9PiB7XG4gICAgcmV0dXJuIGAke3BpY3R1cmUuc3BsaXQoXCIvXCIpWzRdfWA7XG4gIH07XG5cbiAgLy8gUmV0cmVpdmUgYWxsIHRoZSBuYW1lcyBvZiB0aGUgZG9ncyB0aGF0IGhhdmUgYmVlbiBsaWtlZCBmcm9tIHRoZSBzdG9yYWdlLlxuICBjb25zdCBnZXRCcmVlZE5hbWVzID0gKCkgPT4ge1xuICAgIGNvbnN0IGJyZWVkTmFtZXMgPSBbXCJBbGwgQnJlZWRzXCJdO1xuICAgIGZhdm91cml0ZVBpYy5mb3JFYWNoKChuYW1lKSA9PiB7XG4gICAgICBjb25zdCBkb2dOYW1lID0gbmFtZS5waWN0dXJlLnNwbGl0KFwiL1wiKVs0XTtcbiAgICAgIGlmIChicmVlZE5hbWVzLmluZGV4T2YoZG9nTmFtZSkgPT09IC0xKSBicmVlZE5hbWVzLnB1c2goZG9nTmFtZSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGJyZWVkTmFtZXM7XG4gIH07XG5cbiAgY29uc3QgZ2V0TmFtZSA9IGdldEJyZWVkTmFtZXMoKTtcblxuICBjb25zdCBvbk9wdGlvbkNsaWNrZWQgPSAodmFsdWU6IFJlYWN0LlNldFN0YXRlQWN0aW9uPG51bGw+KSA9PiAoKSA9PiB7XG4gICAgc2V0U2VsZWN0ZWRPcHRpb24odmFsdWUpO1xuICAgIHNldElzT3BlbihmYWxzZSk7XG4gICAgY29uc29sZS5sb2coc2VsZWN0ZWRPcHRpb24pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxGYXZvdXJpdGVDb250YWluZXI+XG4gICAgICAgIDxGaWx0ZXJDb250YWluZXI+XG4gICAgICAgICAgPHNwYW4+IEZJbHRlciBieSBicmVlZDwvc3Bhbj5cbiAgICAgICAgICA8RHJvcERvd25Db250YWluZXI+XG4gICAgICAgICAgICA8RHJvcERvd25IZWFkZXIgb25DbGljaz17dG9nZ2xpbmd9PntzZWxlY3RlZE9wdGlvbiB8fHNlbGVjdGVkRG9nIH08L0Ryb3BEb3duSGVhZGVyPlxuICAgICAgICAgICAge2lzT3BlbiAmJiAoXG4gICAgICAgICAgICAgIDxEcm9wRG93bkxpc3RDb250YWluZXI+XG4gICAgICAgICAgICAgICAgPERyb3BEb3duTGlzdD5cbiAgICAgICAgICAgICAgICAgIHtnZXROYW1lLm1hcCgobmFtZTogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8TGlzdEl0ZW0gb25DbGljaz17b25PcHRpb25DbGlja2VkKG5hbWUpfSBrZXk9e3Y0KCl9PiB7bmFtZX0gPC9MaXN0SXRlbT47XG4gICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICA8L0Ryb3BEb3duTGlzdD5cbiAgICAgICAgICAgICAgPC9Ecm9wRG93bkxpc3RDb250YWluZXI+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvRHJvcERvd25Db250YWluZXI+XG4gICAgICAgIDwvRmlsdGVyQ29udGFpbmVyPlxuICAgICAgICA8RG9nQ29udGFpbmVyPlxuICAgICAgICAgIHtmYXZvdXJpdGVQaWMubWFwKChzdWJCcmVlZE5hbWU6IERvZykgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e3N1YkJyZWVkTmFtZS5pZH0+XG4gICAgICAgICAgICAgICAgPERvZ0NhcmQ+XG4gICAgICAgICAgICAgICAgICA8RG9nSW1hZ2Ugc3JjPXtzdWJCcmVlZE5hbWUucGljdHVyZX0gLz5cbiAgICAgICAgICAgICAgICAgIDxEb2dOYW1lIHRoZW1lPXt0aGVtZX0+e2dldFN1YkJyZWVkTmFtZShzdWJCcmVlZE5hbWUucGljdHVyZSl9PC9Eb2dOYW1lPlxuICAgICAgICAgICAgICAgIDwvRG9nQ2FyZD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L0RvZ0NvbnRhaW5lcj5cbiAgICAgIDwvRmF2b3VyaXRlQ29udGFpbmVyPlxuICAgIDwvTGF5b3V0PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiTGF5b3V0IiwiRG9nQ2FyZCIsIkRvZ0ltYWdlIiwiRG9nTmFtZSIsInRoZW1lIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJEb2dDb250YWluZXIiLCJEcm9wRG93bkNvbnRhaW5lciIsIkRyb3BEb3duSGVhZGVyIiwiRHJvcERvd25MaXN0IiwiRHJvcERvd25MaXN0Q29udGFpbmVyIiwiRmF2b3VyaXRlQ29udGFpbmVyIiwiRmlsdGVyQ29udGFpbmVyIiwiTGlzdEl0ZW0iLCJ2NCIsIkZhdlN1YkJyZWVkIiwiZmF2b3VyaXRlUGljIiwic2V0ZmF2b3VyaXRlUGljIiwiaXNPcGVuIiwic2V0SXNPcGVuIiwidG9nZ2xpbmciLCJzZWxlY3RlZERvZyIsInNldFNlbGVjdGVkRG9nIiwic2VsZWN0ZWRPcHRpb24iLCJzZXRTZWxlY3RlZE9wdGlvbiIsImZpbHRlcmVkRG9ncyIsInNldEZpbHRlcmVkRG9ncyIsImZhdm91cml0ZURvZ3MiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic2F2ZWREb2dzIiwiSlNPTiIsInBhcnNlIiwiZ2V0U3ViQnJlZWROYW1lIiwicGljdHVyZSIsInNwbGl0IiwiZ2V0QnJlZWROYW1lcyIsImJyZWVkTmFtZXMiLCJmb3JFYWNoIiwibmFtZSIsImRvZ05hbWUiLCJpbmRleE9mIiwicHVzaCIsImdldE5hbWUiLCJvbk9wdGlvbkNsaWNrZWQiLCJ2YWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJzdWJCcmVlZE5hbWUiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/favourite.tsx\n");

/***/ })

});