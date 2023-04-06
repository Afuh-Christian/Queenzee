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
exports.id = "pages/api/routes/Auth/allusers";
exports.ids = ["pages/api/routes/Auth/allusers"];
exports.modules = {

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"connectDB\": () => (/* binding */ connectDB)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\n// const linker = \"mongodb+srv://afuhchris:deLe1017@cluster0.3xjsj75.mongodb.net/QueenzeeDB?retryWrites=true&w=majority\"\n// const linker = \"mongodb://127.0.0.1:27017/QueenDB?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.6.0\"\nconst linker = process.env.MONGODB_LINK;\nconst connectDB = async ()=>{\n    try {\n        await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(linker, {\n            useUnifiedTopology: true,\n            useNewUrlParser: true\n        });\n    // console.log(\"Database Connected\")\n    } catch (err) {\n        console.log(err);\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY29uZmlnL21vbmdvZGJjb25uZWN0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUErQjtBQUkvQix3SEFBd0g7QUFDeEgsK0hBQStIO0FBQy9ILE1BQU1DLE1BQU0sR0FBR0MsT0FBTyxDQUFDQyxHQUFHLENBQUNDLFlBQVk7QUFFaEMsTUFBTUMsU0FBUyxHQUFHLFVBQVc7SUFDaEMsSUFBRztRQUNDLE1BQU1MLHVEQUFnQixDQUFFQyxNQUFNLEVBQUc7WUFDN0JNLGtCQUFrQixFQUFHLElBQUk7WUFDekJDLGVBQWUsRUFBRSxJQUFJO1NBQ3hCLENBQUM7SUFDRixvQ0FBb0M7SUFFdEMsRUFBQyxPQUFNQyxHQUFHLEVBQUM7UUFBQ0MsT0FBTyxDQUFDQyxHQUFHLENBQUNGLEdBQUcsQ0FBQztJQUFBLENBQUM7QUFDbkMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3F1ZWVuLW5leHQvLi9wYWdlcy9hcGkvY29uZmlnL21vbmdvZGJjb25uZWN0LmpzP2U5MjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiXHJcblxyXG5cclxuXHJcbi8vIGNvbnN0IGxpbmtlciA9IFwibW9uZ29kYitzcnY6Ly9hZnVoY2hyaXM6ZGVMZTEwMTdAY2x1c3RlcjAuM3hqc2o3NS5tb25nb2RiLm5ldC9RdWVlbnplZURCP3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eVwiXHJcbi8vIGNvbnN0IGxpbmtlciA9IFwibW9uZ29kYjovLzEyNy4wLjAuMToyNzAxNy9RdWVlbkRCP2RpcmVjdENvbm5lY3Rpb249dHJ1ZSZzZXJ2ZXJTZWxlY3Rpb25UaW1lb3V0TVM9MjAwMCZhcHBOYW1lPW1vbmdvc2grMS42LjBcIlxyXG5jb25zdCBsaW5rZXIgPSBwcm9jZXNzLmVudi5NT05HT0RCX0xJTktcclxuXHJcbmV4cG9ydCBjb25zdCBjb25uZWN0REIgPSBhc3luYyAoKSA9PntcclxuICAgIHRyeXsgIFxyXG4gICAgICAgIGF3YWl0IG1vbmdvb3NlLmNvbm5lY3QoIGxpbmtlciAsIHtcclxuICAgICAgICAgICAgdXNlVW5pZmllZFRvcG9sb2d5IDogdHJ1ZSAsICBcclxuICAgICAgICAgICAgdXNlTmV3VXJsUGFyc2VyOiB0cnVlICBcclxuICAgICAgICB9KVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiRGF0YWJhc2UgQ29ubmVjdGVkXCIpXHJcbiAgICAgICBcclxuICAgICAgfWNhdGNoKGVycil7Y29uc29sZS5sb2coZXJyKX1cclxufVxyXG5cclxuXHJcblxyXG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJsaW5rZXIiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09EQl9MSU5LIiwiY29ubmVjdERCIiwiY29ubmVjdCIsInVzZVVuaWZpZWRUb3BvbG9neSIsInVzZU5ld1VybFBhcnNlciIsImVyciIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/config/mongodbconnect.js\n");

/***/ }),

/***/ "(api)/./pages/api/models/RoleCodes.js":
/*!***************************************!*\
  !*** ./pages/api/models/RoleCodes.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst User_Roles = {\n    user: 2934,\n    admin: 5543,\n    editor: 6000\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User_Roles);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbW9kZWxzL1JvbGVDb2Rlcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTUEsVUFBVSxHQUFHO0lBQ2ZDLElBQUksRUFBRSxJQUFJO0lBQ1ZDLEtBQUssRUFBRSxJQUFJO0lBQ1hDLE1BQU0sRUFBRSxJQUFJO0NBQ2Y7QUFFRCxpRUFBZUgsVUFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL3F1ZWVuLW5leHQvLi9wYWdlcy9hcGkvbW9kZWxzL1JvbGVDb2Rlcy5qcz9hMGIwIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFVzZXJfUm9sZXMgPSB7XHJcbiAgICB1c2VyOiAyOTM0LCBcclxuICAgIGFkbWluOiA1NTQzLCBcclxuICAgIGVkaXRvcjogNjAwMFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VyX1JvbGVzXHJcblxyXG5cclxuXHJcblxyXG4iXSwibmFtZXMiOlsiVXNlcl9Sb2xlcyIsInVzZXIiLCJhZG1pbiIsImVkaXRvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/models/RoleCodes.js\n");

/***/ }),

/***/ "(api)/./pages/api/models/UserModel.js":
/*!***************************************!*\
  !*** ./pages/api/models/UserModel.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _RoleCodes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RoleCodes */ \"(api)/./pages/api/models/RoleCodes.js\");\n\n\nconst { Schema , models , model  } = (mongoose__WEBPACK_IMPORTED_MODULE_0___default());\nconst UserSchema = new Schema({\n    username: {\n        type: String,\n        required: true\n    },\n    email: {\n        type: String,\n        required: true\n    },\n    roles: {\n        User: {\n            type: Number,\n            default: _RoleCodes__WEBPACK_IMPORTED_MODULE_1__[\"default\"].user\n        },\n        Admin: Number,\n        Editor: Number\n    },\n    password: {\n        type: String,\n        required: true\n    },\n    refreshToken: String,\n    imageurl: {\n        type: String\n    },\n    imagename: {\n        type: String\n    }\n});\nconst UserModel = models.UserModel || model(\"UserModel\", UserSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserModel);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbW9kZWxzL1VzZXJNb2RlbC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQStCO0FBQ0s7QUFFcEMsTUFBTSxFQUFFRSxNQUFNLEdBQUVDLE1BQU0sR0FBRUMsS0FBSyxHQUFFLEdBQUdKLGlEQUFRO0FBRzFDLE1BQU1LLFVBQVUsR0FBRyxJQUFJSCxNQUFNLENBQUM7SUFDMUJJLFFBQVEsRUFBRTtRQUNOQyxJQUFJLEVBQUVDLE1BQU07UUFDWkMsUUFBUSxFQUFFLElBQUk7S0FDakI7SUFDREMsS0FBSyxFQUFFO1FBQ0hILElBQUksRUFBRUMsTUFBTTtRQUNaQyxRQUFRLEVBQUUsSUFBSTtLQUNqQjtJQUNERSxLQUFLLEVBQUU7UUFDSEMsSUFBSSxFQUFHO1lBQ0NMLElBQUksRUFBR00sTUFBTTtZQUNiQyxPQUFPLEVBQUdiLHVEQUFlO1NBQ3hCO1FBQ1RlLEtBQUssRUFBRUgsTUFBTTtRQUNiSSxNQUFNLEVBQUdKLE1BQU07S0FDdEI7SUFFR0ssUUFBUSxFQUFFO1FBQ05YLElBQUksRUFBRUMsTUFBTTtRQUNaQyxRQUFRLEVBQUUsSUFBSTtLQUNqQjtJQUNEVSxZQUFZLEVBQUVYLE1BQU07SUFDcEJZLFFBQVEsRUFBRTtRQUNOYixJQUFJLEVBQUVDLE1BQU07S0FFZjtJQUNEYSxTQUFTLEVBQUU7UUFDUGQsSUFBSSxFQUFFQyxNQUFNO0tBQ2Y7Q0FDSixDQUFDO0FBRUYsTUFBTWMsU0FBUyxHQUFHbkIsTUFBTSxDQUFDbUIsU0FBUyxJQUFJbEIsS0FBSyxDQUFDLFdBQVcsRUFBRUMsVUFBVSxDQUFDO0FBRXBFLGlFQUFlaUIsU0FBUyIsInNvdXJjZXMiOlsid2VicGFjazovL3F1ZWVuLW5leHQvLi9wYWdlcy9hcGkvbW9kZWxzL1VzZXJNb2RlbC5qcz9lYjFjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIlxyXG5pbXBvcnQgVXNlcl9Sb2xlcyBmcm9tIFwiLi9Sb2xlQ29kZXNcIlxyXG5cclxuY29uc3QgeyBTY2hlbWEsIG1vZGVscywgbW9kZWwgfSA9IG1vbmdvb3NlXHJcblxyXG5cclxuY29uc3QgVXNlclNjaGVtYSA9IG5ldyBTY2hlbWEoe1xyXG4gICAgdXNlcm5hbWU6IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgcmVxdWlyZWQ6IHRydWVcclxuICAgIH0sXHJcbiAgICBlbWFpbDoge1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICByZXF1aXJlZDogdHJ1ZVxyXG4gICAgfSxcclxuICAgIHJvbGVzIDp7XHJcbiAgICAgICAgVXNlciA6IHtcclxuICAgICAgICAgICAgICAgIHR5cGUgOiBOdW1iZXIgLFxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdCA6IFVzZXJfUm9sZXMudXNlclxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICBBZG1pbjogTnVtYmVyLFxyXG4gICAgICAgIEVkaXRvciA6IE51bWJlclxyXG59LFxyXG5cclxuICAgIHBhc3N3b3JkOiB7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgcmVmcmVzaFRva2VuOiBTdHJpbmcsIFxyXG4gICAgaW1hZ2V1cmw6IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmcsIFxyXG4gICAgICAgIC8vIHJlcXVpcmVkOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgaW1hZ2VuYW1lOiB7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nXHJcbiAgICB9XHJcbn0pXHJcblxyXG5jb25zdCBVc2VyTW9kZWwgPSBtb2RlbHMuVXNlck1vZGVsIHx8IG1vZGVsKFwiVXNlck1vZGVsXCIsIFVzZXJTY2hlbWEpXHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VyTW9kZWwiXSwibmFtZXMiOlsibW9uZ29vc2UiLCJVc2VyX1JvbGVzIiwiU2NoZW1hIiwibW9kZWxzIiwibW9kZWwiLCJVc2VyU2NoZW1hIiwidXNlcm5hbWUiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJlbWFpbCIsInJvbGVzIiwiVXNlciIsIk51bWJlciIsImRlZmF1bHQiLCJ1c2VyIiwiQWRtaW4iLCJFZGl0b3IiLCJwYXNzd29yZCIsInJlZnJlc2hUb2tlbiIsImltYWdldXJsIiwiaW1hZ2VuYW1lIiwiVXNlck1vZGVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/models/UserModel.js\n");

/***/ }),

/***/ "(api)/./pages/api/routes/Auth/allusers.js":
/*!*******************************************!*\
  !*** ./pages/api/routes/Auth/allusers.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config_mongodbconnect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config/mongodbconnect */ \"(api)/./pages/api/config/mongodbconnect.js\");\n/* harmony import */ var _models_UserModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/UserModel */ \"(api)/./pages/api/models/UserModel.js\");\n\n\n\nasync function Handler(req, res) {\n    await (0,_config_mongodbconnect__WEBPACK_IMPORTED_MODULE_1__.connectDB)();\n    if (req.method === \"GET\") {\n        const alluser = await _models_UserModel__WEBPACK_IMPORTED_MODULE_2__[\"default\"].find();\n        if (!alluser) return res.status(204).json({\n            \"message\": \"No User found ..\"\n        });\n        console.log(alluser.length);\n        return res.status(200).json(alluser);\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcm91dGVzL0F1dGgvYWxsdXNlcnMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBaUQ7QUFDTztBQUNUO0FBRy9DLGVBQWVHLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDN0IsTUFBTUosaUVBQVMsRUFBRTtJQUNqQixJQUFJRyxHQUFHLENBQUNFLE1BQU0sS0FBSyxLQUFLLEVBQUM7UUFDckIsTUFBTUMsT0FBTyxHQUFHLE1BQU1MLDhEQUFjLEVBQUU7UUFDdEMsSUFBSSxDQUFDSyxPQUFPLEVBQUUsT0FBT0YsR0FBRyxDQUFDSSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUFFLFNBQVMsRUFBRSxrQkFBa0I7U0FBRSxDQUFDO1FBQzVFQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0wsT0FBTyxDQUFDTSxNQUFNLENBQUM7UUFDM0IsT0FBT1IsR0FBRyxDQUFDSSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQ0gsT0FBTyxDQUFDO0lBQ3hDLENBQUM7QUFDTCxDQUFDO0FBRUQsaUVBQWVKLE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9xdWVlbi1uZXh0Ly4vcGFnZXMvYXBpL3JvdXRlcy9BdXRoL2FsbHVzZXJzLmpzPzFhNjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSnNvbldlYlRva2VuRXJyb3IgfSBmcm9tIFwianNvbndlYnRva2VuXCI7XHJcbmltcG9ydCB7IGNvbm5lY3REQiB9IGZyb20gXCIuLi8uLi9jb25maWcvbW9uZ29kYmNvbm5lY3RcIjtcclxuaW1wb3J0IFVzZXJNb2RlbCBmcm9tIFwiLi4vLi4vbW9kZWxzL1VzZXJNb2RlbFwiO1xyXG5cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIEhhbmRsZXIocmVxLCByZXMpIHtcclxuICAgIGF3YWl0IGNvbm5lY3REQigpXHJcbiAgICBpZiAocmVxLm1ldGhvZCA9PT0gXCJHRVRcIil7XHJcbiAgICAgICAgY29uc3QgYWxsdXNlciA9IGF3YWl0IFVzZXJNb2RlbC5maW5kKCkgXHJcbiAgICAgICAgaWYgKCFhbGx1c2VyKSByZXR1cm4gcmVzLnN0YXR1cygyMDQpLmpzb24oeyAnbWVzc2FnZSc6ICdObyBVc2VyIGZvdW5kIC4uJyB9KVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGFsbHVzZXIubGVuZ3RoKVxyXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbihhbGx1c2VyKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIYW5kbGVyXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiJdLCJuYW1lcyI6WyJKc29uV2ViVG9rZW5FcnJvciIsImNvbm5lY3REQiIsIlVzZXJNb2RlbCIsIkhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJhbGx1c2VyIiwiZmluZCIsInN0YXR1cyIsImpzb24iLCJjb25zb2xlIiwibG9nIiwibGVuZ3RoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/routes/Auth/allusers.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/routes/Auth/allusers.js"));
module.exports = __webpack_exports__;

})();