"use strict";
(() => {
var exports = {};
exports.id = 698;
exports.ids = [698];
exports.modules = {

/***/ 8982:
/***/ ((module) => {

module.exports = require("cookies-next");

/***/ }),

/***/ 9344:
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 6553:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _config_mongodbconnect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5746);

const { getCookies  } = __webpack_require__(8982);
const jwt = __webpack_require__(9344);
const { default: UserModel  } = __webpack_require__(3610);
async function Handler(req, res) {
    await (0,_config_mongodbconnect__WEBPACK_IMPORTED_MODULE_0__.connectDB)();
    const cookies = getCookies({
        req,
        res
    });
    if (!cookies?.jwt) return res.status(401).json("Unauthorized") //UnAuthorized .... 
    ;
    const refreshToken = cookies.jwt;
    // console.log(refreshToken)
    const foundUser = await UserModel.findOne({
        refreshToken: refreshToken
    }).exec();
    if (!foundUser) return res.status(403).json("Forbidden") // forbidden .... 
    ;
    //evaluate refreshToken .... 
    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded)=>{
        console.log("Hello" + decoded.username);
        if (err || foundUser.username !== decoded.username) return res.status(403).json("Forbidden") //Forbidden    !== decoded.username
        ;
        //    console.log(refreshToken)
        //    console.log(foundUser.refreshToken)
        // const roles = Object.values(foundUser.roles)
        const accessToken = jwt.sign({
            "UserInfo": {
                "_id": foundUser._id,
                "username": foundUser.username,
                "email": foundUser.email,
                "imageurl": foundUser.imageurl,
                "roles": foundUser.roles
            }
        }, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: "5h"
        });
        // send the access token 
        return res.json({
            accessToken
        });
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Handler);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [573], () => (__webpack_exec__(6553)));
module.exports = __webpack_exports__;

})();