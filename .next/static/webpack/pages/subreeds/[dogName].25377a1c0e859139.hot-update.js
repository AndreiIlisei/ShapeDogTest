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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ DogPage; }\n/* harmony export */ });\n/* harmony import */ var _Users_andreiilisei_Coding_Practice_practiceProjShape_ShapeDogTest_ShapeDogTest_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Layout */ \"./src/components/Layout.tsx\");\n/* harmony import */ var _helpers_redHeart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/redHeart */ \"./src/helpers/redHeart.tsx\");\n/* harmony import */ var _styles_DogCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/DogCard */ \"./src/styles/DogCard.ts\");\n/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/theme */ \"./src/styles/theme.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/andreiilisei/Coding Practice/practiceProjShape/ShapeDogTest/ShapeDogTest/src/pages/subreeds/[dogName].tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar __N_SSG = true;\nfunction DogPage(_ref) {\n  _s();\n\n  var _this = this;\n\n  var dogs = _ref.dogs;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),\n      subBreeds = _useState[0],\n      setSubBreeds = _useState[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    if (dogs) {\n      setSubBreeds(dogs);\n    }\n  }, [subBreeds]);\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    if (subBreeds.length > 0) {\n      var storageDogs = JSON.parse(localStorage.getItem(\"favPic\") || \"null\");\n\n      if (storageDogs) {\n        var newDogs = (0,_Users_andreiilisei_Coding_Practice_practiceProjShape_ShapeDogTest_ShapeDogTest_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(subBreeds);\n\n        storageDogs.forEach(function (dog) {\n          var newDog = newDogs.find(function (d) {\n            return d.picture === dog.picture;\n          });\n\n          if (newDog) {\n            newDog.liked = true;\n          }\n        });\n        setSubBreeds(newDogs);\n      }\n    }\n  }, []);\n\n  var updateLocalStorage = function updateLocalStorage(item) {\n    var storageFavPics = JSON.parse(localStorage.getItem(\"favPic\") || \"null\");\n    var updatedStorageFavPics;\n\n    if (storageFavPics === null) {\n      var favDogs = [item];\n      localStorage.setItem(\"favPic\", JSON.stringify(favDogs));\n    } else {\n      if (item.liked) {\n        var shouldAddDog = storageFavPics.findIndex(function (dog) {\n          return dog.picture === item.picture;\n        }) === -1;\n        if (shouldAddDog) updatedStorageFavPics = [].concat((0,_Users_andreiilisei_Coding_Practice_practiceProjShape_ShapeDogTest_ShapeDogTest_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(storageFavPics), [item]);\n      } else {\n        var filteredPictures = storageFavPics.filter(function (dog) {\n          return dog.picture !== item.picture;\n        });\n        updatedStorageFavPics = (0,_Users_andreiilisei_Coding_Practice_practiceProjShape_ShapeDogTest_ShapeDogTest_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(filteredPictures);\n      }\n\n      if (updatedStorageFavPics) {\n        localStorage.setItem(\"favPic\", JSON.stringify(updatedStorageFavPics));\n      }\n    }\n  };\n\n  var setFavouriteImage = function setFavouriteImage(picture) {\n    if (subBreeds) {\n      var newSubBreeds = (0,_Users_andreiilisei_Coding_Practice_practiceProjShape_ShapeDogTest_ShapeDogTest_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(subBreeds);\n\n      var getSubBreedPicture = newSubBreeds.find(function (subBreedName) {\n        return subBreedName.picture === picture;\n      });\n      console.log(newSubBreeds);\n\n      if (getSubBreedPicture) {\n        getSubBreedPicture.liked = !getSubBreedPicture.liked;\n        updateLocalStorage(getSubBreedPicture);\n      }\n\n      setSubBreeds(newSubBreeds);\n    }\n  };\n\n  var getSubBreedName = function getSubBreedName(picture) {\n    return \"\".concat(picture.split(\"/\")[4]);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    children: subBreeds.map(function (subBreedName) {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_styles_DogCard__WEBPACK_IMPORTED_MODULE_4__.DogCard, {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_styles_DogCard__WEBPACK_IMPORTED_MODULE_4__.DogImage, {\n            src: subBreedName.picture\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 89,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_styles_DogCard__WEBPACK_IMPORTED_MODULE_4__.DogName, {\n            theme: _styles_theme__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n            children: [getSubBreedName(subBreedName.picture), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_styles_DogCard__WEBPACK_IMPORTED_MODULE_4__.Button, {\n              onClick: function onClick() {\n                return setFavouriteImage(subBreedName.picture);\n              },\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_helpers_redHeart__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                isLiked: subBreedName.liked\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 93,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 92,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 90,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 88,\n          columnNumber: 11\n        }, _this)\n      }, subBreedName.id, false, {\n        fileName: _jsxFileName,\n        lineNumber: 87,\n        columnNumber: 9\n      }, _this);\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 85,\n    columnNumber: 5\n  }, this);\n}\n\n_s(DogPage, \"jLo8HlfobKpqtmI+OydAUXg0S6k=\");\n\n_c = DogPage;\n\nvar _c;\n\n$RefreshReg$(_c, \"DogPage\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TWEsaUJBQWlCLENBQUNHLFlBQVksQ0FBQ2hCLE9BQWQsQ0FBdkI7QUFBQSxlQUFqQjtBQUFBLHFDQUNFLDhEQUFDLHlEQUFEO0FBQU8sdUJBQU8sRUFBRWdCLFlBQVksQ0FBQ2Y7QUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLFNBQVVlLFlBQVksQ0FBQ00sRUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURhO0FBQUEsS0FBZDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWlCRDs7R0E1RnVCdEM7O0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9zdWJyZWVkcy9bZG9nTmFtZV0udHN4Pzc5YzIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdjQgfSBmcm9tIFwidXVpZFwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcbmltcG9ydCBIZWFydCBmcm9tIFwiLi4vLi4vaGVscGVycy9yZWRIZWFydFwiO1xuaW1wb3J0IHsgQnV0dG9uLCBEb2dDYXJkLCBEb2dJbWFnZSwgRG9nTmFtZSB9IGZyb20gXCIuLi8uLi9zdHlsZXMvRG9nQ2FyZFwiO1xuaW1wb3J0IHRoZW1lIGZyb20gXCIuLi8uLi9zdHlsZXMvdGhlbWVcIjtcbmltcG9ydCB7IERvZywgRG9nTmV3LCBTbHVnUGFyYW1zIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERvZ1BhZ2UoeyBkb2dzIH06IERvZ05ldykge1xuICBjb25zdCBbc3ViQnJlZWRzLCBzZXRTdWJCcmVlZHNdID0gdXNlU3RhdGU8RG9nW10+KFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChkb2dzKSB7XG4gICAgICBzZXRTdWJCcmVlZHMoZG9ncyk7XG4gICAgfVxuICB9LCBbc3ViQnJlZWRzXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoc3ViQnJlZWRzLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IHN0b3JhZ2VEb2dzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImZhdlBpY1wiKSB8fCBcIm51bGxcIik7XG5cbiAgICAgIGlmIChzdG9yYWdlRG9ncykge1xuICAgICAgICBjb25zdCBuZXdEb2dzID0gWy4uLnN1YkJyZWVkc107XG5cbiAgICAgICAgc3RvcmFnZURvZ3MuZm9yRWFjaCgoZG9nOiBEb2cpID0+IHtcbiAgICAgICAgICBjb25zdCBuZXdEb2cgPSBuZXdEb2dzLmZpbmQoKGQpID0+IGQucGljdHVyZSA9PT0gZG9nLnBpY3R1cmUpO1xuXG4gICAgICAgICAgaWYgKG5ld0RvZykge1xuICAgICAgICAgICAgbmV3RG9nLmxpa2VkID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBzZXRTdWJCcmVlZHMobmV3RG9ncyk7XG4gICAgICB9XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgY29uc3QgdXBkYXRlTG9jYWxTdG9yYWdlID0gKGl0ZW06IERvZykgPT4ge1xuICAgIGNvbnN0IHN0b3JhZ2VGYXZQaWNzOiBEb2dbXSA9IEpTT04ucGFyc2UoXG4gICAgICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImZhdlBpY1wiKSB8fCBcIm51bGxcIlxuICAgICk7XG4gICAgbGV0IHVwZGF0ZWRTdG9yYWdlRmF2UGljcztcblxuICAgIGlmIChzdG9yYWdlRmF2UGljcyA9PT0gbnVsbCkge1xuICAgICAgY29uc3QgZmF2RG9ncyA9IFtpdGVtXTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZmF2UGljXCIsIEpTT04uc3RyaW5naWZ5KGZhdkRvZ3MpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGl0ZW0ubGlrZWQpIHtcbiAgICAgICAgY29uc3Qgc2hvdWxkQWRkRG9nID1cbiAgICAgICAgICBzdG9yYWdlRmF2UGljcy5maW5kSW5kZXgoKGRvZykgPT4gZG9nLnBpY3R1cmUgPT09IGl0ZW0ucGljdHVyZSkgPT09XG4gICAgICAgICAgLTE7XG4gICAgICAgIGlmIChzaG91bGRBZGREb2cpIHVwZGF0ZWRTdG9yYWdlRmF2UGljcyA9IFsuLi5zdG9yYWdlRmF2UGljcywgaXRlbV07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBmaWx0ZXJlZFBpY3R1cmVzID0gc3RvcmFnZUZhdlBpY3MuZmlsdGVyKFxuICAgICAgICAgIChkb2cpID0+IGRvZy5waWN0dXJlICE9PSBpdGVtLnBpY3R1cmVcbiAgICAgICAgKTtcbiAgICAgICAgdXBkYXRlZFN0b3JhZ2VGYXZQaWNzID0gWy4uLmZpbHRlcmVkUGljdHVyZXNdO1xuICAgICAgfVxuXG4gICAgICBpZiAodXBkYXRlZFN0b3JhZ2VGYXZQaWNzKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZmF2UGljXCIsIEpTT04uc3RyaW5naWZ5KHVwZGF0ZWRTdG9yYWdlRmF2UGljcykpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zdCBzZXRGYXZvdXJpdGVJbWFnZSA9IChwaWN0dXJlOiBzdHJpbmcpID0+IHtcbiAgICBpZiAoc3ViQnJlZWRzKSB7XG4gICAgICBjb25zdCBuZXdTdWJCcmVlZHMgPSBbLi4uc3ViQnJlZWRzXTtcbiAgICAgIGNvbnN0IGdldFN1YkJyZWVkUGljdHVyZSA9IG5ld1N1YkJyZWVkcy5maW5kKFxuICAgICAgICAoc3ViQnJlZWROYW1lKSA9PiBzdWJCcmVlZE5hbWUucGljdHVyZSA9PT0gcGljdHVyZVxuICAgICAgKTtcbiAgICAgIGNvbnNvbGUubG9nKG5ld1N1YkJyZWVkcyk7XG4gICAgICBpZiAoZ2V0U3ViQnJlZWRQaWN0dXJlKSB7XG4gICAgICAgIGdldFN1YkJyZWVkUGljdHVyZS5saWtlZCA9ICFnZXRTdWJCcmVlZFBpY3R1cmUubGlrZWQ7XG4gICAgICAgIHVwZGF0ZUxvY2FsU3RvcmFnZShnZXRTdWJCcmVlZFBpY3R1cmUpO1xuICAgICAgfVxuICAgICAgc2V0U3ViQnJlZWRzKG5ld1N1YkJyZWVkcyk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGdldFN1YkJyZWVkTmFtZSA9IChwaWN0dXJlOiBzdHJpbmcpID0+IHtcbiAgICByZXR1cm4gYCR7cGljdHVyZS5zcGxpdChcIi9cIilbNF19YDtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICB7c3ViQnJlZWRzLm1hcCgoc3ViQnJlZWROYW1lOiBEb2cpID0+IChcbiAgICAgICAgPGRpdiBrZXk9e3N1YkJyZWVkTmFtZS5pZH0+XG4gICAgICAgICAgPERvZ0NhcmQ+XG4gICAgICAgICAgICA8RG9nSW1hZ2Ugc3JjPXtzdWJCcmVlZE5hbWUucGljdHVyZX0gLz5cbiAgICAgICAgICAgIDxEb2dOYW1lIHRoZW1lPXt0aGVtZX0+XG4gICAgICAgICAgICAgIHtnZXRTdWJCcmVlZE5hbWUoc3ViQnJlZWROYW1lLnBpY3R1cmUpfVxuICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldEZhdm91cml0ZUltYWdlKHN1YkJyZWVkTmFtZS5waWN0dXJlKX0+XG4gICAgICAgICAgICAgICAgPEhlYXJ0IGlzTGlrZWQ9e3N1YkJyZWVkTmFtZS5saWtlZH0gLz5cbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L0RvZ05hbWU+XG4gICAgICAgICAgPC9Eb2dDYXJkPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkpfVxuICAgIDwvTGF5b3V0PlxuICApO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9kb2cuY2VvL2FwaS9icmVlZHMvbGlzdC9hbGxcIik7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuXG4gIGNvbnN0IHBhdGhzID0gT2JqZWN0LmtleXMoZGF0YS5tZXNzYWdlKS5tYXAoKGRvZ3MpID0+ICh7XG4gICAgcGFyYW1zOiB7IGRvZ05hbWU6IGRvZ3MgfSxcbiAgfSkpO1xuXG4gIHJldHVybiB7XG4gICAgcGF0aHMsXG4gICAgZmFsbGJhY2s6IGZhbHNlLFxuICB9O1xufVxuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoeyBwYXJhbXMgfTogU2x1Z1BhcmFtcykgPT4ge1xuICBjb25zdCB7IGRvZ05hbWUgfSA9IHBhcmFtcztcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vZG9nLmNlby9hcGkvYnJlZWQvJHtkb2dOYW1lfS9pbWFnZXNgKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgY29uc3QgZG9nczogRG9nID0gZGF0YS5tZXNzYWdlLm1hcCgoaXRlbXM6IERvZykgPT4ge1xuICAgIHJldHVybiB7IHBpY3R1cmU6IGl0ZW1zLCBsaWtlZDogZmFsc2UsIGlkOiB2NCgpIH07XG4gIH0pO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHsgZG9ncywgZG9nTmFtZSB9LFxuICB9O1xufTtcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkxheW91dCIsIkhlYXJ0IiwiQnV0dG9uIiwiRG9nQ2FyZCIsIkRvZ0ltYWdlIiwiRG9nTmFtZSIsInRoZW1lIiwiRG9nUGFnZSIsImRvZ3MiLCJzdWJCcmVlZHMiLCJzZXRTdWJCcmVlZHMiLCJsZW5ndGgiLCJzdG9yYWdlRG9ncyIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJuZXdEb2dzIiwiZm9yRWFjaCIsImRvZyIsIm5ld0RvZyIsImZpbmQiLCJkIiwicGljdHVyZSIsImxpa2VkIiwidXBkYXRlTG9jYWxTdG9yYWdlIiwiaXRlbSIsInN0b3JhZ2VGYXZQaWNzIiwidXBkYXRlZFN0b3JhZ2VGYXZQaWNzIiwiZmF2RG9ncyIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJzaG91bGRBZGREb2ciLCJmaW5kSW5kZXgiLCJmaWx0ZXJlZFBpY3R1cmVzIiwiZmlsdGVyIiwic2V0RmF2b3VyaXRlSW1hZ2UiLCJuZXdTdWJCcmVlZHMiLCJnZXRTdWJCcmVlZFBpY3R1cmUiLCJzdWJCcmVlZE5hbWUiLCJjb25zb2xlIiwibG9nIiwiZ2V0U3ViQnJlZWROYW1lIiwic3BsaXQiLCJtYXAiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/subreeds/[dogName].tsx\n");

/***/ })

});