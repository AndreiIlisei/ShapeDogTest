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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ DogPage; }\n/* harmony export */ });\n/* harmony import */ var _Users_andreiilisei_Coding_Practice_practiceProjShape_ShapeDogTest_ShapeDogTest_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _helpers_redHeart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/redHeart */ \"./src/helpers/redHeart.tsx\");\n/* harmony import */ var _helpers_greyHeart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/greyHeart */ \"./src/helpers/greyHeart.tsx\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Layout */ \"./src/components/Layout.tsx\");\n/* harmony import */ var _styles_DogCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/DogCard */ \"./src/styles/DogCard.ts\");\n/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../styles/theme */ \"./src/styles/theme.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/andreiilisei/Coding Practice/practiceProjShape/ShapeDogTest/ShapeDogTest/src/pages/subreeds/[dogName].tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar __N_SSG = true;\nfunction DogPage(_ref) {\n  _s();\n\n  var _this = this;\n\n  var dogs = _ref.dogs;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),\n      subBreeds = _useState[0],\n      setSubBreeds = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(),\n      localStorageFavPics = _useState2[0],\n      setLocalStorageFavPics = _useState2[1]; // const saveditems = JSON.parse(localStorage.getItem('favPic'));\n  // const [subBreeds, setSubBreeds] = useState(() => {\n  //   const saved = localStorage.getItem(\"favPic\");\n  //   const initialValue = JSON.parse(saved);\n  //   return initialValue || \"\";\n  // });\n\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    if (localStorageFavPics === undefined && subBreeds.length > 0) {\n      var storageDogs = JSON.parse(localStorage.getItem(\"favPic\") || \"null\");\n      setLocalStorageFavPics(storageDogs);\n      console.log({\n        subBreeds: subBreeds\n      });\n\n      if (storageDogs) {\n        var newDogs = (0,_Users_andreiilisei_Coding_Practice_practiceProjShape_ShapeDogTest_ShapeDogTest_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(subBreeds);\n\n        storageDogs.forEach(function (dog) {\n          var newDog = newDogs.find(function (d) {\n            return d.picture === dog.picture;\n          });\n          var newDogIndex = newDogs.findIndex(function (d) {\n            return d.picture === dog.picture;\n          });\n\n          if (newDog) {\n            newDog.liked = true;\n            newDogs[newDogIndex] = newDog;\n          }\n        });\n        setSubBreeds(newDogs);\n      }\n    }\n  }, [subBreeds]);\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    if (dogs) {\n      setSubBreeds(dogs);\n    }\n  }, []); // const [liked, setLiked] = useState<Dog[]>([])\n  // useEffect(() => {\n  //   const setsmth = (picture: string) => {\n  //     if (subBreeds) {\n  //       const likedSub = [...subBreeds];\n  //       const getLikedSubBreed = likedSub.find((subBreedName) => subBreedName.picture === picture);\n  //       if (getLikedSubBreed) {\n  //         getLikedSubBreed.liked = !getLikedSubBreed.liked;\n  //       }\n  //       setSubBreeds(likedSub);\n  //     }\n  //   };\n  // });\n  // useEffect(() => {\n  //   const favouriteDogs = localStorage.getItem(\"favPic\");\n  //   const savedDogs = JSON.parse(favouriteDogs);\n  //   if (savedDogs) {\n  //     setSubBreeds(savedDogs);\n  //   }\n  // }, []);\n  // useEffect(() => {\n  //   var favouriteSubBreedPicture = JSON.parse(localStorage.getItem(\"favPic\"));\n  //   if (favouriteSubBreedPicture === null) {\n  //     setSubBreeds(dogs);\n  //   } else {\n  //     favouriteSubBreedPicture = favouriteSubBreedPicture.filter((subBreedName: Dog) => subBreedName.picture !== dogs.picture);\n  //   }\n  //   localStorage.setItem(\"favPic\", JSON.stringify(favouriteSubBreedPicture));\n  //   setSubBreeds(dogs);\n  // }, []);\n\n  var updateLocalStorage = function updateLocalStorage(item) {\n    var storageFavPics = JSON.parse(localStorage.getItem(\"favPic\") || \"null\");\n    var updatedStorageFavPics;\n\n    if (storageFavPics === null) {\n      var favDogs = [item];\n      localStorage.setItem(\"favPic\", JSON.stringify(favDogs));\n    } else {\n      if (item.liked) {\n        var filteredPictures = (0,_Users_andreiilisei_Coding_Practice_practiceProjShape_ShapeDogTest_ShapeDogTest_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(storageFavPics).filter(function (dog) {\n          return dog.picture !== item.picture;\n        });\n\n        updatedStorageFavPics = [].concat((0,_Users_andreiilisei_Coding_Practice_practiceProjShape_ShapeDogTest_ShapeDogTest_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(filteredPictures), [item]);\n      } else {\n        var _filteredPictures = (0,_Users_andreiilisei_Coding_Practice_practiceProjShape_ShapeDogTest_ShapeDogTest_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(storageFavPics).filter(function (dog) {\n          return dog.picture !== item.picture;\n        });\n\n        updatedStorageFavPics = (0,_Users_andreiilisei_Coding_Practice_practiceProjShape_ShapeDogTest_ShapeDogTest_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_filteredPictures);\n      }\n\n      localStorage.removeItem(\"favPic\");\n      localStorage.setItem(\"favPic\", JSON.stringify(updatedStorageFavPics));\n    }\n  };\n\n  var setFavouriteImage = function setFavouriteImage(picture) {\n    if (subBreeds) {\n      var newSubBreeds = (0,_Users_andreiilisei_Coding_Practice_practiceProjShape_ShapeDogTest_ShapeDogTest_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(subBreeds);\n\n      var getSubBreedPicture = newSubBreeds.find(function (subBreedName) {\n        return subBreedName.picture === picture;\n      });\n      console.log(newSubBreeds);\n\n      if (getSubBreedPicture) {\n        getSubBreedPicture.liked = !getSubBreedPicture.liked;\n      }\n\n      setSubBreeds(newSubBreeds);\n      updateLocalStorage(getSubBreedPicture);\n    }\n  };\n\n  var getSubBreedName = function getSubBreedName(picture) {\n    return \"\".concat(picture.split(\"/\")[4]);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    children: subBreeds.map(function (subBreedName) {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_styles_DogCard__WEBPACK_IMPORTED_MODULE_5__.DogCard, {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_styles_DogCard__WEBPACK_IMPORTED_MODULE_5__.DogImage, {\n            src: subBreedName.picture\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 135,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_styles_DogCard__WEBPACK_IMPORTED_MODULE_5__.DogName, {\n            theme: _styles_theme__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n            children: [getSubBreedName(subBreedName.picture), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_styles_DogCard__WEBPACK_IMPORTED_MODULE_5__.Button, {\n              onClick: function onClick() {\n                return setFavouriteImage(subBreedName.picture);\n              },\n              children: subBreedName.liked ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_helpers_redHeart__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 138,\n                columnNumber: 101\n              }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_helpers_greyHeart__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 138,\n                columnNumber: 116\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 138,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 136,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 134,\n          columnNumber: 11\n        }, _this)\n      }, subBreedName.id, false, {\n        fileName: _jsxFileName,\n        lineNumber: 133,\n        columnNumber: 9\n      }, _this);\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 131,\n    columnNumber: 5\n  }, this);\n}\n\n_s(DogPage, \"XubJhMOKufQMRQVYepBPqD4T3UM=\");\n\n_c = DogPage;\n\nvar _c;\n\n$RefreshReg$(_c, \"DogPage\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvc3VicmVlZHMvW2RvZ05hbWVdLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7OztBQUdlLFNBQVNVLE9BQVQsT0FBZ0M7QUFBQTs7QUFBQTs7QUFBQSxNQUFiQyxJQUFhLFFBQWJBLElBQWE7O0FBQzNDLGtCQUFrQ1YsK0NBQVEsQ0FBUSxFQUFSLENBQTFDO0FBQUEsTUFBT1csU0FBUDtBQUFBLE1BQWtCQyxZQUFsQjs7QUFDQSxtQkFBc0RaLCtDQUFRLEVBQTlEO0FBQUEsTUFBT2EsbUJBQVA7QUFBQSxNQUE0QkMsc0JBQTVCLGlCQUYyQyxDQUk3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBZixFQUFBQSxnREFBUyxDQUFDLFlBQU07QUFDZCxRQUFJYyxtQkFBbUIsS0FBS0UsU0FBeEIsSUFBcUNKLFNBQVMsQ0FBQ0ssTUFBVixHQUFrQixDQUEzRCxFQUE4RDtBQUM1RCxVQUFNQyxXQUFXLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsUUFBckIsS0FBa0MsTUFBN0MsQ0FBcEI7QUFDQVAsTUFBQUEsc0JBQXNCLENBQUNHLFdBQUQsQ0FBdEI7QUFFQUssTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVk7QUFBQ1osUUFBQUEsU0FBUyxFQUFUQTtBQUFELE9BQVo7O0FBR0EsVUFBR00sV0FBSCxFQUFnQjtBQUNkLFlBQU1PLE9BQU8sR0FBRyx3TUFBSWIsU0FBUCxDQUFiOztBQUVBTSxRQUFBQSxXQUFXLENBQUNRLE9BQVosQ0FBb0IsVUFBQ0MsR0FBRCxFQUFjO0FBQ2hDLGNBQU1DLE1BQU0sR0FBR0gsT0FBTyxDQUFDSSxJQUFSLENBQWEsVUFBQUMsQ0FBQztBQUFBLG1CQUFJQSxDQUFDLENBQUNDLE9BQUYsS0FBY0osR0FBRyxDQUFDSSxPQUF0QjtBQUFBLFdBQWQsQ0FBZjtBQUNBLGNBQU1DLFdBQVcsR0FBR1AsT0FBTyxDQUFDUSxTQUFSLENBQWtCLFVBQUFILENBQUM7QUFBQSxtQkFBSUEsQ0FBQyxDQUFDQyxPQUFGLEtBQWNKLEdBQUcsQ0FBQ0ksT0FBdEI7QUFBQSxXQUFuQixDQUFwQjs7QUFFQSxjQUFHSCxNQUFILEVBQVc7QUFDVEEsWUFBQUEsTUFBTSxDQUFDTSxLQUFQLEdBQWUsSUFBZjtBQUNBVCxZQUFBQSxPQUFPLENBQUNPLFdBQUQsQ0FBUCxHQUF1QkosTUFBdkI7QUFDRDtBQUVGLFNBVEQ7QUFZQWYsUUFBQUEsWUFBWSxDQUFDWSxPQUFELENBQVo7QUFDRDtBQUVGO0FBQ0YsR0EzQlEsRUEyQk4sQ0FBQ2IsU0FBRCxDQTNCTSxDQUFUO0FBNkJBWixFQUFBQSxnREFBUyxDQUFDLFlBQU07QUFDZCxRQUFJVyxJQUFKLEVBQVU7QUFDUkUsTUFBQUEsWUFBWSxDQUFDRixJQUFELENBQVo7QUFDRDtBQUNGLEdBSlEsRUFJTixFQUpNLENBQVQsQ0F4QzZDLENBOEM3QztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTXdCLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FBQ0MsSUFBRCxFQUFlO0FBQ3hDLFFBQU1DLGNBQWMsR0FBR2xCLElBQUksQ0FBQ0MsS0FBTCxDQUFXQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsUUFBckIsS0FBa0MsTUFBN0MsQ0FBdkI7QUFDQSxRQUFJZ0IscUJBQUo7O0FBRUEsUUFBSUQsY0FBYyxLQUFLLElBQXZCLEVBQTZCO0FBQzNCLFVBQU1FLE9BQU8sR0FBRyxDQUFDSCxJQUFELENBQWhCO0FBQ0FmLE1BQUFBLFlBQVksQ0FBQ21CLE9BQWIsQ0FBcUIsUUFBckIsRUFBK0JyQixJQUFJLENBQUNzQixTQUFMLENBQWVGLE9BQWYsQ0FBL0I7QUFDRCxLQUhELE1BR087QUFDTCxVQUFJSCxJQUFJLENBQUNGLEtBQVQsRUFBZ0I7QUFDZCxZQUFNUSxnQkFBZ0IsR0FBRyx3TUFBSUwsY0FBSixFQUFvQk0sTUFBcEIsQ0FBMkIsVUFBQWhCLEdBQUc7QUFBQSxpQkFBSUEsR0FBRyxDQUFDSSxPQUFKLEtBQWdCSyxJQUFJLENBQUNMLE9BQXpCO0FBQUEsU0FBOUIsQ0FBekI7O0FBQ0FPLFFBQUFBLHFCQUFxQixxTkFBT0ksZ0JBQVAsSUFBeUJOLElBQXpCLEVBQXJCO0FBQ0QsT0FIRCxNQUdPO0FBQ0wsWUFBTU0saUJBQWdCLEdBQUcsd01BQUlMLGNBQUosRUFBb0JNLE1BQXBCLENBQTJCLFVBQUFoQixHQUFHO0FBQUEsaUJBQUlBLEdBQUcsQ0FBQ0ksT0FBSixLQUFnQkssSUFBSSxDQUFDTCxPQUF6QjtBQUFBLFNBQTlCLENBQXpCOztBQUNBTyxRQUFBQSxxQkFBcUIsR0FBRyx3TUFBSUksaUJBQVAsQ0FBckI7QUFDRDs7QUFDRHJCLE1BQUFBLFlBQVksQ0FBQ3VCLFVBQWIsQ0FBd0IsUUFBeEI7QUFDQXZCLE1BQUFBLFlBQVksQ0FBQ21CLE9BQWIsQ0FBcUIsUUFBckIsRUFBK0JyQixJQUFJLENBQUNzQixTQUFMLENBQWVILHFCQUFmLENBQS9CO0FBQ0Q7QUFDRixHQWxCRDs7QUFvQkEsTUFBTU8saUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFDZCxPQUFELEVBQXFCO0FBQzdDLFFBQUluQixTQUFKLEVBQWU7QUFDYixVQUFNa0MsWUFBWSxHQUFHLHdNQUFJbEMsU0FBUCxDQUFsQjs7QUFDQSxVQUFNbUMsa0JBQWtCLEdBQUdELFlBQVksQ0FBQ2pCLElBQWIsQ0FBa0IsVUFBQ21CLFlBQUQ7QUFBQSxlQUFrQkEsWUFBWSxDQUFDakIsT0FBYixLQUF5QkEsT0FBM0M7QUFBQSxPQUFsQixDQUEzQjtBQUNBUixNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWXNCLFlBQVo7O0FBQ0EsVUFBSUMsa0JBQUosRUFBd0I7QUFDdEJBLFFBQUFBLGtCQUFrQixDQUFDYixLQUFuQixHQUEyQixDQUFDYSxrQkFBa0IsQ0FBQ2IsS0FBL0M7QUFDRDs7QUFDRHJCLE1BQUFBLFlBQVksQ0FBQ2lDLFlBQUQsQ0FBWjtBQUNBWCxNQUFBQSxrQkFBa0IsQ0FBQ1ksa0JBQUQsQ0FBbEI7QUFDRDtBQUNGLEdBWEQ7O0FBYUEsTUFBTUUsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDbEIsT0FBRCxFQUFxQjtBQUMzQyxxQkFBVUEsT0FBTyxDQUFDbUIsS0FBUixDQUFjLEdBQWQsRUFBbUIsQ0FBbkIsQ0FBVjtBQUNELEdBRkQ7O0FBSUEsc0JBQ0UsOERBQUMsMERBQUQ7QUFBQSxjQUNHdEMsU0FBUyxDQUFDdUMsR0FBVixDQUFjLFVBQUNILFlBQUQ7QUFBQSwwQkFDYjtBQUFBLCtCQUNFLDhEQUFDLG9EQUFEO0FBQUEsa0NBQ0UsOERBQUMscURBQUQ7QUFBVSxlQUFHLEVBQUVBLFlBQVksQ0FBQ2pCO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRSw4REFBQyxvREFBRDtBQUFTLGlCQUFLLEVBQUV0QixxREFBaEI7QUFBQSx1QkFDR3dDLGVBQWUsQ0FBQ0QsWUFBWSxDQUFDakIsT0FBZCxDQURsQixlQUVFLDhEQUFDLG1EQUFEO0FBQVEscUJBQU8sRUFBRTtBQUFBLHVCQUFNYyxpQkFBaUIsQ0FBQ0csWUFBWSxDQUFDakIsT0FBZCxDQUF2QjtBQUFBLGVBQWpCO0FBQUEsd0JBQWlFaUIsWUFBWSxDQUFDZCxLQUFiLGdCQUFxQiw4REFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUFyQixnQkFBb0MsOERBQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFyRztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixTQUFVYyxZQUFZLENBQUNJLEVBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEYTtBQUFBLEtBQWQ7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFlRDs7R0FySXVCMUM7O0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9zdWJyZWVkcy9bZG9nTmFtZV0udHN4Pzc5YzIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2V0U3RhdGljUHJvcHMgfSBmcm9tIFwibmV4dC90eXBlc1wiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdjQgfSBmcm9tIFwidXVpZFwiO1xuaW1wb3J0IFJlZEhlYXJ0IGZyb20gXCIuLi8uLi9oZWxwZXJzL3JlZEhlYXJ0XCI7XG5pbXBvcnQgR3JleUhlYXJ0IGZyb20gXCIuLi8uLi9oZWxwZXJzL2dyZXlIZWFydFwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcblxuaW1wb3J0IHsgQnV0dG9uLCBEb2dDYXJkLCBEb2dJbWFnZSwgRG9nTmFtZSB9IGZyb20gXCIuLi8uLi9zdHlsZXMvRG9nQ2FyZFwiO1xuaW1wb3J0IHRoZW1lIGZyb20gXCIuLi8uLi9zdHlsZXMvdGhlbWVcIjtcbmltcG9ydCB7IERvZyB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEb2dQYWdlKHsgZG9ncyB9OiBhbnkpIHtcbiAgICBjb25zdCBbc3ViQnJlZWRzLCBzZXRTdWJCcmVlZHNdID0gdXNlU3RhdGU8RG9nW10+KFtdKTtcbiAgICBjb25zdCBbbG9jYWxTdG9yYWdlRmF2UGljcywgc2V0TG9jYWxTdG9yYWdlRmF2UGljc10gPSB1c2VTdGF0ZTxEb2dbXT4oKTtcblxuICAvLyBjb25zdCBzYXZlZGl0ZW1zID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZmF2UGljJykpO1xuICAvLyBjb25zdCBbc3ViQnJlZWRzLCBzZXRTdWJCcmVlZHNdID0gdXNlU3RhdGUoKCkgPT4ge1xuICAvLyAgIGNvbnN0IHNhdmVkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJmYXZQaWNcIik7XG4gIC8vICAgY29uc3QgaW5pdGlhbFZhbHVlID0gSlNPTi5wYXJzZShzYXZlZCk7XG4gIC8vICAgcmV0dXJuIGluaXRpYWxWYWx1ZSB8fCBcIlwiO1xuICAvLyB9KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChsb2NhbFN0b3JhZ2VGYXZQaWNzID09PSB1bmRlZmluZWQgJiYgc3ViQnJlZWRzLmxlbmd0aD4gMCkge1xuICAgICAgY29uc3Qgc3RvcmFnZURvZ3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZmF2UGljXCIpIHx8IFwibnVsbFwiKTtcbiAgICAgIHNldExvY2FsU3RvcmFnZUZhdlBpY3Moc3RvcmFnZURvZ3MpO1xuXG4gICAgICBjb25zb2xlLmxvZyh7c3ViQnJlZWRzfSlcblxuXG4gICAgICBpZihzdG9yYWdlRG9ncykge1xuICAgICAgICBjb25zdCBuZXdEb2dzID0gWy4uLnN1YkJyZWVkc107XG5cbiAgICAgICAgc3RvcmFnZURvZ3MuZm9yRWFjaCgoZG9nOiBEb2cpID0+IHtcbiAgICAgICAgICBjb25zdCBuZXdEb2cgPSBuZXdEb2dzLmZpbmQoZCA9PiBkLnBpY3R1cmUgPT09IGRvZy5waWN0dXJlKTtcbiAgICAgICAgICBjb25zdCBuZXdEb2dJbmRleCA9IG5ld0RvZ3MuZmluZEluZGV4KGQgPT4gZC5waWN0dXJlID09PSBkb2cucGljdHVyZSk7XG5cbiAgICAgICAgICBpZihuZXdEb2cpIHtcbiAgICAgICAgICAgIG5ld0RvZy5saWtlZCA9IHRydWU7XG4gICAgICAgICAgICBuZXdEb2dzW25ld0RvZ0luZGV4XSA9IG5ld0RvZztcbiAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG5cblxuICAgICAgICBzZXRTdWJCcmVlZHMobmV3RG9ncyk7XG4gICAgICB9XG5cbiAgICB9XG4gIH0sIFtzdWJCcmVlZHNdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChkb2dzKSB7XG4gICAgICBzZXRTdWJCcmVlZHMoZG9ncyk7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgLy8gY29uc3QgW2xpa2VkLCBzZXRMaWtlZF0gPSB1c2VTdGF0ZTxEb2dbXT4oW10pXG5cbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gICBjb25zdCBzZXRzbXRoID0gKHBpY3R1cmU6IHN0cmluZykgPT4ge1xuICAvLyAgICAgaWYgKHN1YkJyZWVkcykge1xuICAvLyAgICAgICBjb25zdCBsaWtlZFN1YiA9IFsuLi5zdWJCcmVlZHNdO1xuICAvLyAgICAgICBjb25zdCBnZXRMaWtlZFN1YkJyZWVkID0gbGlrZWRTdWIuZmluZCgoc3ViQnJlZWROYW1lKSA9PiBzdWJCcmVlZE5hbWUucGljdHVyZSA9PT0gcGljdHVyZSk7XG5cbiAgLy8gICAgICAgaWYgKGdldExpa2VkU3ViQnJlZWQpIHtcbiAgLy8gICAgICAgICBnZXRMaWtlZFN1YkJyZWVkLmxpa2VkID0gIWdldExpa2VkU3ViQnJlZWQubGlrZWQ7XG4gIC8vICAgICAgIH1cbiAgLy8gICAgICAgc2V0U3ViQnJlZWRzKGxpa2VkU3ViKTtcbiAgLy8gICAgIH1cbiAgLy8gICB9O1xuICAvLyB9KTtcblxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgIGNvbnN0IGZhdm91cml0ZURvZ3MgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImZhdlBpY1wiKTtcbiAgLy8gICBjb25zdCBzYXZlZERvZ3MgPSBKU09OLnBhcnNlKGZhdm91cml0ZURvZ3MpO1xuICAvLyAgIGlmIChzYXZlZERvZ3MpIHtcbiAgLy8gICAgIHNldFN1YkJyZWVkcyhzYXZlZERvZ3MpO1xuICAvLyAgIH1cbiAgLy8gfSwgW10pO1xuXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vICAgdmFyIGZhdm91cml0ZVN1YkJyZWVkUGljdHVyZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJmYXZQaWNcIikpO1xuICAvLyAgIGlmIChmYXZvdXJpdGVTdWJCcmVlZFBpY3R1cmUgPT09IG51bGwpIHtcbiAgLy8gICAgIHNldFN1YkJyZWVkcyhkb2dzKTtcbiAgLy8gICB9IGVsc2Uge1xuICAvLyAgICAgZmF2b3VyaXRlU3ViQnJlZWRQaWN0dXJlID0gZmF2b3VyaXRlU3ViQnJlZWRQaWN0dXJlLmZpbHRlcigoc3ViQnJlZWROYW1lOiBEb2cpID0+IHN1YkJyZWVkTmFtZS5waWN0dXJlICE9PSBkb2dzLnBpY3R1cmUpO1xuICAvLyAgIH1cbiAgLy8gICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImZhdlBpY1wiLCBKU09OLnN0cmluZ2lmeShmYXZvdXJpdGVTdWJCcmVlZFBpY3R1cmUpKTtcbiAgLy8gICBzZXRTdWJCcmVlZHMoZG9ncyk7XG4gIC8vIH0sIFtdKTtcblxuICBjb25zdCB1cGRhdGVMb2NhbFN0b3JhZ2UgPSAoaXRlbTogYW55KSA9PiB7XG4gICAgY29uc3Qgc3RvcmFnZUZhdlBpY3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZmF2UGljXCIpIHx8IFwibnVsbFwiKTtcbiAgICBsZXQgdXBkYXRlZFN0b3JhZ2VGYXZQaWNzO1xuXG4gICAgaWYgKHN0b3JhZ2VGYXZQaWNzID09PSBudWxsKSB7XG4gICAgICBjb25zdCBmYXZEb2dzID0gW2l0ZW1dO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJmYXZQaWNcIiwgSlNPTi5zdHJpbmdpZnkoZmF2RG9ncykpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoaXRlbS5saWtlZCkge1xuICAgICAgICBjb25zdCBmaWx0ZXJlZFBpY3R1cmVzID0gWy4uLnN0b3JhZ2VGYXZQaWNzXS5maWx0ZXIoZG9nID0+IGRvZy5waWN0dXJlICE9PSBpdGVtLnBpY3R1cmUpO1xuICAgICAgICB1cGRhdGVkU3RvcmFnZUZhdlBpY3MgPSBbLi4uZmlsdGVyZWRQaWN0dXJlcywgaXRlbV07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBmaWx0ZXJlZFBpY3R1cmVzID0gWy4uLnN0b3JhZ2VGYXZQaWNzXS5maWx0ZXIoZG9nID0+IGRvZy5waWN0dXJlICE9PSBpdGVtLnBpY3R1cmUpO1xuICAgICAgICB1cGRhdGVkU3RvcmFnZUZhdlBpY3MgPSBbLi4uZmlsdGVyZWRQaWN0dXJlc11cbiAgICAgIH1cbiAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwiZmF2UGljXCIpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJmYXZQaWNcIiwgSlNPTi5zdHJpbmdpZnkodXBkYXRlZFN0b3JhZ2VGYXZQaWNzKSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHNldEZhdm91cml0ZUltYWdlID0gKHBpY3R1cmU6IHN0cmluZykgPT4ge1xuICAgIGlmIChzdWJCcmVlZHMpIHtcbiAgICAgIGNvbnN0IG5ld1N1YkJyZWVkcyA9IFsuLi5zdWJCcmVlZHNdO1xuICAgICAgY29uc3QgZ2V0U3ViQnJlZWRQaWN0dXJlID0gbmV3U3ViQnJlZWRzLmZpbmQoKHN1YkJyZWVkTmFtZSkgPT4gc3ViQnJlZWROYW1lLnBpY3R1cmUgPT09IHBpY3R1cmUpO1xuICAgICAgY29uc29sZS5sb2cobmV3U3ViQnJlZWRzKTtcbiAgICAgIGlmIChnZXRTdWJCcmVlZFBpY3R1cmUpIHtcbiAgICAgICAgZ2V0U3ViQnJlZWRQaWN0dXJlLmxpa2VkID0gIWdldFN1YkJyZWVkUGljdHVyZS5saWtlZDtcbiAgICAgIH1cbiAgICAgIHNldFN1YkJyZWVkcyhuZXdTdWJCcmVlZHMpO1xuICAgICAgdXBkYXRlTG9jYWxTdG9yYWdlKGdldFN1YkJyZWVkUGljdHVyZSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGdldFN1YkJyZWVkTmFtZSA9IChwaWN0dXJlOiBzdHJpbmcpID0+IHtcbiAgICByZXR1cm4gYCR7cGljdHVyZS5zcGxpdChcIi9cIilbNF19YDtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICB7c3ViQnJlZWRzLm1hcCgoc3ViQnJlZWROYW1lOiBEb2cpID0+IChcbiAgICAgICAgPGRpdiBrZXk9e3N1YkJyZWVkTmFtZS5pZH0+XG4gICAgICAgICAgPERvZ0NhcmQ+XG4gICAgICAgICAgICA8RG9nSW1hZ2Ugc3JjPXtzdWJCcmVlZE5hbWUucGljdHVyZX0gLz5cbiAgICAgICAgICAgIDxEb2dOYW1lIHRoZW1lPXt0aGVtZX0+XG4gICAgICAgICAgICAgIHtnZXRTdWJCcmVlZE5hbWUoc3ViQnJlZWROYW1lLnBpY3R1cmUpfVxuICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldEZhdm91cml0ZUltYWdlKHN1YkJyZWVkTmFtZS5waWN0dXJlKX0+e3N1YkJyZWVkTmFtZS5saWtlZCA/IDxSZWRIZWFydCAvPiA6IDxHcmV5SGVhcnQgLz59PC9CdXR0b24+XG4gICAgICAgICAgICA8L0RvZ05hbWU+XG4gICAgICAgICAgPC9Eb2dDYXJkPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkpfVxuICAgIDwvTGF5b3V0PlxuICApO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9kb2cuY2VvL2FwaS9icmVlZHMvbGlzdC9hbGxcIik7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuXG4gIGNvbnN0IHBhdGhzID0gT2JqZWN0LmtleXMoZGF0YS5tZXNzYWdlKS5tYXAoKGRvZ3MpID0+ICh7XG4gICAgcGFyYW1zOiB7IGRvZ05hbWU6IGRvZ3MgfSxcbiAgfSkpO1xuXG4gIHJldHVybiB7XG4gICAgcGF0aHMsXG4gICAgZmFsbGJhY2s6IGZhbHNlLFxuICB9O1xufVxuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHM6IEdldFN0YXRpY1Byb3BzID0gYXN5bmMgKHsgcGFyYW1zIH0pID0+IHtcbiAgY29uc3QgeyBkb2dOYW1lIH06IGFueSA9IHBhcmFtcztcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vZG9nLmNlby9hcGkvYnJlZWQvJHtkb2dOYW1lfS9pbWFnZXNgKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgY29uc3QgZG9ncyA9IGRhdGEubWVzc2FnZS5tYXAoKGl0ZW1zOiBEb2cpID0+IHtcbiAgICByZXR1cm4geyBwaWN0dXJlOiBpdGVtcywgbGlrZWQ6IGZhbHNlLCBpZDogdjQoKSB9O1xuICB9KTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7IGRvZ3MsIGRvZ05hbWUgfSxcbiAgfTtcbn07XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJSZWRIZWFydCIsIkdyZXlIZWFydCIsIkxheW91dCIsIkJ1dHRvbiIsIkRvZ0NhcmQiLCJEb2dJbWFnZSIsIkRvZ05hbWUiLCJ0aGVtZSIsIkRvZ1BhZ2UiLCJkb2dzIiwic3ViQnJlZWRzIiwic2V0U3ViQnJlZWRzIiwibG9jYWxTdG9yYWdlRmF2UGljcyIsInNldExvY2FsU3RvcmFnZUZhdlBpY3MiLCJ1bmRlZmluZWQiLCJsZW5ndGgiLCJzdG9yYWdlRG9ncyIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJjb25zb2xlIiwibG9nIiwibmV3RG9ncyIsImZvckVhY2giLCJkb2ciLCJuZXdEb2ciLCJmaW5kIiwiZCIsInBpY3R1cmUiLCJuZXdEb2dJbmRleCIsImZpbmRJbmRleCIsImxpa2VkIiwidXBkYXRlTG9jYWxTdG9yYWdlIiwiaXRlbSIsInN0b3JhZ2VGYXZQaWNzIiwidXBkYXRlZFN0b3JhZ2VGYXZQaWNzIiwiZmF2RG9ncyIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJmaWx0ZXJlZFBpY3R1cmVzIiwiZmlsdGVyIiwicmVtb3ZlSXRlbSIsInNldEZhdm91cml0ZUltYWdlIiwibmV3U3ViQnJlZWRzIiwiZ2V0U3ViQnJlZWRQaWN0dXJlIiwic3ViQnJlZWROYW1lIiwiZ2V0U3ViQnJlZWROYW1lIiwic3BsaXQiLCJtYXAiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/subreeds/[dogName].tsx\n");

/***/ })

});