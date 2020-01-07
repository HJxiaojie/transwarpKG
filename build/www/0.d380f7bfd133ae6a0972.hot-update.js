webpackHotUpdate(0,{

/***/ "./src/main/webapp/app/admin/admin.route.ts":
/*!**************************************************!*\
  !*** ./src/main/webapp/app/admin/admin.route.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar _1 = __webpack_require__(/*! ./ */ \"./src/main/webapp/app/admin/index.ts\");\nvar core_1 = __webpack_require__(/*! app/core */ \"./src/main/webapp/app/core/index.ts\");\nvar ADMIN_ROUTES = [_1.auditsRoute, _1.configurationRoute, _1.docsRoute, _1.healthRoute, _1.logsRoute].concat(_1.userMgmtRoute, [_1.metricsRoute]);\nexports.adminState = [\n    {\n        path: '',\n        redirectTo: 'kg-search',\n        data: {\n            authorities: ['ROLE_ADMIN']\n        },\n        canActivate: [core_1.UserRouteAccessService],\n        children: ADMIN_ROUTES\n    }\n];\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL2FkbWluLnJvdXRlLnRzP2QxZTgiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSwrRUFBcUg7QUFFckgsd0ZBQWtEO0FBRWxELElBQU0sWUFBWSxJQUFJLGNBQVcsRUFBRSxxQkFBa0IsRUFBRSxZQUFTLEVBQUUsY0FBVyxFQUFFLFlBQVMsU0FBSyxnQkFBYSxHQUFFLGVBQVksRUFBQyxDQUFDO0FBRTdHLGtCQUFVLEdBQVc7SUFDOUI7UUFDSSxJQUFJLEVBQUUsRUFBRTtRQUNSLFVBQVUsRUFBRSxXQUFXO1FBQ3ZCLElBQUksRUFBRTtZQUNGLFdBQVcsRUFBRSxDQUFDLFlBQVksQ0FBQztTQUM5QjtRQUNELFdBQVcsRUFBRSxDQUFDLDZCQUFzQixDQUFDO1FBQ3JDLFFBQVEsRUFBRSxZQUFZO0tBQ3pCO0NBQ0osQ0FBQyIsImZpbGUiOiIuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vYWRtaW4ucm91dGUudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBhdWRpdHNSb3V0ZSwgY29uZmlndXJhdGlvblJvdXRlLCBkb2NzUm91dGUsIGhlYWx0aFJvdXRlLCBsb2dzUm91dGUsIG1ldHJpY3NSb3V0ZSwgdXNlck1nbXRSb3V0ZSB9IGZyb20gJy4vJztcblxuaW1wb3J0IHsgVXNlclJvdXRlQWNjZXNzU2VydmljZSB9IGZyb20gJ2FwcC9jb3JlJztcblxuY29uc3QgQURNSU5fUk9VVEVTID0gW2F1ZGl0c1JvdXRlLCBjb25maWd1cmF0aW9uUm91dGUsIGRvY3NSb3V0ZSwgaGVhbHRoUm91dGUsIGxvZ3NSb3V0ZSwgLi4udXNlck1nbXRSb3V0ZSwgbWV0cmljc1JvdXRlXTtcblxuZXhwb3J0IGNvbnN0IGFkbWluU3RhdGU6IFJvdXRlcyA9IFtcbiAgICB7XG4gICAgICAgIHBhdGg6ICcnLFxuICAgICAgICByZWRpcmVjdFRvOiAna2ctc2VhcmNoJyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgYXV0aG9yaXRpZXM6IFsnUk9MRV9BRE1JTiddXG4gICAgICAgIH0sXG4gICAgICAgIGNhbkFjdGl2YXRlOiBbVXNlclJvdXRlQWNjZXNzU2VydmljZV0sXG4gICAgICAgIGNoaWxkcmVuOiBBRE1JTl9ST1VURVNcbiAgICB9XG5dO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/main/webapp/app/admin/admin.route.ts\n");

/***/ })

})