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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ DogPage; }\n/* harmony export */ });\n/* harmony import */ var _Users_andreiilisei_Coding_Practice_practiceProjShape_ShapeDogTest_ShapeDogTest_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Layout */ \"./src/components/Layout.tsx\");\n/* harmony import */ var _styles_DogCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/DogCard */ \"./src/styles/DogCard.ts\");\n/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/theme */ \"./src/styles/theme.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/andreiilisei/Coding Practice/practiceProjShape/ShapeDogTest/ShapeDogTest/src/pages/subreeds/[dogName].tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar __N_SSG = true;\nfunction DogPage(_ref) {\n  _s();\n\n  var _this = this;\n\n  var dogs = _ref.dogs;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),\n      subBreeds = _useState[0],\n      setSubBreeds = _useState[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    if (dogs) {\n      setSubBreeds(dogs);\n    }\n  }, []); // useEffect(() => {\n  //   var favouriteSubBreedPicture = JSON.parse(localStorage.getItem(\"favPic\"));\n  //   if (favouriteSubBreedPicture === null) {\n  //     setSubBreeds(dogs);\n  //   } else {\n  //     favouriteSubBreedPicture = favouriteSubBreedPicture.filter((subBreedName: Dog) => subBreedName.picture !== dogs.picture);\n  //   }\n  //   localStorage.setItem(\"favPic\", JSON.stringify(favouriteSubBreedPicture));\n  //   setSubBreeds(dogs);\n  // }, []);\n\n  var saveToLocalStorage = function saveToLocalStorage(item) {\n    var favouriteSubBreedPicture = JSON.parse(localStorage.getItem(\"favPic\") || \"null\");\n\n    if (favouriteSubBreedPicture === null) {\n      var favDogs = [item];\n      localStorage.setItem(\"favPic\", JSON.stringify(favDogs));\n    } else {\n      if (item.liked) {\n        favouriteSubBreedPicture.push(item);\n      } else {\n        favouriteSubBreedPicture = favouriteSubBreedPicture.filter(function (subBreedName) {\n          return subBreedName.picture !== item.picture;\n        });\n      }\n\n      localStorage.setItem(\"favPic\", JSON.stringify(favouriteSubBreedPicture));\n    }\n  };\n\n  var isLiked = function isLiked(picture) {\n    var favouriteSubBreedPicture = JSON.parse(localStorage.getItem(\"favPic\") || \"null\");\n    var likedDog = null;\n\n    if (favouriteSubBreedPicture !== null) {\n      likedDog = favouriteSubBreedPicture.find(function (dog) {\n        return dog.picture === picture;\n      });\n    }\n\n    return likedDog && likedDog.liked;\n  };\n\n  var setFavouriteImage = function setFavouriteImage(picture) {\n    if (subBreeds) {\n      var newSubBreeds = (0,_Users_andreiilisei_Coding_Practice_practiceProjShape_ShapeDogTest_ShapeDogTest_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(subBreeds);\n\n      var getSubBreedPicture = newSubBreeds.find(function (subBreedName) {\n        return subBreedName.picture === picture;\n      });\n\n      if (getSubBreedPicture) {\n        getSubBreedPicture.liked = !getSubBreedPicture.liked;\n      }\n\n      setSubBreeds(newSubBreeds);\n      saveToLocalStorage(getSubBreedPicture);\n    }\n  };\n\n  var getSubBreedName = function getSubBreedName(picture) {\n    return \"\".concat(picture.split(\"/\")[4]);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    children: subBreeds.map(function (subBreedName) {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_styles_DogCard__WEBPACK_IMPORTED_MODULE_3__.DogCard, {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_styles_DogCard__WEBPACK_IMPORTED_MODULE_3__.Button, {\n            onClick: function onClick() {\n              return setFavouriteImage(subBreedName.picture);\n            },\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_styles_DogCard__WEBPACK_IMPORTED_MODULE_3__.DogImage, {\n              src: subBreedName.picture\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 77,\n              columnNumber: 13\n            }, _this), isLiked(subBreedName.picture) ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"svg\", {\n              width: \"1em\",\n              height: \"1em\",\n              viewBox: \"0 0 16 16\",\n              className: \"bi bi-heart-fill\",\n              fill: \"red\",\n              xmlns: \"http://www.w3.org/2000/svg\",\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"path\", {\n                \"fill-rule\": \"evenodd\",\n                d: \"M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 80,\n                columnNumber: 21\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 79,\n              columnNumber: 19\n            }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"svg\", {\n              width: \"1em\",\n              height: \"1em\",\n              viewBox: \"0 0 16 16\",\n              className: \"bi bi-heart-fill\",\n              fill: \"grey\",\n              xmlns: \"http://www.w3.org/2000/svg\",\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"path\", {\n                \"fill-rule\": \"evenodd\",\n                d: \"M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 84,\n                columnNumber: 21\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 83,\n              columnNumber: 19\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 76,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_styles_DogCard__WEBPACK_IMPORTED_MODULE_3__.DogName, {\n            theme: _styles_theme__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n            children: getSubBreedName(subBreedName.picture)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 88,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 74,\n          columnNumber: 11\n        }, _this)\n      }, subBreedName.id, false, {\n        fileName: _jsxFileName,\n        lineNumber: 73,\n        columnNumber: 9\n      }, _this);\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 71,\n    columnNumber: 5\n  }, this);\n}\n\n_s(DogPage, \"I0QQmTI/R864TCKq4sOKzxPaUKo=\");\n\n_c = DogPage;\n\nvar _c;\n\n$RefreshReg$(_c, \"DogPage\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VSxTQUFoQjtBQUEwQixpQkFBQyxFQUFDO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVBOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRixlQWNFLDhEQUFDLG9EQUFEO0FBQVMsaUJBQUssRUFBRW5CLHFEQUFoQjtBQUFBLHNCQUNHMkIsZUFBZSxDQUFDVCxZQUFZLENBQUNDLE9BQWQ7QUFEbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFkRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixTQUFVRCxZQUFZLENBQUNZLEVBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEYTtBQUFBLEtBQWQ7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUEyQkQ7O0dBeEZ1QjdCOztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvc3VicmVlZHMvW2RvZ05hbWVdLnRzeD83OWMyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdldFN0YXRpY1Byb3BzIH0gZnJvbSBcIm5leHQvdHlwZXNcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHY0IH0gZnJvbSBcInV1aWRcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgeyBCdXR0b24sIERvZ0NhcmQsIERvZ0ltYWdlLCBEb2dOYW1lIH0gZnJvbSBcIi4uLy4uL3N0eWxlcy9Eb2dDYXJkXCI7XG5pbXBvcnQgdGhlbWUgZnJvbSBcIi4uLy4uL3N0eWxlcy90aGVtZVwiO1xuaW1wb3J0IHsgRG9nIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERvZ1BhZ2UoeyBkb2dzIH06IGFueSkge1xuICBjb25zdCBbc3ViQnJlZWRzLCBzZXRTdWJCcmVlZHNdID0gdXNlU3RhdGU8RG9nW10+KFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChkb2dzKSB7XG4gICAgICBzZXRTdWJCcmVlZHMoZG9ncyk7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gICB2YXIgZmF2b3VyaXRlU3ViQnJlZWRQaWN0dXJlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImZhdlBpY1wiKSk7XG4gIC8vICAgaWYgKGZhdm91cml0ZVN1YkJyZWVkUGljdHVyZSA9PT0gbnVsbCkge1xuICAvLyAgICAgc2V0U3ViQnJlZWRzKGRvZ3MpO1xuICAvLyAgIH0gZWxzZSB7XG4gIC8vICAgICBmYXZvdXJpdGVTdWJCcmVlZFBpY3R1cmUgPSBmYXZvdXJpdGVTdWJCcmVlZFBpY3R1cmUuZmlsdGVyKChzdWJCcmVlZE5hbWU6IERvZykgPT4gc3ViQnJlZWROYW1lLnBpY3R1cmUgIT09IGRvZ3MucGljdHVyZSk7XG4gIC8vICAgfVxuICAvLyAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZmF2UGljXCIsIEpTT04uc3RyaW5naWZ5KGZhdm91cml0ZVN1YkJyZWVkUGljdHVyZSkpO1xuICAvLyAgIHNldFN1YkJyZWVkcyhkb2dzKTtcbiAgLy8gfSwgW10pO1xuXG4gIGNvbnN0IHNhdmVUb0xvY2FsU3RvcmFnZSA9IChpdGVtOiBhbnkpID0+IHtcbiAgICB2YXIgZmF2b3VyaXRlU3ViQnJlZWRQaWN0dXJlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImZhdlBpY1wiKSB8fCBcIm51bGxcIik7XG4gICAgaWYgKGZhdm91cml0ZVN1YkJyZWVkUGljdHVyZSA9PT0gbnVsbCkge1xuICAgICAgY29uc3QgZmF2RG9ncyA9IFtpdGVtXTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZmF2UGljXCIsIEpTT04uc3RyaW5naWZ5KGZhdkRvZ3MpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGl0ZW0ubGlrZWQpIHtcbiAgICAgICAgZmF2b3VyaXRlU3ViQnJlZWRQaWN0dXJlLnB1c2goaXRlbSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmYXZvdXJpdGVTdWJCcmVlZFBpY3R1cmUgPSBmYXZvdXJpdGVTdWJCcmVlZFBpY3R1cmUuZmlsdGVyKChzdWJCcmVlZE5hbWU6IERvZykgPT4gc3ViQnJlZWROYW1lLnBpY3R1cmUgIT09IGl0ZW0ucGljdHVyZSk7XG4gICAgICB9XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImZhdlBpY1wiLCBKU09OLnN0cmluZ2lmeShmYXZvdXJpdGVTdWJCcmVlZFBpY3R1cmUpKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaXNMaWtlZCA9IChwaWN0dXJlOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBmYXZvdXJpdGVTdWJCcmVlZFBpY3R1cmUgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZmF2UGljXCIpIHx8IFwibnVsbFwiKTtcbiAgICB2YXIgbGlrZWREb2cgPSBudWxsO1xuICAgIGlmIChmYXZvdXJpdGVTdWJCcmVlZFBpY3R1cmUgIT09IG51bGwpIHtcbiAgICAgIGxpa2VkRG9nID0gZmF2b3VyaXRlU3ViQnJlZWRQaWN0dXJlLmZpbmQoKGRvZzogeyBwaWN0dXJlOiBzdHJpbmcgfSkgPT4gZG9nLnBpY3R1cmUgPT09IHBpY3R1cmUpO1xuICAgIH1cbiAgICByZXR1cm4gbGlrZWREb2cgJiYgbGlrZWREb2cubGlrZWQ7XG4gIH07XG5cbiAgY29uc3Qgc2V0RmF2b3VyaXRlSW1hZ2UgPSAocGljdHVyZTogc3RyaW5nKSA9PiB7XG4gICAgaWYgKHN1YkJyZWVkcykge1xuICAgICAgY29uc3QgbmV3U3ViQnJlZWRzID0gWy4uLnN1YkJyZWVkc107XG4gICAgICBjb25zdCBnZXRTdWJCcmVlZFBpY3R1cmUgPSBuZXdTdWJCcmVlZHMuZmluZCgoc3ViQnJlZWROYW1lKSA9PiBzdWJCcmVlZE5hbWUucGljdHVyZSA9PT0gcGljdHVyZSk7XG5cbiAgICAgIGlmIChnZXRTdWJCcmVlZFBpY3R1cmUpIHtcbiAgICAgICAgZ2V0U3ViQnJlZWRQaWN0dXJlLmxpa2VkID0gIWdldFN1YkJyZWVkUGljdHVyZS5saWtlZDtcbiAgICAgIH1cbiAgICAgIHNldFN1YkJyZWVkcyhuZXdTdWJCcmVlZHMpO1xuICAgICAgc2F2ZVRvTG9jYWxTdG9yYWdlKGdldFN1YkJyZWVkUGljdHVyZSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGdldFN1YkJyZWVkTmFtZSA9IChwaWN0dXJlOiBzdHJpbmcpID0+IHtcbiAgICByZXR1cm4gYCR7cGljdHVyZS5zcGxpdChcIi9cIilbNF19YDtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICB7c3ViQnJlZWRzLm1hcCgoc3ViQnJlZWROYW1lOiBEb2cpID0+IChcbiAgICAgICAgPGRpdiBrZXk9e3N1YkJyZWVkTmFtZS5pZH0+XG4gICAgICAgICAgPERvZ0NhcmQ+XG4gICAgICAgICAgIFxuICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRGYXZvdXJpdGVJbWFnZShzdWJCcmVlZE5hbWUucGljdHVyZSl9PlxuICAgICAgICAgICAgPERvZ0ltYWdlIHNyYz17c3ViQnJlZWROYW1lLnBpY3R1cmV9IC8+XG4gICAgICAgICAgICAgICAge2lzTGlrZWQoc3ViQnJlZWROYW1lLnBpY3R1cmUpID8gKFxuICAgICAgICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjFlbVwiIGhlaWdodD1cIjFlbVwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIiBjbGFzc05hbWU9XCJiaSBiaS1oZWFydC1maWxsXCIgZmlsbD1cInJlZFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNOCAxLjMxNEMxMi40MzgtMy4yNDggMjMuNTM0IDQuNzM1IDggMTUtNy41MzQgNC43MzYgMy41NjItMy4yNDggOCAxLjMxNHpcIiAvPlxuICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgIDxzdmcgd2lkdGg9XCIxZW1cIiBoZWlnaHQ9XCIxZW1cIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCIgY2xhc3NOYW1lPVwiYmkgYmktaGVhcnQtZmlsbFwiIGZpbGw9XCJncmV5XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgZD1cIk04IDEuMzE0QzEyLjQzOC0zLjI0OCAyMy41MzQgNC43MzUgOCAxNS03LjUzNCA0LjczNiAzLjU2Mi0zLjI0OCA4IDEuMzE0elwiIC8+XG4gICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDxEb2dOYW1lIHRoZW1lPXt0aGVtZX0+XG4gICAgICAgICAgICAgIHtnZXRTdWJCcmVlZE5hbWUoc3ViQnJlZWROYW1lLnBpY3R1cmUpfVxuICAgICAgICAgICAgPC9Eb2dOYW1lPlxuICAgICAgICAgICAgey8qIDxBZGRGYXZvdXJpdGUgb25DbGljaz17KCkgPT4gc2V0RmF2b3VyaXRlSW1hZ2Uoc3ViQnJlZWROYW1lLnBpY3R1cmUpfSAvPiAqL31cbiAgICAgICAgICA8L0RvZ0NhcmQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSl9XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCJodHRwczovL2RvZy5jZW8vYXBpL2JyZWVkcy9saXN0L2FsbFwiKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgY29uc3QgcGF0aHMgPSBPYmplY3Qua2V5cyhkYXRhLm1lc3NhZ2UpLm1hcCgoZG9ncykgPT4gKHtcbiAgICBwYXJhbXM6IHsgZG9nTmFtZTogZG9ncyB9LFxuICB9KSk7XG5cbiAgcmV0dXJuIHtcbiAgICBwYXRocyxcbiAgICBmYWxsYmFjazogZmFsc2UsXG4gIH07XG59XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wczogR2V0U3RhdGljUHJvcHMgPSBhc3luYyAoeyBwYXJhbXMgfSkgPT4ge1xuICBjb25zdCB7IGRvZ05hbWUgfTogYW55ID0gcGFyYW1zO1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9kb2cuY2VvL2FwaS9icmVlZC8ke2RvZ05hbWV9L2ltYWdlc2ApO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICBjb25zdCBkb2dzID0gZGF0YS5tZXNzYWdlLm1hcCgoaXRlbXM6IERvZykgPT4ge1xuICAgIHJldHVybiB7IHBpY3R1cmU6IGl0ZW1zLCBsaWtlZDogZmFsc2UsIGlkOiB2NCgpIH07XG4gIH0pO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHsgZG9ncywgZG9nTmFtZSB9LFxuICB9O1xufTtcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkxheW91dCIsIkJ1dHRvbiIsIkRvZ0NhcmQiLCJEb2dJbWFnZSIsIkRvZ05hbWUiLCJ0aGVtZSIsIkRvZ1BhZ2UiLCJkb2dzIiwic3ViQnJlZWRzIiwic2V0U3ViQnJlZWRzIiwic2F2ZVRvTG9jYWxTdG9yYWdlIiwiaXRlbSIsImZhdm91cml0ZVN1YkJyZWVkUGljdHVyZSIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJmYXZEb2dzIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsImxpa2VkIiwicHVzaCIsImZpbHRlciIsInN1YkJyZWVkTmFtZSIsInBpY3R1cmUiLCJpc0xpa2VkIiwibGlrZWREb2ciLCJmaW5kIiwiZG9nIiwic2V0RmF2b3VyaXRlSW1hZ2UiLCJuZXdTdWJCcmVlZHMiLCJnZXRTdWJCcmVlZFBpY3R1cmUiLCJnZXRTdWJCcmVlZE5hbWUiLCJzcGxpdCIsIm1hcCIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/subreeds/[dogName].tsx\n");

/***/ })

});