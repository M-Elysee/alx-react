"use strict";
(self["webpackChunktask_1"] = self["webpackChunktask_1"] || []).push([["body"],{

/***/ "./modules/body/body.js":
/*!******************************!*\
  !*** ./modules/body/body.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module './body.css'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());




let i = 0;

function updateCounter() {
    i++;
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#count').text(`${i} clicks on the button`);
}

jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').append('<p>Holberton Dashboard</p>');
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').append('<p>Dashboard data for the students</p>');
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').append('<button>Click here to get started</button>');
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').append('<p id="count"></p>');

  jquery__WEBPACK_IMPORTED_MODULE_0___default()('button').on('click', lodash__WEBPACK_IMPORTED_MODULE_1___default().debounce(updateCounter, 500));
});


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_lodash_lodash_js"], () => (__webpack_exec__("./modules/body/body.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9keS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXVCO0FBQ0E7QUFDSDs7QUFFcEI7O0FBRUE7QUFDQTtBQUNBLElBQUksNkNBQUMsbUJBQW1CLEdBQUc7QUFDM0I7O0FBRUEsNkNBQUM7QUFDRCxFQUFFLDZDQUFDO0FBQ0gsRUFBRSw2Q0FBQztBQUNILEVBQUUsNkNBQUM7QUFDSCxFQUFFLDZDQUFDOztBQUVILEVBQUUsNkNBQUMsdUJBQXVCLHNEQUFVO0FBQ3BDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90YXNrXzEvLi9tb2R1bGVzL2JvZHkvYm9keS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCAnLi9ib2R5LmNzcyc7XG5cbmxldCBpID0gMDtcblxuZnVuY3Rpb24gdXBkYXRlQ291bnRlcigpIHtcbiAgICBpKys7XG4gICAgJCgnI2NvdW50JykudGV4dChgJHtpfSBjbGlja3Mgb24gdGhlIGJ1dHRvbmApO1xufVxuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG4gICQoJ2JvZHknKS5hcHBlbmQoJzxwPkhvbGJlcnRvbiBEYXNoYm9hcmQ8L3A+Jyk7XG4gICQoJ2JvZHknKS5hcHBlbmQoJzxwPkRhc2hib2FyZCBkYXRhIGZvciB0aGUgc3R1ZGVudHM8L3A+Jyk7XG4gICQoJ2JvZHknKS5hcHBlbmQoJzxidXR0b24+Q2xpY2sgaGVyZSB0byBnZXQgc3RhcnRlZDwvYnV0dG9uPicpO1xuICAkKCdib2R5JykuYXBwZW5kKCc8cCBpZD1cImNvdW50XCI+PC9wPicpO1xuXG4gICQoJ2J1dHRvbicpLm9uKCdjbGljaycsIF8uZGVib3VuY2UodXBkYXRlQ291bnRlciwgNTAwKSk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==