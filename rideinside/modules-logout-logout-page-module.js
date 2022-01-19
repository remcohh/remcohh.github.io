(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-logout-logout-page-module"],{

/***/ "5KRh":
/*!*************************************************!*\
  !*** ./src/app/modules/logout/logout.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dvdXQucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "NEqC":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logout/logout.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header *ngIf=\"!renderWebView\">\n  <div id=\"native-header-padding\" class=\"\"></div>\n</ion-header>\n<ion-content *ngIf=\"!renderWebView\">\n  <native-content>\n    <div class=\"mu-pt5\">\n      <mu-spinner [variant]=\"'page'\">\n        <h5 class=\"ion-text-center\">\n          {{ 'logout-page.logging-out' | translate }}\n        </h5>\n      </mu-spinner>\n    </div>\n  </native-content>\n</ion-content>\n<div *ngIf=\"renderWebView\" class=\"mu-pt5\">\n  <mu-spinner [variant]=\"'page'\">\n    <h5 class=\"ion-text-center\">{{ 'logout-page.logging-out' | translate }}</h5>\n  </mu-spinner>\n</div>\n");

/***/ }),

/***/ "Qkxk":
/*!*********************************************************!*\
  !*** ./src/app/modules/logout/logout-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: LogoutPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutPageRoutingModule", function() { return LogoutPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _logout_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logout.page */ "YXHa");




const routes = [
    {
        path: '',
        component: _logout_page__WEBPACK_IMPORTED_MODULE_3__["LogoutPage"],
    },
];
let LogoutPageRoutingModule = class LogoutPageRoutingModule {
};
LogoutPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LogoutPageRoutingModule);



/***/ }),

/***/ "YXHa":
/*!***********************************************!*\
  !*** ./src/app/modules/logout/logout.page.ts ***!
  \***********************************************/
/*! exports provided: LogoutPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutPage", function() { return LogoutPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _logout_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logout.page.scss */ "5KRh");
/* harmony import */ var _raw_loader_logout_page_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! raw-loader!./logout.page.html */ "NEqC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "fwsW");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngxs/store */ "AcyG");
/* harmony import */ var src_app_services_platform_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/platform.service */ "EktT");
/* harmony import */ var src_app_store_actions_global_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/store/actions/global.actions */ "3mek");









let LogoutPage = class LogoutPage {
    constructor(store, storage, platform, router) {
        this.store = store;
        this.storage = storage;
        this.platform = platform;
        this.router = router;
    }
    ionViewDidEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.renderWebView = this.platform.isWeb();
            this.clearState();
        });
    }
    clearState() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.store.dispatch(new src_app_store_actions_global_actions__WEBPACK_IMPORTED_MODULE_8__["ClearAllStates"]());
            yield this.storage.clear();
            this.router.navigate(['/', 'login']);
        });
    }
    ionViewWillLeave() { }
};
LogoutPage.ctorParameters = () => [
    { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_6__["Store"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] },
    { type: src_app_services_platform_service__WEBPACK_IMPORTED_MODULE_7__["PlatformService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
LogoutPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-logout',
        template: _raw_loader_logout_page_html__WEBPACK_IMPORTED_MODULE_2__["default"],
        styles: [_logout_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
    })
], LogoutPage);



/***/ }),

/***/ "tn5m":
/*!******************************************************!*\
  !*** ./src/app/modules/logout/logout.page.module.ts ***!
  \******************************************************/
/*! exports provided: LogoutPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutPageModule", function() { return LogoutPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var src_app_ui_components_elements_elements_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/ui-components/elements/elements.module */ "nLx+");
/* harmony import */ var _logout_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./logout-routing.module */ "Qkxk");
/* harmony import */ var _logout_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./logout.page */ "YXHa");








let LogoutPageModule = class LogoutPageModule {
};
LogoutPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            src_app_ui_components_elements_elements_module__WEBPACK_IMPORTED_MODULE_5__["ElementsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _logout_routing_module__WEBPACK_IMPORTED_MODULE_6__["LogoutPageRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"],
        ],
        exports: [],
        declarations: [_logout_page__WEBPACK_IMPORTED_MODULE_7__["LogoutPage"]],
        providers: [],
    })
], LogoutPageModule);



/***/ })

}]);
//# sourceMappingURL=modules-logout-logout-page-module.js.map