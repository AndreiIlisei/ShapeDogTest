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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ FavSubBreed; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ \"./src/components/Layout.tsx\");\n/* harmony import */ var _styles_DogCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/DogCard */ \"./src/styles/DogCard.ts\");\n/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/theme */ \"./src/styles/theme.ts\");\n/* harmony import */ var _styles_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Container */ \"./src/styles/Container.tsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/andreiilisei/Coding Practice/practiceProjShape/ShapeDogTest/ShapeDogTest/src/pages/favourite.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction FavSubBreed() {\n  _s();\n\n  var _this = this;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),\n      favouritePic = _useState[0],\n      setfavouritePic = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      isOpen = _useState2[0],\n      setIsOpen = _useState2[1];\n\n  var toggling = function toggling() {\n    return setIsOpen(!isOpen);\n  };\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"All Breeds\"),\n      selectedDog = _useState3[0],\n      setSelectedDog = _useState3[1];\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),\n      filteredDogs = _useState4[0],\n      setFilteredDogs = _useState4[1]; // Check if the favPic exists.\n\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    var favouriteDogs = localStorage.getItem(\"favPic\");\n    var savedDogs = JSON.parse(favouriteDogs);\n\n    if (savedDogs) {\n      setfavouritePic(savedDogs);\n    }\n  }, []); // Get the name of the Dogs from the string.\n\n  var getSubBreedName = function getSubBreedName(picture) {\n    return \"\".concat(picture.split(\"/\")[4]);\n  };\n\n  var getBreedNames = function getBreedNames() {\n    var breedNames = [\"All Breeds\"];\n    favouritePic.forEach(function (name) {\n      var dogName = name.picture.split(\"/\")[4];\n      if (breedNames.indexOf(dogName) === -1) breedNames.push(dogName);\n    });\n    return breedNames;\n  };\n\n  var handleDogChange = function handleDogChange(event) {\n    setfavouritePic(event.target);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_styles_Container__WEBPACK_IMPORTED_MODULE_4__.FavouriteContainer, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_styles_Container__WEBPACK_IMPORTED_MODULE_4__.FilterContainer, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"span\", {\n          children: \" FIlter by breed\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_styles_Container__WEBPACK_IMPORTED_MODULE_4__.DropDownContainer, {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_styles_Container__WEBPACK_IMPORTED_MODULE_4__.DropDownHeader, {\n            onClick: toggling,\n            children: \"Mangoes\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 51,\n            columnNumber: 13\n          }, this), isOpen && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_styles_Container__WEBPACK_IMPORTED_MODULE_4__.DropDownListContainer, {\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_styles_Container__WEBPACK_IMPORTED_MODULE_4__.DropDownList, {\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_styles_Container__WEBPACK_IMPORTED_MODULE_4__.ListItem, {\n                children: getBreedNames()\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 55,\n                columnNumber: 19\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 54,\n              columnNumber: 17\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 53,\n            columnNumber: 15\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_styles_Container__WEBPACK_IMPORTED_MODULE_4__.DogContainer, {\n        children: favouritePic.map(function (subBreedName) {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_styles_DogCard__WEBPACK_IMPORTED_MODULE_2__.DogCard, {\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_styles_DogCard__WEBPACK_IMPORTED_MODULE_2__.DogImage, {\n                src: subBreedName.picture\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 66,\n                columnNumber: 19\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_styles_DogCard__WEBPACK_IMPORTED_MODULE_2__.DogName, {\n                theme: _styles_theme__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                children: getSubBreedName(subBreedName.picture)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 67,\n                columnNumber: 19\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 65,\n              columnNumber: 17\n            }, _this)\n          }, subBreedName.id, false, {\n            fileName: _jsxFileName,\n            lineNumber: 64,\n            columnNumber: 15\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 61,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 46,\n    columnNumber: 5\n  }, this);\n}\n\n_s(FavSubBreed, \"zIZ+ScyhInp19hezWGV5hrNqn+U=\");\n\n_c = FavSubBreed;\n\nvar _c;\n\n$RefreshReg$(_c, \"FavSubBreed\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxrQkFDR2xCLFlBQVksQ0FBQzRCLEdBQWIsQ0FBaUIsVUFBQ0MsWUFBRCxFQUF1QjtBQUN2Qyw4QkFDRTtBQUFBLG1DQUNFLDhEQUFDLG9EQUFEO0FBQUEsc0NBQ0UsOERBQUMscURBQUQ7QUFBVSxtQkFBRyxFQUFFQSxZQUFZLENBQUNiO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREYsZUFFRSw4REFBQyxvREFBRDtBQUFTLHFCQUFLLEVBQUU1QixxREFBaEI7QUFBQSwwQkFBd0IyQixlQUFlLENBQUNjLFlBQVksQ0FBQ2IsT0FBZDtBQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLGFBQVVhLFlBQVksQ0FBQ0MsRUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERjtBQVFELFNBVEE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBZEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBK0JEOztHQWxFdUIvQjs7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2Zhdm91cml0ZS50c3g/MDMwYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgeyBEb2dDYXJkLCBEb2dJbWFnZSwgRG9nTmFtZSB9IGZyb20gXCIuLi9zdHlsZXMvRG9nQ2FyZFwiO1xuaW1wb3J0IHRoZW1lIGZyb20gXCIuLi9zdHlsZXMvdGhlbWVcIjtcbmltcG9ydCB7IERvZyB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IERyb3Bkb3duIGZyb20gXCJyZWFjdC1kcm9wZG93blwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRG9nQ29udGFpbmVyLCBEcm9wRG93bkNvbnRhaW5lciwgRHJvcERvd25IZWFkZXIsIERyb3BEb3duTGlzdCwgRHJvcERvd25MaXN0Q29udGFpbmVyLCBGYXZvdXJpdGVDb250YWluZXIsIEZpbHRlckNvbnRhaW5lciwgTGlzdEl0ZW0gfSBmcm9tIFwiLi4vc3R5bGVzL0NvbnRhaW5lclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGYXZTdWJCcmVlZCgpIHtcbiAgY29uc3QgW2Zhdm91cml0ZVBpYywgc2V0ZmF2b3VyaXRlUGljXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgdG9nZ2xpbmcgPSAoKSA9PiBzZXRJc09wZW4oIWlzT3Blbik7XG5cbiAgY29uc3QgW3NlbGVjdGVkRG9nLCBzZXRTZWxlY3RlZERvZ10gPSB1c2VTdGF0ZShcIkFsbCBCcmVlZHNcIik7XG4gIGNvbnN0IFtmaWx0ZXJlZERvZ3MsIHNldEZpbHRlcmVkRG9nc10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgLy8gQ2hlY2sgaWYgdGhlIGZhdlBpYyBleGlzdHMuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmF2b3VyaXRlRG9ncyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZmF2UGljXCIpO1xuICAgIGNvbnN0IHNhdmVkRG9ncyA9IEpTT04ucGFyc2UoZmF2b3VyaXRlRG9ncyk7XG4gICAgaWYgKHNhdmVkRG9ncykge1xuICAgICAgc2V0ZmF2b3VyaXRlUGljKHNhdmVkRG9ncyk7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgLy8gR2V0IHRoZSBuYW1lIG9mIHRoZSBEb2dzIGZyb20gdGhlIHN0cmluZy5cbiAgY29uc3QgZ2V0U3ViQnJlZWROYW1lID0gKHBpY3R1cmU6IHN0cmluZykgPT4ge1xuICAgIHJldHVybiBgJHtwaWN0dXJlLnNwbGl0KFwiL1wiKVs0XX1gO1xuICB9O1xuXG4gIGNvbnN0IGdldEJyZWVkTmFtZXMgPSAoKSA9PiB7XG4gICAgY29uc3QgYnJlZWROYW1lcyA9IFtcIkFsbCBCcmVlZHNcIl07XG4gICAgZmF2b3VyaXRlUGljLmZvckVhY2goKG5hbWUpID0+IHtcbiAgICAgIGNvbnN0IGRvZ05hbWUgPSBuYW1lLnBpY3R1cmUuc3BsaXQoXCIvXCIpWzRdO1xuICAgICAgaWYgKGJyZWVkTmFtZXMuaW5kZXhPZihkb2dOYW1lKSA9PT0gLTEpIGJyZWVkTmFtZXMucHVzaChkb2dOYW1lKTtcbiAgICB9KTtcbiAgICByZXR1cm4gYnJlZWROYW1lcztcbiAgfTtcblxuICBjb25zdCBoYW5kbGVEb2dDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICBzZXRmYXZvdXJpdGVQaWMoZXZlbnQudGFyZ2V0KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8RmF2b3VyaXRlQ29udGFpbmVyPlxuICAgICAgICA8RmlsdGVyQ29udGFpbmVyPlxuICAgICAgICAgIDxzcGFuPiBGSWx0ZXIgYnkgYnJlZWQ8L3NwYW4+XG4gICAgICAgICAgPERyb3BEb3duQ29udGFpbmVyPlxuICAgICAgICAgICAgPERyb3BEb3duSGVhZGVyIG9uQ2xpY2s9e3RvZ2dsaW5nfT5NYW5nb2VzPC9Ecm9wRG93bkhlYWRlcj5cbiAgICAgICAgICAgIHtpc09wZW4gJiYgKFxuICAgICAgICAgICAgICA8RHJvcERvd25MaXN0Q29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDxEcm9wRG93bkxpc3Q+XG4gICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0+e2dldEJyZWVkTmFtZXMoKX08L0xpc3RJdGVtPlxuICAgICAgICAgICAgICAgIDwvRHJvcERvd25MaXN0PlxuICAgICAgICAgICAgICA8L0Ryb3BEb3duTGlzdENvbnRhaW5lcj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9Ecm9wRG93bkNvbnRhaW5lcj5cbiAgICAgICAgPC9GaWx0ZXJDb250YWluZXI+XG4gICAgICAgIDxEb2dDb250YWluZXI+XG4gICAgICAgICAge2Zhdm91cml0ZVBpYy5tYXAoKHN1YkJyZWVkTmFtZTogRG9nKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8ZGl2IGtleT17c3ViQnJlZWROYW1lLmlkfT5cbiAgICAgICAgICAgICAgICA8RG9nQ2FyZD5cbiAgICAgICAgICAgICAgICAgIDxEb2dJbWFnZSBzcmM9e3N1YkJyZWVkTmFtZS5waWN0dXJlfSAvPlxuICAgICAgICAgICAgICAgICAgPERvZ05hbWUgdGhlbWU9e3RoZW1lfT57Z2V0U3ViQnJlZWROYW1lKHN1YkJyZWVkTmFtZS5waWN0dXJlKX08L0RvZ05hbWU+XG4gICAgICAgICAgICAgICAgPC9Eb2dDYXJkPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvRG9nQ29udGFpbmVyPlxuICAgICAgPC9GYXZvdXJpdGVDb250YWluZXI+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJMYXlvdXQiLCJEb2dDYXJkIiwiRG9nSW1hZ2UiLCJEb2dOYW1lIiwidGhlbWUiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkRvZ0NvbnRhaW5lciIsIkRyb3BEb3duQ29udGFpbmVyIiwiRHJvcERvd25IZWFkZXIiLCJEcm9wRG93bkxpc3QiLCJEcm9wRG93bkxpc3RDb250YWluZXIiLCJGYXZvdXJpdGVDb250YWluZXIiLCJGaWx0ZXJDb250YWluZXIiLCJMaXN0SXRlbSIsIkZhdlN1YkJyZWVkIiwiZmF2b3VyaXRlUGljIiwic2V0ZmF2b3VyaXRlUGljIiwiaXNPcGVuIiwic2V0SXNPcGVuIiwidG9nZ2xpbmciLCJzZWxlY3RlZERvZyIsInNldFNlbGVjdGVkRG9nIiwiZmlsdGVyZWREb2dzIiwic2V0RmlsdGVyZWREb2dzIiwiZmF2b3VyaXRlRG9ncyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzYXZlZERvZ3MiLCJKU09OIiwicGFyc2UiLCJnZXRTdWJCcmVlZE5hbWUiLCJwaWN0dXJlIiwic3BsaXQiLCJnZXRCcmVlZE5hbWVzIiwiYnJlZWROYW1lcyIsImZvckVhY2giLCJuYW1lIiwiZG9nTmFtZSIsImluZGV4T2YiLCJwdXNoIiwiaGFuZGxlRG9nQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJtYXAiLCJzdWJCcmVlZE5hbWUiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/favourite.tsx\n");

/***/ })

});