/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/client/Routes.js":
/*!******************************!*\
  !*** ./src/client/Routes.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_books_Books__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/books/Books */ \"./src/client/components/books/Books.js\");\n/* harmony import */ var _components_home_Home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/Home */ \"./src/client/components/home/Home.js\");\n/* harmony import */ var _components_book_Book__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/book/Book */ \"./src/client/components/book/Book.js\");\n\n //Components\n\n\n\n\n\nvar Routes = function Routes(props) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Switch\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n    exact: true,\n    path: \"/\",\n    component: _components_home_Home__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n    exact: true,\n    path: \"/books\",\n    component: _components_books_Books__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n    exact: true,\n    path: \"/book/:id\",\n    component: _components_book_Book__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Routes);\n\n//# sourceURL=webpack:///./src/client/Routes.js?");

/***/ }),

/***/ "./src/client/apollo-client.js":
/*!*************************************!*\
  !*** ./src/client/apollo-client.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-boost */ \"apollo-boost\");\n/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_boost__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! node-fetch */ \"node-fetch\");\n/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar client = new apollo_boost__WEBPACK_IMPORTED_MODULE_0___default.a({\n  uri: '/graphql',\n  fetch: node_fetch__WEBPACK_IMPORTED_MODULE_1___default.a\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (client);\n\n//# sourceURL=webpack:///./src/client/apollo-client.js?");

/***/ }),

/***/ "./src/client/components/App.js":
/*!**************************************!*\
  !*** ./src/client/components/App.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Routes */ \"./src/client/Routes.js\");\n/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apollo */ \"react-apollo\");\n/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../apollo-client */ \"./src/client/apollo-client.js\");\n/* harmony import */ var _layout_Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout/Navbar */ \"./src/client/components/layout/Navbar.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n //Components\n\n\n\nvar App =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(App, _Component);\n\n  function App() {\n    _classCallCheck(this, App);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(App).apply(this, arguments));\n  }\n\n  _createClass(App, [{\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__[\"ApolloProvider\"], {\n        client: _apollo_client__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n        id: \"top\",\n        href: \"#nav\"\n      }, \"Top\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layout_Navbar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"main\", {\n        className: \"container\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Routes__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null))));\n    }\n  }]);\n\n  return App;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n//# sourceURL=webpack:///./src/client/components/App.js?");

/***/ }),

/***/ "./src/client/components/book/AddBook.js":
/*!***********************************************!*\
  !*** ./src/client/components/book/AddBook.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ \"react-apollo\");\n/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _AddBookP__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AddBookP */ \"./src/client/components/book/AddBookP.js\");\n/* harmony import */ var _queries_book_queries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../queries/book.queries */ \"./src/client/queries/book.queries.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n //Components\n\n //Queries\n\n\n\nvar AddBook =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(AddBook, _Component);\n\n  function AddBook() {\n    var _getPrototypeOf2;\n\n    var _this;\n\n    _classCallCheck(this, AddBook);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(AddBook)).call.apply(_getPrototypeOf2, [this].concat(args)));\n\n    _defineProperty(_assertThisInitialized(_this), \"state\", {\n      title: '',\n      genre: '',\n      author: '',\n      showForm: false\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"handleChange\", function (e) {\n      _this.setState(_defineProperty({}, e.target.id, e.target.value));\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"handleSubmit\", function (e) {\n      e.preventDefault();\n      var _this$state = _this.state,\n          title = _this$state.title,\n          genre = _this$state.genre,\n          author = _this$state.author;\n\n      if (title, genre, autor) {\n        _this.props.addBookMutation({\n          variables: {\n            title: title,\n            genre: genre,\n            author: author\n          }\n        });\n\n        _this.setState({\n          title: '',\n          author: '',\n          genre: ''\n        });\n\n        _this.props.refetch();\n      }\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"toggleBookForm\", function () {\n      _this.setState(function (prevState) {\n        return {\n          showForm: !prevState.showForm\n        };\n      });\n    });\n\n    return _this;\n  }\n\n  _createClass(AddBook, [{\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, this.state.showForm ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AddBookP__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        data: this.state,\n        handleChange: this.handleChange,\n        handleSubmit: this.handleSubmit\n      }) : '', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n        onClick: this.toggleBookForm\n      }, this.state.showForm ? 'Close form' : 'Add new book')));\n    }\n  }]);\n\n  return AddBook;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_apollo__WEBPACK_IMPORTED_MODULE_1__[\"graphql\"])(_queries_book_queries__WEBPACK_IMPORTED_MODULE_3__[\"addBookMutation\"], {\n  name: 'addBookMutation'\n})(AddBook));\n\n//# sourceURL=webpack:///./src/client/components/book/AddBook.js?");

/***/ }),

/***/ "./src/client/components/book/AddBookP.js":
/*!************************************************!*\
  !*** ./src/client/components/book/AddBookP.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar AddBookP = function AddBookP(props) {\n  var _props$data = props.data,\n      author = _props$data.author,\n      title = _props$data.title,\n      genre = _props$data.genre;\n  var handleChange = props.handleChange,\n      handleSubmit = props.handleSubmit;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n    onSubmit: handleSubmit,\n    id: \"review-form\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", null, \"Title\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"text\",\n    id: \"title\",\n    onChange: handleChange,\n    value: title\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", null, \"Author\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"text\",\n    id: \"author\",\n    onChange: handleChange,\n    value: author\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", null, \"Genre\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"text\",\n    id: \"genre\",\n    onChange: handleChange,\n    value: genre\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", null, \"Add new book\"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AddBookP);\n\n//# sourceURL=webpack:///./src/client/components/book/AddBookP.js?");

/***/ }),

/***/ "./src/client/components/book/Book.js":
/*!********************************************!*\
  !*** ./src/client/components/book/Book.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ \"react-apollo\");\n/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _BookData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BookData */ \"./src/client/components/book/BookData.js\");\n/* harmony import */ var _reviews_ReviewFeedBook__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reviews/ReviewFeedBook */ \"./src/client/components/reviews/ReviewFeedBook.js\");\n/* harmony import */ var _reviews_ReviewForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reviews/ReviewForm */ \"./src/client/components/reviews/ReviewForm.js\");\n/* harmony import */ var _queries_book_queries__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../queries/book.queries */ \"./src/client/queries/book.queries.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n //Components\n\n\n\n //Queries\n\n\n\nvar Book =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(Book, _Component);\n\n  function Book() {\n    var _getPrototypeOf2;\n\n    var _this;\n\n    _classCallCheck(this, Book);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Book)).call.apply(_getPrototypeOf2, [this].concat(args)));\n\n    _defineProperty(_assertThisInitialized(_this), \"state\", {\n      showForm: false\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"toggleForm\", function () {\n      _this.setState(function (prevState) {\n        return {\n          showForm: !prevState.showForm\n        };\n      });\n    });\n\n    return _this;\n  }\n\n  _createClass(Book, [{\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var bookId = this.props.match.params.id;\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"book\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__[\"Query\"], {\n        query: _queries_book_queries__WEBPACK_IMPORTED_MODULE_5__[\"getBook\"],\n        variables: {\n          bookId: bookId\n        }\n      }, function (_ref) {\n        var loading = _ref.loading,\n            error = _ref.error,\n            data = _ref.data,\n            refetch = _ref.refetch;\n        if (loading) return 'Loading...';\n        if (error) return \"Error!: \".concat(error);\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BookData__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n          data: data.Book\n        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, _this2.state.showForm ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_reviews_ReviewForm__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n          refetch: refetch\n        }) : '', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_reviews_ReviewFeedBook__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n          reviews: data.Book.reviews.reverse(),\n          toggleForm: _this2.toggleForm,\n          showForm: _this2.state.showForm\n        })));\n      }));\n    }\n  }]);\n\n  return Book;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Book);\n\n//# sourceURL=webpack:///./src/client/components/book/Book.js?");

/***/ }),

/***/ "./src/client/components/book/BookData.js":
/*!************************************************!*\
  !*** ./src/client/components/book/BookData.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar BookData = function BookData(props) {\n  var _props$data = props.data,\n      author = _props$data.author,\n      title = _props$data.title,\n      genre = _props$data.genre;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"book-data\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"Author: \", author), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"Genre: \", genre));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (BookData);\n\n//# sourceURL=webpack:///./src/client/components/book/BookData.js?");

/***/ }),

/***/ "./src/client/components/books/Book.js":
/*!*********************************************!*\
  !*** ./src/client/components/books/Book.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar Book = function Book(props) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    to: \"/book/\".concat(props.data.id),\n    className: \"card-book\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h4\", null, \"Title: \", props.data.title, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"small\", null, \" by \", props.data.author)), \"Genre: \", props.data.genre);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Book);\n\n//# sourceURL=webpack:///./src/client/components/books/Book.js?");

/***/ }),

/***/ "./src/client/components/books/BookFeed.js":
/*!*************************************************!*\
  !*** ./src/client/components/books/BookFeed.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ \"react-apollo\");\n/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Book__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Book */ \"./src/client/components/books/Book.js\");\n/* harmony import */ var _book_AddBook__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../book/AddBook */ \"./src/client/components/book/AddBook.js\");\n/* harmony import */ var _queries_book_queries__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../queries/book.queries */ \"./src/client/queries/book.queries.js\");\n\n //Components\n\n\n //Queries\n\n\n\nvar BookFeed = function BookFeed(props) {\n  var _props$getBooks = props.getBooks,\n      Books = _props$getBooks.Books,\n      error = _props$getBooks.error,\n      loading = _props$getBooks.loading,\n      refetch = _props$getBooks.refetch;\n  if (loading) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"Loading books...\");\n  if (error) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"Error: \", error);\n  var books = Books.reverse().map(function (book) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Book__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      key: book.id,\n      data: book\n    });\n  });\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_book_AddBook__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    refetch: refetch\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null, \"Books\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"book-feed\"\n  }, props.home ? books.slice(0, 12) : books));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_apollo__WEBPACK_IMPORTED_MODULE_1__[\"graphql\"])(_queries_book_queries__WEBPACK_IMPORTED_MODULE_4__[\"getBooks\"], {\n  name: 'getBooks'\n})(BookFeed));\n\n//# sourceURL=webpack:///./src/client/components/books/BookFeed.js?");

/***/ }),

/***/ "./src/client/components/books/Books.js":
/*!**********************************************!*\
  !*** ./src/client/components/books/Books.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _book_AddBook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../book/AddBook */ \"./src/client/components/book/AddBook.js\");\n/* harmony import */ var _BookFeed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BookFeed */ \"./src/client/components/books/BookFeed.js\");\n //Components\n\n\n\n\nvar Books = function Books(props) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BookFeed__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Books);\n\n//# sourceURL=webpack:///./src/client/components/books/Books.js?");

/***/ }),

/***/ "./src/client/components/home/Home.js":
/*!********************************************!*\
  !*** ./src/client/components/home/Home.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _books_BookFeed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../books/BookFeed */ \"./src/client/components/books/BookFeed.js\");\n/* harmony import */ var _reviews_ReviewFeedHome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reviews/ReviewFeedHome */ \"./src/client/components/reviews/ReviewFeedHome.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n //Components\n\n\n\n\nvar Home =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(Home, _Component);\n\n  function Home() {\n    _classCallCheck(this, Home);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(Home).apply(this, arguments));\n  }\n\n  _createClass(Home, [{\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"home\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"home-books\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_books_BookFeed__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        home: true\n      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"home-reviews\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_reviews_ReviewFeedHome__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        home: true\n      }))));\n    }\n  }]);\n\n  return Home;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\n//# sourceURL=webpack:///./src/client/components/home/Home.js?");

/***/ }),

/***/ "./src/client/components/layout/Navbar.js":
/*!************************************************!*\
  !*** ./src/client/components/layout/Navbar.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar Navbar = function Navbar(props) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"nav\", {\n    id: \"nav\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", {\n    className: \"container\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"NavLink\"], {\n    to: \"/\"\n  }, \"Home\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"NavLink\"], {\n    to: \"/books\"\n  }, \"All books\"))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\n\n//# sourceURL=webpack:///./src/client/components/layout/Navbar.js?");

/***/ }),

/***/ "./src/client/components/reviews/Review.js":
/*!*************************************************!*\
  !*** ./src/client/components/reviews/Review.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar Review = function Review(props) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    to: \"/book/\".concat(props.data.bookId),\n    className: \"card-review\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h4\", null, \"Author: \", props.data.author), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"small\", null, Date(props.data.createdOn).slice(0, 15)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, props.home && props.data.review.length > 70 ? props.data.review.slice(0, 70) + '...' : props.data.review));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Review);\n\n//# sourceURL=webpack:///./src/client/components/reviews/Review.js?");

/***/ }),

/***/ "./src/client/components/reviews/ReviewBook.js":
/*!*****************************************************!*\
  !*** ./src/client/components/reviews/ReviewBook.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar ReviewBook = function ReviewBook(props) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"card-review\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h4\", null, \"Author: \", props.data.author), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"small\", null, Date(props.data.createdOn).slice(0, 15)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, props.home && props.data.review.length > 70 ? props.data.review.slice(0, 70) + '...' : props.data.review));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ReviewBook);\n\n//# sourceURL=webpack:///./src/client/components/reviews/ReviewBook.js?");

/***/ }),

/***/ "./src/client/components/reviews/ReviewFeedBook.js":
/*!*********************************************************!*\
  !*** ./src/client/components/reviews/ReviewFeedBook.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ \"react-apollo\");\n/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ReviewBook__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ReviewBook */ \"./src/client/components/reviews/ReviewBook.js\");\n\n\n //Components\n\n\n\nvar ReviewFeed = function ReviewFeed(props) {\n  var reviews = props.reviews.map(function (review) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ReviewBook__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      key: review.id,\n      data: review\n    });\n  });\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"header\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", {\n    style: {\n      display: 'inline-block'\n    }\n  }, \"Reviews\"), props.home ? '' : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    style: {\n      float: 'right'\n    },\n    onClick: props.toggleForm\n  }, props.showForm ? 'Close form' : 'Write a review')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"review-feed\"\n  }, reviews.length > 0 ? reviews : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"No reviews yet...\")));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"withRouter\"])(ReviewFeed));\n\n//# sourceURL=webpack:///./src/client/components/reviews/ReviewFeedBook.js?");

/***/ }),

/***/ "./src/client/components/reviews/ReviewFeedHome.js":
/*!*********************************************************!*\
  !*** ./src/client/components/reviews/ReviewFeedHome.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ \"react-apollo\");\n/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Review__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Review */ \"./src/client/components/reviews/Review.js\");\n/* harmony import */ var _queries_review_queries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../queries/review.queries */ \"./src/client/queries/review.queries.js\");\n\n //Components\n\n //Queries\n\n\n\nvar ReviewFeed = function ReviewFeed(props) {\n  var displayData = function displayData(_ref) {\n    var loading = _ref.loading,\n        error = _ref.error,\n        Reviews = _ref.Reviews;\n    if (loading) return 'Loading reviews...';\n    if (error) return \"Error!: \".concat(error);\n    return Reviews.map(function (review) {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Review__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        key: review.id,\n        data: review\n      });\n    });\n  };\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"header\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null, \"Reviews\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"review-feed\"\n  }, displayData(props.data)));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_apollo__WEBPACK_IMPORTED_MODULE_1__[\"compose\"])(Object(react_apollo__WEBPACK_IMPORTED_MODULE_1__[\"graphql\"])(_queries_review_queries__WEBPACK_IMPORTED_MODULE_3__[\"getReviews\"], 'getReviews'))(ReviewFeed));\n\n//# sourceURL=webpack:///./src/client/components/reviews/ReviewFeedHome.js?");

/***/ }),

/***/ "./src/client/components/reviews/ReviewForm.js":
/*!*****************************************************!*\
  !*** ./src/client/components/reviews/ReviewForm.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apollo */ \"react-apollo\");\n/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ReviewFormP__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ReviewFormP */ \"./src/client/components/reviews/ReviewFormP.js\");\n/* harmony import */ var _queries_review_queries__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../queries/review.queries */ \"./src/client/queries/review.queries.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n //Components\n\n //Queries\n\n\n\nvar ReviewForm =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(ReviewForm, _Component);\n\n  function ReviewForm() {\n    var _getPrototypeOf2;\n\n    var _this;\n\n    _classCallCheck(this, ReviewForm);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ReviewForm)).call.apply(_getPrototypeOf2, [this].concat(args)));\n\n    _defineProperty(_assertThisInitialized(_this), \"state\", {\n      author: '',\n      review: ''\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"handleChange\", function (e) {\n      _this.setState(_defineProperty({}, e.target.id, e.target.value));\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"handleSubmit\", function (e) {\n      e.preventDefault();\n\n      if (_this.state.review) {\n        _this.props.addReviewMutation({\n          refetchQueries: [{\n            query: _queries_review_queries__WEBPACK_IMPORTED_MODULE_4__[\"getReviews\"]\n          }],\n          variables: {\n            author: _this.state.author,\n            review: _this.state.review,\n            bookId: _this.props.match.params.id\n          }\n        });\n\n        _this.setState({\n          author: '',\n          review: ''\n        });\n\n        _this.props.refetch();\n      }\n    });\n\n    return _this;\n  }\n\n  _createClass(ReviewForm, [{\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ReviewFormP__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        data: this.state,\n        handleSubmit: this.handleSubmit,\n        handleChange: this.handleChange\n      });\n    }\n  }]);\n\n  return ReviewForm;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"withRouter\"])(Object(react_apollo__WEBPACK_IMPORTED_MODULE_2__[\"compose\"])(Object(react_apollo__WEBPACK_IMPORTED_MODULE_2__[\"graphql\"])(_queries_review_queries__WEBPACK_IMPORTED_MODULE_4__[\"addReviewMutation\"], {\n  name: 'addReviewMutation'\n}))(ReviewForm)));\n\n//# sourceURL=webpack:///./src/client/components/reviews/ReviewForm.js?");

/***/ }),

/***/ "./src/client/components/reviews/ReviewFormP.js":
/*!******************************************************!*\
  !*** ./src/client/components/reviews/ReviewFormP.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar ReviewFormC = function ReviewFormC(props) {\n  var _props$data = props.data,\n      author = _props$data.author,\n      review = _props$data.review;\n  var handleChange = props.handleChange,\n      handleSubmit = props.handleSubmit;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n    onSubmit: handleSubmit,\n    id: \"review-form\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", null, \"Author\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"text\",\n    id: \"author\",\n    onChange: handleChange,\n    value: author\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", null, \"Review\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"textarea\", {\n    id: \"review\",\n    onChange: handleChange,\n    value: review\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", null, \"Submit review\"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ReviewFormC);\n\n//# sourceURL=webpack:///./src/client/components/reviews/ReviewFormP.js?");

/***/ }),

/***/ "./src/client/queries/book.queries.js":
/*!********************************************!*\
  !*** ./src/client/queries/book.queries.js ***!
  \********************************************/
/*! exports provided: getBooks, getBook, addBookMutation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getBooks\", function() { return getBooks; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getBook\", function() { return getBook; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addBookMutation\", function() { return addBookMutation; });\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ \"graphql-tag\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);\nfunction _templateObject3() {\n  var data = _taggedTemplateLiteral([\"\\n    mutation($title: String!, $author: String!, $genre: String!){\\n        addBook(title: $title, author: $author, genre: $genre){\\n            title\\n            genre\\n            author\\n            id\\n        }\\n    }\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = _taggedTemplateLiteral([\"\\n    query($bookId: ID!){\\n        Book(id: $bookId){\\n            id\\n            title\\n            genre\\n            author\\n            reviews{\\n                id\\n                author\\n                review\\n                createdOn\\n            }\\n        }\\n    }\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\n    {\\n        Books{\\n            id\\n            title\\n            genre\\n            author\\n        }\\n    }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\nvar getBooks = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject());\nvar getBook = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject2());\nvar addBookMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject3());\n\n//# sourceURL=webpack:///./src/client/queries/book.queries.js?");

/***/ }),

/***/ "./src/client/queries/review.queries.js":
/*!**********************************************!*\
  !*** ./src/client/queries/review.queries.js ***!
  \**********************************************/
/*! exports provided: getReviews, getReviewsBook, addReviewMutation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getReviews\", function() { return getReviews; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getReviewsBook\", function() { return getReviewsBook; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addReviewMutation\", function() { return addReviewMutation; });\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ \"graphql-tag\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);\nfunction _templateObject3() {\n  var data = _taggedTemplateLiteral([\"\\n    mutation ($author: String!, $review : String!, $bookId: ID){\\n        addReview(author: $author, review: $review, bookId: $bookId){\\n            id\\n            author\\n            review\\n            createdOn\\n            bookId\\n        }\\n    }\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = _taggedTemplateLiteral([\"\\n    query ($bookId: ID){\\n        Reviews(bookId: $bookId){\\n            id\\n            author\\n            review\\n            createdOn\\n            bookId\\n        }\\n    }\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\n    {\\n        Reviews{\\n            id\\n            author\\n            review\\n            createdOn\\n            bookId\\n        }\\n    }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\nvar getReviews = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject());\nvar getReviewsBook = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject2());\nvar addReviewMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject3());\n\n//# sourceURL=webpack:///./src/client/queries/review.queries.js?");

/***/ }),

/***/ "./src/server/database/Models/Book.js":
/*!********************************************!*\
  !*** ./src/server/database/Models/Book.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index */ \"./src/server/database/index.js\");\n\n\nvar bookSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__[\"Schema\"]({\n  title: {\n    type: String,\n    required: true\n  },\n  genre: {\n    type: String,\n    required: true\n  },\n  author: {\n    type: String,\n    required: true\n  }\n});\nvar Book = _index__WEBPACK_IMPORTED_MODULE_1__[\"default\"].model('Book', bookSchema);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Book);\n\n//# sourceURL=webpack:///./src/server/database/Models/Book.js?");

/***/ }),

/***/ "./src/server/database/Models/Review.js":
/*!**********************************************!*\
  !*** ./src/server/database/Models/Review.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index */ \"./src/server/database/index.js\");\n\n\nvar reviewSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__[\"Schema\"]({\n  author: {\n    type: String,\n    default: 'Anonymous'\n  },\n  review: {\n    type: String,\n    required: true\n  },\n  bookId: {\n    type: String,\n    required: true\n  },\n  createdOn: {\n    type: Date,\n    default: new Date()\n  }\n});\nvar Review = _index__WEBPACK_IMPORTED_MODULE_1__[\"default\"].model('Review', reviewSchema);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Review);\n\n//# sourceURL=webpack:///./src/server/database/Models/Review.js?");

/***/ }),

/***/ "./src/server/database/index.js":
/*!**************************************!*\
  !*** ./src/server/database/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nmongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connect('mongodb://localhost/book_list', {\n  useNewUrlParser: true\n});\nmongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connection.once('open', function () {\n  console.log('Connection established');\n}).on('error', function (error) {\n  console.log('Connection error:', error);\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (mongoose__WEBPACK_IMPORTED_MODULE_0___default.a);\n\n//# sourceURL=webpack:///./src/server/database/index.js?");

/***/ }),

/***/ "./src/server/database/schema/schema.js":
/*!**********************************************!*\
  !*** ./src/server/database/schema/schema.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql */ \"graphql\");\n/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Models_Book__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Models/Book */ \"./src/server/database/Models/Book.js\");\n/* harmony import */ var _Models_Review__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Models/Review */ \"./src/server/database/Models/Review.js\");\n\n\n\nvar BookType = new graphql__WEBPACK_IMPORTED_MODULE_0__[\"GraphQLObjectType\"]({\n  name: 'Book',\n  fields: function fields() {\n    return {\n      id: {\n        type: graphql__WEBPACK_IMPORTED_MODULE_0__[\"GraphQLID\"]\n      },\n      title: {\n        type: graphql__WEBPACK_IMPORTED_MODULE_0__[\"GraphQLString\"]\n      },\n      genre: {\n        type: graphql__WEBPACK_IMPORTED_MODULE_0__[\"GraphQLString\"]\n      },\n      author: {\n        type: graphql__WEBPACK_IMPORTED_MODULE_0__[\"GraphQLString\"]\n      },\n      reviews: {\n        type: new graphql__WEBPACK_IMPORTED_MODULE_0__[\"GraphQLList\"](ReviewType),\n        resolve: function resolve(parent) {\n          return _Models_Review__WEBPACK_IMPORTED_MODULE_2__[\"default\"].find({\n            bookId: parent.id\n          });\n        }\n      }\n    };\n  }\n});\nvar ReviewType = new graphql__WEBPACK_IMPORTED_MODULE_0__[\"GraphQLObjectType\"]({\n  name: 'Review',\n  fields: function fields() {\n    return {\n      id: {\n        type: graphql__WEBPACK_IMPORTED_MODULE_0__[\"GraphQLID\"]\n      },\n      author: {\n        type: graphql__WEBPACK_IMPORTED_MODULE_0__[\"GraphQLString\"]\n      },\n      review: {\n        type: graphql__WEBPACK_IMPORTED_MODULE_0__[\"GraphQLString\"]\n      },\n      createdOn: {\n        type: graphql__WEBPACK_IMPORTED_MODULE_0__[\"GraphQLString\"]\n      },\n      bookId: {\n        type: graphql__WEBPACK_IMPORTED_MODULE_0__[\"GraphQLString\"]\n      }\n    };\n  }\n});\nvar RootQuery = new graphql__WEBPACK_IMPORTED_MODULE_0__[\"GraphQLObjectType\"]({\n  name: 'RootQueryType',\n  fields: {\n    Book: {\n      type: BookType,\n      args: {\n        id: {\n          type: graphql__WEBPACK_IMPORTED_MODULE_0__[\"GraphQLID\"]\n        }\n      },\n      resolve: function resolve(parent, args) {\n        return _Models_Book__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findById(args.id);\n      }\n    },\n    Books: {\n      type: new graphql__WEBPACK_IMPORTED_MODULE_0__[\"GraphQLList\"](BookType),\n      args: {\n        genre: {\n          type: graphql__WEBPACK_IMPORTED_MODULE_0__[\"GraphQLString\"]\n        },\n        limit: {\n          type: graphql__WEBPACK_IMPORTED_MODULE_0__[\"GraphQLInt\"]\n        },\n        offset: {\n          type: graphql__WEBPACK_IMPORTED_MODULE_0__[\"GraphQLInt\"]\n        }\n      },\n      resolve: function resolve(parent, args) {\n        if (args.genre) return _Models_Book__WEBPACK_IMPORTED_MODULE_1__[\"default\"].find({\n          genre: args.genre\n        });\n        return _Models_Book__WEBPACK_IMPORTED_MODULE_1__[\"default\"].find({});\n      }\n    },\n    Reviews: {\n      type: new graphql__WEBPACK_IMPORTED_MODULE_0__[\"GraphQLList\"](ReviewType),\n      args: {\n        bookId: {\n          type: graphql__WEBPACK_IMPORTED_MODULE_0__[\"GraphQLID\"]\n        }\n      },\n      resolve: function resolve(parent, args) {\n        if (args.bookId) return _Models_Review__WEBPACK_IMPORTED_MODULE_2__[\"default\"].find({\n          bookId: args.bookId\n        });else return _Models_Review__WEBPACK_IMPORTED_MODULE_2__[\"default\"].find({});\n      }\n    }\n  }\n});\nvar Mutation = new graphql__WEBPACK_IMPORTED_MODULE_0__[\"GraphQLObjectType\"]({\n  name: 'Mutation',\n  fields: {\n    addBook: {\n      type: BookType,\n      args: {\n        title: {\n          type: graphql__WEBPACK_IMPORTED_MODULE_0__[\"GraphQLString\"]\n        },\n        author: {\n          type: graphql__WEBPACK_IMPORTED_MODULE_0__[\"GraphQLString\"]\n        },\n        genre: {\n          type: graphql__WEBPACK_IMPORTED_MODULE_0__[\"GraphQLString\"]\n        }\n      },\n      resolve: function resolve(parent, args) {\n        var newBook = new _Models_Book__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n          title: args.title,\n          genre: args.genre,\n          author: args.author\n        });\n        return newBook.save();\n      }\n    },\n    addReview: {\n      type: ReviewType,\n      args: {\n        author: {\n          type: graphql__WEBPACK_IMPORTED_MODULE_0__[\"GraphQLString\"]\n        },\n        review: {\n          type: graphql__WEBPACK_IMPORTED_MODULE_0__[\"GraphQLString\"]\n        },\n        bookId: {\n          type: graphql__WEBPACK_IMPORTED_MODULE_0__[\"GraphQLID\"]\n        }\n      },\n      resolve: function resolve(parent, args) {\n        var newReview = new _Models_Review__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n          author: args.author || 'Anonymous',\n          review: args.review,\n          bookId: args.bookId\n        });\n        return newReview.save();\n      }\n    }\n  }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (new graphql__WEBPACK_IMPORTED_MODULE_0__[\"GraphQLSchema\"]({\n  query: RootQuery,\n  mutation: Mutation\n}));\n\n//# sourceURL=webpack:///./src/server/database/schema/schema.js?");

/***/ }),

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _routes_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routes/index */ \"./src/server/routes/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _client_components_App__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../client/components/App */ \"./src/client/components/App.js\");\n\n\n //React, ReactRouter, Redux imports\n\n\n\n //Main component import\n\n\nvar app = express__WEBPACK_IMPORTED_MODULE_0___default()();\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default.a.static('public'));\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default.a.static('images'));\napp.use('/', _routes_index__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\nvar files = fs__WEBPACK_IMPORTED_MODULE_1___default.a.readdirSync('./public');\napp.listen(2000);\napp.get('/*', function (req, res) {\n  var markup = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_4__[\"renderToString\"])(react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__[\"StaticRouter\"], {\n    location: req.url,\n    context: {}\n  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_client_components_App__WEBPACK_IMPORTED_MODULE_6__[\"default\"], null)));\n  res.send(\"\\n        <!DOCTYPE html>\\n        <html>\\n        <head>\\n            <meta charset=\\\"utf-8\\\">\\n            <meta http-equiv=\\\"X-UA-Compatible\\\" content=\\\"IE=edge\\\">\\n            <title>Book reviews</title>\\n            <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1\\\">\\n            <script src=\\\"/\".concat(files[0], \"\\\" defer></script>\\n            <link type=\\\"text/css\\\" href=\\\"/\").concat(files[1], \"\\\" rel=\\\"stylesheet\\\"/>\\n        </head>\\n        <body>\\n            <div id=\\\"root\\\">\").concat(markup, \"</div>\\n        </body>\\n        </html>\\n    \"));\n});\n\n//# sourceURL=webpack:///./src/server/index.js?");

/***/ }),

/***/ "./src/server/routes/index.js":
/*!************************************!*\
  !*** ./src/server/routes/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var express_graphql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express-graphql */ \"express-graphql\");\n/* harmony import */ var express_graphql__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express_graphql__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _database_schema_schema__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../database/schema/schema */ \"./src/server/database/schema/schema.js\");\n/* harmony import */ var _database_Models_Review__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../database/Models/Review */ \"./src/server/database/Models/Review.js\");\n\n\n\n\nvar router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\nrouter.use('/graphql', express_graphql__WEBPACK_IMPORTED_MODULE_1___default()({\n  graphiql: true,\n  schema: _database_schema_schema__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n}));\nrouter.get('/revs', function (req, res) {\n  _database_Models_Review__WEBPACK_IMPORTED_MODULE_3__[\"default\"].find({}, function (err, arr) {\n    return res.json(arr);\n  });\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./src/server/routes/index.js?");

/***/ }),

/***/ "apollo-boost":
/*!*******************************!*\
  !*** external "apollo-boost" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"apollo-boost\");\n\n//# sourceURL=webpack:///external_%22apollo-boost%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "express-graphql":
/*!**********************************!*\
  !*** external "express-graphql" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-graphql\");\n\n//# sourceURL=webpack:///external_%22express-graphql%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "graphql":
/*!**************************!*\
  !*** external "graphql" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"graphql\");\n\n//# sourceURL=webpack:///external_%22graphql%22?");

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"graphql-tag\");\n\n//# sourceURL=webpack:///external_%22graphql-tag%22?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n\n//# sourceURL=webpack:///external_%22mongoose%22?");

/***/ }),

/***/ "node-fetch":
/*!*****************************!*\
  !*** external "node-fetch" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"node-fetch\");\n\n//# sourceURL=webpack:///external_%22node-fetch%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-apollo":
/*!*******************************!*\
  !*** external "react-apollo" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-apollo\");\n\n//# sourceURL=webpack:///external_%22react-apollo%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ })

/******/ });