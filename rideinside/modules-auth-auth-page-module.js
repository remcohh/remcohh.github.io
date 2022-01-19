(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-auth-auth-page-module"],{

/***/ "6KuI":
/*!*******************************************!*\
  !*** ./src/app/modules/auth/auth.page.ts ***!
  \*******************************************/
/*! exports provided: AuthPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthPage", function() { return AuthPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _auth_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.page.scss */ "mbDl");
/* harmony import */ var _raw_loader_auth_page_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! raw-loader!./auth.page.html */ "McxD");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngxs/store */ "AcyG");
/* harmony import */ var src_app_store_actions_participant_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/store/actions/participant.actions */ "bTLy");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment */ "AytR");









let AuthPage = class AuthPage {
    constructor(http, router, store) {
        this.http = http;
        this.router = router;
        this.store = store;
    }
    ionViewDidEnter() {
        this.verifyCode();
    }
    verifyCode() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const ssoID = this.getCodeFromUrl();
            if (!ssoID) {
                this.router.navigate(['/', 'login']);
                return;
            }
            this.getAccessToken(ssoID);
        });
    }
    // FIXME: do proper url extraction
    getCodeFromUrl() {
        const query = window.location.search;
        if (!!query) {
            const urlParams = new URLSearchParams(query);
            return urlParams.get('SSSOId');
        }
    }
    getAccessToken(ssoID) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const headers = { apiKey: src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].apiKey };
            this.http
                .get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].authServer.token}/${ssoID}`, { headers })
                .subscribe({
                next: (response) => {
                    this.store.dispatch(new src_app_store_actions_participant_actions__WEBPACK_IMPORTED_MODULE_7__["SetParticipantData"]({
                        participantId: 'I6177031',
                        sssoId: ssoID
                    }));
                    this.router.navigate(['/', 'home']);
                },
                error: (e) => {
                    console.warn(e.message || e);
                    this.router.navigate(['/', 'login']);
                },
            });
        });
    }
};
AuthPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_6__["Store"] }
];
AuthPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-auth',
        template: _raw_loader_auth_page_html__WEBPACK_IMPORTED_MODULE_2__["default"],
        styles: [_auth_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
    })
], AuthPage);



/***/ }),

/***/ "LODU":
/*!**************************************************!*\
  !*** ./src/app/modules/auth/auth.page.module.ts ***!
  \**************************************************/
/*! exports provided: AuthPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthPageModule", function() { return AuthPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var src_app_ui_components_elements_elements_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/ui-components/elements/elements.module */ "nLx+");
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth-routing.module */ "cMCp");
/* harmony import */ var _auth_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth.page */ "6KuI");








let AuthPageModule = class AuthPageModule {
};
AuthPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _auth_routing_module__WEBPACK_IMPORTED_MODULE_6__["AuthPageRoutingModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            src_app_ui_components_elements_elements_module__WEBPACK_IMPORTED_MODULE_5__["ElementsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"],
        ],
        exports: [],
        declarations: [_auth_page__WEBPACK_IMPORTED_MODULE_7__["AuthPage"]],
        providers: [],
    })
], AuthPageModule);



/***/ }),

/***/ "McxD":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/auth.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mu-pt5\">\n  <mu-spinner [variant]=\"'page'\">\n    <h5 class=\"ion-text-center\">{{ 'auth-page.logging-in' | translate}}</h5>\n  </mu-spinner>\n</div>\n");

/***/ }),

/***/ "cMCp":
/*!*****************************************************!*\
  !*** ./src/app/modules/auth/auth-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: AuthPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthPageRoutingModule", function() { return AuthPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _auth_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.page */ "6KuI");




const routes = [
    {
        path: '',
        component: _auth_page__WEBPACK_IMPORTED_MODULE_3__["AuthPage"],
    },
];
let AuthPageRoutingModule = class AuthPageRoutingModule {
};
AuthPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AuthPageRoutingModule);



/***/ }),

/***/ "mbDl":
/*!*********************************************!*\
  !*** ./src/app/modules/auth/auth.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdXRoLnBhZ2Uuc2NzcyJ9 */");

/***/ })

}]);
//# sourceMappingURL=modules-auth-auth-page-module.js.map