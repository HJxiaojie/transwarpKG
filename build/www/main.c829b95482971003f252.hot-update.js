webpackHotUpdate("main",{

/***/ "./src/main/webapp/app/home/home.module.ts":
/*!*************************************************!*\
  !*** ./src/main/webapp/app/home/home.module.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar tslib_1 = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\nvar core_1 = __webpack_require__(/*! @angular/core */ \"./node_modules/@angular/core/fesm5/core.js\");\nvar router_1 = __webpack_require__(/*! @angular/router */ \"./node_modules/@angular/router/fesm5/router.js\");\nvar shared_1 = __webpack_require__(/*! app/shared */ \"./src/main/webapp/app/shared/index.ts\");\nvar _1 = __webpack_require__(/*! ./ */ \"./src/main/webapp/app/home/index.ts\");\nvar entity_module_1 = __webpack_require__(/*! app/entities/entity.module */ \"./src/main/webapp/app/entities/entity.module.ts\");\nvar common_1 = __webpack_require__(/*! @angular/common */ \"./node_modules/@angular/common/fesm5/common.js\");\nvar ng_zorro_antd_1 = __webpack_require__(/*! ng-zorro-antd */ \"./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js\");\nvar animations_1 = __webpack_require__(/*! @angular/platform-browser/animations */ \"./node_modules/@angular/platform-browser/fesm5/animations.js\");\nvar KnowledgeGraphHomeModule = /** @class */ (function () {\n    function KnowledgeGraphHomeModule() {\n    }\n    KnowledgeGraphHomeModule = tslib_1.__decorate([\n        core_1.NgModule({\n            imports: [\n                shared_1.KnowledgeGraphSharedModule,\n                router_1.RouterModule.forChild([_1.HOME_ROUTE]),\n                entity_module_1.KnowledgeGraphEntityModule,\n                shared_1.KnowledgeGraphSharedCommonModule,\n                common_1.CommonModule,\n                ng_zorro_antd_1.NgZorroAntdModule,\n                animations_1.BrowserAnimationsModule\n            ],\n            declarations: [_1.HomeComponent],\n            schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]\n        })\n    ], KnowledgeGraphHomeModule);\n    return KnowledgeGraphHomeModule;\n}());\nexports.KnowledgeGraphHomeModule = KnowledgeGraphHomeModule;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2hvbWUvaG9tZS5tb2R1bGUudHM/MjQ0ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxvR0FBaUU7QUFDakUsNEdBQStDO0FBRS9DLDhGQUEwRjtBQUMxRiw4RUFBK0M7QUFDL0MsK0hBQXdFO0FBQ3hFLDRHQUErQztBQUMvQyxzSEFBMkY7QUFDM0YsbUpBQStFO0FBZS9FO0lBQUE7SUFBdUMsQ0FBQztJQUEzQix3QkFBd0I7UUFicEMsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFO2dCQUNMLG1DQUEwQjtnQkFDMUIscUJBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQyxhQUFVLENBQUMsQ0FBQztnQkFDbkMsMENBQTBCO2dCQUMxQix5Q0FBZ0M7Z0JBQ2hDLHFCQUFZO2dCQUNaLGlDQUFpQjtnQkFDakIsb0NBQXVCO2FBQzFCO1lBQ0QsWUFBWSxFQUFFLENBQUMsZ0JBQWEsQ0FBQztZQUM3QixPQUFPLEVBQUUsQ0FBQyw2QkFBc0IsQ0FBQztTQUNwQyxDQUFDO09BQ1csd0JBQXdCLENBQUc7SUFBRCwrQkFBQztDQUFBO0FBQTNCLDREQUF3QiIsImZpbGUiOiIuL3NyYy9tYWluL3dlYmFwcC9hcHAvaG9tZS9ob21lLm1vZHVsZS50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBDVVNUT01fRUxFTUVOVFNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBLbm93bGVkZ2VHcmFwaFNoYXJlZENvbW1vbk1vZHVsZSwgS25vd2xlZGdlR3JhcGhTaGFyZWRNb2R1bGUgfSBmcm9tICdhcHAvc2hhcmVkJztcbmltcG9ydCB7IEhPTUVfUk9VVEUsIEhvbWVDb21wb25lbnQgfSBmcm9tICcuLyc7XG5pbXBvcnQgeyBLbm93bGVkZ2VHcmFwaEVudGl0eU1vZHVsZSB9IGZyb20gJ2FwcC9lbnRpdGllcy9lbnRpdHkubW9kdWxlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ1pvcnJvQW50ZE1vZHVsZSwgTlpfSUNPTl9ERUZBVUxUX1RXT1RPTkVfQ09MT1IsIE5aX0lDT05TIH0gZnJvbSAnbmctem9ycm8tYW50ZCc7XG5pbXBvcnQgeyBCcm93c2VyQW5pbWF0aW9uc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvYW5pbWF0aW9ucyc7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBLbm93bGVkZ2VHcmFwaFNoYXJlZE1vZHVsZSxcbiAgICAgICAgUm91dGVyTW9kdWxlLmZvckNoaWxkKFtIT01FX1JPVVRFXSksXG4gICAgICAgIEtub3dsZWRnZUdyYXBoRW50aXR5TW9kdWxlLFxuICAgICAgICBLbm93bGVkZ2VHcmFwaFNoYXJlZENvbW1vbk1vZHVsZSxcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxuICAgICAgICBOZ1pvcnJvQW50ZE1vZHVsZSxcbiAgICAgICAgQnJvd3NlckFuaW1hdGlvbnNNb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW0hvbWVDb21wb25lbnRdLFxuICAgIHNjaGVtYXM6IFtDVVNUT01fRUxFTUVOVFNfU0NIRU1BXVxufSlcbmV4cG9ydCBjbGFzcyBLbm93bGVkZ2VHcmFwaEhvbWVNb2R1bGUge31cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/main/webapp/app/home/home.module.ts\n");

/***/ })

})