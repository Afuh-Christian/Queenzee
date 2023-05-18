"use strict";
(() => {
var exports = {};
exports.id = 777;
exports.ids = [777,788,204,511,699];
exports.modules = {

/***/ 5142:
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ 9344:
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 5746:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "connectDB": () => (/* binding */ connectDB)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const linker = process.env.MONGODB_LINK;
const connectDB = async ()=>{
    try {
        await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(linker, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
    // console.log("Database Connected")
    } catch (err) {
        console.log(err);
    }
};


/***/ }),

/***/ 9575:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const { Schema , models , model  } = (mongoose__WEBPACK_IMPORTED_MODULE_0___default());
const CategorySchema = Schema({
    name: {
        type: String,
        required: true
    },
    imageurl: {
        type: String
    },
    imagename: String
});
const Category = models.Category || model("Category", CategorySchema);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Category);


/***/ }),

/***/ 6332:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const User_Roles = {
    user: Number(process.env.USER_U),
    admin: Number(process.env.ADMIN_U),
    editor: Number(process.env.EDITOR_U)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User_Roles);


/***/ }),

/***/ 9725:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config_mongodbconnect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5746);
/* harmony import */ var _middleware_verifJWT__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5327);
/* harmony import */ var _models_CategoryModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9575);
/* harmony import */ var _models_RoleCodes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6332);





// httpGet ... 
async function Handler(req, res) {
    await (0,_config_mongodbconnect__WEBPACK_IMPORTED_MODULE_1__.connectDB)();
    // ..........httpGET
    if (req.method === "GET") {
        const categorys = await _models_CategoryModel__WEBPACK_IMPORTED_MODULE_3__["default"].find() // to get Categorys ...
        ;
        if (!categorys) return res.status(204).json({
            "message": "No Categorys found .."
        });
        return res.status(200).json(categorys);
    }
// await mongoose.disconnect()
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Handler);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [327], () => (__webpack_exec__(9725)));
module.exports = __webpack_exports__;

})();