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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ DogPage; }\n/* harmony export */ });\n/* harmony import */ var _Users_andreiilisei_Coding_Practice_practiceProjShape_ShapeDogTest_ShapeDogTest_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_greyHeart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/greyHeart */ \"./src/components/greyHeart.tsx\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Layout */ \"./src/components/Layout.tsx\");\n/* harmony import */ var _components_redHeart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/redHeart */ \"./src/components/redHeart.tsx\");\n/* harmony import */ var _styles_DogCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/DogCard */ \"./src/styles/DogCard.ts\");\n/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../styles/theme */ \"./src/styles/theme.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/andreiilisei/Coding Practice/practiceProjShape/ShapeDogTest/ShapeDogTest/src/pages/subreeds/[dogName].tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar __N_SSG = true;\nfunction DogPage(_ref) {\n  _s();\n\n  var _this = this;\n\n  var dogs = _ref.dogs;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),\n      subBreeds = _useState[0],\n      setSubBreeds = _useState[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    var favouriteDogs = localStorage.getItem(\"favPic\");\n    var savedDogs = JSON.parse(favouriteDogs);\n\n    if (savedDogs) {\n      setSubBreeds(savedDogs);\n    }\n  }, []);\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    if (dogs) {\n      setSubBreeds(dogs);\n    }\n  }, []); // useEffect(() => {\n  //   var favouriteSubBreedPicture = JSON.parse(localStorage.getItem(\"favPic\"));\n  //   if (favouriteSubBreedPicture === null) {\n  //     setSubBreeds(dogs);\n  //   } else {\n  //     favouriteSubBreedPicture = favouriteSubBreedPicture.filter((subBreedName: Dog) => subBreedName.picture !== dogs.picture);\n  //   }\n  //   localStorage.setItem(\"favPic\", JSON.stringify(favouriteSubBreedPicture));\n  //   setSubBreeds(dogs);\n  // }, []);\n\n  var saveToLocalStorage = function saveToLocalStorage(item) {\n    var favouriteSubBreedPicture = JSON.parse(localStorage.getItem(\"favPic\") || \"null\");\n\n    if (favouriteSubBreedPicture === null) {\n      var favDogs = [item];\n      localStorage.setItem(\"favPic\", JSON.stringify(favDogs));\n    } else {\n      if (item.liked) {\n        favouriteSubBreedPicture.push(item);\n      } else {\n        favouriteSubBreedPicture = favouriteSubBreedPicture.filter(function (subBreedName) {\n          return subBreedName.picture !== item.picture;\n        });\n      }\n\n      localStorage.setItem(\"favPic\", JSON.stringify(favouriteSubBreedPicture));\n    }\n  };\n\n  var isLiked = function isLiked(picture) {\n    var favouriteSubBreedPicture = JSON.parse(localStorage.getItem(\"favPic\") || \"null\");\n    var likedDog = null;\n\n    if (favouriteSubBreedPicture !== null) {\n      likedDog = favouriteSubBreedPicture.find(function (dog) {\n        return dog.picture === picture;\n      });\n    }\n\n    return likedDog && likedDog.liked;\n  };\n\n  var setFavouriteImage = function setFavouriteImage(picture) {\n    if (subBreeds) {\n      var newSubBreeds = (0,_Users_andreiilisei_Coding_Practice_practiceProjShape_ShapeDogTest_ShapeDogTest_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(subBreeds);\n\n      var getSubBreedPicture = newSubBreeds.find(function (subBreedName) {\n        return subBreedName.picture === picture;\n      });\n\n      if (getSubBreedPicture) {\n        getSubBreedPicture.liked = !getSubBreedPicture.liked;\n      }\n\n      setSubBreeds(newSubBreeds);\n      saveToLocalStorage(getSubBreedPicture);\n    }\n  };\n\n  var getSubBreedName = function getSubBreedName(picture) {\n    return \"\".concat(picture.split(\"/\")[4]);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    children: subBreeds.map(function (subBreedName) {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_styles_DogCard__WEBPACK_IMPORTED_MODULE_5__.DogCard, {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_styles_DogCard__WEBPACK_IMPORTED_MODULE_5__.DogImage, {\n            src: subBreedName.picture\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 87,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_styles_DogCard__WEBPACK_IMPORTED_MODULE_5__.DogName, {\n            theme: _styles_theme__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n            children: [getSubBreedName(subBreedName.picture), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_styles_DogCard__WEBPACK_IMPORTED_MODULE_5__.Button, {\n              onClick: function onClick() {\n                return setFavouriteImage(subBreedName.picture);\n              },\n              children: isLiked(subBreedName.picture) ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_redHeart__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 90,\n                columnNumber: 112\n              }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_greyHeart__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 90,\n                columnNumber: 127\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 90,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 88,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 86,\n          columnNumber: 11\n        }, _this)\n      }, subBreedName.id, false, {\n        fileName: _jsxFileName,\n        lineNumber: 85,\n        columnNumber: 9\n      }, _this);\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 83,\n    columnNumber: 5\n  }, this);\n}\n\n_s(DogPage, \"jLo8HlfobKpqtmI+OydAUXg0S6k=\");\n\n_c = DogPage;\n\nvar _c;\n\n$RefreshReg$(_c, \"DogPage\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUFoSDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixTQUFVRCxZQUFZLENBQUNZLEVBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEYTtBQUFBLEtBQWQ7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFlRDs7R0F0RnVCL0I7O0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9zdWJyZWVkcy9bZG9nTmFtZV0udHN4Pzc5YzIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2V0U3RhdGljUHJvcHMgfSBmcm9tIFwibmV4dC90eXBlc1wiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdjQgfSBmcm9tIFwidXVpZFwiO1xuaW1wb3J0IEdyZXlIZWFydCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9ncmV5SGVhcnRcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgUmVkSGVhcnQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcmVkSGVhcnRcIjtcbmltcG9ydCB7IEJ1dHRvbiwgRG9nQ2FyZCwgRG9nSW1hZ2UsIERvZ05hbWUgfSBmcm9tIFwiLi4vLi4vc3R5bGVzL0RvZ0NhcmRcIjtcbmltcG9ydCB0aGVtZSBmcm9tIFwiLi4vLi4vc3R5bGVzL3RoZW1lXCI7XG5pbXBvcnQgeyBEb2cgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRG9nUGFnZSh7IGRvZ3MgfTogYW55KSB7XG4gIGNvbnN0IFtzdWJCcmVlZHMsIHNldFN1YkJyZWVkc10gPSB1c2VTdGF0ZTxEb2dbXT4oW10pO1xuXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBmYXZvdXJpdGVEb2dzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJmYXZQaWNcIik7XG4gICAgY29uc3Qgc2F2ZWREb2dzID0gSlNPTi5wYXJzZShmYXZvdXJpdGVEb2dzKTtcbiAgICBpZiAoc2F2ZWREb2dzKSB7XG4gICAgICBzZXRTdWJCcmVlZHMoc2F2ZWREb2dzKTtcbiAgICB9XG4gIH0sIFtdKTtcblxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGRvZ3MpIHtcbiAgICAgIHNldFN1YkJyZWVkcyhkb2dzKTtcbiAgICB9XG4gIH0sIFtdKTtcblxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgIHZhciBmYXZvdXJpdGVTdWJCcmVlZFBpY3R1cmUgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZmF2UGljXCIpKTtcbiAgLy8gICBpZiAoZmF2b3VyaXRlU3ViQnJlZWRQaWN0dXJlID09PSBudWxsKSB7XG4gIC8vICAgICBzZXRTdWJCcmVlZHMoZG9ncyk7XG4gIC8vICAgfSBlbHNlIHtcbiAgLy8gICAgIGZhdm91cml0ZVN1YkJyZWVkUGljdHVyZSA9IGZhdm91cml0ZVN1YkJyZWVkUGljdHVyZS5maWx0ZXIoKHN1YkJyZWVkTmFtZTogRG9nKSA9PiBzdWJCcmVlZE5hbWUucGljdHVyZSAhPT0gZG9ncy5waWN0dXJlKTtcbiAgLy8gICB9XG4gIC8vICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJmYXZQaWNcIiwgSlNPTi5zdHJpbmdpZnkoZmF2b3VyaXRlU3ViQnJlZWRQaWN0dXJlKSk7XG4gIC8vICAgc2V0U3ViQnJlZWRzKGRvZ3MpO1xuICAvLyB9LCBbXSk7XG5cbiAgY29uc3Qgc2F2ZVRvTG9jYWxTdG9yYWdlID0gKGl0ZW06IGFueSkgPT4ge1xuICAgIHZhciBmYXZvdXJpdGVTdWJCcmVlZFBpY3R1cmUgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZmF2UGljXCIpIHx8IFwibnVsbFwiKTtcbiAgICBpZiAoZmF2b3VyaXRlU3ViQnJlZWRQaWN0dXJlID09PSBudWxsKSB7XG4gICAgICBjb25zdCBmYXZEb2dzID0gW2l0ZW1dO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJmYXZQaWNcIiwgSlNPTi5zdHJpbmdpZnkoZmF2RG9ncykpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoaXRlbS5saWtlZCkge1xuICAgICAgICBmYXZvdXJpdGVTdWJCcmVlZFBpY3R1cmUucHVzaChpdGVtKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZhdm91cml0ZVN1YkJyZWVkUGljdHVyZSA9IGZhdm91cml0ZVN1YkJyZWVkUGljdHVyZS5maWx0ZXIoKHN1YkJyZWVkTmFtZTogRG9nKSA9PiBzdWJCcmVlZE5hbWUucGljdHVyZSAhPT0gaXRlbS5waWN0dXJlKTtcbiAgICAgIH1cbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZmF2UGljXCIsIEpTT04uc3RyaW5naWZ5KGZhdm91cml0ZVN1YkJyZWVkUGljdHVyZSkpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBpc0xpa2VkID0gKHBpY3R1cmU6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IGZhdm91cml0ZVN1YkJyZWVkUGljdHVyZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJmYXZQaWNcIikgfHwgXCJudWxsXCIpO1xuICAgIHZhciBsaWtlZERvZyA9IG51bGw7XG4gICAgaWYgKGZhdm91cml0ZVN1YkJyZWVkUGljdHVyZSAhPT0gbnVsbCkge1xuICAgICAgbGlrZWREb2cgPSBmYXZvdXJpdGVTdWJCcmVlZFBpY3R1cmUuZmluZCgoZG9nOiB7IHBpY3R1cmU6IHN0cmluZyB9KSA9PiBkb2cucGljdHVyZSA9PT0gcGljdHVyZSk7XG4gICAgfVxuICAgIHJldHVybiBsaWtlZERvZyAmJiBsaWtlZERvZy5saWtlZDtcbiAgfTtcblxuICBjb25zdCBzZXRGYXZvdXJpdGVJbWFnZSA9IChwaWN0dXJlOiBzdHJpbmcpID0+IHtcbiAgICBpZiAoc3ViQnJlZWRzKSB7XG4gICAgICBjb25zdCBuZXdTdWJCcmVlZHMgPSBbLi4uc3ViQnJlZWRzXTtcbiAgICAgIGNvbnN0IGdldFN1YkJyZWVkUGljdHVyZSA9IG5ld1N1YkJyZWVkcy5maW5kKChzdWJCcmVlZE5hbWUpID0+IHN1YkJyZWVkTmFtZS5waWN0dXJlID09PSBwaWN0dXJlKTtcblxuICAgICAgaWYgKGdldFN1YkJyZWVkUGljdHVyZSkge1xuICAgICAgICBnZXRTdWJCcmVlZFBpY3R1cmUubGlrZWQgPSAhZ2V0U3ViQnJlZWRQaWN0dXJlLmxpa2VkO1xuICAgICAgfVxuICAgICAgc2V0U3ViQnJlZWRzKG5ld1N1YkJyZWVkcyk7XG4gICAgICBzYXZlVG9Mb2NhbFN0b3JhZ2UoZ2V0U3ViQnJlZWRQaWN0dXJlKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZ2V0U3ViQnJlZWROYW1lID0gKHBpY3R1cmU6IHN0cmluZykgPT4ge1xuICAgIHJldHVybiBgJHtwaWN0dXJlLnNwbGl0KFwiL1wiKVs0XX1gO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIHtzdWJCcmVlZHMubWFwKChzdWJCcmVlZE5hbWU6IERvZykgPT4gKFxuICAgICAgICA8ZGl2IGtleT17c3ViQnJlZWROYW1lLmlkfT5cbiAgICAgICAgICA8RG9nQ2FyZD5cbiAgICAgICAgICAgIDxEb2dJbWFnZSBzcmM9e3N1YkJyZWVkTmFtZS5waWN0dXJlfSAvPlxuICAgICAgICAgICAgPERvZ05hbWUgdGhlbWU9e3RoZW1lfT5cbiAgICAgICAgICAgICAge2dldFN1YkJyZWVkTmFtZShzdWJCcmVlZE5hbWUucGljdHVyZSl9XG4gICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gc2V0RmF2b3VyaXRlSW1hZ2Uoc3ViQnJlZWROYW1lLnBpY3R1cmUpfT57aXNMaWtlZChzdWJCcmVlZE5hbWUucGljdHVyZSkgPyA8UmVkSGVhcnQgLz4gOiA8R3JleUhlYXJ0IC8+fTwvQnV0dG9uPlxuICAgICAgICAgICAgPC9Eb2dOYW1lPlxuICAgICAgICAgIDwvRG9nQ2FyZD5cbiAgICAgICAgPC9kaXY+XG4gICAgICApKX1cbiAgICA8L0xheW91dD5cbiAgKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vZG9nLmNlby9hcGkvYnJlZWRzL2xpc3QvYWxsXCIpO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICBjb25zdCBwYXRocyA9IE9iamVjdC5rZXlzKGRhdGEubWVzc2FnZSkubWFwKChkb2dzKSA9PiAoe1xuICAgIHBhcmFtczogeyBkb2dOYW1lOiBkb2dzIH0sXG4gIH0pKTtcblxuICByZXR1cm4ge1xuICAgIHBhdGhzLFxuICAgIGZhbGxiYWNrOiBmYWxzZSxcbiAgfTtcbn1cblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzOiBHZXRTdGF0aWNQcm9wcyA9IGFzeW5jICh7IHBhcmFtcyB9KSA9PiB7XG4gIGNvbnN0IHsgZG9nTmFtZSB9OiBhbnkgPSBwYXJhbXM7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwczovL2RvZy5jZW8vYXBpL2JyZWVkLyR7ZG9nTmFtZX0vaW1hZ2VzYCk7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuXG4gIGNvbnN0IGRvZ3MgPSBkYXRhLm1lc3NhZ2UubWFwKChpdGVtczogRG9nKSA9PiB7XG4gICAgcmV0dXJuIHsgcGljdHVyZTogaXRlbXMsIGxpa2VkOiBmYWxzZSwgaWQ6IHY0KCkgfTtcbiAgfSk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczogeyBkb2dzLCBkb2dOYW1lIH0sXG4gIH07XG59O1xuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiR3JleUhlYXJ0IiwiTGF5b3V0IiwiUmVkSGVhcnQiLCJCdXR0b24iLCJEb2dDYXJkIiwiRG9nSW1hZ2UiLCJEb2dOYW1lIiwidGhlbWUiLCJEb2dQYWdlIiwiZG9ncyIsInN1YkJyZWVkcyIsInNldFN1YkJyZWVkcyIsImZhdm91cml0ZURvZ3MiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic2F2ZWREb2dzIiwiSlNPTiIsInBhcnNlIiwic2F2ZVRvTG9jYWxTdG9yYWdlIiwiaXRlbSIsImZhdm91cml0ZVN1YkJyZWVkUGljdHVyZSIsImZhdkRvZ3MiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwibGlrZWQiLCJwdXNoIiwiZmlsdGVyIiwic3ViQnJlZWROYW1lIiwicGljdHVyZSIsImlzTGlrZWQiLCJsaWtlZERvZyIsImZpbmQiLCJkb2ciLCJzZXRGYXZvdXJpdGVJbWFnZSIsIm5ld1N1YkJyZWVkcyIsImdldFN1YkJyZWVkUGljdHVyZSIsImdldFN1YkJyZWVkTmFtZSIsInNwbGl0IiwibWFwIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/subreeds/[dogName].tsx\n");

/***/ })

});