"use strict";
(() => {
var exports = {};
exports.id = 441;
exports.ids = [441,788,657];
exports.modules = {

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

/***/ 5487:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


const mongoose = __webpack_require__(1185);
const { model , models , Schema  } = mongoose;
const itemsShema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    imageurl: {
        type: String
    },
    imagename: String
});
const Item = models.Item || model("Item", itemsShema);
module.exports = Item;


/***/ }),

/***/ 7384:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _config_mongodbconnect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5746);
/* harmony import */ var _models_Item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5487);
/* harmony import */ var _models_Item__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_models_Item__WEBPACK_IMPORTED_MODULE_1__);
// import mongoose, { isValidObjectId } from "mongoose"
// import RenderResult from "next/dist/server/render-result"


// httpGet ... 
async function Handler(req, res) {
    await (0,_config_mongodbconnect__WEBPACK_IMPORTED_MODULE_0__.connectDB)();
    // ..........httpGET
    if (req.method === "GET") {
        const items = await _models_Item__WEBPACK_IMPORTED_MODULE_1___default().find() // to get items ...
        ;
        if (!items) return res.status(204).json({
            "message": "No items found .."
        });
        return res.status(200).json(items);
    }
}
// await mongoose.disconnect()
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Handler);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(7384));
module.exports = __webpack_exports__;

})();