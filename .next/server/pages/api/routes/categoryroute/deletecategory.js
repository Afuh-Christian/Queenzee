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
exports.id = "pages/api/routes/categoryroute/deletecategory";
exports.ids = ["pages/api/routes/categoryroute/deletecategory"];
exports.modules = {

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

/***/ "multer":
/*!*************************!*\
  !*** external "multer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("multer");

/***/ }),

/***/ "next-connect":
/*!*******************************!*\
  !*** external "next-connect" ***!
  \*******************************/
/***/ ((module) => {

module.exports = import("next-connect");;

/***/ }),

/***/ "fs/promises":
/*!******************************!*\
  !*** external "fs/promises" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("fs/promises");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "(api)/./pages/api/config/mongodbconnect.js":
/*!********************************************!*\
  !*** ./pages/api/config/mongodbconnect.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"connectDB\": () => (/* binding */ connectDB)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\n// const linker = \"mongodb+srv://afuhchris:deLe1017@cluster0.3xjsj75.mongodb.net/QueenzeeDB?retryWrites=true&w=majority\"\nconst linker = \"mongodb://127.0.0.1:27017/QueenDB?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.6.0\";\nconst connectDB = async ()=>{\n    try {\n        await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(linker, {\n            useUnifiedTopology: true,\n            useNewUrlParser: true\n        });\n    // console.log(\"Database Connected\")\n    } catch (err) {\n        console.log(err);\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY29uZmlnL21vbmdvZGJjb25uZWN0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUErQjtBQUkvQix3SEFBd0g7QUFDeEgsTUFBTUMsTUFBTSxHQUFHLDZHQUE2RztBQUVySCxNQUFNQyxTQUFTLEdBQUcsVUFBVztJQUNoQyxJQUFHO1FBQ0MsTUFBTUYsdURBQWdCLENBQUVDLE1BQU0sRUFBRztZQUM3Qkcsa0JBQWtCLEVBQUcsSUFBSTtZQUN6QkMsZUFBZSxFQUFFLElBQUk7U0FDeEIsQ0FBQztJQUNGLG9DQUFvQztJQUV0QyxFQUFDLE9BQU1DLEdBQUcsRUFBQztRQUFDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsR0FBRyxDQUFDO0lBQUEsQ0FBQztBQUNuQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcXVlZW4tbmV4dC8uL3BhZ2VzL2FwaS9jb25maWcvbW9uZ29kYmNvbm5lY3QuanM/ZTkyMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCJcclxuXHJcblxyXG5cclxuLy8gY29uc3QgbGlua2VyID0gXCJtb25nb2RiK3NydjovL2FmdWhjaHJpczpkZUxlMTAxN0BjbHVzdGVyMC4zeGpzajc1Lm1vbmdvZGIubmV0L1F1ZWVuemVlREI/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5XCJcclxuY29uc3QgbGlua2VyID0gXCJtb25nb2RiOi8vMTI3LjAuMC4xOjI3MDE3L1F1ZWVuREI/ZGlyZWN0Q29ubmVjdGlvbj10cnVlJnNlcnZlclNlbGVjdGlvblRpbWVvdXRNUz0yMDAwJmFwcE5hbWU9bW9uZ29zaCsxLjYuMFwiXHJcblxyXG5leHBvcnQgY29uc3QgY29ubmVjdERCID0gYXN5bmMgKCkgPT57XHJcbiAgICB0cnl7ICBcclxuICAgICAgICBhd2FpdCBtb25nb29zZS5jb25uZWN0KCBsaW5rZXIgLCB7XHJcbiAgICAgICAgICAgIHVzZVVuaWZpZWRUb3BvbG9neSA6IHRydWUgLCAgXHJcbiAgICAgICAgICAgIHVzZU5ld1VybFBhcnNlcjogdHJ1ZSAgXHJcbiAgICAgICAgfSlcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkRhdGFiYXNlIENvbm5lY3RlZFwiKVxyXG4gICAgICAgXHJcbiAgICAgIH1jYXRjaChlcnIpe2NvbnNvbGUubG9nKGVycil9XHJcbn1cclxuXHJcblxyXG5cclxuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwibGlua2VyIiwiY29ubmVjdERCIiwiY29ubmVjdCIsInVzZVVuaWZpZWRUb3BvbG9neSIsInVzZU5ld1VybFBhcnNlciIsImVyciIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/config/mongodbconnect.js\n");

/***/ }),

/***/ "(api)/./pages/api/middleware/verifJWT.js":
/*!******************************************!*\
  !*** ./pages/api/middleware/verifJWT.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst jwt = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n(__webpack_require__(/*! dotenv */ \"dotenv\").config)();\nfunction verifyJWT(Handler) {\n    return async (req, res)=>{\n        // authorization sometimes starts with small or capital letter ... \n        const authHeader = req.headers.authorization || req.headers.Authorization;\n        // if the authHeader starts with Bearer      \n        if (!authHeader?.startsWith(\"Bearer \")) return res.status(401).json(\"Unauthorized\") // Unauthorized        \n        ;\n        const token = authHeader.split(\" \")[1];\n        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded)=>{\n            console.log(process.env.ACCESS_TOKEN_SECRET);\n            // const roles  = Object.values()\n            if (err) return res.status(403).json(\"Forbidden ..\") // forbidden // invalid token \n            ;\n            // req.auth = token;\n            // the username and roles are in the UserInfo ... set the roles too .. .\n            req.username = decoded.UserInfo.username;\n            req.roles = decoded.UserInfo.roles;\n        });\n        return Handler(req, res);\n    };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (verifyJWT);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbWlkZGxld2FyZS92ZXJpZkpXVC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTUEsR0FBRyxHQUFHQyxtQkFBTyxDQUFDLGtDQUFjLENBQUM7QUFDbkNBLG9EQUF3QixFQUFFO0FBRzFCLFNBQVNFLFNBQVMsQ0FBQ0MsT0FBTyxFQUFFO0lBQ3hCLE9BQU8sT0FBT0MsR0FBRyxFQUFFQyxHQUFHLEdBQUs7UUFDdkIsbUVBQW1FO1FBQ25FLE1BQU1DLFVBQVUsR0FBR0YsR0FBRyxDQUFDRyxPQUFPLENBQUNDLGFBQWEsSUFBSUosR0FBRyxDQUFDRyxPQUFPLENBQUNFLGFBQWE7UUFDekUsNkNBQTZDO1FBQzdDLElBQUksQ0FBQ0gsVUFBVSxFQUFFSSxVQUFVLENBQUMsU0FBUyxDQUFDLEVBQUUsT0FBT0wsR0FBRyxDQUFDTSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQyxjQUFjLENBQUMsd0JBQXVCO1NBQXZCO1FBQ25GLE1BQU1DLEtBQUssR0FBR1AsVUFBVSxDQUFDUSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRXRDZixHQUFHLENBQUNnQixNQUFNLENBQ05GLEtBQUssRUFDTEcsT0FBTyxDQUFDQyxHQUFHLENBQUNDLG1CQUFtQixFQUMvQixDQUFDQyxHQUFHLEVBQUVDLE9BQU8sR0FBSztZQUNkQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ04sT0FBTyxDQUFDQyxHQUFHLENBQUNDLG1CQUFtQixDQUFDO1lBQzVDLGlDQUFpQztZQUNqQyxJQUFJQyxHQUFHLEVBQUUsT0FBT2QsR0FBRyxDQUFDTSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyw4QkFBOEI7YUFBL0I7WUFDcEQsb0JBQW9CO1lBQ3BCLHdFQUF3RTtZQUN4RVIsR0FBRyxDQUFDbUIsUUFBUSxHQUFHSCxPQUFPLENBQUNJLFFBQVEsQ0FBQ0QsUUFBUSxDQUFDO1lBQ3pDbkIsR0FBRyxDQUFDcUIsS0FBSyxHQUFHTCxPQUFPLENBQUNJLFFBQVEsQ0FBQ0MsS0FBSyxDQUFDO1FBRXZDLENBQUMsQ0FDSjtRQUNHLE9BQU90QixPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxDQUFDO0lBQ2hDLENBQUM7QUFDTCxDQUFDO0FBRUQsaUVBQWVILFNBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9xdWVlbi1uZXh0Ly4vcGFnZXMvYXBpL21pZGRsZXdhcmUvdmVyaWZKV1QuanM/NmE4YiJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBqd3QgPSByZXF1aXJlKCdqc29ud2VidG9rZW4nKVxyXG5yZXF1aXJlKCdkb3RlbnYnKS5jb25maWcoKSBcclxuXHJcblxyXG5mdW5jdGlvbiB2ZXJpZnlKV1QoSGFuZGxlcikge1xyXG4gICAgcmV0dXJuIGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gICAgICAgIC8vIGF1dGhvcml6YXRpb24gc29tZXRpbWVzIHN0YXJ0cyB3aXRoIHNtYWxsIG9yIGNhcGl0YWwgbGV0dGVyIC4uLiBcclxuICAgICAgICBjb25zdCBhdXRoSGVhZGVyID0gcmVxLmhlYWRlcnMuYXV0aG9yaXphdGlvbiB8fCByZXEuaGVhZGVycy5BdXRob3JpemF0aW9uO1xyXG4gICAgICAgIC8vIGlmIHRoZSBhdXRoSGVhZGVyIHN0YXJ0cyB3aXRoIEJlYXJlciAgICAgIFxyXG4gICAgICAgIGlmICghYXV0aEhlYWRlcj8uc3RhcnRzV2l0aCgnQmVhcmVyICcpKSByZXR1cm4gcmVzLnN0YXR1cyg0MDEpLmpzb24oXCJVbmF1dGhvcml6ZWRcIikvLyBVbmF1dGhvcml6ZWQgICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHRva2VuID0gYXV0aEhlYWRlci5zcGxpdCgnICcpWzFdO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGp3dC52ZXJpZnkoXHJcbiAgICAgICAgICAgIHRva2VuLFxyXG4gICAgICAgICAgICBwcm9jZXNzLmVudi5BQ0NFU1NfVE9LRU5fU0VDUkVULFxyXG4gICAgICAgICAgICAoZXJyLCBkZWNvZGVkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9jZXNzLmVudi5BQ0NFU1NfVE9LRU5fU0VDUkVUKVxyXG4gICAgICAgICAgICAgICAgLy8gY29uc3Qgcm9sZXMgID0gT2JqZWN0LnZhbHVlcygpXHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSByZXR1cm4gcmVzLnN0YXR1cyg0MDMpLmpzb24oXCJGb3JiaWRkZW4gLi5cIikgLy8gZm9yYmlkZGVuIC8vIGludmFsaWQgdG9rZW4gXHJcbiAgICAgICAgICAgICAgICAvLyByZXEuYXV0aCA9IHRva2VuO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhlIHVzZXJuYW1lIGFuZCByb2xlcyBhcmUgaW4gdGhlIFVzZXJJbmZvIC4uLiBzZXQgdGhlIHJvbGVzIHRvbyAuLiAuXHJcbiAgICAgICAgICAgICAgICByZXEudXNlcm5hbWUgPSBkZWNvZGVkLlVzZXJJbmZvLnVzZXJuYW1lO1xyXG4gICAgICAgICAgICAgICAgcmVxLnJvbGVzID0gZGVjb2RlZC5Vc2VySW5mby5yb2xlcztcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKVxyXG4gICAgICAgICAgICByZXR1cm4gSGFuZGxlcihyZXEsIHJlcylcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdmVyaWZ5SldUIl0sIm5hbWVzIjpbImp3dCIsInJlcXVpcmUiLCJjb25maWciLCJ2ZXJpZnlKV1QiLCJIYW5kbGVyIiwicmVxIiwicmVzIiwiYXV0aEhlYWRlciIsImhlYWRlcnMiLCJhdXRob3JpemF0aW9uIiwiQXV0aG9yaXphdGlvbiIsInN0YXJ0c1dpdGgiLCJzdGF0dXMiLCJqc29uIiwidG9rZW4iLCJzcGxpdCIsInZlcmlmeSIsInByb2Nlc3MiLCJlbnYiLCJBQ0NFU1NfVE9LRU5fU0VDUkVUIiwiZXJyIiwiZGVjb2RlZCIsImNvbnNvbGUiLCJsb2ciLCJ1c2VybmFtZSIsIlVzZXJJbmZvIiwicm9sZXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/middleware/verifJWT.js\n");

/***/ }),

/***/ "(api)/./pages/api/middleware/verifyroles.js":
/*!*********************************************!*\
  !*** ./pages/api/middleware/verifyroles.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction verifyRoles(Handler, ...allowedRoles) {\n    return async (req, res)=>{\n        const rolesallowed = [\n            ...allowedRoles\n        ];\n        // console.log(rolesallowed)\n        console.log(req.roles);\n        const roles = Object.values(req.roles);\n        // console.log(roles)\n        const result = roles.map((r)=>rolesallowed.includes(r)).find((v)=>v === true);\n        if (!result) return res.status(401).json(\"Not allowed\");\n        return Handler(req, res);\n    };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (verifyRoles);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbWlkZGxld2FyZS92ZXJpZnlyb2xlcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBR0MsU0FBU0EsV0FBVyxDQUFFQyxPQUFPLEVBQUcsR0FBR0MsWUFBWSxFQUFFO0lBQzlDLE9BQU8sT0FBT0MsR0FBRyxFQUFFQyxHQUFHLEdBQUs7UUFDdkIsTUFBTUMsWUFBWSxHQUFHO2VBQUlILFlBQVk7U0FBQztRQUN0Qyw0QkFBNEI7UUFFNUJJLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSixHQUFHLENBQUNLLEtBQUssQ0FBQztRQUN0QixNQUFNQSxLQUFLLEdBQUdDLE1BQU0sQ0FBQ0MsTUFBTSxDQUFDUCxHQUFHLENBQUNLLEtBQUssQ0FBQztRQUN0QyxxQkFBcUI7UUFDdEIsTUFBTUcsTUFBTSxHQUFHSCxLQUFLLENBQUNJLEdBQUcsQ0FBQ0MsQ0FBQUEsQ0FBQyxHQUFJUixZQUFZLENBQUNTLFFBQVEsQ0FBQ0QsQ0FBQyxDQUFDLENBQUMsQ0FBQ0UsSUFBSSxDQUFDQyxDQUFBQSxDQUFDLEdBQUlBLENBQUMsS0FBSyxJQUFJLENBQUM7UUFFN0UsSUFBRyxDQUFDTCxNQUFNLEVBQUcsT0FBT1AsR0FBRyxDQUFDYSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQyxhQUFhLENBQUM7UUFHdEQsT0FBT2pCLE9BQU8sQ0FBQ0UsR0FBRyxFQUFJQyxHQUFHLENBQUM7SUFDOUIsQ0FBQztBQUNMLENBQUM7QUFHRCxpRUFBZUosV0FBVyIsInNvdXJjZXMiOlsid2VicGFjazovL3F1ZWVuLW5leHQvLi9wYWdlcy9hcGkvbWlkZGxld2FyZS92ZXJpZnlyb2xlcy5qcz9iZjQwIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuXHJcbiBmdW5jdGlvbiB2ZXJpZnlSb2xlcyggSGFuZGxlciAsIC4uLmFsbG93ZWRSb2xlcyApe1xyXG4gICAgcmV0dXJuIGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJvbGVzYWxsb3dlZCA9IFsuLi5hbGxvd2VkUm9sZXNdXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2cocm9sZXNhbGxvd2VkKVxyXG4gICAgICAgXHJcbiAgICAgICAgY29uc29sZS5sb2cocmVxLnJvbGVzKVxyXG4gICAgICAgIGNvbnN0IHJvbGVzID0gT2JqZWN0LnZhbHVlcyhyZXEucm9sZXMpXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2cocm9sZXMpXHJcbiAgICAgICBjb25zdCByZXN1bHQgPSByb2xlcy5tYXAociA9PiByb2xlc2FsbG93ZWQuaW5jbHVkZXMocikpLmZpbmQodiA9PiB2ID09PSB0cnVlKVxyXG5cclxuICAgICAgIGlmKCFyZXN1bHQpICByZXR1cm4gcmVzLnN0YXR1cyg0MDEpLmpzb24oXCJOb3QgYWxsb3dlZFwiKVxyXG5cclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gSGFuZGxlcihyZXEgICwgcmVzKVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdmVyaWZ5Um9sZXMiXSwibmFtZXMiOlsidmVyaWZ5Um9sZXMiLCJIYW5kbGVyIiwiYWxsb3dlZFJvbGVzIiwicmVxIiwicmVzIiwicm9sZXNhbGxvd2VkIiwiY29uc29sZSIsImxvZyIsInJvbGVzIiwiT2JqZWN0IiwidmFsdWVzIiwicmVzdWx0IiwibWFwIiwiciIsImluY2x1ZGVzIiwiZmluZCIsInYiLCJzdGF0dXMiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/middleware/verifyroles.js\n");

/***/ }),

/***/ "(api)/./pages/api/models/CategoryModel.js":
/*!*******************************************!*\
  !*** ./pages/api/models/CategoryModel.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst { Schema , models , model  } = (mongoose__WEBPACK_IMPORTED_MODULE_0___default());\nconst CategorySchema = Schema({\n    name: {\n        type: String,\n        required: true\n    },\n    imageurl: {\n        type: String\n    },\n    imagename: String\n});\nconst Category = models.Category || model(\"Category\", CategorySchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Category);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbW9kZWxzL0NhdGVnb3J5TW9kZWwuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBRWhDLE1BQU0sRUFBRUMsTUFBTSxHQUFFQyxNQUFNLEdBQUdDLEtBQUssR0FBRSxHQUFHSCxpREFBUTtBQUUzQyxNQUFNSSxjQUFjLEdBQUdILE1BQU0sQ0FBQztJQUMxQkksSUFBSSxFQUFFO1FBQ0ZDLElBQUksRUFBRUMsTUFBTTtRQUNaQyxRQUFRLEVBQUcsSUFBSTtLQUNsQjtJQUNEQyxRQUFRLEVBQUU7UUFDTkgsSUFBSSxFQUFFQyxNQUFNO0tBRWY7SUFDREcsU0FBUyxFQUFFSCxNQUFNO0NBS3BCLENBQUM7QUFHRixNQUFNSSxRQUFRLEdBQUdULE1BQU0sQ0FBQ1MsUUFBUSxJQUFLUixLQUFLLENBQUMsVUFBVSxFQUFHQyxjQUFjLENBQUM7QUFFdkUsaUVBQWVPLFFBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9xdWVlbi1uZXh0Ly4vcGFnZXMvYXBpL21vZGVscy9DYXRlZ29yeU1vZGVsLmpzP2M3MDAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xyXG5cclxuY29uc3QgeyBTY2hlbWEsIG1vZGVscywgIG1vZGVsIH0gPSBtb25nb29zZSBcclxuXHJcbmNvbnN0IENhdGVnb3J5U2NoZW1hID0gU2NoZW1hKHtcclxuICAgIG5hbWU6IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmcsIFxyXG4gICAgICAgIHJlcXVpcmVkIDogdHJ1ZSBcclxuICAgIH0sXHJcbiAgICBpbWFnZXVybDoge1xyXG4gICAgICAgIHR5cGU6IFN0cmluZywgXHJcbiAgICAgICAgLy8gcmVxdWlyZWQ6IHRydWVcclxuICAgIH0sXHJcbiAgICBpbWFnZW5hbWU6IFN0cmluZ1xyXG4gICAgLy8gYXZhdGFyOiB7XHJcbiAgICAvLyAgICAgdHlwZTogQnVmZmVyLCBcclxuICAgIC8vICAgICByZXF1aXJlZDogdHJ1ZSBcclxuICAgIC8vIH1cclxufSlcclxuXHJcblxyXG5jb25zdCBDYXRlZ29yeSA9IG1vZGVscy5DYXRlZ29yeSB8fCAgbW9kZWwoJ0NhdGVnb3J5JyAsIENhdGVnb3J5U2NoZW1hKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2F0ZWdvcnkgIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiU2NoZW1hIiwibW9kZWxzIiwibW9kZWwiLCJDYXRlZ29yeVNjaGVtYSIsIm5hbWUiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJpbWFnZXVybCIsImltYWdlbmFtZSIsIkNhdGVnb3J5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/models/CategoryModel.js\n");

/***/ }),

/***/ "(api)/./pages/api/models/RoleCodes.js":
/*!***************************************!*\
  !*** ./pages/api/models/RoleCodes.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst User_Roles = {\n    user: 2934,\n    admin: 5543,\n    editor: 6000\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User_Roles);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbW9kZWxzL1JvbGVDb2Rlcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTUEsVUFBVSxHQUFHO0lBQ2ZDLElBQUksRUFBRSxJQUFJO0lBQ1ZDLEtBQUssRUFBRSxJQUFJO0lBQ1hDLE1BQU0sRUFBRSxJQUFJO0NBQ2Y7QUFFRCxpRUFBZUgsVUFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL3F1ZWVuLW5leHQvLi9wYWdlcy9hcGkvbW9kZWxzL1JvbGVDb2Rlcy5qcz9hMGIwIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFVzZXJfUm9sZXMgPSB7XHJcbiAgICB1c2VyOiAyOTM0LCBcclxuICAgIGFkbWluOiA1NTQzLCBcclxuICAgIGVkaXRvcjogNjAwMFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VyX1JvbGVzXHJcblxyXG5cclxuXHJcblxyXG4iXSwibmFtZXMiOlsiVXNlcl9Sb2xlcyIsInVzZXIiLCJhZG1pbiIsImVkaXRvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/models/RoleCodes.js\n");

/***/ }),

/***/ "(api)/./pages/api/routes/categoryroute/deletecategory.js":
/*!**********************************************************!*\
  !*** ./pages/api/routes/categoryroute/deletecategory.js ***!
  \**********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"config\": () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var multer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! multer */ \"multer\");\n/* harmony import */ var multer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(multer__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-connect */ \"next-connect\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config_mongodbconnect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config/mongodbconnect */ \"(api)/./pages/api/config/mongodbconnect.js\");\n/* harmony import */ var _models_CategoryModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/CategoryModel */ \"(api)/./pages/api/models/CategoryModel.js\");\n/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! fs/promises */ \"fs/promises\");\n/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(fs_promises__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _middleware_verifJWT__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../middleware/verifJWT */ \"(api)/./pages/api/middleware/verifJWT.js\");\n/* harmony import */ var _middleware_verifyroles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../middleware/verifyroles */ \"(api)/./pages/api/middleware/verifyroles.js\");\n/* harmony import */ var _models_RoleCodes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../models/RoleCodes */ \"(api)/./pages/api/models/RoleCodes.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_connect__WEBPACK_IMPORTED_MODULE_1__]);\nnext_connect__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\n\n\n\nconst config = {\n    api: {\n        bodyParser: false\n    }\n};\nconst Handler = (0,next_connect__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n(0,_config_mongodbconnect__WEBPACK_IMPORTED_MODULE_3__.connectDB)();\nlet datanow = Date.now();\nlet storage = multer__WEBPACK_IMPORTED_MODULE_0___default().diskStorage({\n    destination: (req, file, cb)=>{\n        cb(null, path__WEBPACK_IMPORTED_MODULE_2___default().join(process.cwd(), \"public\"));\n    },\n    filename: (req, file, cb)=>{\n        cb(null, datanow + file.originalname);\n    }\n});\nlet upload = multer__WEBPACK_IMPORTED_MODULE_0___default()({\n    storage: storage\n});\nlet fileupload = upload.single(\"file\");\nHandler.use(fileupload);\nHandler.post(async (req, res)=>{\n    if (req.method === \"POST\") {\n        if (!req?.body?._id) {\n            return res.status(400).json({\n                \"messsage\": \"An ID is required ... \"\n            });\n        }\n        const category = await _models_CategoryModel__WEBPACK_IMPORTED_MODULE_4__[\"default\"].findOne({\n            _id: req.body._id\n        });\n        const itemimage = category.imagename;\n        const itemimagerepeat = await _models_CategoryModel__WEBPACK_IMPORTED_MODULE_4__[\"default\"].find({\n            imagename: itemimage\n        });\n        // if error in no Category \n        if (!category) {\n            return res.status(200).json({\n                \"message\": `Category with id: ${req.body._id} does not exist`\n            });\n        }\n        // await fsPromises.unlinkSync(path.join(process.cwd(), 'uploads', 'category', category.imagename))\n        if (itemimagerepeat.length === 1) await fs_promises__WEBPACK_IMPORTED_MODULE_5___default().unlink(path__WEBPACK_IMPORTED_MODULE_2___default().join(process.cwd(), \"public\", \"uploads\", \"category\", category.imagename));\n        const result = await _models_CategoryModel__WEBPACK_IMPORTED_MODULE_4__[\"default\"].deleteOne({\n            _id: req.body._id\n        });\n        return res.json(category);\n    }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_middleware_verifJWT__WEBPACK_IMPORTED_MODULE_6__[\"default\"])((0,_middleware_verifyroles__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(Handler, _models_RoleCodes__WEBPACK_IMPORTED_MODULE_8__[\"default\"].admin, _models_RoleCodes__WEBPACK_IMPORTED_MODULE_8__[\"default\"].editor)));\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcm91dGVzL2NhdGVnb3J5cm91dGUvZGVsZXRlY2F0ZWdvcnkuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDMkI7QUFDVztBQUNmO0FBQ2dDO0FBQ047QUFDYjtBQUNhO0FBQ0s7QUFDUDtBQUV4QyxNQUFNUyxNQUFNLEdBQUc7SUFDbEJDLEdBQUcsRUFBRTtRQUNEQyxVQUFVLEVBQUMsS0FBSztLQUNuQjtDQUNKO0FBRUQsTUFBTUMsT0FBTyxHQUFHWCx3REFBVyxFQUFFO0FBRTdCRSxpRUFBUyxFQUFFO0FBQ1gsSUFBSVUsT0FBTyxHQUFHQyxJQUFJLENBQUNDLEdBQUcsRUFBRTtBQUN4QixJQUFJQyxPQUFPLEdBQUdoQix5REFBa0IsQ0FBQztJQUM3QmtCLFdBQVcsRUFBRSxDQUFDQyxHQUFHLEVBQUVDLElBQUksRUFBRUMsRUFBRSxHQUFLO1FBQzVCQSxFQUFFLENBQUMsSUFBSSxFQUFHbkIsZ0RBQVMsQ0FBQ3FCLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUVEQyxRQUFRLEVBQUUsQ0FBQ04sR0FBRyxFQUFFQyxJQUFJLEVBQUVDLEVBQUUsR0FBSztRQUN6QkEsRUFBRSxDQUFDLElBQUksRUFBR1IsT0FBTyxHQUFHTyxJQUFJLENBQUNNLFlBQVksQ0FBRTtJQUMzQyxDQUFDO0NBQ0osQ0FBQztBQUVGLElBQUlDLE1BQU0sR0FBRzNCLDZDQUFNLENBQUM7SUFDaEJnQixPQUFPLEVBQUVBLE9BQU87Q0FDbkIsQ0FBQztBQUVGLElBQUlZLFVBQVUsR0FBR0QsTUFBTSxDQUFDRSxNQUFNLENBQUMsTUFBTSxDQUFDO0FBRXRDakIsT0FBTyxDQUFDa0IsR0FBRyxDQUNQRixVQUFVLENBQ2I7QUFFRGhCLE9BQU8sQ0FBQ21CLElBQUksQ0FBQyxPQUFNWixHQUFHLEVBQUVhLEdBQUcsR0FBSztJQUN4QixJQUFJYixHQUFHLENBQUNjLE1BQU0sS0FBSyxNQUFNLEVBQUU7UUFDM0IsSUFBRyxDQUFDZCxHQUFHLEVBQUVlLElBQUksRUFBRUMsR0FBRyxFQUFDO1lBQ2YsT0FBT0gsR0FBRyxDQUFDSSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztnQkFBQyxVQUFVLEVBQUcsd0JBQXdCO2FBQUMsQ0FBQztRQUN4RSxDQUFDO1FBRUQsTUFBTUMsUUFBUSxHQUFHLE1BQU1sQyxxRUFBZ0IsQ0FBQztZQUFDK0IsR0FBRyxFQUFFaEIsR0FBRyxDQUFDZSxJQUFJLENBQUNDLEdBQUc7U0FBQyxDQUFDO1FBQzVELE1BQU1LLFNBQVMsR0FBR0YsUUFBUSxDQUFDRyxTQUFTO1FBQ3BDLE1BQU1DLGVBQWUsR0FBRyxNQUFNdEMsa0VBQWEsQ0FBQztZQUFFcUMsU0FBUyxFQUFFRCxTQUFTO1NBQUUsQ0FBQztRQUVyRSwyQkFBMkI7UUFDM0IsSUFBRyxDQUFDRixRQUFRLEVBQUM7WUFDVixPQUFPTixHQUFHLENBQUNJLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO2dCQUFDLFNBQVMsRUFBRSxDQUFDLGtCQUFrQixFQUFFbEIsR0FBRyxDQUFDZSxJQUFJLENBQUNDLEdBQUcsQ0FBQyxlQUFlLENBQUM7YUFBQyxDQUFDO1FBQzNGLENBQUM7UUFFRCxtR0FBbUc7UUFDbkcsSUFBR08sZUFBZSxDQUFDRSxNQUFNLEtBQUssQ0FBQyxFQUFHLE1BQU12Qyx5REFBaUIsQ0FBQ0gsZ0RBQVMsQ0FBQ3FCLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFLEVBQUUsUUFBUSxFQUFDLFNBQVMsRUFBQyxVQUFVLEVBQUVjLFFBQVEsQ0FBQ0csU0FBUyxDQUFDLENBQUM7UUFDdEksTUFBTUssTUFBTSxHQUFHLE1BQU0xQyx1RUFBa0IsQ0FBQztZQUFFK0IsR0FBRyxFQUFFaEIsR0FBRyxDQUFDZSxJQUFJLENBQUNDLEdBQUc7U0FBRSxDQUFDO1FBRW5FLE9BQU9ILEdBQUcsQ0FBQ0ssSUFBSSxDQUFDQyxRQUFRLENBQUM7SUFDNUIsQ0FBQztBQUVMLENBQUMsQ0FBQztBQUdGLGlFQUFnQmhDLGdFQUFTLENBQUNDLG1FQUFXLENBQUNLLE9BQU8sRUFBRUosK0RBQWdCLEVBQUVBLGdFQUFpQixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9xdWVlbi1uZXh0Ly4vcGFnZXMvYXBpL3JvdXRlcy9jYXRlZ29yeXJvdXRlL2RlbGV0ZWNhdGVnb3J5LmpzPzBlYzciXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCBtdWx0ZXIgZnJvbSAnbXVsdGVyJ1xyXG5pbXBvcnQgbmV4dENvbm5lY3QgZnJvbSAnbmV4dC1jb25uZWN0J1xyXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJyBcclxuaW1wb3J0IHsgY29ubmVjdERCIH0gZnJvbSAnLi4vLi4vY29uZmlnL21vbmdvZGJjb25uZWN0J1xyXG5pbXBvcnQgQ2F0ZWdvcnkgZnJvbSAnLi4vLi4vbW9kZWxzL0NhdGVnb3J5TW9kZWwnXHJcbmltcG9ydCBmc1Byb21pc2VzIGZyb20gJ2ZzL3Byb21pc2VzJ1xyXG5pbXBvcnQgdmVyaWZ5SldUIGZyb20gXCIuLi8uLi9taWRkbGV3YXJlL3ZlcmlmSldUXCJcclxuaW1wb3J0IHZlcmlmeVJvbGVzIGZyb20gXCIuLi8uLi9taWRkbGV3YXJlL3ZlcmlmeXJvbGVzXCJcclxuaW1wb3J0IFVzZXJfUm9sZXMgZnJvbSBcIi4uLy4uL21vZGVscy9Sb2xlQ29kZXNcIlxyXG5cclxuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IHtcclxuICAgIGFwaToge1xyXG4gICAgICAgIGJvZHlQYXJzZXI6ZmFsc2UgXHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IEhhbmRsZXIgPSBuZXh0Q29ubmVjdCgpIFxyXG5cclxuY29ubmVjdERCKCkgXHJcbmxldCBkYXRhbm93ID0gRGF0ZS5ub3coKVxyXG5sZXQgc3RvcmFnZSA9IG11bHRlci5kaXNrU3RvcmFnZSh7XHJcbiAgICBkZXN0aW5hdGlvbjogKHJlcSwgZmlsZSwgY2IpID0+IHtcclxuICAgICAgICBjYihudWxsICwgcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksIFwicHVibGljXCIpKSBcclxuICAgIH1cclxuICAgICwgXHJcbiAgICBmaWxlbmFtZTogKHJlcSwgZmlsZSwgY2IpID0+IHtcclxuICAgICAgICBjYihudWxsICwgZGF0YW5vdyArIGZpbGUub3JpZ2luYWxuYW1lIClcclxuICAgIH1cclxufSlcclxuXHJcbmxldCB1cGxvYWQgPSBtdWx0ZXIoe1xyXG4gICAgc3RvcmFnZTogc3RvcmFnZVxyXG59KVxyXG5cclxubGV0IGZpbGV1cGxvYWQgPSB1cGxvYWQuc2luZ2xlKCdmaWxlJylcclxuXHJcbkhhbmRsZXIudXNlKFxyXG4gICAgZmlsZXVwbG9hZFxyXG4pXHJcblxyXG5IYW5kbGVyLnBvc3QoYXN5bmMocmVxLCByZXMpID0+IHtcclxuICAgICAgICBpZiAocmVxLm1ldGhvZCA9PT0gXCJQT1NUXCIpIHtcclxuICAgICAgICBpZighcmVxPy5ib2R5Py5faWQpe1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oeydtZXNzc2FnZScgOiAnQW4gSUQgaXMgcmVxdWlyZWQgLi4uICd9KVxyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIGNvbnN0IGNhdGVnb3J5ID0gYXdhaXQgQ2F0ZWdvcnkuZmluZE9uZSh7X2lkIDpyZXEuYm9keS5faWR9KVxyXG4gICAgICAgIGNvbnN0IGl0ZW1pbWFnZSA9IGNhdGVnb3J5LmltYWdlbmFtZVxyXG4gICAgICAgIGNvbnN0IGl0ZW1pbWFnZXJlcGVhdCA9IGF3YWl0IENhdGVnb3J5LmZpbmQoeyBpbWFnZW5hbWU6IGl0ZW1pbWFnZSB9KVxyXG4gICAgXHJcbiAgICAgICAgLy8gaWYgZXJyb3IgaW4gbm8gQ2F0ZWdvcnkgXHJcbiAgICAgICAgaWYoIWNhdGVnb3J5KXtcclxuICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oeydtZXNzYWdlJzogYENhdGVnb3J5IHdpdGggaWQ6ICR7cmVxLmJvZHkuX2lkfSBkb2VzIG5vdCBleGlzdGB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBhd2FpdCBmc1Byb21pc2VzLnVubGlua1N5bmMocGF0aC5qb2luKHByb2Nlc3MuY3dkKCksICd1cGxvYWRzJywgJ2NhdGVnb3J5JywgY2F0ZWdvcnkuaW1hZ2VuYW1lKSlcclxuICAgICAgICAgICAgaWYoaXRlbWltYWdlcmVwZWF0Lmxlbmd0aCA9PT0gMSkgIGF3YWl0IGZzUHJvbWlzZXMudW5saW5rKHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAncHVibGljJywndXBsb2FkcycsJ2NhdGVnb3J5JywgY2F0ZWdvcnkuaW1hZ2VuYW1lKSlcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgQ2F0ZWdvcnkuZGVsZXRlT25lKHsgX2lkOiByZXEuYm9keS5faWQgfSlcclxuICAgICAgICAgIFxyXG4gICAgICAgcmV0dXJuIHJlcy5qc29uKGNhdGVnb3J5KVxyXG4gICAgfVxyXG4gICAgXHJcbn0pXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgIHZlcmlmeUpXVCh2ZXJpZnlSb2xlcyhIYW5kbGVyLCBVc2VyX1JvbGVzLmFkbWluLCBVc2VyX1JvbGVzLmVkaXRvcikpXHJcbiJdLCJuYW1lcyI6WyJtdWx0ZXIiLCJuZXh0Q29ubmVjdCIsInBhdGgiLCJjb25uZWN0REIiLCJDYXRlZ29yeSIsImZzUHJvbWlzZXMiLCJ2ZXJpZnlKV1QiLCJ2ZXJpZnlSb2xlcyIsIlVzZXJfUm9sZXMiLCJjb25maWciLCJhcGkiLCJib2R5UGFyc2VyIiwiSGFuZGxlciIsImRhdGFub3ciLCJEYXRlIiwibm93Iiwic3RvcmFnZSIsImRpc2tTdG9yYWdlIiwiZGVzdGluYXRpb24iLCJyZXEiLCJmaWxlIiwiY2IiLCJqb2luIiwicHJvY2VzcyIsImN3ZCIsImZpbGVuYW1lIiwib3JpZ2luYWxuYW1lIiwidXBsb2FkIiwiZmlsZXVwbG9hZCIsInNpbmdsZSIsInVzZSIsInBvc3QiLCJyZXMiLCJtZXRob2QiLCJib2R5IiwiX2lkIiwic3RhdHVzIiwianNvbiIsImNhdGVnb3J5IiwiZmluZE9uZSIsIml0ZW1pbWFnZSIsImltYWdlbmFtZSIsIml0ZW1pbWFnZXJlcGVhdCIsImZpbmQiLCJsZW5ndGgiLCJ1bmxpbmsiLCJyZXN1bHQiLCJkZWxldGVPbmUiLCJhZG1pbiIsImVkaXRvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/routes/categoryroute/deletecategory.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/routes/categoryroute/deletecategory.js"));
module.exports = __webpack_exports__;

})();