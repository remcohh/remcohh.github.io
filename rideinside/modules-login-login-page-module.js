(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-login-login-page-module"],{

/***/ "Rq89":
/*!****************************************************!*\
  !*** ./src/app/modules/login/login.page.module.ts ***!
  \****************************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login-routing.module */ "qbKB");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login.page */ "uN2C");
/* harmony import */ var _ui_components_elements_elements_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui-components/elements/elements.module */ "nLx+");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");








let LoginPageModule = class LoginPageModule {
};
LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_4__["LoginPageRoutingModule"],
            _ui_components_elements_elements_module__WEBPACK_IMPORTED_MODULE_6__["ElementsModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_5__["LoginPage"]],
    })
], LoginPageModule);



/***/ }),

/***/ "eCkg":
/*!***********************************************!*\
  !*** ./src/app/modules/login/login.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".login-wrapper {\n  min-height: 100vh;\n  max-height: 640px;\n  padding-top: calc(2 * var(--mu-spacing-xl));\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  overflow: hidden;\n}\n@media screen and (min-width: 768px) {\n  .login-wrapper {\n    padding-top: calc(3 * var(--mu-spacing-xl));\n    max-height: 100vh;\n  }\n}\n.login-intro {\n  padding-bottom: var(--mu-spacing-xl);\n}\n.sign-in-button {\n  margin-top: var(--mu-spacing-md);\n}\n.mu-logo-container {\n  padding-bottom: var(--mu-spacing-lg);\n}\n@media screen and (min-width: 768px) {\n  .mu-logo-container {\n    padding-bottom: var(--mu-spacing-lg);\n  }\n}\n.mu-dots {\n  margin-top: var(--mu-spacing-xl);\n  flex-grow: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxsb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsMkNBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7QUFBRTtFQVJGO0lBU0ksMkNBQUE7SUFDQSxpQkFBQTtFQUdGO0FBQ0Y7QUFBQTtFQUNFLG9DQUFBO0FBR0Y7QUFBQTtFQUNFLGdDQUFBO0FBR0Y7QUFBQTtFQUNFLG9DQUFBO0FBR0Y7QUFGRTtFQUZGO0lBR0ksb0NBQUE7RUFLRjtBQUNGO0FBRkE7RUFDRSxnQ0FBQTtFQUNBLFlBQUE7QUFLRiIsImZpbGUiOiJsb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW4td3JhcHBlciB7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgbWF4LWhlaWdodDogNjQwcHg7XHJcbiAgcGFkZGluZy10b3A6IGNhbGMoMiAqIHZhcigtLW11LXNwYWNpbmcteGwpKTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICBwYWRkaW5nLXRvcDogY2FsYygzICogdmFyKC0tbXUtc3BhY2luZy14bCkpO1xyXG4gICAgbWF4LWhlaWdodDogMTAwdmg7XHJcbiAgfVxyXG59XHJcblxyXG4ubG9naW4taW50cm8ge1xyXG4gIHBhZGRpbmctYm90dG9tOiB2YXIoLS1tdS1zcGFjaW5nLXhsKTtcclxufVxyXG5cclxuLnNpZ24taW4tYnV0dG9uIHtcclxuICBtYXJnaW4tdG9wOiB2YXIoLS1tdS1zcGFjaW5nLW1kKTtcclxufVxyXG5cclxuLm11LWxvZ28tY29udGFpbmVyIHtcclxuICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tbXUtc3BhY2luZy1sZyk7XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiB2YXIoLS1tdS1zcGFjaW5nLWxnKTtcclxuICB9XHJcbn1cclxuXHJcbi5tdS1kb3RzIHtcclxuICBtYXJnaW4tdG9wOiB2YXIoLS1tdS1zcGFjaW5nLXhsKTtcclxuICBmbGV4LWdyb3c6IDE7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "qbKB":
/*!*******************************************************!*\
  !*** ./src/app/modules/login/login-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "uN2C");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"],
    },
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "qt3+":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/login/login.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-grid>\n  <ion-row>\n    <ion-col>\n      <div class=\"login-wrapper\">\n        <ion-col size-xs=\"20\" size-sm=\"15\" class=\"login-intro\">\n          <div class=\"mu-logo-container\">\n            <mu-university-logo [variant]=\"'small'\"></mu-university-logo>\n          </div>\n          <h2 class=\"ion-text-center\">\n            {{ 'login-page.welcome.title' | translate }}\n          </h2>\n          <p class=\"ion-text-center\">\n            {{ 'login-page.welcome.description' | translate }}\n          </p>\n        </ion-col>\n        <!-- temporary -->\n        <ion-select placeholder=\"Select Participant\" #devSelect>\n          <ion-select-option value=\"I6177031\">[I6177031] NL Student</ion-select-option>\n          <ion-select-option value=\"I6177032\">[I6177032] EU Student</ion-select-option>\n          <ion-select-option value=\"I6177033\">[I6177033] US Student</ion-select-option>\n          <ion-select-option value=\"I6177047\">I6177047 - Ketentst-JJJJEBF\t- NL</ion-select-option>\n          <ion-select-option value=\"I6177048\">I6177048 - Ketentst-JJJJEBG\t- NL</ion-select-option>\n          <ion-select-option value=\"I6177049\">I6177049 - Ketentst-JJJJEBH\t- CN</ion-select-option>\n          <ion-select-option value=\"I6177050\">I6177050 - Ketentst-JJJJEBI\t- CN</ion-select-option>\n          <ion-select-option value=\"I6177051\">I6177051 - Ketentst-JJJJECJ\t- NL</ion-select-option>\n          <ion-select-option value=\"I6177052\">I6177052 - Ketentst-JJJJECA\t- NL</ion-select-option>\n          <ion-select-option value=\"I6177053\">I6177053 - Ketentst-JJJJECB\t- US</ion-select-option>\n          <ion-select-option value=\"I6177054\">I6177054 - Ketentst-JJJJECC\t- US</ion-select-option>\n          <ion-select-option value=\"I6177055\">I6177055 - Ketentst-JJJJECD\t- NL</ion-select-option>\n          <ion-select-option value=\"I6177056\">I6177056 - Ketentst-JJJJECE\t- NL</ion-select-option>\n          <ion-select-option value=\"I6177057\">I6177057 - Ketentst-JJJJECF\t- US</ion-select-option>\n          <ion-select-option value=\"I6177058\">I6177058 - Ketentst-JJJJECG\t- US</ion-select-option>\n          <ion-select-option value=\"I6177059\">I6177059 - Ketentst-JJJJECH\t- NL</ion-select-option>\n          <ion-select-option value=\"I6177060\">I6177060 - Ketentst-JJJJECI\t- NL</ion-select-option>\n          <ion-select-option value=\"I6177061\">I6177061 - Ketentst-JJJJEDJ\t- US</ion-select-option>\n          <ion-select-option value=\"I6177062\">I6177062 - Ketentst-JJJJEDA\t- US</ion-select-option>\n          <ion-select-option value=\"I6177063\">I6177063 - Ketentst-JJJJEDB\t- NL</ion-select-option>\n          <ion-select-option value=\"I6177064\">I6177064 - Ketentst-JJJJEDC\t- NL</ion-select-option>\n          <ion-select-option value=\"I6177065\">I6177065 - Ketentst-JJJJEDD\t- US</ion-select-option>\n          <ion-select-option value=\"I6177066\">I6177066 - Ketentst-JJJJEDE\t- US</ion-select-option>\n          <ion-select-option value=\"I6177067\">I6177067 - Ketentst-JJJJEDF\t- NL</ion-select-option>\n          <ion-select-option value=\"I6177068\">I6177068 - Ketentst-JJJJEDG\t- NL</ion-select-option>\n          <ion-select-option value=\"I6177069\">I6177069 - Ketentst-JJJJEDH\t- US</ion-select-option>\n          <ion-select-option value=\"I6177070\">I6177070 - Ketentst-JJJJEDI\t- US</ion-select-option>\n          <ion-select-option value=\"I6177071\">I6177071 - Ketentst-JJJJEEJ\t- NL</ion-select-option>\n          <ion-select-option value=\"I6177072\">I6177072 - Ketentst-JJJJEEA\t- NL</ion-select-option>\n          <ion-select-option value=\"I6177073\">I6177073 - Ketentst-JJJJEEB\t- US</ion-select-option>\n          <ion-select-option value=\"I6177074\">I6177074 - Ketentst-JJJJEEC\t- US</ion-select-option>\n          <ion-select-option value=\"I6177075\">I6177075 - Ketentst-JJJJEED\t- NL</ion-select-option>\n          <ion-select-option value=\"I6177076\">I6177076 - Ketentst-JJJJEEE\t- NL</ion-select-option>\n          <ion-select-option value=\"I6177077\">I6177077 - Ketentst-JJJJEEF\t- US</ion-select-option>\n          <ion-select-option value=\"I6177078\">I6177078 - Ketentst-JJJJEEG\t- US</ion-select-option>\n          <ion-select-option value=\"I6177079\">I6177079 - Ketentst-JJJJEEH\t- NL</ion-select-option>\n          <ion-select-option value=\"I6177080\">I6177080 - Ketentst-JJJJEEI\t- NL</ion-select-option>\n          <ion-select-option value=\"I6177081\">I6177081 - Ketentst-JJJJEFJ\t- US</ion-select-option>\n          <ion-select-option value=\"I6177082\">I6177082 - Ketentst-JJJJEFA\t- US</ion-select-option>\n          <ion-select-option value=\"I6177083\">I6177083 - Ketentst-JJJJEFB\t- NL</ion-select-option>\n          <ion-select-option value=\"I6177084\">I6177084 - Ketentst-JJJJEFC\t- NL</ion-select-option>\n          <ion-select-option value=\"I6177085\">I6177085 - Ketentst-JJJJEFD\t- US</ion-select-option>\n          <ion-select-option value=\"I6177086\">I6177086 - Ketentst-JJJJEFE\t- US</ion-select-option>\n          <ion-select-option value=\"I6177087\">I6177087 - Ketentst-JJJJEFF\t- NL</ion-select-option>\n          <ion-select-option value=\"I6177088\">I6177088 - Ketentst-JJJJEFG\t- NL</ion-select-option>\n          <ion-select-option value=\"I6177089\">I6177089 - Ketentst-JJJJEFH\t- US</ion-select-option>\n          <ion-select-option value=\"I6177090\">I6177090 - Ketentst-JJJJEFI\t- US</ion-select-option>\n          <ion-select-option value=\"I6177091\">I6177091 - Ketentst-JJJJEGJ\t- NL</ion-select-option>\n          <ion-select-option value=\"I6177092\">I6177092 - Ketentst-JJJJEGA\t- NL</ion-select-option>\n          <ion-select-option value=\"I6177093\">I6177093 - Ketentst-JJJJEGB\t- US</ion-select-option>\n          <ion-select-option value=\"I6177094\">I6177094 - Ketentst-JJJJEGC\t- US</ion-select-option>\n          <ion-select-option value=\"I6177095\">I6177095 - Ketentst-JJJJEGD\t- NL</ion-select-option>\n          <ion-select-option value=\"I6177096\">I6177096 - Ketentst-JJJJEGE\t- NL</ion-select-option>\n          <ion-select-option value=\"I6177097\">I6177097 - Ketentst-JJJJEGF\t- US</ion-select-option>\n          <ion-select-option value=\"I6177098\">I6177098 - Ketentst-JJJJEGG\t- US</ion-select-option>\n          <ion-select-option value=\"I6177099\">I6177099 - Ketentst-JJJJEGH\t- NL</ion-select-option>\n          <ion-select-option value=\"I6177100\">I6177100 - Ketentst-JJJJEGI\t- NL</ion-select-option>\n          <ion-select-option value=\"I6177101\">I6177101 - Ketentst-JJJJEHJ\t- US</ion-select-option>\n          <ion-select-option value=\"I6177102\">I6177102 - Ketentst-JJJJEHA\t- US</ion-select-option>\n        </ion-select>\n        <!-- === -->\n        <div class=\"mu-input-container mu-px3\">\n          <input class=\"mu-input-field\" #devInput type=\"text\" placeholder=\"Enter a participant ID: I0000000\" aria-placeholder=\"Enter a participant ID\">\n        </div>\n        <ion-col size-xs=\"20\" size-sm=\"15\">\n          <mu-button\n            class=\"sign-in-button\"\n            label=\"Sign in\"\n            (click)=\"signIn(devInput.value !== ''?devInput.value:devSelect.value)\"\n          >{{ 'login-page.signin' | translate }}</mu-button\n          >\n        </ion-col>\n        <mu-dots class=\"mu-dots\" direction=\"vertical\"></mu-dots>\n      </div>\n    </ion-col>\n    <ion-col class=\"ion-hide-md-down\" sizeMd=\"14\">\n      <ion-img\n        class=\"object-fit-cover ion-hide-md-down\"\n        src=\"assets/omslag_compressed.jpg\"\n      ></ion-img>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n");

/***/ }),

/***/ "uN2C":
/*!*********************************************!*\
  !*** ./src/app/modules/login/login.page.ts ***!
  \*********************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss */ "eCkg");
/* harmony import */ var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! raw-loader!./login.page.html */ "qt3+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_platform_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/platform.service */ "EktT");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngxs/store */ "AcyG");
/* harmony import */ var src_app_store_actions_participant_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/store/actions/participant.actions */ "bTLy");
/* harmony import */ var src_app_enums_language__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/enums/language */ "zpKt");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_link_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/link.service */ "Lpmr");











let LoginPage = class LoginPage {
    constructor(linkService, platform, store, router) {
        this.linkService = linkService;
        this.platform = platform;
        this.store = store;
        this.router = router;
    }
    ngOnInit() {
        this.setApplicationView();
    }
    devLogin(participantId) {
        if (!participantId)
            return;
        const prefLang = this.detectPreferredLanguage();
        this.store.dispatch(new src_app_store_actions_participant_actions__WEBPACK_IMPORTED_MODULE_7__["SetParticipantData"]({
            participantId,
            sssoId: 'random',
            languageCode: prefLang,
        }));
        this.router.navigate(['/', 'home']);
    }
    signIn(participantId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (participantId) {
                return (this.devLogin(participantId));
            }
            const params = {
                apiKey: src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiKey,
                ReturnUrl: this.platform.isWeb()
                    ? src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].callbackUrl.web
                    : src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].callbackUrl.app,
            };
            const queryString = Object.entries(params)
                .map(([key, value]) => `${key}=${value}`)
                .join('&');
            const url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].authServer.login}?${queryString}`;
            const options = { external: false, attributes: { target: '_self' } };
            this.linkService.openUrl(url, options);
        });
    }
    setApplicationView() {
        this.renderWebview = this.platform.isWeb();
        this.renderAppview = !this.renderWebview;
    }
    detectPreferredLanguage() {
        if (/^nl\b/.test(navigator.language)) {
            return src_app_enums_language__WEBPACK_IMPORTED_MODULE_8__["LanguageCode"].NL;
        }
        else {
            return src_app_enums_language__WEBPACK_IMPORTED_MODULE_8__["LanguageCode"].EN;
        }
    }
    ngOnDestroy() { }
};
LoginPage.ctorParameters = () => [
    { type: src_app_services_link_service__WEBPACK_IMPORTED_MODULE_10__["LinkService"] },
    { type: src_app_services_platform_service__WEBPACK_IMPORTED_MODULE_4__["PlatformService"] },
    { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_6__["Store"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] }
];
LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_2__["default"],
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
    })
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=modules-login-login-page-module.js.map