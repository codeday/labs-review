webpackHotUpdate("static/development/pages/[jwt].js",{

/***/ "./src/pages/[jwt].js":
/*!****************************!*\
  !*** ./src/pages/[jwt].js ***!
  \****************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSP\", function() { return __N_SSP; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _codeday_topo_Atom_Text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @codeday/topo/Atom/Text */ \"./node_modules/@codeday/topo/Atom/Text/index.js\");\n/* harmony import */ var _codeday_topo_Atom_Text__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_codeday_topo_Atom_Text__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _codeday_topo_Molecule_Content__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @codeday/topo/Molecule/Content */ \"./node_modules/@codeday/topo/Molecule/Content/index.js\");\n/* harmony import */ var _codeday_topo_Molecule_Content__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_codeday_topo_Molecule_Content__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _codeday_topo_Atom_Box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @codeday/topo/Atom/Box */ \"./node_modules/@codeday/topo/Atom/Box/index.js\");\n/* harmony import */ var _codeday_topo_Atom_Box__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_codeday_topo_Atom_Box__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _codeday_topo_Atom_Spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @codeday/topo/Atom/Spinner */ \"./node_modules/@codeday/topo/Atom/Spinner/index.js\");\n/* harmony import */ var _codeday_topo_Atom_Spinner__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_codeday_topo_Atom_Spinner__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _codeday_topo_Atom_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @codeday/topo/Atom/Button */ \"./node_modules/@codeday/topo/Atom/Button/index.js\");\n/* harmony import */ var _codeday_topo_Atom_Button__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_codeday_topo_Atom_Button__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _components_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/page */ \"./src/components/page.js\");\n\n\n\nvar _jsxFileName = \"/home/x/VCS/github.com/codeday/labs-review/src/pages/[jwt].js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\n\nvar __N_SSP = true;\nfunction Home(_ref) {\n  _s();\n\n  var _this = this;\n\n  var error = _ref.error,\n      jwt = _ref.jwt,\n      resultStates = _ref.resultStates;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(),\n      entry = _useState[0],\n      setEntry = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(true),\n      loading = _useState2[0],\n      setLoading = _useState2[1];\n\n  var updateEntry = /*#__PURE__*/function () {\n    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n      var result;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              setLoading(true);\n              _context.next = 3;\n              return fetch('/api/get-entry', {\n                method: 'POST',\n                headers: {\n                  'Content-Type': 'application/json'\n                },\n                body: JSON.stringify({\n                  jwt: jwt\n                })\n              });\n\n            case 3:\n              result = _context.sent;\n              _context.t0 = setEntry;\n              _context.next = 7;\n              return result.json();\n\n            case 7:\n              _context.t1 = _context.sent;\n              (0, _context.t0)(_context.t1);\n              setLoading(false);\n\n            case 10:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function updateEntry() {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    updateEntry();\n  }, []);\n  console.log(entry);\n  if (error) return __jsx(_components_page__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    slug: \"/\".concat(jwt),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 3\n    }\n  }, __jsx(_codeday_topo_Molecule_Content__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 4\n    }\n  }, __jsx(_codeday_topo_Atom_Text__WEBPACK_IMPORTED_MODULE_3__[\"Heading\"], {\n    as: \"h2\",\n    fontSize: \"5xl\",\n    textAlign: \"center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 5\n    }\n  }, \"Not found\")));\n  if (loading) return __jsx(_components_page__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    slug: \"/\".concat(jwt),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 3\n    }\n  }, __jsx(_codeday_topo_Molecule_Content__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 4\n    }\n  }, __jsx(_codeday_topo_Atom_Box__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    textAlign: \"center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 9\n    }\n  }, __jsx(_codeday_topo_Atom_Spinner__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 11\n    }\n  }))));\n  if (!entry) return __jsx(_components_page__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    slug: \"/\".concat(jwt),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 3\n    }\n  }, __jsx(_codeday_topo_Molecule_Content__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 4\n    }\n  }, __jsx(_codeday_topo_Atom_Text__WEBPACK_IMPORTED_MODULE_3__[\"Heading\"], {\n    as: \"h2\",\n    fontSize: \"5xl\",\n    textAlign: \"center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 5\n    }\n  }, \"All done for now!\")));\n  return __jsx(_components_page__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    slug: \"/\".concat(jwt),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 3\n    }\n  }, __jsx(_codeday_topo_Molecule_Content__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 4\n    }\n  }, __jsx(_codeday_topo_Atom_Text__WEBPACK_IMPORTED_MODULE_3__[\"Heading\"], {\n    as: \"h2\",\n    fontSize: \"5xl\",\n    textAlign: \"center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 5\n    }\n  }, \"Reviewing #\", entry['Cognito ID']), __jsx(_codeday_topo_Atom_Box__WEBPACK_IMPORTED_MODULE_5__[\"Grid\"], {\n    templateColumns: \"3fr 1fr\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 9\n    }\n  }, __jsx(_codeday_topo_Atom_Box__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    p: 8,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 11\n    }\n  }, __jsx(_codeday_topo_Atom_Box__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    as: \"table\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 13\n    }\n  }, Object.keys(entry).map(function (key) {\n    return __jsx(_codeday_topo_Atom_Box__WEBPACK_IMPORTED_MODULE_5___default.a, {\n      as: \"tr\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 77,\n        columnNumber: 17\n      }\n    }, __jsx(_codeday_topo_Atom_Box__WEBPACK_IMPORTED_MODULE_5___default.a, {\n      as: \"th\",\n      textAlign: \"right\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 78,\n        columnNumber: 19\n      }\n    }, key), __jsx(_codeday_topo_Atom_Box__WEBPACK_IMPORTED_MODULE_5___default.a, {\n      as: \"td\",\n      pl: 4,\n      pb: 4,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 79,\n        columnNumber: 19\n      }\n    }, entry[key]));\n  }))), __jsx(_codeday_topo_Atom_Box__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 11\n    }\n  }, resultStates.map(function (state) {\n    return __jsx(_codeday_topo_Atom_Button__WEBPACK_IMPORTED_MODULE_7___default.a, {\n      d: \"block\",\n      mb: 2,\n      onClick: /*#__PURE__*/function () {\n        var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(e) {\n          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n            while (1) {\n              switch (_context2.prev = _context2.next) {\n                case 0:\n                  setLoading(true);\n                  _context2.next = 3;\n                  return fetch(\"/api/judge-entry\", {\n                    method: 'POST',\n                    headers: {\n                      'Content-type': 'text/plain'\n                    },\n                    body: JSON.stringify({\n                      jwt: jwt,\n                      id: entry.id,\n                      state: state\n                    })\n                  });\n\n                case 3:\n                  updateEntry();\n\n                case 4:\n                case \"end\":\n                  return _context2.stop();\n              }\n            }\n          }, _callee2);\n        }));\n\n        return function (_x) {\n          return _ref3.apply(this, arguments);\n        };\n      }(),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 86,\n        columnNumber: 15\n      }\n    }, state);\n  })))));\n}\n\n_s(Home, \"hvyw8Rv1pcm07Zn6Bcz073H04l0=\");\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvW2p3dF0uanM/NmNkYyJdLCJuYW1lcyI6WyJIb21lIiwiZXJyb3IiLCJqd3QiLCJyZXN1bHRTdGF0ZXMiLCJ1c2VTdGF0ZSIsImVudHJ5Iiwic2V0RW50cnkiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInVwZGF0ZUVudHJ5IiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXN1bHQiLCJqc29uIiwidXNlRWZmZWN0IiwiY29uc29sZSIsImxvZyIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJrZXkiLCJzdGF0ZSIsImUiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTs7QUFnQmUsU0FBU0EsSUFBVCxPQUE0QztBQUFBOztBQUFBOztBQUFBLE1BQTVCQyxLQUE0QixRQUE1QkEsS0FBNEI7QUFBQSxNQUFyQkMsR0FBcUIsUUFBckJBLEdBQXFCO0FBQUEsTUFBaEJDLFlBQWdCLFFBQWhCQSxZQUFnQjs7QUFBQSxrQkFDL0JDLHNEQUFRLEVBRHVCO0FBQUEsTUFDbERDLEtBRGtEO0FBQUEsTUFDM0NDLFFBRDJDOztBQUFBLG1CQUUzQkYsc0RBQVEsQ0FBQyxJQUFELENBRm1CO0FBQUEsTUFFbERHLE9BRmtEO0FBQUEsTUFFekNDLFVBRnlDOztBQUl6RCxNQUFNQyxXQUFXO0FBQUEsaU1BQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2xCRCx3QkFBVSxDQUFDLElBQUQsQ0FBVjtBQURrQjtBQUFBLHFCQUVHRSxLQUFLLENBQUMsZ0JBQUQsRUFBbUI7QUFDM0NDLHNCQUFNLEVBQUUsTUFEbUM7QUFFM0NDLHVCQUFPLEVBQUU7QUFBRSxrQ0FBZ0I7QUFBbEIsaUJBRmtDO0FBRzNDQyxvQkFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZTtBQUFFYixxQkFBRyxFQUFIQTtBQUFGLGlCQUFmO0FBSHFDLGVBQW5CLENBRlI7O0FBQUE7QUFFWmMsb0JBRlk7QUFBQSw0QkFPbEJWLFFBUGtCO0FBQUE7QUFBQSxxQkFPSFUsTUFBTSxDQUFDQyxJQUFQLEVBUEc7O0FBQUE7QUFBQTtBQUFBO0FBUWxCVCx3QkFBVSxDQUFDLEtBQUQsQ0FBVjs7QUFSa0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBWEMsV0FBVztBQUFBO0FBQUE7QUFBQSxLQUFqQjs7QUFVQVMseURBQVMsQ0FBQyxZQUFNO0FBQUVULGVBQVc7QUFBSyxHQUF6QixFQUEyQixFQUEzQixDQUFUO0FBRUFVLFNBQU8sQ0FBQ0MsR0FBUixDQUFZZixLQUFaO0FBRUQsTUFBSUosS0FBSixFQUFXLE9BQ1YsTUFBQyx3REFBRDtBQUFNLFFBQUksYUFBTUMsR0FBTixDQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLHFFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLCtEQUFEO0FBQVMsTUFBRSxFQUFDLElBQVo7QUFBaUIsWUFBUSxFQUFDLEtBQTFCO0FBQWdDLGFBQVMsRUFBQyxRQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURELENBREQsQ0FEVTtBQVFWLE1BQUlLLE9BQUosRUFBYSxPQUNiLE1BQUMsd0RBQUQ7QUFBTSxRQUFJLGFBQU1MLEdBQU4sQ0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyxxRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ssTUFBQyw2REFBRDtBQUFLLGFBQVMsRUFBQyxRQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURMLENBREQsQ0FEYTtBQVViLE1BQUksQ0FBQ0csS0FBTCxFQUFZLE9BQ1osTUFBQyx3REFBRDtBQUFNLFFBQUksYUFBTUgsR0FBTixDQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLHFFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLCtEQUFEO0FBQVMsTUFBRSxFQUFDLElBQVo7QUFBaUIsWUFBUSxFQUFDLEtBQTFCO0FBQWdDLGFBQVMsRUFBQyxRQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURELENBREQsQ0FEWTtBQVFaLFNBQ0EsTUFBQyx3REFBRDtBQUFNLFFBQUksYUFBTUEsR0FBTixDQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLHFFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLCtEQUFEO0FBQVMsTUFBRSxFQUFDLElBQVo7QUFBaUIsWUFBUSxFQUFDLEtBQTFCO0FBQWdDLGFBQVMsRUFBQyxRQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUErREcsS0FBSyxDQUFDLFlBQUQsQ0FBcEUsQ0FERCxFQUVLLE1BQUMsMkRBQUQ7QUFBTSxtQkFBZSxFQUFDLFNBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDZEQUFEO0FBQUssS0FBQyxFQUFFLENBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsNkRBQUQ7QUFBSyxNQUFFLEVBQUMsT0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dnQixNQUFNLENBQUNDLElBQVAsQ0FBWWpCLEtBQVosRUFBbUJrQixHQUFuQixDQUF1QixVQUFDQyxHQUFEO0FBQUEsV0FDdEIsTUFBQyw2REFBRDtBQUFLLFFBQUUsRUFBQyxJQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLDZEQUFEO0FBQUssUUFBRSxFQUFDLElBQVI7QUFBYSxlQUFTLEVBQUMsT0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFnQ0EsR0FBaEMsQ0FERixFQUVFLE1BQUMsNkRBQUQ7QUFBSyxRQUFFLEVBQUMsSUFBUjtBQUFhLFFBQUUsRUFBRSxDQUFqQjtBQUFvQixRQUFFLEVBQUUsQ0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUE0Qm5CLEtBQUssQ0FBQ21CLEdBQUQsQ0FBakMsQ0FGRixDQURzQjtBQUFBLEdBQXZCLENBREgsQ0FERixDQURGLEVBV0UsTUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dyQixZQUFZLENBQUNvQixHQUFiLENBQWlCLFVBQUNFLEtBQUQ7QUFBQSxXQUNoQixNQUFDLGdFQUFEO0FBQ0UsT0FBQyxFQUFDLE9BREo7QUFFRSxRQUFFLEVBQUUsQ0FGTjtBQUdFLGFBQU87QUFBQSxxTUFBRSxrQkFBT0MsQ0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1BsQiw0QkFBVSxDQUFDLElBQUQsQ0FBVjtBQURPO0FBQUEseUJBRURFLEtBQUssQ0FBQyxrQkFBRCxFQUFxQjtBQUM5QkMsMEJBQU0sRUFBRSxNQURzQjtBQUU5QkMsMkJBQU8sRUFBRTtBQUFFLHNDQUFnQjtBQUFsQixxQkFGcUI7QUFHOUJDLHdCQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQUViLHlCQUFHLEVBQUhBLEdBQUY7QUFBT3lCLHdCQUFFLEVBQUV0QixLQUFLLENBQUNzQixFQUFqQjtBQUFxQkYsMkJBQUssRUFBTEE7QUFBckIscUJBQWY7QUFId0IsbUJBQXJCLENBRko7O0FBQUE7QUFPUGhCLDZCQUFXOztBQVBKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQUY7O0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FIVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BYUdnQixLQWJILENBRGdCO0FBQUEsR0FBakIsQ0FESCxDQVhGLENBRkwsQ0FERCxDQURBO0FBc0NEOztHQWxGdUJ6QixJOztLQUFBQSxJIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL1tqd3RdLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBIZWFkaW5nIH0gZnJvbSAnQGNvZGVkYXkvdG9wby9BdG9tL1RleHQnO1xuaW1wb3J0IENvbnRlbnQgZnJvbSAnQGNvZGVkYXkvdG9wby9Nb2xlY3VsZS9Db250ZW50JztcbmltcG9ydCBCb3gsIHsgR3JpZCB9IGZyb20gJ0Bjb2RlZGF5L3RvcG8vQXRvbS9Cb3gnO1xuaW1wb3J0IFNwaW5uZXIgZnJvbSAnQGNvZGVkYXkvdG9wby9BdG9tL1NwaW5uZXInO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAY29kZWRheS90b3BvL0F0b20vQnV0dG9uJztcbmltcG9ydCBnZXRDb25maWcgZnJvbSAnbmV4dC9jb25maWcnO1xuaW1wb3J0IHsgdmVyaWZ5IH0gZnJvbSAnanNvbndlYnRva2VuJztcbmltcG9ydCBQYWdlIGZyb20gJy4uL2NvbXBvbmVudHMvcGFnZSc7XG5cbmNvbnN0IHsgc2VydmVyUnVudGltZUNvbmZpZyB9ID0gZ2V0Q29uZmlnKCk7XG5cbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoeyBwYXJhbXM6IHsgand0IH0gfSwgcmVzKSA9PiB7XG4gIGxldCByZXN1bHRTdGF0ZXM7XG4gIHRyeSB7XG4gICAgcmVzdWx0U3RhdGVzID0gdmVyaWZ5KGp3dCwgc2VydmVyUnVudGltZUNvbmZpZy5hcHBTZWNyZXQpLnJlc3VsdFN0YXRlcztcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmVzLnN0YXR1c0NvZGUgPSA0MDQ7XG4gICAgcmV0dXJuIHsgcHJvcHM6IHsgZXJyb3I6IHRydWUgfSB9O1xuICB9XG5cbiAgcmV0dXJuIHsgcHJvcHM6IHsgand0LCByZXN1bHRTdGF0ZXM6IHJlc3VsdFN0YXRlcy5zcGxpdCgnLCcpIH0gfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7IGVycm9yLCBqd3QsIHJlc3VsdFN0YXRlcyB9KSB7XG4gIGNvbnN0IFtlbnRyeSwgc2V0RW50cnldID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgY29uc3QgdXBkYXRlRW50cnkgPSBhc3luYyAoKSA9PiB7XG4gICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBmZXRjaCgnL2FwaS9nZXQtZW50cnknLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBqd3QgfSlcbiAgICB9KTtcbiAgICBzZXRFbnRyeShhd2FpdCByZXN1bHQuanNvbigpKTtcbiAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgfTtcbiAgdXNlRWZmZWN0KCgpID0+IHsgdXBkYXRlRW50cnkoKTsgfSwgW10pO1xuXG4gIGNvbnNvbGUubG9nKGVudHJ5KTtcblxuXHRpZiAoZXJyb3IpIHJldHVybiAoXG5cdFx0PFBhZ2Ugc2x1Zz17YC8ke2p3dH1gfT5cblx0XHRcdDxDb250ZW50PlxuXHRcdFx0XHQ8SGVhZGluZyBhcz1cImgyXCIgZm9udFNpemU9XCI1eGxcIiB0ZXh0QWxpZ249XCJjZW50ZXJcIj5Ob3QgZm91bmQ8L0hlYWRpbmc+XG5cdFx0XHQ8L0NvbnRlbnQ+XG5cdFx0PC9QYWdlPlxuICApO1xuXG4gIGlmIChsb2FkaW5nKSByZXR1cm4gKFxuXHRcdDxQYWdlIHNsdWc9e2AvJHtqd3R9YH0+XG5cdFx0XHQ8Q29udGVudD5cbiAgICAgICAgPEJveCB0ZXh0QWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgICA8U3Bpbm5lciAvPlxuICAgICAgICA8L0JveD5cblx0XHRcdDwvQ29udGVudD5cblx0XHQ8L1BhZ2U+XG4gICk7XG5cbiAgaWYgKCFlbnRyeSkgcmV0dXJuIChcblx0XHQ8UGFnZSBzbHVnPXtgLyR7and0fWB9PlxuXHRcdFx0PENvbnRlbnQ+XG5cdFx0XHRcdDxIZWFkaW5nIGFzPVwiaDJcIiBmb250U2l6ZT1cIjV4bFwiIHRleHRBbGlnbj1cImNlbnRlclwiPkFsbCBkb25lIGZvciBub3chPC9IZWFkaW5nPlxuXHRcdFx0PC9Db250ZW50PlxuXHRcdDwvUGFnZT5cbiAgKTtcblxuICByZXR1cm4gKFxuXHRcdDxQYWdlIHNsdWc9e2AvJHtqd3R9YH0+XG5cdFx0XHQ8Q29udGVudD5cblx0XHRcdFx0PEhlYWRpbmcgYXM9XCJoMlwiIGZvbnRTaXplPVwiNXhsXCIgdGV4dEFsaWduPVwiY2VudGVyXCI+UmV2aWV3aW5nICN7ZW50cnlbJ0NvZ25pdG8gSUQnXX08L0hlYWRpbmc+XG4gICAgICAgIDxHcmlkIHRlbXBsYXRlQ29sdW1ucz1cIjNmciAxZnJcIj5cbiAgICAgICAgICA8Qm94IHA9ezh9PlxuICAgICAgICAgICAgPEJveCBhcz1cInRhYmxlXCI+XG4gICAgICAgICAgICAgIHtPYmplY3Qua2V5cyhlbnRyeSkubWFwKChrZXkpID0+IChcbiAgICAgICAgICAgICAgICA8Qm94IGFzPVwidHJcIj5cbiAgICAgICAgICAgICAgICAgIDxCb3ggYXM9XCJ0aFwiIHRleHRBbGlnbj1cInJpZ2h0XCI+e2tleX08L0JveD5cbiAgICAgICAgICAgICAgICAgIDxCb3ggYXM9XCJ0ZFwiIHBsPXs0fSBwYj17NH0+e2VudHJ5W2tleV19PC9Cb3g+XG4gICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgPEJveD5cbiAgICAgICAgICAgIHtyZXN1bHRTdGF0ZXMubWFwKChzdGF0ZSkgPT4gKFxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgZD1cImJsb2NrXCJcbiAgICAgICAgICAgICAgICBtYj17Mn1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXthc3luYyAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICAgICAgICAgICAgICAgIGF3YWl0IGZldGNoKFwiL2FwaS9qdWRnZS1lbnRyeVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LXR5cGUnOiAndGV4dC9wbGFpbicgfSxcbiAgICAgICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBqd3QsIGlkOiBlbnRyeS5pZCwgc3RhdGUgfSksXG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgIHVwZGF0ZUVudHJ5KCk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtzdGF0ZX1cbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9HcmlkPlxuXHRcdFx0PC9Db250ZW50PlxuXHRcdDwvUGFnZT5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/[jwt].js\n");

/***/ })

})