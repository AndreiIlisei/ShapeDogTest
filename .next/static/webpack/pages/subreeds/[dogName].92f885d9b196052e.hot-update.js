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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ DogPage; }\n/* harmony export */ });\n/* harmony import */ var _Users_andreiilisei_Coding_Practice_practiceProjShape_ShapeDogTest_ShapeDogTest_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Layout */ \"./src/components/Layout.tsx\");\n/* harmony import */ var _helpers_redHeart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/redHeart */ \"./src/helpers/redHeart.tsx\");\n/* harmony import */ var _styles_DogCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/DogCard */ \"./src/styles/DogCard.ts\");\n/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/theme */ \"./src/styles/theme.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/andreiilisei/Coding Practice/practiceProjShape/ShapeDogTest/ShapeDogTest/src/pages/subreeds/[dogName].tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar __N_SSG = true;\nfunction DogPage(dogs) {\n  _s();\n\n  var _this = this;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),\n      subBreeds = _useState[0],\n      setSubBreeds = _useState[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    if (dogs) {\n      setSubBreeds(dogs);\n    }\n  }, []);\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    if (subBreeds.length > 0) {\n      var storageDogs = JSON.parse(localStorage.getItem(\"favPic\") || \"null\");\n\n      if (storageDogs) {\n        var newDogs = (0,_Users_andreiilisei_Coding_Practice_practiceProjShape_ShapeDogTest_ShapeDogTest_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(subBreeds);\n\n        storageDogs.forEach(function (dog) {\n          var newDog = newDogs.find(function (d) {\n            return d.picture === dog.picture;\n          });\n\n          if (newDog) {\n            newDog.liked = true;\n          }\n        });\n        setSubBreeds(newDogs);\n      }\n    }\n  }, [subBreeds]);\n\n  var updateLocalStorage = function updateLocalStorage(item) {\n    var storageFavPics = JSON.parse(localStorage.getItem(\"favPic\") || \"null\");\n    var updatedStorageFavPics;\n\n    if (storageFavPics === null) {\n      var favDogs = [item];\n      localStorage.setItem(\"favPic\", JSON.stringify(favDogs));\n    } else {\n      if (item.liked) {\n        var shouldAddDog = storageFavPics.findIndex(function (dog) {\n          return dog.picture === item.picture;\n        }) === -1;\n        if (shouldAddDog) updatedStorageFavPics = [].concat((0,_Users_andreiilisei_Coding_Practice_practiceProjShape_ShapeDogTest_ShapeDogTest_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(storageFavPics), [item]);\n      } else {\n        var filteredPictures = storageFavPics.filter(function (dog) {\n          return dog.picture !== item.picture;\n        });\n        updatedStorageFavPics = (0,_Users_andreiilisei_Coding_Practice_practiceProjShape_ShapeDogTest_ShapeDogTest_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(filteredPictures);\n      }\n\n      if (updatedStorageFavPics) {\n        localStorage.setItem(\"favPic\", JSON.stringify(updatedStorageFavPics));\n      }\n    }\n  };\n\n  var setFavouriteImage = function setFavouriteImage(picture) {\n    if (subBreeds) {\n      var newSubBreeds = (0,_Users_andreiilisei_Coding_Practice_practiceProjShape_ShapeDogTest_ShapeDogTest_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(subBreeds);\n\n      var getSubBreedPicture = newSubBreeds.find(function (subBreedName) {\n        return subBreedName.picture === picture;\n      });\n      console.log(newSubBreeds);\n\n      if (getSubBreedPicture) {\n        getSubBreedPicture.liked = !getSubBreedPicture.liked;\n        updateLocalStorage(getSubBreedPicture);\n      }\n\n      setSubBreeds(newSubBreeds);\n    }\n  };\n\n  var getSubBreedName = function getSubBreedName(picture) {\n    return \"\".concat(picture.split(\"/\")[4]);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    children: subBreeds.map(function (subBreedName) {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_styles_DogCard__WEBPACK_IMPORTED_MODULE_4__.DogCard, {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_styles_DogCard__WEBPACK_IMPORTED_MODULE_4__.DogImage, {\n            src: subBreedName.picture\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 81,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_styles_DogCard__WEBPACK_IMPORTED_MODULE_4__.DogName, {\n            theme: _styles_theme__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n            children: [getSubBreedName(subBreedName.picture), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_styles_DogCard__WEBPACK_IMPORTED_MODULE_4__.Button, {\n              onClick: function onClick() {\n                return setFavouriteImage(subBreedName.picture);\n              },\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_helpers_redHeart__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                isLiked: subBreedName.liked\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 85,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 84,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 82,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 80,\n          columnNumber: 11\n        }, _this)\n      }, subBreedName.id, false, {\n        fileName: _jsxFileName,\n        lineNumber: 79,\n        columnNumber: 9\n      }, _this);\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 77,\n    columnNumber: 5\n  }, this);\n}\n\n_s(DogPage, \"jLo8HlfobKpqtmI+OydAUXg0S6k=\");\n\n_c = DogPage;\n\nvar _c;\n\n$RefreshReg$(_c, \"DogPage\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFZLENBQUNoQixPQUFkLENBQXZCO0FBQUEsZUFBakI7QUFBQSxxQ0FDRSw4REFBQyx5REFBRDtBQUFPLHVCQUFPLEVBQUVnQixZQUFZLENBQUNmO0FBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixTQUFVZSxZQUFZLENBQUNNLEVBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEYTtBQUFBLEtBQWQ7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFpQkQ7O0dBcEZ1QnRDOztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvc3VicmVlZHMvW2RvZ05hbWVdLnRzeD83OWMyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHY0IH0gZnJvbSBcInV1aWRcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgSGVhcnQgZnJvbSBcIi4uLy4uL2hlbHBlcnMvcmVkSGVhcnRcIjtcbmltcG9ydCB7IEJ1dHRvbiwgRG9nQ2FyZCwgRG9nSW1hZ2UsIERvZ05hbWUgfSBmcm9tIFwiLi4vLi4vc3R5bGVzL0RvZ0NhcmRcIjtcbmltcG9ydCB0aGVtZSBmcm9tIFwiLi4vLi4vc3R5bGVzL3RoZW1lXCI7XG5pbXBvcnQgeyBEb2csIFNsdWdQYXJhbXMgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRG9nUGFnZShkb2dzOiBEb2dbXSkge1xuICBjb25zdCBbc3ViQnJlZWRzLCBzZXRTdWJCcmVlZHNdID0gdXNlU3RhdGU8RG9nW10+KFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChkb2dzKSB7XG4gICAgICBzZXRTdWJCcmVlZHMoZG9ncyk7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoc3ViQnJlZWRzLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IHN0b3JhZ2VEb2dzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImZhdlBpY1wiKSB8fCBcIm51bGxcIik7XG5cbiAgICAgIGlmIChzdG9yYWdlRG9ncykge1xuICAgICAgICBjb25zdCBuZXdEb2dzID0gWy4uLnN1YkJyZWVkc107XG5cbiAgICAgICAgc3RvcmFnZURvZ3MuZm9yRWFjaCgoZG9nOiBEb2cpID0+IHtcbiAgICAgICAgICBjb25zdCBuZXdEb2cgPSBuZXdEb2dzLmZpbmQoKGQpID0+IGQucGljdHVyZSA9PT0gZG9nLnBpY3R1cmUpO1xuXG4gICAgICAgICAgaWYgKG5ld0RvZykge1xuICAgICAgICAgICAgbmV3RG9nLmxpa2VkID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBzZXRTdWJCcmVlZHMobmV3RG9ncyk7XG4gICAgICB9XG4gICAgfVxuICB9LCBbc3ViQnJlZWRzXSk7XG5cbiAgY29uc3QgdXBkYXRlTG9jYWxTdG9yYWdlID0gKGl0ZW06IERvZykgPT4ge1xuICAgIGNvbnN0IHN0b3JhZ2VGYXZQaWNzOiBEb2dbXSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJmYXZQaWNcIikgfHwgXCJudWxsXCIpO1xuICAgIGxldCB1cGRhdGVkU3RvcmFnZUZhdlBpY3M7XG5cbiAgICBpZiAoc3RvcmFnZUZhdlBpY3MgPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGZhdkRvZ3MgPSBbaXRlbV07XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImZhdlBpY1wiLCBKU09OLnN0cmluZ2lmeShmYXZEb2dzKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChpdGVtLmxpa2VkKSB7XG4gICAgICAgIGNvbnN0IHNob3VsZEFkZERvZyA9IHN0b3JhZ2VGYXZQaWNzLmZpbmRJbmRleCgoZG9nKSA9PiBkb2cucGljdHVyZSA9PT0gaXRlbS5waWN0dXJlKSA9PT0gLTE7XG4gICAgICAgIGlmIChzaG91bGRBZGREb2cpIHVwZGF0ZWRTdG9yYWdlRmF2UGljcyA9IFsuLi5zdG9yYWdlRmF2UGljcywgaXRlbV07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBmaWx0ZXJlZFBpY3R1cmVzID0gc3RvcmFnZUZhdlBpY3MuZmlsdGVyKChkb2cpID0+IGRvZy5waWN0dXJlICE9PSBpdGVtLnBpY3R1cmUpO1xuICAgICAgICB1cGRhdGVkU3RvcmFnZUZhdlBpY3MgPSBbLi4uZmlsdGVyZWRQaWN0dXJlc107XG4gICAgICB9XG5cbiAgICAgIGlmICh1cGRhdGVkU3RvcmFnZUZhdlBpY3MpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJmYXZQaWNcIiwgSlNPTi5zdHJpbmdpZnkodXBkYXRlZFN0b3JhZ2VGYXZQaWNzKSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHNldEZhdm91cml0ZUltYWdlID0gKHBpY3R1cmU6IHN0cmluZykgPT4ge1xuICAgIGlmIChzdWJCcmVlZHMpIHtcbiAgICAgIGNvbnN0IG5ld1N1YkJyZWVkcyA9IFsuLi5zdWJCcmVlZHNdO1xuICAgICAgY29uc3QgZ2V0U3ViQnJlZWRQaWN0dXJlID0gbmV3U3ViQnJlZWRzLmZpbmQoKHN1YkJyZWVkTmFtZSkgPT4gc3ViQnJlZWROYW1lLnBpY3R1cmUgPT09IHBpY3R1cmUpO1xuICAgICAgY29uc29sZS5sb2cobmV3U3ViQnJlZWRzKTtcbiAgICAgIGlmIChnZXRTdWJCcmVlZFBpY3R1cmUpIHtcbiAgICAgICAgZ2V0U3ViQnJlZWRQaWN0dXJlLmxpa2VkID0gIWdldFN1YkJyZWVkUGljdHVyZS5saWtlZDtcbiAgICAgICAgdXBkYXRlTG9jYWxTdG9yYWdlKGdldFN1YkJyZWVkUGljdHVyZSk7XG4gICAgICB9XG4gICAgICBzZXRTdWJCcmVlZHMobmV3U3ViQnJlZWRzKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZ2V0U3ViQnJlZWROYW1lID0gKHBpY3R1cmU6IHN0cmluZykgPT4ge1xuICAgIHJldHVybiBgJHtwaWN0dXJlLnNwbGl0KFwiL1wiKVs0XX1gO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIHtzdWJCcmVlZHMubWFwKChzdWJCcmVlZE5hbWU6IERvZykgPT4gKFxuICAgICAgICA8ZGl2IGtleT17c3ViQnJlZWROYW1lLmlkfT5cbiAgICAgICAgICA8RG9nQ2FyZD5cbiAgICAgICAgICAgIDxEb2dJbWFnZSBzcmM9e3N1YkJyZWVkTmFtZS5waWN0dXJlfSAvPlxuICAgICAgICAgICAgPERvZ05hbWUgdGhlbWU9e3RoZW1lfT5cbiAgICAgICAgICAgICAge2dldFN1YkJyZWVkTmFtZShzdWJCcmVlZE5hbWUucGljdHVyZSl9XG4gICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gc2V0RmF2b3VyaXRlSW1hZ2Uoc3ViQnJlZWROYW1lLnBpY3R1cmUpfT5cbiAgICAgICAgICAgICAgICA8SGVhcnQgaXNMaWtlZD17c3ViQnJlZWROYW1lLmxpa2VkfSAvPlxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvRG9nTmFtZT5cbiAgICAgICAgICA8L0RvZ0NhcmQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSl9XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCJodHRwczovL2RvZy5jZW8vYXBpL2JyZWVkcy9saXN0L2FsbFwiKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgY29uc3QgcGF0aHMgPSBPYmplY3Qua2V5cyhkYXRhLm1lc3NhZ2UpLm1hcCgoZG9ncykgPT4gKHtcbiAgICBwYXJhbXM6IHsgZG9nTmFtZTogZG9ncyB9LFxuICB9KSk7XG5cbiAgcmV0dXJuIHtcbiAgICBwYXRocyxcbiAgICBmYWxsYmFjazogZmFsc2UsXG4gIH07XG59XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jICh7IHBhcmFtcyB9OiBTbHVnUGFyYW1zKSA9PiB7XG4gIGNvbnN0IHsgZG9nTmFtZSB9ID0gcGFyYW1zO1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9kb2cuY2VvL2FwaS9icmVlZC8ke2RvZ05hbWV9L2ltYWdlc2ApO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICBjb25zdCBkb2dzOiBEb2cgPSBkYXRhLm1lc3NhZ2UubWFwKChpdGVtczogRG9nKSA9PiB7XG4gICAgcmV0dXJuIHsgcGljdHVyZTogaXRlbXMsIGxpa2VkOiBmYWxzZSwgaWQ6IHY0KCkgfTtcbiAgfSk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczogeyBkb2dzLCBkb2dOYW1lIH0sXG4gIH07XG59O1xuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTGF5b3V0IiwiSGVhcnQiLCJCdXR0b24iLCJEb2dDYXJkIiwiRG9nSW1hZ2UiLCJEb2dOYW1lIiwidGhlbWUiLCJEb2dQYWdlIiwiZG9ncyIsInN1YkJyZWVkcyIsInNldFN1YkJyZWVkcyIsImxlbmd0aCIsInN0b3JhZ2VEb2dzIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIm5ld0RvZ3MiLCJmb3JFYWNoIiwiZG9nIiwibmV3RG9nIiwiZmluZCIsImQiLCJwaWN0dXJlIiwibGlrZWQiLCJ1cGRhdGVMb2NhbFN0b3JhZ2UiLCJpdGVtIiwic3RvcmFnZUZhdlBpY3MiLCJ1cGRhdGVkU3RvcmFnZUZhdlBpY3MiLCJmYXZEb2dzIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsInNob3VsZEFkZERvZyIsImZpbmRJbmRleCIsImZpbHRlcmVkUGljdHVyZXMiLCJmaWx0ZXIiLCJzZXRGYXZvdXJpdGVJbWFnZSIsIm5ld1N1YkJyZWVkcyIsImdldFN1YkJyZWVkUGljdHVyZSIsInN1YkJyZWVkTmFtZSIsImNvbnNvbGUiLCJsb2ciLCJnZXRTdWJCcmVlZE5hbWUiLCJzcGxpdCIsIm1hcCIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/subreeds/[dogName].tsx\n");

/***/ })

});