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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ DogPage; }\n/* harmony export */ });\n/* harmony import */ var _Users_andreiilisei_Coding_Practice_practiceProjShape_ShapeDogTest_ShapeDogTest_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Layout */ \"./src/components/Layout.tsx\");\n/* harmony import */ var _styles_DogCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/DogCard */ \"./src/styles/DogCard.ts\");\n/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/theme */ \"./src/styles/theme.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/andreiilisei/Coding Practice/practiceProjShape/ShapeDogTest/ShapeDogTest/src/pages/subreeds/[dogName].tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar __N_SSG = true;\nfunction DogPage(_ref) {\n  _s();\n\n  var _this = this;\n\n  var dogs = _ref.dogs;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),\n      subBreeds = _useState[0],\n      setSubBreeds = _useState[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    if (dogs) {\n      setSubBreeds(dogs);\n    }\n  }, []); // useEffect(() => {\n  //   var favouriteSubBreedPicture = JSON.parse(localStorage.getItem(\"favPic\"));\n  //   if (favouriteSubBreedPicture === null) {\n  //     setSubBreeds(dogs);\n  //   } else {\n  //     favouriteSubBreedPicture = favouriteSubBreedPicture.filter((subBreedName: Dog) => subBreedName.picture !== dogs.picture);\n  //   }\n  //   localStorage.setItem(\"favPic\", JSON.stringify(favouriteSubBreedPicture));\n  //   setSubBreeds(dogs);\n  // }, []);\n\n  var saveToLocalStorage = function saveToLocalStorage(item) {\n    var favouriteSubBreedPicture = JSON.parse(localStorage.getItem(\"favPic\") || \"null\");\n\n    if (favouriteSubBreedPicture === null) {\n      var favDogs = [item];\n      localStorage.setItem(\"favPic\", JSON.stringify(favDogs));\n    } else {\n      if (item.liked) {\n        favouriteSubBreedPicture.push(item);\n      } else {\n        favouriteSubBreedPicture = favouriteSubBreedPicture.filter(function (subBreedName) {\n          return subBreedName.picture !== item.picture;\n        });\n      }\n\n      localStorage.setItem(\"favPic\", JSON.stringify(favouriteSubBreedPicture));\n    }\n  };\n\n  var isLiked = function isLiked(picture) {\n    var favouriteSubBreedPicture = JSON.parse(localStorage.getItem(\"favPic\") || \"null\");\n    var likedDog = null;\n\n    if (favouriteSubBreedPicture !== null) {\n      likedDog = favouriteSubBreedPicture.find(function (dog) {\n        return dog.picture === picture;\n      });\n    }\n\n    return likedDog && likedDog.liked;\n  };\n\n  var setFavouriteImage = function setFavouriteImage(picture) {\n    if (subBreeds) {\n      var newSubBreeds = (0,_Users_andreiilisei_Coding_Practice_practiceProjShape_ShapeDogTest_ShapeDogTest_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(subBreeds);\n\n      var getSubBreedPicture = newSubBreeds.find(function (subBreedName) {\n        return subBreedName.picture === picture;\n      });\n\n      if (getSubBreedPicture) {\n        getSubBreedPicture.liked = !getSubBreedPicture.liked;\n      }\n\n      setSubBreeds(newSubBreeds);\n      saveToLocalStorage(getSubBreedPicture);\n    }\n  };\n\n  var getSubBreedName = function getSubBreedName(picture) {\n    return \"\".concat(picture.split(\"/\")[4]);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    children: subBreeds.map(function (subBreedName) {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_styles_DogCard__WEBPACK_IMPORTED_MODULE_3__.DogCard, {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_styles_DogCard__WEBPACK_IMPORTED_MODULE_3__.DogImage, {\n            src: subBreedName.picture\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 75,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_styles_DogCard__WEBPACK_IMPORTED_MODULE_3__.Button, {\n            onClick: function onClick() {\n              return setFavouriteImage(subBreedName.picture);\n            },\n            children: isLiked(subBreedName.picture) ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"svg\", {\n              width: \"1em\",\n              height: \"1em\",\n              viewBox: \"0 0 16 16\",\n              className: \"bi bi-heart-fill\",\n              fill: \"red\",\n              xmlns: \"http://www.w3.org/2000/svg\",\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"path\", {\n                \"fill-rule\": \"evenodd\",\n                d: \"M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 79,\n                columnNumber: 21\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 78,\n              columnNumber: 19\n            }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"svg\", {\n              width: \"1em\",\n              height: \"1em\",\n              viewBox: \"0 0 16 16\",\n              className: \"bi bi-heart-fill\",\n              fill: \"grey\",\n              xmlns: \"http://www.w3.org/2000/svg\",\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"path\", {\n                \"fill-rule\": \"evenodd\",\n                d: \"M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 83,\n                columnNumber: 21\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 82,\n              columnNumber: 19\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 76,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_styles_DogCard__WEBPACK_IMPORTED_MODULE_3__.DogName, {\n            theme: _styles_theme__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n            children: getSubBreedName(subBreedName.picture)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 87,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 74,\n          columnNumber: 11\n        }, _this)\n      }, subBreedName.id, false, {\n        fileName: _jsxFileName,\n        lineNumber: 73,\n        columnNumber: 9\n      }, _this);\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 71,\n    columnNumber: 5\n  }, this);\n}\n\n_s(DogPage, \"I0QQmTI/R864TCKq4sOKzxPaUKo=\");\n\n_c = DogPage;\n\nvar _c;\n\n$RefreshReg$(_c, \"DogPage\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFNBQWhCO0FBQTBCLGlCQUFDLEVBQUM7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFOTjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGLGVBYUUsOERBQUMsb0RBQUQ7QUFBUyxpQkFBSyxFQUFFbkIscURBQWhCO0FBQUEsc0JBQ0cyQixlQUFlLENBQUNULFlBQVksQ0FBQ0MsT0FBZDtBQURsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLFNBQVVELFlBQVksQ0FBQ1ksRUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURhO0FBQUEsS0FBZDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQTBCRDs7R0F2RnVCN0I7O0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9zdWJyZWVkcy9bZG9nTmFtZV0udHN4Pzc5YzIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2V0U3RhdGljUHJvcHMgfSBmcm9tIFwibmV4dC90eXBlc1wiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdjQgfSBmcm9tIFwidXVpZFwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcbmltcG9ydCB7IEJ1dHRvbiwgRG9nQ2FyZCwgRG9nSW1hZ2UsIERvZ05hbWUgfSBmcm9tIFwiLi4vLi4vc3R5bGVzL0RvZ0NhcmRcIjtcbmltcG9ydCB0aGVtZSBmcm9tIFwiLi4vLi4vc3R5bGVzL3RoZW1lXCI7XG5pbXBvcnQgeyBEb2cgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRG9nUGFnZSh7IGRvZ3MgfTogYW55KSB7XG4gIGNvbnN0IFtzdWJCcmVlZHMsIHNldFN1YkJyZWVkc10gPSB1c2VTdGF0ZTxEb2dbXT4oW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGRvZ3MpIHtcbiAgICAgIHNldFN1YkJyZWVkcyhkb2dzKTtcbiAgICB9XG4gIH0sIFtdKTtcblxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgIHZhciBmYXZvdXJpdGVTdWJCcmVlZFBpY3R1cmUgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZmF2UGljXCIpKTtcbiAgLy8gICBpZiAoZmF2b3VyaXRlU3ViQnJlZWRQaWN0dXJlID09PSBudWxsKSB7XG4gIC8vICAgICBzZXRTdWJCcmVlZHMoZG9ncyk7XG4gIC8vICAgfSBlbHNlIHtcbiAgLy8gICAgIGZhdm91cml0ZVN1YkJyZWVkUGljdHVyZSA9IGZhdm91cml0ZVN1YkJyZWVkUGljdHVyZS5maWx0ZXIoKHN1YkJyZWVkTmFtZTogRG9nKSA9PiBzdWJCcmVlZE5hbWUucGljdHVyZSAhPT0gZG9ncy5waWN0dXJlKTtcbiAgLy8gICB9XG4gIC8vICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJmYXZQaWNcIiwgSlNPTi5zdHJpbmdpZnkoZmF2b3VyaXRlU3ViQnJlZWRQaWN0dXJlKSk7XG4gIC8vICAgc2V0U3ViQnJlZWRzKGRvZ3MpO1xuICAvLyB9LCBbXSk7XG5cbiAgY29uc3Qgc2F2ZVRvTG9jYWxTdG9yYWdlID0gKGl0ZW06IGFueSkgPT4ge1xuICAgIHZhciBmYXZvdXJpdGVTdWJCcmVlZFBpY3R1cmUgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZmF2UGljXCIpIHx8IFwibnVsbFwiKTtcbiAgICBpZiAoZmF2b3VyaXRlU3ViQnJlZWRQaWN0dXJlID09PSBudWxsKSB7XG4gICAgICBjb25zdCBmYXZEb2dzID0gW2l0ZW1dO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJmYXZQaWNcIiwgSlNPTi5zdHJpbmdpZnkoZmF2RG9ncykpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoaXRlbS5saWtlZCkge1xuICAgICAgICBmYXZvdXJpdGVTdWJCcmVlZFBpY3R1cmUucHVzaChpdGVtKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZhdm91cml0ZVN1YkJyZWVkUGljdHVyZSA9IGZhdm91cml0ZVN1YkJyZWVkUGljdHVyZS5maWx0ZXIoKHN1YkJyZWVkTmFtZTogRG9nKSA9PiBzdWJCcmVlZE5hbWUucGljdHVyZSAhPT0gaXRlbS5waWN0dXJlKTtcbiAgICAgIH1cbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZmF2UGljXCIsIEpTT04uc3RyaW5naWZ5KGZhdm91cml0ZVN1YkJyZWVkUGljdHVyZSkpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBpc0xpa2VkID0gKHBpY3R1cmU6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IGZhdm91cml0ZVN1YkJyZWVkUGljdHVyZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJmYXZQaWNcIikgfHwgXCJudWxsXCIpO1xuICAgIHZhciBsaWtlZERvZyA9IG51bGw7XG4gICAgaWYgKGZhdm91cml0ZVN1YkJyZWVkUGljdHVyZSAhPT0gbnVsbCkge1xuICAgICAgbGlrZWREb2cgPSBmYXZvdXJpdGVTdWJCcmVlZFBpY3R1cmUuZmluZCgoZG9nOiB7IHBpY3R1cmU6IHN0cmluZyB9KSA9PiBkb2cucGljdHVyZSA9PT0gcGljdHVyZSk7XG4gICAgfVxuICAgIHJldHVybiBsaWtlZERvZyAmJiBsaWtlZERvZy5saWtlZDtcbiAgfTtcblxuICBjb25zdCBzZXRGYXZvdXJpdGVJbWFnZSA9IChwaWN0dXJlOiBzdHJpbmcpID0+IHtcbiAgICBpZiAoc3ViQnJlZWRzKSB7XG4gICAgICBjb25zdCBuZXdTdWJCcmVlZHMgPSBbLi4uc3ViQnJlZWRzXTtcbiAgICAgIGNvbnN0IGdldFN1YkJyZWVkUGljdHVyZSA9IG5ld1N1YkJyZWVkcy5maW5kKChzdWJCcmVlZE5hbWUpID0+IHN1YkJyZWVkTmFtZS5waWN0dXJlID09PSBwaWN0dXJlKTtcblxuICAgICAgaWYgKGdldFN1YkJyZWVkUGljdHVyZSkge1xuICAgICAgICBnZXRTdWJCcmVlZFBpY3R1cmUubGlrZWQgPSAhZ2V0U3ViQnJlZWRQaWN0dXJlLmxpa2VkO1xuICAgICAgfVxuICAgICAgc2V0U3ViQnJlZWRzKG5ld1N1YkJyZWVkcyk7XG4gICAgICBzYXZlVG9Mb2NhbFN0b3JhZ2UoZ2V0U3ViQnJlZWRQaWN0dXJlKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZ2V0U3ViQnJlZWROYW1lID0gKHBpY3R1cmU6IHN0cmluZykgPT4ge1xuICAgIHJldHVybiBgJHtwaWN0dXJlLnNwbGl0KFwiL1wiKVs0XX1gO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIHtzdWJCcmVlZHMubWFwKChzdWJCcmVlZE5hbWU6IERvZykgPT4gKFxuICAgICAgICA8ZGl2IGtleT17c3ViQnJlZWROYW1lLmlkfT5cbiAgICAgICAgICA8RG9nQ2FyZD5cbiAgICAgICAgICAgIDxEb2dJbWFnZSBzcmM9e3N1YkJyZWVkTmFtZS5waWN0dXJlfSAvPlxuICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRGYXZvdXJpdGVJbWFnZShzdWJCcmVlZE5hbWUucGljdHVyZSl9PlxuICAgICAgICAgICAgICAgIHtpc0xpa2VkKHN1YkJyZWVkTmFtZS5waWN0dXJlKSA/IChcbiAgICAgICAgICAgICAgICAgIDxzdmcgd2lkdGg9XCIxZW1cIiBoZWlnaHQ9XCIxZW1cIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCIgY2xhc3NOYW1lPVwiYmkgYmktaGVhcnQtZmlsbFwiIGZpbGw9XCJyZWRcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTggMS4zMTRDMTIuNDM4LTMuMjQ4IDIzLjUzNCA0LjczNSA4IDE1LTcuNTM0IDQuNzM2IDMuNTYyLTMuMjQ4IDggMS4zMTR6XCIgLz5cbiAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICA8c3ZnIHdpZHRoPVwiMWVtXCIgaGVpZ2h0PVwiMWVtXCIgdmlld0JveD1cIjAgMCAxNiAxNlwiIGNsYXNzTmFtZT1cImJpIGJpLWhlYXJ0LWZpbGxcIiBmaWxsPVwiZ3JleVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNOCAxLjMxNEMxMi40MzgtMy4yNDggMjMuNTM0IDQuNzM1IDggMTUtNy41MzQgNC43MzYgMy41NjItMy4yNDggOCAxLjMxNHpcIiAvPlxuICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8RG9nTmFtZSB0aGVtZT17dGhlbWV9PlxuICAgICAgICAgICAgICB7Z2V0U3ViQnJlZWROYW1lKHN1YkJyZWVkTmFtZS5waWN0dXJlKX1cbiAgICAgICAgICAgIDwvRG9nTmFtZT5cbiAgICAgICAgICAgIHsvKiA8QWRkRmF2b3VyaXRlIG9uQ2xpY2s9eygpID0+IHNldEZhdm91cml0ZUltYWdlKHN1YkJyZWVkTmFtZS5waWN0dXJlKX0gLz4gKi99XG4gICAgICAgICAgPC9Eb2dDYXJkPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkpfVxuICAgIDwvTGF5b3V0PlxuICApO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9kb2cuY2VvL2FwaS9icmVlZHMvbGlzdC9hbGxcIik7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuXG4gIGNvbnN0IHBhdGhzID0gT2JqZWN0LmtleXMoZGF0YS5tZXNzYWdlKS5tYXAoKGRvZ3MpID0+ICh7XG4gICAgcGFyYW1zOiB7IGRvZ05hbWU6IGRvZ3MgfSxcbiAgfSkpO1xuXG4gIHJldHVybiB7XG4gICAgcGF0aHMsXG4gICAgZmFsbGJhY2s6IGZhbHNlLFxuICB9O1xufVxuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHM6IEdldFN0YXRpY1Byb3BzID0gYXN5bmMgKHsgcGFyYW1zIH0pID0+IHtcbiAgY29uc3QgeyBkb2dOYW1lIH06IGFueSA9IHBhcmFtcztcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vZG9nLmNlby9hcGkvYnJlZWQvJHtkb2dOYW1lfS9pbWFnZXNgKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgY29uc3QgZG9ncyA9IGRhdGEubWVzc2FnZS5tYXAoKGl0ZW1zOiBEb2cpID0+IHtcbiAgICByZXR1cm4geyBwaWN0dXJlOiBpdGVtcywgbGlrZWQ6IGZhbHNlLCBpZDogdjQoKSB9O1xuICB9KTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7IGRvZ3MsIGRvZ05hbWUgfSxcbiAgfTtcbn07XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJMYXlvdXQiLCJCdXR0b24iLCJEb2dDYXJkIiwiRG9nSW1hZ2UiLCJEb2dOYW1lIiwidGhlbWUiLCJEb2dQYWdlIiwiZG9ncyIsInN1YkJyZWVkcyIsInNldFN1YkJyZWVkcyIsInNhdmVUb0xvY2FsU3RvcmFnZSIsIml0ZW0iLCJmYXZvdXJpdGVTdWJCcmVlZFBpY3R1cmUiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZmF2RG9ncyIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJsaWtlZCIsInB1c2giLCJmaWx0ZXIiLCJzdWJCcmVlZE5hbWUiLCJwaWN0dXJlIiwiaXNMaWtlZCIsImxpa2VkRG9nIiwiZmluZCIsImRvZyIsInNldEZhdm91cml0ZUltYWdlIiwibmV3U3ViQnJlZWRzIiwiZ2V0U3ViQnJlZWRQaWN0dXJlIiwiZ2V0U3ViQnJlZWROYW1lIiwic3BsaXQiLCJtYXAiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/subreeds/[dogName].tsx\n");

/***/ })

});