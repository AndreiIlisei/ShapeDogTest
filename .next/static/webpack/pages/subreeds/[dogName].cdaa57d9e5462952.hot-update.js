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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ DogPage; }\n/* harmony export */ });\n/* harmony import */ var _Users_andreiilisei_Coding_Practice_practiceProjShape_ShapeDogTest_ShapeDogTest_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_greyHeart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/greyHeart */ \"./src/components/greyHeart.tsx\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Layout */ \"./src/components/Layout.tsx\");\n/* harmony import */ var _components_redHeart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/redHeart */ \"./src/components/redHeart.tsx\");\n/* harmony import */ var _styles_DogCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/DogCard */ \"./src/styles/DogCard.ts\");\n/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../styles/theme */ \"./src/styles/theme.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/andreiilisei/Coding Practice/practiceProjShape/ShapeDogTest/ShapeDogTest/src/pages/subreeds/[dogName].tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar __N_SSG = true;\nfunction DogPage(_ref) {\n  _s();\n\n  var _this = this;\n\n  var dogs = _ref.dogs;\n\n  // const saveditems = JSON.parse(localStorage.getItem('favPic'));\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(function () {\n    var saved = localStorage.getItem(\"favPic\");\n    var initialValue = JSON.parse(saved);\n    return initialValue || \"\";\n  }),\n      subBreeds = _useState[0],\n      setSubBreeds = _useState[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    if (dogs) {\n      setSubBreeds(dogs);\n    }\n  }, []); // const [liked, setLiked] = useState<Dog[]>([])\n  // useEffect(() => {\n  //   const setsmth = (picture: string) => {\n  //     if (subBreeds) {\n  //       const likedSub = [...subBreeds];\n  //       const getLikedSubBreed = likedSub.find((subBreedName) => subBreedName.picture === picture);\n  //       if (getLikedSubBreed) {\n  //         getLikedSubBreed.liked = !getLikedSubBreed.liked;\n  //       }\n  //       setSubBreeds(likedSub);\n  //     }\n  //   };\n  // });\n  // useEffect(() => {\n  //   const favouriteDogs = localStorage.getItem(\"favPic\");\n  //   const savedDogs = JSON.parse(favouriteDogs);\n  //   if (savedDogs) {\n  //     setSubBreeds(savedDogs);\n  //   }\n  // }, []);\n  // useEffect(() => {\n  //   var favouriteSubBreedPicture = JSON.parse(localStorage.getItem(\"favPic\"));\n  //   if (favouriteSubBreedPicture === null) {\n  //     setSubBreeds(dogs);\n  //   } else {\n  //     favouriteSubBreedPicture = favouriteSubBreedPicture.filter((subBreedName: Dog) => subBreedName.picture !== dogs.picture);\n  //   }\n  //   localStorage.setItem(\"favPic\", JSON.stringify(favouriteSubBreedPicture));\n  //   setSubBreeds(dogs);\n  // }, []);\n\n  var saveToLocalStorage = function saveToLocalStorage(item) {\n    var favouriteSubBreedPicture = JSON.parse(localStorage.getItem(\"favPic\") || \"null\");\n\n    if (favouriteSubBreedPicture === null) {\n      var favDogs = [item];\n      localStorage.setItem(\"favPic\", JSON.stringify(favDogs));\n    } else {\n      if (item.liked) {\n        favouriteSubBreedPicture.push(item);\n      } else {\n        favouriteSubBreedPicture = favouriteSubBreedPicture.filter(function (subBreedName) {\n          return subBreedName.picture !== item.picture;\n        });\n      }\n\n      localStorage.setItem(\"favPic\", JSON.stringify(favouriteSubBreedPicture));\n    }\n  }; // const isLiked = (picture: string) => {\n  //   const favouriteSubBreedPicture = JSON.parse(localStorage.getItem(\"favPic\") || \"null\");\n  //   var likedDog = null;\n  //   if (favouriteSubBreedPicture !== null) {\n  //     likedDog = favouriteSubBreedPicture.find((dog: { picture: string }) => dog.picture === picture);\n  //   }\n  //   return likedDog && likedDog.liked;\n  // };\n\n\n  var isLiked = function isLiked() {\n    var favouriteSubBreedPicture = localStorage.getItem(\"favPic\");\n    var savedDogs = JSON.parse(favouriteSubBreedPicture);\n\n    if (savedDogs) {\n      setSubBreeds(savedDogs);\n    }\n\n    [];\n  };\n\n  var setFavouriteImage = function setFavouriteImage(picture) {\n    if (subBreeds) {\n      var newSubBreeds = (0,_Users_andreiilisei_Coding_Practice_practiceProjShape_ShapeDogTest_ShapeDogTest_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(subBreeds);\n\n      var getSubBreedPicture = newSubBreeds.find(function (subBreedName) {\n        return subBreedName.picture === picture;\n      });\n      console.log(newSubBreeds);\n\n      if (getSubBreedPicture) {\n        getSubBreedPicture.liked = !getSubBreedPicture.liked;\n      }\n\n      setSubBreeds(newSubBreeds);\n      saveToLocalStorage(getSubBreedPicture);\n    }\n  };\n\n  var getSubBreedName = function getSubBreedName(picture) {\n    return \"\".concat(picture.split(\"/\")[4]);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    children: subBreeds.map(function (subBreedName) {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_styles_DogCard__WEBPACK_IMPORTED_MODULE_5__.DogCard, {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_styles_DogCard__WEBPACK_IMPORTED_MODULE_5__.DogImage, {\n            src: subBreedName.picture\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 115,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_styles_DogCard__WEBPACK_IMPORTED_MODULE_5__.DogName, {\n            theme: _styles_theme__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n            children: [getSubBreedName(subBreedName.picture), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_styles_DogCard__WEBPACK_IMPORTED_MODULE_5__.Button, {\n              onClick: function onClick() {\n                return setFavouriteImage(subBreedName.picture);\n              },\n              children: isLiked(subBreedName.picture) ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_redHeart__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 118,\n                columnNumber: 112\n              }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_greyHeart__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 118,\n                columnNumber: 127\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 118,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 116,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 114,\n          columnNumber: 11\n        }, _this)\n      }, subBreedName.id, false, {\n        fileName: _jsxFileName,\n        lineNumber: 113,\n        columnNumber: 9\n      }, _this);\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 111,\n    columnNumber: 5\n  }, this);\n}\n\n_s(DogPage, \"00E7KVtpjpXampsDhmQTbvEUXBk=\");\n\n_c = DogPage;\n\nvar _c;\n\n$RefreshReg$(_c, \"DogPage\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsU0FBVUQsWUFBWSxDQUFDYSxFQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRGE7QUFBQSxLQUFkO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBZUQ7O0dBbEh1QmhDOztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvc3VicmVlZHMvW2RvZ05hbWVdLnRzeD83OWMyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdldFN0YXRpY1Byb3BzIH0gZnJvbSBcIm5leHQvdHlwZXNcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHY0IH0gZnJvbSBcInV1aWRcIjtcbmltcG9ydCBHcmV5SGVhcnQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZ3JleUhlYXJ0XCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IFJlZEhlYXJ0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3JlZEhlYXJ0XCI7XG5pbXBvcnQgeyBCdXR0b24sIERvZ0NhcmQsIERvZ0ltYWdlLCBEb2dOYW1lIH0gZnJvbSBcIi4uLy4uL3N0eWxlcy9Eb2dDYXJkXCI7XG5pbXBvcnQgdGhlbWUgZnJvbSBcIi4uLy4uL3N0eWxlcy90aGVtZVwiO1xuaW1wb3J0IHsgRG9nIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERvZ1BhZ2UoeyBkb2dzIH06IGFueSkge1xuICAvLyBjb25zdCBzYXZlZGl0ZW1zID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZmF2UGljJykpO1xuICBjb25zdCBbc3ViQnJlZWRzLCBzZXRTdWJCcmVlZHNdID0gdXNlU3RhdGUoKCkgPT4ge1xuICAgIGNvbnN0IHNhdmVkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJmYXZQaWNcIik7XG4gICAgY29uc3QgaW5pdGlhbFZhbHVlID0gSlNPTi5wYXJzZShzYXZlZCk7XG4gICAgcmV0dXJuIGluaXRpYWxWYWx1ZSB8fCBcIlwiO1xuICB9KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChkb2dzKSB7XG4gICAgICBzZXRTdWJCcmVlZHMoZG9ncyk7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgLy8gY29uc3QgW2xpa2VkLCBzZXRMaWtlZF0gPSB1c2VTdGF0ZTxEb2dbXT4oW10pXG5cbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gICBjb25zdCBzZXRzbXRoID0gKHBpY3R1cmU6IHN0cmluZykgPT4ge1xuICAvLyAgICAgaWYgKHN1YkJyZWVkcykge1xuICAvLyAgICAgICBjb25zdCBsaWtlZFN1YiA9IFsuLi5zdWJCcmVlZHNdO1xuICAvLyAgICAgICBjb25zdCBnZXRMaWtlZFN1YkJyZWVkID0gbGlrZWRTdWIuZmluZCgoc3ViQnJlZWROYW1lKSA9PiBzdWJCcmVlZE5hbWUucGljdHVyZSA9PT0gcGljdHVyZSk7XG5cbiAgLy8gICAgICAgaWYgKGdldExpa2VkU3ViQnJlZWQpIHtcbiAgLy8gICAgICAgICBnZXRMaWtlZFN1YkJyZWVkLmxpa2VkID0gIWdldExpa2VkU3ViQnJlZWQubGlrZWQ7XG4gIC8vICAgICAgIH1cbiAgLy8gICAgICAgc2V0U3ViQnJlZWRzKGxpa2VkU3ViKTtcbiAgLy8gICAgIH1cbiAgLy8gICB9O1xuICAvLyB9KTtcblxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgIGNvbnN0IGZhdm91cml0ZURvZ3MgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImZhdlBpY1wiKTtcbiAgLy8gICBjb25zdCBzYXZlZERvZ3MgPSBKU09OLnBhcnNlKGZhdm91cml0ZURvZ3MpO1xuICAvLyAgIGlmIChzYXZlZERvZ3MpIHtcbiAgLy8gICAgIHNldFN1YkJyZWVkcyhzYXZlZERvZ3MpO1xuICAvLyAgIH1cbiAgLy8gfSwgW10pO1xuXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vICAgdmFyIGZhdm91cml0ZVN1YkJyZWVkUGljdHVyZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJmYXZQaWNcIikpO1xuICAvLyAgIGlmIChmYXZvdXJpdGVTdWJCcmVlZFBpY3R1cmUgPT09IG51bGwpIHtcbiAgLy8gICAgIHNldFN1YkJyZWVkcyhkb2dzKTtcbiAgLy8gICB9IGVsc2Uge1xuICAvLyAgICAgZmF2b3VyaXRlU3ViQnJlZWRQaWN0dXJlID0gZmF2b3VyaXRlU3ViQnJlZWRQaWN0dXJlLmZpbHRlcigoc3ViQnJlZWROYW1lOiBEb2cpID0+IHN1YkJyZWVkTmFtZS5waWN0dXJlICE9PSBkb2dzLnBpY3R1cmUpO1xuICAvLyAgIH1cbiAgLy8gICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImZhdlBpY1wiLCBKU09OLnN0cmluZ2lmeShmYXZvdXJpdGVTdWJCcmVlZFBpY3R1cmUpKTtcbiAgLy8gICBzZXRTdWJCcmVlZHMoZG9ncyk7XG4gIC8vIH0sIFtdKTtcblxuICBjb25zdCBzYXZlVG9Mb2NhbFN0b3JhZ2UgPSAoaXRlbTogYW55KSA9PiB7XG4gICAgdmFyIGZhdm91cml0ZVN1YkJyZWVkUGljdHVyZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJmYXZQaWNcIikgfHwgXCJudWxsXCIpO1xuICAgIGlmIChmYXZvdXJpdGVTdWJCcmVlZFBpY3R1cmUgPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGZhdkRvZ3MgPSBbaXRlbV07XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImZhdlBpY1wiLCBKU09OLnN0cmluZ2lmeShmYXZEb2dzKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChpdGVtLmxpa2VkKSB7XG4gICAgICAgIGZhdm91cml0ZVN1YkJyZWVkUGljdHVyZS5wdXNoKGl0ZW0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZmF2b3VyaXRlU3ViQnJlZWRQaWN0dXJlID0gZmF2b3VyaXRlU3ViQnJlZWRQaWN0dXJlLmZpbHRlcigoc3ViQnJlZWROYW1lOiBEb2cpID0+IHN1YkJyZWVkTmFtZS5waWN0dXJlICE9PSBpdGVtLnBpY3R1cmUpO1xuICAgICAgfVxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJmYXZQaWNcIiwgSlNPTi5zdHJpbmdpZnkoZmF2b3VyaXRlU3ViQnJlZWRQaWN0dXJlKSk7XG4gICAgfVxuICB9O1xuXG4gIC8vIGNvbnN0IGlzTGlrZWQgPSAocGljdHVyZTogc3RyaW5nKSA9PiB7XG4gIC8vICAgY29uc3QgZmF2b3VyaXRlU3ViQnJlZWRQaWN0dXJlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImZhdlBpY1wiKSB8fCBcIm51bGxcIik7XG4gIC8vICAgdmFyIGxpa2VkRG9nID0gbnVsbDtcbiAgLy8gICBpZiAoZmF2b3VyaXRlU3ViQnJlZWRQaWN0dXJlICE9PSBudWxsKSB7XG4gIC8vICAgICBsaWtlZERvZyA9IGZhdm91cml0ZVN1YkJyZWVkUGljdHVyZS5maW5kKChkb2c6IHsgcGljdHVyZTogc3RyaW5nIH0pID0+IGRvZy5waWN0dXJlID09PSBwaWN0dXJlKTtcbiAgLy8gICB9XG4gIC8vICAgcmV0dXJuIGxpa2VkRG9nICYmIGxpa2VkRG9nLmxpa2VkO1xuICAvLyB9O1xuXG4gIGNvbnN0IGlzTGlrZWQgPSAoKSA9PiB7XG4gICAgY29uc3QgZmF2b3VyaXRlU3ViQnJlZWRQaWN0dXJlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJmYXZQaWNcIik7XG4gICAgY29uc3Qgc2F2ZWREb2dzID0gSlNPTi5wYXJzZShmYXZvdXJpdGVTdWJCcmVlZFBpY3R1cmUpO1xuICAgIGlmIChzYXZlZERvZ3MpIHtcbiAgICAgIHNldFN1YkJyZWVkcyhzYXZlZERvZ3MpO1xuICAgIH1cbiAgICBbXTtcbiAgfTtcblxuICBjb25zdCBzZXRGYXZvdXJpdGVJbWFnZSA9IChwaWN0dXJlOiBzdHJpbmcpID0+IHtcbiAgICBpZiAoc3ViQnJlZWRzKSB7XG4gICAgICBjb25zdCBuZXdTdWJCcmVlZHMgPSBbLi4uc3ViQnJlZWRzXTtcbiAgICAgIGNvbnN0IGdldFN1YkJyZWVkUGljdHVyZSA9IG5ld1N1YkJyZWVkcy5maW5kKChzdWJCcmVlZE5hbWUpID0+IHN1YkJyZWVkTmFtZS5waWN0dXJlID09PSBwaWN0dXJlKTtcbiAgICAgIGNvbnNvbGUubG9nKG5ld1N1YkJyZWVkcyk7XG4gICAgICBpZiAoZ2V0U3ViQnJlZWRQaWN0dXJlKSB7XG4gICAgICAgIGdldFN1YkJyZWVkUGljdHVyZS5saWtlZCA9ICFnZXRTdWJCcmVlZFBpY3R1cmUubGlrZWQ7XG4gICAgICB9XG4gICAgICBzZXRTdWJCcmVlZHMobmV3U3ViQnJlZWRzKTtcbiAgICAgIHNhdmVUb0xvY2FsU3RvcmFnZShnZXRTdWJCcmVlZFBpY3R1cmUpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBnZXRTdWJCcmVlZE5hbWUgPSAocGljdHVyZTogc3RyaW5nKSA9PiB7XG4gICAgcmV0dXJuIGAke3BpY3R1cmUuc3BsaXQoXCIvXCIpWzRdfWA7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAge3N1YkJyZWVkcy5tYXAoKHN1YkJyZWVkTmFtZTogRG9nKSA9PiAoXG4gICAgICAgIDxkaXYga2V5PXtzdWJCcmVlZE5hbWUuaWR9PlxuICAgICAgICAgIDxEb2dDYXJkPlxuICAgICAgICAgICAgPERvZ0ltYWdlIHNyYz17c3ViQnJlZWROYW1lLnBpY3R1cmV9IC8+XG4gICAgICAgICAgICA8RG9nTmFtZSB0aGVtZT17dGhlbWV9PlxuICAgICAgICAgICAgICB7Z2V0U3ViQnJlZWROYW1lKHN1YkJyZWVkTmFtZS5waWN0dXJlKX1cbiAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRGYXZvdXJpdGVJbWFnZShzdWJCcmVlZE5hbWUucGljdHVyZSl9Pntpc0xpa2VkKHN1YkJyZWVkTmFtZS5waWN0dXJlKSA/IDxSZWRIZWFydCAvPiA6IDxHcmV5SGVhcnQgLz59PC9CdXR0b24+XG4gICAgICAgICAgICA8L0RvZ05hbWU+XG4gICAgICAgICAgPC9Eb2dDYXJkPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkpfVxuICAgIDwvTGF5b3V0PlxuICApO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9kb2cuY2VvL2FwaS9icmVlZHMvbGlzdC9hbGxcIik7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuXG4gIGNvbnN0IHBhdGhzID0gT2JqZWN0LmtleXMoZGF0YS5tZXNzYWdlKS5tYXAoKGRvZ3MpID0+ICh7XG4gICAgcGFyYW1zOiB7IGRvZ05hbWU6IGRvZ3MgfSxcbiAgfSkpO1xuXG4gIHJldHVybiB7XG4gICAgcGF0aHMsXG4gICAgZmFsbGJhY2s6IGZhbHNlLFxuICB9O1xufVxuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHM6IEdldFN0YXRpY1Byb3BzID0gYXN5bmMgKHsgcGFyYW1zIH0pID0+IHtcbiAgY29uc3QgeyBkb2dOYW1lIH06IGFueSA9IHBhcmFtcztcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vZG9nLmNlby9hcGkvYnJlZWQvJHtkb2dOYW1lfS9pbWFnZXNgKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgY29uc3QgZG9ncyA9IGRhdGEubWVzc2FnZS5tYXAoKGl0ZW1zOiBEb2cpID0+IHtcbiAgICByZXR1cm4geyBwaWN0dXJlOiBpdGVtcywgbGlrZWQ6IGZhbHNlLCBpZDogdjQoKSB9O1xuICB9KTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7IGRvZ3MsIGRvZ05hbWUgfSxcbiAgfTtcbn07XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJHcmV5SGVhcnQiLCJMYXlvdXQiLCJSZWRIZWFydCIsIkJ1dHRvbiIsIkRvZ0NhcmQiLCJEb2dJbWFnZSIsIkRvZ05hbWUiLCJ0aGVtZSIsIkRvZ1BhZ2UiLCJkb2dzIiwic2F2ZWQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiaW5pdGlhbFZhbHVlIiwiSlNPTiIsInBhcnNlIiwic3ViQnJlZWRzIiwic2V0U3ViQnJlZWRzIiwic2F2ZVRvTG9jYWxTdG9yYWdlIiwiaXRlbSIsImZhdm91cml0ZVN1YkJyZWVkUGljdHVyZSIsImZhdkRvZ3MiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwibGlrZWQiLCJwdXNoIiwiZmlsdGVyIiwic3ViQnJlZWROYW1lIiwicGljdHVyZSIsImlzTGlrZWQiLCJzYXZlZERvZ3MiLCJzZXRGYXZvdXJpdGVJbWFnZSIsIm5ld1N1YkJyZWVkcyIsImdldFN1YkJyZWVkUGljdHVyZSIsImZpbmQiLCJjb25zb2xlIiwibG9nIiwiZ2V0U3ViQnJlZWROYW1lIiwic3BsaXQiLCJtYXAiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/subreeds/[dogName].tsx\n");

/***/ })

});