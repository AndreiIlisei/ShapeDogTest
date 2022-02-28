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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ FavSubBreed; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ \"./src/components/Layout.tsx\");\n/* harmony import */ var _styles_DogCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/DogCard */ \"./src/styles/DogCard.ts\");\n/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/theme */ \"./src/styles/theme.ts\");\n/* harmony import */ var react_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dropdown */ \"./node_modules/react-dropdown/dist/index.js\");\n/* harmony import */ var _styles_Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Container */ \"./src/styles/Container.tsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/andreiilisei/Coding Practice/practiceProjShape/ShapeDogTest/ShapeDogTest/src/pages/favourite.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction FavSubBreed() {\n  _s();\n\n  var _this = this;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),\n      favouritePic = _useState[0],\n      setfavouritePic = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\"),\n      selectedDog = _useState2[0],\n      setSelectedDog = _useState2[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    var favouriteDogs = localStorage.getItem(\"favPic\");\n    var savedDogs = JSON.parse(favouriteDogs);\n\n    if (savedDogs) {\n      setfavouritePic(savedDogs);\n    }\n  }, []);\n\n  var getBreedNames = function getBreedNames() {\n    var breedNames = [\"All Breeds\"];\n    favouritePic.forEach(function (name) {\n      var dogName = name.picture.split('/')[4];\n      console.log(dogName);\n      if (breedNames.indexOf(dogName) === -1) breedNames.push(dogName);\n    });\n    return breedNames;\n  };\n\n  var getSubBreedName = function getSubBreedName(picture) {\n    return \"\".concat(picture.split(\"/\")[4]);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"span\", {\n        children: \" FIlter by breed\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 11\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_dropdown__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        options: getBreedNames()\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 11\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 9\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_styles_Container__WEBPACK_IMPORTED_MODULE_5__.DogContainer, {\n      children: favouritePic.map(function (subBreedName) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_styles_DogCard__WEBPACK_IMPORTED_MODULE_2__.DogCard, {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_styles_DogCard__WEBPACK_IMPORTED_MODULE_2__.DogImage, {\n              src: subBreedName.picture\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 49,\n              columnNumber: 19\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_styles_DogCard__WEBPACK_IMPORTED_MODULE_2__.DogName, {\n              theme: _styles_theme__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n              children: getSubBreedName(subBreedName.picture)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 50,\n              columnNumber: 19\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 48,\n            columnNumber: 17\n          }, _this)\n        }, subBreedName.id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 15\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 9\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 39,\n    columnNumber: 5\n  }, this);\n}\n\n_s(FavSubBreed, \"nQtwXsNhVTP+U1ytkI9bLHAxdhQ=\");\n\n_c = FavSubBreed;\n\nvar _c;\n\n$RefreshReg$(_c, \"FavSubBreed\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvZmF2b3VyaXRlLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVlLFNBQVNVLFdBQVQsR0FBdUI7QUFBQTs7QUFBQTs7QUFDcEMsa0JBQXdDRiwrQ0FBUSxDQUFDLEVBQUQsQ0FBaEQ7QUFBQSxNQUFPRyxZQUFQO0FBQUEsTUFBcUJDLGVBQXJCOztBQUNBLG1CQUFzQ0osK0NBQVEsQ0FBQyxFQUFELENBQTlDO0FBQUEsTUFBT0ssV0FBUDtBQUFBLE1BQW9CQyxjQUFwQjs7QUFFQVAsRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTVEsYUFBYSxHQUFHQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsUUFBckIsQ0FBdEI7QUFDQSxRQUFNQyxTQUFTLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXTCxhQUFYLENBQWxCOztBQUNBLFFBQUlHLFNBQUosRUFBZTtBQUNiTixNQUFBQSxlQUFlLENBQUNNLFNBQUQsQ0FBZjtBQUNEO0FBQ0YsR0FOUSxFQU1OLEVBTk0sQ0FBVDs7QUFRQSxNQUFNRyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQU07QUFDMUIsUUFBTUMsVUFBVSxHQUFHLENBQUMsWUFBRCxDQUFuQjtBQUNBWCxJQUFBQSxZQUFZLENBQUNZLE9BQWIsQ0FBcUIsVUFBQUMsSUFBSSxFQUFJO0FBQzNCLFVBQU1DLE9BQU8sR0FBR0QsSUFBSSxDQUFDRSxPQUFMLENBQWFDLEtBQWIsQ0FBbUIsR0FBbkIsRUFBd0IsQ0FBeEIsQ0FBaEI7QUFDQUMsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlKLE9BQVo7QUFDQSxVQUFJSCxVQUFVLENBQUNRLE9BQVgsQ0FBbUJMLE9BQW5CLE1BQWdDLENBQUMsQ0FBckMsRUFBd0NILFVBQVUsQ0FBQ1MsSUFBWCxDQUFnQk4sT0FBaEI7QUFDekMsS0FKRDtBQU1BLFdBQU9ILFVBQVA7QUFDQyxHQVRIOztBQVlBLE1BQU1VLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ04sT0FBRCxFQUFxQjtBQUMzQyxxQkFBVUEsT0FBTyxDQUFDQyxLQUFSLENBQWMsR0FBZCxFQUFtQixDQUFuQixDQUFWO0FBQ0QsR0FGRDs7QUFJQSxzQkFDRSw4REFBQywwREFBRDtBQUFBLDRCQUNJO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFLDhEQUFDLHNEQUFEO0FBQVUsZUFBTyxFQUFFTixhQUFhO0FBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUtJLDhEQUFDLDJEQUFEO0FBQUEsZ0JBQ0dWLFlBQVksQ0FBQ3NCLEdBQWIsQ0FBaUIsVUFBQ0MsWUFBRCxFQUF1QjtBQUN2Qyw0QkFDRTtBQUFBLGlDQUNFLDhEQUFDLG9EQUFEO0FBQUEsb0NBQ0UsOERBQUMscURBQUQ7QUFBVSxpQkFBRyxFQUFFQSxZQUFZLENBQUNSO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFFRSw4REFBQyxvREFBRDtBQUFTLG1CQUFLLEVBQUVyQixxREFBaEI7QUFBQSx3QkFBd0IyQixlQUFlLENBQUNFLFlBQVksQ0FBQ1IsT0FBZDtBQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLFdBQVVRLFlBQVksQ0FBQ0MsRUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERjtBQVFELE9BVEE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFvQkQ7O0dBaER1QnpCOztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvZmF2b3VyaXRlLnRzeD8wMzBjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcbmltcG9ydCB7IERvZ0NhcmQsIERvZ0ltYWdlLCBEb2dOYW1lIH0gZnJvbSBcIi4uL3N0eWxlcy9Eb2dDYXJkXCI7XG5pbXBvcnQgdGhlbWUgZnJvbSBcIi4uL3N0eWxlcy90aGVtZVwiO1xuaW1wb3J0IHsgRG9nIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgRHJvcGRvd24gZnJvbSBcInJlYWN0LWRyb3Bkb3duXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBEb2dDb250YWluZXIgfSBmcm9tIFwiLi4vc3R5bGVzL0NvbnRhaW5lclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGYXZTdWJCcmVlZCgpIHtcbiAgY29uc3QgW2Zhdm91cml0ZVBpYywgc2V0ZmF2b3VyaXRlUGljXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3NlbGVjdGVkRG9nLCBzZXRTZWxlY3RlZERvZ10gPSB1c2VTdGF0ZShcIlwiKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGZhdm91cml0ZURvZ3MgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImZhdlBpY1wiKTtcbiAgICBjb25zdCBzYXZlZERvZ3MgPSBKU09OLnBhcnNlKGZhdm91cml0ZURvZ3MpO1xuICAgIGlmIChzYXZlZERvZ3MpIHtcbiAgICAgIHNldGZhdm91cml0ZVBpYyhzYXZlZERvZ3MpO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIGNvbnN0IGdldEJyZWVkTmFtZXMgPSAoKSA9PiB7XG4gICAgY29uc3QgYnJlZWROYW1lcyA9IFtcIkFsbCBCcmVlZHNcIl07XG4gICAgZmF2b3VyaXRlUGljLmZvckVhY2gobmFtZSA9PiB7XG4gICAgICBjb25zdCBkb2dOYW1lID0gbmFtZS5waWN0dXJlLnNwbGl0KCcvJylbNF07XG4gICAgICBjb25zb2xlLmxvZyhkb2dOYW1lKTtcbiAgICAgIGlmIChicmVlZE5hbWVzLmluZGV4T2YoZG9nTmFtZSkgPT09IC0xKSBicmVlZE5hbWVzLnB1c2goZG9nTmFtZSk7XG4gICAgfSlcblxuICAgIHJldHVybiBicmVlZE5hbWVzO1xuICAgIH1cblxuXG4gIGNvbnN0IGdldFN1YkJyZWVkTmFtZSA9IChwaWN0dXJlOiBzdHJpbmcpID0+IHtcbiAgICByZXR1cm4gYCR7cGljdHVyZS5zcGxpdChcIi9cIilbNF19YDtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPHNwYW4+IEZJbHRlciBieSBicmVlZDwvc3Bhbj5cbiAgICAgICAgICA8RHJvcGRvd24gb3B0aW9ucz17Z2V0QnJlZWROYW1lcygpfS8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8RG9nQ29udGFpbmVyPlxuICAgICAgICAgIHtmYXZvdXJpdGVQaWMubWFwKChzdWJCcmVlZE5hbWU6IERvZykgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e3N1YkJyZWVkTmFtZS5pZH0+XG4gICAgICAgICAgICAgICAgPERvZ0NhcmQ+XG4gICAgICAgICAgICAgICAgICA8RG9nSW1hZ2Ugc3JjPXtzdWJCcmVlZE5hbWUucGljdHVyZX0gLz5cbiAgICAgICAgICAgICAgICAgIDxEb2dOYW1lIHRoZW1lPXt0aGVtZX0+e2dldFN1YkJyZWVkTmFtZShzdWJCcmVlZE5hbWUucGljdHVyZSl9PC9Eb2dOYW1lPlxuICAgICAgICAgICAgICAgIDwvRG9nQ2FyZD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L0RvZ0NvbnRhaW5lcj5cbiAgICA8L0xheW91dD5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkxheW91dCIsIkRvZ0NhcmQiLCJEb2dJbWFnZSIsIkRvZ05hbWUiLCJ0aGVtZSIsIkRyb3Bkb3duIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJEb2dDb250YWluZXIiLCJGYXZTdWJCcmVlZCIsImZhdm91cml0ZVBpYyIsInNldGZhdm91cml0ZVBpYyIsInNlbGVjdGVkRG9nIiwic2V0U2VsZWN0ZWREb2ciLCJmYXZvdXJpdGVEb2dzIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInNhdmVkRG9ncyIsIkpTT04iLCJwYXJzZSIsImdldEJyZWVkTmFtZXMiLCJicmVlZE5hbWVzIiwiZm9yRWFjaCIsIm5hbWUiLCJkb2dOYW1lIiwicGljdHVyZSIsInNwbGl0IiwiY29uc29sZSIsImxvZyIsImluZGV4T2YiLCJwdXNoIiwiZ2V0U3ViQnJlZWROYW1lIiwibWFwIiwic3ViQnJlZWROYW1lIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/favourite.tsx\n");

/***/ })

});