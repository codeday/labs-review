webpackHotUpdate("static/development/pages/[jwt].js",{

/***/ "./src/pages/[jwt].js":
/*!****************************!*\
  !*** ./src/pages/[jwt].js ***!
  \****************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSP\", function() { return __N_SSP; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _codeday_topo_Atom_Text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @codeday/topo/Atom/Text */ \"./node_modules/@codeday/topo/Atom/Text/index.js\");\n/* harmony import */ var _codeday_topo_Atom_Text__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_codeday_topo_Atom_Text__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _codeday_topo_Molecule_Content__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @codeday/topo/Molecule/Content */ \"./node_modules/@codeday/topo/Molecule/Content/index.js\");\n/* harmony import */ var _codeday_topo_Molecule_Content__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_codeday_topo_Molecule_Content__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _codeday_topo_Atom_Box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @codeday/topo/Atom/Box */ \"./node_modules/@codeday/topo/Atom/Box/index.js\");\n/* harmony import */ var _codeday_topo_Atom_Box__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_codeday_topo_Atom_Box__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _codeday_topo_Atom_Spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @codeday/topo/Atom/Spinner */ \"./node_modules/@codeday/topo/Atom/Spinner/index.js\");\n/* harmony import */ var _codeday_topo_Atom_Spinner__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_codeday_topo_Atom_Spinner__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _codeday_topo_Atom_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @codeday/topo/Atom/Button */ \"./node_modules/@codeday/topo/Atom/Button/index.js\");\n/* harmony import */ var _codeday_topo_Atom_Button__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_codeday_topo_Atom_Button__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _components_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/page */ \"./src/components/page.js\");\n\n\n\nvar _jsxFileName = \"/home/x/VCS/github.com/codeday/labs-review/src/pages/[jwt].js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\n\nvar __N_SSP = true;\nfunction Home(_ref) {\n  _s();\n\n  var _this = this;\n\n  var error = _ref.error,\n      jwt = _ref.jwt,\n      resultStates = _ref.resultStates;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(),\n      entry = _useState[0],\n      setEntry = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(true),\n      loading = _useState2[0],\n      setLoading = _useState2[1];\n\n  var updateEntry = /*#__PURE__*/function () {\n    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n      var result;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              setLoading(true);\n              _context.next = 3;\n              return fetch('/api/get-entry', {\n                method: 'POST',\n                headers: {\n                  'Content-Type': 'application/json'\n                },\n                body: JSON.stringify({\n                  jwt: jwt\n                })\n              });\n\n            case 3:\n              result = _context.sent;\n              _context.t0 = setEntry;\n              _context.next = 7;\n              return result.json();\n\n            case 7:\n              _context.t1 = _context.sent;\n              (0, _context.t0)(_context.t1);\n              setLoading(false);\n\n            case 10:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function updateEntry() {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    updateEntry();\n  }, []);\n  console.log(entry);\n  if (error) return __jsx(_components_page__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    slug: \"/\".concat(jwt),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 3\n    }\n  }, __jsx(_codeday_topo_Molecule_Content__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 4\n    }\n  }, __jsx(_codeday_topo_Atom_Text__WEBPACK_IMPORTED_MODULE_3__[\"Heading\"], {\n    as: \"h2\",\n    fontSize: \"5xl\",\n    textAlign: \"center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 5\n    }\n  }, \"Not found\")));\n  if (loading) return __jsx(_components_page__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    slug: \"/\".concat(jwt),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 3\n    }\n  }, __jsx(_codeday_topo_Molecule_Content__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 4\n    }\n  }, __jsx(_codeday_topo_Atom_Box__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    textAlign: \"center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 9\n    }\n  }, __jsx(_codeday_topo_Atom_Spinner__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 11\n    }\n  }))));\n  if (!entry) return __jsx(_components_page__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    slug: \"/\".concat(jwt),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 3\n    }\n  }, __jsx(_codeday_topo_Molecule_Content__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 4\n    }\n  }, __jsx(_codeday_topo_Atom_Text__WEBPACK_IMPORTED_MODULE_3__[\"Heading\"], {\n    as: \"h2\",\n    fontSize: \"5xl\",\n    textAlign: \"center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 5\n    }\n  }, \"All done for now!\")));\n  return __jsx(_components_page__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    slug: \"/\".concat(jwt),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 3\n    }\n  }, __jsx(_codeday_topo_Molecule_Content__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 4\n    }\n  }, __jsx(_codeday_topo_Atom_Text__WEBPACK_IMPORTED_MODULE_3__[\"Heading\"], {\n    as: \"h2\",\n    fontSize: \"5xl\",\n    textAlign: \"center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 5\n    }\n  }, \"Reviewing #\", entry['Cognito ID']), __jsx(_codeday_topo_Atom_Box__WEBPACK_IMPORTED_MODULE_5__[\"Grid\"], {\n    templateColumns: \"3fr 1fr\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 9\n    }\n  }, __jsx(_codeday_topo_Atom_Box__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 11\n    }\n  }), __jsx(_codeday_topo_Atom_Box__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 11\n    }\n  }, __jsx(_codeday_topo_Atom_Text__WEBPACK_IMPORTED_MODULE_3__[\"Heading\"], {\n    as: \"h3\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 13\n    }\n  }, \"Judgement\"), resultStates.map(function (state) {\n    return __jsx(_codeday_topo_Atom_Button__WEBPACK_IMPORTED_MODULE_7___default.a, {\n      d: \"block\",\n      mb: 2,\n      onClick: /*#__PURE__*/function () {\n        var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(e) {\n          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n            while (1) {\n              switch (_context2.prev = _context2.next) {\n                case 0:\n                  setLoading(true);\n                  _context2.next = 3;\n                  return fetch(\"/api/judge-entry\", {\n                    method: 'POST',\n                    headers: {\n                      'Content-type': 'text/plain'\n                    },\n                    body: JSON.stringify({\n                      jwt: jwt,\n                      id: entry.id,\n                      state: state\n                    })\n                  });\n\n                case 3:\n                  updateEntry();\n\n                case 4:\n                case \"end\":\n                  return _context2.stop();\n              }\n            }\n          }, _callee2);\n        }));\n\n        return function (_x) {\n          return _ref3.apply(this, arguments);\n        };\n      }(),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 80,\n        columnNumber: 15\n      }\n    }, state);\n  })))));\n}\n\n_s(Home, \"hvyw8Rv1pcm07Zn6Bcz073H04l0=\");\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvW2p3dF0uanM/NmNkYyJdLCJuYW1lcyI6WyJIb21lIiwiZXJyb3IiLCJqd3QiLCJyZXN1bHRTdGF0ZXMiLCJ1c2VTdGF0ZSIsImVudHJ5Iiwic2V0RW50cnkiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInVwZGF0ZUVudHJ5IiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXN1bHQiLCJqc29uIiwidXNlRWZmZWN0IiwiY29uc29sZSIsImxvZyIsIm1hcCIsInN0YXRlIiwiZSIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBOztBQWdCZSxTQUFTQSxJQUFULE9BQTRDO0FBQUE7O0FBQUE7O0FBQUEsTUFBNUJDLEtBQTRCLFFBQTVCQSxLQUE0QjtBQUFBLE1BQXJCQyxHQUFxQixRQUFyQkEsR0FBcUI7QUFBQSxNQUFoQkMsWUFBZ0IsUUFBaEJBLFlBQWdCOztBQUFBLGtCQUMvQkMsc0RBQVEsRUFEdUI7QUFBQSxNQUNsREMsS0FEa0Q7QUFBQSxNQUMzQ0MsUUFEMkM7O0FBQUEsbUJBRTNCRixzREFBUSxDQUFDLElBQUQsQ0FGbUI7QUFBQSxNQUVsREcsT0FGa0Q7QUFBQSxNQUV6Q0MsVUFGeUM7O0FBSXpELE1BQU1DLFdBQVc7QUFBQSxpTUFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDbEJELHdCQUFVLENBQUMsSUFBRCxDQUFWO0FBRGtCO0FBQUEscUJBRUdFLEtBQUssQ0FBQyxnQkFBRCxFQUFtQjtBQUMzQ0Msc0JBQU0sRUFBRSxNQURtQztBQUUzQ0MsdUJBQU8sRUFBRTtBQUFFLGtDQUFnQjtBQUFsQixpQkFGa0M7QUFHM0NDLG9CQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQUViLHFCQUFHLEVBQUhBO0FBQUYsaUJBQWY7QUFIcUMsZUFBbkIsQ0FGUjs7QUFBQTtBQUVaYyxvQkFGWTtBQUFBLDRCQU9sQlYsUUFQa0I7QUFBQTtBQUFBLHFCQU9IVSxNQUFNLENBQUNDLElBQVAsRUFQRzs7QUFBQTtBQUFBO0FBQUE7QUFRbEJULHdCQUFVLENBQUMsS0FBRCxDQUFWOztBQVJrQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFYQyxXQUFXO0FBQUE7QUFBQTtBQUFBLEtBQWpCOztBQVVBUyx5REFBUyxDQUFDLFlBQU07QUFBRVQsZUFBVztBQUFLLEdBQXpCLEVBQTJCLEVBQTNCLENBQVQ7QUFFQVUsU0FBTyxDQUFDQyxHQUFSLENBQVlmLEtBQVo7QUFFRCxNQUFJSixLQUFKLEVBQVcsT0FDVixNQUFDLHdEQUFEO0FBQU0sUUFBSSxhQUFNQyxHQUFOLENBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMscUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsK0RBQUQ7QUFBUyxNQUFFLEVBQUMsSUFBWjtBQUFpQixZQUFRLEVBQUMsS0FBMUI7QUFBZ0MsYUFBUyxFQUFDLFFBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREQsQ0FERCxDQURVO0FBUVYsTUFBSUssT0FBSixFQUFhLE9BQ2IsTUFBQyx3REFBRDtBQUFNLFFBQUksYUFBTUwsR0FBTixDQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLHFFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSyxNQUFDLDZEQUFEO0FBQUssYUFBUyxFQUFDLFFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREwsQ0FERCxDQURhO0FBVWIsTUFBSSxDQUFDRyxLQUFMLEVBQVksT0FDWixNQUFDLHdEQUFEO0FBQU0sUUFBSSxhQUFNSCxHQUFOLENBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMscUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsK0RBQUQ7QUFBUyxNQUFFLEVBQUMsSUFBWjtBQUFpQixZQUFRLEVBQUMsS0FBMUI7QUFBZ0MsYUFBUyxFQUFDLFFBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREQsQ0FERCxDQURZO0FBUVosU0FDQSxNQUFDLHdEQUFEO0FBQU0sUUFBSSxhQUFNQSxHQUFOLENBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMscUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsK0RBQUQ7QUFBUyxNQUFFLEVBQUMsSUFBWjtBQUFpQixZQUFRLEVBQUMsS0FBMUI7QUFBZ0MsYUFBUyxFQUFDLFFBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQStERyxLQUFLLENBQUMsWUFBRCxDQUFwRSxDQURELEVBRUssTUFBQywyREFBRDtBQUFNLG1CQUFlLEVBQUMsU0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBSUUsTUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywrREFBRDtBQUFTLE1BQUUsRUFBQyxJQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsRUFFR0YsWUFBWSxDQUFDa0IsR0FBYixDQUFpQixVQUFDQyxLQUFEO0FBQUEsV0FDaEIsTUFBQyxnRUFBRDtBQUNFLE9BQUMsRUFBQyxPQURKO0FBRUUsUUFBRSxFQUFFLENBRk47QUFHRSxhQUFPO0FBQUEscU1BQUUsa0JBQU9DLENBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNQZiw0QkFBVSxDQUFDLElBQUQsQ0FBVjtBQURPO0FBQUEseUJBRURFLEtBQUssQ0FBQyxrQkFBRCxFQUFxQjtBQUM5QkMsMEJBQU0sRUFBRSxNQURzQjtBQUU5QkMsMkJBQU8sRUFBRTtBQUFFLHNDQUFnQjtBQUFsQixxQkFGcUI7QUFHOUJDLHdCQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQUViLHlCQUFHLEVBQUhBLEdBQUY7QUFBT3NCLHdCQUFFLEVBQUVuQixLQUFLLENBQUNtQixFQUFqQjtBQUFxQkYsMkJBQUssRUFBTEE7QUFBckIscUJBQWY7QUFId0IsbUJBQXJCLENBRko7O0FBQUE7QUFPUGIsNkJBQVc7O0FBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBRjs7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUhUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FhR2EsS0FiSCxDQURnQjtBQUFBLEdBQWpCLENBRkgsQ0FKRixDQUZMLENBREQsQ0FEQTtBQWdDRDs7R0E1RXVCdEIsSTs7S0FBQUEsSSIsImZpbGUiOiIuL3NyYy9wYWdlcy9band0XS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgSGVhZGluZyB9IGZyb20gJ0Bjb2RlZGF5L3RvcG8vQXRvbS9UZXh0JztcbmltcG9ydCBDb250ZW50IGZyb20gJ0Bjb2RlZGF5L3RvcG8vTW9sZWN1bGUvQ29udGVudCc7XG5pbXBvcnQgQm94LCB7IEdyaWQgfSBmcm9tICdAY29kZWRheS90b3BvL0F0b20vQm94JztcbmltcG9ydCBTcGlubmVyIGZyb20gJ0Bjb2RlZGF5L3RvcG8vQXRvbS9TcGlubmVyJztcbmltcG9ydCBCdXR0b24gZnJvbSAnQGNvZGVkYXkvdG9wby9BdG9tL0J1dHRvbic7XG5pbXBvcnQgZ2V0Q29uZmlnIGZyb20gJ25leHQvY29uZmlnJztcbmltcG9ydCB7IHZlcmlmeSB9IGZyb20gJ2pzb253ZWJ0b2tlbic7XG5pbXBvcnQgUGFnZSBmcm9tICcuLi9jb21wb25lbnRzL3BhZ2UnO1xuXG5jb25zdCB7IHNlcnZlclJ1bnRpbWVDb25maWcgfSA9IGdldENvbmZpZygpO1xuXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKHsgcGFyYW1zOiB7IGp3dCB9IH0sIHJlcykgPT4ge1xuICBsZXQgcmVzdWx0U3RhdGVzO1xuICB0cnkge1xuICAgIHJlc3VsdFN0YXRlcyA9IHZlcmlmeShqd3QsIHNlcnZlclJ1bnRpbWVDb25maWcuYXBwU2VjcmV0KS5yZXN1bHRTdGF0ZXM7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHJlcy5zdGF0dXNDb2RlID0gNDA0O1xuICAgIHJldHVybiB7IHByb3BzOiB7IGVycm9yOiB0cnVlIH0gfTtcbiAgfVxuXG4gIHJldHVybiB7IHByb3BzOiB7IGp3dCwgcmVzdWx0U3RhdGVzOiByZXN1bHRTdGF0ZXMuc3BsaXQoJywnKSB9IH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoeyBlcnJvciwgand0LCByZXN1bHRTdGF0ZXMgfSkge1xuICBjb25zdCBbZW50cnksIHNldEVudHJ5XSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gIGNvbnN0IHVwZGF0ZUVudHJ5ID0gYXN5bmMgKCkgPT4ge1xuICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZmV0Y2goJy9hcGkvZ2V0LWVudHJ5Jywge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgand0IH0pXG4gICAgfSk7XG4gICAgc2V0RW50cnkoYXdhaXQgcmVzdWx0Lmpzb24oKSk7XG4gICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gIH07XG4gIHVzZUVmZmVjdCgoKSA9PiB7IHVwZGF0ZUVudHJ5KCk7IH0sIFtdKTtcblxuICBjb25zb2xlLmxvZyhlbnRyeSk7XG5cblx0aWYgKGVycm9yKSByZXR1cm4gKFxuXHRcdDxQYWdlIHNsdWc9e2AvJHtqd3R9YH0+XG5cdFx0XHQ8Q29udGVudD5cblx0XHRcdFx0PEhlYWRpbmcgYXM9XCJoMlwiIGZvbnRTaXplPVwiNXhsXCIgdGV4dEFsaWduPVwiY2VudGVyXCI+Tm90IGZvdW5kPC9IZWFkaW5nPlxuXHRcdFx0PC9Db250ZW50PlxuXHRcdDwvUGFnZT5cbiAgKTtcblxuICBpZiAobG9hZGluZykgcmV0dXJuIChcblx0XHQ8UGFnZSBzbHVnPXtgLyR7and0fWB9PlxuXHRcdFx0PENvbnRlbnQ+XG4gICAgICAgIDxCb3ggdGV4dEFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgICAgPFNwaW5uZXIgLz5cbiAgICAgICAgPC9Cb3g+XG5cdFx0XHQ8L0NvbnRlbnQ+XG5cdFx0PC9QYWdlPlxuICApO1xuXG4gIGlmICghZW50cnkpIHJldHVybiAoXG5cdFx0PFBhZ2Ugc2x1Zz17YC8ke2p3dH1gfT5cblx0XHRcdDxDb250ZW50PlxuXHRcdFx0XHQ8SGVhZGluZyBhcz1cImgyXCIgZm9udFNpemU9XCI1eGxcIiB0ZXh0QWxpZ249XCJjZW50ZXJcIj5BbGwgZG9uZSBmb3Igbm93ITwvSGVhZGluZz5cblx0XHRcdDwvQ29udGVudD5cblx0XHQ8L1BhZ2U+XG4gICk7XG5cbiAgcmV0dXJuIChcblx0XHQ8UGFnZSBzbHVnPXtgLyR7and0fWB9PlxuXHRcdFx0PENvbnRlbnQ+XG5cdFx0XHRcdDxIZWFkaW5nIGFzPVwiaDJcIiBmb250U2l6ZT1cIjV4bFwiIHRleHRBbGlnbj1cImNlbnRlclwiPlJldmlld2luZyAje2VudHJ5WydDb2duaXRvIElEJ119PC9IZWFkaW5nPlxuICAgICAgICA8R3JpZCB0ZW1wbGF0ZUNvbHVtbnM9XCIzZnIgMWZyXCI+XG4gICAgICAgICAgPEJveD5cblxuICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDxCb3g+XG4gICAgICAgICAgICA8SGVhZGluZyBhcz1cImgzXCI+SnVkZ2VtZW50PC9IZWFkaW5nPlxuICAgICAgICAgICAge3Jlc3VsdFN0YXRlcy5tYXAoKHN0YXRlKSA9PiAoXG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICBkPVwiYmxvY2tcIlxuICAgICAgICAgICAgICAgIG1iPXsyfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2FzeW5jIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgICAgICAgICAgICAgICAgYXdhaXQgZmV0Y2goXCIvYXBpL2p1ZGdlLWVudHJ5XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtdHlwZSc6ICd0ZXh0L3BsYWluJyB9LFxuICAgICAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGp3dCwgaWQ6IGVudHJ5LmlkLCBzdGF0ZSB9KSxcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgdXBkYXRlRW50cnkoKTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3N0YXRlfVxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L0dyaWQ+XG5cdFx0XHQ8L0NvbnRlbnQ+XG5cdFx0PC9QYWdlPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/[jwt].js\n");

/***/ })

})