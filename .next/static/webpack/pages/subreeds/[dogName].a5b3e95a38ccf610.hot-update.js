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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ DogPage; }\n/* harmony export */ });\n/* harmony import */ var _Users_andreiilisei_Coding_Practice_practiceProjShape_ShapeDogTest_ShapeDogTest_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _helpers_redHeart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/redHeart */ \"./src/helpers/redHeart.tsx\");\n/* harmony import */ var _helpers_greyHeart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/greyHeart */ \"./src/helpers/greyHeart.tsx\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Layout */ \"./src/components/Layout.tsx\");\n/* harmony import */ var _styles_DogCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/DogCard */ \"./src/styles/DogCard.ts\");\n/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../styles/theme */ \"./src/styles/theme.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/andreiilisei/Coding Practice/practiceProjShape/ShapeDogTest/ShapeDogTest/src/pages/subreeds/[dogName].tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar __N_SSG = true;\nfunction DogPage(_ref) {\n  _s();\n\n  var _this = this;\n\n  var dogs = _ref.dogs;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),\n      subBreeds = _useState[0],\n      setSubBreeds = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(),\n      localStorageFavPics = _useState2[0],\n      setLocalStorageFavPics = _useState2[1]; // const saveditems = JSON.parse(localStorage.getItem('favPic'));\n  // const [subBreeds, setSubBreeds] = useState(() => {\n  //   const saved = localStorage.getItem(\"favPic\");\n  //   const initialValue = JSON.parse(saved);\n  //   return initialValue || \"\";\n  // });\n\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    if (localStorageFavPics === undefined) {\n      var storageDogs = JSON.parse(localStorage.getItem(\"favPic\") || \"null\");\n      setLocalStorageFavPics(storageDogs);\n\n      if (storageDogs) {\n        var newDogs = (0,_Users_andreiilisei_Coding_Practice_practiceProjShape_ShapeDogTest_ShapeDogTest_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(subBreeds);\n\n        storageDogs.forEach(function (dog) {\n          var newDog = newDogs.find(function (d) {\n            return d.picture === dog.picture;\n          });\n\n          if (newDog) {\n            newDog.liked = true;\n          }\n        });\n        setSubBreeds(newDogs);\n      }\n    }\n  }, []);\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    if (dogs) {\n      setSubBreeds(dogs);\n    }\n  }, []); // const [liked, setLiked] = useState<Dog[]>([])\n  // useEffect(() => {\n  //   const setsmth = (picture: string) => {\n  //     if (subBreeds) {\n  //       const likedSub = [...subBreeds];\n  //       const getLikedSubBreed = likedSub.find((subBreedName) => subBreedName.picture === picture);\n  //       if (getLikedSubBreed) {\n  //         getLikedSubBreed.liked = !getLikedSubBreed.liked;\n  //       }\n  //       setSubBreeds(likedSub);\n  //     }\n  //   };\n  // });\n  // useEffect(() => {\n  //   const favouriteDogs = localStorage.getItem(\"favPic\");\n  //   const savedDogs = JSON.parse(favouriteDogs);\n  //   if (savedDogs) {\n  //     setSubBreeds(savedDogs);\n  //   }\n  // }, []);\n  // useEffect(() => {\n  //   var favouriteSubBreedPicture = JSON.parse(localStorage.getItem(\"favPic\"));\n  //   if (favouriteSubBreedPicture === null) {\n  //     setSubBreeds(dogs);\n  //   } else {\n  //     favouriteSubBreedPicture = favouriteSubBreedPicture.filter((subBreedName: Dog) => subBreedName.picture !== dogs.picture);\n  //   }\n  //   localStorage.setItem(\"favPic\", JSON.stringify(favouriteSubBreedPicture));\n  //   setSubBreeds(dogs);\n  // }, []);\n\n  var updateLocalStorage = function updateLocalStorage(item) {\n    var storageFavPics = JSON.parse(localStorage.getItem(\"favPic\") || \"null\");\n    var updatedStorageFavPics;\n\n    if (storageFavPics === null) {\n      var favDogs = [item];\n      localStorage.setItem(\"favPic\", JSON.stringify(favDogs));\n    } else {\n      if (item.liked) {\n        var filteredPictures = (0,_Users_andreiilisei_Coding_Practice_practiceProjShape_ShapeDogTest_ShapeDogTest_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(storageFavPics).filter(function (dog) {\n          return dog.picture !== item.picture;\n        });\n\n        updatedStorageFavPics = [].concat((0,_Users_andreiilisei_Coding_Practice_practiceProjShape_ShapeDogTest_ShapeDogTest_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(filteredPictures), [item]);\n      } else {\n        var _filteredPictures = (0,_Users_andreiilisei_Coding_Practice_practiceProjShape_ShapeDogTest_ShapeDogTest_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(storageFavPics).filter(function (dog) {\n          return dog.picture !== item.picture;\n        });\n\n        updatedStorageFavPics = (0,_Users_andreiilisei_Coding_Practice_practiceProjShape_ShapeDogTest_ShapeDogTest_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_filteredPictures);\n      }\n\n      localStorage.removeItem(\"favPic\");\n      localStorage.setItem(\"favPic\", JSON.stringify(updatedStorageFavPics));\n    }\n  };\n\n  var isLiked = function isLiked(picture) {\n    var _likedDog;\n\n    var likedDog = null;\n\n    if (localStorageFavPics) {\n      likedDog = localStorageFavPics.find(function (dog) {\n        return dog.picture === picture;\n      });\n    }\n\n    return (_likedDog = likedDog) !== null && _likedDog !== void 0 && _likedDog.liked ? true : false;\n  };\n\n  var setFavouriteImage = function setFavouriteImage(picture) {\n    if (subBreeds) {\n      var newSubBreeds = (0,_Users_andreiilisei_Coding_Practice_practiceProjShape_ShapeDogTest_ShapeDogTest_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(subBreeds);\n\n      var getSubBreedPicture = newSubBreeds.find(function (subBreedName) {\n        return subBreedName.picture === picture;\n      });\n      console.log(newSubBreeds);\n\n      if (getSubBreedPicture) {\n        getSubBreedPicture.liked = !getSubBreedPicture.liked;\n      }\n\n      setSubBreeds(newSubBreeds);\n      updateLocalStorage(getSubBreedPicture);\n    }\n  };\n\n  var getSubBreedName = function getSubBreedName(picture) {\n    return \"\".concat(picture.split(\"/\")[4]);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    children: subBreeds.map(function (subBreedName) {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_styles_DogCard__WEBPACK_IMPORTED_MODULE_5__.DogCard, {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_styles_DogCard__WEBPACK_IMPORTED_MODULE_5__.DogImage, {\n            src: subBreedName.picture\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 138,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_styles_DogCard__WEBPACK_IMPORTED_MODULE_5__.DogName, {\n            theme: _styles_theme__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n            children: [getSubBreedName(subBreedName.picture), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_styles_DogCard__WEBPACK_IMPORTED_MODULE_5__.Button, {\n              onClick: function onClick() {\n                return setFavouriteImage(subBreedName.picture);\n              },\n              children: isLiked(subBreedName.picture) ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_helpers_redHeart__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 141,\n                columnNumber: 112\n              }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_helpers_greyHeart__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 141,\n                columnNumber: 127\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 141,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 139,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 137,\n          columnNumber: 11\n        }, _this)\n      }, subBreedName.id, false, {\n        fileName: _jsxFileName,\n        lineNumber: 136,\n        columnNumber: 9\n      }, _this);\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 134,\n    columnNumber: 5\n  }, this);\n}\n\n_s(DogPage, \"XubJhMOKufQMRQVYepBPqD4T3UM=\");\n\n_c = DogPage;\n\nvar _c;\n\n$RefreshReg$(_c, \"DogPage\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvc3VicmVlZHMvW2RvZ05hbWVdLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7OztBQUdlLFNBQVNVLE9BQVQsT0FBZ0M7QUFBQTs7QUFBQTs7QUFBQSxNQUFiQyxJQUFhLFFBQWJBLElBQWE7O0FBQzNDLGtCQUFrQ1YsK0NBQVEsQ0FBUSxFQUFSLENBQTFDO0FBQUEsTUFBT1csU0FBUDtBQUFBLE1BQWtCQyxZQUFsQjs7QUFDQSxtQkFBc0RaLCtDQUFRLEVBQTlEO0FBQUEsTUFBT2EsbUJBQVA7QUFBQSxNQUE0QkMsc0JBQTVCLGlCQUYyQyxDQUk3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBZixFQUFBQSxnREFBUyxDQUFDLFlBQU07QUFDZCxRQUFJYyxtQkFBbUIsS0FBS0UsU0FBNUIsRUFBdUM7QUFDckMsVUFBTUMsV0FBVyxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0MsWUFBWSxDQUFDQyxPQUFiLENBQXFCLFFBQXJCLEtBQWtDLE1BQTdDLENBQXBCO0FBQ0FOLE1BQUFBLHNCQUFzQixDQUFDRSxXQUFELENBQXRCOztBQUVBLFVBQUdBLFdBQUgsRUFBZ0I7QUFDZCxZQUFNSyxPQUFPLEdBQUcsd01BQUlWLFNBQVAsQ0FBYjs7QUFFQUssUUFBQUEsV0FBVyxDQUFDTSxPQUFaLENBQW9CLFVBQUNDLEdBQUQsRUFBYztBQUNoQyxjQUFNQyxNQUFNLEdBQUdILE9BQU8sQ0FBQ0ksSUFBUixDQUFhLFVBQUFDLENBQUM7QUFBQSxtQkFBSUEsQ0FBQyxDQUFDQyxPQUFGLEtBQWNKLEdBQUcsQ0FBQ0ksT0FBdEI7QUFBQSxXQUFkLENBQWY7O0FBRUEsY0FBR0gsTUFBSCxFQUFXO0FBQ1RBLFlBQUFBLE1BQU0sQ0FBQ0ksS0FBUCxHQUFlLElBQWY7QUFDRDtBQUNGLFNBTkQ7QUFRQWhCLFFBQUFBLFlBQVksQ0FBQ1MsT0FBRCxDQUFaO0FBQ0Q7QUFF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O0FBQUE7QUFBQTtBQUFBLGVBRGE7QUFBQSxLQUFkO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBZUQ7O0dBeEl1QnpDOztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvc3VicmVlZHMvW2RvZ05hbWVdLnRzeD83OWMyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdldFN0YXRpY1Byb3BzIH0gZnJvbSBcIm5leHQvdHlwZXNcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHY0IH0gZnJvbSBcInV1aWRcIjtcbmltcG9ydCBSZWRIZWFydCBmcm9tIFwiLi4vLi4vaGVscGVycy9yZWRIZWFydFwiO1xuaW1wb3J0IEdyZXlIZWFydCBmcm9tIFwiLi4vLi4vaGVscGVycy9ncmV5SGVhcnRcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5cbmltcG9ydCB7IEJ1dHRvbiwgRG9nQ2FyZCwgRG9nSW1hZ2UsIERvZ05hbWUgfSBmcm9tIFwiLi4vLi4vc3R5bGVzL0RvZ0NhcmRcIjtcbmltcG9ydCB0aGVtZSBmcm9tIFwiLi4vLi4vc3R5bGVzL3RoZW1lXCI7XG5pbXBvcnQgeyBEb2cgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRG9nUGFnZSh7IGRvZ3MgfTogYW55KSB7XG4gICAgY29uc3QgW3N1YkJyZWVkcywgc2V0U3ViQnJlZWRzXSA9IHVzZVN0YXRlPERvZ1tdPihbXSk7XG4gICAgY29uc3QgW2xvY2FsU3RvcmFnZUZhdlBpY3MsIHNldExvY2FsU3RvcmFnZUZhdlBpY3NdID0gdXNlU3RhdGU8RG9nW10+KCk7XG5cbiAgLy8gY29uc3Qgc2F2ZWRpdGVtcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2ZhdlBpYycpKTtcbiAgLy8gY29uc3QgW3N1YkJyZWVkcywgc2V0U3ViQnJlZWRzXSA9IHVzZVN0YXRlKCgpID0+IHtcbiAgLy8gICBjb25zdCBzYXZlZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZmF2UGljXCIpO1xuICAvLyAgIGNvbnN0IGluaXRpYWxWYWx1ZSA9IEpTT04ucGFyc2Uoc2F2ZWQpO1xuICAvLyAgIHJldHVybiBpbml0aWFsVmFsdWUgfHwgXCJcIjtcbiAgLy8gfSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAobG9jYWxTdG9yYWdlRmF2UGljcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25zdCBzdG9yYWdlRG9ncyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJmYXZQaWNcIikgfHwgXCJudWxsXCIpO1xuICAgICAgc2V0TG9jYWxTdG9yYWdlRmF2UGljcyhzdG9yYWdlRG9ncyk7XG5cbiAgICAgIGlmKHN0b3JhZ2VEb2dzKSB7XG4gICAgICAgIGNvbnN0IG5ld0RvZ3MgPSBbLi4uc3ViQnJlZWRzXTtcblxuICAgICAgICBzdG9yYWdlRG9ncy5mb3JFYWNoKChkb2c6IERvZykgPT4ge1xuICAgICAgICAgIGNvbnN0IG5ld0RvZyA9IG5ld0RvZ3MuZmluZChkID0+IGQucGljdHVyZSA9PT0gZG9nLnBpY3R1cmUpO1xuXG4gICAgICAgICAgaWYobmV3RG9nKSB7XG4gICAgICAgICAgICBuZXdEb2cubGlrZWQgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgc2V0U3ViQnJlZWRzKG5ld0RvZ3MpO1xuICAgICAgfVxuXG4gICAgfVxuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoZG9ncykge1xuICAgICAgc2V0U3ViQnJlZWRzKGRvZ3MpO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIC8vIGNvbnN0IFtsaWtlZCwgc2V0TGlrZWRdID0gdXNlU3RhdGU8RG9nW10+KFtdKVxuXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vICAgY29uc3Qgc2V0c210aCA9IChwaWN0dXJlOiBzdHJpbmcpID0+IHtcbiAgLy8gICAgIGlmIChzdWJCcmVlZHMpIHtcbiAgLy8gICAgICAgY29uc3QgbGlrZWRTdWIgPSBbLi4uc3ViQnJlZWRzXTtcbiAgLy8gICAgICAgY29uc3QgZ2V0TGlrZWRTdWJCcmVlZCA9IGxpa2VkU3ViLmZpbmQoKHN1YkJyZWVkTmFtZSkgPT4gc3ViQnJlZWROYW1lLnBpY3R1cmUgPT09IHBpY3R1cmUpO1xuXG4gIC8vICAgICAgIGlmIChnZXRMaWtlZFN1YkJyZWVkKSB7XG4gIC8vICAgICAgICAgZ2V0TGlrZWRTdWJCcmVlZC5saWtlZCA9ICFnZXRMaWtlZFN1YkJyZWVkLmxpa2VkO1xuICAvLyAgICAgICB9XG4gIC8vICAgICAgIHNldFN1YkJyZWVkcyhsaWtlZFN1Yik7XG4gIC8vICAgICB9XG4gIC8vICAgfTtcbiAgLy8gfSk7XG5cbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gICBjb25zdCBmYXZvdXJpdGVEb2dzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJmYXZQaWNcIik7XG4gIC8vICAgY29uc3Qgc2F2ZWREb2dzID0gSlNPTi5wYXJzZShmYXZvdXJpdGVEb2dzKTtcbiAgLy8gICBpZiAoc2F2ZWREb2dzKSB7XG4gIC8vICAgICBzZXRTdWJCcmVlZHMoc2F2ZWREb2dzKTtcbiAgLy8gICB9XG4gIC8vIH0sIFtdKTtcblxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgIHZhciBmYXZvdXJpdGVTdWJCcmVlZFBpY3R1cmUgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZmF2UGljXCIpKTtcbiAgLy8gICBpZiAoZmF2b3VyaXRlU3ViQnJlZWRQaWN0dXJlID09PSBudWxsKSB7XG4gIC8vICAgICBzZXRTdWJCcmVlZHMoZG9ncyk7XG4gIC8vICAgfSBlbHNlIHtcbiAgLy8gICAgIGZhdm91cml0ZVN1YkJyZWVkUGljdHVyZSA9IGZhdm91cml0ZVN1YkJyZWVkUGljdHVyZS5maWx0ZXIoKHN1YkJyZWVkTmFtZTogRG9nKSA9PiBzdWJCcmVlZE5hbWUucGljdHVyZSAhPT0gZG9ncy5waWN0dXJlKTtcbiAgLy8gICB9XG4gIC8vICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJmYXZQaWNcIiwgSlNPTi5zdHJpbmdpZnkoZmF2b3VyaXRlU3ViQnJlZWRQaWN0dXJlKSk7XG4gIC8vICAgc2V0U3ViQnJlZWRzKGRvZ3MpO1xuICAvLyB9LCBbXSk7XG5cbiAgY29uc3QgdXBkYXRlTG9jYWxTdG9yYWdlID0gKGl0ZW06IGFueSkgPT4ge1xuICAgIGNvbnN0IHN0b3JhZ2VGYXZQaWNzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImZhdlBpY1wiKSB8fCBcIm51bGxcIik7XG4gICAgbGV0IHVwZGF0ZWRTdG9yYWdlRmF2UGljcztcblxuICAgIGlmIChzdG9yYWdlRmF2UGljcyA9PT0gbnVsbCkge1xuICAgICAgY29uc3QgZmF2RG9ncyA9IFtpdGVtXTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZmF2UGljXCIsIEpTT04uc3RyaW5naWZ5KGZhdkRvZ3MpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGl0ZW0ubGlrZWQpIHtcbiAgICAgICAgY29uc3QgZmlsdGVyZWRQaWN0dXJlcyA9IFsuLi5zdG9yYWdlRmF2UGljc10uZmlsdGVyKGRvZyA9PiBkb2cucGljdHVyZSAhPT0gaXRlbS5waWN0dXJlKTtcbiAgICAgICAgdXBkYXRlZFN0b3JhZ2VGYXZQaWNzID0gWy4uLmZpbHRlcmVkUGljdHVyZXMsIGl0ZW1dO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgZmlsdGVyZWRQaWN0dXJlcyA9IFsuLi5zdG9yYWdlRmF2UGljc10uZmlsdGVyKGRvZyA9PiBkb2cucGljdHVyZSAhPT0gaXRlbS5waWN0dXJlKTtcbiAgICAgICAgdXBkYXRlZFN0b3JhZ2VGYXZQaWNzID0gWy4uLmZpbHRlcmVkUGljdHVyZXNdXG4gICAgICB9XG4gICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcImZhdlBpY1wiKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZmF2UGljXCIsIEpTT04uc3RyaW5naWZ5KHVwZGF0ZWRTdG9yYWdlRmF2UGljcykpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBpc0xpa2VkID0gKHBpY3R1cmU6IHN0cmluZykgPT4ge1xuICAgIGxldCBsaWtlZERvZyA9IG51bGw7XG5cbiAgICBpZiAobG9jYWxTdG9yYWdlRmF2UGljcykge1xuICAgICAgbGlrZWREb2cgPSBsb2NhbFN0b3JhZ2VGYXZQaWNzLmZpbmQoKGRvZzogeyBwaWN0dXJlOiBzdHJpbmcgfSkgPT4gZG9nLnBpY3R1cmUgPT09IHBpY3R1cmUpO1xuICAgIH1cblxuICAgIHJldHVybiBsaWtlZERvZz8ubGlrZWQgPyB0cnVlIDogZmFsc2U7XG4gIH07XG5cbiAgY29uc3Qgc2V0RmF2b3VyaXRlSW1hZ2UgPSAocGljdHVyZTogc3RyaW5nKSA9PiB7XG4gICAgaWYgKHN1YkJyZWVkcykge1xuICAgICAgY29uc3QgbmV3U3ViQnJlZWRzID0gWy4uLnN1YkJyZWVkc107XG4gICAgICBjb25zdCBnZXRTdWJCcmVlZFBpY3R1cmUgPSBuZXdTdWJCcmVlZHMuZmluZCgoc3ViQnJlZWROYW1lKSA9PiBzdWJCcmVlZE5hbWUucGljdHVyZSA9PT0gcGljdHVyZSk7XG4gICAgICBjb25zb2xlLmxvZyhuZXdTdWJCcmVlZHMpO1xuICAgICAgaWYgKGdldFN1YkJyZWVkUGljdHVyZSkge1xuICAgICAgICBnZXRTdWJCcmVlZFBpY3R1cmUubGlrZWQgPSAhZ2V0U3ViQnJlZWRQaWN0dXJlLmxpa2VkO1xuICAgICAgfVxuICAgICAgc2V0U3ViQnJlZWRzKG5ld1N1YkJyZWVkcyk7XG4gICAgICB1cGRhdGVMb2NhbFN0b3JhZ2UoZ2V0U3ViQnJlZWRQaWN0dXJlKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZ2V0U3ViQnJlZWROYW1lID0gKHBpY3R1cmU6IHN0cmluZykgPT4ge1xuICAgIHJldHVybiBgJHtwaWN0dXJlLnNwbGl0KFwiL1wiKVs0XX1gO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIHtzdWJCcmVlZHMubWFwKChzdWJCcmVlZE5hbWU6IERvZykgPT4gKFxuICAgICAgICA8ZGl2IGtleT17c3ViQnJlZWROYW1lLmlkfT5cbiAgICAgICAgICA8RG9nQ2FyZD5cbiAgICAgICAgICAgIDxEb2dJbWFnZSBzcmM9e3N1YkJyZWVkTmFtZS5waWN0dXJlfSAvPlxuICAgICAgICAgICAgPERvZ05hbWUgdGhlbWU9e3RoZW1lfT5cbiAgICAgICAgICAgICAge2dldFN1YkJyZWVkTmFtZShzdWJCcmVlZE5hbWUucGljdHVyZSl9XG4gICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gc2V0RmF2b3VyaXRlSW1hZ2Uoc3ViQnJlZWROYW1lLnBpY3R1cmUpfT57aXNMaWtlZChzdWJCcmVlZE5hbWUucGljdHVyZSkgPyA8UmVkSGVhcnQgLz4gOiA8R3JleUhlYXJ0IC8+fTwvQnV0dG9uPlxuICAgICAgICAgICAgPC9Eb2dOYW1lPlxuICAgICAgICAgIDwvRG9nQ2FyZD5cbiAgICAgICAgPC9kaXY+XG4gICAgICApKX1cbiAgICA8L0xheW91dD5cbiAgKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vZG9nLmNlby9hcGkvYnJlZWRzL2xpc3QvYWxsXCIpO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICBjb25zdCBwYXRocyA9IE9iamVjdC5rZXlzKGRhdGEubWVzc2FnZSkubWFwKChkb2dzKSA9PiAoe1xuICAgIHBhcmFtczogeyBkb2dOYW1lOiBkb2dzIH0sXG4gIH0pKTtcblxuICByZXR1cm4ge1xuICAgIHBhdGhzLFxuICAgIGZhbGxiYWNrOiBmYWxzZSxcbiAgfTtcbn1cblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzOiBHZXRTdGF0aWNQcm9wcyA9IGFzeW5jICh7IHBhcmFtcyB9KSA9PiB7XG4gIGNvbnN0IHsgZG9nTmFtZSB9OiBhbnkgPSBwYXJhbXM7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwczovL2RvZy5jZW8vYXBpL2JyZWVkLyR7ZG9nTmFtZX0vaW1hZ2VzYCk7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuXG4gIGNvbnN0IGRvZ3MgPSBkYXRhLm1lc3NhZ2UubWFwKChpdGVtczogRG9nKSA9PiB7XG4gICAgcmV0dXJuIHsgcGljdHVyZTogaXRlbXMsIGxpa2VkOiBmYWxzZSwgaWQ6IHY0KCkgfTtcbiAgfSk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczogeyBkb2dzLCBkb2dOYW1lIH0sXG4gIH07XG59O1xuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiUmVkSGVhcnQiLCJHcmV5SGVhcnQiLCJMYXlvdXQiLCJCdXR0b24iLCJEb2dDYXJkIiwiRG9nSW1hZ2UiLCJEb2dOYW1lIiwidGhlbWUiLCJEb2dQYWdlIiwiZG9ncyIsInN1YkJyZWVkcyIsInNldFN1YkJyZWVkcyIsImxvY2FsU3RvcmFnZUZhdlBpY3MiLCJzZXRMb2NhbFN0b3JhZ2VGYXZQaWNzIiwidW5kZWZpbmVkIiwic3RvcmFnZURvZ3MiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwibmV3RG9ncyIsImZvckVhY2giLCJkb2ciLCJuZXdEb2ciLCJmaW5kIiwiZCIsInBpY3R1cmUiLCJsaWtlZCIsInVwZGF0ZUxvY2FsU3RvcmFnZSIsIml0ZW0iLCJzdG9yYWdlRmF2UGljcyIsInVwZGF0ZWRTdG9yYWdlRmF2UGljcyIsImZhdkRvZ3MiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwiZmlsdGVyZWRQaWN0dXJlcyIsImZpbHRlciIsInJlbW92ZUl0ZW0iLCJpc0xpa2VkIiwibGlrZWREb2ciLCJzZXRGYXZvdXJpdGVJbWFnZSIsIm5ld1N1YkJyZWVkcyIsImdldFN1YkJyZWVkUGljdHVyZSIsInN1YkJyZWVkTmFtZSIsImNvbnNvbGUiLCJsb2ciLCJnZXRTdWJCcmVlZE5hbWUiLCJzcGxpdCIsIm1hcCIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/subreeds/[dogName].tsx\n");

/***/ })

});