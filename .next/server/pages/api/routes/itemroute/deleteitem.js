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
exports.id = "pages/api/routes/itemroute/deleteitem";
exports.ids = ["pages/api/routes/itemroute/deleteitem"];
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

/***/ "(api)/./pages/api/models/Item.js":
/*!**********************************!*\
  !*** ./pages/api/models/Item.js ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nconst mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst { model , models , Schema  } = mongoose;\nconst itemsShema = new Schema({\n    name: {\n        type: String,\n        required: true\n    },\n    price: {\n        type: Number,\n        required: true\n    },\n    imageurl: {\n        type: String\n    },\n    imagename: String\n});\nconst Item = models.Item || model(\"Item\", itemsShema);\nmodule.exports = Item;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbW9kZWxzL0l0ZW0uanMuanMiLCJtYXBwaW5ncyI6IkFBQ0E7QUFBQSxNQUFNQSxRQUFRLEdBQUdDLG1CQUFPLENBQUMsMEJBQVUsQ0FBQztBQUdwQyxNQUFNLEVBQUVDLEtBQUssR0FBQ0MsTUFBTSxHQUFFQyxNQUFNLEdBQUUsR0FBR0osUUFBUTtBQUd6QyxNQUFNSyxVQUFVLEdBQUcsSUFBSUQsTUFBTSxDQUFDO0lBQzFCRSxJQUFJLEVBQUU7UUFDRkMsSUFBSSxFQUFFQyxNQUFNO1FBQ1pDLFFBQVEsRUFBSSxJQUFJO0tBQ25CO0lBQ0RDLEtBQUssRUFBRTtRQUNISCxJQUFJLEVBQUVJLE1BQU07UUFDWkYsUUFBUSxFQUFHLElBQUk7S0FDbEI7SUFDREcsUUFBUSxFQUFFO1FBQ05MLElBQUksRUFBRUMsTUFBTTtLQUVmO0lBQ0RLLFNBQVMsRUFBRUwsTUFBTTtDQUNwQixDQUFDO0FBRUYsTUFBTU0sSUFBSSxHQUFHWCxNQUFNLENBQUNXLElBQUksSUFBS1osS0FBSyxDQUFDLE1BQU0sRUFBRUcsVUFBVSxDQUFDO0FBRXREVSxNQUFNLENBQUNDLE9BQU8sR0FBR0YsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL3F1ZWVuLW5leHQvLi9wYWdlcy9hcGkvbW9kZWxzL0l0ZW0uanM/NTQwMSJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY29uc3QgbW9uZ29vc2UgPSByZXF1aXJlKFwibW9uZ29vc2VcIik7XHJcbiBcclxuXHJcbmNvbnN0IHsgbW9kZWwsbW9kZWxzLCBTY2hlbWEgfSA9IG1vbmdvb3NlIFxyXG5cclxuXHJcbmNvbnN0IGl0ZW1zU2hlbWEgPSBuZXcgU2NoZW1hKHtcclxuICAgIG5hbWU6IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmcsIFxyXG4gICAgICAgIHJlcXVpcmVkIDogIHRydWUgXHJcbiAgICB9LCBcclxuICAgIHByaWNlOiB7XHJcbiAgICAgICAgdHlwZTogTnVtYmVyLCBcclxuICAgICAgICByZXF1aXJlZCA6IHRydWUgXHJcbiAgICB9LCBcclxuICAgIGltYWdldXJsOiB7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLCBcclxuICAgICAgICAvLyByZXF1aXJlZCA6IHRydWVcclxuICAgIH0sXHJcbiAgICBpbWFnZW5hbWU6IFN0cmluZyxcclxufSlcclxuXHJcbmNvbnN0IEl0ZW0gPSBtb2RlbHMuSXRlbSB8fCAgbW9kZWwoJ0l0ZW0nLCBpdGVtc1NoZW1hKVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBJdGVtXHJcblxyXG5cclxuXHJcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsInJlcXVpcmUiLCJtb2RlbCIsIm1vZGVscyIsIlNjaGVtYSIsIml0ZW1zU2hlbWEiLCJuYW1lIiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwicHJpY2UiLCJOdW1iZXIiLCJpbWFnZXVybCIsImltYWdlbmFtZSIsIkl0ZW0iLCJtb2R1bGUiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/models/Item.js\n");

/***/ }),

/***/ "(api)/./pages/api/models/RoleCodes.js":
/*!***************************************!*\
  !*** ./pages/api/models/RoleCodes.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst User_Roles = {\n    user: 2934,\n    admin: 5543,\n    editor: 6000\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User_Roles);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbW9kZWxzL1JvbGVDb2Rlcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTUEsVUFBVSxHQUFHO0lBQ2ZDLElBQUksRUFBRSxJQUFJO0lBQ1ZDLEtBQUssRUFBRSxJQUFJO0lBQ1hDLE1BQU0sRUFBRSxJQUFJO0NBQ2Y7QUFFRCxpRUFBZUgsVUFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL3F1ZWVuLW5leHQvLi9wYWdlcy9hcGkvbW9kZWxzL1JvbGVDb2Rlcy5qcz9hMGIwIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFVzZXJfUm9sZXMgPSB7XHJcbiAgICB1c2VyOiAyOTM0LCBcclxuICAgIGFkbWluOiA1NTQzLCBcclxuICAgIGVkaXRvcjogNjAwMFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VyX1JvbGVzXHJcblxyXG5cclxuXHJcblxyXG4iXSwibmFtZXMiOlsiVXNlcl9Sb2xlcyIsInVzZXIiLCJhZG1pbiIsImVkaXRvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/models/RoleCodes.js\n");

/***/ }),

/***/ "(api)/./pages/api/routes/itemroute/deleteitem.js":
/*!**************************************************!*\
  !*** ./pages/api/routes/itemroute/deleteitem.js ***!
  \**************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"config\": () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var multer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! multer */ \"multer\");\n/* harmony import */ var multer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(multer__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-connect */ \"next-connect\");\n/* harmony import */ var _config_mongodbconnect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/mongodbconnect */ \"(api)/./pages/api/config/mongodbconnect.js\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _models_Item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/Item */ \"(api)/./pages/api/models/Item.js\");\n/* harmony import */ var _models_Item__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_models_Item__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _middleware_verifJWT__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../middleware/verifJWT */ \"(api)/./pages/api/middleware/verifJWT.js\");\n/* harmony import */ var _middleware_verifyroles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../middleware/verifyroles */ \"(api)/./pages/api/middleware/verifyroles.js\");\n/* harmony import */ var _models_RoleCodes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../models/RoleCodes */ \"(api)/./pages/api/models/RoleCodes.js\");\n/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! fs/promises */ \"fs/promises\");\n/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(fs_promises__WEBPACK_IMPORTED_MODULE_8__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_connect__WEBPACK_IMPORTED_MODULE_1__]);\nnext_connect__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\n\n\n// const fsPromises = require('fs').promises\n\nconst config = {\n    api: {\n        bodyParser: false\n    }\n};\nconst Handler = (0,next_connect__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n(0,_config_mongodbconnect__WEBPACK_IMPORTED_MODULE_2__.connectDB)();\nlet dataimage = Date.now();\nlet storage = multer__WEBPACK_IMPORTED_MODULE_0___default().diskStorage({\n    destination: (req, file, cb)=>{\n        cb(null, path__WEBPACK_IMPORTED_MODULE_3___default().join(process.cwd(), \"public\"));\n    },\n    filename: (req, file, cb)=>{\n        cb(null, dataimage + file.originalname);\n    }\n});\nlet upload = multer__WEBPACK_IMPORTED_MODULE_0___default()({\n    storage: storage\n});\nlet uploadfile = upload.single(\"file\");\nHandler.use(uploadfile);\nHandler.post(async (req, res)=>{\n    if (req.method === \"POST\") {\n        if (!req?.body?._id) {\n            return res.status(400).json({\n                \"messsage\": \"An ID is required ... \"\n            });\n        }\n        const item = await _models_Item__WEBPACK_IMPORTED_MODULE_4___default().findOne({\n            _id: req.body._id\n        });\n        const itemimage = item.imagename;\n        const itemimagerepeat = await _models_Item__WEBPACK_IMPORTED_MODULE_4___default().find({\n            imagename: itemimage\n        });\n        // if error in no Item\n        if (!item) {\n            res.status(204).json({\n                \"message\": `Item with id: ${req.body._id} does not exist`\n            });\n        }\n        console.log(item.imagename);\n        if (itemimagerepeat.length === 1) await fs_promises__WEBPACK_IMPORTED_MODULE_8___default().unlink(path__WEBPACK_IMPORTED_MODULE_3___default().join(process.cwd(), \"public\", \"uploads\", \"Items\", item.imagename));\n        const result = await _models_Item__WEBPACK_IMPORTED_MODULE_4___default().deleteOne({\n            _id: req.body._id\n        });\n        const listitems = await _models_Item__WEBPACK_IMPORTED_MODULE_4___default().find();\n        return res.json(listitems);\n    }\n});\n// export default Handler\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_middleware_verifJWT__WEBPACK_IMPORTED_MODULE_5__[\"default\"])((0,_middleware_verifyroles__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Handler, _models_RoleCodes__WEBPACK_IMPORTED_MODULE_7__[\"default\"].admin, _models_RoleCodes__WEBPACK_IMPORTED_MODULE_7__[\"default\"].editor)));\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcm91dGVzL2l0ZW1yb3V0ZS9kZWxldGVpdGVtLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEyQjtBQUNXO0FBQ2lCO0FBQ2hDO0FBQ2E7QUFFYTtBQUNLO0FBQ1A7QUFJL0MsNENBQTRDO0FBRVI7QUFHN0IsTUFBTVMsTUFBTSxHQUFHO0lBQ2xCQyxHQUFHLEVBQUM7UUFDQUMsVUFBVSxFQUFDLEtBQUs7S0FDbkI7Q0FDSjtBQUVELE1BQU1DLE9BQU8sR0FBR1gsd0RBQVcsRUFBRTtBQUU3QkMsaUVBQVMsRUFBRTtBQUVYLElBQUlXLFNBQVMsR0FBR0MsSUFBSSxDQUFDQyxHQUFHLEVBQUU7QUFDMUIsSUFBSUMsT0FBTyxHQUFHaEIseURBQWtCLENBQUM7SUFDN0JrQixXQUFXLEVBQUksQ0FBQ0MsR0FBRyxFQUFFQyxJQUFJLEVBQUVDLEVBQUUsR0FBSztRQUM5QkEsRUFBRSxDQUFDLElBQUksRUFBR2xCLGdEQUFTLENBQUNvQixPQUFPLENBQUNDLEdBQUcsRUFBRSxFQUFHLFFBQVEsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFDREMsUUFBUSxFQUFFLENBQUNOLEdBQUcsRUFBRUMsSUFBSSxFQUFHQyxFQUFFLEdBQU07UUFDM0JBLEVBQUUsQ0FBQyxJQUFJLEVBQUdSLFNBQVMsR0FBR08sSUFBSSxDQUFDTSxZQUFZLENBQUM7SUFDNUMsQ0FBQztDQUNKLENBQUM7QUFFRixJQUFJQyxNQUFNLEdBQUczQiw2Q0FBTSxDQUFDO0lBQ2hCZ0IsT0FBTyxFQUFFQSxPQUFPO0NBQ25CLENBQUM7QUFFRixJQUFJWSxVQUFVLEdBQUdELE1BQU0sQ0FBQ0UsTUFBTSxDQUFDLE1BQU0sQ0FBQztBQUd0Q2pCLE9BQU8sQ0FBQ2tCLEdBQUcsQ0FBQ0YsVUFBVSxDQUFDO0FBRXZCaEIsT0FBTyxDQUFDbUIsSUFBSSxDQUFFLE9BQU9aLEdBQUcsRUFBRWEsR0FBRyxHQUFLO0lBQzlCLElBQUdiLEdBQUcsQ0FBQ2MsTUFBTSxLQUFLLE1BQU0sRUFBQztRQUN0QixJQUFJLENBQUNkLEdBQUcsRUFBRWUsSUFBSSxFQUFFQyxHQUFHLEVBQUU7WUFDaEIsT0FBT0gsR0FBRyxDQUFDSSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztnQkFBRSxVQUFVLEVBQUUsd0JBQXdCO2FBQUUsQ0FBQztRQUN6RSxDQUFDO1FBRUQsTUFBTUMsSUFBSSxHQUFHLE1BQU1sQywyREFBWSxDQUFDO1lBQUUrQixHQUFHLEVBQUVoQixHQUFHLENBQUNlLElBQUksQ0FBQ0MsR0FBRztTQUFFLENBQUM7UUFDdEQsTUFBTUssU0FBUyxHQUFHRixJQUFJLENBQUNHLFNBQVM7UUFFaEMsTUFBTUMsZUFBZSxHQUFHLE1BQU10Qyx3REFBUyxDQUFDO1lBQUVxQyxTQUFTLEVBQUVELFNBQVM7U0FBRSxDQUFDO1FBRWpFLHNCQUFzQjtRQUN0QixJQUFJLENBQUNGLElBQUksRUFBRTtZQUNQTixHQUFHLENBQUNJLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO2dCQUFFLFNBQVMsRUFBRSxDQUFDLGNBQWMsRUFBRWxCLEdBQUcsQ0FBQ2UsSUFBSSxDQUFDQyxHQUFHLENBQUMsZUFBZSxDQUFDO2FBQUUsQ0FBQztRQUN2RixDQUFDO1FBQ0RTLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDUCxJQUFJLENBQUNHLFNBQVMsQ0FBQztRQUMzQixJQUFHQyxlQUFlLENBQUNJLE1BQU0sS0FBSyxDQUFDLEVBQUUsTUFBTXRDLHlEQUFpQixDQUFDTCxnREFBUyxDQUFDb0IsT0FBTyxDQUFDQyxHQUFHLEVBQUUsRUFBRSxRQUFRLEVBQUMsU0FBUyxFQUFDLE9BQU8sRUFBRWMsSUFBSSxDQUFDRyxTQUFTLENBQUMsQ0FBQztRQUM5SCxNQUFNTyxNQUFNLEdBQUcsTUFBTTVDLDZEQUFjLENBQUM7WUFBRStCLEdBQUcsRUFBRWhCLEdBQUcsQ0FBQ2UsSUFBSSxDQUFDQyxHQUFHO1NBQUUsQ0FBQztRQUMxRCxNQUFNZSxTQUFTLEdBQUcsTUFBTTlDLHdEQUFTLEVBQUU7UUFFbkMsT0FBTzRCLEdBQUcsQ0FBQ0ssSUFBSSxDQUFDYSxTQUFTLENBQUM7SUFHOUIsQ0FBQztBQUNMLENBQUMsQ0FBQztBQUVGLHlCQUF5QjtBQUV6QixpRUFBZ0I3QyxnRUFBUyxDQUFDQyxtRUFBVyxDQUFDTSxPQUFPLEVBQUVMLCtEQUFnQixFQUFFQSxnRUFBaUIsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcXVlZW4tbmV4dC8uL3BhZ2VzL2FwaS9yb3V0ZXMvaXRlbXJvdXRlL2RlbGV0ZWl0ZW0uanM/MzIzMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbXVsdGVyIGZyb20gXCJtdWx0ZXJcIlxyXG5pbXBvcnQgbmV4dENvbm5lY3QgZnJvbSBcIm5leHQtY29ubmVjdFwiXHJcbmltcG9ydCB7IGNvbm5lY3REQiB9IGZyb20gXCIuLi8uLi9jb25maWcvbW9uZ29kYmNvbm5lY3RcIlxyXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xyXG5pbXBvcnQgSXRlbSBmcm9tIFwiLi4vLi4vbW9kZWxzL0l0ZW1cIlxyXG5cclxuaW1wb3J0IHZlcmlmeUpXVCBmcm9tIFwiLi4vLi4vbWlkZGxld2FyZS92ZXJpZkpXVFwiXHJcbmltcG9ydCB2ZXJpZnlSb2xlcyBmcm9tIFwiLi4vLi4vbWlkZGxld2FyZS92ZXJpZnlyb2xlc1wiXHJcbmltcG9ydCBVc2VyX1JvbGVzIGZyb20gXCIuLi8uLi9tb2RlbHMvUm9sZUNvZGVzXCJcclxuXHJcblxyXG5cclxuLy8gY29uc3QgZnNQcm9taXNlcyA9IHJlcXVpcmUoJ2ZzJykucHJvbWlzZXNcclxuXHJcbmltcG9ydCBmc1Byb21pc2VzIGZyb20gJ2ZzL3Byb21pc2VzJ1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBjb25maWcgPSB7XHJcbiAgICBhcGk6e1xyXG4gICAgICAgIGJvZHlQYXJzZXI6ZmFsc2UgLFxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBIYW5kbGVyID0gbmV4dENvbm5lY3QoKSBcclxuXHJcbmNvbm5lY3REQigpXHJcblxyXG5sZXQgZGF0YWltYWdlID0gRGF0ZS5ub3coKVxyXG5sZXQgc3RvcmFnZSA9IG11bHRlci5kaXNrU3RvcmFnZSh7XHJcbiAgICBkZXN0aW5hdGlvbiA6ICAocmVxLCBmaWxlLCBjYikgPT4ge1xyXG4gICAgICAgIGNiKG51bGwgLCBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSAsIFwicHVibGljXCIpKVxyXG4gICAgfSxcclxuICAgIGZpbGVuYW1lOiAocmVxLCBmaWxlICwgY2IgKSA9PiB7XHJcbiAgICAgICAgY2IobnVsbCAsIGRhdGFpbWFnZSArIGZpbGUub3JpZ2luYWxuYW1lKVxyXG4gICAgfVxyXG59KVxyXG5cclxubGV0IHVwbG9hZCA9IG11bHRlcih7XHJcbiAgICBzdG9yYWdlOiBzdG9yYWdlXHJcbn0pXHJcblxyXG5sZXQgdXBsb2FkZmlsZSA9IHVwbG9hZC5zaW5nbGUoJ2ZpbGUnKVxyXG5cclxuXHJcbkhhbmRsZXIudXNlKHVwbG9hZGZpbGUpXHJcblxyXG5IYW5kbGVyLnBvc3QoIGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gICAgaWYocmVxLm1ldGhvZCA9PT0gXCJQT1NUXCIpe1xyXG4gICAgICAgaWYgKCFyZXE/LmJvZHk/Ll9pZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oeyAnbWVzc3NhZ2UnOiAnQW4gSUQgaXMgcmVxdWlyZWQgLi4uICcgfSlcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICBjb25zdCBpdGVtID0gYXdhaXQgSXRlbS5maW5kT25lKHsgX2lkOiByZXEuYm9keS5faWQgfSlcclxuICAgICAgICBjb25zdCBpdGVtaW1hZ2UgPSBpdGVtLmltYWdlbmFtZVxyXG5cclxuICAgICAgICBjb25zdCBpdGVtaW1hZ2VyZXBlYXQgPSBhd2FpdCBJdGVtLmZpbmQoeyBpbWFnZW5hbWU6IGl0ZW1pbWFnZSB9KVxyXG4gICAgXHJcbiAgICAgICAgLy8gaWYgZXJyb3IgaW4gbm8gSXRlbVxyXG4gICAgICAgIGlmICghaXRlbSkge1xyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwNCkuanNvbih7ICdtZXNzYWdlJzogYEl0ZW0gd2l0aCBpZDogJHtyZXEuYm9keS5faWR9IGRvZXMgbm90IGV4aXN0YCB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyhpdGVtLmltYWdlbmFtZSlcclxuICAgICAgICBpZihpdGVtaW1hZ2VyZXBlYXQubGVuZ3RoID09PSAxKSBhd2FpdCBmc1Byb21pc2VzLnVubGluayhwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgJ3B1YmxpYycsJ3VwbG9hZHMnLCdJdGVtcycsIGl0ZW0uaW1hZ2VuYW1lKSlcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBJdGVtLmRlbGV0ZU9uZSh7IF9pZDogcmVxLmJvZHkuX2lkIH0pXHJcbiAgICAgICAgY29uc3QgbGlzdGl0ZW1zID0gYXdhaXQgSXRlbS5maW5kKCkgXHJcbiAgICBcclxuICAgICAgICByZXR1cm4gcmVzLmpzb24obGlzdGl0ZW1zKSAgICBcclxuXHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn0pXHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCBIYW5kbGVyXHJcblxyXG5leHBvcnQgZGVmYXVsdCAgdmVyaWZ5SldUKHZlcmlmeVJvbGVzKEhhbmRsZXIsIFVzZXJfUm9sZXMuYWRtaW4sIFVzZXJfUm9sZXMuZWRpdG9yKSlcclxuIl0sIm5hbWVzIjpbIm11bHRlciIsIm5leHRDb25uZWN0IiwiY29ubmVjdERCIiwicGF0aCIsIkl0ZW0iLCJ2ZXJpZnlKV1QiLCJ2ZXJpZnlSb2xlcyIsIlVzZXJfUm9sZXMiLCJmc1Byb21pc2VzIiwiY29uZmlnIiwiYXBpIiwiYm9keVBhcnNlciIsIkhhbmRsZXIiLCJkYXRhaW1hZ2UiLCJEYXRlIiwibm93Iiwic3RvcmFnZSIsImRpc2tTdG9yYWdlIiwiZGVzdGluYXRpb24iLCJyZXEiLCJmaWxlIiwiY2IiLCJqb2luIiwicHJvY2VzcyIsImN3ZCIsImZpbGVuYW1lIiwib3JpZ2luYWxuYW1lIiwidXBsb2FkIiwidXBsb2FkZmlsZSIsInNpbmdsZSIsInVzZSIsInBvc3QiLCJyZXMiLCJtZXRob2QiLCJib2R5IiwiX2lkIiwic3RhdHVzIiwianNvbiIsIml0ZW0iLCJmaW5kT25lIiwiaXRlbWltYWdlIiwiaW1hZ2VuYW1lIiwiaXRlbWltYWdlcmVwZWF0IiwiZmluZCIsImNvbnNvbGUiLCJsb2ciLCJsZW5ndGgiLCJ1bmxpbmsiLCJyZXN1bHQiLCJkZWxldGVPbmUiLCJsaXN0aXRlbXMiLCJhZG1pbiIsImVkaXRvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/routes/itemroute/deleteitem.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/routes/itemroute/deleteitem.js"));
module.exports = __webpack_exports__;

})();