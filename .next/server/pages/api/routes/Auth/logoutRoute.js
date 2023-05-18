"use strict";
(() => {
var exports = {};
exports.id = 55;
exports.ids = [55];
exports.modules = {

/***/ 8982:
/***/ ((module) => {

module.exports = require("cookies-next");

/***/ }),

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 3232:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8982);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cookies_next__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config_mongodbconnect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5746);
/* harmony import */ var _models_UserModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3610);



async function Handler(req, res) {
    await (0,_config_mongodbconnect__WEBPACK_IMPORTED_MODULE_1__.connectDB)();
    const cookies = (0,cookies_next__WEBPACK_IMPORTED_MODULE_0__.getCookies)({
        req,
        res
    });
    if (!cookies?.jwt) return res.status(204).json("No content") // No content ... 
    ;
    const refreshToken = cookies.jwt;
    //To Clear cookie if refreshToken exist .... 
    const foundUser = await _models_UserModel__WEBPACK_IMPORTED_MODULE_2__["default"].findOne({
        refreshToken: refreshToken
    }).exec();
    if (!foundUser) {
        (0,cookies_next__WEBPACK_IMPORTED_MODULE_0__.deleteCookie)("jwt", {
            req,
            res,
            httpOnly: true
        });
        return res.status(204).json("No content") // No content ... 
        ;
    }
    //To clear refresh token from logging out user in db .... 
    foundUser.refreshToken = "";
    const result = await foundUser.save();
    console.log(result);
    // clear cookie ... 
    // deleteCookie('key', { req, res });
    (0,cookies_next__WEBPACK_IMPORTED_MODULE_0__.deleteCookie)("jwt", {
        req,
        res,
        httpOnly: true,
        sameSite: "None",
        maxAge: 24 * 60 * 60 * 1000
    }) // secure = true ... during production ... this will make it only server on "https". 
    ;
    //secure : true
    return res.status(204).json("No content") // No Content .... 
    ;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Handler);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [573], () => (__webpack_exec__(3232)));
module.exports = __webpack_exports__;

})();