"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/subreeds/[dogName]",{

/***/ "./src/pages/subreeds/[dogName].tsx":
/*!******************************************!*\
  !*** ./src/pages/subreeds/[dogName].tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ DogPage; }\n/* harmony export */ });\n/* harmony import */ var _Users_andreiilisei_Coding_Practice_practiceProjShape_ShapeDogTest_ShapeDogTest_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Layout */ \"./src/components/Layout.tsx\");\n/* harmony import */ var _helpers_redHeart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/redHeart */ \"./src/helpers/redHeart.tsx\");\n/* harmony import */ var _styles_DogCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/DogCard */ \"./src/styles/DogCard.ts\");\n/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/theme */ \"./src/styles/theme.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/andreiilisei/Coding Practice/practiceProjShape/ShapeDogTest/ShapeDogTest/src/pages/subreeds/[dogName].tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar __N_SSG = true;\nfunction DogPage(dogs) {\n  _s();\n\n  var _this = this;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),\n      subBreeds = _useState[0],\n      setSubBreeds = _useState[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    if (subBreeds.length > 0) {\n      var storageDogs = JSON.parse(localStorage.getItem(\"favPic\") || \"null\");\n\n      if (storageDogs) {\n        var newDogs = (0,_Users_andreiilisei_Coding_Practice_practiceProjShape_ShapeDogTest_ShapeDogTest_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(subBreeds);\n\n        storageDogs.forEach(function (dog) {\n          var newDog = newDogs.find(function (d) {\n            return d.picture === dog.picture;\n          });\n\n          if (newDog) {\n            newDog.liked = true;\n          }\n        });\n        setSubBreeds(newDogs);\n      }\n    }\n  }, [subBreeds]);\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    if (dogs) {\n      setSubBreeds(dogs);\n    }\n  }, []);\n\n  var updateLocalStorage = function updateLocalStorage(item) {\n    var storageFavPics = JSON.parse(localStorage.getItem(\"favPic\") || \"null\");\n    var updatedStorageFavPics;\n\n    if (storageFavPics === null) {\n      var favDogs = [item];\n      localStorage.setItem(\"favPic\", JSON.stringify(favDogs));\n    } else {\n      if (item.liked) {\n        var shouldAddDog = storageFavPics.findIndex(function (dog) {\n          return dog.picture === item.picture;\n        }) === -1;\n        if (shouldAddDog) updatedStorageFavPics = [].concat((0,_Users_andreiilisei_Coding_Practice_practiceProjShape_ShapeDogTest_ShapeDogTest_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(storageFavPics), [item]);\n      } else {\n        var filteredPictures = storageFavPics.filter(function (dog) {\n          return dog.picture !== item.picture;\n        });\n        updatedStorageFavPics = (0,_Users_andreiilisei_Coding_Practice_practiceProjShape_ShapeDogTest_ShapeDogTest_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(filteredPictures);\n      }\n\n      if (updatedStorageFavPics) {\n        localStorage.setItem(\"favPic\", JSON.stringify(updatedStorageFavPics));\n      }\n    }\n  };\n\n  var setFavouriteImage = function setFavouriteImage(picture) {\n    if (subBreeds) {\n      var newSubBreeds = (0,_Users_andreiilisei_Coding_Practice_practiceProjShape_ShapeDogTest_ShapeDogTest_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(subBreeds);\n\n      var getSubBreedPicture = newSubBreeds.find(function (subBreedName) {\n        return subBreedName.picture === picture;\n      });\n      console.log(newSubBreeds);\n\n      if (getSubBreedPicture) {\n        getSubBreedPicture.liked = !getSubBreedPicture.liked;\n        updateLocalStorage(getSubBreedPicture);\n      }\n\n      setSubBreeds(newSubBreeds);\n    }\n  };\n\n  var getSubBreedName = function getSubBreedName(picture) {\n    return \"\".concat(picture.split(\"/\")[4]);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    children: subBreeds.map(function (subBreedName) {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_styles_DogCard__WEBPACK_IMPORTED_MODULE_4__.DogCard, {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_styles_DogCard__WEBPACK_IMPORTED_MODULE_4__.DogImage, {\n            src: subBreedName.picture\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 84,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_styles_DogCard__WEBPACK_IMPORTED_MODULE_4__.DogName, {\n            theme: _styles_theme__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n            children: [getSubBreedName(subBreedName.picture), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_styles_DogCard__WEBPACK_IMPORTED_MODULE_4__.Button, {\n              onClick: function onClick() {\n                return setFavouriteImage(subBreedName.picture);\n              },\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_helpers_redHeart__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                isLiked: subBreedName.liked\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 88,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 87,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 85,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 83,\n          columnNumber: 11\n        }, _this)\n      }, subBreedName.id, false, {\n        fileName: _jsxFileName,\n        lineNumber: 82,\n        columnNumber: 9\n      }, _this);\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 80,\n    columnNumber: 5\n  }, this);\n}\n\n_s(DogPage, \"jLo8HlfobKpqtmI+OydAUXg0S6k=\");\n\n_c = DogPage;\n\nvar _c;\n\n$RefreshReg$(_c, \"DogPage\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFZLENBQUNoQixPQUFkLENBQXZCO0FBQUEsZUFBakI7QUFBQSxxQ0FDRSw4REFBQyx5REFBRDtBQUFPLHVCQUFPLEVBQUVnQixZQUFZLENBQUNmO0FBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixTQUFVZSxZQUFZLENBQUNNLEVBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEYTtBQUFBLEtBQWQ7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFpQkQ7O0dBckZ1QnRDOztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvc3VicmVlZHMvW2RvZ05hbWVdLnRzeD83OWMyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdldFN0YXRpY1Byb3BzIH0gZnJvbSBcIm5leHQvdHlwZXNcIjtcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSBcInF1ZXJ5c3RyaW5nXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB2NCB9IGZyb20gXCJ1dWlkXCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IEhlYXJ0IGZyb20gXCIuLi8uLi9oZWxwZXJzL3JlZEhlYXJ0XCI7XG5pbXBvcnQgeyBCdXR0b24sIERvZ0NhcmQsIERvZ0ltYWdlLCBEb2dOYW1lIH0gZnJvbSBcIi4uLy4uL3N0eWxlcy9Eb2dDYXJkXCI7XG5pbXBvcnQgdGhlbWUgZnJvbSBcIi4uLy4uL3N0eWxlcy90aGVtZVwiO1xuaW1wb3J0IHsgRG9nLCBEb2dOZXcgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRG9nUGFnZShkb2dzOiBEb2dbXSkge1xuICBjb25zdCBbc3ViQnJlZWRzLCBzZXRTdWJCcmVlZHNdID0gdXNlU3RhdGU8RG9nW10+KFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChzdWJCcmVlZHMubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3Qgc3RvcmFnZURvZ3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZmF2UGljXCIpIHx8IFwibnVsbFwiKTtcblxuICAgICAgaWYgKHN0b3JhZ2VEb2dzKSB7XG4gICAgICAgIGNvbnN0IG5ld0RvZ3MgPSBbLi4uc3ViQnJlZWRzXTtcblxuICAgICAgICBzdG9yYWdlRG9ncy5mb3JFYWNoKChkb2c6IERvZykgPT4ge1xuICAgICAgICAgIGNvbnN0IG5ld0RvZyA9IG5ld0RvZ3MuZmluZCgoZCkgPT4gZC5waWN0dXJlID09PSBkb2cucGljdHVyZSk7XG5cbiAgICAgICAgICBpZiAobmV3RG9nKSB7XG4gICAgICAgICAgICBuZXdEb2cubGlrZWQgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgc2V0U3ViQnJlZWRzKG5ld0RvZ3MpO1xuICAgICAgfVxuICAgIH1cbiAgfSwgW3N1YkJyZWVkc10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGRvZ3MpIHtcbiAgICAgIHNldFN1YkJyZWVkcyhkb2dzKTtcbiAgICB9XG4gIH0sIFtdKTtcblxuICBjb25zdCB1cGRhdGVMb2NhbFN0b3JhZ2UgPSAoaXRlbTogRG9nKSA9PiB7XG4gICAgY29uc3Qgc3RvcmFnZUZhdlBpY3M6IERvZ1tdID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImZhdlBpY1wiKSB8fCBcIm51bGxcIik7XG4gICAgbGV0IHVwZGF0ZWRTdG9yYWdlRmF2UGljcztcblxuICAgIGlmIChzdG9yYWdlRmF2UGljcyA9PT0gbnVsbCkge1xuICAgICAgY29uc3QgZmF2RG9ncyA9IFtpdGVtXTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZmF2UGljXCIsIEpTT04uc3RyaW5naWZ5KGZhdkRvZ3MpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGl0ZW0ubGlrZWQpIHtcbiAgICAgICAgY29uc3Qgc2hvdWxkQWRkRG9nID0gc3RvcmFnZUZhdlBpY3MuZmluZEluZGV4KChkb2cpID0+IGRvZy5waWN0dXJlID09PSBpdGVtLnBpY3R1cmUpID09PSAtMTtcbiAgICAgICAgaWYgKHNob3VsZEFkZERvZykgdXBkYXRlZFN0b3JhZ2VGYXZQaWNzID0gWy4uLnN0b3JhZ2VGYXZQaWNzLCBpdGVtXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGZpbHRlcmVkUGljdHVyZXMgPSBzdG9yYWdlRmF2UGljcy5maWx0ZXIoKGRvZykgPT4gZG9nLnBpY3R1cmUgIT09IGl0ZW0ucGljdHVyZSk7XG4gICAgICAgIHVwZGF0ZWRTdG9yYWdlRmF2UGljcyA9IFsuLi5maWx0ZXJlZFBpY3R1cmVzXTtcbiAgICAgIH1cblxuICAgICAgaWYgKHVwZGF0ZWRTdG9yYWdlRmF2UGljcykge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImZhdlBpY1wiLCBKU09OLnN0cmluZ2lmeSh1cGRhdGVkU3RvcmFnZUZhdlBpY3MpKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgc2V0RmF2b3VyaXRlSW1hZ2UgPSAocGljdHVyZTogc3RyaW5nKSA9PiB7XG4gICAgaWYgKHN1YkJyZWVkcykge1xuICAgICAgY29uc3QgbmV3U3ViQnJlZWRzID0gWy4uLnN1YkJyZWVkc107XG4gICAgICBjb25zdCBnZXRTdWJCcmVlZFBpY3R1cmUgPSBuZXdTdWJCcmVlZHMuZmluZCgoc3ViQnJlZWROYW1lKSA9PiBzdWJCcmVlZE5hbWUucGljdHVyZSA9PT0gcGljdHVyZSk7XG4gICAgICBjb25zb2xlLmxvZyhuZXdTdWJCcmVlZHMpO1xuICAgICAgaWYgKGdldFN1YkJyZWVkUGljdHVyZSkge1xuICAgICAgICBnZXRTdWJCcmVlZFBpY3R1cmUubGlrZWQgPSAhZ2V0U3ViQnJlZWRQaWN0dXJlLmxpa2VkO1xuICAgICAgICB1cGRhdGVMb2NhbFN0b3JhZ2UoZ2V0U3ViQnJlZWRQaWN0dXJlKTtcbiAgICAgIH1cbiAgICAgIHNldFN1YkJyZWVkcyhuZXdTdWJCcmVlZHMpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBnZXRTdWJCcmVlZE5hbWUgPSAocGljdHVyZTogc3RyaW5nKSA9PiB7XG4gICAgcmV0dXJuIGAke3BpY3R1cmUuc3BsaXQoXCIvXCIpWzRdfWA7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAge3N1YkJyZWVkcy5tYXAoKHN1YkJyZWVkTmFtZTogRG9nKSA9PiAoXG4gICAgICAgIDxkaXYga2V5PXtzdWJCcmVlZE5hbWUuaWR9PlxuICAgICAgICAgIDxEb2dDYXJkPlxuICAgICAgICAgICAgPERvZ0ltYWdlIHNyYz17c3ViQnJlZWROYW1lLnBpY3R1cmV9IC8+XG4gICAgICAgICAgICA8RG9nTmFtZSB0aGVtZT17dGhlbWV9PlxuICAgICAgICAgICAgICB7Z2V0U3ViQnJlZWROYW1lKHN1YkJyZWVkTmFtZS5waWN0dXJlKX1cbiAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRGYXZvdXJpdGVJbWFnZShzdWJCcmVlZE5hbWUucGljdHVyZSl9PlxuICAgICAgICAgICAgICAgIDxIZWFydCBpc0xpa2VkPXtzdWJCcmVlZE5hbWUubGlrZWR9IC8+XG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9Eb2dOYW1lPlxuICAgICAgICAgIDwvRG9nQ2FyZD5cbiAgICAgICAgPC9kaXY+XG4gICAgICApKX1cbiAgICA8L0xheW91dD5cbiAgKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vZG9nLmNlby9hcGkvYnJlZWRzL2xpc3QvYWxsXCIpO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICBjb25zdCBwYXRocyA9IE9iamVjdC5rZXlzKGRhdGEubWVzc2FnZSkubWFwKChkb2dzKSA9PiAoe1xuICAgIHBhcmFtczogeyBkb2dOYW1lOiBkb2dzIH0sXG4gIH0pKTtcblxuICByZXR1cm4ge1xuICAgIHBhdGhzLFxuICAgIGZhbGxiYWNrOiBmYWxzZSxcbiAgfTtcbn1cblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzOiBHZXRTdGF0aWNQcm9wcyA9IGFzeW5jICgge3BhcmFtc30gKSA9PiB7XG4gIGNvbnN0IGRvZ05hbWU6IGFueSA9IHBhcmFtcztcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vZG9nLmNlby9hcGkvYnJlZWQvJHtkb2dOYW1lfS9pbWFnZXNgKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgY29uc3QgZG9ncyA9IGRhdGEubWVzc2FnZS5tYXAoKGl0ZW1zOiBEb2cpID0+IHtcbiAgICByZXR1cm4geyBwaWN0dXJlOiBpdGVtcywgbGlrZWQ6IGZhbHNlLCBpZDogdjQoKSB9O1xuICB9KTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7IGRvZ3MsIGRvZ05hbWUgfSxcbiAgfTtcbn07XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJMYXlvdXQiLCJIZWFydCIsIkJ1dHRvbiIsIkRvZ0NhcmQiLCJEb2dJbWFnZSIsIkRvZ05hbWUiLCJ0aGVtZSIsIkRvZ1BhZ2UiLCJkb2dzIiwic3ViQnJlZWRzIiwic2V0U3ViQnJlZWRzIiwibGVuZ3RoIiwic3RvcmFnZURvZ3MiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwibmV3RG9ncyIsImZvckVhY2giLCJkb2ciLCJuZXdEb2ciLCJmaW5kIiwiZCIsInBpY3R1cmUiLCJsaWtlZCIsInVwZGF0ZUxvY2FsU3RvcmFnZSIsIml0ZW0iLCJzdG9yYWdlRmF2UGljcyIsInVwZGF0ZWRTdG9yYWdlRmF2UGljcyIsImZhdkRvZ3MiLCJzZXRJdGVtIiwic3RyaW5naWZ5Iiwic2hvdWxkQWRkRG9nIiwiZmluZEluZGV4IiwiZmlsdGVyZWRQaWN0dXJlcyIsImZpbHRlciIsInNldEZhdm91cml0ZUltYWdlIiwibmV3U3ViQnJlZWRzIiwiZ2V0U3ViQnJlZWRQaWN0dXJlIiwic3ViQnJlZWROYW1lIiwiY29uc29sZSIsImxvZyIsImdldFN1YkJyZWVkTmFtZSIsInNwbGl0IiwibWFwIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/subreeds/[dogName].tsx\n");

/***/ })

});