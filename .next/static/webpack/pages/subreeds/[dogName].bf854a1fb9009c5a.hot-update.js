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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ DogPage; }\n/* harmony export */ });\n/* harmony import */ var _Users_andreiilisei_Coding_Practice_practiceProjShape_ShapeDogTest_ShapeDogTest_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Layout */ \"./src/components/Layout.tsx\");\n/* harmony import */ var _helpers_redHeart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/redHeart */ \"./src/helpers/redHeart.tsx\");\n/* harmony import */ var _styles_DogCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/DogCard */ \"./src/styles/DogCard.ts\");\n/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/theme */ \"./src/styles/theme.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/andreiilisei/Coding Practice/practiceProjShape/ShapeDogTest/ShapeDogTest/src/pages/subreeds/[dogName].tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar __N_SSG = true;\nfunction DogPage(_ref) {\n  _s();\n\n  var _this = this;\n\n  var dogs = _ref.dogs;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),\n      subBreeds = _useState[0],\n      setSubBreeds = _useState[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    if (dogs) {\n      setSubBreeds(dogs);\n    }\n  }, []);\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    if (subBreeds.length > 0) {\n      var storageDogs = JSON.parse(localStorage.getItem(\"favPic\") || \"null\");\n      console.log(storageDogs);\n\n      if (storageDogs) {\n        var newDogs = (0,_Users_andreiilisei_Coding_Practice_practiceProjShape_ShapeDogTest_ShapeDogTest_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(subBreeds);\n\n        storageDogs.forEach(function (dog) {\n          var newDog = newDogs.find(function (d) {\n            return d.picture === dog.picture;\n          });\n\n          if (newDog) {\n            newDog.liked = true;\n          }\n        });\n        setSubBreeds(newDogs);\n      }\n    }\n  }, [subBreeds]);\n\n  var updateLocalStorage = function updateLocalStorage(item) {\n    var storageFavPics = JSON.parse(localStorage.getItem(\"favPic\") || \"null\");\n    var updatedStorageFavPics;\n\n    if (storageFavPics === null) {\n      var favDogs = [item];\n      localStorage.setItem(\"favPic\", JSON.stringify(favDogs));\n    } else {\n      if (item.liked) {\n        var shouldAddDog = storageFavPics.findIndex(function (dog) {\n          return dog.picture === item.picture;\n        }) === -1;\n        if (shouldAddDog) updatedStorageFavPics = [].concat((0,_Users_andreiilisei_Coding_Practice_practiceProjShape_ShapeDogTest_ShapeDogTest_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(storageFavPics), [item]);\n      } else {\n        var filteredPictures = storageFavPics.filter(function (dog) {\n          return dog.picture !== item.picture;\n        });\n        updatedStorageFavPics = (0,_Users_andreiilisei_Coding_Practice_practiceProjShape_ShapeDogTest_ShapeDogTest_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(filteredPictures);\n      }\n\n      if (updatedStorageFavPics) {\n        localStorage.setItem(\"favPic\", JSON.stringify(updatedStorageFavPics));\n      }\n    }\n  };\n\n  var setFavouriteImage = function setFavouriteImage(picture) {\n    if (subBreeds) {\n      var newSubBreeds = (0,_Users_andreiilisei_Coding_Practice_practiceProjShape_ShapeDogTest_ShapeDogTest_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(subBreeds);\n\n      var getSubBreedPicture = newSubBreeds.find(function (subBreedName) {\n        return subBreedName.picture === picture;\n      });\n      console.log(newSubBreeds);\n\n      if (getSubBreedPicture) {\n        getSubBreedPicture.liked = !getSubBreedPicture.liked;\n        updateLocalStorage(getSubBreedPicture);\n      }\n\n      setSubBreeds(newSubBreeds);\n    }\n  };\n\n  var getSubBreedName = function getSubBreedName(picture) {\n    return \"\".concat(picture.split(\"/\")[4]);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    children: subBreeds.map(function (subBreedName) {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_styles_DogCard__WEBPACK_IMPORTED_MODULE_4__.DogCard, {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_styles_DogCard__WEBPACK_IMPORTED_MODULE_4__.DogImage, {\n            src: subBreedName.picture\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 89,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_styles_DogCard__WEBPACK_IMPORTED_MODULE_4__.DogName, {\n            theme: _styles_theme__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n            children: [getSubBreedName(subBreedName.picture), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_styles_DogCard__WEBPACK_IMPORTED_MODULE_4__.Button, {\n              onClick: function onClick() {\n                return setFavouriteImage(subBreedName.picture);\n              },\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_helpers_redHeart__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                isLiked: subBreedName.liked\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 93,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 92,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 90,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 88,\n          columnNumber: 11\n        }, _this)\n      }, subBreedName.id, false, {\n        fileName: _jsxFileName,\n        lineNumber: 87,\n        columnNumber: 9\n      }, _this);\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 85,\n    columnNumber: 5\n  }, this);\n}\n\n_s(DogPage, \"jLo8HlfobKpqtmI+OydAUXg0S6k=\");\n\n_c = DogPage;\n\nvar _c;\n\n$RefreshReg$(_c, \"DogPage\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvc3VicmVlZHMvW2RvZ05hbWVdLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdlLFNBQVNTLE9BQVQsT0FBbUM7QUFBQTs7QUFBQTs7QUFBQSxNQUFoQkMsSUFBZ0IsUUFBaEJBLElBQWdCOztBQUNoRCxrQkFBa0NULCtDQUFRLENBQVEsRUFBUixDQUExQztBQUFBLE1BQU9VLFNBQVA7QUFBQSxNQUFrQkMsWUFBbEI7O0FBRUFaLEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUlVLElBQUosRUFBVTtBQUNSRSxNQUFBQSxZQUFZLENBQUNGLElBQUQsQ0FBWjtBQUNEO0FBQ0YsR0FKUSxFQUlOLEVBSk0sQ0FBVDtBQU1BVixFQUFBQSxnREFBUyxDQUFDLFlBQU07QUFDZCxRQUFJVyxTQUFTLENBQUNFLE1BQVYsR0FBbUIsQ0FBdkIsRUFBMEI7QUFDeEIsVUFBTUMsV0FBVyxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0MsWUFBWSxDQUFDQyxPQUFiLENBQXFCLFFBQXJCLEtBQWtDLE1BQTdDLENBQXBCO0FBQ0FDLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZTixXQUFaOztBQUNBLFVBQUlBLFdBQUosRUFBaUI7QUFDZixZQUFNTyxPQUFPLEdBQUcsd01BQUlWLFNBQVAsQ0FBYjs7QUFFQUcsUUFBQUEsV0FBVyxDQUFDUSxPQUFaLENBQW9CLFVBQUNDLEdBQUQsRUFBYztBQUNoQyxjQUFNQyxNQUFNLEdBQUdILE9BQU8sQ0FBQ0ksSUFBUixDQUFhLFVBQUNDLENBQUQ7QUFBQSxtQkFBT0EsQ0FBQyxDQUFDQyxPQUFGLEtBQWNKLEdBQUcsQ0FBQ0ksT0FBekI7QUFBQSxXQUFiLENBQWY7O0FBRUEsY0FBSUgsTUFBSixFQUFZO0FBQ1ZBLFlBQUFBLE1BQU0sQ0FBQ0ksS0FBUCxHQUFlLElBQWY7QUFDRDtBQUNGLFNBTkQ7QUFPQWhCLFFBQUFBLFlBQVksQ0FB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bEIsZUFFRSw4REFBQyxtREFBRDtBQUFRLHFCQUFPLEVBQUU7QUFBQSx1QkFBTWEsaUJBQWlCLENBQUNHLFlBQVksQ0FBQ2hCLE9BQWQsQ0FBdkI7QUFBQSxlQUFqQjtBQUFBLHFDQUNFLDhEQUFDLHlEQUFEO0FBQU8sdUJBQU8sRUFBRWdCLFlBQVksQ0FBQ2Y7QUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLFNBQVVlLFlBQVksQ0FBQ0ksRUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURhO0FBQUEsS0FBZDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWlCRDs7R0E1RnVCdEM7O0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9zdWJyZWVkcy9bZG9nTmFtZV0udHN4Pzc5YzIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdjQgfSBmcm9tIFwidXVpZFwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcbmltcG9ydCBIZWFydCBmcm9tIFwiLi4vLi4vaGVscGVycy9yZWRIZWFydFwiO1xuaW1wb3J0IHsgQnV0dG9uLCBEb2dDYXJkLCBEb2dJbWFnZSwgRG9nTmFtZSB9IGZyb20gXCIuLi8uLi9zdHlsZXMvRG9nQ2FyZFwiO1xuaW1wb3J0IHRoZW1lIGZyb20gXCIuLi8uLi9zdHlsZXMvdGhlbWVcIjtcbmltcG9ydCB7IERvZywgRG9nTmV3LCBTbHVnUGFyYW1zIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERvZ1BhZ2UoeyBkb2dzIH06IERvZ05ldykge1xuICBjb25zdCBbc3ViQnJlZWRzLCBzZXRTdWJCcmVlZHNdID0gdXNlU3RhdGU8RG9nW10+KFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChkb2dzKSB7XG4gICAgICBzZXRTdWJCcmVlZHMoZG9ncyk7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoc3ViQnJlZWRzLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IHN0b3JhZ2VEb2dzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImZhdlBpY1wiKSB8fCBcIm51bGxcIik7XG4gICAgICBjb25zb2xlLmxvZyhzdG9yYWdlRG9ncyk7XG4gICAgICBpZiAoc3RvcmFnZURvZ3MpIHtcbiAgICAgICAgY29uc3QgbmV3RG9ncyA9IFsuLi5zdWJCcmVlZHNdO1xuXG4gICAgICAgIHN0b3JhZ2VEb2dzLmZvckVhY2goKGRvZzogRG9nKSA9PiB7XG4gICAgICAgICAgY29uc3QgbmV3RG9nID0gbmV3RG9ncy5maW5kKChkKSA9PiBkLnBpY3R1cmUgPT09IGRvZy5waWN0dXJlKTtcblxuICAgICAgICAgIGlmIChuZXdEb2cpIHtcbiAgICAgICAgICAgIG5ld0RvZy5saWtlZCA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgc2V0U3ViQnJlZWRzKG5ld0RvZ3MpO1xuICAgICAgfVxuICAgIH1cbiAgfSwgW3N1YkJyZWVkc10pO1xuXG4gIGNvbnN0IHVwZGF0ZUxvY2FsU3RvcmFnZSA9IChpdGVtOiBEb2cpID0+IHtcbiAgICBjb25zdCBzdG9yYWdlRmF2UGljczogRG9nW10gPSBKU09OLnBhcnNlKFxuICAgICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJmYXZQaWNcIikgfHwgXCJudWxsXCJcbiAgICApO1xuICAgIGxldCB1cGRhdGVkU3RvcmFnZUZhdlBpY3M7XG5cbiAgICBpZiAoc3RvcmFnZUZhdlBpY3MgPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGZhdkRvZ3MgPSBbaXRlbV07XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImZhdlBpY1wiLCBKU09OLnN0cmluZ2lmeShmYXZEb2dzKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChpdGVtLmxpa2VkKSB7XG4gICAgICAgIGNvbnN0IHNob3VsZEFkZERvZyA9XG4gICAgICAgICAgc3RvcmFnZUZhdlBpY3MuZmluZEluZGV4KChkb2cpID0+IGRvZy5waWN0dXJlID09PSBpdGVtLnBpY3R1cmUpID09PVxuICAgICAgICAgIC0xO1xuICAgICAgICBpZiAoc2hvdWxkQWRkRG9nKSB1cGRhdGVkU3RvcmFnZUZhdlBpY3MgPSBbLi4uc3RvcmFnZUZhdlBpY3MsIGl0ZW1dO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgZmlsdGVyZWRQaWN0dXJlcyA9IHN0b3JhZ2VGYXZQaWNzLmZpbHRlcihcbiAgICAgICAgICAoZG9nKSA9PiBkb2cucGljdHVyZSAhPT0gaXRlbS5waWN0dXJlXG4gICAgICAgICk7XG4gICAgICAgIHVwZGF0ZWRTdG9yYWdlRmF2UGljcyA9IFsuLi5maWx0ZXJlZFBpY3R1cmVzXTtcbiAgICAgIH1cblxuICAgICAgaWYgKHVwZGF0ZWRTdG9yYWdlRmF2UGljcykge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImZhdlBpY1wiLCBKU09OLnN0cmluZ2lmeSh1cGRhdGVkU3RvcmFnZUZhdlBpY3MpKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgc2V0RmF2b3VyaXRlSW1hZ2UgPSAocGljdHVyZTogc3RyaW5nKSA9PiB7XG4gICAgaWYgKHN1YkJyZWVkcykge1xuICAgICAgY29uc3QgbmV3U3ViQnJlZWRzID0gWy4uLnN1YkJyZWVkc107XG4gICAgICBjb25zdCBnZXRTdWJCcmVlZFBpY3R1cmUgPSBuZXdTdWJCcmVlZHMuZmluZChcbiAgICAgICAgKHN1YkJyZWVkTmFtZSkgPT4gc3ViQnJlZWROYW1lLnBpY3R1cmUgPT09IHBpY3R1cmVcbiAgICAgICk7XG4gICAgICBjb25zb2xlLmxvZyhuZXdTdWJCcmVlZHMpO1xuICAgICAgaWYgKGdldFN1YkJyZWVkUGljdHVyZSkge1xuICAgICAgICBnZXRTdWJCcmVlZFBpY3R1cmUubGlrZWQgPSAhZ2V0U3ViQnJlZWRQaWN0dXJlLmxpa2VkO1xuICAgICAgICB1cGRhdGVMb2NhbFN0b3JhZ2UoZ2V0U3ViQnJlZWRQaWN0dXJlKTtcbiAgICAgIH1cbiAgICAgIHNldFN1YkJyZWVkcyhuZXdTdWJCcmVlZHMpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBnZXRTdWJCcmVlZE5hbWUgPSAocGljdHVyZTogc3RyaW5nKSA9PiB7XG4gICAgcmV0dXJuIGAke3BpY3R1cmUuc3BsaXQoXCIvXCIpWzRdfWA7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAge3N1YkJyZWVkcy5tYXAoKHN1YkJyZWVkTmFtZTogRG9nKSA9PiAoXG4gICAgICAgIDxkaXYga2V5PXtzdWJCcmVlZE5hbWUuaWR9PlxuICAgICAgICAgIDxEb2dDYXJkPlxuICAgICAgICAgICAgPERvZ0ltYWdlIHNyYz17c3ViQnJlZWROYW1lLnBpY3R1cmV9IC8+XG4gICAgICAgICAgICA8RG9nTmFtZSB0aGVtZT17dGhlbWV9PlxuICAgICAgICAgICAgICB7Z2V0U3ViQnJlZWROYW1lKHN1YkJyZWVkTmFtZS5waWN0dXJlKX1cbiAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRGYXZvdXJpdGVJbWFnZShzdWJCcmVlZE5hbWUucGljdHVyZSl9PlxuICAgICAgICAgICAgICAgIDxIZWFydCBpc0xpa2VkPXtzdWJCcmVlZE5hbWUubGlrZWR9IC8+XG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9Eb2dOYW1lPlxuICAgICAgICAgIDwvRG9nQ2FyZD5cbiAgICAgICAgPC9kaXY+XG4gICAgICApKX1cbiAgICA8L0xheW91dD5cbiAgKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vZG9nLmNlby9hcGkvYnJlZWRzL2xpc3QvYWxsXCIpO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICBjb25zdCBwYXRocyA9IE9iamVjdC5rZXlzKGRhdGEubWVzc2FnZSkubWFwKChkb2dzKSA9PiAoe1xuICAgIHBhcmFtczogeyBkb2dOYW1lOiBkb2dzIH0sXG4gIH0pKTtcblxuICByZXR1cm4ge1xuICAgIHBhdGhzLFxuICAgIGZhbGxiYWNrOiBmYWxzZSxcbiAgfTtcbn1cblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKHsgcGFyYW1zIH06IFNsdWdQYXJhbXMpID0+IHtcbiAgY29uc3QgeyBkb2dOYW1lIH0gPSBwYXJhbXM7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwczovL2RvZy5jZW8vYXBpL2JyZWVkLyR7ZG9nTmFtZX0vaW1hZ2VzYCk7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuXG4gIGNvbnN0IGRvZ3M6IERvZyA9IGRhdGEubWVzc2FnZS5tYXAoKGl0ZW1zOiBEb2cpID0+IHtcbiAgICByZXR1cm4geyBwaWN0dXJlOiBpdGVtcywgbGlrZWQ6IGZhbHNlLCBpZDogdjQoKSB9O1xuICB9KTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7IGRvZ3MsIGRvZ05hbWUgfSxcbiAgfTtcbn07XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJMYXlvdXQiLCJIZWFydCIsIkJ1dHRvbiIsIkRvZ0NhcmQiLCJEb2dJbWFnZSIsIkRvZ05hbWUiLCJ0aGVtZSIsIkRvZ1BhZ2UiLCJkb2dzIiwic3ViQnJlZWRzIiwic2V0U3ViQnJlZWRzIiwibGVuZ3RoIiwic3RvcmFnZURvZ3MiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiY29uc29sZSIsImxvZyIsIm5ld0RvZ3MiLCJmb3JFYWNoIiwiZG9nIiwibmV3RG9nIiwiZmluZCIsImQiLCJwaWN0dXJlIiwibGlrZWQiLCJ1cGRhdGVMb2NhbFN0b3JhZ2UiLCJpdGVtIiwic3RvcmFnZUZhdlBpY3MiLCJ1cGRhdGVkU3RvcmFnZUZhdlBpY3MiLCJmYXZEb2dzIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsInNob3VsZEFkZERvZyIsImZpbmRJbmRleCIsImZpbHRlcmVkUGljdHVyZXMiLCJmaWx0ZXIiLCJzZXRGYXZvdXJpdGVJbWFnZSIsIm5ld1N1YkJyZWVkcyIsImdldFN1YkJyZWVkUGljdHVyZSIsInN1YkJyZWVkTmFtZSIsImdldFN1YkJyZWVkTmFtZSIsInNwbGl0IiwibWFwIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/subreeds/[dogName].tsx\n");

/***/ })

});