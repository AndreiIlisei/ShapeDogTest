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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ DogPage; }\n/* harmony export */ });\n/* harmony import */ var _Users_andreiilisei_Coding_Practice_practiceProjShape_ShapeDogTest_ShapeDogTest_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _helpers_redHeart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/redHeart */ \"./src/helpers/redHeart.tsx\");\n/* harmony import */ var _helpers_greyHeart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/greyHeart */ \"./src/helpers/greyHeart.tsx\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Layout */ \"./src/components/Layout.tsx\");\n/* harmony import */ var _styles_DogCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/DogCard */ \"./src/styles/DogCard.ts\");\n/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../styles/theme */ \"./src/styles/theme.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/andreiilisei/Coding Practice/practiceProjShape/ShapeDogTest/ShapeDogTest/src/pages/subreeds/[dogName].tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar __N_SSG = true;\nfunction DogPage(_ref) {\n  _s();\n\n  var _this = this;\n\n  var dogs = _ref.dogs;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),\n      subBreeds = _useState[0],\n      setSubBreeds = _useState[1]; // const saveditems = JSON.parse(localStorage.getItem('favPic'));\n  // const [subBreeds, setSubBreeds] = useState(() => {\n  //   const saved = localStorage.getItem(\"favPic\");\n  //   const initialValue = JSON.parse(saved);\n  //   return initialValue || \"\";\n  // });\n\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    if (dogs) {\n      setSubBreeds(dogs);\n    }\n  }, []); // const [liked, setLiked] = useState<Dog[]>([])\n  // useEffect(() => {\n  //   const setsmth = (picture: string) => {\n  //     if (subBreeds) {\n  //       const likedSub = [...subBreeds];\n  //       const getLikedSubBreed = likedSub.find((subBreedName) => subBreedName.picture === picture);\n  //       if (getLikedSubBreed) {\n  //         getLikedSubBreed.liked = !getLikedSubBreed.liked;\n  //       }\n  //       setSubBreeds(likedSub);\n  //     }\n  //   };\n  // });\n  // useEffect(() => {\n  //   const favouriteDogs = localStorage.getItem(\"favPic\");\n  //   const savedDogs = JSON.parse(favouriteDogs);\n  //   if (savedDogs) {\n  //     setSubBreeds(savedDogs);\n  //   }\n  // }, []);\n  // useEffect(() => {\n  //   var favouriteSubBreedPicture = JSON.parse(localStorage.getItem(\"favPic\"));\n  //   if (favouriteSubBreedPicture === null) {\n  //     setSubBreeds(dogs);\n  //   } else {\n  //     favouriteSubBreedPicture = favouriteSubBreedPicture.filter((subBreedName: Dog) => subBreedName.picture !== dogs.picture);\n  //   }\n  //   localStorage.setItem(\"favPic\", JSON.stringify(favouriteSubBreedPicture));\n  //   setSubBreeds(dogs);\n  // }, []);\n\n  var saveToLocalStorage = function saveToLocalStorage(item) {\n    var storageFavPics = JSON.parse(localStorage.getItem(\"favPic\") || \"null\");\n\n    if (storageFavPics === null) {\n      var favDogs = [item];\n      localStorage.setItem(\"favPic\", JSON.stringify(favDogs));\n    } else {\n      if (item.liked) {\n        storageFavPics.push(item);\n      } else {\n        storageFavPics = storageFavPics.filter(function (subBreedName) {\n          return subBreedName.picture !== item.picture;\n        });\n      }\n\n      localStorage.setItem(\"favPic\", JSON.stringify(storageFavPics));\n    }\n  };\n\n  var isLiked = function isLiked(picture) {\n    var favouriteSubBreedPicture = JSON.parse(localStorage.getItem(\"favPic\") || \"null\");\n    var likedDog = null;\n\n    if (favouriteSubBreedPicture !== null) {\n      likedDog = favouriteSubBreedPicture.find(function (dog) {\n        return dog.picture === picture;\n      });\n    }\n\n    return likedDog && likedDog.liked;\n  };\n\n  var setFavouriteImage = function setFavouriteImage(picture) {\n    if (subBreeds) {\n      var newSubBreeds = (0,_Users_andreiilisei_Coding_Practice_practiceProjShape_ShapeDogTest_ShapeDogTest_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(subBreeds);\n\n      var getSubBreedPicture = newSubBreeds.find(function (subBreedName) {\n        return subBreedName.picture === picture;\n      });\n      console.log(newSubBreeds);\n\n      if (getSubBreedPicture) {\n        getSubBreedPicture.liked = !getSubBreedPicture.liked;\n      }\n\n      setSubBreeds(newSubBreeds);\n      saveToLocalStorage(getSubBreedPicture);\n    }\n  };\n\n  var getSubBreedName = function getSubBreedName(picture) {\n    return \"\".concat(picture.split(\"/\")[4]);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    children: subBreeds.map(function (subBreedName) {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_styles_DogCard__WEBPACK_IMPORTED_MODULE_5__.DogCard, {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_styles_DogCard__WEBPACK_IMPORTED_MODULE_5__.DogImage, {\n            src: subBreedName.picture\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 109,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_styles_DogCard__WEBPACK_IMPORTED_MODULE_5__.DogName, {\n            theme: _styles_theme__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n            children: [getSubBreedName(subBreedName.picture), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_styles_DogCard__WEBPACK_IMPORTED_MODULE_5__.Button, {\n              onClick: function onClick() {\n                return setFavouriteImage(subBreedName.picture);\n              },\n              children: isLiked(subBreedName.picture) ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_helpers_redHeart__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 112,\n                columnNumber: 112\n              }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_helpers_greyHeart__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 112,\n                columnNumber: 127\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 112,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 110,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 108,\n          columnNumber: 11\n        }, _this)\n      }, subBreedName.id, false, {\n        fileName: _jsxFileName,\n        lineNumber: 107,\n        columnNumber: 9\n      }, _this);\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 105,\n    columnNumber: 5\n  }, this);\n}\n\n_s(DogPage, \"I0QQmTI/R864TCKq4sOKzxPaUKo=\");\n\n_c = DogPage;\n\nvar _c;\n\n$RefreshReg$(_c, \"DogPage\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLFNBQVVELFlBQVksQ0FBQ2UsRUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURhO0FBQUEsS0FBZDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWVEOztHQTNHdUJoQzs7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3N1YnJlZWRzL1tkb2dOYW1lXS50c3g/NzljMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHZXRTdGF0aWNQcm9wcyB9IGZyb20gXCJuZXh0L3R5cGVzXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB2NCB9IGZyb20gXCJ1dWlkXCI7XG5pbXBvcnQgUmVkSGVhcnQgZnJvbSBcIi4uLy4uL2hlbHBlcnMvcmVkSGVhcnRcIjtcbmltcG9ydCBHcmV5SGVhcnQgZnJvbSBcIi4uLy4uL2hlbHBlcnMvZ3JleUhlYXJ0XCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0xheW91dFwiO1xuXG5pbXBvcnQgeyBCdXR0b24sIERvZ0NhcmQsIERvZ0ltYWdlLCBEb2dOYW1lIH0gZnJvbSBcIi4uLy4uL3N0eWxlcy9Eb2dDYXJkXCI7XG5pbXBvcnQgdGhlbWUgZnJvbSBcIi4uLy4uL3N0eWxlcy90aGVtZVwiO1xuaW1wb3J0IHsgRG9nIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERvZ1BhZ2UoeyBkb2dzIH06IGFueSkge1xuICAgIGNvbnN0IFtzdWJCcmVlZHMsIHNldFN1YkJyZWVkc10gPSB1c2VTdGF0ZTxEb2dbXT4oW10pO1xuXG4gIC8vIGNvbnN0IHNhdmVkaXRlbXMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdmYXZQaWMnKSk7XG4gIC8vIGNvbnN0IFtzdWJCcmVlZHMsIHNldFN1YkJyZWVkc10gPSB1c2VTdGF0ZSgoKSA9PiB7XG4gIC8vICAgY29uc3Qgc2F2ZWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImZhdlBpY1wiKTtcbiAgLy8gICBjb25zdCBpbml0aWFsVmFsdWUgPSBKU09OLnBhcnNlKHNhdmVkKTtcbiAgLy8gICByZXR1cm4gaW5pdGlhbFZhbHVlIHx8IFwiXCI7XG4gIC8vIH0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGRvZ3MpIHtcbiAgICAgIHNldFN1YkJyZWVkcyhkb2dzKTtcbiAgICB9XG4gIH0sIFtdKTtcblxuICAvLyBjb25zdCBbbGlrZWQsIHNldExpa2VkXSA9IHVzZVN0YXRlPERvZ1tdPihbXSlcblxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgIGNvbnN0IHNldHNtdGggPSAocGljdHVyZTogc3RyaW5nKSA9PiB7XG4gIC8vICAgICBpZiAoc3ViQnJlZWRzKSB7XG4gIC8vICAgICAgIGNvbnN0IGxpa2VkU3ViID0gWy4uLnN1YkJyZWVkc107XG4gIC8vICAgICAgIGNvbnN0IGdldExpa2VkU3ViQnJlZWQgPSBsaWtlZFN1Yi5maW5kKChzdWJCcmVlZE5hbWUpID0+IHN1YkJyZWVkTmFtZS5waWN0dXJlID09PSBwaWN0dXJlKTtcblxuICAvLyAgICAgICBpZiAoZ2V0TGlrZWRTdWJCcmVlZCkge1xuICAvLyAgICAgICAgIGdldExpa2VkU3ViQnJlZWQubGlrZWQgPSAhZ2V0TGlrZWRTdWJCcmVlZC5saWtlZDtcbiAgLy8gICAgICAgfVxuICAvLyAgICAgICBzZXRTdWJCcmVlZHMobGlrZWRTdWIpO1xuICAvLyAgICAgfVxuICAvLyAgIH07XG4gIC8vIH0pO1xuXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vICAgY29uc3QgZmF2b3VyaXRlRG9ncyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZmF2UGljXCIpO1xuICAvLyAgIGNvbnN0IHNhdmVkRG9ncyA9IEpTT04ucGFyc2UoZmF2b3VyaXRlRG9ncyk7XG4gIC8vICAgaWYgKHNhdmVkRG9ncykge1xuICAvLyAgICAgc2V0U3ViQnJlZWRzKHNhdmVkRG9ncyk7XG4gIC8vICAgfVxuICAvLyB9LCBbXSk7XG5cbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gICB2YXIgZmF2b3VyaXRlU3ViQnJlZWRQaWN0dXJlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImZhdlBpY1wiKSk7XG4gIC8vICAgaWYgKGZhdm91cml0ZVN1YkJyZWVkUGljdHVyZSA9PT0gbnVsbCkge1xuICAvLyAgICAgc2V0U3ViQnJlZWRzKGRvZ3MpO1xuICAvLyAgIH0gZWxzZSB7XG4gIC8vICAgICBmYXZvdXJpdGVTdWJCcmVlZFBpY3R1cmUgPSBmYXZvdXJpdGVTdWJCcmVlZFBpY3R1cmUuZmlsdGVyKChzdWJCcmVlZE5hbWU6IERvZykgPT4gc3ViQnJlZWROYW1lLnBpY3R1cmUgIT09IGRvZ3MucGljdHVyZSk7XG4gIC8vICAgfVxuICAvLyAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZmF2UGljXCIsIEpTT04uc3RyaW5naWZ5KGZhdm91cml0ZVN1YkJyZWVkUGljdHVyZSkpO1xuICAvLyAgIHNldFN1YkJyZWVkcyhkb2dzKTtcbiAgLy8gfSwgW10pO1xuXG4gIGNvbnN0IHNhdmVUb0xvY2FsU3RvcmFnZSA9IChpdGVtOiBhbnkpID0+IHtcbiAgICBsZXQgc3RvcmFnZUZhdlBpY3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZmF2UGljXCIpIHx8IFwibnVsbFwiKTtcbiAgICBpZiAoc3RvcmFnZUZhdlBpY3MgPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGZhdkRvZ3MgPSBbaXRlbV07XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImZhdlBpY1wiLCBKU09OLnN0cmluZ2lmeShmYXZEb2dzKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChpdGVtLmxpa2VkKSB7XG4gICAgICAgIHN0b3JhZ2VGYXZQaWNzLnB1c2goaXRlbSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdG9yYWdlRmF2UGljcyA9IHN0b3JhZ2VGYXZQaWNzLmZpbHRlcigoc3ViQnJlZWROYW1lOiBEb2cpID0+IHN1YkJyZWVkTmFtZS5waWN0dXJlICE9PSBpdGVtLnBpY3R1cmUpO1xuICAgICAgfVxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJmYXZQaWNcIiwgSlNPTi5zdHJpbmdpZnkoc3RvcmFnZUZhdlBpY3MpKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaXNMaWtlZCA9IChwaWN0dXJlOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBmYXZvdXJpdGVTdWJCcmVlZFBpY3R1cmUgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZmF2UGljXCIpIHx8IFwibnVsbFwiKTtcbiAgICB2YXIgbGlrZWREb2cgPSBudWxsO1xuICAgIGlmIChmYXZvdXJpdGVTdWJCcmVlZFBpY3R1cmUgIT09IG51bGwpIHtcbiAgICAgIGxpa2VkRG9nID0gZmF2b3VyaXRlU3ViQnJlZWRQaWN0dXJlLmZpbmQoKGRvZzogeyBwaWN0dXJlOiBzdHJpbmcgfSkgPT4gZG9nLnBpY3R1cmUgPT09IHBpY3R1cmUpO1xuICAgIH1cbiAgICByZXR1cm4gbGlrZWREb2cgJiYgbGlrZWREb2cubGlrZWQ7XG4gIH07XG5cbiAgY29uc3Qgc2V0RmF2b3VyaXRlSW1hZ2UgPSAocGljdHVyZTogc3RyaW5nKSA9PiB7XG4gICAgaWYgKHN1YkJyZWVkcykge1xuICAgICAgY29uc3QgbmV3U3ViQnJlZWRzID0gWy4uLnN1YkJyZWVkc107XG4gICAgICBjb25zdCBnZXRTdWJCcmVlZFBpY3R1cmUgPSBuZXdTdWJCcmVlZHMuZmluZCgoc3ViQnJlZWROYW1lKSA9PiBzdWJCcmVlZE5hbWUucGljdHVyZSA9PT0gcGljdHVyZSk7XG4gICAgICBjb25zb2xlLmxvZyhuZXdTdWJCcmVlZHMpO1xuICAgICAgaWYgKGdldFN1YkJyZWVkUGljdHVyZSkge1xuICAgICAgICBnZXRTdWJCcmVlZFBpY3R1cmUubGlrZWQgPSAhZ2V0U3ViQnJlZWRQaWN0dXJlLmxpa2VkO1xuICAgICAgfVxuICAgICAgc2V0U3ViQnJlZWRzKG5ld1N1YkJyZWVkcyk7XG4gICAgICBzYXZlVG9Mb2NhbFN0b3JhZ2UoZ2V0U3ViQnJlZWRQaWN0dXJlKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZ2V0U3ViQnJlZWROYW1lID0gKHBpY3R1cmU6IHN0cmluZykgPT4ge1xuICAgIHJldHVybiBgJHtwaWN0dXJlLnNwbGl0KFwiL1wiKVs0XX1gO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIHtzdWJCcmVlZHMubWFwKChzdWJCcmVlZE5hbWU6IERvZykgPT4gKFxuICAgICAgICA8ZGl2IGtleT17c3ViQnJlZWROYW1lLmlkfT5cbiAgICAgICAgICA8RG9nQ2FyZD5cbiAgICAgICAgICAgIDxEb2dJbWFnZSBzcmM9e3N1YkJyZWVkTmFtZS5waWN0dXJlfSAvPlxuICAgICAgICAgICAgPERvZ05hbWUgdGhlbWU9e3RoZW1lfT5cbiAgICAgICAgICAgICAge2dldFN1YkJyZWVkTmFtZShzdWJCcmVlZE5hbWUucGljdHVyZSl9XG4gICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gc2V0RmF2b3VyaXRlSW1hZ2Uoc3ViQnJlZWROYW1lLnBpY3R1cmUpfT57aXNMaWtlZChzdWJCcmVlZE5hbWUucGljdHVyZSkgPyA8UmVkSGVhcnQgLz4gOiA8R3JleUhlYXJ0IC8+fTwvQnV0dG9uPlxuICAgICAgICAgICAgPC9Eb2dOYW1lPlxuICAgICAgICAgIDwvRG9nQ2FyZD5cbiAgICAgICAgPC9kaXY+XG4gICAgICApKX1cbiAgICA8L0xheW91dD5cbiAgKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vZG9nLmNlby9hcGkvYnJlZWRzL2xpc3QvYWxsXCIpO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICBjb25zdCBwYXRocyA9IE9iamVjdC5rZXlzKGRhdGEubWVzc2FnZSkubWFwKChkb2dzKSA9PiAoe1xuICAgIHBhcmFtczogeyBkb2dOYW1lOiBkb2dzIH0sXG4gIH0pKTtcblxuICByZXR1cm4ge1xuICAgIHBhdGhzLFxuICAgIGZhbGxiYWNrOiBmYWxzZSxcbiAgfTtcbn1cblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzOiBHZXRTdGF0aWNQcm9wcyA9IGFzeW5jICh7IHBhcmFtcyB9KSA9PiB7XG4gIGNvbnN0IHsgZG9nTmFtZSB9OiBhbnkgPSBwYXJhbXM7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwczovL2RvZy5jZW8vYXBpL2JyZWVkLyR7ZG9nTmFtZX0vaW1hZ2VzYCk7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuXG4gIGNvbnN0IGRvZ3MgPSBkYXRhLm1lc3NhZ2UubWFwKChpdGVtczogRG9nKSA9PiB7XG4gICAgcmV0dXJuIHsgcGljdHVyZTogaXRlbXMsIGxpa2VkOiBmYWxzZSwgaWQ6IHY0KCkgfTtcbiAgfSk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczogeyBkb2dzLCBkb2dOYW1lIH0sXG4gIH07XG59O1xuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiUmVkSGVhcnQiLCJHcmV5SGVhcnQiLCJMYXlvdXQiLCJCdXR0b24iLCJEb2dDYXJkIiwiRG9nSW1hZ2UiLCJEb2dOYW1lIiwidGhlbWUiLCJEb2dQYWdlIiwiZG9ncyIsInN1YkJyZWVkcyIsInNldFN1YkJyZWVkcyIsInNhdmVUb0xvY2FsU3RvcmFnZSIsIml0ZW0iLCJzdG9yYWdlRmF2UGljcyIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJmYXZEb2dzIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsImxpa2VkIiwicHVzaCIsImZpbHRlciIsInN1YkJyZWVkTmFtZSIsInBpY3R1cmUiLCJpc0xpa2VkIiwiZmF2b3VyaXRlU3ViQnJlZWRQaWN0dXJlIiwibGlrZWREb2ciLCJmaW5kIiwiZG9nIiwic2V0RmF2b3VyaXRlSW1hZ2UiLCJuZXdTdWJCcmVlZHMiLCJnZXRTdWJCcmVlZFBpY3R1cmUiLCJjb25zb2xlIiwibG9nIiwiZ2V0U3ViQnJlZWROYW1lIiwic3BsaXQiLCJtYXAiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/subreeds/[dogName].tsx\n");

/***/ })

});