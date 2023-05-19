"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/routes/itemroute/items";
exports.ids = ["pages/api/routes/itemroute/items"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "(api)/./pages/api/config/mongodbconnect.js":
/*!********************************************!*\
  !*** ./pages/api/config/mongodbconnect.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"connectDB\": () => (/* binding */ connectDB)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst linker = process.env.MONGODB_LINK;\nconst connectDB = async ()=>{\n    try {\n        await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(linker, {\n            useUnifiedTopology: true,\n            useNewUrlParser: true\n        });\n    // console.log(\"Database Connected\")\n    } catch (err) {\n        console.log(err);\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY29uZmlnL21vbmdvZGJjb25uZWN0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUErQjtBQUkvQixNQUFNQyxNQUFNLEdBQUdDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxZQUFZO0FBRWhDLE1BQU1DLFNBQVMsR0FBRyxVQUFXO0lBQ2hDLElBQUc7UUFDQyxNQUFNTCx1REFBZ0IsQ0FBRUMsTUFBTSxFQUFHO1lBQzdCTSxrQkFBa0IsRUFBRyxJQUFJO1lBQ3pCQyxlQUFlLEVBQUUsSUFBSTtTQUN4QixDQUFDO0lBQ0Ysb0NBQW9DO0lBRXRDLEVBQUMsT0FBTUMsR0FBRyxFQUFDO1FBQUNDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixHQUFHLENBQUM7SUFBQSxDQUFDO0FBQ25DLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9xdWVlbi1uZXh0Ly4vcGFnZXMvYXBpL2NvbmZpZy9tb25nb2RiY29ubmVjdC5qcz9lOTIyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIlxyXG5cclxuXHJcblxyXG5jb25zdCBsaW5rZXIgPSBwcm9jZXNzLmVudi5NT05HT0RCX0xJTktcclxuXHJcbmV4cG9ydCBjb25zdCBjb25uZWN0REIgPSBhc3luYyAoKSA9PntcclxuICAgIHRyeXsgIFxyXG4gICAgICAgIGF3YWl0IG1vbmdvb3NlLmNvbm5lY3QoIGxpbmtlciAsIHtcclxuICAgICAgICAgICAgdXNlVW5pZmllZFRvcG9sb2d5IDogdHJ1ZSAsICBcclxuICAgICAgICAgICAgdXNlTmV3VXJsUGFyc2VyOiB0cnVlICBcclxuICAgICAgICB9KVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiRGF0YWJhc2UgQ29ubmVjdGVkXCIpXHJcbiAgICAgICBcclxuICAgICAgfWNhdGNoKGVycil7Y29uc29sZS5sb2coZXJyKX1cclxufVxyXG5cclxuXHJcblxyXG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJsaW5rZXIiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09EQl9MSU5LIiwiY29ubmVjdERCIiwiY29ubmVjdCIsInVzZVVuaWZpZWRUb3BvbG9neSIsInVzZU5ld1VybFBhcnNlciIsImVyciIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/config/mongodbconnect.js\n");

/***/ }),

/***/ "(api)/./pages/api/models/Item.js":
/*!**********************************!*\
  !*** ./pages/api/models/Item.js ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nconst mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst { model , models , Schema  } = mongoose;\nconst itemsShema = new Schema({\n    name: {\n        type: String,\n        required: true\n    },\n    price: {\n        type: Number,\n        required: true\n    },\n    imageurl: {\n        type: String\n    },\n    imagename: String\n});\nconst Item = models.Item || model(\"Item\", itemsShema);\nmodule.exports = Item;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbW9kZWxzL0l0ZW0uanMuanMiLCJtYXBwaW5ncyI6IkFBQ0E7QUFBQSxNQUFNQSxRQUFRLEdBQUdDLG1CQUFPLENBQUMsMEJBQVUsQ0FBQztBQUdwQyxNQUFNLEVBQUVDLEtBQUssR0FBQ0MsTUFBTSxHQUFFQyxNQUFNLEdBQUUsR0FBR0osUUFBUTtBQUd6QyxNQUFNSyxVQUFVLEdBQUcsSUFBSUQsTUFBTSxDQUFDO0lBQzFCRSxJQUFJLEVBQUU7UUFDRkMsSUFBSSxFQUFFQyxNQUFNO1FBQ1pDLFFBQVEsRUFBSSxJQUFJO0tBQ25CO0lBQ0RDLEtBQUssRUFBRTtRQUNISCxJQUFJLEVBQUVJLE1BQU07UUFDWkYsUUFBUSxFQUFHLElBQUk7S0FDbEI7SUFDREcsUUFBUSxFQUFFO1FBQ05MLElBQUksRUFBRUMsTUFBTTtLQUVmO0lBQ0RLLFNBQVMsRUFBRUwsTUFBTTtDQUNwQixDQUFDO0FBRUYsTUFBTU0sSUFBSSxHQUFHWCxNQUFNLENBQUNXLElBQUksSUFBS1osS0FBSyxDQUFDLE1BQU0sRUFBRUcsVUFBVSxDQUFDO0FBRXREVSxNQUFNLENBQUNDLE9BQU8sR0FBR0YsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL3F1ZWVuLW5leHQvLi9wYWdlcy9hcGkvbW9kZWxzL0l0ZW0uanM/NTQwMSJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY29uc3QgbW9uZ29vc2UgPSByZXF1aXJlKFwibW9uZ29vc2VcIik7XHJcbiBcclxuXHJcbmNvbnN0IHsgbW9kZWwsbW9kZWxzLCBTY2hlbWEgfSA9IG1vbmdvb3NlIFxyXG5cclxuXHJcbmNvbnN0IGl0ZW1zU2hlbWEgPSBuZXcgU2NoZW1hKHtcclxuICAgIG5hbWU6IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmcsIFxyXG4gICAgICAgIHJlcXVpcmVkIDogIHRydWUgXHJcbiAgICB9LCBcclxuICAgIHByaWNlOiB7XHJcbiAgICAgICAgdHlwZTogTnVtYmVyLCBcclxuICAgICAgICByZXF1aXJlZCA6IHRydWUgXHJcbiAgICB9LCBcclxuICAgIGltYWdldXJsOiB7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLCBcclxuICAgICAgICAvLyByZXF1aXJlZCA6IHRydWVcclxuICAgIH0sXHJcbiAgICBpbWFnZW5hbWU6IFN0cmluZyxcclxufSlcclxuXHJcbmNvbnN0IEl0ZW0gPSBtb2RlbHMuSXRlbSB8fCAgbW9kZWwoJ0l0ZW0nLCBpdGVtc1NoZW1hKVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBJdGVtXHJcblxyXG5cclxuXHJcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsInJlcXVpcmUiLCJtb2RlbCIsIm1vZGVscyIsIlNjaGVtYSIsIml0ZW1zU2hlbWEiLCJuYW1lIiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwicHJpY2UiLCJOdW1iZXIiLCJpbWFnZXVybCIsImltYWdlbmFtZSIsIkl0ZW0iLCJtb2R1bGUiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/models/Item.js\n");

/***/ }),

/***/ "(api)/./pages/api/routes/itemroute/items.js":
/*!*********************************************!*\
  !*** ./pages/api/routes/itemroute/items.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _config_mongodbconnect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config/mongodbconnect */ \"(api)/./pages/api/config/mongodbconnect.js\");\n/* harmony import */ var _models_Item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/Item */ \"(api)/./pages/api/models/Item.js\");\n/* harmony import */ var _models_Item__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_models_Item__WEBPACK_IMPORTED_MODULE_1__);\n// import mongoose, { isValidObjectId } from \"mongoose\"\n// import RenderResult from \"next/dist/server/render-result\"\n\n\n// httpGet ... \nasync function Handler(req, res) {\n    await (0,_config_mongodbconnect__WEBPACK_IMPORTED_MODULE_0__.connectDB)();\n    // ..........httpGET\n    if (req.method === \"GET\") {\n        const items = await _models_Item__WEBPACK_IMPORTED_MODULE_1___default().find() // to get items ...\n        ;\n        if (!items) return res.status(204).json({\n            \"message\": \"No items found ..\"\n        });\n        return res.status(200).json(items);\n    }\n}\n// await mongoose.disconnect()\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcm91dGVzL2l0ZW1yb3V0ZS9pdGVtcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsdURBQXVEO0FBQ3ZELDREQUE0RDtBQUNMO0FBQ25CO0FBSXBDLGVBQWU7QUFDZixlQUFlRSxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzdCLE1BQU1KLGlFQUFTLEVBQUU7SUFFakIsb0JBQW9CO0lBQ3BCLElBQUlHLEdBQUcsQ0FBQ0UsTUFBTSxLQUFLLEtBQUssRUFBRTtRQUV0QixNQUFNQyxLQUFLLEdBQUcsTUFBT0wsd0RBQVMsRUFBRSxDQUFJLG1CQUFtQjtRQUF2QjtRQUNoQyxJQUFJLENBQUNLLEtBQUssRUFBRSxPQUFPRixHQUFHLENBQUNJLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUUsU0FBUyxFQUFFLG1CQUFtQjtTQUFFLENBQUM7UUFFN0UsT0FBUUwsR0FBRyxDQUFDSSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQ0gsS0FBSyxDQUFDO0lBS3JDLENBQUM7QUFFRCxDQUFDO0FBS0QsOEJBQThCO0FBRzlCLGlFQUFlSixPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcXVlZW4tbmV4dC8uL3BhZ2VzL2FwaS9yb3V0ZXMvaXRlbXJvdXRlL2l0ZW1zLmpzPzc0YTUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IG1vbmdvb3NlLCB7IGlzVmFsaWRPYmplY3RJZCB9IGZyb20gXCJtb25nb29zZVwiXHJcbi8vIGltcG9ydCBSZW5kZXJSZXN1bHQgZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcmVuZGVyLXJlc3VsdFwiXHJcbmltcG9ydCB7IGNvbm5lY3REQiB9IGZyb20gXCIuLi8uLi9jb25maWcvbW9uZ29kYmNvbm5lY3RcIlxyXG5pbXBvcnQgSXRlbSBmcm9tIFwiLi4vLi4vbW9kZWxzL0l0ZW1cIlxyXG5cclxuXHJcblxyXG4vLyBodHRwR2V0IC4uLiBcclxuYXN5bmMgZnVuY3Rpb24gSGFuZGxlcihyZXEsIHJlcykge1xyXG4gICAgYXdhaXQgY29ubmVjdERCKCkgXHJcblxyXG4gICAgLy8gLi4uLi4uLi4uLmh0dHBHRVRcclxuICAgIGlmIChyZXEubWV0aG9kID09PSBcIkdFVFwiKSB7XHJcbiAgICAgICBcclxuICAgICAgICBjb25zdCBpdGVtcyA9IGF3YWl0ICBJdGVtLmZpbmQoKSAgICAvLyB0byBnZXQgaXRlbXMgLi4uXHJcbiAgICAgICAgaWYgKCFpdGVtcykgcmV0dXJuIHJlcy5zdGF0dXMoMjA0KS5qc29uKHsgJ21lc3NhZ2UnOiAnTm8gaXRlbXMgZm91bmQgLi4nIH0pXHJcbiAgICAgICAgXHJcbiAgICAgIHJldHVybiAgcmVzLnN0YXR1cygyMDApLmpzb24oaXRlbXMpXHJcblxyXG4gICAgICAgIFxyXG5cclxuICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIFxyXG4gICAgLy8gYXdhaXQgbW9uZ29vc2UuZGlzY29ubmVjdCgpXHJcblxyXG5cclxuICAgIGV4cG9ydCBkZWZhdWx0IEhhbmRsZXJcclxuXHJcblxyXG4gICAgICAgIl0sIm5hbWVzIjpbImNvbm5lY3REQiIsIkl0ZW0iLCJIYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwiaXRlbXMiLCJmaW5kIiwic3RhdHVzIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/routes/itemroute/items.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/routes/itemroute/items.js"));
module.exports = __webpack_exports__;

})();