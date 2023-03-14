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
exports.id = "pages/api/routes/Auth/loginRoute";
exports.ids = ["pages/api/routes/Auth/loginRoute"];
exports.modules = {

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("bcryptjs");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("cookie-parser");

/***/ }),

/***/ "cookies-next":
/*!*******************************!*\
  !*** external "cookies-next" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("cookies-next");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"connectDB\": () => (/* binding */ connectDB)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\n// const linker = \"mongodb+srv://afuhchris:deLe1017@cluster0.3xjsj75.mongodb.net/QueenzeeDB?retryWrites=true&w=majority\"\nconst linker = \"mongodb://127.0.0.1:27017/QueenDB?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.6.0\";\nconst connectDB = async ()=>{\n    try {\n        await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(linker, {\n            useUnifiedTopology: true,\n            useNewUrlParser: true\n        });\n    // console.log(\"Database Connected\")\n    } catch (err) {\n        console.log(err);\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY29uZmlnL21vbmdvZGJjb25uZWN0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUErQjtBQUkvQix3SEFBd0g7QUFDeEgsTUFBTUMsTUFBTSxHQUFHLDZHQUE2RztBQUVySCxNQUFNQyxTQUFTLEdBQUcsVUFBVztJQUNoQyxJQUFHO1FBQ0MsTUFBTUYsdURBQWdCLENBQUVDLE1BQU0sRUFBRztZQUM3Qkcsa0JBQWtCLEVBQUcsSUFBSTtZQUN6QkMsZUFBZSxFQUFFLElBQUk7U0FDeEIsQ0FBQztJQUNGLG9DQUFvQztJQUV0QyxFQUFDLE9BQU1DLEdBQUcsRUFBQztRQUFDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsR0FBRyxDQUFDO0lBQUEsQ0FBQztBQUNuQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcXVlZW4tbmV4dC8uL3BhZ2VzL2FwaS9jb25maWcvbW9uZ29kYmNvbm5lY3QuanM/ZTkyMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCJcclxuXHJcblxyXG5cclxuLy8gY29uc3QgbGlua2VyID0gXCJtb25nb2RiK3NydjovL2FmdWhjaHJpczpkZUxlMTAxN0BjbHVzdGVyMC4zeGpzajc1Lm1vbmdvZGIubmV0L1F1ZWVuemVlREI/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5XCJcclxuY29uc3QgbGlua2VyID0gXCJtb25nb2RiOi8vMTI3LjAuMC4xOjI3MDE3L1F1ZWVuREI/ZGlyZWN0Q29ubmVjdGlvbj10cnVlJnNlcnZlclNlbGVjdGlvblRpbWVvdXRNUz0yMDAwJmFwcE5hbWU9bW9uZ29zaCsxLjYuMFwiXHJcblxyXG5leHBvcnQgY29uc3QgY29ubmVjdERCID0gYXN5bmMgKCkgPT57XHJcbiAgICB0cnl7ICBcclxuICAgICAgICBhd2FpdCBtb25nb29zZS5jb25uZWN0KCBsaW5rZXIgLCB7XHJcbiAgICAgICAgICAgIHVzZVVuaWZpZWRUb3BvbG9neSA6IHRydWUgLCAgXHJcbiAgICAgICAgICAgIHVzZU5ld1VybFBhcnNlcjogdHJ1ZSAgXHJcbiAgICAgICAgfSlcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkRhdGFiYXNlIENvbm5lY3RlZFwiKVxyXG4gICAgICAgXHJcbiAgICAgIH1jYXRjaChlcnIpe2NvbnNvbGUubG9nKGVycil9XHJcbn1cclxuXHJcblxyXG5cclxuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwibGlua2VyIiwiY29ubmVjdERCIiwiY29ubmVjdCIsInVzZVVuaWZpZWRUb3BvbG9neSIsInVzZU5ld1VybFBhcnNlciIsImVyciIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/config/mongodbconnect.js\n");

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

/***/ "(api)/./pages/api/routes/Auth/CookieMiddleware.js":
/*!***************************************************!*\
  !*** ./pages/api/routes/Auth/CookieMiddleware.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst cookieParser = __webpack_require__(/*! cookie-parser */ \"cookie-parser\");\nfunction CookieMiddleware(Handler) {\n    return async (req, res)=>{\n        cookieParser();\n        return Handler(req, res);\n    };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CookieMiddleware);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcm91dGVzL0F1dGgvQ29va2llTWlkZGxld2FyZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQ0EsTUFBTUEsWUFBWSxHQUFHQyxtQkFBTyxDQUFDLG9DQUFlLENBQUM7QUFHN0MsU0FBU0MsZ0JBQWdCLENBQUNDLE9BQU8sRUFBRTtJQUMvQixPQUFPLE9BQU9DLEdBQUcsRUFBRUMsR0FBRyxHQUFLO1FBQ3ZCTCxZQUFZLEVBQUU7UUFDZCxPQUFPRyxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxDQUFDO0lBQzVCLENBQUM7QUFFTCxDQUFDO0FBRUQsaUVBQWVILGdCQUFnQiIsInNvdXJjZXMiOlsid2VicGFjazovL3F1ZWVuLW5leHQvLi9wYWdlcy9hcGkvcm91dGVzL0F1dGgvQ29va2llTWlkZGxld2FyZS5qcz9mODEyIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5jb25zdCBjb29raWVQYXJzZXIgPSByZXF1aXJlKCdjb29raWUtcGFyc2VyJykgXHJcblxyXG5cclxuZnVuY3Rpb24gQ29va2llTWlkZGxld2FyZShIYW5kbGVyKSB7XHJcbiAgICByZXR1cm4gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgICAgICAgY29va2llUGFyc2VyKCkgXHJcbiAgICAgICAgcmV0dXJuIEhhbmRsZXIocmVxLCByZXMpXHJcbiAgICB9XHJcbiBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29va2llTWlkZGxld2FyZSJdLCJuYW1lcyI6WyJjb29raWVQYXJzZXIiLCJyZXF1aXJlIiwiQ29va2llTWlkZGxld2FyZSIsIkhhbmRsZXIiLCJyZXEiLCJyZXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/routes/Auth/CookieMiddleware.js\n");

/***/ }),

/***/ "(api)/./pages/api/routes/Auth/loginRoute.js":
/*!*********************************************!*\
  !*** ./pages/api/routes/Auth/loginRoute.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"login\": () => (/* binding */ login)\n/* harmony export */ });\n/* harmony import */ var _models_UserModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/UserModel */ \"(api)/./pages/api/models/UserModel.js\");\n/* harmony import */ var _CookieMiddleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CookieMiddleware */ \"(api)/./pages/api/routes/Auth/CookieMiddleware.js\");\n/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cookies-next */ \"cookies-next\");\n/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cookies_next__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config_mongodbconnect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config/mongodbconnect */ \"(api)/./pages/api/config/mongodbconnect.js\");\n\n\nconst jwt = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n(__webpack_require__(/*! dotenv */ \"dotenv\").config)();\nconst bcrypt = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n\n\nasync function Handler(req, res) {\n    await (0,_config_mongodbconnect__WEBPACK_IMPORTED_MODULE_3__.connectDB)();\n    const { username , password  } = req.body;\n    if (!username || !password) return res.status(400).json({\n        \"message\": `Username or Password has not been given`\n    });\n    //check if the user has an account and logg him out if he does not\n    const foundUser = await _models_UserModel__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findOne({\n        username: username\n    });\n    if (!foundUser) return res.status(401).json(\"UnAuthorized\") //UnAuthorized ....\n    ;\n    const match = await bcrypt.compare(password, foundUser.password);\n    if (match) {\n        // We are going the apply JWT(Normal token and refresh token ) to use in the other routes we want protected in our api\n        const loginconfirm = await login(foundUser, req, res);\n        return res.json(loginconfirm);\n    } else {\n        return res.status(401).json(\"Unauthorized\") // Unauthorized\n        ;\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Handler);\nasync function login(foundUser, req, res) {\n    const roles = Object.values(foundUser.roles);\n    // console.log(roles)\n    console.log(foundUser.roles);\n    //define accesstoken\n    const accessToken = jwt.sign({\n        \"UserInfo\": {\n            \"_id\": foundUser._id,\n            \"username\": foundUser.username,\n            \"email\": foundUser.email,\n            \"imageurl\": foundUser.imageurl,\n            \"roles\": foundUser.roles\n        }\n    }, process.env.ACCESS_TOKEN_SECRET, {\n        expiresIn: \"5h\"\n    });\n    //define refreshtoken\n    const refreshToken = jwt.sign({\n        \"_id\": foundUser._id,\n        \"username\": foundUser.username,\n        \"email\": foundUser.email,\n        \"imageurl\": foundUser.imageurl,\n        \"roles\": foundUser.roles\n    }, process.env.REFRESH_TOKEN_SECRET, {\n        expiresIn: \"1d\"\n    });\n    // .... .. Saving the refresh token .....\n    foundUser.refreshToken = refreshToken;\n    const result = await foundUser.save();\n    // ..............\n    // save to cookie and send to user ... ...\n    (0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.setCookie)(\"jwt\", refreshToken, {\n        req,\n        res,\n        httpOnly: true,\n        maxAge: 24 * 60 * 60 * 1000,\n        sameSite: \"Strict\",\n        path: \"/\"\n    });\n    // res.json({ accessToken })\n    return {\n        accessToken\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcm91dGVzL0F1dGgvbG9naW5Sb3V0ZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQzhDO0FBQ0c7QUFDakQsTUFBTUUsR0FBRyxHQUFHQyxtQkFBTyxDQUFDLGtDQUFjLENBQUM7QUFDbkNBLG9EQUF3QixFQUFFO0FBQzFCLE1BQU1FLE1BQU0sR0FBR0YsbUJBQU8sQ0FBQywwQkFBVSxDQUFDO0FBQ087QUFDYztBQUt2RCxlQUFlSyxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQy9CLE1BQU1ILGlFQUFTLEVBQUU7SUFDZixNQUFNLEVBQUNJLFFBQVEsR0FBR0MsUUFBUSxHQUFDLEdBQUdILEdBQUcsQ0FBQ0ksSUFBSTtJQUN0QyxJQUFHLENBQUNGLFFBQVEsSUFBSSxDQUFFQyxRQUFRLEVBQUUsT0FBT0YsR0FBRyxDQUFDSSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztRQUFDLFNBQVMsRUFBRSxDQUFDLHVDQUF1QyxDQUFDO0tBQUMsQ0FBQztJQUU3RyxrRUFBa0U7SUFDbEUsTUFBTUMsU0FBUyxHQUFHLE1BQU1oQixpRUFBaUIsQ0FBQztRQUFDVyxRQUFRLEVBQUdBLFFBQVE7S0FBQyxDQUFDO0lBRWhFLElBQUcsQ0FBQ0ssU0FBUyxFQUFFLE9BQU9OLEdBQUcsQ0FBQ0ksTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsbUJBQW1CO0tBQXBCO0lBQzFELE1BQU1HLEtBQUssR0FBRyxNQUFNYixNQUFNLENBQUNjLE9BQU8sQ0FBQ1AsUUFBUSxFQUFHSSxTQUFTLENBQUNKLFFBQVEsQ0FBQztJQUVqRSxJQUFJTSxLQUFLLEVBQUU7UUFDVCxzSEFBc0g7UUFDeEgsTUFBTUUsWUFBWSxHQUFLLE1BQU1DLEtBQUssQ0FBQ0wsU0FBUyxFQUFFUCxHQUFHLEVBQUVDLEdBQUcsQ0FBQztRQUNuRCxPQUFPQSxHQUFHLENBQUNLLElBQUksQ0FBQ0ssWUFBWSxDQUFDO0lBQ2pDLE9BQU07UUFDSixPQUFPVixHQUFHLENBQUNJLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLGVBQWU7U0FBaEI7SUFDL0MsQ0FBQztBQUNMLENBQUM7QUFHRCxpRUFBZVAsT0FBTztBQVFmLGVBQWVhLEtBQUssQ0FBQ0wsU0FBUyxFQUFHUCxHQUFHLEVBQUVDLEdBQUcsRUFBQztJQUUvQyxNQUFNWSxLQUFLLEdBQUdDLE1BQU0sQ0FBQ0MsTUFBTSxDQUFDUixTQUFTLENBQUNNLEtBQUssQ0FBQztJQUU1QyxxQkFBcUI7SUFDckJHLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDVixTQUFTLENBQUNNLEtBQUssQ0FBQztJQUM1QixvQkFBb0I7SUFFcEIsTUFBTUssV0FBVyxHQUFHekIsR0FBRyxDQUFDMEIsSUFBSSxDQUN4QjtRQUNBLFVBQVUsRUFBRTtZQUNWLEtBQUssRUFBR1osU0FBUyxDQUFDYSxHQUFHO1lBQ25CLFVBQVUsRUFBR2IsU0FBUyxDQUFDTCxRQUFRO1lBQy9CLE9BQU8sRUFBR0ssU0FBUyxDQUFDYyxLQUFLO1lBQ3pCLFVBQVUsRUFBR2QsU0FBUyxDQUFDZSxRQUFRO1lBQy9CLE9BQU8sRUFBR2YsU0FBUyxDQUFDTSxLQUFLO1NBQ3pCO0tBQ0gsRUFDRFUsT0FBTyxDQUFDQyxHQUFHLENBQUNDLG1CQUFtQixFQUMvQjtRQUFDQyxTQUFTLEVBQUUsSUFBSTtLQUFDLENBQ2xCO0lBRUgscUJBQXFCO0lBQ3JCLE1BQU1DLFlBQVksR0FBR2xDLEdBQUcsQ0FBQzBCLElBQUksQ0FDM0I7UUFBRSxLQUFLLEVBQUdaLFNBQVMsQ0FBQ2EsR0FBRztRQUNyQixVQUFVLEVBQUViLFNBQVMsQ0FBQ0wsUUFBUTtRQUM5QixPQUFPLEVBQUdLLFNBQVMsQ0FBQ2MsS0FBSztRQUN6QixVQUFVLEVBQUdkLFNBQVMsQ0FBQ2UsUUFBUTtRQUMvQixPQUFPLEVBQUlmLFNBQVMsQ0FBQ00sS0FBSztLQUMzQixFQUNDVSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0ksb0JBQW9CLEVBQ2hDO1FBQUVGLFNBQVMsRUFBRSxJQUFJO0tBQUUsQ0FDdEI7SUFFRCx5Q0FBeUM7SUFDeENuQixTQUFTLENBQUNvQixZQUFZLEdBQUdBLFlBQVk7SUFDckMsTUFBTUUsTUFBTSxHQUFHLE1BQU10QixTQUFTLENBQUN1QixJQUFJLEVBQUU7SUFDdEMsaUJBQWlCO0lBQ2pCLDBDQUEwQztJQUN2Q2pDLHVEQUFTLENBQUMsS0FBSyxFQUFFOEIsWUFBWSxFQUFHO1FBQUMzQixHQUFHO1FBQUVDLEdBQUc7UUFDcEM4QixRQUFRLEVBQUUsSUFBSTtRQUNkQyxNQUFNLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsSUFBSTtRQUM5QkMsUUFBUSxFQUFFLFFBQVE7UUFDZkMsSUFBSSxFQUFFLEdBQUc7S0FFYixDQUFDO0lBRUwsNEJBQTRCO0lBRTdCLE9BQU87UUFBRWhCLFdBQVc7S0FBRTtBQUV2QixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcXVlZW4tbmV4dC8uL3BhZ2VzL2FwaS9yb3V0ZXMvQXV0aC9sb2dpblJvdXRlLmpzPzFlMjMiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCBVc2VyTW9kZWwgZnJvbSBcIi4uLy4uL21vZGVscy9Vc2VyTW9kZWxcIlxyXG5pbXBvcnQgQ29va2llTWlkZGxld2FyZSBmcm9tIFwiLi9Db29raWVNaWRkbGV3YXJlXCJcclxuY29uc3Qgand0ID0gcmVxdWlyZSgnanNvbndlYnRva2VuJylcclxucmVxdWlyZSgnZG90ZW52JykuY29uZmlnKClcclxuY29uc3QgYmNyeXB0ID0gcmVxdWlyZSgnYmNyeXB0anMnKVxyXG5pbXBvcnQgeyBzZXRDb29raWUgfSBmcm9tICdjb29raWVzLW5leHQnO1xyXG5pbXBvcnQgeyBjb25uZWN0REIgfSBmcm9tIFwiLi4vLi4vY29uZmlnL21vbmdvZGJjb25uZWN0XCJcclxuXHJcblxyXG5cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIEhhbmRsZXIocmVxLCByZXMpIHtcclxuICBhd2FpdCBjb25uZWN0REIoKVxyXG4gICAgY29uc3Qge3VzZXJuYW1lICwgcGFzc3dvcmR9ID0gcmVxLmJvZHlcclxuICAgIGlmKCF1c2VybmFtZSB8fCAhIHBhc3N3b3JkKSByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oeydtZXNzYWdlJzogYFVzZXJuYW1lIG9yIFBhc3N3b3JkIGhhcyBub3QgYmVlbiBnaXZlbmB9KVxyXG5cclxuICAgICAgLy9jaGVjayBpZiB0aGUgdXNlciBoYXMgYW4gYWNjb3VudCBhbmQgbG9nZyBoaW0gb3V0IGlmIGhlIGRvZXMgbm90XHJcbiAgICAgIGNvbnN0IGZvdW5kVXNlciA9IGF3YWl0IFVzZXJNb2RlbC5maW5kT25lKHt1c2VybmFtZSA6IHVzZXJuYW1lfSlcclxuICAgICBcclxuICAgICAgaWYoIWZvdW5kVXNlcikgcmV0dXJuIHJlcy5zdGF0dXMoNDAxKS5qc29uKFwiVW5BdXRob3JpemVkXCIpIC8vVW5BdXRob3JpemVkIC4uLi5cclxuICAgICAgY29uc3QgbWF0Y2ggPSBhd2FpdCBiY3J5cHQuY29tcGFyZShwYXNzd29yZCAsIGZvdW5kVXNlci5wYXNzd29yZClcclxuICAgICAgXHJcbiAgICAgIGlmIChtYXRjaCkge1xyXG4gICAgICAgIC8vIFdlIGFyZSBnb2luZyB0aGUgYXBwbHkgSldUKE5vcm1hbCB0b2tlbiBhbmQgcmVmcmVzaCB0b2tlbiApIHRvIHVzZSBpbiB0aGUgb3RoZXIgcm91dGVzIHdlIHdhbnQgcHJvdGVjdGVkIGluIG91ciBhcGlcclxuICAgICAgY29uc3QgbG9naW5jb25maXJtID0gICBhd2FpdCBsb2dpbihmb3VuZFVzZXIsIHJlcSAscmVzKVxyXG4gICAgICAgICAgcmV0dXJuIHJlcy5qc29uKGxvZ2luY29uZmlybSlcclxuICAgICAgfWVsc2Uge1xyXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMSkuanNvbihcIlVuYXV0aG9yaXplZFwiKSAvLyBVbmF1dGhvcml6ZWRcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhhbmRsZXIgXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9naW4oZm91bmRVc2VyICwgcmVxICxyZXMpe1xyXG4gXHJcbiAgY29uc3Qgcm9sZXMgPSBPYmplY3QudmFsdWVzKGZvdW5kVXNlci5yb2xlcylcclxuICAgICAgIFxyXG4gIC8vIGNvbnNvbGUubG9nKHJvbGVzKVxyXG4gIGNvbnNvbGUubG9nKGZvdW5kVXNlci5yb2xlcylcclxuICAvL2RlZmluZSBhY2Nlc3N0b2tlblxyXG4gICAgXHJcbiAgY29uc3QgYWNjZXNzVG9rZW4gPSBqd3Quc2lnbihcclxuICAgICAge1xyXG4gICAgICBcIlVzZXJJbmZvXCI6IHtcclxuICAgICAgICBcIl9pZFwiIDogZm91bmRVc2VyLl9pZCxcclxuICAgICAgICAgIFwidXNlcm5hbWVcIiA6IGZvdW5kVXNlci51c2VybmFtZSxcclxuICAgICAgICAgIFwiZW1haWxcIiA6IGZvdW5kVXNlci5lbWFpbCxcclxuICAgICAgICAgIFwiaW1hZ2V1cmxcIiA6IGZvdW5kVXNlci5pbWFnZXVybCxcclxuICAgICAgICAgIFwicm9sZXNcIiA6IGZvdW5kVXNlci5yb2xlcyBcclxuICAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBwcm9jZXNzLmVudi5BQ0NFU1NfVE9LRU5fU0VDUkVULFxyXG4gICAgICB7ZXhwaXJlc0luOiAnNWgnfVxyXG4gICAgKVxyXG4gICAgXHJcbiAgLy9kZWZpbmUgcmVmcmVzaHRva2VuXHJcbiAgY29uc3QgcmVmcmVzaFRva2VuID0gand0LnNpZ24oXHJcbiAgICB7IFwiX2lkXCIgOiBmb3VuZFVzZXIuX2lkLFxyXG4gICAgICBcInVzZXJuYW1lXCI6IGZvdW5kVXNlci51c2VybmFtZSxcclxuICAgICAgXCJlbWFpbFwiIDogZm91bmRVc2VyLmVtYWlsLFxyXG4gICAgICBcImltYWdldXJsXCIgOiBmb3VuZFVzZXIuaW1hZ2V1cmwsXHJcbiAgICAgIFwicm9sZXNcIiA6ICBmb3VuZFVzZXIucm9sZXMgXHJcbiAgICB9LFxyXG4gICAgICBwcm9jZXNzLmVudi5SRUZSRVNIX1RPS0VOX1NFQ1JFVCxcclxuICAgICAgeyBleHBpcmVzSW46ICcxZCcgfVxyXG4gIClcclxuICAgICBcclxuICAvLyAuLi4uIC4uIFNhdmluZyB0aGUgcmVmcmVzaCB0b2tlbiAuLi4uLlxyXG4gICBmb3VuZFVzZXIucmVmcmVzaFRva2VuID0gcmVmcmVzaFRva2VuXHJcbiAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGZvdW5kVXNlci5zYXZlKClcclxuICAvLyAuLi4uLi4uLi4uLi4uLlxyXG4gIC8vIHNhdmUgdG8gY29va2llIGFuZCBzZW5kIHRvIHVzZXIgLi4uIC4uLlxyXG4gICAgIHNldENvb2tpZSgnand0JywgcmVmcmVzaFRva2VuICwge3JlcSwgcmVzLFxyXG4gICAgICAgICAgaHR0cE9ubHk6IHRydWUgLFxyXG4gICAgICAgICAgbWF4QWdlOiAyNCAqIDYwICogNjAgKiAxMDAwICxcclxuICAgICAgIHNhbWVTaXRlOiBcIlN0cmljdFwiLFxyXG4gICAgICAgICAgcGF0aDogXCIvXCJcclxuICAgICAgICAgIC8vIHNlY3VyZSA6IHRydWUgLi4uLi4gZG9lcyBub3Qgd29yayB3dGggdGh1bmRlciBjbGllbnQgLi4uLlxyXG4gICAgIH0pXHJcbiAgXHJcbiAgLy8gcmVzLmpzb24oeyBhY2Nlc3NUb2tlbiB9KVxyXG4gIFxyXG4gcmV0dXJuIHsgYWNjZXNzVG9rZW4gfVxyXG5cclxufVxyXG5cclxuIl0sIm5hbWVzIjpbIlVzZXJNb2RlbCIsIkNvb2tpZU1pZGRsZXdhcmUiLCJqd3QiLCJyZXF1aXJlIiwiY29uZmlnIiwiYmNyeXB0Iiwic2V0Q29va2llIiwiY29ubmVjdERCIiwiSGFuZGxlciIsInJlcSIsInJlcyIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJib2R5Iiwic3RhdHVzIiwianNvbiIsImZvdW5kVXNlciIsImZpbmRPbmUiLCJtYXRjaCIsImNvbXBhcmUiLCJsb2dpbmNvbmZpcm0iLCJsb2dpbiIsInJvbGVzIiwiT2JqZWN0IiwidmFsdWVzIiwiY29uc29sZSIsImxvZyIsImFjY2Vzc1Rva2VuIiwic2lnbiIsIl9pZCIsImVtYWlsIiwiaW1hZ2V1cmwiLCJwcm9jZXNzIiwiZW52IiwiQUNDRVNTX1RPS0VOX1NFQ1JFVCIsImV4cGlyZXNJbiIsInJlZnJlc2hUb2tlbiIsIlJFRlJFU0hfVE9LRU5fU0VDUkVUIiwicmVzdWx0Iiwic2F2ZSIsImh0dHBPbmx5IiwibWF4QWdlIiwic2FtZVNpdGUiLCJwYXRoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/routes/Auth/loginRoute.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/routes/Auth/loginRoute.js"));
module.exports = __webpack_exports__;

})();