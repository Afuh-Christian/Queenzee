(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 2556:
/***/ ((module) => {

// Exports
module.exports = {
	"nav": "Nav_nav__W_QiP",
	"title": "Nav_title__8NOQg",
	"img": "Nav_img__f7GMG",
	"header": "Nav_header__R7SE5",
	"profile": "Nav_profile__io7EO",
	"hamberger_icon": "Nav_hamberger_icon__EnAbQ",
	"slide_menu_hide": "Nav_slide_menu_hide__gMkjx",
	"slide_menu_active": "Nav_slide_menu_active__IUoPi",
	"child": "Nav_child__H3fDH",
	"slide_menu_user_hide": "Nav_slide_menu_user_hide__n_XgI",
	"slide_menu_user": "Nav_slide_menu_user__3dcYh",
	"on_page": "Nav_on_page__zzmBi",
	"navbarlist": "Nav_navbarlist__hBQfO",
	"headerp": "Nav_headerp__6j8V8"
};


/***/ }),

/***/ 8908:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Nav_module_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2556);
/* harmony import */ var _Nav_module_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_Nav_module_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6290);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _items_create_CreateItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5508);
/* harmony import */ var _home_create_CreateCategory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6492);
/* harmony import */ var react_icons_tb__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4152);
/* harmony import */ var react_icons_tb__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_icons_tb__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _dataStore_UserSlice_AuthSlice_AuthSlice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9611);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1017);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_11__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_items_create_CreateItem__WEBPACK_IMPORTED_MODULE_5__, _home_create_CreateCategory__WEBPACK_IMPORTED_MODULE_6__, _dataStore_UserSlice_AuthSlice_AuthSlice__WEBPACK_IMPORTED_MODULE_8__]);
([_items_create_CreateItem__WEBPACK_IMPORTED_MODULE_5__, _home_create_CreateCategory__WEBPACK_IMPORTED_MODULE_6__, _dataStore_UserSlice_AuthSlice_AuthSlice__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














function Navbar({ children  }) {
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_9__.useDispatch)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        dispatch((0,_dataStore_UserSlice_AuthSlice_AuthSlice__WEBPACK_IMPORTED_MODULE_8__/* .RefreshLogin */ .K7)());
    }, [
        dispatch
    ]);
    // Logged in user ... 
    const currentUser = (0,react_redux__WEBPACK_IMPORTED_MODULE_9__.useSelector)(_dataStore_UserSlice_AuthSlice_AuthSlice__WEBPACK_IMPORTED_MODULE_8__/* .currentLoggedinUser */ .Je);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const routeHomepage = ()=>{
        router.push("/");
    // setFormCat(false)
    // setForm(false)
    };
    const routeLoginpage = ()=>{
        if (!currentUser.user) router.push("/Login");
    // setFormCat(false)
    // setForm(false)
    };
    const routeSignUppage = ()=>{
        if (!currentUser.user) router.push("/Register");
    // setFormCat(false)
    // setForm(false)
    };
    const routeUserProfile = ()=>{
        if (currentUser.user) router.push("/UserProfile");
    };
    const Logoutbtn = ()=>{
        // if (!currentUser.user) router.push('/Login')
        dispatch((0,_dataStore_UserSlice_AuthSlice_AuthSlice__WEBPACK_IMPORTED_MODULE_8__/* .LogoutThunk */ .gt)());
    // setFormCat(false)
    // setForm(false)
    };
    const { 0: active , 1: setActive  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const showNavbar = ()=>setActive(!active);
    const { 0: active_u , 1: setActive_u  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const showNavbar_u = ()=>setActive_u(!active_u);
    // create ..... 
    // http post item .... 
    // const OnCreateForm = () => {
    //     setForm(!openform)
    // }
    // http post category .... 
    // const OnCreateFormCat = ()=>{
    //     setFormCat(!openformcat)
    // }
    // console.log(router.pathname.length)
    function GoBack() {
        if (window.localStorage.getItem("CurrentUserSettings")) {
            window.localStorage.removeItem("CurrentUserSettings");
        }
        router.back();
    }
    console.log(router.pathname);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                className: (_Nav_module_css__WEBPACK_IMPORTED_MODULE_12___default().nav),
                style: {
                    "--backgroundColor": "rgb(35, 14, 35)",
                    "--navtextColor": "white",
                    "--Navtexthighlight": "rgb(121,118,118)",
                    "--btnbackgroundColor": "rgb(48,48,52)",
                    "--borderColor": "rgba(56, 11, 56, 1)",
                    "--textFontFamily": "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                    "--textsizeNormal": `${15}px`,
                    "--textsizeAverage": `${20}px`,
                    "--boxShadow": " 7px 7px 10px -6px rgba(9, 9, 9, 0.25)"
                },
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            className: (_Nav_module_css__WEBPACK_IMPORTED_MODULE_12___default().navbarlist),
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        // onClick={routeHomepage}
                                        className: router.pathname === "/" && (_Nav_module_css__WEBPACK_IMPORTED_MODULE_12___default().on_page),
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                            href: "/",
                                            children: "Home"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        className: router.pathname.includes("ItemID") && (_Nav_module_css__WEBPACK_IMPORTED_MODULE_12___default().on_page),
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                            href: "/Shop",
                                            children: "Shop"
                                        })
                                    }),
                                    (currentUser?.user?.roles?.Admin) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        className: router.pathname === "/SettingsPage" && (_Nav_module_css__WEBPACK_IMPORTED_MODULE_12___default().on_page),
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                            href: "/SettingsPage",
                                            children: "Admin"
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            className: (_Nav_module_css__WEBPACK_IMPORTED_MODULE_12___default().hamberger_icon),
                            children: (router.pathname.includes("/SettingsPage/UserSettings") || router.pathname.includes("UserProfile")) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                onClick: GoBack,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_tb__WEBPACK_IMPORTED_MODULE_7__.TbArrowLeft, {})
                            }) || /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                onClick: showNavbar,
                                children: active && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaBars, {}) || /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaTimes, {})
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            className: (_Nav_module_css__WEBPACK_IMPORTED_MODULE_12___default().title),
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_11___default()), {
                                            src: "/images/noto-v1_shopping-bags.svg",
                                            alt: "Next.js Logo",
                                            width: 30,
                                            height: 25,
                                            priority: true
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        className: (_Nav_module_css__WEBPACK_IMPORTED_MODULE_12___default().headerp),
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: (_Nav_module_css__WEBPACK_IMPORTED_MODULE_12___default().header),
                                            children: "Queenzee Designs"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_11___default()), {
                                            src: "/images/openmoji_billed-cap.svg",
                                            alt: "Next.js Logo",
                                            width: 30,
                                            height: 25,
                                            priority: true
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            onClick: showNavbar_u,
                            className: (_Nav_module_css__WEBPACK_IMPORTED_MODULE_12___default().profile),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_11___default()), {
                                alt: "slow internet",
                                height: 45,
                                width: 50,
                                src: currentUser?.user && currentUser.user.imageurl || "/images/mdi_user-circle.svg"
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                // className={c.slide_menu_active}
                className: active && (_Nav_module_css__WEBPACK_IMPORTED_MODULE_12___default().slide_menu_hide) || (_Nav_module_css__WEBPACK_IMPORTED_MODULE_12___default().slide_menu_active),
                style: {
                    "--backgroundColor": "rgb(35, 14, 35)",
                    "--navtextColor": "white",
                    "--Navtexthighlight": "rgb(121,118,118)",
                    "--btnbackgroundColor": "rgb(48,48,52)",
                    "--borderColor": "rgba(56, 11, 56, 1)",
                    "--textFontFamily": "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                    "--textsizeNormal": `${15}px`,
                    "--textsizeAverage": `${20}px`,
                    "--boxShadow": " 7px 7px 10px -6px rgba(9, 9, 9, 0.25)"
                },
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            // onClick={routeHomepage}
                            className: router.pathname === "/" && (_Nav_module_css__WEBPACK_IMPORTED_MODULE_12___default().on_page),
                            onClick: showNavbar,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                href: "/",
                                children: "Home"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            className: router.pathname.includes("ItemID") && (_Nav_module_css__WEBPACK_IMPORTED_MODULE_12___default().on_page),
                            onClick: showNavbar,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                href: "/Shop",
                                children: "Shop"
                            })
                        }),
                        (currentUser?.user?.roles?.Admin) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            className: router.pathname === "/SettingsPage" && (_Nav_module_css__WEBPACK_IMPORTED_MODULE_12___default().on_page),
                            onClick: showNavbar,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                href: "/SettingsPage",
                                children: "Admin"
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                // className={c.slide_menu_user}
                className: active_u && (_Nav_module_css__WEBPACK_IMPORTED_MODULE_12___default().slide_menu_user_hide) || (_Nav_module_css__WEBPACK_IMPORTED_MODULE_12___default().slide_menu_user),
                style: {
                    "--backgroundColor": "rgb(35, 14, 35)",
                    "--navtextColor": "white",
                    "--Navtexthighlight": "rgb(121,118,118)",
                    "--btnbackgroundColor": "rgb(48,48,52)",
                    "--borderColor": "rgba(56, 11, 56, 1)",
                    "--textFontFamily": "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                    "--textsizeNormal": `${15}px`,
                    "--textsizeAverage": `${20}px`,
                    "--boxShadow": " 7px 7px 10px -6px rgba(9, 9, 9, 0.25)"
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                    children: currentUser?.user && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            "  ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                onClick: ()=>{
                                    routeUserProfile();
                                    showNavbar_u();
                                },
                                children: "Edit account"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                // onClick={Logoutbtn}
                                onClick: ()=>{
                                    Logoutbtn();
                                    showNavbar_u();
                                },
                                children: "Logout"
                            })
                        ]
                    }) || /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                // onClick={routeLoginpage}
                                onClick: ()=>{
                                    routeLoginpage();
                                    showNavbar_u();
                                },
                                children: "Login"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                onClick: ()=>{
                                    routeSignUppage();
                                    showNavbar_u();
                                },
                                children: "Sign Up"
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                children: children
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1131:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ store)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ItemSlice_ItemSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(908);
/* harmony import */ var _CategorySlice_CategorySlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7019);
/* harmony import */ var _UserSlice_UserSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4124);
/* harmony import */ var _AdminSlice_UserConfigSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5977);
/* harmony import */ var _UserSlice_AuthSlice_AuthSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9611);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ItemSlice_ItemSlice__WEBPACK_IMPORTED_MODULE_1__, _CategorySlice_CategorySlice__WEBPACK_IMPORTED_MODULE_2__, _UserSlice_UserSlice__WEBPACK_IMPORTED_MODULE_3__, _AdminSlice_UserConfigSlice__WEBPACK_IMPORTED_MODULE_4__, _UserSlice_AuthSlice_AuthSlice__WEBPACK_IMPORTED_MODULE_5__]);
([_ItemSlice_ItemSlice__WEBPACK_IMPORTED_MODULE_1__, _CategorySlice_CategorySlice__WEBPACK_IMPORTED_MODULE_2__, _UserSlice_UserSlice__WEBPACK_IMPORTED_MODULE_3__, _AdminSlice_UserConfigSlice__WEBPACK_IMPORTED_MODULE_4__, _UserSlice_AuthSlice_AuthSlice__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({
    reducer: {
        itemred: _ItemSlice_ItemSlice__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP,
        categoryred: _CategorySlice_CategorySlice__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP,
        userred: _UserSlice_UserSlice__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP,
        currentuserred: _AdminSlice_UserConfigSlice__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP,
        //Auth .... 
        userreducer: _UserSlice_AuthSlice_AuthSlice__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP
    }
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8510:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Components_nav_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8908);
/* harmony import */ var _dataStore_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1131);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Components_nav_Navbar__WEBPACK_IMPORTED_MODULE_1__, _dataStore_store__WEBPACK_IMPORTED_MODULE_2__]);
([_Components_nav_Navbar__WEBPACK_IMPORTED_MODULE_1__, _dataStore_store__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_redux__WEBPACK_IMPORTED_MODULE_3__.Provider, {
        store: _dataStore_store__WEBPACK_IMPORTED_MODULE_2__/* .store */ .h,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Components_nav_Navbar__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                ...pageProps
            })
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5184:
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 8982:
/***/ ((module) => {

"use strict";
module.exports = require("cookies-next");

/***/ }),

/***/ 5567:
/***/ ((module) => {

"use strict";
module.exports = require("jwt-decode");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6290:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/fa");

/***/ }),

/***/ 4152:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/tb");

/***/ }),

/***/ 6022:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9648:
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

/***/ }),

/***/ 1017:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [598,675,676,664,527,977,508,492], () => (__webpack_exec__(8510)));
module.exports = __webpack_exports__;

})();