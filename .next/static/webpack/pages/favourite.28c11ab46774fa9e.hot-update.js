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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ FavSubBreed; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/index.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ \"./src/components/Layout.tsx\");\n/* harmony import */ var _styles_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Container */ \"./src/styles/Container.tsx\");\n/* harmony import */ var _styles_DogCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/DogCard */ \"./src/styles/DogCard.ts\");\n/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/theme */ \"./src/styles/theme.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/andreiilisei/Coding Practice/practiceProjShape/ShapeDogTest/ShapeDogTest/src/pages/favourite.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction FavSubBreed() {\n  _s();\n\n  var _this = this;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),\n      favouritePic = _useState[0],\n      setfavouritePic = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"All Breeds\"),\n      selectedOption = _useState2[0],\n      setSelectedOption = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),\n      filteredOptions = _useState3[0],\n      setFilteredOptions = _useState3[1];\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      isOpen = _useState4[0],\n      setIsOpen = _useState4[1];\n\n  var toggling = function toggling() {\n    return setIsOpen(!isOpen);\n  }; // Check if the favPic exists.\n\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    var favouriteDogs = localStorage.getItem(\"favPic\");\n    var savedDogs = JSON.parse(favouriteDogs || \"null\");\n\n    if (savedDogs) {\n      setfavouritePic(savedDogs);\n      setFilteredOptions(savedDogs);\n    }\n  }, []); // Get the name of the Dogs from the string.\n\n  var getSubBreedName = function getSubBreedName(picture) {\n    return \"\".concat(picture.split(\"/\")[4]);\n  }; // Retreive all the names of the dogs that have been liked from the storage.\n\n\n  var getBreedNames = function getBreedNames() {\n    var breedNames = [\"All Breeds\"];\n    favouritePic.map(function (name) {\n      var dogName = name.picture.split(\"/\")[4];\n      if (breedNames.indexOf(dogName) === -1) breedNames.push(dogName);\n    });\n    return breedNames;\n  }; // Const used so I can map over the names and add to the dropdown List.\n\n\n  var getName = getBreedNames();\n\n  var onOptionClicked = function onOptionClicked(value) {\n    return function () {\n      setSelectedOption(value);\n      setIsOpen(false);\n      var filteredPictures = favouritePic.filter(function (el) {\n        return el.picture.indexOf(value) >= 0;\n      });\n      setFilteredOptions(value === \"All Breeds\" ? favouritePic : filteredPictures);\n    };\n  }; // const render = () => {\n  //   if (selectedOption === \"All Breeds\") {\n  //     return favouritePic.map((subBreedName: Dog) => {\n  //       return (\n  //         <div key={subBreedName.id}>\n  //           <DogCard>\n  //             <DogImage src={subBreedName.picture} />\n  //             <DogName theme={theme}>{getSubBreedName(subBreedName.picture)}</DogName>\n  //           </DogCard>\n  //         </div>\n  //       );\n  //     });\n  //   } else {\n  //     return filteredOptions.map((subBreedName: Dog) => {\n  //       return (\n  //         <div key={subBreedName.id}>\n  //           <DogCard>\n  //             <DogImage src={subBreedName.picture} />\n  //             <DogName theme={theme}>{getSubBreedName(subBreedName.picture)}</DogName>\n  //           </DogCard>\n  //         </div>\n  //       );\n  //     });\n  //   }\n  // };\n\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_styles_Container__WEBPACK_IMPORTED_MODULE_2__.FavouriteContainer, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_styles_Container__WEBPACK_IMPORTED_MODULE_2__.FilterContainer, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_styles_Container__WEBPACK_IMPORTED_MODULE_2__.FilterText, {\n          children: \" Filter by breed\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 84,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_styles_Container__WEBPACK_IMPORTED_MODULE_2__.DropDownContainer, {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_styles_Container__WEBPACK_IMPORTED_MODULE_2__.DropDownHeader, {\n            onClick: toggling,\n            children: selectedOption\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 86,\n            columnNumber: 13\n          }, this), isOpen && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_styles_Container__WEBPACK_IMPORTED_MODULE_2__.DropDownListContainer, {\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_styles_Container__WEBPACK_IMPORTED_MODULE_2__.DropDownList, {\n              children: getName.map(function (name) {\n                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_styles_Container__WEBPACK_IMPORTED_MODULE_2__.ListItem, {\n                  onClick: onOptionClicked(name),\n                  children: name\n                }, (0,uuid__WEBPACK_IMPORTED_MODULE_6__.v4)(), false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 92,\n                  columnNumber: 23\n                }, _this);\n              })\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 89,\n              columnNumber: 17\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 88,\n            columnNumber: 15\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 85,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 83,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_styles_Container__WEBPACK_IMPORTED_MODULE_2__.DogContainer, {\n        children: filteredOptions.map(function (subBreedName) {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_styles_DogCard__WEBPACK_IMPORTED_MODULE_3__.DogCard, {\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_styles_DogCard__WEBPACK_IMPORTED_MODULE_3__.DogImage, {\n                src: subBreedName.picture\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 108,\n                columnNumber: 19\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_styles_DogCard__WEBPACK_IMPORTED_MODULE_3__.DogName, {\n                theme: _styles_theme__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                children: getSubBreedName(subBreedName.picture)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 109,\n                columnNumber: 19\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 107,\n              columnNumber: 17\n            }, _this)\n          }, subBreedName.id, false, {\n            fileName: _jsxFileName,\n            lineNumber: 106,\n            columnNumber: 15\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 102,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 81,\n    columnNumber: 5\n  }, this);\n}\n\n_s(FavSubBreed, \"vwhycRKXfELy22VzU+2uFPyyA2M=\");\n\n_c = FavSubBreed;\n\nvar _c;\n\n$RefreshReg$(_c, \"FavSubBreed\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Z0IsWUFBWSxDQUFDZixPQUFkO0FBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsYUFBVWUsWUFBWSxDQUFDQyxFQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGO0FBUUQsU0FUQTtBQUZIO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FwQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBc0NEOztHQTVHdUJqQzs7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2Zhdm91cml0ZS50c3g/MDMwYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHY0IH0gZnJvbSBcInV1aWRcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgeyBEb2dDb250YWluZXIsIERyb3BEb3duQ29udGFpbmVyLCBEcm9wRG93bkhlYWRlciwgRHJvcERvd25MaXN0LCBEcm9wRG93bkxpc3RDb250YWluZXIsIEZhdm91cml0ZUNvbnRhaW5lciwgRmlsdGVyQ29udGFpbmVyLCBGaWx0ZXJUZXh0LCBMaXN0SXRlbSB9IGZyb20gXCIuLi9zdHlsZXMvQ29udGFpbmVyXCI7XG5pbXBvcnQgeyBEb2dDYXJkLCBEb2dJbWFnZSwgRG9nTmFtZSB9IGZyb20gXCIuLi9zdHlsZXMvRG9nQ2FyZFwiO1xuaW1wb3J0IHRoZW1lIGZyb20gXCIuLi9zdHlsZXMvdGhlbWVcIjtcbmltcG9ydCB7IERvZyB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGYXZTdWJCcmVlZCgpIHtcbiAgY29uc3QgW2Zhdm91cml0ZVBpYywgc2V0ZmF2b3VyaXRlUGljXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3NlbGVjdGVkT3B0aW9uLCBzZXRTZWxlY3RlZE9wdGlvbl0gPSB1c2VTdGF0ZShcIkFsbCBCcmVlZHNcIik7XG4gIGNvbnN0IFtmaWx0ZXJlZE9wdGlvbnMsIHNldEZpbHRlcmVkT3B0aW9uc10gPSB1c2VTdGF0ZShbXSk7XG4gIFxuICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCB0b2dnbGluZyA9ICgpID0+IHNldElzT3BlbighaXNPcGVuKTtcblxuICAvLyBDaGVjayBpZiB0aGUgZmF2UGljIGV4aXN0cy5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBmYXZvdXJpdGVEb2dzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJmYXZQaWNcIik7XG4gICAgY29uc3Qgc2F2ZWREb2dzID0gSlNPTi5wYXJzZShmYXZvdXJpdGVEb2dzIHx8IFwibnVsbFwiKTtcbiAgICBpZiAoc2F2ZWREb2dzKSB7XG4gICAgICBzZXRmYXZvdXJpdGVQaWMoc2F2ZWREb2dzKTtcbiAgICAgIHNldEZpbHRlcmVkT3B0aW9ucyhzYXZlZERvZ3MpO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIC8vIEdldCB0aGUgbmFtZSBvZiB0aGUgRG9ncyBmcm9tIHRoZSBzdHJpbmcuXG4gIGNvbnN0IGdldFN1YkJyZWVkTmFtZSA9IChwaWN0dXJlOiBzdHJpbmcpID0+IHtcbiAgICByZXR1cm4gYCR7cGljdHVyZS5zcGxpdChcIi9cIilbNF19YDtcbiAgfTtcblxuICAvLyBSZXRyZWl2ZSBhbGwgdGhlIG5hbWVzIG9mIHRoZSBkb2dzIHRoYXQgaGF2ZSBiZWVuIGxpa2VkIGZyb20gdGhlIHN0b3JhZ2UuXG4gIGNvbnN0IGdldEJyZWVkTmFtZXMgPSAoKSA9PiB7XG4gICAgY29uc3QgYnJlZWROYW1lcyA9IFtcIkFsbCBCcmVlZHNcIl07XG4gICAgZmF2b3VyaXRlUGljLm1hcCgobmFtZTogYW55KSA9PiB7XG4gICAgICBjb25zdCBkb2dOYW1lID0gbmFtZS5waWN0dXJlLnNwbGl0KFwiL1wiKVs0XTtcbiAgICAgIGlmIChicmVlZE5hbWVzLmluZGV4T2YoZG9nTmFtZSkgPT09IC0xKSBicmVlZE5hbWVzLnB1c2goZG9nTmFtZSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGJyZWVkTmFtZXM7XG4gIH07XG5cbiAgLy8gQ29uc3QgdXNlZCBzbyBJIGNhbiBtYXAgb3ZlciB0aGUgbmFtZXMgYW5kIGFkZCB0byB0aGUgZHJvcGRvd24gTGlzdC5cbiAgY29uc3QgZ2V0TmFtZSA9IGdldEJyZWVkTmFtZXMoKTtcblxuICBjb25zdCBvbk9wdGlvbkNsaWNrZWQgPSAodmFsdWU6IHN0cmluZykgPT4gKCkgPT4ge1xuICAgIHNldFNlbGVjdGVkT3B0aW9uKHZhbHVlKTtcbiAgICBzZXRJc09wZW4oZmFsc2UpO1xuICAgIGNvbnN0IGZpbHRlcmVkUGljdHVyZXMgPSBmYXZvdXJpdGVQaWMuZmlsdGVyKChlbDogYW55KSA9PiBlbC5waWN0dXJlLmluZGV4T2YodmFsdWUpID49IDApO1xuXG4gICAgc2V0RmlsdGVyZWRPcHRpb25zKHZhbHVlID09PSBcIkFsbCBCcmVlZHNcIiA/IGZhdm91cml0ZVBpYyA6IGZpbHRlcmVkUGljdHVyZXMpO1xuICB9O1xuXG4gIC8vIGNvbnN0IHJlbmRlciA9ICgpID0+IHtcbiAgLy8gICBpZiAoc2VsZWN0ZWRPcHRpb24gPT09IFwiQWxsIEJyZWVkc1wiKSB7XG4gIC8vICAgICByZXR1cm4gZmF2b3VyaXRlUGljLm1hcCgoc3ViQnJlZWROYW1lOiBEb2cpID0+IHtcbiAgLy8gICAgICAgcmV0dXJuIChcbiAgLy8gICAgICAgICA8ZGl2IGtleT17c3ViQnJlZWROYW1lLmlkfT5cbiAgLy8gICAgICAgICAgIDxEb2dDYXJkPlxuICAvLyAgICAgICAgICAgICA8RG9nSW1hZ2Ugc3JjPXtzdWJCcmVlZE5hbWUucGljdHVyZX0gLz5cbiAgLy8gICAgICAgICAgICAgPERvZ05hbWUgdGhlbWU9e3RoZW1lfT57Z2V0U3ViQnJlZWROYW1lKHN1YkJyZWVkTmFtZS5waWN0dXJlKX08L0RvZ05hbWU+XG4gIC8vICAgICAgICAgICA8L0RvZ0NhcmQ+XG4gIC8vICAgICAgICAgPC9kaXY+XG4gIC8vICAgICAgICk7XG4gIC8vICAgICB9KTtcbiAgLy8gICB9IGVsc2Uge1xuICAvLyAgICAgcmV0dXJuIGZpbHRlcmVkT3B0aW9ucy5tYXAoKHN1YkJyZWVkTmFtZTogRG9nKSA9PiB7XG4gIC8vICAgICAgIHJldHVybiAoXG4gIC8vICAgICAgICAgPGRpdiBrZXk9e3N1YkJyZWVkTmFtZS5pZH0+XG4gIC8vICAgICAgICAgICA8RG9nQ2FyZD5cbiAgLy8gICAgICAgICAgICAgPERvZ0ltYWdlIHNyYz17c3ViQnJlZWROYW1lLnBpY3R1cmV9IC8+XG4gIC8vICAgICAgICAgICAgIDxEb2dOYW1lIHRoZW1lPXt0aGVtZX0+e2dldFN1YkJyZWVkTmFtZShzdWJCcmVlZE5hbWUucGljdHVyZSl9PC9Eb2dOYW1lPlxuICAvLyAgICAgICAgICAgPC9Eb2dDYXJkPlxuICAvLyAgICAgICAgIDwvZGl2PlxuICAvLyAgICAgICApO1xuICAvLyAgICAgfSk7XG4gIC8vICAgfVxuICAvLyB9O1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxGYXZvdXJpdGVDb250YWluZXI+XG4gICAgICAgIDxGaWx0ZXJDb250YWluZXI+XG4gICAgICAgICAgPEZpbHRlclRleHQ+IEZpbHRlciBieSBicmVlZDwvRmlsdGVyVGV4dD5cbiAgICAgICAgICA8RHJvcERvd25Db250YWluZXI+XG4gICAgICAgICAgICA8RHJvcERvd25IZWFkZXIgb25DbGljaz17dG9nZ2xpbmd9PntzZWxlY3RlZE9wdGlvbn08L0Ryb3BEb3duSGVhZGVyPlxuICAgICAgICAgICAge2lzT3BlbiAmJiAoXG4gICAgICAgICAgICAgIDxEcm9wRG93bkxpc3RDb250YWluZXI+XG4gICAgICAgICAgICAgICAgPERyb3BEb3duTGlzdD5cbiAgICAgICAgICAgICAgICAgIHtnZXROYW1lLm1hcCgobmFtZTogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtIG9uQ2xpY2s9e29uT3B0aW9uQ2xpY2tlZChuYW1lKX0ga2V5PXt2NCgpfT4gIFxuICAgICAgICAgICAgICAgICAgICAgIHtuYW1lfVxuICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICA8L0Ryb3BEb3duTGlzdD5cbiAgICAgICAgICAgICAgPC9Ecm9wRG93bkxpc3RDb250YWluZXI+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvRHJvcERvd25Db250YWluZXI+XG4gICAgICAgIDwvRmlsdGVyQ29udGFpbmVyPlxuICAgICAgICA8RG9nQ29udGFpbmVyPlxuICAgICAgICAgIHsvKiB7cmVuZGVyKCl9ICovfVxuICAgICAgICAgIHtmaWx0ZXJlZE9wdGlvbnMubWFwKChzdWJCcmVlZE5hbWU6IERvZykgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e3N1YkJyZWVkTmFtZS5pZH0+XG4gICAgICAgICAgICAgICAgPERvZ0NhcmQ+XG4gICAgICAgICAgICAgICAgICA8RG9nSW1hZ2Ugc3JjPXtzdWJCcmVlZE5hbWUucGljdHVyZX0gLz5cbiAgICAgICAgICAgICAgICAgIDxEb2dOYW1lIHRoZW1lPXt0aGVtZX0+e2dldFN1YkJyZWVkTmFtZShzdWJCcmVlZE5hbWUucGljdHVyZSl9PC9Eb2dOYW1lPlxuICAgICAgICAgICAgICAgIDwvRG9nQ2FyZD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L0RvZ0NvbnRhaW5lcj5cbiAgICAgIDwvRmF2b3VyaXRlQ29udGFpbmVyPlxuICAgIDwvTGF5b3V0PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ2NCIsIkxheW91dCIsIkRvZ0NvbnRhaW5lciIsIkRyb3BEb3duQ29udGFpbmVyIiwiRHJvcERvd25IZWFkZXIiLCJEcm9wRG93bkxpc3QiLCJEcm9wRG93bkxpc3RDb250YWluZXIiLCJGYXZvdXJpdGVDb250YWluZXIiLCJGaWx0ZXJDb250YWluZXIiLCJGaWx0ZXJUZXh0IiwiTGlzdEl0ZW0iLCJEb2dDYXJkIiwiRG9nSW1hZ2UiLCJEb2dOYW1lIiwidGhlbWUiLCJGYXZTdWJCcmVlZCIsImZhdm91cml0ZVBpYyIsInNldGZhdm91cml0ZVBpYyIsInNlbGVjdGVkT3B0aW9uIiwic2V0U2VsZWN0ZWRPcHRpb24iLCJmaWx0ZXJlZE9wdGlvbnMiLCJzZXRGaWx0ZXJlZE9wdGlvbnMiLCJpc09wZW4iLCJzZXRJc09wZW4iLCJ0b2dnbGluZyIsImZhdm91cml0ZURvZ3MiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic2F2ZWREb2dzIiwiSlNPTiIsInBhcnNlIiwiZ2V0U3ViQnJlZWROYW1lIiwicGljdHVyZSIsInNwbGl0IiwiZ2V0QnJlZWROYW1lcyIsImJyZWVkTmFtZXMiLCJtYXAiLCJuYW1lIiwiZG9nTmFtZSIsImluZGV4T2YiLCJwdXNoIiwiZ2V0TmFtZSIsIm9uT3B0aW9uQ2xpY2tlZCIsInZhbHVlIiwiZmlsdGVyZWRQaWN0dXJlcyIsImZpbHRlciIsImVsIiwic3ViQnJlZWROYW1lIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/favourite.tsx\n");

/***/ })

});