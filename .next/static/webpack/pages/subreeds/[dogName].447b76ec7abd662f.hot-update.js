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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ DogPage; }\n/* harmony export */ });\n/* harmony import */ var _Users_andreiilisei_Coding_Practice_practiceProjShape_ShapeDogTest_ShapeDogTest_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _helpers_redHeart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/redHeart */ \"./src/helpers/redHeart.tsx\");\n/* harmony import */ var _helpers_greyHeart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/greyHeart */ \"./src/helpers/greyHeart.tsx\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Layout */ \"./src/components/Layout.tsx\");\n/* harmony import */ var _styles_DogCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/DogCard */ \"./src/styles/DogCard.ts\");\n/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../styles/theme */ \"./src/styles/theme.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/andreiilisei/Coding Practice/practiceProjShape/ShapeDogTest/ShapeDogTest/src/pages/subreeds/[dogName].tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar __N_SSG = true;\nfunction DogPage(_ref) {\n  _s();\n\n  var _this = this;\n\n  var dogs = _ref.dogs;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),\n      subBreeds = _useState[0],\n      setSubBreeds = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(),\n      localStorageFavPics = _useState2[0],\n      setLocalStorageFavPics = _useState2[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    if (localStorageFavPics === undefined && subBreeds.length > 0) {\n      var storageDogs = JSON.parse(localStorage.getItem(\"favPic\") || \"null\");\n      setLocalStorageFavPics(storageDogs);\n\n      if (storageDogs) {\n        var newDogs = (0,_Users_andreiilisei_Coding_Practice_practiceProjShape_ShapeDogTest_ShapeDogTest_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(subBreeds);\n\n        storageDogs.forEach(function (dog) {\n          var newDog = newDogs.find(function (d) {\n            return d.picture === dog.picture;\n          });\n\n          if (newDog) {\n            newDog.liked = true;\n          }\n        });\n        setSubBreeds(newDogs);\n      }\n    }\n  }, [subBreeds]);\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    if (dogs) {\n      setSubBreeds(dogs);\n    }\n  }, []);\n\n  var updateLocalStorage = function updateLocalStorage(item) {\n    var storageFavPics = JSON.parse(localStorage.getItem(\"favPic\") || \"null\");\n    var updatedStorageFavPics;\n\n    if (storageFavPics === null) {\n      var favDogs = [item];\n      localStorage.setItem(\"favPic\", JSON.stringify(favDogs));\n    } else {\n      if (item.liked) {\n        var filteredPictures = (0,_Users_andreiilisei_Coding_Practice_practiceProjShape_ShapeDogTest_ShapeDogTest_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(storageFavPics).filter(function (dog) {\n          return dog.picture !== item.picture;\n        });\n\n        updatedStorageFavPics = [].concat((0,_Users_andreiilisei_Coding_Practice_practiceProjShape_ShapeDogTest_ShapeDogTest_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(filteredPictures), [item]);\n      } else {\n        var _filteredPictures = (0,_Users_andreiilisei_Coding_Practice_practiceProjShape_ShapeDogTest_ShapeDogTest_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(storageFavPics).filter(function (dog) {\n          return dog.picture !== item.picture;\n        });\n\n        updatedStorageFavPics = (0,_Users_andreiilisei_Coding_Practice_practiceProjShape_ShapeDogTest_ShapeDogTest_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_filteredPictures);\n      }\n\n      localStorage.removeItem(\"favPic\");\n      localStorage.setItem(\"favPic\", JSON.stringify(updatedStorageFavPics));\n    }\n  };\n\n  var setFavouriteImage = function setFavouriteImage(picture) {\n    if (subBreeds) {\n      var newSubBreeds = (0,_Users_andreiilisei_Coding_Practice_practiceProjShape_ShapeDogTest_ShapeDogTest_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(subBreeds);\n\n      var getSubBreedPicture = newSubBreeds.find(function (subBreedName) {\n        return subBreedName.picture === picture;\n      });\n      console.log(newSubBreeds);\n\n      if (getSubBreedPicture) {\n        getSubBreedPicture.liked = !getSubBreedPicture.liked;\n      }\n\n      setSubBreeds(newSubBreeds);\n      updateLocalStorage(getSubBreedPicture);\n    }\n  };\n\n  var getSubBreedName = function getSubBreedName(picture) {\n    return \"\".concat(picture.split(\"/\")[4]);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    children: subBreeds.map(function (subBreedName) {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_styles_DogCard__WEBPACK_IMPORTED_MODULE_5__.DogCard, {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_styles_DogCard__WEBPACK_IMPORTED_MODULE_5__.DogImage, {\n            src: subBreedName.picture\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 87,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_styles_DogCard__WEBPACK_IMPORTED_MODULE_5__.DogName, {\n            theme: _styles_theme__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n            children: [getSubBreedName(subBreedName.picture), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_styles_DogCard__WEBPACK_IMPORTED_MODULE_5__.Button, {\n              onClick: function onClick() {\n                return setFavouriteImage(subBreedName.picture);\n              },\n              children: subBreedName.liked ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_helpers_redHeart__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 90,\n                columnNumber: 101\n              }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_helpers_greyHeart__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 90,\n                columnNumber: 116\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 90,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 88,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 86,\n          columnNumber: 11\n        }, _this)\n      }, subBreedName.id, false, {\n        fileName: _jsxFileName,\n        lineNumber: 85,\n        columnNumber: 9\n      }, _this);\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 83,\n    columnNumber: 5\n  }, this);\n}\n\n_s(DogPage, \"XubJhMOKufQMRQVYepBPqD4T3UM=\");\n\n_c = DogPage;\n\nvar _c;\n\n$RefreshReg$(_c, \"DogPage\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bUJBREYsZUFFRSw4REFBQyxvREFBRDtBQUFTLGlCQUFLLEVBQUVwQixxREFBaEI7QUFBQSx1QkFDR3NDLGVBQWUsQ0FBQ0gsWUFBWSxDQUFDZixPQUFkLENBRGxCLGVBRUUsOERBQUMsbURBQUQ7QUFBUSxxQkFBTyxFQUFFO0FBQUEsdUJBQU1ZLGlCQUFpQixDQUFDRyxZQUFZLENBQUNmLE9BQWQsQ0FBdkI7QUFBQSxlQUFqQjtBQUFBLHdCQUFpRWUsWUFBWSxDQUFDZCxLQUFiLGdCQUFxQiw4REFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUFyQixnQkFBb0MsOERBQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFyRztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixTQUFVYyxZQUFZLENBQUNNLEVBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEYTtBQUFBLEtBQWQ7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFlRDs7R0FyRnVCeEM7O0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9zdWJyZWVkcy9bZG9nTmFtZV0udHN4Pzc5YzIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2V0U3RhdGljUHJvcHMgfSBmcm9tIFwibmV4dC90eXBlc1wiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdjQgfSBmcm9tIFwidXVpZFwiO1xuaW1wb3J0IFJlZEhlYXJ0IGZyb20gXCIuLi8uLi9oZWxwZXJzL3JlZEhlYXJ0XCI7XG5pbXBvcnQgR3JleUhlYXJ0IGZyb20gXCIuLi8uLi9oZWxwZXJzL2dyZXlIZWFydFwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcblxuaW1wb3J0IHsgQnV0dG9uLCBEb2dDYXJkLCBEb2dJbWFnZSwgRG9nTmFtZSB9IGZyb20gXCIuLi8uLi9zdHlsZXMvRG9nQ2FyZFwiO1xuaW1wb3J0IHRoZW1lIGZyb20gXCIuLi8uLi9zdHlsZXMvdGhlbWVcIjtcbmltcG9ydCB7IERvZyB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEb2dQYWdlKHsgZG9ncyB9OiBhbnkpIHtcbiAgICBjb25zdCBbc3ViQnJlZWRzLCBzZXRTdWJCcmVlZHNdID0gdXNlU3RhdGU8RG9nW10+KFtdKTtcbiAgICBjb25zdCBbbG9jYWxTdG9yYWdlRmF2UGljcywgc2V0TG9jYWxTdG9yYWdlRmF2UGljc10gPSB1c2VTdGF0ZTxEb2dbXT4oKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChsb2NhbFN0b3JhZ2VGYXZQaWNzID09PSB1bmRlZmluZWQgJiYgc3ViQnJlZWRzLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IHN0b3JhZ2VEb2dzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImZhdlBpY1wiKSB8fCBcIm51bGxcIik7XG4gICAgICBzZXRMb2NhbFN0b3JhZ2VGYXZQaWNzKHN0b3JhZ2VEb2dzKTtcblxuICAgICAgaWYoc3RvcmFnZURvZ3MpIHtcbiAgICAgICAgY29uc3QgbmV3RG9ncyA9IFsuLi5zdWJCcmVlZHNdO1xuXG4gICAgICAgIHN0b3JhZ2VEb2dzLmZvckVhY2goKGRvZzogRG9nKSA9PiB7XG4gICAgICAgICAgY29uc3QgbmV3RG9nID0gbmV3RG9ncy5maW5kKGQgPT4gZC5waWN0dXJlID09PSBkb2cucGljdHVyZSk7XG5cbiAgICAgICAgICBpZihuZXdEb2cpIHtcbiAgICAgICAgICAgIG5ld0RvZy5saWtlZCA9IHRydWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHNldFN1YkJyZWVkcyhuZXdEb2dzKTtcbiAgICAgIH1cblxuICAgIH1cbiAgfSwgW3N1YkJyZWVkc10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGRvZ3MpIHtcbiAgICAgIHNldFN1YkJyZWVkcyhkb2dzKTtcbiAgICB9XG4gIH0sIFtdKTtcblxuICBjb25zdCB1cGRhdGVMb2NhbFN0b3JhZ2UgPSAoaXRlbTogYW55KSA9PiB7XG4gICAgY29uc3Qgc3RvcmFnZUZhdlBpY3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZmF2UGljXCIpIHx8IFwibnVsbFwiKTtcbiAgICBsZXQgdXBkYXRlZFN0b3JhZ2VGYXZQaWNzO1xuXG4gICAgaWYgKHN0b3JhZ2VGYXZQaWNzID09PSBudWxsKSB7XG4gICAgICBjb25zdCBmYXZEb2dzID0gW2l0ZW1dO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJmYXZQaWNcIiwgSlNPTi5zdHJpbmdpZnkoZmF2RG9ncykpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoaXRlbS5saWtlZCkge1xuICAgICAgICBjb25zdCBmaWx0ZXJlZFBpY3R1cmVzID0gWy4uLnN0b3JhZ2VGYXZQaWNzXS5maWx0ZXIoZG9nID0+IGRvZy5waWN0dXJlICE9PSBpdGVtLnBpY3R1cmUpO1xuICAgICAgICB1cGRhdGVkU3RvcmFnZUZhdlBpY3MgPSBbLi4uZmlsdGVyZWRQaWN0dXJlcywgaXRlbV07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBmaWx0ZXJlZFBpY3R1cmVzID0gWy4uLnN0b3JhZ2VGYXZQaWNzXS5maWx0ZXIoZG9nID0+IGRvZy5waWN0dXJlICE9PSBpdGVtLnBpY3R1cmUpO1xuICAgICAgICB1cGRhdGVkU3RvcmFnZUZhdlBpY3MgPSBbLi4uZmlsdGVyZWRQaWN0dXJlc11cbiAgICAgIH1cbiAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwiZmF2UGljXCIpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJmYXZQaWNcIiwgSlNPTi5zdHJpbmdpZnkodXBkYXRlZFN0b3JhZ2VGYXZQaWNzKSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHNldEZhdm91cml0ZUltYWdlID0gKHBpY3R1cmU6IHN0cmluZykgPT4ge1xuICAgIGlmIChzdWJCcmVlZHMpIHtcbiAgICAgIGNvbnN0IG5ld1N1YkJyZWVkcyA9IFsuLi5zdWJCcmVlZHNdO1xuICAgICAgY29uc3QgZ2V0U3ViQnJlZWRQaWN0dXJlID0gbmV3U3ViQnJlZWRzLmZpbmQoKHN1YkJyZWVkTmFtZSkgPT4gc3ViQnJlZWROYW1lLnBpY3R1cmUgPT09IHBpY3R1cmUpO1xuICAgICAgY29uc29sZS5sb2cobmV3U3ViQnJlZWRzKTtcbiAgICAgIGlmIChnZXRTdWJCcmVlZFBpY3R1cmUpIHtcbiAgICAgICAgZ2V0U3ViQnJlZWRQaWN0dXJlLmxpa2VkID0gIWdldFN1YkJyZWVkUGljdHVyZS5saWtlZDtcbiAgICAgIH1cbiAgICAgIHNldFN1YkJyZWVkcyhuZXdTdWJCcmVlZHMpO1xuICAgICAgdXBkYXRlTG9jYWxTdG9yYWdlKGdldFN1YkJyZWVkUGljdHVyZSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGdldFN1YkJyZWVkTmFtZSA9IChwaWN0dXJlOiBzdHJpbmcpID0+IHtcbiAgICByZXR1cm4gYCR7cGljdHVyZS5zcGxpdChcIi9cIilbNF19YDtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICB7c3ViQnJlZWRzLm1hcCgoc3ViQnJlZWROYW1lOiBEb2cpID0+IChcbiAgICAgICAgPGRpdiBrZXk9e3N1YkJyZWVkTmFtZS5pZH0+XG4gICAgICAgICAgPERvZ0NhcmQ+XG4gICAgICAgICAgICA8RG9nSW1hZ2Ugc3JjPXtzdWJCcmVlZE5hbWUucGljdHVyZX0gLz5cbiAgICAgICAgICAgIDxEb2dOYW1lIHRoZW1lPXt0aGVtZX0+XG4gICAgICAgICAgICAgIHtnZXRTdWJCcmVlZE5hbWUoc3ViQnJlZWROYW1lLnBpY3R1cmUpfVxuICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldEZhdm91cml0ZUltYWdlKHN1YkJyZWVkTmFtZS5waWN0dXJlKX0+e3N1YkJyZWVkTmFtZS5saWtlZCA/IDxSZWRIZWFydCAvPiA6IDxHcmV5SGVhcnQgLz59PC9CdXR0b24+XG4gICAgICAgICAgICA8L0RvZ05hbWU+XG4gICAgICAgICAgPC9Eb2dDYXJkPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkpfVxuICAgIDwvTGF5b3V0PlxuICApO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9kb2cuY2VvL2FwaS9icmVlZHMvbGlzdC9hbGxcIik7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuXG4gIGNvbnN0IHBhdGhzID0gT2JqZWN0LmtleXMoZGF0YS5tZXNzYWdlKS5tYXAoKGRvZ3MpID0+ICh7XG4gICAgcGFyYW1zOiB7IGRvZ05hbWU6IGRvZ3MgfSxcbiAgfSkpO1xuXG4gIHJldHVybiB7XG4gICAgcGF0aHMsXG4gICAgZmFsbGJhY2s6IGZhbHNlLFxuICB9O1xufVxuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHM6IEdldFN0YXRpY1Byb3BzID0gYXN5bmMgKHsgcGFyYW1zIH0pID0+IHtcbiAgY29uc3QgeyBkb2dOYW1lIH06IGFueSA9IHBhcmFtcztcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vZG9nLmNlby9hcGkvYnJlZWQvJHtkb2dOYW1lfS9pbWFnZXNgKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgY29uc3QgZG9ncyA9IGRhdGEubWVzc2FnZS5tYXAoKGl0ZW1zOiBEb2cpID0+IHtcbiAgICByZXR1cm4geyBwaWN0dXJlOiBpdGVtcywgbGlrZWQ6IGZhbHNlLCBpZDogdjQoKSB9O1xuICB9KTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7IGRvZ3MsIGRvZ05hbWUgfSxcbiAgfTtcbn07XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJSZWRIZWFydCIsIkdyZXlIZWFydCIsIkxheW91dCIsIkJ1dHRvbiIsIkRvZ0NhcmQiLCJEb2dJbWFnZSIsIkRvZ05hbWUiLCJ0aGVtZSIsIkRvZ1BhZ2UiLCJkb2dzIiwic3ViQnJlZWRzIiwic2V0U3ViQnJlZWRzIiwibG9jYWxTdG9yYWdlRmF2UGljcyIsInNldExvY2FsU3RvcmFnZUZhdlBpY3MiLCJ1bmRlZmluZWQiLCJsZW5ndGgiLCJzdG9yYWdlRG9ncyIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJuZXdEb2dzIiwiZm9yRWFjaCIsImRvZyIsIm5ld0RvZyIsImZpbmQiLCJkIiwicGljdHVyZSIsImxpa2VkIiwidXBkYXRlTG9jYWxTdG9yYWdlIiwiaXRlbSIsInN0b3JhZ2VGYXZQaWNzIiwidXBkYXRlZFN0b3JhZ2VGYXZQaWNzIiwiZmF2RG9ncyIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJmaWx0ZXJlZFBpY3R1cmVzIiwiZmlsdGVyIiwicmVtb3ZlSXRlbSIsInNldEZhdm91cml0ZUltYWdlIiwibmV3U3ViQnJlZWRzIiwiZ2V0U3ViQnJlZWRQaWN0dXJlIiwic3ViQnJlZWROYW1lIiwiY29uc29sZSIsImxvZyIsImdldFN1YkJyZWVkTmFtZSIsInNwbGl0IiwibWFwIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/subreeds/[dogName].tsx\n");

/***/ })

});