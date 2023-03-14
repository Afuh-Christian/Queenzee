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
exports.id = "pages/api/routes/categoryroute/category";
exports.ids = ["pages/api/routes/categoryroute/category"];
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

/***/ "(api)/./pages/api/routes/categoryroute/category.js":
/*!****************************************************!*\
  !*** ./pages/api/routes/categoryroute/category.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config_mongodbconnect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config/mongodbconnect */ \"(api)/./pages/api/config/mongodbconnect.js\");\n/* harmony import */ var _middleware_verifJWT__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../middleware/verifJWT */ \"(api)/./pages/api/middleware/verifJWT.js\");\n/* harmony import */ var _models_CategoryModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/CategoryModel */ \"(api)/./pages/api/models/CategoryModel.js\");\n/* harmony import */ var _models_RoleCodes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/RoleCodes */ \"(api)/./pages/api/models/RoleCodes.js\");\n\n\n\n\n\n// httpGet ... \nasync function Handler(req, res) {\n    await (0,_config_mongodbconnect__WEBPACK_IMPORTED_MODULE_1__.connectDB)();\n    // ..........httpGET\n    if (req.method === \"GET\") {\n        const categorys = await _models_CategoryModel__WEBPACK_IMPORTED_MODULE_3__[\"default\"].find() // to get Categorys ...\n        ;\n        if (!categorys) return res.status(204).json({\n            \"message\": \"No Categorys found ..\"\n        });\n        return res.status(200).json(categorys);\n    }\n// await mongoose.disconnect()\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcm91dGVzL2NhdGVnb3J5cm91dGUvY2F0ZWdvcnkuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUMrQjtBQUN3QjtBQUNOO0FBQ0E7QUFDRjtBQUcvQyxlQUFlO0FBQ2YsZUFBZUssT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM3QixNQUFNTixpRUFBUyxFQUFFO0lBRWpCLG9CQUFvQjtJQUNwQixJQUFJSyxHQUFHLENBQUNFLE1BQU0sS0FBSyxLQUFLLEVBQUU7UUFFdEIsTUFBTUMsU0FBUyxHQUFHLE1BQU9OLGtFQUFhLEVBQUUsQ0FBSSx1QkFBdUI7UUFBM0I7UUFDeEMsSUFBSSxDQUFDTSxTQUFTLEVBQUUsT0FBT0YsR0FBRyxDQUFDSSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUFFLFNBQVMsRUFBRSx1QkFBdUI7U0FBRSxDQUFDO1FBRXJGLE9BQVFMLEdBQUcsQ0FBQ0ksTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUNILFNBQVMsQ0FBQztJQUN6QyxDQUFDO0FBQ0QsOEJBQThCO0FBRTlCLENBQUM7QUFDRCxpRUFBZUosT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL3F1ZWVuLW5leHQvLi9wYWdlcy9hcGkvcm91dGVzL2NhdGVnb3J5cm91dGUvY2F0ZWdvcnkuanM/OTFhNSJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiXHJcbmltcG9ydCB7IGNvbm5lY3REQiB9IGZyb20gXCIuLi8uLi9jb25maWcvbW9uZ29kYmNvbm5lY3RcIlxyXG5pbXBvcnQgdmVyaWZ5SldUIGZyb20gXCIuLi8uLi9taWRkbGV3YXJlL3ZlcmlmSldUXCJcclxuaW1wb3J0IENhdGVnb3J5IGZyb20gXCIuLi8uLi9tb2RlbHMvQ2F0ZWdvcnlNb2RlbFwiXHJcbmltcG9ydCBVc2VyX1JvbGVzIGZyb20gXCIuLi8uLi9tb2RlbHMvUm9sZUNvZGVzXCJcclxuXHJcblxyXG4vLyBodHRwR2V0IC4uLiBcclxuYXN5bmMgZnVuY3Rpb24gSGFuZGxlcihyZXEsIHJlcykge1xyXG4gICAgYXdhaXQgY29ubmVjdERCKCkgXHJcblxyXG4gICAgLy8gLi4uLi4uLi4uLmh0dHBHRVRcclxuICAgIGlmIChyZXEubWV0aG9kID09PSBcIkdFVFwiKSB7XHJcbiAgICAgICBcclxuICAgICAgICBjb25zdCBjYXRlZ29yeXMgPSBhd2FpdCAgQ2F0ZWdvcnkuZmluZCgpICAgIC8vIHRvIGdldCBDYXRlZ29yeXMgLi4uXHJcbiAgICAgICAgaWYgKCFjYXRlZ29yeXMpIHJldHVybiByZXMuc3RhdHVzKDIwNCkuanNvbih7ICdtZXNzYWdlJzogJ05vIENhdGVnb3J5cyBmb3VuZCAuLicgfSlcclxuICAgICAgICBcclxuICAgICAgcmV0dXJuICByZXMuc3RhdHVzKDIwMCkuanNvbihjYXRlZ29yeXMpXHJcbiAgICB9XHJcbiAgICAvLyBhd2FpdCBtb25nb29zZS5kaXNjb25uZWN0KClcclxuXHJcbiAgICB9IFxyXG4gICAgZXhwb3J0IGRlZmF1bHQgSGFuZGxlclxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgXHJcbiAgICAgICAiXSwibmFtZXMiOlsibW9uZ29vc2UiLCJjb25uZWN0REIiLCJ2ZXJpZnlKV1QiLCJDYXRlZ29yeSIsIlVzZXJfUm9sZXMiLCJIYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwiY2F0ZWdvcnlzIiwiZmluZCIsInN0YXR1cyIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/routes/categoryroute/category.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/routes/categoryroute/category.js"));
module.exports = __webpack_exports__;

})();