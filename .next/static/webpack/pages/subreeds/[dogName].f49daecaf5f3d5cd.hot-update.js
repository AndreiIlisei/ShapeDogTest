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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ DogPage; }\n/* harmony export */ });\n/* harmony import */ var _Users_andreiilisei_Coding_Practice_practiceProjShape_ShapeDogTest_ShapeDogTest_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _helpers_redHeart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/redHeart */ \"./src/helpers/redHeart.tsx\");\n/* harmony import */ var _helpers_greyHeart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/greyHeart */ \"./src/helpers/greyHeart.tsx\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Layout */ \"./src/components/Layout.tsx\");\n/* harmony import */ var _styles_DogCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/DogCard */ \"./src/styles/DogCard.ts\");\n/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../styles/theme */ \"./src/styles/theme.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/andreiilisei/Coding Practice/practiceProjShape/ShapeDogTest/ShapeDogTest/src/pages/subreeds/[dogName].tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar __N_SSG = true;\nfunction DogPage(_ref) {\n  _s();\n\n  var _this = this;\n\n  var dogs = _ref.dogs;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),\n      subBreeds = _useState[0],\n      setSubBreeds = _useState[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    if (subBreeds.length > 0) {\n      var storageDogs = JSON.parse(localStorage.getItem(\"favPic\") || \"null\");\n\n      if (storageDogs) {\n        var newDogs = (0,_Users_andreiilisei_Coding_Practice_practiceProjShape_ShapeDogTest_ShapeDogTest_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(subBreeds);\n\n        storageDogs.forEach(function (dog) {\n          var newDog = newDogs.find(function (d) {\n            return d.picture === dog.picture;\n          });\n\n          if (newDog) {\n            newDog.liked = true;\n          }\n        });\n        setSubBreeds(newDogs);\n      }\n    }\n  }, [subBreeds]);\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    if (dogs) {\n      setSubBreeds(dogs);\n    }\n  }, []);\n\n  var updateLocalStorage = function updateLocalStorage(item) {\n    var storageFavPics = JSON.parse(localStorage.getItem(\"favPic\") || \"null\");\n    var updatedStorageFavPics;\n\n    if (storageFavPics === null) {\n      var favDogs = [item];\n      localStorage.setItem(\"favPic\", JSON.stringify(favDogs));\n    } else {\n      if (item.liked) {\n        var filteredPictures = (0,_Users_andreiilisei_Coding_Practice_practiceProjShape_ShapeDogTest_ShapeDogTest_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(storageFavPics).filter(function (dog) {\n          return dog.picture !== item.picture;\n        });\n\n        updatedStorageFavPics = [].concat((0,_Users_andreiilisei_Coding_Practice_practiceProjShape_ShapeDogTest_ShapeDogTest_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(filteredPictures), [item]);\n      } else {\n        var _filteredPictures = (0,_Users_andreiilisei_Coding_Practice_practiceProjShape_ShapeDogTest_ShapeDogTest_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(storageFavPics).filter(function (dog) {\n          return dog.picture !== item.picture;\n        });\n\n        updatedStorageFavPics = (0,_Users_andreiilisei_Coding_Practice_practiceProjShape_ShapeDogTest_ShapeDogTest_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_filteredPictures);\n      }\n\n      localStorage.removeItem(\"favPic\");\n      localStorage.setItem(\"favPic\", JSON.stringify(updatedStorageFavPics));\n    }\n  };\n\n  var setFavouriteImage = function setFavouriteImage(picture) {\n    if (subBreeds) {\n      var newSubBreeds = (0,_Users_andreiilisei_Coding_Practice_practiceProjShape_ShapeDogTest_ShapeDogTest_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(subBreeds);\n\n      var getSubBreedPicture = newSubBreeds.find(function (subBreedName) {\n        return subBreedName.picture === picture;\n      });\n      console.log(newSubBreeds);\n\n      if (getSubBreedPicture) {\n        getSubBreedPicture.liked = !getSubBreedPicture.liked;\n      }\n\n      setSubBreeds(newSubBreeds);\n      updateLocalStorage(getSubBreedPicture);\n    }\n  };\n\n  var getSubBreedName = function getSubBreedName(picture) {\n    return \"\".concat(picture.split(\"/\")[4]);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    children: subBreeds.map(function (subBreedName) {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_styles_DogCard__WEBPACK_IMPORTED_MODULE_5__.DogCard, {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_styles_DogCard__WEBPACK_IMPORTED_MODULE_5__.DogImage, {\n            src: subBreedName.picture\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 85,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_styles_DogCard__WEBPACK_IMPORTED_MODULE_5__.DogName, {\n            theme: _styles_theme__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n            children: [getSubBreedName(subBreedName.picture), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_styles_DogCard__WEBPACK_IMPORTED_MODULE_5__.Button, {\n              onClick: function onClick() {\n                return setFavouriteImage(subBreedName.picture);\n              },\n              children: subBreedName.liked ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_helpers_redHeart__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 88,\n                columnNumber: 101\n              }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_helpers_greyHeart__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 88,\n                columnNumber: 116\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 88,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 86,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 84,\n          columnNumber: 11\n        }, _this)\n      }, subBreedName.id, false, {\n        fileName: _jsxFileName,\n        lineNumber: 83,\n        columnNumber: 9\n      }, _this);\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 81,\n    columnNumber: 5\n  }, this);\n}\n\n_s(DogPage, \"jLo8HlfobKpqtmI+OydAUXg0S6k=\");\n\n_c = DogPage;\n\nvar _c;\n\n$RefreshReg$(_c, \"DogPage\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBQSx1QkFBTVksaUJBQWlCLENBQUNHLFlBQVksQ0FBQ2YsT0FBZCxDQUF2QjtBQUFBLGVBQWpCO0FBQUEsd0JBQWlFZSxZQUFZLENBQUNkLEtBQWIsZ0JBQXFCLDhEQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQXJCLGdCQUFvQyw4REFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXJHO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLFNBQVVjLFlBQVksQ0FBQ00sRUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURhO0FBQUEsS0FBZDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWVEOztHQW5GdUJyQzs7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3N1YnJlZWRzL1tkb2dOYW1lXS50c3g/NzljMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHZXRTdGF0aWNQcm9wcyB9IGZyb20gXCJuZXh0L3R5cGVzXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB2NCB9IGZyb20gXCJ1dWlkXCI7XG5pbXBvcnQgUmVkSGVhcnQgZnJvbSBcIi4uLy4uL2hlbHBlcnMvcmVkSGVhcnRcIjtcbmltcG9ydCBHcmV5SGVhcnQgZnJvbSBcIi4uLy4uL2hlbHBlcnMvZ3JleUhlYXJ0XCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0xheW91dFwiO1xuXG5pbXBvcnQgeyBCdXR0b24sIERvZ0NhcmQsIERvZ0ltYWdlLCBEb2dOYW1lIH0gZnJvbSBcIi4uLy4uL3N0eWxlcy9Eb2dDYXJkXCI7XG5pbXBvcnQgdGhlbWUgZnJvbSBcIi4uLy4uL3N0eWxlcy90aGVtZVwiO1xuaW1wb3J0IHsgRG9nIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERvZ1BhZ2UoeyBkb2dzIH06IGFueSkge1xuICAgIGNvbnN0IFtzdWJCcmVlZHMsIHNldFN1YkJyZWVkc10gPSB1c2VTdGF0ZTxEb2dbXT4oW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHN1YkJyZWVkcy5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBzdG9yYWdlRG9ncyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJmYXZQaWNcIikgfHwgXCJudWxsXCIpO1xuXG4gICAgICBpZihzdG9yYWdlRG9ncykge1xuICAgICAgICBjb25zdCBuZXdEb2dzID0gWy4uLnN1YkJyZWVkc107XG5cbiAgICAgICAgc3RvcmFnZURvZ3MuZm9yRWFjaCgoZG9nOiBEb2cpID0+IHtcbiAgICAgICAgICBjb25zdCBuZXdEb2cgPSBuZXdEb2dzLmZpbmQoZCA9PiBkLnBpY3R1cmUgPT09IGRvZy5waWN0dXJlKTtcblxuICAgICAgICAgIGlmKG5ld0RvZykge1xuICAgICAgICAgICAgbmV3RG9nLmxpa2VkID0gdHJ1ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgc2V0U3ViQnJlZWRzKG5ld0RvZ3MpO1xuICAgICAgfVxuXG4gICAgfVxuICB9LCBbc3ViQnJlZWRzXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoZG9ncykge1xuICAgICAgc2V0U3ViQnJlZWRzKGRvZ3MpO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIGNvbnN0IHVwZGF0ZUxvY2FsU3RvcmFnZSA9IChpdGVtOiBhbnkpID0+IHtcbiAgICBjb25zdCBzdG9yYWdlRmF2UGljcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJmYXZQaWNcIikgfHwgXCJudWxsXCIpO1xuICAgIGxldCB1cGRhdGVkU3RvcmFnZUZhdlBpY3M7XG5cbiAgICBpZiAoc3RvcmFnZUZhdlBpY3MgPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGZhdkRvZ3MgPSBbaXRlbV07XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImZhdlBpY1wiLCBKU09OLnN0cmluZ2lmeShmYXZEb2dzKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChpdGVtLmxpa2VkKSB7XG4gICAgICAgIGNvbnN0IGZpbHRlcmVkUGljdHVyZXMgPSBbLi4uc3RvcmFnZUZhdlBpY3NdLmZpbHRlcihkb2cgPT4gZG9nLnBpY3R1cmUgIT09IGl0ZW0ucGljdHVyZSk7XG4gICAgICAgIHVwZGF0ZWRTdG9yYWdlRmF2UGljcyA9IFsuLi5maWx0ZXJlZFBpY3R1cmVzLCBpdGVtXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGZpbHRlcmVkUGljdHVyZXMgPSBbLi4uc3RvcmFnZUZhdlBpY3NdLmZpbHRlcihkb2cgPT4gZG9nLnBpY3R1cmUgIT09IGl0ZW0ucGljdHVyZSk7XG4gICAgICAgIHVwZGF0ZWRTdG9yYWdlRmF2UGljcyA9IFsuLi5maWx0ZXJlZFBpY3R1cmVzXVxuICAgICAgfVxuICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJmYXZQaWNcIik7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImZhdlBpY1wiLCBKU09OLnN0cmluZ2lmeSh1cGRhdGVkU3RvcmFnZUZhdlBpY3MpKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgc2V0RmF2b3VyaXRlSW1hZ2UgPSAocGljdHVyZTogc3RyaW5nKSA9PiB7XG4gICAgaWYgKHN1YkJyZWVkcykge1xuICAgICAgY29uc3QgbmV3U3ViQnJlZWRzID0gWy4uLnN1YkJyZWVkc107XG4gICAgICBjb25zdCBnZXRTdWJCcmVlZFBpY3R1cmUgPSBuZXdTdWJCcmVlZHMuZmluZCgoc3ViQnJlZWROYW1lKSA9PiBzdWJCcmVlZE5hbWUucGljdHVyZSA9PT0gcGljdHVyZSk7XG4gICAgICBjb25zb2xlLmxvZyhuZXdTdWJCcmVlZHMpO1xuICAgICAgaWYgKGdldFN1YkJyZWVkUGljdHVyZSkge1xuICAgICAgICBnZXRTdWJCcmVlZFBpY3R1cmUubGlrZWQgPSAhZ2V0U3ViQnJlZWRQaWN0dXJlLmxpa2VkO1xuICAgICAgfVxuICAgICAgc2V0U3ViQnJlZWRzKG5ld1N1YkJyZWVkcyk7XG4gICAgICB1cGRhdGVMb2NhbFN0b3JhZ2UoZ2V0U3ViQnJlZWRQaWN0dXJlKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZ2V0U3ViQnJlZWROYW1lID0gKHBpY3R1cmU6IHN0cmluZykgPT4ge1xuICAgIHJldHVybiBgJHtwaWN0dXJlLnNwbGl0KFwiL1wiKVs0XX1gO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIHtzdWJCcmVlZHMubWFwKChzdWJCcmVlZE5hbWU6IERvZykgPT4gKFxuICAgICAgICA8ZGl2IGtleT17c3ViQnJlZWROYW1lLmlkfT5cbiAgICAgICAgICA8RG9nQ2FyZD5cbiAgICAgICAgICAgIDxEb2dJbWFnZSBzcmM9e3N1YkJyZWVkTmFtZS5waWN0dXJlfSAvPlxuICAgICAgICAgICAgPERvZ05hbWUgdGhlbWU9e3RoZW1lfT5cbiAgICAgICAgICAgICAge2dldFN1YkJyZWVkTmFtZShzdWJCcmVlZE5hbWUucGljdHVyZSl9XG4gICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gc2V0RmF2b3VyaXRlSW1hZ2Uoc3ViQnJlZWROYW1lLnBpY3R1cmUpfT57c3ViQnJlZWROYW1lLmxpa2VkID8gPFJlZEhlYXJ0IC8+IDogPEdyZXlIZWFydCAvPn08L0J1dHRvbj5cbiAgICAgICAgICAgIDwvRG9nTmFtZT5cbiAgICAgICAgICA8L0RvZ0NhcmQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSl9XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCJodHRwczovL2RvZy5jZW8vYXBpL2JyZWVkcy9saXN0L2FsbFwiKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgY29uc3QgcGF0aHMgPSBPYmplY3Qua2V5cyhkYXRhLm1lc3NhZ2UpLm1hcCgoZG9ncykgPT4gKHtcbiAgICBwYXJhbXM6IHsgZG9nTmFtZTogZG9ncyB9LFxuICB9KSk7XG5cbiAgcmV0dXJuIHtcbiAgICBwYXRocyxcbiAgICBmYWxsYmFjazogZmFsc2UsXG4gIH07XG59XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wczogR2V0U3RhdGljUHJvcHMgPSBhc3luYyAoeyBwYXJhbXMgfSkgPT4ge1xuICBjb25zdCB7IGRvZ05hbWUgfTogYW55ID0gcGFyYW1zO1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9kb2cuY2VvL2FwaS9icmVlZC8ke2RvZ05hbWV9L2ltYWdlc2ApO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICBjb25zdCBkb2dzID0gZGF0YS5tZXNzYWdlLm1hcCgoaXRlbXM6IERvZykgPT4ge1xuICAgIHJldHVybiB7IHBpY3R1cmU6IGl0ZW1zLCBsaWtlZDogZmFsc2UsIGlkOiB2NCgpIH07XG4gIH0pO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHsgZG9ncywgZG9nTmFtZSB9LFxuICB9O1xufTtcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlJlZEhlYXJ0IiwiR3JleUhlYXJ0IiwiTGF5b3V0IiwiQnV0dG9uIiwiRG9nQ2FyZCIsIkRvZ0ltYWdlIiwiRG9nTmFtZSIsInRoZW1lIiwiRG9nUGFnZSIsImRvZ3MiLCJzdWJCcmVlZHMiLCJzZXRTdWJCcmVlZHMiLCJsZW5ndGgiLCJzdG9yYWdlRG9ncyIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJuZXdEb2dzIiwiZm9yRWFjaCIsImRvZyIsIm5ld0RvZyIsImZpbmQiLCJkIiwicGljdHVyZSIsImxpa2VkIiwidXBkYXRlTG9jYWxTdG9yYWdlIiwiaXRlbSIsInN0b3JhZ2VGYXZQaWNzIiwidXBkYXRlZFN0b3JhZ2VGYXZQaWNzIiwiZmF2RG9ncyIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJmaWx0ZXJlZFBpY3R1cmVzIiwiZmlsdGVyIiwicmVtb3ZlSXRlbSIsInNldEZhdm91cml0ZUltYWdlIiwibmV3U3ViQnJlZWRzIiwiZ2V0U3ViQnJlZWRQaWN0dXJlIiwic3ViQnJlZWROYW1lIiwiY29uc29sZSIsImxvZyIsImdldFN1YkJyZWVkTmFtZSIsInNwbGl0IiwibWFwIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/subreeds/[dogName].tsx\n");

/***/ })

});