(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-home-home-page-module"],{

/***/ "0hW1":
/*!*******************************************************************************!*\
  !*** ./src/app/ui-components/features/file-upload/file-upload.component.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mu-hidden-input {\n  position: absolute;\n  height: 0px;\n  width: 0px;\n  display: none;\n}\n\n.mu-file-input-container {\n  display: grid;\n  grid-template-columns: 1fr auto;\n  grid-template-rows: minmax(0, 1fr) auto;\n  position: relative;\n  width: 100%;\n  margin-bottom: var(--mu-spacing-md);\n}\n\n.mu-file-input-container .fake-input-field {\n  width: 100%;\n  height: calc(var(--mu-button-text-height) + 2 * var(--mu-spacing-xs));\n  border-top: var(--mu-border-width) solid var(--mu-color-border);\n  border-bottom: var(--mu-border-width) solid var(--mu-color-border);\n  border-left: var(--mu-border-width) solid var(--mu-color-border);\n  border-top-left-radius: var(--mu-spacing-xxs);\n  border-bottom-left-radius: var(--mu-spacing-xxs);\n  overflow: hidden;\n  white-space: nowrap;\n}\n\n.mu-file-input-container .fake-input-field .filename {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  vertical-align: middle;\n}\n\n.mu-file-input-container .controls {\n  display: flex;\n  float: right;\n}\n\n.mu-file-input-container .mu-upload {\n  min-width: 90px;\n}\n\n.mu-file-input-container .button-divider {\n  position: absolute;\n  top: var(--mu-spacing-md);\n  bottom: var(--mu-spacing-md);\n  right: 105px;\n  width: var(--mu-border-width);\n  background: white;\n  z-index: 10;\n}\n\n.mu-file-input-container .message-area {\n  grid-column: span 2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcZmlsZS11cGxvYWQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLCtCQUFBO0VBQ0EsdUNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxtQ0FBQTtBQUNGOztBQUNFO0VBQ0UsV0FBQTtFQUNBLHFFQUFBO0VBQ0EsK0RBQUE7RUFDQSxrRUFBQTtFQUNBLGdFQUFBO0VBQ0EsNkNBQUE7RUFDQSxnREFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFBSTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0FBRU47O0FBQ0U7RUFDRSxhQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVFO0VBQ0UsZUFBQTtBQUFKOztBQUdFO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FBREo7O0FBR0U7RUFDRSxtQkFBQTtBQURKIiwiZmlsZSI6ImZpbGUtdXBsb2FkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm11LWhpZGRlbi1pbnB1dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAwcHg7XG4gIHdpZHRoOiAwcHg7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5tdS1maWxlLWlucHV0LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIGF1dG87XG4gIGdyaWQtdGVtcGxhdGUtcm93czogbWlubWF4KDAsIDFmcikgYXV0bztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tbXUtc3BhY2luZy1tZCk7XG5cbiAgLmZha2UtaW5wdXQtZmllbGQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogY2FsYyh2YXIoLS1tdS1idXR0b24tdGV4dC1oZWlnaHQpICsgMiAqIHZhcigtLW11LXNwYWNpbmcteHMpKTtcbiAgICBib3JkZXItdG9wOiB2YXIoLS1tdS1ib3JkZXItd2lkdGgpIHNvbGlkIHZhcigtLW11LWNvbG9yLWJvcmRlcik7XG4gICAgYm9yZGVyLWJvdHRvbTogdmFyKC0tbXUtYm9yZGVyLXdpZHRoKSBzb2xpZCB2YXIoLS1tdS1jb2xvci1ib3JkZXIpO1xuICAgIGJvcmRlci1sZWZ0OiB2YXIoLS1tdS1ib3JkZXItd2lkdGgpIHNvbGlkIHZhcigtLW11LWNvbG9yLWJvcmRlcik7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogdmFyKC0tbXUtc3BhY2luZy14eHMpO1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IHZhcigtLW11LXNwYWNpbmcteHhzKTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgLmZpbGVuYW1lIHtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIH1cbiAgfVxuICAuY29udHJvbHMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICB9XG5cbiAgLm11LXVwbG9hZCB7XG4gICAgbWluLXdpZHRoOiA5MHB4O1xuICB9XG5cbiAgLmJ1dHRvbi1kaXZpZGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiB2YXIoLS1tdS1zcGFjaW5nLW1kKTtcbiAgICBib3R0b206IHZhcigtLW11LXNwYWNpbmctbWQpO1xuICAgIHJpZ2h0OiAxMDVweDtcbiAgICB3aWR0aDogdmFyKC0tbXUtYm9yZGVyLXdpZHRoKTtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICB6LWluZGV4OiAxMDtcbiAgfVxuICAubWVzc2FnZS1hcmVhIHsgICAgXG4gICAgZ3JpZC1jb2x1bW46IHNwYW4gMjtcbiAgfVxufVxuIl19 */");

/***/ }),

/***/ "1O9S":
/*!***************************************************************************************************!*\
  !*** ./src/app/ui-components/features/feedback-notification/feedback-notification.component.scss ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#mu-status-container {\n  border: var(--mu-border-width) solid var(--mu-color-border);\n  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.15);\n}\n\n.g-auto {\n  grid-template-columns: auto 1fr;\n  display: grid;\n  gap: 1rem;\n  align-content: baseline;\n  align-items: baseline;\n}\n\nspan {\n  align-content: baseline;\n  align-items: baseline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcZmVlZGJhY2stbm90aWZpY2F0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMkRBQUE7RUFDQSwyQ0FBQTtBQUNKOztBQUNBO0VBQ0UsK0JBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7QUFFRjs7QUFDQTtFQUNFLHVCQUFBO0VBQ0EscUJBQUE7QUFFRiIsImZpbGUiOiJmZWVkYmFjay1ub3RpZmljYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbXUtc3RhdHVzLWNvbnRhaW5lciB7XHJcbiAgICBib3JkZXI6IHZhcigtLW11LWJvcmRlci13aWR0aCkgc29saWQgdmFyKC0tbXUtY29sb3ItYm9yZGVyKTtcclxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgfVxyXG4uZy1hdXRvIHsgICAgXHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOmF1dG8gMWZyO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ2FwOiAxcmVtO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGJhc2VsaW5lO1xyXG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxufVxyXG5cclxuc3BhbiB7XHJcbiAgYWxpZ24tY29udGVudDogYmFzZWxpbmU7XHJcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG59Il19 */");

/***/ }),

/***/ "2Y+D":
/*!***********************************************************************************************!*\
  !*** ./src/app/ui-components/features/status-notification/status-notification.component.scss ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#mu-status-container {\n  border: var(--mu-border-width) solid var(--mu-color-border);\n  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.15);\n}\n\n.g-auto {\n  grid-template-columns: auto 1fr;\n  display: grid;\n  gap: 1rem;\n  align-content: baseline;\n  align-items: baseline;\n}\n\nspan {\n  align-content: baseline;\n  align-items: baseline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcc3RhdHVzLW5vdGlmaWNhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJEQUFBO0VBQ0EsMkNBQUE7QUFDRjs7QUFFQTtFQUNFLCtCQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSx1QkFBQTtFQUNBLHFCQUFBO0FBRUYiLCJmaWxlIjoic3RhdHVzLW5vdGlmaWNhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNtdS1zdGF0dXMtY29udGFpbmVyIHtcbiAgYm9yZGVyOiB2YXIoLS1tdS1ib3JkZXItd2lkdGgpIHNvbGlkIHZhcigtLW11LWNvbG9yLWJvcmRlcik7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4xNSk7XG59XG5cbi5nLWF1dG8geyAgICBcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmcjtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiAxcmVtO1xuICBhbGlnbi1jb250ZW50OiBiYXNlbGluZTtcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xufVxuc3BhbiB7XG4gIGFsaWduLWNvbnRlbnQ6IGJhc2VsaW5lO1xuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG59Il19 */");

/***/ }),

/***/ "2zmC":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ui-components/features/profile-picture-upload/profile-picture-upload.component.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<input\n  class=\"mu-hidden-input\"\n  #fileInput\n  multiple\n  type=\"file\"\n  [accept]=\"allowedFileExtensions\"\n  aria-hidden\n  (change)=\"handleSelectFile()\"\n/>\n<div class = \"photo-uploader\">\n  <div class=\"controls\">\n    <div class=\"explanation\">\n      <p>\n        {{ 'profile-picture-upload.requirement' | translate }}\n      </p>\n      <ul>\n        <li>{{ 'profile-picture-upload.requirement-1' | translate }}</li>\n        <li>{{ 'profile-picture-upload.requirement-2' | translate }}</li>\n        <li>{{ 'profile-picture-upload.requirement-3' | translate }}</li>\n      </ul>\n    </div>\n    <div class = \"selector\">\n      <ion-button\n        *ngIf=\"!this.previewUrl\"\n        (click)=\"openFileSelectDialogue()\"\n      >\n        <fa-icon [icon]=\"uploadIcon\"></fa-icon>\n        <ion-text>{{ 'profile-picture-upload.select-file' | translate }}</ion-text>\n      </ion-button>\n      <div *ngIf=\"this.previewUrl\" class=\"delete-selected\">\n        <div class=\"fake-input-field\">{{ this.selectedFile?.name }}</div>\n        <button\n          (click)=\"openFileSelectDialogue()\"\n          class=\"button\"\n        >\n          <fa-icon [icon]=\"uploadIcon\"></fa-icon>\n          {{ 'profile-picture-upload.select-file' | translate }}\n        </button>\n      </div>\n    </div>\n    <div *ngIf=\"this.showPreview &&!this.hasValidationError &&!this.hasUploadedSuccesfully\" class = \"uploader\">\n      <p>\n        {{ 'profile-picture-upload.confirm-info' | translate }}\n      </p>\n      <ion-button\n        (click)=\"showConfirm()\"\n        class=\"no-border-radius-left\"\n      >\n        {{ 'profile-picture-upload.confirm' | translate }}\n      </ion-button>\n    </div>\n  </div>\n  <div class=\"preview\">\n    <div *ngIf=\"(hasValidationError && validationErrors.length) || hasUploadedSuccesfully\" class=\"message-area\">\n      <ion-text *ngFor=\"let error of validationErrors\" color=\"danger\"><div class=\"mu-p2\" [innerHTML]=\"error\"></div></ion-text>\n      <ion-text *ngIf=\"hasUploadedSuccesfully\" color=\"success\"><div class=\"mu-p2\">{{ 'file-upload.success' | translate}}</div></ion-text>\n    </div>\n    <div  #photoFrame id=\"photo-frame\">\n      <img *ngIf=\"this.showPreview && this.previewUrl\" id=\"portrait-image\"\n           [src]=\"this.previewUrl\"\n           (load)=\"validateSelectedFile()\"\n      />\n    </div>\n  </div>\n</div>\n\n");

/***/ }),

/***/ "3Clk":
/*!*****************************************************!*\
  !*** ./src/app/modules/home/home-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "oUeL");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"],
    },
    {
        path: ':admission',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"],
    },
    {
        path: ':admission/:audit',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"],
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HomePageRoutingModule);



/***/ }),

/***/ "4FUw":
/*!*********************************************!*\
  !*** ./src/app/modules/home/home.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  overflow-y: auto;\n  min-height: 100vh;\n}\n\n.mu-logo-container {\n  height: 135px;\n  padding: var(--mu-spacing-sm);\n}\n\n@media screen and (min-width: 768px) {\n  .aside-content-container {\n    height: 100%;\n  }\n}\n\n@media screen and (min-width: 768px) {\n  .side-menu-container {\n    height: 100%;\n    display: grid;\n    grid-template-rows: auto auto minmax(0, 1fr);\n    overflow: auto;\n  }\n}\n\n.side-menu-title {\n  display: block;\n  padding: var(--mu-spacing-md);\n  margin: 0;\n}\n\n@media screen and (min-width: 768px) {\n  .side-menu-title {\n    padding: 0 var(--mu-spacing-xl) var(--mu-spacing-lg) var(--mu-spacing-xl);\n  }\n}\n\n@media screen and (min-width: 768px) {\n  .web-container-main {\n    padding: 0;\n    display: block;\n    max-height: 100%;\n    overflow: auto;\n  }\n}\n\n.mu-grid {\n  grid-template-rows: auto minmax(0, 1fr);\n  gap: 0;\n  height: 100%;\n}\n\n@media screen and (max-width: 768px) {\n  .sticky {\n    position: relative;\n  }\n}\n\n@media screen and (min-width: 768px) {\n  .main-row {\n    display: grid;\n    grid-template-columns: minmax(20rem, 35%) 1fr;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFDQTtFQUNFLGFBQUE7RUFDQSw2QkFBQTtBQUVGOztBQUVFO0VBREY7SUFFSSxZQUFBO0VBRUY7QUFDRjs7QUFFRTtFQURGO0lBRUksWUFBQTtJQUNBLGFBQUE7SUFDQSw0Q0FBQTtJQUNBLGNBQUE7RUFFRjtBQUNGOztBQUNBO0VBQ0UsY0FBQTtFQUNBLDZCQUFBO0VBQ0EsU0FBQTtBQUVGOztBQUFFO0VBTEY7SUFNSSx5RUFBQTtFQUdGO0FBQ0Y7O0FBQ0U7RUFERjtJQUVJLFVBQUE7SUFDQSxjQUFBO0lBQ0EsZ0JBQUE7SUFDQSxjQUFBO0VBR0Y7QUFDRjs7QUFEQTtFQUNFLHVDQUFBO0VBQ0EsTUFBQTtFQUNBLFlBQUE7QUFJRjs7QUFBRTtFQURGO0lBRUksa0JBQUE7RUFJRjtBQUNGOztBQUFFO0VBREY7SUFFSSxhQUFBO0lBQ0EsNkNBQUE7RUFJRjtBQUNGIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbn1cclxuLm11LWxvZ28tY29udGFpbmVyIHtcclxuICBoZWlnaHQ6IDEzNXB4O1xyXG4gIHBhZGRpbmc6IHZhcigtLW11LXNwYWNpbmctc20pO1xyXG59XHJcblxyXG4uYXNpZGUtY29udGVudC1jb250YWluZXIge1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG59XHJcblxyXG4uc2lkZS1tZW51LWNvbnRhaW5lciB7XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0byBtaW5tYXgoMCwgMWZyKTtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gIH1cclxufVxyXG5cclxuLnNpZGUtbWVudS10aXRsZSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcGFkZGluZzogdmFyKC0tbXUtc3BhY2luZy1tZCk7XHJcbiAgbWFyZ2luOiAwO1xyXG5cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgcGFkZGluZzogMCB2YXIoLS1tdS1zcGFjaW5nLXhsKSB2YXIoLS1tdS1zcGFjaW5nLWxnKSB2YXIoLS1tdS1zcGFjaW5nLXhsKTtcclxuICB9XHJcbn1cclxuXHJcbi53ZWItY29udGFpbmVyLW1haW4ge1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgfVxyXG59XHJcbi5tdS1ncmlkIHtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gbWlubWF4KDAsIDFmcik7XHJcbiAgZ2FwOiAwO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLnN0aWNreSB7XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcbn1cclxuXHJcbi5tYWluLXJvdyB7XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgyMHJlbSwgMzUlKSAxZnI7XHJcbiAgfVxyXG59Il19 */");

/***/ }),

/***/ "5Hg/":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ui-components/features/status-bar/status-bar.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"admission-status-bar mu-bg-{{contextColorData}}\" *ngIf=\"status\">\n  <fa-icon [icon]=\"faInfo\" class=\"mu-px2\"></fa-icon>\n  {{status}}\n</div>  ");

/***/ }),

/***/ "71i/":
/*!***********************************************************************************************!*\
  !*** ./src/app/ui-components/features/student-audit-groups/student-audit-groups.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: MuStudentAuditsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MuStudentAuditsComponent", function() { return MuStudentAuditsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _student_audit_groups_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./student-audit-groups.component.scss */ "jHIy");
/* harmony import */ var _raw_loader_student_audit_groups_component_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! raw-loader!./student-audit-groups.component.html */ "dMWJ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngxs/store */ "AcyG");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_interfaces_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/interfaces/component */ "E7Uh");
/* harmony import */ var src_app_models_student_audit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/models/student-audit */ "G4S2");
/* harmony import */ var src_app_services_platform_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/platform.service */ "EktT");
/* harmony import */ var src_app_store_actions_content_actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/store/actions/content.actions */ "chTE");
/* harmony import */ var src_app_store_actions_student_audit_documents_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/store/actions/student-audit-documents.actions */ "AI2x");
/* harmony import */ var src_app_store_actions_student_audits_actions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/store/actions/student-audits.actions */ "10JN");
/* harmony import */ var src_app_store_state_student_admissions_state__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/store/state/student-admissions.state */ "qlWn");
/* harmony import */ var src_app_store_state_student_audit_documents_state__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/store/state/student-audit-documents.state */ "VWKi");
/* harmony import */ var src_app_store_state_student_audits_state__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/store/state/student-audits.state */ "qGxV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_store_actions_student_admissions_actions__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/store/actions/student-admissions.actions */ "Jz07");



















let MuStudentAuditsComponent = class MuStudentAuditsComponent extends src_app_interfaces_component__WEBPACK_IMPORTED_MODULE_7__["ApiClass"] {
    constructor(store, platform, route) {
        super(src_app_interfaces_component__WEBPACK_IMPORTED_MODULE_7__["ApiStatusStreamType"].AUDIT);
        this.store = store;
        this.platform = platform;
        this.route = route;
        this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.auditGroups = [];
    }
    ngOnInit() {
        this.isWebview = this.platform.isWeb();
        this.startupAuditId = this.route.snapshot.params.admission && this.route.snapshot.params.audit ? this.route.snapshot.params.audit : undefined;
        this.listenToSelectedGuidChanges();
        this.listenToSelectedAdmissionLockedChanges();
        this.listenToAuditGroupChanges();
        this.listenToSelectedAuditChanges();
    }
    listenToSelectedAdmissionLockedChanges() {
        this.selectedAdmissionLockedStream
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.ngUnsubscribe), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])((value) => !!value), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])((locked) => {
            this.selectedAdmissionIsLocked = locked;
        }))
            .subscribe();
    }
    listenToSelectedGuidChanges() {
        this.selectedGuidStream
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.ngUnsubscribe), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])((guid) => !!guid), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.startupAuditId) {
                this.store.dispatch(new src_app_store_actions_student_admissions_actions__WEBPACK_IMPORTED_MODULE_17__["SetSelectedNodeId"](this.startupAuditId));
                this.store.dispatch(new src_app_store_actions_student_audit_documents_actions__WEBPACK_IMPORTED_MODULE_11__["SetSelectedStudentAuditId"](this.startupAuditId));
                // Reset so navigation is pure after initial load
                this.startupAuditId = null;
            }
            this.store.dispatch(new src_app_store_actions_student_audits_actions__WEBPACK_IMPORTED_MODULE_12__["GetStudentAudits"]());
            this.store.dispatch(new src_app_store_actions_content_actions__WEBPACK_IMPORTED_MODULE_10__["GetTaskEnrichments"]());
            this.store.dispatch(new src_app_store_actions_student_audit_documents_actions__WEBPACK_IMPORTED_MODULE_11__["GetStudentAuditDocuments"]());
        })))
            .subscribe();
    }
    listenToAuditGroupChanges() {
        this.auditGroupsStream
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.ngUnsubscribe), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])((auditGroups) => !!auditGroups && !!auditGroups.length), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])((auditGroups) => {
            this.auditGroups = auditGroups.map((a) => {
                const existingGroup = this.auditGroups.find(g => g.categ === a.categ);
                return (Object.assign(Object.assign({}, a), { isExpanded: (((existingGroup === null || existingGroup === void 0 ? void 0 : existingGroup.isExpanded) === false) ? false : true) }));
            });
        }))
            .subscribe();
    }
    listenToSelectedAuditChanges() {
        this.selectedAuditStream
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.ngUnsubscribe), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])((value) => !!value), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(({ id }) => {
            this.selectedStudentAuditId = id;
            this.expandAuditGroupOfSelectedAudit(id);
        }))
            .subscribe();
    }
    expandAuditGroupOfSelectedAudit(selectedAuditId) {
        this.auditGroups = this.auditGroups.map((group) => {
            const isFromThisGroup = group.studentAudits.some(({ id }) => id === selectedAuditId);
            return isFromThisGroup ? Object.assign(Object.assign({}, group), { isExpanded: true }) : group;
        });
    }
    selectStudentAudit(id) {
        this.store.dispatch(new src_app_store_actions_student_admissions_actions__WEBPACK_IMPORTED_MODULE_17__["SetSelectedNodeId"](id));
        this.store.dispatch(new src_app_store_actions_student_audits_actions__WEBPACK_IMPORTED_MODULE_12__["SetSelectedStudentAuditId"](id));
        this.store.dispatch(new src_app_store_actions_student_audit_documents_actions__WEBPACK_IMPORTED_MODULE_11__["SetSelectedStudentAuditId"](id));
        if (this.platform.isWeb()) {
            this.store.dispatch(new src_app_store_actions_content_actions__WEBPACK_IMPORTED_MODULE_10__["SwitchContentView"]());
        }
        // FETCH AUDITS AGAIN TO UPDATE STATUS
        this.store.dispatch(new src_app_store_actions_student_audits_actions__WEBPACK_IMPORTED_MODULE_12__["GetStudentAudits"]());
    }
    toggleAuditGroupsView(categ) {
        this.auditGroups = this.auditGroups.map((props) => {
            const shouldToggle = props.categ === categ;
            const isExpanded = shouldToggle ? !props.isExpanded : props.isExpanded;
            return Object.assign(Object.assign({}, props), { isExpanded });
        });
    }
    isAuditLocked(audit) {
        return audit.statusText === src_app_models_student_audit__WEBPACK_IMPORTED_MODULE_8__["StatusText"].WAIT_FOR_UM;
    }
    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.unsubscribe();
    }
};
MuStudentAuditsComponent.ctorParameters = () => [
    { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Store"] },
    { type: src_app_services_platform_service__WEBPACK_IMPORTED_MODULE_9__["PlatformService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_16__["ActivatedRoute"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Select"])(src_app_store_state_student_admissions_state__WEBPACK_IMPORTED_MODULE_13__["StudentAdmissionsState"].selectedGuid)
], MuStudentAuditsComponent.prototype, "selectedGuidStream", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Select"])(src_app_store_state_student_admissions_state__WEBPACK_IMPORTED_MODULE_13__["StudentAdmissionsState"].selectedAdmissionLocked)
], MuStudentAuditsComponent.prototype, "selectedAdmissionLockedStream", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Select"])(src_app_store_state_student_audits_state__WEBPACK_IMPORTED_MODULE_15__["StudentAuditsState"].selectedAudit)
], MuStudentAuditsComponent.prototype, "selectedAuditStream", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Select"])(src_app_store_state_student_audits_state__WEBPACK_IMPORTED_MODULE_15__["StudentAuditsState"].auditGroups)
], MuStudentAuditsComponent.prototype, "auditGroupsStream", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Select"])(src_app_store_state_student_audit_documents_state__WEBPACK_IMPORTED_MODULE_14__["StudentAuditDocumentsState"].auditDocuments)
], MuStudentAuditsComponent.prototype, "auditDocumentsStream", void 0);
MuStudentAuditsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'mu-student-audit-groups',
        template: _raw_loader_student_audit_groups_component_html__WEBPACK_IMPORTED_MODULE_2__["default"],
        styles: [_student_audit_groups_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
    })
], MuStudentAuditsComponent);



/***/ }),

/***/ "7mVG":
/*!***************************************************************************!*\
  !*** ./src/app/ui-components/features/help-page/help-page.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  padding: 1rem;\n  justify-content: flex-start;\n}\n\nmu-raw-html {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcaGVscC1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLDJCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxXQUFBO0FBRUoiLCJmaWxlIjoiaGVscC1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxufVxyXG5tdS1yYXctaHRtbCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufSJdfQ== */");

/***/ }),

/***/ "A+4m":
/*!***************************************************************************!*\
  !*** ./src/app/ui-components/features/status-bar/status-bar.component.ts ***!
  \***************************************************************************/
/*! exports provided: MuStatusBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MuStatusBarComponent", function() { return MuStatusBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_status_bar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./status-bar.component.html */ "5Hg/");
/* harmony import */ var _status_bar_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./status-bar.component.scss */ "cKhE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngxs/store */ "AcyG");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_interfaces_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/interfaces/component */ "E7Uh");
/* harmony import */ var src_app_models_student_admission__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/models/student-admission */ "vYk/");
/* harmony import */ var src_app_store_state_student_admissions_state__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/store/state/student-admissions.state */ "qlWn");











let MuStatusBarComponent = class MuStatusBarComponent extends src_app_interfaces_component__WEBPACK_IMPORTED_MODULE_8__["ApiClass"] {
    constructor(store) {
        super(src_app_interfaces_component__WEBPACK_IMPORTED_MODULE_8__["ApiStatusStreamType"].ADMISSION);
        this.store = store;
        this.faInfo = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faInfoCircle"];
        this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
    }
    ngOnInit() {
        this.selectedAdmissionStatus.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this.ngUnsubscribe), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])((status) => {
            this.status = status;
        }))
            .subscribe();
        this.selectedAdmissionContextColor.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this.ngUnsubscribe), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])((contextColor) => {
            this.contextColor = contextColor;
            this.renderContextColor();
        }))
            .subscribe();
    }
    renderContextColor() {
        switch (this.contextColor) {
            case src_app_models_student_admission__WEBPACK_IMPORTED_MODULE_9__["ContextColor"].INFO: {
                return (this.contextColorData = 'info');
            }
            case src_app_models_student_admission__WEBPACK_IMPORTED_MODULE_9__["ContextColor"].SUCCESS: {
                return (this.contextColorData = 'success');
            }
            case src_app_models_student_admission__WEBPACK_IMPORTED_MODULE_9__["ContextColor"].DANGER: {
                return (this.contextColorData = 'danger');
            }
            case src_app_models_student_admission__WEBPACK_IMPORTED_MODULE_9__["ContextColor"].WARNING: {
                return (this.contextColorData = 'warning');
            }
            default:
                console.warn('audit has unexpected value. No icon loaded: ', this.contextColor);
                this.contextColorData = 'info';
        }
    }
    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.unsubscribe();
    }
};
MuStatusBarComponent.ctorParameters = () => [
    { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Store"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Select"])(src_app_store_state_student_admissions_state__WEBPACK_IMPORTED_MODULE_10__["StudentAdmissionsState"].selectedAdmissionStatus)
], MuStatusBarComponent.prototype, "selectedAdmissionStatus", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Select"])(src_app_store_state_student_admissions_state__WEBPACK_IMPORTED_MODULE_10__["StudentAdmissionsState"].selectedAdmissionContextColor)
], MuStatusBarComponent.prototype, "selectedAdmissionContextColor", void 0);
MuStatusBarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'mu-status-bar',
        template: _raw_loader_status_bar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_status_bar_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MuStatusBarComponent);



/***/ }),

/***/ "AWTm":
/*!***********************************************************************!*\
  !*** ./src/app/ui-components/features/message/message.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: block;\n  padding: 1rem 0;\n  border-color: var(--mu-color-border);\n  border-bottom-width: var(--mu-border-width);\n  border-bottom-style: solid;\n  color: var(--ion-color-primary);\n  cursor: pointer;\n}\n:host.native {\n  background-color: var(--ion-color-secondary);\n  border: none;\n  border-radius: var(--mu-border-radius);\n  box-shadow: none;\n  font-size: 1rem;\n  margin: 0 0 var(--mu-spacing-md) 0;\n  padding: var(--mu-spacing-md);\n}\n:host h4, :host h5 {\n  font-weight: 400;\n  color: var(--ion-color-primary);\n  font-size: 1em;\n  line-height: 1.25;\n}\n:host h5 {\n  color: var(--ion-color-medium);\n}\n:host .unread .marker {\n  width: 1.125rem;\n  border-left: 0.125rem solid var(--ion-color-danger);\n  padding-right: 1rem;\n  align-self: stretch;\n}\n:host .unread h4 {\n  font-weight: 600;\n}\n:host .message {\n  position: relative;\n  transition: 150ms ease all;\n}\n:host:hover .message, :host:focus .message, :host:active .message {\n  transform: translateX(-0.125rem);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcbWVzc2FnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0Esb0NBQUE7RUFDQSwyQ0FBQTtFQUNBLDBCQUFBO0VBWUEsK0JBQUE7RUFDQSxlQUFBO0FBVkY7QUFERTtFQUNFLDRDQUFBO0VBQ0EsWUFBQTtFQUNBLHNDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0NBQUE7RUFDQSw2QkFBQTtBQUdKO0FBRUU7RUFDRSxnQkFBQTtFQUNBLCtCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBQUo7QUFFRTtFQUNFLDhCQUFBO0FBQUo7QUFHSTtFQUNJLGVBQUE7RUFDQSxtREFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFEUjtBQUdJO0VBQ0EsZ0JBQUE7QUFESjtBQUlFO0VBQ0Usa0JBQUE7RUFDQSwwQkFBQTtBQUZKO0FBT0k7RUFDSSxnQ0FBQTtBQUxSIiwiZmlsZSI6Im1lc3NhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAxcmVtIDA7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tbXUtY29sb3ItYm9yZGVyKTtcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogdmFyKC0tbXUtYm9yZGVyLXdpZHRoKTtcbiAgYm9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7XG5cbiAgJi5uYXRpdmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1tdS1ib3JkZXItcmFkaXVzKTtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBtYXJnaW46IDAgMCB2YXIoLS1tdS1zcGFjaW5nLW1kKSAwO1xuICAgIHBhZGRpbmc6IHZhcigtLW11LXNwYWNpbmctbWQpO1xuICB9XG5cbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBoNCwgaDUge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICBsaW5lLWhlaWdodDogMS4yNTtcbiAgfVxuICBoNSB7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICB9XG4gIC51bnJlYWQge1xuICAgIC5tYXJrZXIge1xuICAgICAgICB3aWR0aDogMS4xMjVyZW07XG4gICAgICAgIGJvcmRlci1sZWZ0OiAwLjEyNXJlbSBzb2xpZCB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMXJlbTtcbiAgICAgICAgYWxpZ24tc2VsZjogc3RyZXRjaDtcbiAgICB9XG4gICAgaDQge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgfVxuICB9XG4gIC5tZXNzYWdlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdHJhbnNpdGlvbjogMTUwbXMgZWFzZSBhbGw7XG4gIH1cbiAgJjpob3ZlcixcbiAgJjpmb2N1cyxcbiAgJjphY3RpdmUge1xuICAgIC5tZXNzYWdlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0wLjEyNXJlbSk7XG4gICAgfVxuICB9XG59XG4iXX0= */");

/***/ }),

/***/ "BPi0":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ui-components/features/status-notification/status-notification.component.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-grid>\n  <ion-row\n    id=\"mu-status-container\"\n    class=\"mu-border-radius mu-flex align-center\"\n  >\n    <ion-col class=\"mu-py2 mu-px3\">\n      <p class=\"g-auto\">\n        <span class=\"mu-color1\">\n          <fa-icon\n          *ngIf=\"iconData.src\"\n          [class]=\"iconData.class\"\n          [icon]=\"iconData.src\"\n        ></fa-icon>\n          Status:\n        </span>\n        <span class=\"mu-color1 mu-t-preline\">\n          {{ translatedStatusText }}\n        </span>\n      </p>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n");

/***/ }),

/***/ "CBNs":
/*!***************************************************************************************!*\
  !*** ./src/app/ui-components/features/progression-bar/progression-bar.component.scss ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  padding: var(--mu-spacing-lg) var(--mu-spacing-xl);\n  display: block;\n  background: #040d3e;\n}\n\n.progression-bar {\n  width: 100%;\n  height: 1rem;\n  padding: 0.25rem;\n  background-color: var(--ion-color-secondary);\n  border-radius: 0.5rem;\n}\n\n.progression-bar-inner {\n  background-color: var(--ion-color-danger);\n  background: linear-gradient(90deg, #d96d3f 0%, #d54e0e 100%);\n  border-radius: 0.5rem;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxccHJvZ3Jlc3Npb24tYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0RBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFDQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0Q0FBQTtFQUNBLHFCQUFBO0FBRUo7O0FBREk7RUFDSSx5Q0FBQTtFQUNBLDREQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0FBR1IiLCJmaWxlIjoicHJvZ3Jlc3Npb24tYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgcGFkZGluZzogdmFyKC0tbXUtc3BhY2luZy1sZykgdmFyKC0tbXUtc3BhY2luZy14bCk7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJhY2tncm91bmQ6ICMwNDBkM2U7XHJcbn1cclxuLnByb2dyZXNzaW9uLWJhciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMXJlbTtcclxuICAgIHBhZGRpbmc6IDAuMjVyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuICAgICYtaW5uZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSgyMTcsMTA5LDYzLDEpIDAlLCByZ2JhKDIxMyw3OCwxNCwxKSAxMDAlKTs7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgIH1cclxufSJdfQ== */");

/***/ }),

/***/ "DoAi":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ui-components/features/help-page/help-page.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngFor=\"let helpObject of helpContent\">\r\n\r\n<ion-row>\r\n    <mu-raw-html\r\n        [variant]=\"'header'\"\r\n        [unsafeHtml]=\"helpObject.title\"\r\n    ></mu-raw-html>\r\n</ion-row>\r\n<ion-row\r\nclass=\"ion-justify-content-center\"\r\n#content\r\n>\r\n    <mu-raw-html [unsafeHtml]=\"helpObject.content\"></mu-raw-html>\r\n</ion-row>\r\n\r\n</ng-container>");

/***/ }),

/***/ "E7Uh":
/*!*****************************************!*\
  !*** ./src/app/interfaces/component.ts ***!
  \*****************************************/
/*! exports provided: ApiStatusStreamType, ApiClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiStatusStreamType", function() { return ApiStatusStreamType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiClass", function() { return ApiClass; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs/store */ "AcyG");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _store_state_content_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/state/content.state */ "bE18");
/* harmony import */ var _store_state_message_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/state/message.state */ "Vnf1");
/* harmony import */ var _store_state_student_admissions_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/state/student-admissions.state */ "qlWn");
/* harmony import */ var _store_state_student_audit_documents_state__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store/state/student-audit-documents.state */ "VWKi");
/* harmony import */ var _store_state_student_audits_state__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../store/state/student-audits.state */ "qGxV");








var ApiStatusStreamType;
(function (ApiStatusStreamType) {
    ApiStatusStreamType[ApiStatusStreamType["ADMISSION"] = 0] = "ADMISSION";
    ApiStatusStreamType[ApiStatusStreamType["AUDIT"] = 1] = "AUDIT";
    ApiStatusStreamType[ApiStatusStreamType["AUDITDOCUMENT"] = 2] = "AUDITDOCUMENT";
    ApiStatusStreamType[ApiStatusStreamType["CONTENT"] = 3] = "CONTENT";
    ApiStatusStreamType[ApiStatusStreamType["MESSAGES"] = 4] = "MESSAGES";
})(ApiStatusStreamType || (ApiStatusStreamType = {}));
class ApiClass {
    constructor(variant) {
        this.isFetching = false;
        this.isInitialised = false;
        this.hasApiError = false;
        this.hasConnectionError = false;
        this.listenToApiStatusChanges(variant);
    }
    listenToApiStatusChanges(variant) {
        let observable;
        switch (variant) {
            case ApiStatusStreamType.ADMISSION: {
                observable = this.admissionApiStatusStream;
                break;
            }
            case ApiStatusStreamType.AUDIT: {
                observable = this.auditApiStatusStream;
                break;
            }
            case ApiStatusStreamType.CONTENT: {
                observable = this.auditApiStatusStream;
                break;
            }
            case ApiStatusStreamType.AUDITDOCUMENT: {
                observable = this.auditDocumentApiStatusStream;
                break;
            }
            case ApiStatusStreamType.MESSAGES: {
                observable = this.messageApiStatusStream;
                break;
            }
            default: {
                throw new Error('observable variant not supported');
            }
        }
        this.subscription = observable
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(({ isFetching, isInitialised }) => {
            this.isFetching = isFetching;
            this.isInitialised = isInitialised;
        }))
            .subscribe();
    }
}
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Select"])(_store_state_student_admissions_state__WEBPACK_IMPORTED_MODULE_5__["StudentAdmissionsState"].apiStatus)
], ApiClass.prototype, "admissionApiStatusStream", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Select"])(_store_state_student_audits_state__WEBPACK_IMPORTED_MODULE_7__["StudentAuditsState"].apiStatus)
], ApiClass.prototype, "auditApiStatusStream", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Select"])(_store_state_content_state__WEBPACK_IMPORTED_MODULE_3__["ContentState"].apiStatus)
], ApiClass.prototype, "contentApiStatusStream", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Select"])(_store_state_student_audit_documents_state__WEBPACK_IMPORTED_MODULE_6__["StudentAuditDocumentsState"].apiStatus)
], ApiClass.prototype, "auditDocumentApiStatusStream", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Select"])(_store_state_message_state__WEBPACK_IMPORTED_MODULE_4__["MessageState"].apiStatus)
], ApiClass.prototype, "messageApiStatusStream", void 0);


/***/ }),

/***/ "FKDc":
/*!*************************************************************************************************!*\
  !*** ./src/app/ui-components/features/feedback-notification/feedback-notification.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: MuFeedbackNotificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MuFeedbackNotificationComponent", function() { return MuFeedbackNotificationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_feedback_notification_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./feedback-notification.component.html */ "mDD6");
/* harmony import */ var _feedback_notification_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./feedback-notification.component.scss */ "1O9S");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let MuFeedbackNotificationComponent = class MuFeedbackNotificationComponent {
    constructor() {
        this.labelText = 'Feedback:';
        this.feedbackMultipart = false;
    }
    ngOnInit() {
        if (Array.isArray(this.feedbackText)) {
            this.feedbackMultipart = true;
        }
    }
};
MuFeedbackNotificationComponent.ctorParameters = () => [];
MuFeedbackNotificationComponent.propDecorators = {
    labelText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    feedbackText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    icon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    iconPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
MuFeedbackNotificationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'mu-feedback-notification',
        template: _raw_loader_feedback_notification_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_feedback_notification_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MuFeedbackNotificationComponent);



/***/ }),

/***/ "GQzY":
/*!*************************************************************************************!*\
  !*** ./src/app/ui-components/features/progression-bar/progression-bar.component.ts ***!
  \*************************************************************************************/
/*! exports provided: MuProgressionBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MuProgressionBarComponent", function() { return MuProgressionBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_progression_bar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./progression-bar.component.html */ "LY4y");
/* harmony import */ var _progression_bar_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./progression-bar.component.scss */ "CBNs");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngxs/store */ "AcyG");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_interfaces_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/interfaces/component */ "E7Uh");
/* harmony import */ var src_app_store_state_student_audits_state__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/store/state/student-audits.state */ "qGxV");
/* harmony import */ var src_app_models_student_audit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/models/student-audit */ "G4S2");










let MuProgressionBarComponent = class MuProgressionBarComponent extends src_app_interfaces_component__WEBPACK_IMPORTED_MODULE_7__["ApiClass"] {
    constructor() {
        super(src_app_interfaces_component__WEBPACK_IMPORTED_MODULE_7__["ApiStatusStreamType"].AUDIT);
        this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.progress = 0;
        this.auditGroups = [];
    }
    ngOnInit() {
        this.listenToAuditGroupChanges();
    }
    listenToAuditGroupChanges() {
        this.auditGroupsStream
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.ngUnsubscribe), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])((auditGroups) => !!auditGroups && !!auditGroups.length), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])((auditGroups) => {
            this.auditGroups = auditGroups.map((a) => (Object.assign(Object.assign({}, a), { isExpanded: false })));
            this.calculateAdmissionProgress();
        }))
            .subscribe();
    }
    calculateAdmissionProgress() {
        const audits = [].concat(...this.auditGroups.map(group => group.studentAudits));
        const auditsComplete = audits.filter(audit => audit.statusText === src_app_models_student_audit__WEBPACK_IMPORTED_MODULE_9__["StatusText"].COMPLETED);
        this.progress = Math.round((auditsComplete.length / audits.length) * 100);
    }
    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.unsubscribe();
    }
};
MuProgressionBarComponent.ctorParameters = () => [];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Select"])(src_app_store_state_student_audits_state__WEBPACK_IMPORTED_MODULE_8__["StudentAuditsState"].auditGroups)
], MuProgressionBarComponent.prototype, "auditGroupsStream", void 0);
MuProgressionBarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'mu-progression-bar',
        template: _raw_loader_progression_bar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_progression_bar_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MuProgressionBarComponent);



/***/ }),

/***/ "HHE/":
/*!*********************************************************************************************!*\
  !*** ./src/app/ui-components/features/student-admissions/student-admissions.component.scss ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".root {\n  height: 100%;\n  display: grid;\n  grid-template-rows: auto 1fr;\n}\n.root.is-native-view .select-wrapper {\n  padding: 0;\n}\nion-label {\n  display: none;\n}\n.select-wrapper {\n  padding: 0 var(--mu-spacing-md);\n}\n@media screen and (min-width: 768px) {\n  .select-wrapper {\n    margin-bottom: var(--mu-spacing-lg);\n    padding: 0 var(--mu-spacing-xl);\n  }\n}\n.mu-select {\n  /* Best to include the browser prefix for cross-browser compatibility */\n  appearance: none;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  border-radius: var(--mu-border-radius);\n  color: var(--ion-color-primary);\n  padding: var(--mu-spacing-md);\n  width: 100%;\n  background: var(--ion-color-primary-contrast);\n}\n.mu-select:disabled {\n  opacity: 1;\n}\n.mu-student-audit-groups {\n  padding-top: var(--mu-spacing-lg);\n}\n@media screen and (min-width: 768px) {\n  .mu-student-audit-groups {\n    padding-top: 0;\n  }\n}\n.select-admission {\n  display: flex;\n  font-size: 14px;\n  color: var(--ion-color-primary);\n  background: white;\n  margin: 0px;\n  padding: var(--mu-spacing-md);\n  border-radius: var(--mu-border-radius);\n  position: relative;\n}\n.select-admission div {\n  line-height: 18px;\n}\n.select-admission .education-program {\n  border-right: 2px solid #aaa;\n  width: 65%;\n}\n.select-admission .education-period {\n  font-size: 14px;\n  width: 35%;\n  padding-left: 5px;\n}\n.select-admission .education-selector {\n  height: 100%;\n  vertical-align: middle;\n  color: #aaa;\n  padding-left: var(--mu-spacing-xxs);\n}\n.select-admission:focus {\n  background: var(--ion-color-light-shade);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcc3R1ZGVudC1hZG1pc3Npb25zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSw0QkFBQTtBQUNGO0FBQ0k7RUFDRSxVQUFBO0FBQ047QUFJQTtFQUNFLGFBQUE7QUFERjtBQUlBO0VBQ0UsK0JBQUE7QUFERjtBQUdFO0VBSEY7SUFJSSxtQ0FBQTtJQUNBLCtCQUFBO0VBQUY7QUFDRjtBQUdBO0VBQ0UsdUVBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQ0FBQTtFQUNBLCtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxXQUFBO0VBQ0EsNkNBQUE7QUFBRjtBQUVFO0VBQ0UsVUFBQTtBQUFKO0FBR0E7RUFDRSxpQ0FBQTtBQUFGO0FBRUU7RUFIRjtJQUlJLGNBQUE7RUFDRjtBQUNGO0FBRUE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLCtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7RUFDQSxzQ0FBQTtFQUNBLGtCQUFBO0FBQ0Y7QUFBRTtFQUNFLGlCQUFBO0FBRUo7QUFDRTtFQUNFLDRCQUFBO0VBQ0EsVUFBQTtBQUNKO0FBRUU7RUFDRSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0FBQUo7QUFHRTtFQUNFLFlBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxtQ0FBQTtBQURKO0FBR0U7RUFDRSx3Q0FBQTtBQURKIiwiZmlsZSI6InN0dWRlbnQtYWRtaXNzaW9ucy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb290IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyO1xuICAmLmlzLW5hdGl2ZS12aWV3IHtcbiAgICAuc2VsZWN0LXdyYXBwZXIge1xuICAgICAgcGFkZGluZzogMDtcbiAgICB9XG4gIH1cbn1cblxuaW9uLWxhYmVsIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnNlbGVjdC13cmFwcGVyIHtcbiAgcGFkZGluZzogMCB2YXIoLS1tdS1zcGFjaW5nLW1kKTtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAgIG1hcmdpbi1ib3R0b206IHZhcigtLW11LXNwYWNpbmctbGcpO1xuICAgIHBhZGRpbmc6IDAgdmFyKC0tbXUtc3BhY2luZy14bCk7XG4gIH1cbn1cblxuLm11LXNlbGVjdCB7XG4gIC8qIEJlc3QgdG8gaW5jbHVkZSB0aGUgYnJvd3NlciBwcmVmaXggZm9yIGNyb3NzLWJyb3dzZXIgY29tcGF0aWJpbGl0eSAqL1xuICBhcHBlYXJhbmNlOiBub25lO1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tbXUtYm9yZGVyLXJhZGl1cyk7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIHBhZGRpbmc6IHZhcigtLW11LXNwYWNpbmctbWQpO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QpO1xuXG4gICY6ZGlzYWJsZWQge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbi5tdS1zdHVkZW50LWF1ZGl0LWdyb3VwcyB7XG4gIHBhZGRpbmctdG9wOiB2YXIoLS1tdS1zcGFjaW5nLWxnKTtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAgIHBhZGRpbmctdG9wOiAwO1xuICB9XG59XG5cbi5zZWxlY3QtYWRtaXNzaW9ue1xuICBkaXNwbGF5OiBmbGV4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIGJhY2tncm91bmQ6ICB3aGl0ZTtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IHZhcigtLW11LXNwYWNpbmctbWQpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1tdS1ib3JkZXItcmFkaXVzKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXZ7XG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIH1cblxuICAuZWR1Y2F0aW9uLXByb2dyYW17XG4gICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgI2FhYTtcbiAgICB3aWR0aDogNjUlO1xuICB9XG5cbiAgLmVkdWNhdGlvbi1wZXJpb2R7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHdpZHRoOiAzNSU7XG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIH1cblxuICAuZWR1Y2F0aW9uLXNlbGVjdG9ye1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIGNvbG9yOiAjYWFhO1xuICAgIHBhZGRpbmctbGVmdDogdmFyKC0tbXUtc3BhY2luZy14eHMpO1xuICB9XG4gICY6Zm9jdXMge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XG4gIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ "IcTe":
/*!***********************************************************!*\
  !*** ./src/app/ui-components/features/features.module.ts ***!
  \***********************************************************/
/*! exports provided: FeaturesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturesModule", function() { return FeaturesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var src_app_pipes_translateList_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/pipes/translateList.pipe */ "YVo/");
/* harmony import */ var _elements_elements_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../elements/elements.module */ "nLx+");
/* harmony import */ var _content_content_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./content/content.component */ "pOOd");
/* harmony import */ var _feedback_notification_feedback_notification_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./feedback-notification/feedback-notification.component */ "FKDc");
/* harmony import */ var _file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./file-upload/file-upload.component */ "JoJ0");
/* harmony import */ var _help_page_help_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./help-page/help-page.component */ "q03I");
/* harmony import */ var _message_center_message_center_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./message-center/message-center.component */ "y9j2");
/* harmony import */ var _message_message_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./message/message.component */ "ubSd");
/* harmony import */ var _progression_bar_progression_bar_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./progression-bar/progression-bar.component */ "GQzY");
/* harmony import */ var _status_bar_status_bar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./status-bar/status-bar.component */ "A+4m");
/* harmony import */ var _status_notification_status_notification_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./status-notification/status-notification.component */ "TphO");
/* harmony import */ var _student_admissions_student_admissions_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./student-admissions/student-admissions.component */ "kgpU");
/* harmony import */ var _student_audit_groups_student_audit_groups_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./student-audit-groups/student-audit-groups.component */ "71i/");
/* harmony import */ var _top_menu_top_menu_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./top-menu/top-menu.component */ "eocg");
/* harmony import */ var _user_uploads_user_task_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./user-uploads/user-task.component */ "avUC");
/* harmony import */ var _profile_picture_upload_profile_picture_upload_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./profile-picture-upload/profile-picture-upload.component */ "nikB");























let FeaturesModule = class FeaturesModule {
};
FeaturesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _content_content_component__WEBPACK_IMPORTED_MODULE_9__["MuContentComponent"],
            _feedback_notification_feedback_notification_component__WEBPACK_IMPORTED_MODULE_10__["MuFeedbackNotificationComponent"],
            _file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_11__["MuFileUploadComponent"],
            _help_page_help_page_component__WEBPACK_IMPORTED_MODULE_12__["MuHelpPageComponent"],
            _message_message_component__WEBPACK_IMPORTED_MODULE_14__["MuMessageComponent"],
            _message_center_message_center_component__WEBPACK_IMPORTED_MODULE_13__["MuMessageCenterComponent"],
            _progression_bar_progression_bar_component__WEBPACK_IMPORTED_MODULE_15__["MuProgressionBarComponent"],
            _status_bar_status_bar_component__WEBPACK_IMPORTED_MODULE_16__["MuStatusBarComponent"],
            _status_notification_status_notification_component__WEBPACK_IMPORTED_MODULE_17__["MuStatusNotificationComponent"],
            _student_admissions_student_admissions_component__WEBPACK_IMPORTED_MODULE_18__["MuStudentAdmissionsComponent"],
            _student_audit_groups_student_audit_groups_component__WEBPACK_IMPORTED_MODULE_19__["MuStudentAuditsComponent"],
            _top_menu_top_menu_component__WEBPACK_IMPORTED_MODULE_20__["MuTopMenuComponent"],
            _user_uploads_user_task_component__WEBPACK_IMPORTED_MODULE_21__["MuUserTaskComponent"],
            src_app_pipes_translateList_pipe__WEBPACK_IMPORTED_MODULE_7__["MuTranslateListPipe"],
            _profile_picture_upload_profile_picture_upload_component__WEBPACK_IMPORTED_MODULE_22__["MuProfilePictureUploadComponent"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _elements_elements_module__WEBPACK_IMPORTED_MODULE_8__["ElementsModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"],
        ],
        exports: [
            _content_content_component__WEBPACK_IMPORTED_MODULE_9__["MuContentComponent"],
            _feedback_notification_feedback_notification_component__WEBPACK_IMPORTED_MODULE_10__["MuFeedbackNotificationComponent"],
            _file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_11__["MuFileUploadComponent"],
            _help_page_help_page_component__WEBPACK_IMPORTED_MODULE_12__["MuHelpPageComponent"],
            _message_message_component__WEBPACK_IMPORTED_MODULE_14__["MuMessageComponent"],
            _message_center_message_center_component__WEBPACK_IMPORTED_MODULE_13__["MuMessageCenterComponent"],
            _progression_bar_progression_bar_component__WEBPACK_IMPORTED_MODULE_15__["MuProgressionBarComponent"],
            _status_bar_status_bar_component__WEBPACK_IMPORTED_MODULE_16__["MuStatusBarComponent"],
            _status_notification_status_notification_component__WEBPACK_IMPORTED_MODULE_17__["MuStatusNotificationComponent"],
            _student_admissions_student_admissions_component__WEBPACK_IMPORTED_MODULE_18__["MuStudentAdmissionsComponent"],
            _student_audit_groups_student_audit_groups_component__WEBPACK_IMPORTED_MODULE_19__["MuStudentAuditsComponent"],
            _top_menu_top_menu_component__WEBPACK_IMPORTED_MODULE_20__["MuTopMenuComponent"],
            _user_uploads_user_task_component__WEBPACK_IMPORTED_MODULE_21__["MuUserTaskComponent"],
            src_app_pipes_translateList_pipe__WEBPACK_IMPORTED_MODULE_7__["MuTranslateListPipe"],
            _profile_picture_upload_profile_picture_upload_component__WEBPACK_IMPORTED_MODULE_22__["MuProfilePictureUploadComponent"],
        ],
    })
], FeaturesModule);



/***/ }),

/***/ "JoJ0":
/*!*****************************************************************************!*\
  !*** ./src/app/ui-components/features/file-upload/file-upload.component.ts ***!
  \*****************************************************************************/
/*! exports provided: MuFileUploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MuFileUploadComponent", function() { return MuFileUploadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_file_upload_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./file-upload.component.html */ "xW66");
/* harmony import */ var _file_upload_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./file-upload.component.scss */ "0hW1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngxs/store */ "AcyG");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_services_form_data_upload_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/form-data-upload.service */ "hkkO");
/* harmony import */ var src_app_store_state_data_upload_state__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/store/state/data-upload.state */ "Xeri");
/* harmony import */ var src_app_store_state_participant_state__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/store/state/participant.state */ "CKn5");
/* harmony import */ var src_app_store_state_student_audits_state__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/store/state/student-audits.state */ "qGxV");












let MuFileUploadComponent = class MuFileUploadComponent {
    constructor(store, service, translate) {
        this.store = store;
        this.service = service;
        this.translate = translate;
        this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.disabled = false;
        this.validationErrors = [];
        this.validationCodes = [];
        this.trashIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faTrash"];
        this.uploadIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faUpload"];
        this.viewIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faEye"];
        this.spinnerIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faSpinner"];
        this.allowedFileExtensions = [".jpg", ".jpeg", ".pdf", ".png"];
        this.hasUploadedSuccesfully = false;
    }
    ngOnInit() {
        this.service.init(this);
    }
    openFileSelectDialogue() {
        this.fileInput.nativeElement.click();
    }
    removeSelectedFile() {
        console.log('under construction');
    }
    handleSelectFile() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const { files } = this.fileInput.nativeElement;
            const formData = new FormData();
            formData.append('admissionNodeID', this.selectedAuditId);
            formData.append('admissionGuid', this.selectedGuid);
            formData.append('myFile', files[0]);
            this.validateSelectedFile(formData);
            if (!this.hasValidationError) {
                yield this.sendFormData(formData);
            }
        });
    }
    validateSelectedFile(formData) {
        this.hasValidationError = false;
        this.validationErrors = [];
        this.validationCodes = [];
        const file = formData.get('myFile');
        if (((file.size / 1024) / 1024) > 10) {
            this.hasValidationError = true;
            this.setErrorMessage('file-size-error');
        }
        const extension = ('.' + file.name.split('.').pop()).toLocaleLowerCase();
        if (!this.allowedFileExtensions.includes(extension)) {
            this.hasValidationError = true;
            this.setErrorMessage('file-type-error', this.allowedFileExtensions.join(', '));
        }
    }
    setErrorMessage(message, value) {
        this.validationCodes = [...this.validationCodes, { label: message, value }];
        this.translate.get('file-upload.' + message, { value: value }).subscribe((res) => {
            this.validationErrors = [...this.validationErrors, res];
        });
    }
    sendFormData(formData) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.isDispatching = true;
            this.hasDispatchError = false;
            try {
                yield this.service.sendFormData(formData);
                //this.isDispatching = false;
            }
            catch (e) {
                this.hasDispatchError = true;
                this.isDispatching = false;
            }
        });
    }
    viewUpload() {
        if (!this.isDownloading && this.fileContents) {
            this.isDownloading = true;
            const fileName = this.fileContents.originalName ? this.fileContents.originalName : this.fileContents.name;
            this.service.downloadFile(this.fileContents.id).then((result) => {
                result.subscribe({
                    next: (data) => {
                        this.isDownloading = false;
                        this.service.parseBlob(data, fileName);
                    },
                    error: (e) => {
                        this.isDownloading = false;
                        console.warn(e.message || e);
                    },
                });
            });
        }
    }
    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }
};
MuFileUploadComponent.ctorParameters = () => [
    { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_6__["Store"] },
    { type: src_app_services_form_data_upload_service__WEBPACK_IMPORTED_MODULE_8__["FormDataUploadService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] }
];
MuFileUploadComponent.propDecorators = {
    fileInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['fileInput',] }],
    fileId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    fileContents: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_6__["Select"])(src_app_store_state_student_audits_state__WEBPACK_IMPORTED_MODULE_11__["StudentAuditsState"].selectedAudit)
], MuFileUploadComponent.prototype, "selectedAuditStream", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_6__["Select"])(src_app_store_state_data_upload_state__WEBPACK_IMPORTED_MODULE_9__["DataUploadState"].dataUploadState)
], MuFileUploadComponent.prototype, "dataUploadStateStream", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_6__["Select"])(src_app_store_state_participant_state__WEBPACK_IMPORTED_MODULE_10__["ParticipantState"].languageCode)
], MuFileUploadComponent.prototype, "dataLanguageCodeStream", void 0);
MuFileUploadComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'mu-file-upload',
        template: _raw_loader_file_upload_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_file_upload_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MuFileUploadComponent);



/***/ }),

/***/ "KLuV":
/*!***********************************************************************!*\
  !*** ./src/app/ui-components/features/content/content.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".responsive-flex {\n  display: block;\n}\n@media screen and (min-width: 768px) {\n  .responsive-flex {\n    display: flex;\n    align-items: center;\n  }\n}\n.inline-grid {\n  display: inline-grid;\n  align-items: center;\n  gap: 1rem;\n}\n.inline-grid.fr-auto {\n  grid-template-columns: 1fr auto;\n}\n.grid {\n  display: grid;\n  align-items: center;\n  gap: 1rem;\n}\n.sticky.sticky-bottom-cover::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: calc(100% + 0.5rem);\n  background-color: var(--ion-color-secondary);\n  z-index: -1;\n}\n@media screen and (max-width: 768px) {\n  .sticky {\n    position: relative;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcY29udGVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUFDRjtBQUFFO0VBRkY7SUFHSSxhQUFBO0lBQ0EsbUJBQUE7RUFHRjtBQUNGO0FBREE7RUFDRSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBQUlGO0FBSEU7RUFDRSwrQkFBQTtBQUtKO0FBRkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0FBS0Y7QUFESTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtFQUNBLDRDQUFBO0VBQ0EsV0FBQTtBQUlOO0FBQUU7RUFaRjtJQWFJLGtCQUFBO0VBR0Y7QUFDRiIsImZpbGUiOiJjb250ZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlc3BvbnNpdmUtZmxleCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxufVxuLmlubGluZS1ncmlkIHtcbiAgZGlzcGxheTogaW5saW5lLWdyaWQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMXJlbTtcbiAgJi5mci1hdXRve1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIGF1dG87XG4gIH1cbn1cbi5ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxcmVtO1xufVxuLnN0aWNreSB7XG4gICYuc3RpY2t5LWJvdHRvbS1jb3ZlciB7XG4gICAgJjo6YWZ0ZXIge1xuICAgICAgY29udGVudDonJztcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgKyAwLjVyZW0pO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gICAgICB6LWluZGV4OiAtMTtcbiAgICB9XG4gIH1cblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxufVxuIl19 */");

/***/ }),

/***/ "LSVO":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ui-components/features/user-uploads/user-task.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"files\">\n    <mu-file-upload *ngFor=\"let file of files\" [fileId]=\"file.id\" [fileContents]=\"file\" [disabled]=\"isModificationAllowed(audit.statusText)\"></mu-file-upload>\n</ng-container>\n<ng-container *ngIf=\"isModificationAllowed(audit.statusText)\">\n    <mu-file-upload *ngIf=\"isUploadAllowed(audit.nodeTaskType) && this.audit.nodeDocType != '98'\"></mu-file-upload>\n    <mu-profile-picture-upload *ngIf=\"isUploadAllowed(audit.nodeTaskType) && this.audit.nodeDocType === '98'\"></mu-profile-picture-upload>\n    <ng-container *ngIf=\"linkShouldBeGenerated\">\n        <mu-button (click)=\"openExternalLink()\">\n            {{ linkLabel }}\n        </mu-button>\n    </ng-container>\n    <ng-container *ngIf=\"iosExceptionShouldBeActive\">\n        {{ \"task.ios-payment-message\" | translate }}\n        <mu-button (click)=\"openExternalLink(linkToWebVersion)\">\n            {{ \"task.ios-payment-button\" | translate }}\n        </mu-button>\n    </ng-container>\n</ng-container>\n\n");

/***/ }),

/***/ "LY4y":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ui-components/features/progression-bar/progression-bar.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mu-flex justify-space-between align-end mu-pb1\">\n  <p>{{ 'home-page.application-progress' | translate }}</p>\n  <p>{{progress}}%</p>\n</div>\n<div class=\"progression-bar\">\n  <div class=\"progression-bar-inner\" [style.width]=\"progress + '%'\"></div>\n</div>");

/***/ }),

/***/ "LsEg":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ui-components/features/message-center/message-center.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"!isFetching\">\n  <header>\n    <div class=\"header-section\" [class.message-active]=\"activeMessage\">\n      <div class=\"header-sub-section\" *ngIf=\"activeMessage\">\n        <mu-button class=\"back-btn\" (click)=\"back()\" label=\"Back\"\n        variant=\"secondary\">\n        {{\"elements.back\"|translate}}\n        </mu-button>\n      </div>\n      <div class=\"header-sub-section\">\n        <h3 *ngIf=\"renderWebview\">{{ \"message-center.messages\" | translate }}</h3>\n        <p class=\"mu-fs1\" *ngIf=\"unreadMessagesCount > 0\">{{ unreadMessagesCount === 1?(\"message-center.unread-message\" | translate):(\"message-center.unread-messages\" | translate: { count: unreadMessagesCount}) }}</p>\n      </div>\n      <div class=\"header-sub-section\">\n        <mu-button class=\"close-btn\" (click)=\"close()\" label=\"Close\"\n        variant=\"secondary\">\n        {{\"elements.close\"|translate}}\n        </mu-button>\n      </div>\n    </div>\n    <div class=\"header-section alt-section\" [class.mu-bg-color]=\"renderWebview\" [class.mu-b-color]=\"renderWebview\" *ngIf=\"!activeMessage\">\n      <p class=\"mu-fs1\">{{ \"message-center.filter\" | translate }}</p>\n      <ion-select [(ngModel)]=\"filter\" class=\"mu-bg2 mu-b-color\">\n        <ion-select-option value=\"all\">{{ \"message-center.filter-placeholder\"|translate}}</ion-select-option>\n        <ng-container *ngFor=\"let option of selectOptions\">\n          <ion-select-option [value]=\"option.guid\">{{option.label}} | {{ \"academic-period.\" + option.educationProgramAcademicPeriod | translate }} {{option.educationProgramYear}}</ion-select-option>\n        </ng-container>\n      </ion-select>\n    </div>\n  </header>\n  <main [class.native]=\"!renderWebview\">\n      <ul *ngIf=\"messages && selectOptions && !activeMessage\">\n        <li *ngFor=\"let message of messages\">\n          <mu-message [message]=\"message\" [admission]=\"getAdmissionNameById(message.admission_id)\" (click)=\"activateMessage(message)\" [class.native]=\"!renderWebview\"></mu-message>\n        </li>\n      </ul>\n      <div class=\"message-body\" *ngIf=\"activeMessage\">\n        <div class=\"message-body-header message mu-flex align-center mu-b-color \">\n          <div class=\"content mu-flex-grow mu-pr3\">\n            <h5>{{getAdmissionNameById(activeMessage.admission_id)}} | {{ \"academic-period.\" + activeMessage.academicPeriod | translate }} {{activeMessage.studyYear}}</h5>\n            <h4>{{activeMessage.subject}}</h4>\n          </div>\n          <div class=\"content ion-text-right\">\n            {{activeMessage.send_dt | date:'dd-MMM-yy'}}<br>{{activeMessage.send_dt | date:'HH:mm'}}\n          </div>\n        </div>\n        <div class=\"message-body-content\">\n          <mu-raw-html [unsafeHtml]=\"activeMessage.content\"></mu-raw-html>\n        </div>\n        <div class=\"message-body-footer\" *ngIf=\"activeMessage.node_id\">\n          <mu-button\n            (click)=\"toTask()\"\n            label=\"Send\"\n          >\n            {{ \"message-center.to-task\" | translate}}\n          </mu-button>\n\n          <mu-dots class=\"mu-dots\" direction=\"horizontal\"></mu-dots>\n        </div>\n      </div>\n  </main>\n</ng-container>\n<ion-row class=\"ion-justify-content-center row-span-3\" *ngIf=\"isFetching\">\n  <ion-col class=\"mu-flex align-center justify-center\">\n    <mu-spinner variant=\"page\">\n      <h5 class=\"ion-text-center\">\n        {{ \"message-center.loading\" | translate }}\n      </h5>\n    </mu-spinner>\n  </ion-col>\n</ion-row>");

/***/ }),

/***/ "TphO":
/*!*********************************************************************************************!*\
  !*** ./src/app/ui-components/features/status-notification/status-notification.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: MuStatusNotificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MuStatusNotificationComponent", function() { return MuStatusNotificationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_status_notification_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./status-notification.component.html */ "BPi0");
/* harmony import */ var _status_notification_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./status-notification.component.scss */ "2Y+D");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "twK/");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngxs/store */ "AcyG");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_models_student_audit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/models/student-audit */ "G4S2");
/* harmony import */ var src_app_store_state_status_texts_state__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/store/state/status-texts.state */ "HizE");











let MuStatusNotificationComponent = class MuStatusNotificationComponent {
    constructor() {
        this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.iconData = {};
    }
    ngOnInit() {
        this.listenToSelectedStatusTextsChanges();
    }
    ngOnChanges() {
        if (!this.statusTexts)
            return;
        this.translateStatusText();
    }
    listenToSelectedStatusTextsChanges() {
        this.selectedStatusTextsStream
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this.ngUnsubscribe), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["tap"])((statusTexts) => {
            this.statusTexts = statusTexts;
            if (this.statusTexts) {
                this.translateStatusText();
                this.renderStatusIcon();
            }
            ;
        }))
            .subscribe();
    }
    translateStatusText() {
        const [auditText] = this.statusTexts.filter((s) => {
            return s.StatusText === this.statusText;
        });
        this.translatedStatusText = auditText ? auditText.CommText : '';
    }
    renderStatusIcon() {
        switch (this.statusText) {
            case src_app_models_student_audit__WEBPACK_IMPORTED_MODULE_9__["StatusText"].WAIT_FOR_STUDENT: {
                return (this.iconData = {
                    class: 'open-checkbox-icon mu-mr2',
                    src: _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faSquare"],
                });
            }
            case src_app_models_student_audit__WEBPACK_IMPORTED_MODULE_9__["StatusText"].WAIT_FOR_UM: {
                return (this.iconData = {
                    class: 'other-icon-type mu-mr2',
                    src: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faLock"],
                });
            }
            case src_app_models_student_audit__WEBPACK_IMPORTED_MODULE_9__["StatusText"].IN_PROCESS: {
                return (this.iconData = {
                    class: 'hourglass-icon mu-mr2',
                    src: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faHourglassStart"],
                });
            }
            case src_app_models_student_audit__WEBPACK_IMPORTED_MODULE_9__["StatusText"].NOT_COMPLETED: {
                return (this.iconData = {
                    class: 'other-icon-type mu-mr2',
                    src: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faExclamation"],
                });
            }
            case src_app_models_student_audit__WEBPACK_IMPORTED_MODULE_9__["StatusText"].COMPLETED: {
                return (this.iconData = {
                    class: 'other-icon-type mu-mr2',
                    src: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faCheck"],
                });
            }
            default:
                console.warn('audit has unexpected value. No icon loaded: ', this.statusText);
        }
    }
    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }
};
MuStatusNotificationComponent.propDecorators = {
    statusText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_6__["Select"])(src_app_store_state_status_texts_state__WEBPACK_IMPORTED_MODULE_10__["StatusTextsState"].selectedStatusTexts)
], MuStatusNotificationComponent.prototype, "selectedStatusTextsStream", void 0);
MuStatusNotificationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'mu-status-notification',
        template: _raw_loader_status_notification_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_status_notification_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MuStatusNotificationComponent);



/***/ }),

/***/ "XTCx":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ui-components/features/content/content.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"!isFetching && selectedAudit && renderedContent\">\n  <ion-row class=\"ion-justify-content-center mu-bg2 sticky sticky-bottom-cover\">\n    <ion-col class=\"grid\" [sizeXs]=\"isWebview ? '20' : '24'\" sizeMd=\"18\" >\n      <div class=\"inline-grid fr-auto\">\n        <mu-raw-html\n          [variant]=\"'header'\"\n          [unsafeHtml]=\"renderedContent.contentTitle\"\n        ></mu-raw-html>\n        <mu-attention-label\n          *ngIf=\"selectedAudit.nodeDeadline\"\n          [deadline]=\"selectedAudit.nodeDeadline\"\n        ></mu-attention-label>\n      </div>\n    </ion-col>\n  </ion-row>\n  <ion-row\n  class=\"ion-justify-content-center\"\n  #content\n  >\n  <ion-col [sizeXs]=\"isWebview ? '20' : '24'\" sizeMd=\"18\" class=\"grid\">\n    <div class=\"onesignal-customlink-container\"></div>\n    <ng-container *ngIf=\"renderedContent\">\n      <mu-feedback-notification *ngIf=\"renderedContent && renderedContent.langcode !== languageCode && !selectedAudit.isCompleted\"\n        [labelText]=\"'home-page.student-audit-attention' | translate\"\n        [feedbackText]=\"['home-page.student-audit-language-not-available.part-1' | translate , 'home-page.student-audit-language-not-available.part-2' | translate ]\"\n        [icon]=\"globeIcon\"\n        [iconPosition]=\"0\"\n      ></mu-feedback-notification>\n      <mu-status-notification\n        [statusText]=\"selectedAudit.statusText\"\n      ></mu-status-notification>\n      <mu-feedback-notification\n        [feedbackText]=\"selectedAudit.nodeFeedback\"\n      ></mu-feedback-notification>\n      <mu-raw-html [unsafeHtml]=\"renderedContent.before\"></mu-raw-html>\n      <mu-user-task [linkLabel]=\"linkLabel\" [audit]=\"selectedAudit\" [files]=\"selectedAuditDocuments\" [isAdmissionLocked]=\"admissionIsLocked\" [languageCode]=\"languageCode\"></mu-user-task>\n      <mu-raw-html [unsafeHtml]=\"renderedContent.after\"></mu-raw-html>\n    </ng-container>\n    <div *ngIf=\"!renderedContent\">\n      <h5>\n        {{\n          \"home-page.enrichment-fetch-fail\"\n            | translate: { auditId: selectedAudit.id }\n        }}\n      </h5>\n    </div>\n  </ion-col>\n  </ion-row>\n</ng-container>\n<ion-row class=\"ion-justify-content-center\" *ngIf=\"isFetching\">\n  <ion-col>\n    <mu-spinner variant=\"page\">\n      <h5 class=\"ion-text-center\">\n        {{ \"home-page.enrichment-fetch-pending\" | translate }}\n      </h5>\n    </mu-spinner>\n  </ion-col>\n</ion-row>\n<ng-template #globeIconTemplate>\n  <fa-icon [icon]=\"globeIcon\"></fa-icon>\n</ng-template>");

/***/ }),

/***/ "YVo/":
/*!*********************************************!*\
  !*** ./src/app/pipes/translateList.pipe.ts ***!
  \*********************************************/
/*! exports provided: MuTranslateListPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MuTranslateListPipe", function() { return MuTranslateListPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");



let MuTranslateListPipe = class MuTranslateListPipe extends _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"] {
    transform(key, length) {
        return [...Array(length).keys()].map((i) => super.transform(`${key}.${i}`));
    }
};
MuTranslateListPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'MuTranslateList',
    })
], MuTranslateListPipe);



/***/ }),

/***/ "ZNFJ":
/*!******************************************************************************!*\
  !*** ./src/app/ui-components/features/user-uploads/user-task.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLXRhc2suY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "ZRdh":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ui-components/features/student-admissions/student-admissions.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div [ngClass]=\"{\n    root: true,\n    'is-native-view': !isWebView\n  }\">\n  <mu-spinner *ngIf=\"isFetching || !isInitialised\">\n    <h5 class=\"ion-text-center\">\n      {{ \"home-page.student-admissions-pending\" | translate }}\n    </h5>\n  </mu-spinner>\n  <ion-label for=\"select-study-program\">Study program</ion-label>\n  <div class='select-wrapper'>\n    <ng-container *ngIf=\"selectOptions.length == 0 ; else ionSelect\">\n      <div>loading</div>\n    </ng-container>\n    <ng-template #ionSelect>\n      <div #selectAdmission class=\"select-admission\" (click)=\"admissionsPopover($event)\" tabindex=\"0\" role=\"button\" (keydown)=\"keydown($event)\" aria-expanded=\"admissionsMenuOpen\">\n        <div class=\"education-program\">\n          {{ educationProgram }}\n        </div>\n        <div class=\"education-period\">\n          {{ \"academic-period.\" + selectedPeriod | translate }} {{selectedYears(this.selectedYear)}}\n        </div>\n        <div class=\"education-selector\">\n          <fa-icon [icon]=\"icon\" *ngIf=\"icon\"></fa-icon>\n        </div>\n      </div>\n    </ng-template>\n  </div>\n  <!--<div class=\"mu-student-admission-progress-bar\">\n    <mu-progression-bar></mu-progression-bar>\n  </div>-->\n</div>");

/***/ }),

/***/ "avUC":
/*!****************************************************************************!*\
  !*** ./src/app/ui-components/features/user-uploads/user-task.component.ts ***!
  \****************************************************************************/
/*! exports provided: MuUserTaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MuUserTaskComponent", function() { return MuUserTaskComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _user_task_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-task.component.scss */ "ZNFJ");
/* harmony import */ var _raw_loader_user_task_component_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! raw-loader!./user-task.component.html */ "LSVO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_enums_language__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/enums/language */ "zpKt");
/* harmony import */ var src_app_models_student_audit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/student-audit */ "G4S2");
/* harmony import */ var src_app_services_link_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/link.service */ "Lpmr");
/* harmony import */ var src_app_services_platform_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/platform.service */ "EktT");








let MuUserTaskComponent = class MuUserTaskComponent {
    constructor(linkService, platform) {
        this.linkService = linkService;
        this.platform = platform;
        this.isAdmissionLocked = false;
        this.linkLabel = 'Link';
        this.languageCode = src_app_enums_language__WEBPACK_IMPORTED_MODULE_4__["LanguageCode"].EN;
        this.uploadAllowedTypes = ['U'];
        this.modificationAllowedTypes = [src_app_models_student_audit__WEBPACK_IMPORTED_MODULE_5__["StatusText"].WAIT_FOR_STUDENT, src_app_models_student_audit__WEBPACK_IMPORTED_MODULE_5__["StatusText"].IN_PROCESS, src_app_models_student_audit__WEBPACK_IMPORTED_MODULE_5__["StatusText"].NOT_COMPLETED];
        this.linkShouldBeGenerated = true;
        this.iosExceptionShouldBeActive = false;
        this.linkToWebVersion = 'https://myapplication.test.maastrichtuniversity.nl/';
    }
    ngOnInit() {
    }
    ngOnChanges(changes) {
        if (changes.audit) {
            this.linkShouldBeGenerated = (this.audit && this.audit.nodeTaskType !== 'U' && this.audit.nodeUrl) ? true : false;
            if (this.platform.isIos() && this.audit.nodeTaskType === 'P') {
                this.linkShouldBeGenerated = false;
                this.iosExceptionShouldBeActive = true;
            }
        }
    }
    isUploadAllowed(type) {
        return this.uploadAllowedTypes.includes(type);
    }
    isModificationAllowed(type) {
        return this.modificationAllowedTypes.includes(type) && !this.isAdmissionLocked;
    }
    /**
     * Opens a bff link in the browser
     */
    openExternalLink(url = this.audit.nodeUrl) {
        const languageEncodedUrl = new URL(url);
        languageEncodedUrl.searchParams.append("Language", this.languageCode);
        this.linkService.openUrl(languageEncodedUrl.toString());
    }
    ngOnDestroy() {
    }
};
MuUserTaskComponent.ctorParameters = () => [
    { type: src_app_services_link_service__WEBPACK_IMPORTED_MODULE_6__["LinkService"] },
    { type: src_app_services_platform_service__WEBPACK_IMPORTED_MODULE_7__["PlatformService"] }
];
MuUserTaskComponent.propDecorators = {
    audit: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    files: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    isAdmissionLocked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    linkLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    languageCode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
MuUserTaskComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'mu-user-task',
        template: _raw_loader_user_task_component_html__WEBPACK_IMPORTED_MODULE_2__["default"],
        styles: [_user_task_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
    })
], MuUserTaskComponent);



/***/ }),

/***/ "b0vw":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/home.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mu-spinner\n  *ngIf=\"!renderAppview && !renderWebview\"\n  variant=\"page\"\n></mu-spinner>\n\n<div class=\"mu-grid\">\n  <div>\n    <mu-status-bar></mu-status-bar>\n    <mu-top-menu></mu-top-menu>\n  </div>\n  <ion-row class=\"main-row\">\n    <ion-col sizeXs=\"24\" class=\"aside-content-container\">\n      <div class=\"mu-bg1 mu-color2 side-menu-container\">\n        <div class=\"sticky mu-bg1\">\n          <h3 class=\"side-menu-title mu-color2\">\n            {{ \"home-page.application-procedure\" | translate }}\n          </h3>\n          <mu-student-admissions></mu-student-admissions>\n        </div>\n        <mu-student-audit-groups></mu-student-audit-groups>\n      </div>\n    </ion-col>\n    <ion-col sizeXs=\"24\"  class=\"web-container-main mu-pt3\">\n      <div class=\"mu-bg2 mu-color1 mu-mh100vh\">\n        <mu-content></mu-content>\n      </div>\n    </ion-col>\n  </ion-row>\n</div>\n\n");

/***/ }),

/***/ "cKhE":
/*!*****************************************************************************!*\
  !*** ./src/app/ui-components/features/status-bar/status-bar.component.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".admission-status-bar {\n  height: 3.5rem;\n  text-align: center;\n  line-height: 3.5rem;\n  font-size: 1rem;\n  color: white;\n  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.35);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcc3RhdHVzLWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSwyQ0FBQTtBQUFKIiwiZmlsZSI6InN0YXR1cy1iYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkYmFySGVpZ2h0OiAzLjU7XHJcbi5hZG1pc3Npb24tc3RhdHVzLWJhciB7ICAgIFxyXG4gICAgaGVpZ2h0OiAjeyRiYXJIZWlnaHR9cmVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbGluZS1oZWlnaHQ6ICN7JGJhckhlaWdodH1yZW07XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3gtc2hhZG93OiAwIDJweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMzUpO1xyXG59Il19 */");

/***/ }),

/***/ "cvqm":
/*!*************************************************************************!*\
  !*** ./src/app/ui-components/features/top-menu/top-menu.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@media screen and (min-width: 768px) {\n  #header-container {\n    height: 135px;\n  }\n}\n\n@media screen and (min-width: 768px) {\n  #mu-menu-logo-container {\n    padding: var(--mu-spacing-md) 0;\n  }\n}\n\nbutton.icon-button {\n  position: relative;\n  background: transparent;\n  display: flex;\n  align-items: center;\n  z-index: 20;\n}\n\nbutton.icon-button::before {\n  left: -0.25rem;\n  right: -0.25rem;\n  top: -0.125rem;\n  bottom: -0.125rem;\n  position: absolute;\n  content: \"\";\n  opacity: 0;\n  transition: all ease 300ms;\n  z-index: 5;\n  background: var(--mu-color-background);\n  border-radius: var(--mu-border-radius);\n}\n\nbutton.icon-button:hover::before, button.icon-button:focus::before, button.icon-button:active::before {\n  opacity: 1;\n}\n\nbutton.icon-button > * {\n  z-index: 10;\n  position: relative;\n}\n\n@media screen and (min-width: 768px) {\n  .main-row {\n    display: grid;\n    grid-template-columns: minmax(20rem, 35%) 1fr;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcdG9wLW1lbnUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFERjtJQUVJLGFBQUE7RUFDRjtBQUNGOztBQUdFO0VBREY7SUFFSSwrQkFBQTtFQUNGO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUFFO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsMEJBQUE7RUFDQSxVQUFBO0VBQ0Esc0NBQUE7RUFDQSxzQ0FBQTtBQUVKOztBQUdJO0VBQ0UsVUFBQTtBQUROOztBQUlFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0FBRko7O0FBTUU7RUFERjtJQUVJLGFBQUE7SUFDQSw2Q0FBQTtFQUZGO0FBQ0YiLCJmaWxlIjoidG9wLW1lbnUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjaGVhZGVyLWNvbnRhaW5lciB7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgaGVpZ2h0OiAxMzVweDtcbiAgfVxufVxuXG4jbXUtbWVudS1sb2dvLWNvbnRhaW5lciB7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgcGFkZGluZzogdmFyKC0tbXUtc3BhY2luZy1tZCkgMDtcbiAgfVxufVxuXG5idXR0b24uaWNvbi1idXR0b24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB6LWluZGV4OiAyMDtcbiAgJjo6YmVmb3JlIHtcbiAgICBsZWZ0OiAtMC4yNXJlbTtcbiAgICByaWdodDogLTAuMjVyZW07XG4gICAgdG9wOiAtMC4xMjVyZW07XG4gICAgYm90dG9tOiAtMC4xMjVyZW07XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZSAzMDBtcztcbiAgICB6LWluZGV4OiA1O1xuICAgIGJhY2tncm91bmQ6IHZhcigtLW11LWNvbG9yLWJhY2tncm91bmQpO1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLW11LWJvcmRlci1yYWRpdXMpO1xuICB9XG4gICY6aG92ZXIsXG4gICY6Zm9jdXMsXG4gICY6YWN0aXZlIHtcbiAgICAmOjpiZWZvcmUge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gIH1cbiAgJiA+ICoge1xuICAgIHotaW5kZXg6IDEwO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxufVxuLm1haW4tcm93IHtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDIwcmVtLCAzNSUpIDFmcjtcbiAgfVxufVxuIl19 */");

/***/ }),

/***/ "d22d":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ui-components/features/top-menu/top-menu.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-row class=\"main-row\">\n  <ion-col\n    class=\"ion-hide-md-down mu-bg1 mu-color2 mu-flex justify-center mu-px3\"\n  >\n    <mu-university-logo [variant]=\"'full'\"></mu-university-logo>\n  </ion-col>\n  <ion-col class=\"ion-align-items-center\">\n    <ion-row id=\"header-container\" class=\"mu-flex align-center justify-end\">\n      <ion-col size=\"5\" class=\"ion-hide-md-up mu-px3 mu-py2\">\n        <div id=\"mu-menu-logo-container\">\n          <mu-university-logo\n            class=\"ion-hide-md-up\"\n            [variant]=\"'small'\"\n          ></mu-university-logo>\n        </div>\n      </ion-col>\n      <ion-col class=\"mu-px4\" sizeXs=\"19\" sizeMd=\"21\">\n        <ion-row>\n          <ion-col class=\"mu-flex align-center justify-end\">\n            <button\n              class=\"mu-mr3 mu-color1 icon-button tooltip\"\n              (click)=\"openLanguageSelect($event)\"\n              [attr.tooltip]=\"'elements.language-switch' | translate\"\n            >\n              <div class=\"mu-flex align-center\">\n                <fa-icon class=\"mu-pr0 mu-flex\" [icon]=\"languageIcon\"></fa-icon>\n                <div class=\"mu-flex\">{{ languageCode }}</div>\n                <fa-icon class=\"mu-pl1 mu-fs1 mu-flex\" [icon]=\"chevronDown\"></fa-icon>\n              </div>\n            </button>\n            <button class=\"mu-mr3 mu-color1 icon-button tooltip\" (click)=\"openChat()\" [attr.tooltip]=\"'elements.livechat' | translate\" *ngIf=\"chatUrl\">\n              <div>\n                <fa-icon class=\"mu-flex\" [icon]=\"commentsIcon\"></fa-icon>\n              </div>\n            </button>\n            <button id=\"open-message-center\" class=\"mu-mr3 mu-color1 icon-button tooltip\" (click)=\"openMessageCenter()\" [attr.tooltip]=\"'elements.inbox' | translate\">\n              <div>\n                <fa-icon class=\"mu-flex\" [icon]=\"messageCenterIcon\"></fa-icon>\n              </div>\n            </button>\n            <mu-button\n              variant=\"secondary\"\n              [icon]=\"menuIcon\"\n              (click)=\"openMenu($event)\"\n              >Menu</mu-button\n            >\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-col>\n</ion-row>\n");

/***/ }),

/***/ "dMWJ":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ui-components/features/student-audit-groups/student-audit-groups.component.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div\n  [ngClass]=\"{\n    root: true,\n    'is-native-view': !isWebview\n  }\"\n>\n  <mu-spinner *ngIf=\"isFetching || !isInitialised\">\n    <h5 class=\"ion-text-center\">\n      {{ \"home-page.student-audit-fetch-pending\" | translate }}\n    </h5>\n  </mu-spinner>\n  <ng-container *ngIf=\"!isFetching\">\n    <div *ngFor=\"let group of auditGroups\" class=\"audit-group mu-pb4\">\n      <button\n        class=\"audit-title mu-flex align-center justify-space-between mu-color2 mu-px3\"\n        [attr.label]=\"'toggle audit group'\"\n        (click)=\"toggleAuditGroupsView(group.categ)\"\n      >\n        <span class=\"button-title\">{{ group.categ | translate }}</span>\n        <span\n          [class]=\"\n            group.isExpanded\n              ? 'caret caret-down mu-rem-lg secondary-color'\n              : 'caret caret-right mu-rem-lg secondary-color'\n          \"\n        ></span>\n      </button>\n      <ng-container *ngIf=\"group.isExpanded\">\n        <mu-student-audit\n          *ngFor=\"let audit of group.studentAudits\"\n          [isActive]=\"audit.id === selectedStudentAuditId\"\n          [isDisabled]=\"isAuditLocked(audit)\"\n          [label]=\"audit.nodeText\"\n          (onClick)=\"selectStudentAudit(audit.id)\"\n          [id]=\"audit.id\"\n          [statusText]=\"audit.statusText\"\n          [isLocked]=\"selectedAdmissionIsLocked\"\n        >\n        </mu-student-audit>\n      </ng-container>\n    </div>\n  </ng-container>\n</div>\n");

/***/ }),

/***/ "eocg":
/*!***********************************************************************!*\
  !*** ./src/app/ui-components/features/top-menu/top-menu.component.ts ***!
  \***********************************************************************/
/*! exports provided: MuTopMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MuTopMenuComponent", function() { return MuTopMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_top_menu_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./top-menu.component.html */ "d22d");
/* harmony import */ var _top_menu_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./top-menu.component.scss */ "cvqm");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "m/P+");
/* harmony import */ var _ionic_native_safari_view_controller_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/safari-view-controller/ngx */ "zPEN");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngxs/store */ "AcyG");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_services_platform_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/platform.service */ "EktT");
/* harmony import */ var src_app_store_actions_message_actions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/store/actions/message.actions */ "eFHV");
/* harmony import */ var src_app_store_state_participant_state__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/store/state/participant.state */ "CKn5");
/* harmony import */ var _elements_mu_language_popover_mu_language_popover_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../elements/mu-language-popover/mu-language-popover.component */ "rwtX");
/* harmony import */ var _elements_mu_menu_popover_mu_menu_popover_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../elements/mu-menu-popover/mu-menu-popover.component */ "njp6");
















let MuTopMenuComponent = class MuTopMenuComponent {
    constructor(popoverController, store, iab, platform, safariViewController) {
        this.popoverController = popoverController;
        this.store = store;
        this.iab = iab;
        this.platform = platform;
        this.safariViewController = safariViewController;
        this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
        this.menuIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faBars"];
        this.messageCenterIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faEnvelope"];
        this.chevronDown = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChevronDown"];
        this.commentsIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faComments"];
        this.languageIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faGlobe"];
    }
    ngOnInit() {
        this.listenToLanguageCodeChanges();
        this.listenToChatUrlChanges();
    }
    listenToLanguageCodeChanges() {
        this.languageCodeStream
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this.ngUnsubscribe), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["filter"])((languageCode) => !!languageCode), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["tap"])((languageCode) => {
            this.languageCode = languageCode;
        }))
            .subscribe();
    }
    listenToChatUrlChanges() {
        this.chatUrlStream
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this.ngUnsubscribe), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["filter"])((languageCode) => !!languageCode), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["tap"])((languageCode) => {
            this.chatUrl = languageCode;
        }))
            .subscribe();
    }
    openMenu($event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: _elements_mu_menu_popover_mu_menu_popover_component__WEBPACK_IMPORTED_MODULE_15__["MuMenuPopoverComponent"],
                cssClass: 'top-menu-popover',
                event: $event,
            });
            return yield popover.present();
        });
    }
    openLanguageSelect($event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: _elements_mu_language_popover_mu_language_popover_component__WEBPACK_IMPORTED_MODULE_14__["MuLanguagePopoverComponent"],
                cssClass: 'top-menu-popover',
                event: $event,
            });
            return yield popover.present();
        });
    }
    openChat() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.platform.isWeb()) {
                try {
                    window.open(this.chatUrl, '_blank').focus();
                }
                catch (error) {
                    console.error(error);
                    window.location.href = this.chatUrl;
                }
            }
            else {
                try {
                    this.openSafariWebView(this.chatUrl);
                }
                catch (e) {
                    this.openInAppBrowser(this.chatUrl);
                }
            }
        });
    }
    openSafariWebView(url) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.safariViewController.isAvailable();
            this.safariViewController
                .show({
                url: url,
                hidden: false,
                animated: false,
                transition: 'curl',
                enterReaderModeIfAvailable: false,
                tintColor: '#00ffff',
                barColor: '#0000ff',
                controlTintColor: '#ffffff',
            })
                .subscribe((result, ...other) => {
                console.log(other);
                console.log(result);
                if (result.event === 'opened') {
                    console.log('opened');
                }
                else if (result.event === 'loaded') {
                    console.log('loaded');
                }
                else if (result.event === 'closed') {
                    console.log('closed');
                }
            });
        });
    }
    openInAppBrowser(url) {
        const iab = this.iab.create(url, '_system');
        iab.on('loadstop').subscribe((e) => console.log('loadstop: ', e));
    }
    openMessageCenter() {
        this.store.dispatch(new src_app_store_actions_message_actions__WEBPACK_IMPORTED_MODULE_12__["ToggleMessagesIsActive"]());
    }
    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }
};
MuTopMenuComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["PopoverController"] },
    { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_8__["Store"] },
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__["InAppBrowser"] },
    { type: src_app_services_platform_service__WEBPACK_IMPORTED_MODULE_11__["PlatformService"] },
    { type: _ionic_native_safari_view_controller_ngx__WEBPACK_IMPORTED_MODULE_6__["SafariViewController"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_8__["Select"])(src_app_store_state_participant_state__WEBPACK_IMPORTED_MODULE_13__["ParticipantState"].languageCode)
], MuTopMenuComponent.prototype, "languageCodeStream", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_8__["Select"])(src_app_store_state_participant_state__WEBPACK_IMPORTED_MODULE_13__["ParticipantState"].chatUrl)
], MuTopMenuComponent.prototype, "chatUrlStream", void 0);
MuTopMenuComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'mu-top-menu',
        template: _raw_loader_top_menu_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_top_menu_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MuTopMenuComponent);



/***/ }),

/***/ "hkkO":
/*!******************************************************!*\
  !*** ./src/app/services/form-data-upload.service.ts ***!
  \******************************************************/
/*! exports provided: FormDataUploadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormDataUploadService", function() { return FormDataUploadService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngxs/store */ "AcyG");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _store_actions_data_upload_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store/actions/data-upload.actions */ "NTGt");
/* harmony import */ var _store_state_participant_state__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../store/state/participant.state */ "CKn5");
/* harmony import */ var _store_state_student_admissions_state__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../store/state/student-admissions.state */ "qlWn");
/* harmony import */ var _store_state_student_audits_state__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../store/state/student-audits.state */ "qGxV");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _store_actions_student_audit_documents_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../store/actions/student-audit-documents.actions */ "AI2x");












let FormDataUploadService = class FormDataUploadService {
    constructor(store, router, http, uploadState) {
        this.store = store;
        this.router = router;
        this.http = http;
        this.uploadState = uploadState;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            apiKey: src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiKey,
        });
    }
    init(uploader) {
        const selectedAuditStream = uploader.selectedAuditStream;
        const dataUploadStateStream = uploader.dataUploadStateStream;
        const { studentAudits, studentAdmissions, } = uploader.store.snapshot();
        const { selectedAuditId } = studentAudits;
        const { selectedGuid } = studentAdmissions;
        uploader.selectedAuditId = selectedAuditId;
        uploader.selectedGuid = selectedGuid;
        selectedAuditStream
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(uploader.ngUnsubscribe), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["filter"])((stream) => !!stream), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["tap"])((stream) => {
            var _a;
            if (((_a = uploader.selectedAudit) === null || _a === void 0 ? void 0 : _a.id) !== (stream === null || stream === void 0 ? void 0 : stream.id)) {
                uploader.selectedAudit = stream;
                uploader.allowedFileExtensions = uploader.selectedAudit.nodeDocFileExt.split(';').map(ext => '.' + ext.toLocaleLowerCase());
                uploader.store.dispatch(new _store_actions_data_upload_actions__WEBPACK_IMPORTED_MODULE_6__["ClearDataUploadState"]());
                uploader.isDispatching = false;
                uploader.hasValidationError = false;
            }
        }))
            .subscribe();
        dataUploadStateStream
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(uploader.ngUnsubscribe), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["filter"])((stream) => !!stream), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["tap"])((stream) => {
            const { completed, errors } = stream;
            if (!completed && errors.length) {
                uploader.hasValidationError = true;
                uploader.hasUploadedSuccesfully = false;
                if (uploader.isDispatching) {
                    uploader.isDispatching = false;
                    errors.forEach(error => {
                        if (error === 'file-type-error') {
                            uploader.setErrorMessage(error, uploader.allowedFileExtensions.join(', '));
                        }
                        else if (error === 'audit-completed-error') {
                            uploader.setErrorMessage(error);
                        }
                        else {
                            uploader.setErrorMessage(error);
                        }
                    });
                }
            }
            else if (completed) {
                uploader.isDispatching = false;
                uploader.hasValidationError = false;
                if (!uploader.fileContents) {
                    uploader.hasUploadedSuccesfully = true;
                    setTimeout(() => {
                        uploader.hasUploadedSuccesfully = false;
                    }, 2000);
                    uploader.store.dispatch(new _store_actions_data_upload_actions__WEBPACK_IMPORTED_MODULE_6__["ClearDataUploadState"]());
                    uploader.store.dispatch(new _store_actions_student_audit_documents_actions__WEBPACK_IMPORTED_MODULE_11__["GetStudentAuditDocuments"]());
                }
            }
        }))
            .subscribe();
        uploader.dataLanguageCodeStream
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(uploader.ngUnsubscribe), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["filter"])((stream) => !!stream), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["tap"])((stream) => {
            const codes = [...uploader.validationCodes];
            uploader.validationCodes = [];
            uploader.validationErrors = [];
            codes.forEach(code => {
                uploader.setErrorMessage(code.label, code.value);
            });
        }))
            .subscribe();
    }
    sendFormData(formData) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const url = this.constructUrl();
            this.http.post(url, formData, { headers: this.headers }).subscribe({
                next: (data) => {
                    const dataUploadAction = new _store_actions_data_upload_actions__WEBPACK_IMPORTED_MODULE_6__["SetDataUploadState"](true, formData, []);
                    this.uploadState.dispatch(dataUploadAction);
                },
                error: (e) => {
                    console.warn(e.message || e);
                    let error = e.error.Message || e.message || e;
                    if (error.includes('Maximum request length exceeded.')) {
                        error = 'file-size-error';
                    }
                    else if (error.includes('wrong extension')) {
                        error = 'file-type-error';
                    }
                    else if (error.includes('completed')) {
                        error = 'audit-completed-error';
                    }
                    else {
                        error = 'general-error';
                    }
                    const dataUploadAction = new _store_actions_data_upload_actions__WEBPACK_IMPORTED_MODULE_6__["SetDataUploadState"](false, formData, [
                        error,
                    ]);
                    this.uploadState.dispatch(dataUploadAction);
                    // this.router.navigate(['/', 'login']);
                },
            });
        });
    }
    downloadFile(documentId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const url = this.constructFileUrl(documentId);
            return this.http.get(url, { responseType: 'blob', headers: this.headers });
        });
    }
    /**
     * Parse the downloaded data into a file
     * @param data - Array Buffer data
     */
    parseBlob(data, fileName) {
        const dataType = data.type;
        const binaryData = [];
        binaryData.push(data);
        const blob = new Blob([data], { type: dataType });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        document.body.appendChild(a);
        a.setAttribute('style', 'display:none');
        a.href = url;
        a.download = fileName;
        a.click();
        window.URL.revokeObjectURL(url);
        return url;
    }
    constructUrl() {
        const { participantId } = this.store.selectSnapshot(_store_state_participant_state__WEBPACK_IMPORTED_MODULE_7__["ParticipantState"]);
        const { selectedGuid } = this.store.selectSnapshot(_store_state_student_admissions_state__WEBPACK_IMPORTED_MODULE_8__["StudentAdmissionsState"]);
        const { selectedAuditId } = this.store.selectSnapshot(_store_state_student_audits_state__WEBPACK_IMPORTED_MODULE_9__["StudentAuditsState"]);
        return `${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].endpoints.root +
            src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].endpoints.student +
            '/' +
            participantId +
            '/' +
            src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].endpoints.audits}/${selectedGuid}/${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].endpoints.auditDocumentsUpload}/${selectedAuditId}`;
    }
    constructFileUrl(documentId) {
        const { participantId } = this.store.selectSnapshot(_store_state_participant_state__WEBPACK_IMPORTED_MODULE_7__["ParticipantState"]);
        const { selectedGuid } = this.store.selectSnapshot(_store_state_student_admissions_state__WEBPACK_IMPORTED_MODULE_8__["StudentAdmissionsState"]);
        return `${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].endpoints.root +
            src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].endpoints.student +
            '/' +
            participantId +
            '/' +
            src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].endpoints.audits}/${selectedGuid}/${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].endpoints.auditDocuments}/${documentId}/download`;
    }
};
FormDataUploadService.ctorParameters = () => [
    { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Store"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Store"] }
];
FormDataUploadService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root',
    })
], FormDataUploadService);



/***/ }),

/***/ "jHIy":
/*!*************************************************************************************************!*\
  !*** ./src/app/ui-components/features/student-audit-groups/student-audit-groups.component.scss ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@font-face {\n  font-family: \"TheSans Regular\";\n  src: url(\"/assets/fonts/TheSans-Regular.ttf\");\n}\n@font-face {\n  font-family: \"TheSans B6 SemiBold\";\n  src: url(\"/assets/fonts/TheSans_B6_SemiBold.ttf\");\n}\nh1 {\n  color: var(--ion-color-danger);\n  font-size: 2rem;\n  line-height: 2.5rem;\n  font-family: \"TheSans Regular\", Arial, Helvetica, sans-serif;\n}\nh2 {\n  color: var(--ion-color-tertiary);\n  font-size: 1.5rem;\n  line-height: 2.25rem;\n  font-family: \"TheSans B6 SemiBold\", Arial, Helvetica, sans-serif;\n}\n@media screen and (min-width: 768px) {\n  h2 {\n    color: var(--ion-color-tertiary);\n    font-size: 1.75rem;\n    line-height: 2.25rem;\n  }\n}\nh3 {\n  color: var(--ion-color-tertiary);\n  font-size: 1.5rem;\n  line-height: 2.5rem;\n  font-family: \"TheSans B6 SemiBold\", Arial, Helvetica, sans-serif;\n}\nh4 {\n  color: var(--ion-color-tertiary);\n  font-size: 1.25rem;\n  line-height: 2rem;\n  font-family: \"TheSans B6 SemiBold\", Arial, Helvetica, sans-serif;\n}\nh5 {\n  font-family: \"TheSans Regular\", Arial, Helvetica, sans-serif;\n  font-size: 1rem;\n  line-height: 1rem;\n  color: var(--ion-color-tertiary);\n}\np {\n  font-family: \"TheSans Regular\", Arial, Helvetica, sans-serif;\n  font-size: 1rem;\n  line-height: 1rem;\n}\np.paragraph-large {\n  font-family: \"TheSans Regular\", Arial, Helvetica, sans-serif;\n  font-size: 1rem;\n  line-height: 1.5rem;\n}\np.paragraph-small {\n  font-family: \"TheSans Regular\", Arial, Helvetica, sans-serif;\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n  margin: 0 0 var(--mu-spacing-lg);\n}\np.paragraph-small.same-line-height {\n  line-height: 0.875rem;\n}\np.no-margin {\n  margin: 0;\n}\np.primary {\n  color: var(--ion-color-primary);\n}\np.secondary {\n  color: var(--ion-color-secondary);\n}\n@media screen and (min-width: 768px) {\n  .root {\n    height: 100%;\n    overflow-y: unset;\n  }\n}\n.root.is-native-view .audit-title {\n  margin-top: 0;\n  margin-bottom: 0;\n  padding-left: 0;\n  padding-right: 0;\n}\n.audit-group .audit-title {\n  width: 100%;\n  background: none;\n  text-align: left;\n}\n@media screen and (min-width: 768px) {\n  .audit-group .audit-title {\n    padding: 0 var(--mu-spacing-xl);\n  }\n}\n.audit-group .audit-title .button-title {\n  color: var(--ion-color-tertiary);\n  font-size: 1rem;\n  line-height: 2rem;\n  font-family: \"TheSans B6 SemiBold\", Arial, Helvetica, sans-serif;\n  margin: 0;\n  color: var(--ion-color-secondary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFx0aGVtZVxcX2ZvbnRzX2dsb2JhbHMuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcc3R1ZGVudC1hdWRpdC1ncm91cHMuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcdGhlbWVcXF9mb250c19taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLDhCQUFBO0VBQ0EsNkNBQUE7QUNERjtBRElBO0VBQ0Usa0NBQUE7RUFDQSxpREFBQTtBQ0ZGO0FES0E7RUVQRSw4QkZRbUM7RUVQbkMsZUZPcUI7RUVOckIsbUJGTTJCO0VBQzNCLDREQUFBO0FDREY7QURJQTtFRVpFLGdDQUZRO0VBR1IsaUJGWXFCO0VFWHJCLG9CRlc2QjtFQUk3QixnRUFBQTtBQ0ZGO0FEREU7RUFGRjtJRVpFLGdDQUZRO0lBR1Isa0JGY3VCO0lFYnZCLG9CRmFnQztFQ01oQztBQUNGO0FESEE7RUVuQkUsZ0NBRlE7RUFHUixpQkZtQnFCO0VFbEJyQixtQkZrQjZCO0VBQzdCLGdFQUFBO0FDUUY7QUROQTtFRXZCRSxnQ0FGUTtFQUdSLGtCRnVCcUI7RUV0QnJCLGlCRnNCOEI7RUFDOUIsZ0VBQUE7QUNXRjtBRFRBO0VFckJFLDREQUFBO0VBQ0EsZUZxQnFCO0VFcEJyQixpQkZvQjJCO0VBQzNCLGdDQUFBO0FDY0Y7QURYQTtFRTFCRSw0REFBQTtFQUNBLGVGMEJxQjtFRXpCckIsaUJGeUIyQjtBQ2dCN0I7QURmRTtFRTVCQSw0REFBQTtFQUNBLGVGNEJ1QjtFRTNCdkIsbUJGMkI2QjtBQ21CL0I7QURqQkU7RUUvQkEsNERBQUE7RUFDQSxtQkYrQnVCO0VFOUJ2QixvQkY4QmlDO0VBQy9CLGdDQUFBO0FDcUJKO0FEcEJJO0VBQ0UscUJBQUE7QUNzQk47QURuQkU7RUFDRSxTQUFBO0FDcUJKO0FEbkJFO0VBQ0UsK0JBQUE7QUNxQko7QURuQkU7RUFDRSxpQ0FBQTtBQ3FCSjtBQTFFRTtFQURGO0lBRUksWUFBQTtJQUNBLGlCQUFBO0VBOEVGO0FBQ0Y7QUE1RUk7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUE4RU47QUF4RUU7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQTJFSjtBQXpFSTtFQUxGO0lBTUksK0JBQUE7RUE0RUo7QUFDRjtBQTFFSTtFQ3RCRixnQ0FGUTtFQUdSLGVEc0J5QjtFQ3JCekIsaUJEcUIrQjtFQUMzQixnRUFBQTtFQUNBLFNBQUE7RUFDQSxpQ0FBQTtBQThFTiIsImZpbGUiOiJzdHVkZW50LWF1ZGl0LWdyb3Vwcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuL2ZvbnRzX21peGluc1wiO1xuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiVGhlU2FucyBSZWd1bGFyXCI7XG4gIHNyYzogdXJsKFwiL2Fzc2V0cy9mb250cy9UaGVTYW5zLVJlZ3VsYXIudHRmXCIpO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiVGhlU2FucyBCNiBTZW1pQm9sZFwiO1xuICBzcmM6IHVybChcIi9hc3NldHMvZm9udHMvVGhlU2Fuc19CNl9TZW1pQm9sZC50dGZcIik7XG59XG5cbmgxIHtcbiAgQGluY2x1ZGUgaGVhZGluZ1RleHQoMnJlbSwgMi41cmVtLCB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKSk7XG4gIGZvbnQtZmFtaWx5OiBcIlRoZVNhbnMgUmVndWxhclwiLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xufVxuXG5oMiB7XG4gIEBpbmNsdWRlIGhlYWRpbmdUZXh0KDEuNXJlbSwgMi4yNXJlbSk7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgQGluY2x1ZGUgaGVhZGluZ1RleHQoMS43NXJlbSwgMi4yNXJlbSk7XG4gIH1cbiAgZm9udC1mYW1pbHk6IFwiVGhlU2FucyBCNiBTZW1pQm9sZFwiLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xufVxuaDMge1xuICBAaW5jbHVkZSBoZWFkaW5nVGV4dCgxLjVyZW0sIDIuNXJlbSk7XG4gIGZvbnQtZmFtaWx5OiBcIlRoZVNhbnMgQjYgU2VtaUJvbGRcIiwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbn1cbmg0IHtcbiAgQGluY2x1ZGUgaGVhZGluZ1RleHQoMS4yNXJlbSwgMnJlbSk7XG4gIGZvbnQtZmFtaWx5OiBcIlRoZVNhbnMgQjYgU2VtaUJvbGRcIiwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbn1cbmg1IHtcbiAgQGluY2x1ZGUgcmVndWxhclRleHQoMXJlbSwgMXJlbSk7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnkpO1xufVxuXG5wIHtcbiAgQGluY2x1ZGUgcmVndWxhclRleHQoMXJlbSwgMXJlbSk7XG4gICYucGFyYWdyYXBoLWxhcmdlIHtcbiAgICBAaW5jbHVkZSByZWd1bGFyVGV4dCgxcmVtLCAxLjVyZW0pO1xuICB9XG4gICYucGFyYWdyYXBoLXNtYWxsIHtcbiAgICBAaW5jbHVkZSByZWd1bGFyVGV4dCgwLjg3NXJlbSwgMS4yNXJlbSk7XG4gICAgbWFyZ2luOiAwIDAgdmFyKC0tbXUtc3BhY2luZy1sZyk7XG4gICAgJi5zYW1lLWxpbmUtaGVpZ2h0IHtcbiAgICAgIGxpbmUtaGVpZ2h0OiAwLjg3NXJlbTtcbiAgICB9XG4gIH1cbiAgJi5uby1tYXJnaW4ge1xuICAgIG1hcmdpbjogMDtcbiAgfVxuICAmLnByaW1hcnkge1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIH1cbiAgJi5zZWNvbmRhcnkge1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgfVxufVxuIiwiQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlRoZVNhbnMgUmVndWxhclwiO1xuICBzcmM6IHVybChcIi9hc3NldHMvZm9udHMvVGhlU2Fucy1SZWd1bGFyLnR0ZlwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJUaGVTYW5zIEI2IFNlbWlCb2xkXCI7XG4gIHNyYzogdXJsKFwiL2Fzc2V0cy9mb250cy9UaGVTYW5zX0I2X1NlbWlCb2xkLnR0ZlwiKTtcbn1cbmgxIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xuICBmb250LXNpemU6IDJyZW07XG4gIGxpbmUtaGVpZ2h0OiAyLjVyZW07XG4gIGZvbnQtZmFtaWx5OiBcIlRoZVNhbnMgUmVndWxhclwiLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xufVxuXG5oMiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnkpO1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgbGluZS1oZWlnaHQ6IDIuMjVyZW07XG4gIGZvbnQtZmFtaWx5OiBcIlRoZVNhbnMgQjYgU2VtaUJvbGRcIiwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIGgyIHtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5KTtcbiAgICBmb250LXNpemU6IDEuNzVyZW07XG4gICAgbGluZS1oZWlnaHQ6IDIuMjVyZW07XG4gIH1cbn1cblxuaDMge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5KTtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGxpbmUtaGVpZ2h0OiAyLjVyZW07XG4gIGZvbnQtZmFtaWx5OiBcIlRoZVNhbnMgQjYgU2VtaUJvbGRcIiwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbn1cblxuaDQge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5KTtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xuICBsaW5lLWhlaWdodDogMnJlbTtcbiAgZm9udC1mYW1pbHk6IFwiVGhlU2FucyBCNiBTZW1pQm9sZFwiLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xufVxuXG5oNSB7XG4gIGZvbnQtZmFtaWx5OiBcIlRoZVNhbnMgUmVndWxhclwiLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDFyZW07XG4gIGxpbmUtaGVpZ2h0OiAxcmVtO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5KTtcbn1cblxucCB7XG4gIGZvbnQtZmFtaWx5OiBcIlRoZVNhbnMgUmVndWxhclwiLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDFyZW07XG4gIGxpbmUtaGVpZ2h0OiAxcmVtO1xufVxucC5wYXJhZ3JhcGgtbGFyZ2Uge1xuICBmb250LWZhbWlseTogXCJUaGVTYW5zIFJlZ3VsYXJcIiwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBsaW5lLWhlaWdodDogMS41cmVtO1xufVxucC5wYXJhZ3JhcGgtc21hbGwge1xuICBmb250LWZhbWlseTogXCJUaGVTYW5zIFJlZ3VsYXJcIiwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuMjVyZW07XG4gIG1hcmdpbjogMCAwIHZhcigtLW11LXNwYWNpbmctbGcpO1xufVxucC5wYXJhZ3JhcGgtc21hbGwuc2FtZS1saW5lLWhlaWdodCB7XG4gIGxpbmUtaGVpZ2h0OiAwLjg3NXJlbTtcbn1cbnAubm8tbWFyZ2luIHtcbiAgbWFyZ2luOiAwO1xufVxucC5wcmltYXJ5IHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cbnAuc2Vjb25kYXJ5IHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAucm9vdCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG92ZXJmbG93LXk6IHVuc2V0O1xuICB9XG59XG4ucm9vdC5pcy1uYXRpdmUtdmlldyAuYXVkaXQtdGl0bGUge1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIHBhZGRpbmctcmlnaHQ6IDA7XG59XG5cbi5hdWRpdC1ncm91cCAuYXVkaXQtdGl0bGUge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5hdWRpdC1ncm91cCAuYXVkaXQtdGl0bGUge1xuICAgIHBhZGRpbmc6IDAgdmFyKC0tbXUtc3BhY2luZy14bCk7XG4gIH1cbn1cbi5hdWRpdC1ncm91cCAuYXVkaXQtdGl0bGUgLmJ1dHRvbi10aXRsZSB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnkpO1xuICBmb250LXNpemU6IDFyZW07XG4gIGxpbmUtaGVpZ2h0OiAycmVtO1xuICBmb250LWZhbWlseTogXCJUaGVTYW5zIEI2IFNlbWlCb2xkXCIsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xufSIsIkBtaXhpbiBoZWFkaW5nVGV4dChcbiAgJHJlbGF0aXZlRm9udFNpemUsXG4gICRsaW5lSGVpZ2h0LFxuICAkY29sb3I6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSlcbikge1xuICBjb2xvcjogJGNvbG9yO1xuICBmb250LXNpemU6ICRyZWxhdGl2ZUZvbnRTaXplO1xuICBsaW5lLWhlaWdodDogJGxpbmVIZWlnaHQ7XG59XG5cbkBtaXhpbiByZWd1bGFyVGV4dCgkcmVsYXRpdmVGb250U2l6ZSwgJGxpbmVIZWlnaHQpIHtcbiAgZm9udC1mYW1pbHk6IFwiVGhlU2FucyBSZWd1bGFyXCIsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogJHJlbGF0aXZlRm9udFNpemU7XG4gIGxpbmUtaGVpZ2h0OiAkbGluZUhlaWdodDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "kgpU":
/*!*******************************************************************************************!*\
  !*** ./src/app/ui-components/features/student-admissions/student-admissions.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: MuStudentAdmissionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MuStudentAdmissionsComponent", function() { return MuStudentAdmissionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _student_admissions_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./student-admissions.component.scss */ "HHE/");
/* harmony import */ var _raw_loader_student_admissions_component_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! raw-loader!./student-admissions.component.html */ "ZRdh");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngxs/store */ "AcyG");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_store_actions_student_admissions_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/store/actions/student-admissions.actions */ "Jz07");
/* harmony import */ var src_app_store_state_student_admissions_state__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/store/state/student-admissions.state */ "qlWn");
/* harmony import */ var src_app_interfaces_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/interfaces/component */ "E7Uh");
/* harmony import */ var src_app_services_platform_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/platform.service */ "EktT");
/* harmony import */ var src_app_store_actions_student_audits_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/store/actions/student-audits.actions */ "10JN");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_ui_components_elements_mu_admissions_popover_mu_admissions_popover_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/ui-components/elements/mu-admissions-popover/mu-admissions-popover.component */ "jaun");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
















let MuStudentAdmissionsComponent = class MuStudentAdmissionsComponent extends src_app_interfaces_component__WEBPACK_IMPORTED_MODULE_9__["ApiClass"] {
    constructor(store, platform, route, popoverController) {
        super(src_app_interfaces_component__WEBPACK_IMPORTED_MODULE_9__["ApiStatusStreamType"].ADMISSION);
        this.store = store;
        this.platform = platform;
        this.route = route;
        this.popoverController = popoverController;
        this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.faCarretDown = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_15__["faCaretDown"];
        this.admissionsMenuOpen = false;
        this.selectOptions = [];
    }
    ngOnInit() {
        this.isWebView = this.platform.isWeb();
        this.listenToStudentAdmissionsChanges();
        this.listenToSelectedGuidChanges();
        this.listenToResizes();
        // Set Data according to route
        this.getStudentAdmissions(this.route.snapshot.params.admission ? this.route.snapshot.params.admission : undefined);
    }
    listenToResizes() {
        this.platform.resizeSubject
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.ngUnsubscribe), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(() => {
            if (this.admissionsMenuOpen) {
                const width = `${document.querySelector(".select-admission").offsetWidth}px`;
                this.admissionPopover.style.setProperty('width', width);
            }
        }))
            .subscribe();
    }
    listenToStudentAdmissionsChanges() {
        this.studentAdmissionsStream
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.ngUnsubscribe), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])((studentAdmissions) => {
            this.selectOptions = studentAdmissions.map(({ educationProgramName: label, guid, admissionStatusText, admissionLock, contextColor, educationProgramYear: year, educationProgramAcademicPeriod: period }) => ({ label, guid, status: admissionStatusText, locked: admissionLock, contextColor, year, period }));
        }))
            .subscribe();
    }
    listenToSelectedGuidChanges() {
        this.selectedGuidStream
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.ngUnsubscribe), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])((newGuid) => !!newGuid), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])((newGuid) => {
            const [selectedOption] = this.selectOptions.filter(({ guid }) => guid === newGuid);
            this.educationProgram = selectedOption.label;
            this.selectedYear = selectedOption.year;
            this.selectedPeriod = selectedOption.period;
            this.icon = this.selectOptions.length > 1 ? _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_15__["faCaretDown"] : null;
        }))
            .subscribe();
    }
    getStudentAdmissions(guid) {
        this.store.dispatch(new src_app_store_actions_student_admissions_actions__WEBPACK_IMPORTED_MODULE_7__["GetStudentAdmissions"](guid));
    }
    setSelectedGuid(educationName) {
        const [selectedOption] = this.selectOptions.filter(({ label }) => label === educationName);
        this.store.dispatch(new src_app_store_actions_student_admissions_actions__WEBPACK_IMPORTED_MODULE_7__["SetSelectedGuid"](selectedOption.guid, selectedOption.status, selectedOption.locked, selectedOption.contextColor));
        if (this.platform.isWeb()) {
            this.store.dispatch(new src_app_store_actions_student_audits_actions__WEBPACK_IMPORTED_MODULE_11__["SetShowAuditContent"](true));
        }
    }
    selectedYears(admissionYear) {
        const year = parseInt(admissionYear);
        return (`${year}-${year + 1}`);
    }
    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.unsubscribe();
    }
    admissionsPopover(ev) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.selectOptions.length <= 1)
                return;
            if (this.admissionsMenuOpen) {
                this.admissionPopover.dismiss();
                return;
            }
            this.admissionsMenuOpen = true;
            this.currentAdmission = this.store.selectSnapshot(src_app_store_state_student_admissions_state__WEBPACK_IMPORTED_MODULE_8__["StudentAdmissionsState"]);
            this.admissionPopover = yield this.popoverController.create({
                component: src_app_ui_components_elements_mu_admissions_popover_mu_admissions_popover_component__WEBPACK_IMPORTED_MODULE_13__["MuAdmissionsPopoverComponent"],
                event: ev,
                cssClass: 'application-selector',
                componentProps: {
                    selectOptions: this.selectOptions,
                    selectedYears: this.selectedYears
                },
                translucent: false
            });
            const width = `${document.querySelector(".select-admission").offsetWidth}px`;
            this.admissionPopover.style.setProperty('width', width);
            this.admissionPopover.onDidDismiss().then((result) => {
                this.admissionsMenuOpen = false;
            });
            return yield this.admissionPopover.present();
        });
    }
    /**
     * Keydown function to help accessibility open dropdown
     */
    keydown(e) {
        const key = e.key;
        if (key === " " || key === "Enter") {
            this.selectAdmission.nativeElement.click();
        }
    }
};
MuStudentAdmissionsComponent.ctorParameters = () => [
    { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Store"] },
    { type: src_app_services_platform_service__WEBPACK_IMPORTED_MODULE_10__["PlatformService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_14__["PopoverController"] }
];
MuStudentAdmissionsComponent.propDecorators = {
    selectAdmission: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['selectAdmission',] }]
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Select"])(src_app_store_state_student_admissions_state__WEBPACK_IMPORTED_MODULE_8__["StudentAdmissionsState"].studentAdmissions)
], MuStudentAdmissionsComponent.prototype, "studentAdmissionsStream", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Select"])(src_app_store_state_student_admissions_state__WEBPACK_IMPORTED_MODULE_8__["StudentAdmissionsState"].selectedGuid)
], MuStudentAdmissionsComponent.prototype, "selectedGuidStream", void 0);
MuStudentAdmissionsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'mu-student-admissions',
        template: _raw_loader_student_admissions_component_html__WEBPACK_IMPORTED_MODULE_2__["default"],
        styles: [_student_admissions_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
    })
], MuStudentAdmissionsComponent);



/***/ }),

/***/ "mDD6":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ui-components/features/feedback-notification/feedback-notification.component.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-grid *ngIf=\"feedbackText && feedbackText !== ''\">\n  <ion-row\n    id=\"mu-status-container\"\n    class=\"mu-border-radius mu-flex align-center\"\n  >\n    <ion-col class=\"mu-py2 mu-px3\">\n      <p class=\"g-auto\">\n        <span class=\"mu-color1\">{{labelText}}</span>\n        <span class=\"mu-color1 mu-t-preline\" [innerHTML]=\"feedbackText\" *ngIf=\"!feedbackMultipart\"></span>\n        <ng-container *ngIf=\"feedbackMultipart\">\n          <span class=\"mu-color1 mu-t-preline\">\n            <ng-container *ngFor=\"let feedbackTextPart of feedbackText; let i = index\">\n              {{ feedbackTextPart }}\n              <fa-icon [icon]=\"icon\" *ngIf=\"icon && i === iconPosition\"></fa-icon>\n            </ng-container>\n          </span>\n        </ng-container>\n      </p>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n");

/***/ }),

/***/ "nikB":
/*!***************************************************************************************************!*\
  !*** ./src/app/ui-components/features/profile-picture-upload/profile-picture-upload.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: MuProfilePictureUploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MuProfilePictureUploadComponent", function() { return MuProfilePictureUploadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_profile_picture_upload_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./profile-picture-upload.component.html */ "2zmC");
/* harmony import */ var _profile_picture_upload_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile-picture-upload.component.scss */ "r2Rf");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngxs/store */ "AcyG");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_services_form_data_upload_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/form-data-upload.service */ "hkkO");
/* harmony import */ var src_app_store_state_data_upload_state__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/store/state/data-upload.state */ "Xeri");
/* harmony import */ var src_app_store_state_participant_state__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/store/state/participant.state */ "CKn5");
/* harmony import */ var src_app_store_state_student_audits_state__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/store/state/student-audits.state */ "qGxV");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");














let MuProfilePictureUploadComponent = class MuProfilePictureUploadComponent {
    constructor(store, service, translate, sanitizer, alertController) {
        this.store = store;
        this.service = service;
        this.translate = translate;
        this.sanitizer = sanitizer;
        this.alertController = alertController;
        this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        this.disabled = false;
        this.validationErrors = [];
        this.validationCodes = [];
        this.trashIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faTrash"];
        this.uploadIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faUpload"];
        this.viewIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faEye"];
        this.spinnerIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faSpinner"];
        this.allowedFileExtensions = ['.jpg', '.jpeg', '.png'];
        this.hasUploadedSuccesfully = false;
        this.showPreview = false;
        this.hasConfirmed = false;
    }
    onResize(event) {
        this.setPhotoHeight();
    }
    ngOnInit() {
        this.service.init(this);
    }
    openFileSelectDialogue() {
        this.setPhotoHeight();
        this.showPreview = false;
        this.fileInput.nativeElement.click();
    }
    setPhotoHeight() {
        const width = this.photoFrame.nativeElement.offsetWidth * 1.29;
        this.photoFrame.nativeElement.setAttribute('style', `height: ${width}px`);
    }
    handleSelectFile() {
        this.showPreview = true;
        this.previewUrl = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(this.fileInput.nativeElement.files[0]));
        this.selectedFile = this.fileInput.nativeElement.files[0];
    }
    uploadSelectFile() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const { files } = this.fileInput.nativeElement;
            const formData = new FormData();
            formData.append('admissionNodeID', this.selectedAuditId);
            formData.append('admissionGuid', this.selectedGuid);
            formData.append('myFile', files[0]);
            this.validateSelectedFile();
            if (!this.hasValidationError) {
                yield this.sendFormData(formData);
                this.showPreview = false;
                this.selectedFile = null;
            }
        });
    }
    validateSelectedFile() {
        const img = document.getElementById('portrait-image');
        this.hasValidationError = false;
        this.validationErrors = [];
        this.validationCodes = [];
        if (((this.selectedFile.size / 1024) / 1024) > 10) {
            this.hasValidationError = true;
            this.setErrorMessage('file-size-error');
        }
        const extension = ('.' + this.selectedFile.name.split('.').pop()).toLocaleLowerCase();
        if (!this.allowedFileExtensions.includes(extension)) {
            this.hasValidationError = true;
            this.setErrorMessage('file-type-error', this.allowedFileExtensions.join(', '));
        }
        if (img.naturalWidth < 207) {
            this.hasValidationError = true;
            this.setErrorMessage('image-width-too-small', ` is only ${img.naturalWidth}`);
        }
        if (img.naturalHeight < 266) {
            this.hasValidationError = true;
            this.setErrorMessage('image-height-too-small', ` is only ${img.naturalWidth}`);
        }
    }
    setErrorMessage(message, value) {
        this.validationCodes = [...this.validationCodes, { label: message, value }];
        this.translate.get('profile-picture-upload.' + message, { value }).subscribe((res) => {
            this.validationErrors = [...this.validationErrors, res];
        });
    }
    sendFormData(formData) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.isDispatching = true;
            this.hasDispatchError = false;
            try {
                yield this.service.sendFormData(formData);
            }
            catch (e) {
                this.hasDispatchError = true;
                this.isDispatching = false;
            }
        });
    }
    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }
    showConfirm() {
        this.alertController.create({
            header: this.translate.instant('profile-picture-upload.confirm-dialog-title'),
            message: this.translate.instant('profile-picture-upload.confirm-dialog-text'),
            cssClass: 'confirm-alert',
            buttons: [
                {
                    text: this.translate.instant('profile-picture-upload.confirm-dialog-no')
                },
                {
                    text: this.translate.instant('profile-picture-upload.confirm-dialog-yes'),
                    handler: () => {
                        this.uploadSelectFile();
                    }
                }
            ]
        }).then(res => {
            res.present();
        });
    }
};
MuProfilePictureUploadComponent.ctorParameters = () => [
    { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_7__["Store"] },
    { type: src_app_services_form_data_upload_service__WEBPACK_IMPORTED_MODULE_9__["FormDataUploadService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["DomSanitizer"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] }
];
MuProfilePictureUploadComponent.propDecorators = {
    fileInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['fileInput',] }],
    photoFrame: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['photoFrame',] }],
    fileId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    fileContents: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    onResize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"], args: ['window:resize', ['$event'],] }]
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_7__["Select"])(src_app_store_state_student_audits_state__WEBPACK_IMPORTED_MODULE_12__["StudentAuditsState"].selectedAudit)
], MuProfilePictureUploadComponent.prototype, "selectedAuditStream", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_7__["Select"])(src_app_store_state_data_upload_state__WEBPACK_IMPORTED_MODULE_10__["DataUploadState"].dataUploadState)
], MuProfilePictureUploadComponent.prototype, "dataUploadStateStream", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_7__["Select"])(src_app_store_state_participant_state__WEBPACK_IMPORTED_MODULE_11__["ParticipantState"].languageCode)
], MuProfilePictureUploadComponent.prototype, "dataLanguageCodeStream", void 0);
MuProfilePictureUploadComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'mu-profile-picture-upload',
        template: _raw_loader_profile_picture_upload_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_profile_picture_upload_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MuProfilePictureUploadComponent);



/***/ }),

/***/ "oUeL":
/*!*******************************************!*\
  !*** ./src/app/modules/home/home.page.ts ***!
  \*******************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./home.page.html */ "b0vw");
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.page.scss */ "4FUw");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngxs/store */ "AcyG");
/* harmony import */ var src_app_services_platform_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/platform.service */ "EktT");
/* harmony import */ var src_app_store_state_help_state__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/store/state/help.state */ "H9s2");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_ui_components_features_help_page_help_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/ui-components/features/help-page/help-page.component */ "q03I");
/* harmony import */ var src_app_store_actions_content_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/store/actions/content.actions */ "chTE");
/* harmony import */ var src_app_store_state_message_state__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/store/state/message.state */ "Vnf1");
/* harmony import */ var src_app_ui_components_features_message_center_message_center_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/ui-components/features/message-center/message-center.component */ "y9j2");














let HomePage = class HomePage {
    constructor(platform, modal, store) {
        this.platform = platform;
        this.modal = modal;
        this.store = store;
        this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    ionViewDidEnter() {
        this.setApplicationView();
    }
    ionViewDidLeave() {
        this.setApplicationView(true);
    }
    ngOnInit() {
        this.listenToIsHelpActiveChanges();
        this.listenToIsMessagesActiveChanges();
        this.listenToHelpContentChanges();
    }
    setApplicationView(shouldReset) {
        if (shouldReset) {
            this.renderWebview = false;
            this.renderAppview = false;
            return;
        }
        this.renderWebview = this.platform.isWeb();
        this.renderAppview = !this.renderWebview;
    }
    listenToIsHelpActiveChanges() {
        this.isHelpActiveStream
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this.ngUnsubscribe), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["tap"])((isHelpActive) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (isHelpActive) {
                this.helpModal = yield this.modal.create({
                    component: src_app_ui_components_features_help_page_help_page_component__WEBPACK_IMPORTED_MODULE_10__["MuHelpPageComponent"],
                    componentProps: { helpContent: this.helpContent }
                });
                this.helpModal.onDidDismiss().then(data => {
                    this.store.dispatch(new src_app_store_actions_content_actions__WEBPACK_IMPORTED_MODULE_11__["ToggleHelpIsActive"]());
                });
                yield this.helpModal.present();
            }
        })))
            .subscribe();
    }
    listenToHelpContentChanges() {
        this.selectedHelpStream
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this.ngUnsubscribe), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["filter"])((selectedHelp) => !!selectedHelp && !!selectedHelp.length), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["tap"])((selectedHelp) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.helpContent = selectedHelp;
        })))
            .subscribe();
    }
    listenToIsMessagesActiveChanges() {
        this.isMessagesActiveStream
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this.ngUnsubscribe), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["tap"])((isMessagesActive) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (isMessagesActive) {
                this.messageModal = yield this.modal.create({
                    component: src_app_ui_components_features_message_center_message_center_component__WEBPACK_IMPORTED_MODULE_13__["MuMessageCenterComponent"],
                    cssClass: ['message-modal', 'auto-modal'],
                    backdropDismiss: false
                });
                yield this.messageModal.present();
            }
            else {
                if (this.messageModal) {
                    yield this.messageModal.dismiss();
                }
            }
        })))
            .subscribe();
    }
    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.unsubscribe();
    }
};
HomePage.ctorParameters = () => [
    { type: src_app_services_platform_service__WEBPACK_IMPORTED_MODULE_6__["PlatformService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["ModalController"] },
    { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Store"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Select"])(src_app_store_state_help_state__WEBPACK_IMPORTED_MODULE_7__["HelpState"].isHelpActive)
], HomePage.prototype, "isHelpActiveStream", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Select"])(src_app_store_state_help_state__WEBPACK_IMPORTED_MODULE_7__["HelpState"].selectedHelp)
], HomePage.prototype, "selectedHelpStream", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Select"])(src_app_store_state_message_state__WEBPACK_IMPORTED_MODULE_12__["MessageState"].isMessagesActive)
], HomePage.prototype, "isMessagesActiveStream", void 0);
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HomePage);



/***/ }),

/***/ "pOOd":
/*!*********************************************************************!*\
  !*** ./src/app/ui-components/features/content/content.component.ts ***!
  \*********************************************************************/
/*! exports provided: MuContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MuContentComponent", function() { return MuContentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _content_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./content.component.scss */ "KLuV");
/* harmony import */ var _raw_loader_content_component_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! raw-loader!./content.component.html */ "XTCx");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngxs/store */ "AcyG");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_interfaces_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/interfaces/component */ "E7Uh");
/* harmony import */ var src_app_services_platform_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/platform.service */ "EktT");
/* harmony import */ var src_app_store_state_content_state__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/store/state/content.state */ "bE18");
/* harmony import */ var src_app_store_state_participant_state__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/store/state/participant.state */ "CKn5");
/* harmony import */ var src_app_store_state_student_admissions_state__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/store/state/student-admissions.state */ "qlWn");
/* harmony import */ var src_app_store_state_student_audit_documents_state__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/store/state/student-audit-documents.state */ "VWKi");
/* harmony import */ var src_app_store_state_student_audits_state__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/store/state/student-audits.state */ "qGxV");
















let MuContentComponent = class MuContentComponent extends src_app_interfaces_component__WEBPACK_IMPORTED_MODULE_9__["ApiClass"] {
    constructor(platform, translate, cfr) {
        super(src_app_interfaces_component__WEBPACK_IMPORTED_MODULE_9__["ApiStatusStreamType"].CONTENT);
        this.platform = platform;
        this.translate = translate;
        this.cfr = cfr;
        this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.admissionIsLocked = false;
        this.globeIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faGlobe"];
    }
    ngOnInit() {
        this.isWebview = this.platform.isWeb();
        this.listenToLanguageCodeChanges();
        this.listenToAdmissionLockChanges();
        this.listenToRenderedContentChanges();
        this.listenToSelectedAuditChanges();
        this.listenToSelectedAuditDocumentChanges();
    }
    listenToRenderedContentChanges() {
        this.renderedContentStream
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this.ngUnsubscribe), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["tap"])((renderedContent) => {
            this.renderedContent = renderedContent;
        }))
            .subscribe();
    }
    listenToLanguageCodeChanges() {
        this.languageCodeStream
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this.ngUnsubscribe), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["filter"])((languageCode) => !!languageCode), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["tap"])((languageCode) => {
            this.languageCode = languageCode;
            this.getLinkLabel();
        }))
            .subscribe();
    }
    getLinkLabel() {
        if (this.selectedAudit) {
            this.linkLabel = this.translate.instant(`task-links.${this.selectedAudit.nodeTaskType}`);
        }
    }
    listenToSelectedAuditChanges() {
        this.selectedAuditStream
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this.ngUnsubscribe), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["filter"])((stream) => !!stream), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["tap"])((stream) => {
            this.selectedAudit = stream;
            if (this.selectedAudit.statusText)
                this.getLinkLabel();
            if (this.auditDocuments) {
                this.selectedAuditDocuments = this.auditDocuments.filter(({ nodeId }) => nodeId === this.selectedAudit.id);
            }
        }))
            .subscribe();
    }
    listenToSelectedAuditDocumentChanges() {
        this.selectedAuditDocumentStream
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this.ngUnsubscribe), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["filter"])((stream) => !!stream), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["tap"])((stream) => {
            this.auditDocuments = stream;
            if (this.selectedAudit) {
                this.selectedAuditDocuments = this.auditDocuments.filter(({ nodeId }) => nodeId === this.selectedAudit.id);
            }
        }))
            .subscribe();
    }
    listenToAdmissionLockChanges() {
        this.selectedAdmissionIsLockedStream
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this.ngUnsubscribe), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["filter"])((stream) => !!stream), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["tap"])((stream) => {
            this.admissionIsLocked = stream;
        }))
            .subscribe();
    }
    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }
};
MuContentComponent.ctorParameters = () => [
    { type: src_app_services_platform_service__WEBPACK_IMPORTED_MODULE_10__["PlatformService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ComponentFactoryResolver"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_6__["Select"])(src_app_store_state_participant_state__WEBPACK_IMPORTED_MODULE_12__["ParticipantState"].languageCode)
], MuContentComponent.prototype, "languageCodeStream", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_6__["Select"])(src_app_store_state_content_state__WEBPACK_IMPORTED_MODULE_11__["ContentState"].renderedContent)
], MuContentComponent.prototype, "renderedContentStream", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_6__["Select"])(src_app_store_state_student_audits_state__WEBPACK_IMPORTED_MODULE_15__["StudentAuditsState"].selectedAudit)
], MuContentComponent.prototype, "selectedAuditStream", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_6__["Select"])(src_app_store_state_student_admissions_state__WEBPACK_IMPORTED_MODULE_13__["StudentAdmissionsState"].selectedAdmissionLocked)
], MuContentComponent.prototype, "selectedAdmissionIsLockedStream", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_6__["Select"])(src_app_store_state_student_audit_documents_state__WEBPACK_IMPORTED_MODULE_14__["StudentAuditDocumentsState"].auditDocuments)
], MuContentComponent.prototype, "selectedAuditDocumentStream", void 0);
MuContentComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'mu-content',
        template: _raw_loader_content_component_html__WEBPACK_IMPORTED_MODULE_2__["default"],
        styles: [_content_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
    })
], MuContentComponent);



/***/ }),

/***/ "q03I":
/*!*************************************************************************!*\
  !*** ./src/app/ui-components/features/help-page/help-page.component.ts ***!
  \*************************************************************************/
/*! exports provided: MuHelpPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MuHelpPageComponent", function() { return MuHelpPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_help_page_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./help-page.component.html */ "DoAi");
/* harmony import */ var _help_page_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./help-page.component.scss */ "7mVG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let MuHelpPageComponent = class MuHelpPageComponent {
    constructor() { }
    ngOnInit() { }
};
MuHelpPageComponent.ctorParameters = () => [];
MuHelpPageComponent.propDecorators = {
    helpContent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
MuHelpPageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'mu-help-page',
        template: _raw_loader_help_page_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_help_page_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MuHelpPageComponent);



/***/ }),

/***/ "r2Rf":
/*!*****************************************************************************************************!*\
  !*** ./src/app/ui-components/features/profile-picture-upload/profile-picture-upload.component.scss ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mu-hidden-input {\n  position: absolute;\n  height: 0px;\n  width: 0px;\n  display: none;\n}\n\n.photo-select {\n  display: flex;\n}\n\n.photo-select ion-button {\n  border-radius: 0;\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\nion-button {\n  margin-top: 1em;\n  margin-left: 0px;\n  height: calc(var(--mu-button-text-height) + 2 * var(--mu-spacing-xs));\n}\n\n.photo-uploader {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.photo-uploader fa-icon {\n  margin-right: 0.5em;\n}\n\n.photo-uploader .controls {\n  flex-basis: 70%;\n  padding-right: 1em;\n}\n\n.photo-uploader .controls ion-button {\n  text-transform: none;\n}\n\n.photo-uploader .controls ul {\n  list-style: url(\"/circle-solid.svg\");\n  margin: 2rem;\n}\n\n.photo-uploader .controls ul li {\n  line-height: 2rem;\n}\n\n.photo-uploader .controls .delete-selected {\n  display: flex;\n}\n\n.photo-uploader .controls .delete-selected .fake-input-field {\n  flex-grow: 1;\n  height: calc(var(--mu-button-text-height) + 2 * var(--mu-spacing-xs));\n  border-top: var(--mu-border-width) solid var(--mu-color-border);\n  border-bottom: var(--mu-border-width) solid var(--mu-color-border);\n  border-left: var(--mu-border-width) solid var(--mu-color-border);\n  border-top-left-radius: var(--mu-spacing-xxs);\n  border-bottom-left-radius: var(--mu-spacing-xxs);\n  overflow: hidden;\n  white-space: nowrap;\n  text-align: left;\n  padding-left: 1rem;\n  padding-top: 1rem;\n  font-weight: bolder;\n}\n\n.photo-uploader .controls .delete-selected .fake-input-field .filename {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  vertical-align: middle;\n}\n\n.photo-uploader .controls .delete-selected button {\n  background-color: var(--ion-color-primary);\n  color: var(--ion-color-light);\n  border-top-right-radius: 3px;\n  border-bottom-right-radius: 3px;\n  padding-left: 1em;\n  padding-right: 1em;\n  font-size: 14px;\n  font-family: \"TheSans Regular\", Arial, Helvetica, sans-serif;\n}\n\n.photo-uploader .controls .uploader {\n  margin-top: 1em;\n}\n\n.photo-uploader .preview {\n  flex-basis: 30%;\n}\n\n.photo-uploader .preview #photo-frame {\n  width: 100%;\n}\n\n.photo-uploader .preview #photo-frame img {\n  border-radius: 3px;\n  width: 100%;\n  height: 100%;\n}\n\n@media screen and (max-width: 1000px) {\n  .photo-uploader {\n    flex: 0 1 100%;\n  }\n  .photo-uploader .controls {\n    flex-basis: 100%;\n  }\n  .photo-uploader .preview {\n    flex-basis: 100%;\n  }\n}\n\n.button-native {\n  border-top-left-radius: 80px;\n  text-transform: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxccHJvZmlsZS1waWN0dXJlLXVwbG9hZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0FBQ0Y7O0FBQ0U7RUFDRSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNEJBQUE7QUFDSjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHFFQUFBO0FBQUY7O0FBR0E7RUFDRSxhQUFBO0VBQ0EsZUFBQTtBQUFGOztBQUVFO0VBQ0UsbUJBQUE7QUFBSjs7QUFHRTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtBQURKOztBQUdJO0VBQ0Usb0JBQUE7QUFETjs7QUFJSTtFQUNFLG9DQUFBO0VBQ0EsWUFBQTtBQUZOOztBQUlNO0VBQ0UsaUJBQUE7QUFGUjs7QUFNSTtFQUNFLGFBQUE7QUFKTjs7QUFLTTtFQUNFLFlBQUE7RUFFQSxxRUFBQTtFQUNBLCtEQUFBO0VBQ0Esa0VBQUE7RUFDQSxnRUFBQTtFQUNBLDZDQUFBO0VBQ0EsZ0RBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFKUjs7QUFNUTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0FBSlY7O0FBT007RUFDRSwwQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsNEJBQUE7RUFDQSwrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsNERBQUE7QUFMUjs7QUFRSTtFQUNFLGVBQUE7QUFOTjs7QUFTRTtFQUNFLGVBQUE7QUFQSjs7QUFRSTtFQUNFLFdBQUE7QUFOTjs7QUFPTTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFMUjs7QUFXQTtFQUNFO0lBQ0UsY0FBQTtFQVJGO0VBVUU7SUFDRSxnQkFBQTtFQVJKO0VBV0U7SUFDRSxnQkFBQTtFQVRKO0FBQ0Y7O0FBYUE7RUFDRSw0QkFBQTtFQUNBLG9CQUFBO0FBWEYiLCJmaWxlIjoicHJvZmlsZS1waWN0dXJlLXVwbG9hZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tdS1oaWRkZW4taW5wdXQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMHB4O1xuICB3aWR0aDogMHB4O1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4ucGhvdG8tc2VsZWN0IHtcbiAgZGlzcGxheTogZmxleDtcblxuICBpb24tYnV0dG9uIHtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcbiAgfVxufVxuXG5pb24tYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogMWVtO1xuICBtYXJnaW4tbGVmdDogMHB4O1xuICBoZWlnaHQ6IGNhbGModmFyKC0tbXUtYnV0dG9uLXRleHQtaGVpZ2h0KSArIDIgKiB2YXIoLS1tdS1zcGFjaW5nLXhzKSk7XG59XG5cbi5waG90by11cGxvYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcblxuICBmYS1pY29uIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNWVtO1xuICB9XG5cbiAgLmNvbnRyb2xzIHtcbiAgICBmbGV4LWJhc2lzOiA3MCU7XG4gICAgcGFkZGluZy1yaWdodDogMWVtO1xuXG4gICAgaW9uLWJ1dHRvbntcbiAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgIH1cblxuICAgIHVsIHtcbiAgICAgIGxpc3Qtc3R5bGU6IHVybCgnL2NpcmNsZS1zb2xpZC5zdmcnKTtcbiAgICAgIG1hcmdpbjogMnJlbTtcblxuICAgICAgbGkge1xuICAgICAgICBsaW5lLWhlaWdodDogMnJlbTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuZGVsZXRlLXNlbGVjdGVkIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAuZmFrZS1pbnB1dC1maWVsZCB7XG4gICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgLy9taW4td2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogY2FsYyh2YXIoLS1tdS1idXR0b24tdGV4dC1oZWlnaHQpICsgMiAqIHZhcigtLW11LXNwYWNpbmcteHMpKTtcbiAgICAgICAgYm9yZGVyLXRvcDogdmFyKC0tbXUtYm9yZGVyLXdpZHRoKSBzb2xpZCB2YXIoLS1tdS1jb2xvci1ib3JkZXIpO1xuICAgICAgICBib3JkZXItYm90dG9tOiB2YXIoLS1tdS1ib3JkZXItd2lkdGgpIHNvbGlkIHZhcigtLW11LWNvbG9yLWJvcmRlcik7XG4gICAgICAgIGJvcmRlci1sZWZ0OiB2YXIoLS1tdS1ib3JkZXItd2lkdGgpIHNvbGlkIHZhcigtLW11LWNvbG9yLWJvcmRlcik7XG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IHZhcigtLW11LXNwYWNpbmcteHhzKTtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogdmFyKC0tbXUtc3BhY2luZy14eHMpO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XG4gICAgICAgIHBhZGRpbmctdG9wOiAxcmVtO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xuXG4gICAgICAgIC5maWxlbmFtZSB7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGJ1dHRvbiB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzcHg7XG4gICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAzcHg7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMWVtO1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxZW07XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiVGhlU2FucyBSZWd1bGFyXCIsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAgICB9XG4gICAgfVxuICAgIC51cGxvYWRlcntcbiAgICAgIG1hcmdpbi10b3A6IDFlbTtcbiAgICB9XG4gIH1cbiAgLnByZXZpZXcge1xuICAgIGZsZXgtYmFzaXM6IDMwJTtcbiAgICAjcGhvdG8tZnJhbWV7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGltZ3tcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgLnBob3RvLXVwbG9hZGVyIHtcbiAgICBmbGV4OiAwIDEgMTAwJTtcblxuICAgIC5jb250cm9scyB7XG4gICAgICBmbGV4LWJhc2lzOiAxMDAlO1xuICAgIH1cblxuICAgIC5wcmV2aWV3IHtcbiAgICAgIGZsZXgtYmFzaXM6IDEwMCU7XG4gICAgfVxuICB9XG59XG5cbi5idXR0b24tbmF0aXZlIHtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogODBweDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG59XG4iXX0= */");

/***/ }),

/***/ "rZFE":
/*!**************************************************!*\
  !*** ./src/app/modules/home/home.page.module.ts ***!
  \**************************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "oUeL");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home-routing.module */ "3Clk");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_ui_components_elements_elements_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/ui-components/elements/elements.module */ "nLx+");
/* harmony import */ var _ui_components_features_features_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ui-components/features/features.module */ "IcTe");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");









let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            src_app_ui_components_elements_elements_module__WEBPACK_IMPORTED_MODULE_6__["ElementsModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_4__["HomePageRoutingModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _ui_components_features_features_module__WEBPACK_IMPORTED_MODULE_7__["FeaturesModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]],
    })
], HomePageModule);



/***/ }),

/***/ "sToD":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ui-components/features/message/message.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"message\">\n  <div class=\"message mu-flex align-center\" [class.unread]=\"!message.read\">\n    <span class=\"marker\" *ngIf=\"!message.read\"></span>\n    <div class=\"content mu-flex-grow mu-pr3\">\n      <h5 *ngIf=\"admission\">{{admission}} | {{ \"academic-period.\" + message.academicPeriod | translate }} {{message.studyYear}}</h5>\n      <h4>{{message.subject}}</h4>\n    </div>\n    <div class=\"content ion-text-right\">\n      {{message.send_dt | date:'dd-MMM-yy'}}<br>{{message.send_dt | date:'HH:mm'}}\n    </div>\n  </div>\n</ng-container>");

/***/ }),

/***/ "twK/":
/*!**********************************************************************!*\
  !*** ./node_modules/@fortawesome/free-regular-svg-icons/index.es.js ***!
  \**********************************************************************/
/*! exports provided: far, prefix, faAddressBook, faAddressCard, faAngry, faArrowAltCircleDown, faArrowAltCircleLeft, faArrowAltCircleRight, faArrowAltCircleUp, faBell, faBellSlash, faBookmark, faBuilding, faCalendar, faCalendarAlt, faCalendarCheck, faCalendarMinus, faCalendarPlus, faCalendarTimes, faCaretSquareDown, faCaretSquareLeft, faCaretSquareRight, faCaretSquareUp, faChartBar, faCheckCircle, faCheckSquare, faCircle, faClipboard, faClock, faClone, faClosedCaptioning, faComment, faCommentAlt, faCommentDots, faComments, faCompass, faCopy, faCopyright, faCreditCard, faDizzy, faDotCircle, faEdit, faEnvelope, faEnvelopeOpen, faEye, faEyeSlash, faFile, faFileAlt, faFileArchive, faFileAudio, faFileCode, faFileExcel, faFileImage, faFilePdf, faFilePowerpoint, faFileVideo, faFileWord, faFlag, faFlushed, faFolder, faFolderOpen, faFontAwesomeLogoFull, faFrown, faFrownOpen, faFutbol, faGem, faGrimace, faGrin, faGrinAlt, faGrinBeam, faGrinBeamSweat, faGrinHearts, faGrinSquint, faGrinSquintTears, faGrinStars, faGrinTears, faGrinTongue, faGrinTongueSquint, faGrinTongueWink, faGrinWink, faHandLizard, faHandPaper, faHandPeace, faHandPointDown, faHandPointLeft, faHandPointRight, faHandPointUp, faHandPointer, faHandRock, faHandScissors, faHandSpock, faHandshake, faHdd, faHeart, faHospital, faHourglass, faIdBadge, faIdCard, faImage, faImages, faKeyboard, faKiss, faKissBeam, faKissWinkHeart, faLaugh, faLaughBeam, faLaughSquint, faLaughWink, faLemon, faLifeRing, faLightbulb, faListAlt, faMap, faMeh, faMehBlank, faMehRollingEyes, faMinusSquare, faMoneyBillAlt, faMoon, faNewspaper, faObjectGroup, faObjectUngroup, faPaperPlane, faPauseCircle, faPlayCircle, faPlusSquare, faQuestionCircle, faRegistered, faSadCry, faSadTear, faSave, faShareSquare, faSmile, faSmileBeam, faSmileWink, faSnowflake, faSquare, faStar, faStarHalf, faStickyNote, faStopCircle, faSun, faSurprise, faThumbsDown, faThumbsUp, faTimesCircle, faTired, faTrashAlt, faUser, faUserCircle, faWindowClose, faWindowMaximize, faWindowMinimize, faWindowRestore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "far", function() { return _iconsCache; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prefix", function() { return prefix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faAddressBook", function() { return faAddressBook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faAddressCard", function() { return faAddressCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faAngry", function() { return faAngry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faArrowAltCircleDown", function() { return faArrowAltCircleDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faArrowAltCircleLeft", function() { return faArrowAltCircleLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faArrowAltCircleRight", function() { return faArrowAltCircleRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faArrowAltCircleUp", function() { return faArrowAltCircleUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faBell", function() { return faBell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faBellSlash", function() { return faBellSlash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faBookmark", function() { return faBookmark; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faBuilding", function() { return faBuilding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faCalendar", function() { return faCalendar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faCalendarAlt", function() { return faCalendarAlt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faCalendarCheck", function() { return faCalendarCheck; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faCalendarMinus", function() { return faCalendarMinus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faCalendarPlus", function() { return faCalendarPlus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faCalendarTimes", function() { return faCalendarTimes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faCaretSquareDown", function() { return faCaretSquareDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faCaretSquareLeft", function() { return faCaretSquareLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faCaretSquareRight", function() { return faCaretSquareRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faCaretSquareUp", function() { return faCaretSquareUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faChartBar", function() { return faChartBar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faCheckCircle", function() { return faCheckCircle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faCheckSquare", function() { return faCheckSquare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faCircle", function() { return faCircle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faClipboard", function() { return faClipboard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faClock", function() { return faClock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faClone", function() { return faClone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faClosedCaptioning", function() { return faClosedCaptioning; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faComment", function() { return faComment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faCommentAlt", function() { return faCommentAlt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faCommentDots", function() { return faCommentDots; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faComments", function() { return faComments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faCompass", function() { return faCompass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faCopy", function() { return faCopy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faCopyright", function() { return faCopyright; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faCreditCard", function() { return faCreditCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faDizzy", function() { return faDizzy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faDotCircle", function() { return faDotCircle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faEdit", function() { return faEdit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faEnvelope", function() { return faEnvelope; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faEnvelopeOpen", function() { return faEnvelopeOpen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faEye", function() { return faEye; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faEyeSlash", function() { return faEyeSlash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faFile", function() { return faFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faFileAlt", function() { return faFileAlt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faFileArchive", function() { return faFileArchive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faFileAudio", function() { return faFileAudio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faFileCode", function() { return faFileCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faFileExcel", function() { return faFileExcel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faFileImage", function() { return faFileImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faFilePdf", function() { return faFilePdf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faFilePowerpoint", function() { return faFilePowerpoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faFileVideo", function() { return faFileVideo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faFileWord", function() { return faFileWord; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faFlag", function() { return faFlag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faFlushed", function() { return faFlushed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faFolder", function() { return faFolder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faFolderOpen", function() { return faFolderOpen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faFontAwesomeLogoFull", function() { return faFontAwesomeLogoFull; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faFrown", function() { return faFrown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faFrownOpen", function() { return faFrownOpen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faFutbol", function() { return faFutbol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faGem", function() { return faGem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faGrimace", function() { return faGrimace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faGrin", function() { return faGrin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faGrinAlt", function() { return faGrinAlt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faGrinBeam", function() { return faGrinBeam; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faGrinBeamSweat", function() { return faGrinBeamSweat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faGrinHearts", function() { return faGrinHearts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faGrinSquint", function() { return faGrinSquint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faGrinSquintTears", function() { return faGrinSquintTears; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faGrinStars", function() { return faGrinStars; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faGrinTears", function() { return faGrinTears; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faGrinTongue", function() { return faGrinTongue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faGrinTongueSquint", function() { return faGrinTongueSquint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faGrinTongueWink", function() { return faGrinTongueWink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faGrinWink", function() { return faGrinWink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faHandLizard", function() { return faHandLizard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faHandPaper", function() { return faHandPaper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faHandPeace", function() { return faHandPeace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faHandPointDown", function() { return faHandPointDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faHandPointLeft", function() { return faHandPointLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faHandPointRight", function() { return faHandPointRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faHandPointUp", function() { return faHandPointUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faHandPointer", function() { return faHandPointer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faHandRock", function() { return faHandRock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faHandScissors", function() { return faHandScissors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faHandSpock", function() { return faHandSpock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faHandshake", function() { return faHandshake; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faHdd", function() { return faHdd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faHeart", function() { return faHeart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faHospital", function() { return faHospital; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faHourglass", function() { return faHourglass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faIdBadge", function() { return faIdBadge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faIdCard", function() { return faIdCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faImage", function() { return faImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faImages", function() { return faImages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faKeyboard", function() { return faKeyboard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faKiss", function() { return faKiss; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faKissBeam", function() { return faKissBeam; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faKissWinkHeart", function() { return faKissWinkHeart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faLaugh", function() { return faLaugh; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faLaughBeam", function() { return faLaughBeam; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faLaughSquint", function() { return faLaughSquint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faLaughWink", function() { return faLaughWink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faLemon", function() { return faLemon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faLifeRing", function() { return faLifeRing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faLightbulb", function() { return faLightbulb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faListAlt", function() { return faListAlt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faMap", function() { return faMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faMeh", function() { return faMeh; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faMehBlank", function() { return faMehBlank; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faMehRollingEyes", function() { return faMehRollingEyes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faMinusSquare", function() { return faMinusSquare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faMoneyBillAlt", function() { return faMoneyBillAlt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faMoon", function() { return faMoon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faNewspaper", function() { return faNewspaper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faObjectGroup", function() { return faObjectGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faObjectUngroup", function() { return faObjectUngroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faPaperPlane", function() { return faPaperPlane; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faPauseCircle", function() { return faPauseCircle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faPlayCircle", function() { return faPlayCircle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faPlusSquare", function() { return faPlusSquare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faQuestionCircle", function() { return faQuestionCircle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faRegistered", function() { return faRegistered; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faSadCry", function() { return faSadCry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faSadTear", function() { return faSadTear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faSave", function() { return faSave; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faShareSquare", function() { return faShareSquare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faSmile", function() { return faSmile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faSmileBeam", function() { return faSmileBeam; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faSmileWink", function() { return faSmileWink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faSnowflake", function() { return faSnowflake; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faSquare", function() { return faSquare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faStar", function() { return faStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faStarHalf", function() { return faStarHalf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faStickyNote", function() { return faStickyNote; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faStopCircle", function() { return faStopCircle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faSun", function() { return faSun; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faSurprise", function() { return faSurprise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faThumbsDown", function() { return faThumbsDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faThumbsUp", function() { return faThumbsUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faTimesCircle", function() { return faTimesCircle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faTired", function() { return faTired; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faTrashAlt", function() { return faTrashAlt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faUser", function() { return faUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faUserCircle", function() { return faUserCircle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faWindowClose", function() { return faWindowClose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faWindowMaximize", function() { return faWindowMaximize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faWindowMinimize", function() { return faWindowMinimize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faWindowRestore", function() { return faWindowRestore; });
/*!
 * Font Awesome Free 5.15.3 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */
var prefix = "far";
var faAddressBook = {
  prefix: 'far',
  iconName: 'address-book',
  icon: [448, 512, [], "f2b9", "M436 160c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-20V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48v-48h20c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-20v-64h20c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-20v-64h20zm-68 304H48V48h320v416zM208 256c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm-89.6 128h179.2c12.4 0 22.4-8.6 22.4-19.2v-19.2c0-31.8-30.1-57.6-67.2-57.6-10.8 0-18.7 8-44.8 8-26.9 0-33.4-8-44.8-8-37.1 0-67.2 25.8-67.2 57.6v19.2c0 10.6 10 19.2 22.4 19.2z"]
};
var faAddressCard = {
  prefix: 'far',
  iconName: 'address-card',
  icon: [576, 512, [], "f2bb", "M528 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm0 400H48V80h480v352zM208 256c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm-89.6 128h179.2c12.4 0 22.4-8.6 22.4-19.2v-19.2c0-31.8-30.1-57.6-67.2-57.6-10.8 0-18.7 8-44.8 8-26.9 0-33.4-8-44.8-8-37.1 0-67.2 25.8-67.2 57.6v19.2c0 10.6 10 19.2 22.4 19.2zM360 320h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8H360c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8zm0-64h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8H360c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8zm0-64h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8H360c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8z"]
};
var faAngry = {
  prefix: 'far',
  iconName: 'angry',
  icon: [496, 512, [], "f556", "M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-110.3 0-200-89.7-200-200S137.7 56 248 56s200 89.7 200 200-89.7 200-200 200zm0-144c-33.6 0-65.2 14.8-86.8 40.6-8.5 10.2-7.1 25.3 3.1 33.8s25.3 7.2 33.8-3c24.8-29.7 75-29.7 99.8 0 8.1 9.7 23.2 11.9 33.8 3 10.2-8.5 11.5-23.6 3.1-33.8-21.6-25.8-53.2-40.6-86.8-40.6zm-48-72c10.3 0 19.9-6.7 23-17.1 3.8-12.7-3.4-26.1-16.1-29.9l-80-24c-12.8-3.9-26.1 3.4-29.9 16.1-3.8 12.7 3.4 26.1 16.1 29.9l28.2 8.5c-3.1 4.9-5.3 10.4-5.3 16.6 0 17.7 14.3 32 32 32s32-14.4 32-32.1zm199-54.9c-3.8-12.7-17.1-19.9-29.9-16.1l-80 24c-12.7 3.8-19.9 17.2-16.1 29.9 3.1 10.4 12.7 17.1 23 17.1 0 17.7 14.3 32 32 32s32-14.3 32-32c0-6.2-2.2-11.7-5.3-16.6l28.2-8.5c12.7-3.7 19.9-17.1 16.1-29.8z"]
};
var faArrowAltCircleDown = {
  prefix: 'far',
  iconName: 'arrow-alt-circle-down',
  icon: [512, 512, [], "f358", "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm-32-316v116h-67c-10.7 0-16 12.9-8.5 20.5l99 99c4.7 4.7 12.3 4.7 17 0l99-99c7.6-7.6 2.2-20.5-8.5-20.5h-67V140c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12z"]
};
var faArrowAltCircleLeft = {
  prefix: 'far',
  iconName: 'arrow-alt-circle-left',
  icon: [512, 512, [], "f359", "M8 256c0 137 111 248 248 248s248-111 248-248S393 8 256 8 8 119 8 256zm448 0c0 110.5-89.5 200-200 200S56 366.5 56 256 145.5 56 256 56s200 89.5 200 200zm-72-20v40c0 6.6-5.4 12-12 12H256v67c0 10.7-12.9 16-20.5 8.5l-99-99c-4.7-4.7-4.7-12.3 0-17l99-99c7.6-7.6 20.5-2.2 20.5 8.5v67h116c6.6 0 12 5.4 12 12z"]
};
var faArrowAltCircleRight = {
  prefix: 'far',
  iconName: 'arrow-alt-circle-right',
  icon: [512, 512, [], "f35a", "M504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256zm72 20v-40c0-6.6 5.4-12 12-12h116v-67c0-10.7 12.9-16 20.5-8.5l99 99c4.7 4.7 4.7 12.3 0 17l-99 99c-7.6 7.6-20.5 2.2-20.5-8.5v-67H140c-6.6 0-12-5.4-12-12z"]
};
var faArrowAltCircleUp = {
  prefix: 'far',
  iconName: 'arrow-alt-circle-up',
  icon: [512, 512, [], "f35b", "M256 504c137 0 248-111 248-248S393 8 256 8 8 119 8 256s111 248 248 248zm0-448c110.5 0 200 89.5 200 200s-89.5 200-200 200S56 366.5 56 256 145.5 56 256 56zm20 328h-40c-6.6 0-12-5.4-12-12V256h-67c-10.7 0-16-12.9-8.5-20.5l99-99c4.7-4.7 12.3-4.7 17 0l99 99c7.6 7.6 2.2 20.5-8.5 20.5h-67v116c0 6.6-5.4 12-12 12z"]
};
var faBell = {
  prefix: 'far',
  iconName: 'bell',
  icon: [448, 512, [], "f0f3", "M439.39 362.29c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71zM67.53 368c21.22-27.97 44.42-74.33 44.53-159.42 0-.2-.06-.38-.06-.58 0-61.86 50.14-112 112-112s112 50.14 112 112c0 .2-.06.38-.06.58.11 85.1 23.31 131.46 44.53 159.42H67.53zM224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64z"]
};
var faBellSlash = {
  prefix: 'far',
  iconName: 'bell-slash',
  icon: [640, 512, [], "f1f6", "M633.99 471.02L36 3.51C29.1-2.01 19.03-.9 13.51 6l-10 12.49C-2.02 25.39-.9 35.46 6 40.98l598 467.51c6.9 5.52 16.96 4.4 22.49-2.49l10-12.49c5.52-6.9 4.41-16.97-2.5-22.49zM163.53 368c16.71-22.03 34.48-55.8 41.4-110.58l-45.47-35.55c-3.27 90.73-36.47 120.68-54.84 140.42-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h279.66l-61.4-48H163.53zM320 96c61.86 0 112 50.14 112 112 0 .2-.06.38-.06.58.02 16.84 1.16 31.77 2.79 45.73l59.53 46.54c-8.31-22.13-14.34-51.49-14.34-92.85 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84c-26.02 5.41-49.45 16.94-69.13 32.72l38.17 29.84C275 103.18 296.65 96 320 96zm0 416c35.32 0 63.97-28.65 63.97-64H256.03c0 35.35 28.65 64 63.97 64z"]
};
var faBookmark = {
  prefix: 'far',
  iconName: 'bookmark',
  icon: [384, 512, [], "f02e", "M336 0H48C21.49 0 0 21.49 0 48v464l192-112 192 112V48c0-26.51-21.49-48-48-48zm0 428.43l-144-84-144 84V54a6 6 0 0 1 6-6h276c3.314 0 6 2.683 6 5.996V428.43z"]
};
var faBuilding = {
  prefix: 'far',
  iconName: 'building',
  icon: [448, 512, [], "f1ad", "M128 148v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12zm140 12h40c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12zm-128 96h40c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12zm128 0h40c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12zm-76 84v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm76 12h40c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12zm180 124v36H0v-36c0-6.6 5.4-12 12-12h19.5V24c0-13.3 10.7-24 24-24h337c13.3 0 24 10.7 24 24v440H436c6.6 0 12 5.4 12 12zM79.5 463H192v-67c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v67h112.5V49L80 48l-.5 415z"]
};
var faCalendar = {
  prefix: 'far',
  iconName: 'calendar',
  icon: [448, 512, [], "f133", "M400 64h-48V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H160V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zm-6 400H54c-3.3 0-6-2.7-6-6V160h352v298c0 3.3-2.7 6-6 6z"]
};
var faCalendarAlt = {
  prefix: 'far',
  iconName: 'calendar-alt',
  icon: [448, 512, [], "f073", "M148 288h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm108-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 96v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96-260v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"]
};
var faCalendarCheck = {
  prefix: 'far',
  iconName: 'calendar-check',
  icon: [448, 512, [], "f274", "M400 64h-48V12c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v52H160V12c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v52H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm-6 400H54a6 6 0 0 1-6-6V160h352v298a6 6 0 0 1-6 6zm-52.849-200.65L198.842 404.519c-4.705 4.667-12.303 4.637-16.971-.068l-75.091-75.699c-4.667-4.705-4.637-12.303.068-16.971l22.719-22.536c4.705-4.667 12.303-4.637 16.97.069l44.104 44.461 111.072-110.181c4.705-4.667 12.303-4.637 16.971.068l22.536 22.718c4.667 4.705 4.636 12.303-.069 16.97z"]
};
var faCalendarMinus = {
  prefix: 'far',
  iconName: 'calendar-minus',
  icon: [448, 512, [], "f272", "M124 328c-6.6 0-12-5.4-12-12v-24c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v24c0 6.6-5.4 12-12 12H124zm324-216v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"]
};
var faCalendarPlus = {
  prefix: 'far',
  iconName: 'calendar-plus',
  icon: [448, 512, [], "f271", "M336 292v24c0 6.6-5.4 12-12 12h-76v76c0 6.6-5.4 12-12 12h-24c-6.6 0-12-5.4-12-12v-76h-76c-6.6 0-12-5.4-12-12v-24c0-6.6 5.4-12 12-12h76v-76c0-6.6 5.4-12 12-12h24c6.6 0 12 5.4 12 12v76h76c6.6 0 12 5.4 12 12zm112-180v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"]
};
var faCalendarTimes = {
  prefix: 'far',
  iconName: 'calendar-times',
  icon: [448, 512, [], "f273", "M311.7 374.7l-17 17c-4.7 4.7-12.3 4.7-17 0L224 337.9l-53.7 53.7c-4.7 4.7-12.3 4.7-17 0l-17-17c-4.7-4.7-4.7-12.3 0-17l53.7-53.7-53.7-53.7c-4.7-4.7-4.7-12.3 0-17l17-17c4.7-4.7 12.3-4.7 17 0l53.7 53.7 53.7-53.7c4.7-4.7 12.3-4.7 17 0l17 17c4.7 4.7 4.7 12.3 0 17L257.9 304l53.7 53.7c4.8 4.7 4.8 12.3.1 17zM448 112v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"]
};
var faCaretSquareDown = {
  prefix: 'far',
  iconName: 'caret-square-down',
  icon: [448, 512, [], "f150", "M125.1 208h197.8c10.7 0 16.1 13 8.5 20.5l-98.9 98.3c-4.7 4.7-12.2 4.7-16.9 0l-98.9-98.3c-7.7-7.5-2.3-20.5 8.4-20.5zM448 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zm-48 346V86c0-3.3-2.7-6-6-6H54c-3.3 0-6 2.7-6 6v340c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"]
};
var faCaretSquareLeft = {
  prefix: 'far',
  iconName: 'caret-square-left',
  icon: [448, 512, [], "f191", "M272 157.1v197.8c0 10.7-13 16.1-20.5 8.5l-98.3-98.9c-4.7-4.7-4.7-12.2 0-16.9l98.3-98.9c7.5-7.7 20.5-2.3 20.5 8.4zM448 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zm-48 346V86c0-3.3-2.7-6-6-6H54c-3.3 0-6 2.7-6 6v340c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"]
};
var faCaretSquareRight = {
  prefix: 'far',
  iconName: 'caret-square-right',
  icon: [448, 512, [], "f152", "M176 354.9V157.1c0-10.7 13-16.1 20.5-8.5l98.3 98.9c4.7 4.7 4.7 12.2 0 16.9l-98.3 98.9c-7.5 7.7-20.5 2.3-20.5-8.4zM448 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zm-48 346V86c0-3.3-2.7-6-6-6H54c-3.3 0-6 2.7-6 6v340c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"]
};
var faCaretSquareUp = {
  prefix: 'far',
  iconName: 'caret-square-up',
  icon: [448, 512, [], "f151", "M322.9 304H125.1c-10.7 0-16.1-13-8.5-20.5l98.9-98.3c4.7-4.7 12.2-4.7 16.9 0l98.9 98.3c7.7 7.5 2.3 20.5-8.4 20.5zM448 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zm-48 346V86c0-3.3-2.7-6-6-6H54c-3.3 0-6 2.7-6 6v340c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"]
};
var faChartBar = {
  prefix: 'far',
  iconName: 'chart-bar',
  icon: [512, 512, [], "f080", "M396.8 352h22.4c6.4 0 12.8-6.4 12.8-12.8V108.8c0-6.4-6.4-12.8-12.8-12.8h-22.4c-6.4 0-12.8 6.4-12.8 12.8v230.4c0 6.4 6.4 12.8 12.8 12.8zm-192 0h22.4c6.4 0 12.8-6.4 12.8-12.8V140.8c0-6.4-6.4-12.8-12.8-12.8h-22.4c-6.4 0-12.8 6.4-12.8 12.8v198.4c0 6.4 6.4 12.8 12.8 12.8zm96 0h22.4c6.4 0 12.8-6.4 12.8-12.8V204.8c0-6.4-6.4-12.8-12.8-12.8h-22.4c-6.4 0-12.8 6.4-12.8 12.8v134.4c0 6.4 6.4 12.8 12.8 12.8zM496 400H48V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16zm-387.2-48h22.4c6.4 0 12.8-6.4 12.8-12.8v-70.4c0-6.4-6.4-12.8-12.8-12.8h-22.4c-6.4 0-12.8 6.4-12.8 12.8v70.4c0 6.4 6.4 12.8 12.8 12.8z"]
};
var faCheckCircle = {
  prefix: 'far',
  iconName: 'check-circle',
  icon: [512, 512, [], "f058", "M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z"]
};
var faCheckSquare = {
  prefix: 'far',
  iconName: 'check-square',
  icon: [448, 512, [], "f14a", "M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zm0 400H48V80h352v352zm-35.864-241.724L191.547 361.48c-4.705 4.667-12.303 4.637-16.97-.068l-90.781-91.516c-4.667-4.705-4.637-12.303.069-16.971l22.719-22.536c4.705-4.667 12.303-4.637 16.97.069l59.792 60.277 141.352-140.216c4.705-4.667 12.303-4.637 16.97.068l22.536 22.718c4.667 4.706 4.637 12.304-.068 16.971z"]
};
var faCircle = {
  prefix: 'far',
  iconName: 'circle',
  icon: [512, 512, [], "f111", "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200z"]
};
var faClipboard = {
  prefix: 'far',
  iconName: 'clipboard',
  icon: [384, 512, [], "f328", "M336 64h-80c0-35.3-28.7-64-64-64s-64 28.7-64 64H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM192 40c13.3 0 24 10.7 24 24s-10.7 24-24 24-24-10.7-24-24 10.7-24 24-24zm144 418c0 3.3-2.7 6-6 6H54c-3.3 0-6-2.7-6-6V118c0-3.3 2.7-6 6-6h42v36c0 6.6 5.4 12 12 12h168c6.6 0 12-5.4 12-12v-36h42c3.3 0 6 2.7 6 6z"]
};
var faClock = {
  prefix: 'far',
  iconName: 'clock',
  icon: [512, 512, [], "f017", "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"]
};
var faClone = {
  prefix: 'far',
  iconName: 'clone',
  icon: [512, 512, [], "f24d", "M464 0H144c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h320c26.51 0 48-21.49 48-48v-48h48c26.51 0 48-21.49 48-48V48c0-26.51-21.49-48-48-48zM362 464H54a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h42v224c0 26.51 21.49 48 48 48h224v42a6 6 0 0 1-6 6zm96-96H150a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h308a6 6 0 0 1 6 6v308a6 6 0 0 1-6 6z"]
};
var faClosedCaptioning = {
  prefix: 'far',
  iconName: 'closed-captioning',
  icon: [512, 512, [], "f20a", "M464 64H48C21.5 64 0 85.5 0 112v288c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zm-6 336H54c-3.3 0-6-2.7-6-6V118c0-3.3 2.7-6 6-6h404c3.3 0 6 2.7 6 6v276c0 3.3-2.7 6-6 6zm-211.1-85.7c1.7 2.4 1.5 5.6-.5 7.7-53.6 56.8-172.8 32.1-172.8-67.9 0-97.3 121.7-119.5 172.5-70.1 2.1 2 2.5 3.2 1 5.7l-17.5 30.5c-1.9 3.1-6.2 4-9.1 1.7-40.8-32-94.6-14.9-94.6 31.2 0 48 51 70.5 92.2 32.6 2.8-2.5 7.1-2.1 9.2.9l19.6 27.7zm190.4 0c1.7 2.4 1.5 5.6-.5 7.7-53.6 56.9-172.8 32.1-172.8-67.9 0-97.3 121.7-119.5 172.5-70.1 2.1 2 2.5 3.2 1 5.7L420 220.2c-1.9 3.1-6.2 4-9.1 1.7-40.8-32-94.6-14.9-94.6 31.2 0 48 51 70.5 92.2 32.6 2.8-2.5 7.1-2.1 9.2.9l19.6 27.7z"]
};
var faComment = {
  prefix: 'far',
  iconName: 'comment',
  icon: [512, 512, [], "f075", "M256 32C114.6 32 0 125.1 0 240c0 47.6 19.9 91.2 52.9 126.3C38 405.7 7 439.1 6.5 439.5c-6.6 7-8.4 17.2-4.6 26S14.4 480 24 480c61.5 0 110-25.7 139.1-46.3C192 442.8 223.2 448 256 448c141.4 0 256-93.1 256-208S397.4 32 256 32zm0 368c-26.7 0-53.1-4.1-78.4-12.1l-22.7-7.2-19.5 13.8c-14.3 10.1-33.9 21.4-57.5 29 7.3-12.1 14.4-25.7 19.9-40.2l10.6-28.1-20.6-21.8C69.7 314.1 48 282.2 48 240c0-88.2 93.3-160 208-160s208 71.8 208 160-93.3 160-208 160z"]
};
var faCommentAlt = {
  prefix: 'far',
  iconName: 'comment-alt',
  icon: [512, 512, [], "f27a", "M448 0H64C28.7 0 0 28.7 0 64v288c0 35.3 28.7 64 64 64h96v84c0 7.1 5.8 12 12 12 2.4 0 4.9-.7 7.1-2.4L304 416h144c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zm16 352c0 8.8-7.2 16-16 16H288l-12.8 9.6L208 428v-60H64c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16h384c8.8 0 16 7.2 16 16v288z"]
};
var faCommentDots = {
  prefix: 'far',
  iconName: 'comment-dots',
  icon: [512, 512, [], "f4ad", "M144 208c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm112 0c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm112 0c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zM256 32C114.6 32 0 125.1 0 240c0 47.6 19.9 91.2 52.9 126.3C38 405.7 7 439.1 6.5 439.5c-6.6 7-8.4 17.2-4.6 26S14.4 480 24 480c61.5 0 110-25.7 139.1-46.3C192 442.8 223.2 448 256 448c141.4 0 256-93.1 256-208S397.4 32 256 32zm0 368c-26.7 0-53.1-4.1-78.4-12.1l-22.7-7.2-19.5 13.8c-14.3 10.1-33.9 21.4-57.5 29 7.3-12.1 14.4-25.7 19.9-40.2l10.6-28.1-20.6-21.8C69.7 314.1 48 282.2 48 240c0-88.2 93.3-160 208-160s208 71.8 208 160-93.3 160-208 160z"]
};
var faComments = {
  prefix: 'far',
  iconName: 'comments',
  icon: [576, 512, [], "f086", "M532 386.2c27.5-27.1 44-61.1 44-98.2 0-80-76.5-146.1-176.2-157.9C368.3 72.5 294.3 32 208 32 93.1 32 0 103.6 0 192c0 37 16.5 71 44 98.2-15.3 30.7-37.3 54.5-37.7 54.9-6.3 6.7-8.1 16.5-4.4 25 3.6 8.5 12 14 21.2 14 53.5 0 96.7-20.2 125.2-38.8 9.2 2.1 18.7 3.7 28.4 4.9C208.1 407.6 281.8 448 368 448c20.8 0 40.8-2.4 59.8-6.8C456.3 459.7 499.4 480 553 480c9.2 0 17.5-5.5 21.2-14 3.6-8.5 1.9-18.3-4.4-25-.4-.3-22.5-24.1-37.8-54.8zm-392.8-92.3L122.1 305c-14.1 9.1-28.5 16.3-43.1 21.4 2.7-4.7 5.4-9.7 8-14.8l15.5-31.1L77.7 256C64.2 242.6 48 220.7 48 192c0-60.7 73.3-112 160-112s160 51.3 160 112-73.3 112-160 112c-16.5 0-33-1.9-49-5.6l-19.8-4.5zM498.3 352l-24.7 24.4 15.5 31.1c2.6 5.1 5.3 10.1 8 14.8-14.6-5.1-29-12.3-43.1-21.4l-17.1-11.1-19.9 4.6c-16 3.7-32.5 5.6-49 5.6-54 0-102.2-20.1-131.3-49.7C338 339.5 416 272.9 416 192c0-3.4-.4-6.7-.7-10C479.7 196.5 528 238.8 528 288c0 28.7-16.2 50.6-29.7 64z"]
};
var faCompass = {
  prefix: 'far',
  iconName: 'compass',
  icon: [496, 512, [], "f14e", "M347.94 129.86L203.6 195.83a31.938 31.938 0 0 0-15.77 15.77l-65.97 144.34c-7.61 16.65 9.54 33.81 26.2 26.2l144.34-65.97a31.938 31.938 0 0 0 15.77-15.77l65.97-144.34c7.61-16.66-9.54-33.81-26.2-26.2zm-77.36 148.72c-12.47 12.47-32.69 12.47-45.16 0-12.47-12.47-12.47-32.69 0-45.16 12.47-12.47 32.69-12.47 45.16 0 12.47 12.47 12.47 32.69 0 45.16zM248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm0 448c-110.28 0-200-89.72-200-200S137.72 56 248 56s200 89.72 200 200-89.72 200-200 200z"]
};
var faCopy = {
  prefix: 'far',
  iconName: 'copy',
  icon: [448, 512, [], "f0c5", "M433.941 65.941l-51.882-51.882A48 48 0 0 0 348.118 0H176c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h224c26.51 0 48-21.49 48-48v-48h80c26.51 0 48-21.49 48-48V99.882a48 48 0 0 0-14.059-33.941zM266 464H54a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h74v224c0 26.51 21.49 48 48 48h96v42a6 6 0 0 1-6 6zm128-96H182a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h106v88c0 13.255 10.745 24 24 24h88v202a6 6 0 0 1-6 6zm6-256h-64V48h9.632c1.591 0 3.117.632 4.243 1.757l48.368 48.368a6 6 0 0 1 1.757 4.243V112z"]
};
var faCopyright = {
  prefix: 'far',
  iconName: 'copyright',
  icon: [512, 512, [], "f1f9", "M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 448c-110.532 0-200-89.451-200-200 0-110.531 89.451-200 200-200 110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200zm107.351-101.064c-9.614 9.712-45.53 41.396-104.065 41.396-82.43 0-140.484-61.425-140.484-141.567 0-79.152 60.275-139.401 139.762-139.401 55.531 0 88.738 26.62 97.593 34.779a11.965 11.965 0 0 1 1.936 15.322l-18.155 28.113c-3.841 5.95-11.966 7.282-17.499 2.921-8.595-6.776-31.814-22.538-61.708-22.538-48.303 0-77.916 35.33-77.916 80.082 0 41.589 26.888 83.692 78.277 83.692 32.657 0 56.843-19.039 65.726-27.225 5.27-4.857 13.596-4.039 17.82 1.738l19.865 27.17a11.947 11.947 0 0 1-1.152 15.518z"]
};
var faCreditCard = {
  prefix: 'far',
  iconName: 'credit-card',
  icon: [576, 512, [], "f09d", "M527.9 32H48.1C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48.1 48h479.8c26.6 0 48.1-21.5 48.1-48V80c0-26.5-21.5-48-48.1-48zM54.1 80h467.8c3.3 0 6 2.7 6 6v42H48.1V86c0-3.3 2.7-6 6-6zm467.8 352H54.1c-3.3 0-6-2.7-6-6V256h479.8v170c0 3.3-2.7 6-6 6zM192 332v40c0 6.6-5.4 12-12 12h-72c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12zm192 0v40c0 6.6-5.4 12-12 12H236c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12z"]
};
var faDizzy = {
  prefix: 'far',
  iconName: 'dizzy',
  icon: [496, 512, [], "f567", "M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-110.3 0-200-89.7-200-200S137.7 56 248 56s200 89.7 200 200-89.7 200-200 200zm-33.8-217.9c7.8-7.8 7.8-20.5 0-28.3L196.3 192l17.9-17.9c7.8-7.8 7.8-20.5 0-28.3-7.8-7.8-20.5-7.8-28.3 0L168 163.7l-17.8-17.8c-7.8-7.8-20.5-7.8-28.3 0-7.8 7.8-7.8 20.5 0 28.3l17.9 17.9-17.9 17.9c-7.8 7.8-7.8 20.5 0 28.3 7.8 7.8 20.5 7.8 28.3 0l17.8-17.8 17.8 17.8c7.9 7.7 20.5 7.7 28.4-.2zm160-92.2c-7.8-7.8-20.5-7.8-28.3 0L328 163.7l-17.8-17.8c-7.8-7.8-20.5-7.8-28.3 0-7.8 7.8-7.8 20.5 0 28.3l17.9 17.9-17.9 17.9c-7.8 7.8-7.8 20.5 0 28.3 7.8 7.8 20.5 7.8 28.3 0l17.8-17.8 17.8 17.8c7.8 7.8 20.5 7.8 28.3 0 7.8-7.8 7.8-20.5 0-28.3l-17.8-18 17.9-17.9c7.7-7.8 7.7-20.4 0-28.2zM248 272c-35.3 0-64 28.7-64 64s28.7 64 64 64 64-28.7 64-64-28.7-64-64-64z"]
};
var faDotCircle = {
  prefix: 'far',
  iconName: 'dot-circle',
  icon: [512, 512, [], "f192", "M256 56c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m0-48C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 168c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80z"]
};
var faEdit = {
  prefix: 'far',
  iconName: 'edit',
  icon: [576, 512, [], "f044", "M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"]
};
var faEnvelope = {
  prefix: 'far',
  iconName: 'envelope',
  icon: [512, 512, [], "f0e0", "M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"]
};
var faEnvelopeOpen = {
  prefix: 'far',
  iconName: 'envelope-open',
  icon: [512, 512, [], "f2b6", "M494.586 164.516c-4.697-3.883-111.723-89.95-135.251-108.657C337.231 38.191 299.437 0 256 0c-43.205 0-80.636 37.717-103.335 55.859-24.463 19.45-131.07 105.195-135.15 108.549A48.004 48.004 0 0 0 0 201.485V464c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V201.509a48 48 0 0 0-17.414-36.993zM464 458a6 6 0 0 1-6 6H54a6 6 0 0 1-6-6V204.347c0-1.813.816-3.526 2.226-4.665 15.87-12.814 108.793-87.554 132.364-106.293C200.755 78.88 232.398 48 256 48c23.693 0 55.857 31.369 73.41 45.389 23.573 18.741 116.503 93.493 132.366 106.316a5.99 5.99 0 0 1 2.224 4.663V458zm-31.991-187.704c4.249 5.159 3.465 12.795-1.745 16.981-28.975 23.283-59.274 47.597-70.929 56.863C336.636 362.283 299.205 400 256 400c-43.452 0-81.287-38.237-103.335-55.86-11.279-8.967-41.744-33.413-70.927-56.865-5.21-4.187-5.993-11.822-1.745-16.981l15.258-18.528c4.178-5.073 11.657-5.843 16.779-1.726 28.618 23.001 58.566 47.035 70.56 56.571C200.143 320.631 232.307 352 256 352c23.602 0 55.246-30.88 73.41-45.389 11.994-9.535 41.944-33.57 70.563-56.568 5.122-4.116 12.601-3.346 16.778 1.727l15.258 18.526z"]
};
var faEye = {
  prefix: 'far',
  iconName: 'eye',
  icon: [576, 512, [], "f06e", "M288 144a110.94 110.94 0 0 0-31.24 5 55.4 55.4 0 0 1 7.24 27 56 56 0 0 1-56 56 55.4 55.4 0 0 1-27-7.24A111.71 111.71 0 1 0 288 144zm284.52 97.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400c-98.65 0-189.09-55-237.93-144C98.91 167 189.34 112 288 112s189.09 55 237.93 144C477.1 345 386.66 400 288 400z"]
};
var faEyeSlash = {
  prefix: 'far',
  iconName: 'eye-slash',
  icon: [640, 512, [], "f070", "M634 471L36 3.51A16 16 0 0 0 13.51 6l-10 12.49A16 16 0 0 0 6 41l598 467.49a16 16 0 0 0 22.49-2.49l10-12.49A16 16 0 0 0 634 471zM296.79 146.47l134.79 105.38C429.36 191.91 380.48 144 320 144a112.26 112.26 0 0 0-23.21 2.47zm46.42 219.07L208.42 260.16C210.65 320.09 259.53 368 320 368a113 113 0 0 0 23.21-2.46zM320 112c98.65 0 189.09 55 237.93 144a285.53 285.53 0 0 1-44 60.2l37.74 29.5a333.7 333.7 0 0 0 52.9-75.11 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64c-36.7 0-71.71 7-104.63 18.81l46.41 36.29c18.94-4.3 38.34-7.1 58.22-7.1zm0 288c-98.65 0-189.08-55-237.93-144a285.47 285.47 0 0 1 44.05-60.19l-37.74-29.5a333.6 333.6 0 0 0-52.89 75.1 32.35 32.35 0 0 0 0 29.19C89.72 376.41 197.08 448 320 448c36.7 0 71.71-7.05 104.63-18.81l-46.41-36.28C359.28 397.2 339.89 400 320 400z"]
};
var faFile = {
  prefix: 'far',
  iconName: 'file',
  icon: [384, 512, [], "f15b", "M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM332.1 128H256V51.9l76.1 76.1zM48 464V48h160v104c0 13.3 10.7 24 24 24h104v288H48z"]
};
var faFileAlt = {
  prefix: 'far',
  iconName: 'file-alt',
  icon: [384, 512, [], "f15c", "M288 248v28c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-28c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm-12 72H108c-6.6 0-12 5.4-12 12v28c0 6.6 5.4 12 12 12h168c6.6 0 12-5.4 12-12v-28c0-6.6-5.4-12-12-12zm108-188.1V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V48C0 21.5 21.5 0 48 0h204.1C264.8 0 277 5.1 286 14.1L369.9 98c9 8.9 14.1 21.2 14.1 33.9zm-128-80V128h76.1L256 51.9zM336 464V176H232c-13.3 0-24-10.7-24-24V48H48v416h288z"]
};
var faFileArchive = {
  prefix: 'far',
  iconName: 'file-archive',
  icon: [384, 512, [], "f1c6", "M128.3 160v32h32v-32zm64-96h-32v32h32zm-64 32v32h32V96zm64 32h-32v32h32zm177.6-30.1L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM256 51.9l76.1 76.1H256zM336 464H48V48h79.7v16h32V48H208v104c0 13.3 10.7 24 24 24h104zM194.2 265.7c-1.1-5.6-6-9.7-11.8-9.7h-22.1v-32h-32v32l-19.7 97.1C102 385.6 126.8 416 160 416c33.1 0 57.9-30.2 51.5-62.6zm-33.9 124.4c-17.9 0-32.4-12.1-32.4-27s14.5-27 32.4-27 32.4 12.1 32.4 27-14.5 27-32.4 27zm32-198.1h-32v32h32z"]
};
var faFileAudio = {
  prefix: 'far',
  iconName: 'file-audio',
  icon: [384, 512, [], "f1c7", "M369.941 97.941l-83.882-83.882A48 48 0 0 0 252.118 0H48C21.49 0 0 21.49 0 48v416c0 26.51 21.49 48 48 48h288c26.51 0 48-21.49 48-48V131.882a48 48 0 0 0-14.059-33.941zM332.118 128H256V51.882L332.118 128zM48 464V48h160v104c0 13.255 10.745 24 24 24h104v288H48zm144-76.024c0 10.691-12.926 16.045-20.485 8.485L136 360.486h-28c-6.627 0-12-5.373-12-12v-56c0-6.627 5.373-12 12-12h28l35.515-36.947c7.56-7.56 20.485-2.206 20.485 8.485v135.952zm41.201-47.13c9.051-9.297 9.06-24.133.001-33.439-22.149-22.752 12.235-56.246 34.395-33.481 27.198 27.94 27.212 72.444.001 100.401-21.793 22.386-56.947-10.315-34.397-33.481z"]
};
var faFileCode = {
  prefix: 'far',
  iconName: 'file-code',
  icon: [384, 512, [], "f1c9", "M149.9 349.1l-.2-.2-32.8-28.9 32.8-28.9c3.6-3.2 4-8.8.8-12.4l-.2-.2-17.4-18.6c-3.4-3.6-9-3.7-12.4-.4l-57.7 54.1c-3.7 3.5-3.7 9.4 0 12.8l57.7 54.1c1.6 1.5 3.8 2.4 6 2.4 2.4 0 4.8-1 6.4-2.8l17.4-18.6c3.3-3.5 3.1-9.1-.4-12.4zm220-251.2L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM256 51.9l76.1 76.1H256zM336 464H48V48h160v104c0 13.3 10.7 24 24 24h104zM209.6 214c-4.7-1.4-9.5 1.3-10.9 6L144 408.1c-1.4 4.7 1.3 9.6 6 10.9l24.4 7.1c4.7 1.4 9.6-1.4 10.9-6L240 231.9c1.4-4.7-1.3-9.6-6-10.9zm24.5 76.9l.2.2 32.8 28.9-32.8 28.9c-3.6 3.2-4 8.8-.8 12.4l.2.2 17.4 18.6c3.3 3.5 8.9 3.7 12.4.4l57.7-54.1c3.7-3.5 3.7-9.4 0-12.8l-57.7-54.1c-3.5-3.3-9.1-3.2-12.4.4l-17.4 18.6c-3.3 3.5-3.1 9.1.4 12.4z"]
};
var faFileExcel = {
  prefix: 'far',
  iconName: 'file-excel',
  icon: [384, 512, [], "f1c3", "M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM332.1 128H256V51.9l76.1 76.1zM48 464V48h160v104c0 13.3 10.7 24 24 24h104v288H48zm212-240h-28.8c-4.4 0-8.4 2.4-10.5 6.3-18 33.1-22.2 42.4-28.6 57.7-13.9-29.1-6.9-17.3-28.6-57.7-2.1-3.9-6.2-6.3-10.6-6.3H124c-9.3 0-15 10-10.4 18l46.3 78-46.3 78c-4.7 8 1.1 18 10.4 18h28.9c4.4 0 8.4-2.4 10.5-6.3 21.7-40 23-45 28.6-57.7 14.9 30.2 5.9 15.9 28.6 57.7 2.1 3.9 6.2 6.3 10.6 6.3H260c9.3 0 15-10 10.4-18L224 320c.7-1.1 30.3-50.5 46.3-78 4.7-8-1.1-18-10.3-18z"]
};
var faFileImage = {
  prefix: 'far',
  iconName: 'file-image',
  icon: [384, 512, [], "f1c5", "M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM332.1 128H256V51.9l76.1 76.1zM48 464V48h160v104c0 13.3 10.7 24 24 24h104v288H48zm32-48h224V288l-23.5-23.5c-4.7-4.7-12.3-4.7-17 0L176 352l-39.5-39.5c-4.7-4.7-12.3-4.7-17 0L80 352v64zm48-240c-26.5 0-48 21.5-48 48s21.5 48 48 48 48-21.5 48-48-21.5-48-48-48z"]
};
var faFilePdf = {
  prefix: 'far',
  iconName: 'file-pdf',
  icon: [384, 512, [], "f1c1", "M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM332.1 128H256V51.9l76.1 76.1zM48 464V48h160v104c0 13.3 10.7 24 24 24h104v288H48zm250.2-143.7c-12.2-12-47-8.7-64.4-6.5-17.2-10.5-28.7-25-36.8-46.3 3.9-16.1 10.1-40.6 5.4-56-4.2-26.2-37.8-23.6-42.6-5.9-4.4 16.1-.4 38.5 7 67.1-10 23.9-24.9 56-35.4 74.4-20 10.3-47 26.2-51 46.2-3.3 15.8 26 55.2 76.1-31.2 22.4-7.4 46.8-16.5 68.4-20.1 18.9 10.2 41 17 55.8 17 25.5 0 28-28.2 17.5-38.7zm-198.1 77.8c5.1-13.7 24.5-29.5 30.4-35-19 30.3-30.4 35.7-30.4 35zm81.6-190.6c7.4 0 6.7 32.1 1.8 40.8-4.4-13.9-4.3-40.8-1.8-40.8zm-24.4 136.6c9.7-16.9 18-37 24.7-54.7 8.3 15.1 18.9 27.2 30.1 35.5-20.8 4.3-38.9 13.1-54.8 19.2zm131.6-5s-5 6-37.3-7.8c35.1-2.6 40.9 5.4 37.3 7.8z"]
};
var faFilePowerpoint = {
  prefix: 'far',
  iconName: 'file-powerpoint',
  icon: [384, 512, [], "f1c4", "M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM332.1 128H256V51.9l76.1 76.1zM48 464V48h160v104c0 13.3 10.7 24 24 24h104v288H48zm72-60V236c0-6.6 5.4-12 12-12h69.2c36.7 0 62.8 27 62.8 66.3 0 74.3-68.7 66.5-95.5 66.5V404c0 6.6-5.4 12-12 12H132c-6.6 0-12-5.4-12-12zm48.5-87.4h23c7.9 0 13.9-2.4 18.1-7.2 8.5-9.8 8.4-28.5.1-37.8-4.1-4.6-9.9-7-17.4-7h-23.9v52z"]
};
var faFileVideo = {
  prefix: 'far',
  iconName: 'file-video',
  icon: [384, 512, [], "f1c8", "M369.941 97.941l-83.882-83.882A48 48 0 0 0 252.118 0H48C21.49 0 0 21.49 0 48v416c0 26.51 21.49 48 48 48h288c26.51 0 48-21.49 48-48V131.882a48 48 0 0 0-14.059-33.941zM332.118 128H256V51.882L332.118 128zM48 464V48h160v104c0 13.255 10.745 24 24 24h104v288H48zm228.687-211.303L224 305.374V268c0-11.046-8.954-20-20-20H100c-11.046 0-20 8.954-20 20v104c0 11.046 8.954 20 20 20h104c11.046 0 20-8.954 20-20v-37.374l52.687 52.674C286.704 397.318 304 390.28 304 375.986V264.011c0-14.311-17.309-21.319-27.313-11.314z"]
};
var faFileWord = {
  prefix: 'far',
  iconName: 'file-word',
  icon: [384, 512, [], "f1c2", "M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM332.1 128H256V51.9l76.1 76.1zM48 464V48h160v104c0 13.3 10.7 24 24 24h104v288H48zm220.1-208c-5.7 0-10.6 4-11.7 9.5-20.6 97.7-20.4 95.4-21 103.5-.2-1.2-.4-2.6-.7-4.3-.8-5.1.3.2-23.6-99.5-1.3-5.4-6.1-9.2-11.7-9.2h-13.3c-5.5 0-10.3 3.8-11.7 9.1-24.4 99-24 96.2-24.8 103.7-.1-1.1-.2-2.5-.5-4.2-.7-5.2-14.1-73.3-19.1-99-1.1-5.6-6-9.7-11.8-9.7h-16.8c-7.8 0-13.5 7.3-11.7 14.8 8 32.6 26.7 109.5 33.2 136 1.3 5.4 6.1 9.1 11.7 9.1h25.2c5.5 0 10.3-3.7 11.6-9.1l17.9-71.4c1.5-6.2 2.5-12 3-17.3l2.9 17.3c.1.4 12.6 50.5 17.9 71.4 1.3 5.3 6.1 9.1 11.6 9.1h24.7c5.5 0 10.3-3.7 11.6-9.1 20.8-81.9 30.2-119 34.5-136 1.9-7.6-3.8-14.9-11.6-14.9h-15.8z"]
};
var faFlag = {
  prefix: 'far',
  iconName: 'flag',
  icon: [512, 512, [], "f024", "M336.174 80c-49.132 0-93.305-32-161.913-32-31.301 0-58.303 6.482-80.721 15.168a48.04 48.04 0 0 0 2.142-20.727C93.067 19.575 74.167 1.594 51.201.104 23.242-1.71 0 20.431 0 48c0 17.764 9.657 33.262 24 41.562V496c0 8.837 7.163 16 16 16h16c8.837 0 16-7.163 16-16v-83.443C109.869 395.28 143.259 384 199.826 384c49.132 0 93.305 32 161.913 32 58.479 0 101.972-22.617 128.548-39.981C503.846 367.161 512 352.051 512 335.855V95.937c0-34.459-35.264-57.768-66.904-44.117C409.193 67.309 371.641 80 336.174 80zM464 336c-21.783 15.412-60.824 32-102.261 32-59.945 0-102.002-32-161.913-32-43.361 0-96.379 9.403-127.826 24V128c21.784-15.412 60.824-32 102.261-32 59.945 0 102.002 32 161.913 32 43.271 0 96.32-17.366 127.826-32v240z"]
};
var faFlushed = {
  prefix: 'far',
  iconName: 'flushed',
  icon: [496, 512, [], "f579", "M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-110.3 0-200-89.7-200-200S137.7 56 248 56s200 89.7 200 200-89.7 200-200 200zm96-312c-44.2 0-80 35.8-80 80s35.8 80 80 80 80-35.8 80-80-35.8-80-80-80zm0 128c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm0-72c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24zm-112 24c0-44.2-35.8-80-80-80s-80 35.8-80 80 35.8 80 80 80 80-35.8 80-80zm-80 48c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm0-72c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24zm160 144H184c-13.2 0-24 10.8-24 24s10.8 24 24 24h128c13.2 0 24-10.8 24-24s-10.8-24-24-24z"]
};
var faFolder = {
  prefix: 'far',
  iconName: 'folder',
  icon: [512, 512, [], "f07b", "M464 128H272l-54.63-54.63c-6-6-14.14-9.37-22.63-9.37H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V176c0-26.51-21.49-48-48-48zm0 272H48V112h140.12l54.63 54.63c6 6 14.14 9.37 22.63 9.37H464v224z"]
};
var faFolderOpen = {
  prefix: 'far',
  iconName: 'folder-open',
  icon: [576, 512, [], "f07c", "M527.9 224H480v-48c0-26.5-21.5-48-48-48H272l-64-64H48C21.5 64 0 85.5 0 112v288c0 26.5 21.5 48 48 48h400c16.5 0 31.9-8.5 40.7-22.6l79.9-128c20-31.9-3-73.4-40.7-73.4zM48 118c0-3.3 2.7-6 6-6h134.1l64 64H426c3.3 0 6 2.7 6 6v42H152c-16.8 0-32.4 8.8-41.1 23.2L48 351.4zm400 282H72l77.2-128H528z"]
};
var faFontAwesomeLogoFull = {
  prefix: 'far',
  iconName: 'font-awesome-logo-full',
  icon: [3992, 512, ["Font Awesome"], "f4e6", "M454.6 0H57.4C25.9 0 0 25.9 0 57.4v397.3C0 486.1 25.9 512 57.4 512h397.3c31.4 0 57.4-25.9 57.4-57.4V57.4C512 25.9 486.1 0 454.6 0zm-58.9 324.9c0 4.8-4.1 6.9-8.9 8.9-19.2 8.1-39.7 15.7-61.5 15.7-40.5 0-68.7-44.8-163.2 2.5v51.8c0 30.3-45.7 30.2-45.7 0v-250c-9-7-15-17.9-15-30.3 0-21 17.1-38.2 38.2-38.2 21 0 38.2 17.1 38.2 38.2 0 12.2-5.8 23.2-14.9 30.2v21c37.1-12 65.5-34.4 146.1-3.4 26.6 11.4 68.7-15.7 76.5-15.7 5.5 0 10.3 4.1 10.3 8.9v160.4zm432.9-174.2h-137v70.1H825c39.8 0 40.4 62.2 0 62.2H691.6v105.6c0 45.5-70.7 46.4-70.7 0V128.3c0-22 18-39.8 39.8-39.8h167.8c39.6 0 40.5 62.2.1 62.2zm191.1 23.4c-169.3 0-169.1 252.4 0 252.4 169.9 0 169.9-252.4 0-252.4zm0 196.1c-81.6 0-82.1-139.8 0-139.8 82.5 0 82.4 139.8 0 139.8zm372.4 53.4c-17.5 0-31.4-13.9-31.4-31.4v-117c0-62.4-72.6-52.5-99.1-16.4v133.4c0 41.5-63.3 41.8-63.3 0V208c0-40 63.1-41.6 63.1 0v3.4c43.3-51.6 162.4-60.4 162.4 39.3v141.5c.3 30.4-31.5 31.4-31.7 31.4zm179.7 2.9c-44.3 0-68.3-22.9-68.3-65.8V235.2H1488c-35.6 0-36.7-55.3 0-55.3h15.5v-37.3c0-41.3 63.8-42.1 63.8 0v37.5h24.9c35.4 0 35.7 55.3 0 55.3h-24.9v108.5c0 29.6 26.1 26.3 27.4 26.3 31.4 0 52.6 56.3-22.9 56.3zM1992 123c-19.5-50.2-95.5-50-114.5 0-107.3 275.7-99.5 252.7-99.5 262.8 0 42.8 58.3 51.2 72.1 14.4l13.5-35.9H2006l13 35.9c14.2 37.7 72.1 27.2 72.1-14.4 0-10.1 5.3 6.8-99.1-262.8zm-108.9 179.1l51.7-142.9 51.8 142.9h-103.5zm591.3-85.6l-53.7 176.3c-12.4 41.2-72 41-84 0l-42.3-135.9-42.3 135.9c-12.4 40.9-72 41.2-84.5 0l-54.2-176.3c-12.5-39.4 49.8-56.1 60.2-16.9L2213 342l45.3-139.5c10.9-32.7 59.6-34.7 71.2 0l45.3 139.5 39.3-142.4c10.3-38.3 72.6-23.8 60.3 16.9zm275.4 75.1c0-42.4-33.9-117.5-119.5-117.5-73.2 0-124.4 56.3-124.4 126 0 77.2 55.3 126.4 128.5 126.4 31.7 0 93-11.5 93-39.8 0-18.3-21.1-31.5-39.3-22.4-49.4 26.2-109 8.4-115.9-43.8h148.3c16.3 0 29.3-13.4 29.3-28.9zM2571 277.7c9.5-73.4 113.9-68.6 118.6 0H2571zm316.7 148.8c-31.4 0-81.6-10.5-96.6-31.9-12.4-17 2.5-39.8 21.8-39.8 16.3 0 36.8 22.9 77.7 22.9 27.4 0 40.4-11 40.4-25.8 0-39.8-142.9-7.4-142.9-102 0-40.4 35.3-75.7 98.6-75.7 31.4 0 74.1 9.9 87.6 29.4 10.8 14.8-1.4 36.2-20.9 36.2-15.1 0-26.7-17.3-66.2-17.3-22.9 0-37.8 10.5-37.8 23.8 0 35.9 142.4 6 142.4 103.1-.1 43.7-37.4 77.1-104.1 77.1zm266.8-252.4c-169.3 0-169.1 252.4 0 252.4 170.1 0 169.6-252.4 0-252.4zm0 196.1c-81.8 0-82-139.8 0-139.8 82.5 0 82.4 139.8 0 139.8zm476.9 22V268.7c0-53.8-61.4-45.8-85.7-10.5v134c0 41.3-63.8 42.1-63.8 0V268.7c0-52.1-59.5-47.4-85.7-10.1v133.6c0 41.5-63.3 41.8-63.3 0V208c0-40 63.1-41.6 63.1 0v3.4c9.9-14.4 41.8-37.3 78.6-37.3 35.3 0 57.7 16.4 66.7 43.8 13.9-21.8 45.8-43.8 82.6-43.8 44.3 0 70.7 23.4 70.7 72.7v145.3c.5 17.3-13.5 31.4-31.9 31.4 3.5.1-31.3 1.1-31.3-31.3zM3992 291.6c0-42.4-32.4-117.5-117.9-117.5-73.2 0-127.5 56.3-127.5 126 0 77.2 58.3 126.4 131.6 126.4 31.7 0 91.5-11.5 91.5-39.8 0-18.3-21.1-31.5-39.3-22.4-49.4 26.2-110.5 8.4-117.5-43.8h149.8c16.3 0 29.1-13.4 29.3-28.9zm-180.5-13.9c9.7-74.4 115.9-68.3 120.1 0h-120.1z"]
};
var faFrown = {
  prefix: 'far',
  iconName: 'frown',
  icon: [496, 512, [], "f119", "M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-110.3 0-200-89.7-200-200S137.7 56 248 56s200 89.7 200 200-89.7 200-200 200zm-80-216c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm160-64c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm-80 128c-40.2 0-78 17.7-103.8 48.6-8.5 10.2-7.1 25.3 3.1 33.8 10.2 8.4 25.3 7.1 33.8-3.1 16.6-19.9 41-31.4 66.9-31.4s50.3 11.4 66.9 31.4c8.1 9.7 23.1 11.9 33.8 3.1 10.2-8.5 11.5-23.6 3.1-33.8C326 321.7 288.2 304 248 304z"]
};
var faFrownOpen = {
  prefix: 'far',
  iconName: 'frown-open',
  icon: [496, 512, [], "f57a", "M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-110.3 0-200-89.7-200-200S137.7 56 248 56s200 89.7 200 200-89.7 200-200 200zm-48-248c0-17.7-14.3-32-32-32s-32 14.3-32 32 14.3 32 32 32 32-14.3 32-32zm128-32c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm-80 112c-35.6 0-88.8 21.3-95.8 61.2-2 11.8 9 21.5 20.5 18.1 31.2-9.6 59.4-15.3 75.3-15.3s44.1 5.7 75.3 15.3c11.4 3.5 22.5-6.3 20.5-18.1-7-39.9-60.2-61.2-95.8-61.2z"]
};
var faFutbol = {
  prefix: 'far',
  iconName: 'futbol',
  icon: [496, 512, [], "f1e3", "M483.8 179.4C449.8 74.6 352.6 8 248.1 8c-25.4 0-51.2 3.9-76.7 12.2C41.2 62.5-30.1 202.4 12.2 332.6 46.2 437.4 143.4 504 247.9 504c25.4 0 51.2-3.9 76.7-12.2 130.2-42.3 201.5-182.2 159.2-312.4zm-74.5 193.7l-52.2 6.4-43.7-60.9 24.4-75.2 71.1-22.1 38.9 36.4c-.2 30.7-7.4 61.1-21.7 89.2-4.7 9.3-10.7 17.8-16.8 26.2zm0-235.4l-10.4 53.1-70.7 22-64.2-46.5V92.5l47.4-26.2c39.2 13 73.4 38 97.9 71.4zM184.9 66.4L232 92.5v73.8l-64.2 46.5-70.6-22-10.1-52.5c24.3-33.4 57.9-58.6 97.8-71.9zM139 379.5L85.9 373c-14.4-20.1-37.3-59.6-37.8-115.3l39-36.4 71.1 22.2 24.3 74.3-43.5 61.7zm48.2 67l-22.4-48.1 43.6-61.7H287l44.3 61.7-22.4 48.1c-6.2 1.8-57.6 20.4-121.7 0z"]
};
var faGem = {
  prefix: 'far',
  iconName: 'gem',
  icon: [576, 512, [], "f3a5", "M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z"]
};
var faGrimace = {
  prefix: 'far',
  iconName: 'grimace',
  icon: [496, 512, [], "f57f", "M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-110.3 0-200-89.7-200-200S137.7 56 248 56s200 89.7 200 200-89.7 200-200 200zm-80-216c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm16 16H152c-26.5 0-48 21.5-48 48v32c0 26.5 21.5 48 48 48h192c26.5 0 48-21.5 48-48v-32c0-26.5-21.5-48-48-48zm-168 96h-24c-8.8 0-16-7.2-16-16v-8h40v24zm0-40h-40v-8c0-8.8 7.2-16 16-16h24v24zm64 40h-48v-24h48v24zm0-40h-48v-24h48v24zm64 40h-48v-24h48v24zm0-40h-48v-24h48v24zm56 24c0 8.8-7.2 16-16 16h-24v-24h40v8zm0-24h-40v-24h24c8.8 0 16 7.2 16 16v8z"]
};
var faGrin = {
  prefix: 'far',
  iconName: 'grin',
  icon: [496, 512, [], "f580", "M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-110.3 0-200-89.7-200-200S137.7 56 248 56s200 89.7 200 200-89.7 200-200 200zm105.6-151.4c-25.9 8.3-64.4 13.1-105.6 13.1s-79.6-4.8-105.6-13.1c-9.9-3.1-19.4 5.4-17.7 15.3 7.9 47.1 71.3 80 123.3 80s115.3-32.9 123.3-80c1.6-9.8-7.7-18.4-17.7-15.3zM168 240c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32z"]
};
var faGrinAlt = {
  prefix: 'far',
  iconName: 'grin-alt',
  icon: [496, 512, [], "f581", "M200.3 248c12.4-18.7 15.1-37.3 15.7-56-.5-18.7-3.3-37.3-15.7-56-8-12-25.1-11.4-32.7 0-12.4 18.7-15.1 37.3-15.7 56 .5 18.7 3.3 37.3 15.7 56 8.1 12 25.2 11.4 32.7 0zm128 0c12.4-18.7 15.1-37.3 15.7-56-.5-18.7-3.3-37.3-15.7-56-8-12-25.1-11.4-32.7 0-12.4 18.7-15.1 37.3-15.7 56 .5 18.7 3.3 37.3 15.7 56 8.1 12 25.2 11.4 32.7 0zM248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-110.3 0-200-89.7-200-200S137.7 56 248 56s200 89.7 200 200-89.7 200-200 200zm105.6-151.4c-25.9 8.3-64.4 13.1-105.6 13.1s-79.6-4.8-105.6-13.1c-9.9-3.1-19.4 5.3-17.7 15.3 7.9 47.2 71.3 80 123.3 80s115.3-32.9 123.3-80c1.6-9.8-7.7-18.4-17.7-15.3z"]
};
var faGrinBeam = {
  prefix: 'far',
  iconName: 'grin-beam',
  icon: [496, 512, [], "f582", "M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-110.3 0-200-89.7-200-200S137.7 56 248 56s200 89.7 200 200-89.7 200-200 200zm105.6-151.4c-25.9 8.3-64.4 13.1-105.6 13.1s-79.6-4.8-105.6-13.1c-9.8-3.1-19.4 5.3-17.7 15.3 7.9 47.1 71.3 80 123.3 80s115.3-32.9 123.3-80c1.6-9.8-7.7-18.4-17.7-15.3zm-235.9-72.9c3.5 1.1 7.4-.5 9.3-3.7l9.5-17c7.7-13.7 19.2-21.6 31.5-21.6s23.8 7.9 31.5 21.6l9.5 17c2.1 3.7 6.2 4.7 9.3 3.7 3.6-1.1 6-4.5 5.7-8.3-3.3-42.1-32.2-71.4-56-71.4s-52.7 29.3-56 71.4c-.3 3.7 2.1 7.2 5.7 8.3zm160 0c3.5 1.1 7.4-.5 9.3-3.7l9.5-17c7.7-13.7 19.2-21.6 31.5-21.6s23.8 7.9 31.5 21.6l9.5 17c2.1 3.7 6.2 4.7 9.3 3.7 3.6-1.1 6-4.5 5.7-8.3-3.3-42.1-32.2-71.4-56-71.4s-52.7 29.3-56 71.4c-.3 3.7 2.1 7.2 5.7 8.3z"]
};
var faGrinBeamSweat = {
  prefix: 'far',
  iconName: 'grin-beam-sweat',
  icon: [496, 512, [], "f583", "M440 160c29.5 0 53.3-26.3 53.3-58.7 0-25-31.7-75.5-46.2-97.3-3.6-5.3-10.7-5.3-14.2 0-14.5 21.8-46.2 72.3-46.2 97.3 0 32.4 23.8 58.7 53.3 58.7zM248 400c51.9 0 115.3-32.9 123.3-80 1.7-9.9-7.7-18.5-17.7-15.3-25.9 8.3-64.4 13.1-105.6 13.1s-79.6-4.8-105.6-13.1c-9.8-3.1-19.4 5.3-17.7 15.3 8 47.1 71.4 80 123.3 80zm130.3-168.3c3.6-1.1 6-4.5 5.7-8.3-3.3-42.1-32.2-71.4-56-71.4s-52.7 29.3-56 71.4c-.3 3.7 2.1 7.2 5.7 8.3 3.5 1.1 7.4-.5 9.3-3.7l9.5-17c7.7-13.7 19.2-21.6 31.5-21.6s23.8 7.9 31.5 21.6l9.5 17c2.1 3.6 6.2 4.6 9.3 3.7zm105.3-52.9c-24.6 15.7-46 12.9-46.4 12.9 6.9 20.2 10.8 41.8 10.8 64.3 0 110.3-89.7 200-200 200S48 366.3 48 256 137.7 56 248 56c39.8 0 76.8 11.8 108 31.9 1.7-9.5 6.3-24.1 17.2-45.7C336.4 20.6 293.7 8 248 8 111 8 0 119 0 256s111 248 248 248 248-111 248-248c0-27-4.4-52.9-12.4-77.2zM168 189.4c12.3 0 23.8 7.9 31.5 21.6l9.5 17c2.1 3.7 6.2 4.7 9.3 3.7 3.6-1.1 6-4.5 5.7-8.3-3.3-42.1-32.2-71.4-56-71.4s-52.7 29.3-56 71.4c-.3 3.7 2.1 7.2 5.7 8.3 3.5 1.1 7.4-.5 9.3-3.7l9.5-17c7.7-13.8 19.2-21.6 31.5-21.6z"]
};
var faGrinHearts = {
  prefix: 'far',
  iconName: 'grin-hearts',
  icon: [496, 512, [], "f584", "M353.6 304.6c-25.9 8.3-64.4 13.1-105.6 13.1s-79.6-4.8-105.6-13.1c-9.8-3.1-19.4 5.3-17.7 15.3 7.9 47.2 71.3 80 123.3 80s115.3-32.9 123.3-80c1.6-9.8-7.7-18.4-17.7-15.3zm-152.8-48.9c4.5 1.2 9.2-1.5 10.5-6l19.4-69.9c5.6-20.3-7.4-41.1-28.8-44.5-18.6-3-36.4 9.8-41.5 27.9l-2 7.1-7.1-1.9c-18.2-4.7-38.2 4.3-44.9 22-7.7 20.2 3.8 41.9 24.2 47.2l70.2 18.1zm188.8-65.3c-6.7-17.6-26.7-26.7-44.9-22l-7.1 1.9-2-7.1c-5-18.1-22.8-30.9-41.5-27.9-21.4 3.4-34.4 24.2-28.8 44.5l19.4 69.9c1.2 4.5 5.9 7.2 10.5 6l70.2-18.2c20.4-5.3 31.9-26.9 24.2-47.1zM248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-110.3 0-200-89.7-200-200S137.7 56 248 56s200 89.7 200 200-89.7 200-200 200z"]
};
var faGrinSquint = {
  prefix: 'far',
  iconName: 'grin-squint',
  icon: [496, 512, [], "f585", "M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-110.3 0-200-89.7-200-200S137.7 56 248 56s200 89.7 200 200-89.7 200-200 200zm105.6-151.4c-25.9 8.3-64.4 13.1-105.6 13.1s-79.6-4.8-105.6-13.1c-9.9-3.1-19.4 5.4-17.7 15.3 7.9 47.1 71.3 80 123.3 80s115.3-32.9 123.3-80c1.6-9.8-7.7-18.4-17.7-15.3zm-234.7-40.8c3.6 4.2 9.9 5.7 15.3 2.5l80-48c3.6-2.2 5.8-6.1 5.8-10.3s-2.2-8.1-5.8-10.3l-80-48c-5.1-3-11.4-1.9-15.3 2.5-3.8 4.5-3.8 11-.1 15.5l33.6 40.3-33.6 40.3c-3.8 4.5-3.7 11.1.1 15.5zm242.9 2.5c5.4 3.2 11.7 1.7 15.3-2.5 3.8-4.5 3.8-11 .1-15.5L343.6 208l33.6-40.3c3.8-4.5 3.7-11-.1-15.5-3.8-4.4-10.2-5.4-15.3-2.5l-80 48c-3.6 2.2-5.8 6.1-5.8 10.3s2.2 8.1 5.8 10.3l80 48z"]
};
var faGrinSquintTears = {
  prefix: 'far',
  iconName: 'grin-squint-tears',
  icon: [512, 512, [], "f586", "M117.1 384.1c-25.8 3.7-84 13.7-100.9 30.6-21.9 21.9-21.5 57.9.9 80.3s58.3 22.8 80.3.9C114.3 479 124.3 420.8 128 395c.8-6.4-4.6-11.8-10.9-10.9zm-41.2-41.7C40.3 268 53 176.1 114.6 114.6 152.4 76.8 202.6 56 256 56c36.2 0 70.8 9.8 101.2 27.7 3.8-20.3 8-36.1 12-48.3C333.8 17.2 294.9 8 256 8 192.5 8 129.1 32.2 80.6 80.6c-74.1 74.1-91.3 183.4-52 274 12.2-4.1 27.7-8.3 47.3-12.2zm352.3-187.6c45 76.6 34.9 176.9-30.8 242.6-37.8 37.8-88 58.6-141.4 58.6-30.5 0-59.8-7-86.4-19.8-3.9 19.5-8 35-12.2 47.2 31.4 13.6 65 20.6 98.7 20.6 63.5 0 126.9-24.2 175.4-72.6 78.1-78.1 93.1-195.4 45.2-288.6-12.3 4-28.2 8.1-48.5 12zm-33.3-26.9c25.8-3.7 84-13.7 100.9-30.6 21.9-21.9 21.5-57.9-.9-80.3s-58.3-22.8-80.3-.9C397.7 33 387.7 91.2 384 117c-.8 6.4 4.6 11.8 10.9 10.9zm-187 108.3c-3-3-7.2-4.2-11.4-3.2L106 255.7c-5.7 1.4-9.5 6.7-9.1 12.6.5 5.8 5.1 10.5 10.9 11l52.3 4.8 4.8 52.3c.5 5.8 5.2 10.4 11 10.9h.9c5.5 0 10.3-3.7 11.7-9.1l22.6-90.5c1-4.2-.2-8.5-3.2-11.5zm39.7-25.1l90.5-22.6c5.7-1.4 9.5-6.7 9.1-12.6-.5-5.8-5.1-10.5-10.9-11l-52.3-4.8-4.8-52.3c-.5-5.8-5.2-10.4-11-10.9-5.6-.1-11.2 3.4-12.6 9.1L233 196.5c-1 4.1.2 8.4 3.2 11.4 5 5 11.3 3.2 11.4 3.2zm52 88.5c-29.1 29.1-59.7 52.9-83.9 65.4-9.2 4.8-10 17.5-1.7 23.4 38.9 27.7 107 6.2 143.7-30.6S416 253 388.3 214.1c-5.8-8.2-18.5-7.6-23.4 1.7-12.3 24.2-36.2 54.7-65.3 83.8z"]
};
var faGrinStars = {
  prefix: 'far',
  iconName: 'grin-stars',
  icon: [496, 512, [], "f587", "M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-110.3 0-200-89.7-200-200S137.7 56 248 56s200 89.7 200 200-89.7 200-200 200zm105.6-151.4c-25.9 8.3-64.4 13.1-105.6 13.1s-79.6-4.8-105.6-13.1c-9.8-3.1-19.4 5.3-17.7 15.3 7.9 47.2 71.3 80 123.3 80s115.3-32.9 123.3-80c1.6-9.8-7.7-18.4-17.7-15.3zm-227.9-57.5c-1 6.2 5.4 11 11 7.9l31.3-16.3 31.3 16.3c5.6 3.1 12-1.7 11-7.9l-6-34.9 25.4-24.6c4.5-4.5 1.9-12.2-4.3-13.2l-34.9-5-15.5-31.6c-2.9-5.8-11-5.8-13.9 0l-15.5 31.6-34.9 5c-6.2.9-8.9 8.6-4.3 13.2l25.4 24.6-6.1 34.9zm259.7-72.7l-34.9-5-15.5-31.6c-2.9-5.8-11-5.8-13.9 0l-15.5 31.6-34.9 5c-6.2.9-8.9 8.6-4.3 13.2l25.4 24.6-6 34.9c-1 6.2 5.4 11 11 7.9l31.3-16.3 31.3 16.3c5.6 3.1 12-1.7 11-7.9l-6-34.9 25.4-24.6c4.5-4.6 1.8-12.2-4.4-13.2z"]
};
var faGrinTears = {
  prefix: 'far',
  iconName: 'grin-tears',
  icon: [640, 512, [], "f588", "M117.1 256.1c-25.8 3.7-84 13.7-100.9 30.6-21.9 21.9-21.5 57.9.9 80.3s58.3 22.8 80.3.9C114.3 351 124.3 292.8 128 267c.8-6.4-4.6-11.8-10.9-10.9zm506.7 30.6c-16.9-16.9-75.1-26.9-100.9-30.6-6.3-.9-11.7 4.5-10.8 10.8 3.7 25.8 13.7 84 30.6 100.9 21.9 21.9 57.9 21.5 80.3-.9 22.3-22.3 22.7-58.3.8-80.2zm-126.6 61.7C463.8 412.3 396.9 456 320 456c-76.9 0-143.8-43.7-177.2-107.6-12.5 37.4-25.2 43.9-28.3 46.5C159.1 460.7 234.5 504 320 504s160.9-43.3 205.5-109.1c-3.2-2.7-15.9-9.2-28.3-46.5zM122.7 224.5C137.9 129.2 220.5 56 320 56c99.5 0 182.1 73.2 197.3 168.5 2.1-.2 5.2-2.4 49.5 7C554.4 106 448.7 8 320 8S85.6 106 73.2 231.4c44.5-9.4 47.1-7.2 49.5-6.9zM320 400c51.9 0 115.3-32.9 123.3-80 1.7-9.9-7.7-18.5-17.7-15.3-25.9 8.3-64.4 13.1-105.6 13.1s-79.6-4.8-105.6-13.1c-9.8-3.1-19.4 5.3-17.7 15.3 8 47.1 71.4 80 123.3 80zm130.3-168.3c3.6-1.1 6-4.5 5.7-8.3-3.3-42.1-32.2-71.4-56-71.4s-52.7 29.3-56 71.4c-.3 3.7 2.1 7.2 5.7 8.3 3.5 1.1 7.4-.5 9.3-3.7l9.5-17c7.7-13.7 19.2-21.6 31.5-21.6s23.8 7.9 31.5 21.6l9.5 17c2.1 3.6 6.2 4.6 9.3 3.7zM240 189.4c12.3 0 23.8 7.9 31.5 21.6l9.5 17c2.1 3.7 6.2 4.7 9.3 3.7 3.6-1.1 6-4.5 5.7-8.3-3.3-42.1-32.2-71.4-56-71.4s-52.7 29.3-56 71.4c-.3 3.7 2.1 7.2 5.7 8.3 3.5 1.1 7.4-.5 9.3-3.7l9.5-17c7.7-13.8 19.2-21.6 31.5-21.6z"]
};
var faGrinTongue = {
  prefix: 'far',
  iconName: 'grin-tongue',
  icon: [496, 512, [], "f589", "M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm64 400c0 35.6-29.1 64.5-64.9 64-35.1-.5-63.1-29.8-63.1-65v-42.8l17.7-8.8c15-7.5 31.5 1.7 34.9 16.5l2.8 12.1c2.1 9.2 15.2 9.2 17.3 0l2.8-12.1c3.4-14.8 19.8-24.1 34.9-16.5l17.7 8.8V408zm28.2 25.3c2.2-8.1 3.8-16.5 3.8-25.3v-43.5c14.2-12.4 24.4-27.5 27.3-44.5 1.7-9.9-7.7-18.5-17.7-15.3-25.9 8.3-64.4 13.1-105.6 13.1s-79.6-4.8-105.6-13.1c-9.9-3.1-19.4 5.3-17.7 15.3 2.9 17 13.1 32.1 27.3 44.5V408c0 8.8 1.6 17.2 3.8 25.3C91.8 399.9 48 333 48 256c0-110.3 89.7-200 200-200s200 89.7 200 200c0 77-43.8 143.9-107.8 177.3zM168 176c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm160 0c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32z"]
};
var faGrinTongueSquint = {
  prefix: 'far',
  iconName: 'grin-tongue-squint',
  icon: [496, 512, [], "f58a", "M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm64 400c0 35.6-29.1 64.5-64.9 64-35.1-.5-63.1-29.8-63.1-65v-42.8l17.7-8.8c15-7.5 31.5 1.7 34.9 16.5l2.8 12.1c2.1 9.2 15.2 9.2 17.3 0l2.8-12.1c3.4-14.8 19.8-24.1 34.9-16.5l17.7 8.8V408zm28.2 25.3c2.2-8.1 3.8-16.5 3.8-25.3v-43.5c14.2-12.4 24.4-27.5 27.3-44.5 1.7-9.9-7.7-18.5-17.7-15.3-25.9 8.3-64.4 13.1-105.6 13.1s-79.6-4.8-105.6-13.1c-9.9-3.1-19.4 5.3-17.7 15.3 2.9 17 13.1 32.1 27.3 44.5V408c0 8.8 1.6 17.2 3.8 25.3C91.8 399.9 48 333 48 256c0-110.3 89.7-200 200-200s200 89.7 200 200c0 77-43.8 143.9-107.8 177.3zm36.9-281.1c-3.8-4.4-10.3-5.5-15.3-2.5l-80 48c-3.6 2.2-5.8 6.1-5.8 10.3s2.2 8.1 5.8 10.3l80 48c5.4 3.2 11.7 1.7 15.3-2.5 3.8-4.5 3.8-11 .1-15.5L343.6 208l33.6-40.3c3.8-4.5 3.7-11.1-.1-15.5zm-162.9 45.5l-80-48c-5-3-11.4-2-15.3 2.5-3.8 4.5-3.8 11-.1 15.5l33.6 40.3-33.6 40.3c-3.8 4.5-3.7 11 .1 15.5 3.6 4.2 9.9 5.7 15.3 2.5l80-48c3.6-2.2 5.8-6.1 5.8-10.3s-2.2-8.1-5.8-10.3z"]
};
var faGrinTongueWink = {
  prefix: 'far',
  iconName: 'grin-tongue-wink',
  icon: [496, 512, [], "f58b", "M152 180c-25.7 0-55.9 16.9-59.8 42.1-.8 5 1.7 10 6.1 12.4 4.4 2.4 9.9 1.8 13.7-1.6l9.5-8.5c14.8-13.2 46.2-13.2 61 0l9.5 8.5c2.5 2.2 8 4.7 13.7 1.6 4.4-2.4 6.9-7.4 6.1-12.4-3.9-25.2-34.1-42.1-59.8-42.1zm176-52c-44.2 0-80 35.8-80 80s35.8 80 80 80 80-35.8 80-80-35.8-80-80-80zm0 128c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm0-72c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24zM248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm64 400c0 35.6-29.1 64.5-64.9 64-35.1-.5-63.1-29.8-63.1-65v-42.8l17.7-8.8c15-7.5 31.5 1.7 34.9 16.5l2.8 12.1c2.1 9.2 15.2 9.2 17.3 0l2.8-12.1c3.4-14.8 19.8-24.1 34.9-16.5l17.7 8.8V408zm28.2 25.3c2.2-8.1 3.8-16.5 3.8-25.3v-43.5c14.2-12.4 24.4-27.5 27.3-44.5 1.7-9.9-7.7-18.5-17.7-15.3-25.9 8.3-64.4 13.1-105.6 13.1s-79.6-4.8-105.6-13.1c-9.9-3.1-19.4 5.3-17.7 15.3 2.9 17 13.1 32.1 27.3 44.5V408c0 8.8 1.6 17.2 3.8 25.3C91.8 399.9 48 333 48 256c0-110.3 89.7-200 200-200s200 89.7 200 200c0 77-43.8 143.9-107.8 177.3z"]
};
var faGrinWink = {
  prefix: 'far',
  iconName: 'grin-wink',
  icon: [496, 512, [], "f58c", "M328 180c-25.69 0-55.88 16.92-59.86 42.12-1.75 11.22 11.5 18.24 19.83 10.84l9.55-8.48c14.81-13.19 46.16-13.19 60.97 0l9.55 8.48c8.48 7.43 21.56.25 19.83-10.84C383.88 196.92 353.69 180 328 180zm-160 60c17.67 0 32-14.33 32-32s-14.33-32-32-32-32 14.33-32 32 14.33 32 32 32zm185.55 64.64c-25.93 8.3-64.4 13.06-105.55 13.06s-79.62-4.75-105.55-13.06c-9.94-3.13-19.4 5.37-17.71 15.34C132.67 367.13 196.06 400 248 400s115.33-32.87 123.26-80.02c1.68-9.89-7.67-18.48-17.71-15.34zM248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm0 448c-110.28 0-200-89.72-200-200S137.72 56 248 56s200 89.72 200 200-89.72 200-200 200z"]
};
var faHandLizard = {
  prefix: 'far',
  iconName: 'hand-lizard',
  icon: [576, 512, [], "f258", "M556.686 290.542L410.328 64.829C397.001 44.272 374.417 32 349.917 32H56C25.121 32 0 57.122 0 88v8c0 44.112 35.888 80 80 80h196.042l-18.333 48H144c-48.523 0-88 39.477-88 88 0 30.879 25.121 56 56 56h131.552c2.987 0 5.914.549 8.697 1.631L352 408.418V480h224V355.829c0-23.225-6.679-45.801-19.314-65.287zM528 432H400v-23.582c0-19.948-12.014-37.508-30.604-44.736l-99.751-38.788A71.733 71.733 0 0 0 243.552 320H112c-4.411 0-8-3.589-8-8 0-22.056 17.944-40 40-40h113.709c19.767 0 37.786-12.407 44.84-30.873l24.552-64.281c8.996-23.553-8.428-48.846-33.63-48.846H80c-17.645 0-32-14.355-32-32v-8c0-4.411 3.589-8 8-8h293.917c8.166 0 15.693 4.09 20.137 10.942l146.358 225.715A71.84 71.84 0 0 1 528 355.829V432z"]
};
var faHandPaper = {
  prefix: 'far',
  iconName: 'hand-paper',
  icon: [448, 512, [], "f256", "M372.57 112.641v-10.825c0-43.612-40.52-76.691-83.039-65.546-25.629-49.5-94.09-47.45-117.982.747C130.269 26.456 89.144 57.945 89.144 102v126.13c-19.953-7.427-43.308-5.068-62.083 8.871-29.355 21.796-35.794 63.333-14.55 93.153L132.48 498.569a32 32 0 0 0 26.062 13.432h222.897c14.904 0 27.835-10.289 31.182-24.813l30.184-130.958A203.637 203.637 0 0 0 448 310.564V179c0-40.62-35.523-71.992-75.43-66.359zm27.427 197.922c0 11.731-1.334 23.469-3.965 34.886L368.707 464h-201.92L51.591 302.303c-14.439-20.27 15.023-42.776 29.394-22.605l27.128 38.079c8.995 12.626 29.031 6.287 29.031-9.283V102c0-25.645 36.571-24.81 36.571.691V256c0 8.837 7.163 16 16 16h6.856c8.837 0 16-7.163 16-16V67c0-25.663 36.571-24.81 36.571.691V256c0 8.837 7.163 16 16 16h6.856c8.837 0 16-7.163 16-16V101.125c0-25.672 36.57-24.81 36.57.691V256c0 8.837 7.163 16 16 16h6.857c8.837 0 16-7.163 16-16v-76.309c0-26.242 36.57-25.64 36.57-.691v131.563z"]
};
var faHandPeace = {
  prefix: 'far',
  iconName: 'hand-peace',
  icon: [448, 512, [], "f25b", "M362.146 191.976c-13.71-21.649-38.761-34.016-65.006-30.341V74c0-40.804-32.811-74-73.141-74-40.33 0-73.14 33.196-73.14 74L160 168l-18.679-78.85C126.578 50.843 83.85 32.11 46.209 47.208 8.735 62.238-9.571 104.963 5.008 142.85l55.757 144.927c-30.557 24.956-43.994 57.809-24.733 92.218l54.853 97.999C102.625 498.97 124.73 512 148.575 512h205.702c30.744 0 57.558-21.44 64.555-51.797l27.427-118.999a67.801 67.801 0 0 0 1.729-15.203L448 256c0-44.956-43.263-77.343-85.854-64.024zM399.987 326c0 1.488-.169 2.977-.502 4.423l-27.427 119.001c-1.978 8.582-9.29 14.576-17.782 14.576H148.575c-6.486 0-12.542-3.621-15.805-9.449l-54.854-98c-4.557-8.141-2.619-18.668 4.508-24.488l26.647-21.764a16 16 0 0 0 4.812-18.139l-64.09-166.549C37.226 92.956 84.37 74.837 96.51 106.389l59.784 155.357A16 16 0 0 0 171.227 272h11.632c8.837 0 16-7.163 16-16V74c0-34.375 50.281-34.43 50.281 0v182c0 8.837 7.163 16 16 16h6.856c8.837 0 16-7.163 16-16v-28c0-25.122 36.567-25.159 36.567 0v28c0 8.837 7.163 16 16 16h6.856c8.837 0 16-7.163 16-16 0-25.12 36.567-25.16 36.567 0v70z"]
};
var faHandPointDown = {
  prefix: 'far',
  iconName: 'hand-point-down',
  icon: [448, 512, [], "f0a7", "M188.8 512c45.616 0 83.2-37.765 83.2-83.2v-35.647a93.148 93.148 0 0 0 22.064-7.929c22.006 2.507 44.978-3.503 62.791-15.985C409.342 368.1 448 331.841 448 269.299V248c0-60.063-40-98.512-40-127.2v-2.679c4.952-5.747 8-13.536 8-22.12V32c0-17.673-12.894-32-28.8-32H156.8C140.894 0 128 14.327 128 32v64c0 8.584 3.048 16.373 8 22.12v2.679c0 6.964-6.193 14.862-23.668 30.183l-.148.129-.146.131c-9.937 8.856-20.841 18.116-33.253 25.851C48.537 195.798 0 207.486 0 252.8c0 56.928 35.286 92 83.2 92 8.026 0 15.489-.814 22.4-2.176V428.8c0 45.099 38.101 83.2 83.2 83.2zm0-48c-18.7 0-35.2-16.775-35.2-35.2V270.4c-17.325 0-35.2 26.4-70.4 26.4-26.4 0-35.2-20.625-35.2-44 0-8.794 32.712-20.445 56.1-34.926 14.575-9.074 27.225-19.524 39.875-30.799 18.374-16.109 36.633-33.836 39.596-59.075h176.752C364.087 170.79 400 202.509 400 248v21.299c0 40.524-22.197 57.124-61.325 50.601-8.001 14.612-33.979 24.151-53.625 12.925-18.225 19.365-46.381 17.787-61.05 4.95V428.8c0 18.975-16.225 35.2-35.2 35.2zM328 64c0-13.255 10.745-24 24-24s24 10.745 24 24-10.745 24-24 24-24-10.745-24-24z"]
};
var faHandPointLeft = {
  prefix: 'far',
  iconName: 'hand-point-left',
  icon: [512, 512, [], "f0a5", "M0 220.8C0 266.416 37.765 304 83.2 304h35.647a93.148 93.148 0 0 0 7.929 22.064c-2.507 22.006 3.503 44.978 15.985 62.791C143.9 441.342 180.159 480 242.701 480H264c60.063 0 98.512-40 127.2-40h2.679c5.747 4.952 13.536 8 22.12 8h64c17.673 0 32-12.894 32-28.8V188.8c0-15.906-14.327-28.8-32-28.8h-64c-8.584 0-16.373 3.048-22.12 8H391.2c-6.964 0-14.862-6.193-30.183-23.668l-.129-.148-.131-.146c-8.856-9.937-18.116-20.841-25.851-33.253C316.202 80.537 304.514 32 259.2 32c-56.928 0-92 35.286-92 83.2 0 8.026.814 15.489 2.176 22.4H83.2C38.101 137.6 0 175.701 0 220.8zm48 0c0-18.7 16.775-35.2 35.2-35.2h158.4c0-17.325-26.4-35.2-26.4-70.4 0-26.4 20.625-35.2 44-35.2 8.794 0 20.445 32.712 34.926 56.1 9.074 14.575 19.524 27.225 30.799 39.875 16.109 18.374 33.836 36.633 59.075 39.596v176.752C341.21 396.087 309.491 432 264 432h-21.299c-40.524 0-57.124-22.197-50.601-61.325-14.612-8.001-24.151-33.979-12.925-53.625-19.365-18.225-17.787-46.381-4.95-61.05H83.2C64.225 256 48 239.775 48 220.8zM448 360c13.255 0 24 10.745 24 24s-10.745 24-24 24-24-10.745-24-24 10.745-24 24-24z"]
};
var faHandPointRight = {
  prefix: 'far',
  iconName: 'hand-point-right',
  icon: [512, 512, [], "f0a4", "M428.8 137.6h-86.177a115.52 115.52 0 0 0 2.176-22.4c0-47.914-35.072-83.2-92-83.2-45.314 0-57.002 48.537-75.707 78.784-7.735 12.413-16.994 23.317-25.851 33.253l-.131.146-.129.148C135.662 161.807 127.764 168 120.8 168h-2.679c-5.747-4.952-13.536-8-22.12-8H32c-17.673 0-32 12.894-32 28.8v230.4C0 435.106 14.327 448 32 448h64c8.584 0 16.373-3.048 22.12-8h2.679c28.688 0 67.137 40 127.2 40h21.299c62.542 0 98.8-38.658 99.94-91.145 12.482-17.813 18.491-40.785 15.985-62.791A93.148 93.148 0 0 0 393.152 304H428.8c45.435 0 83.2-37.584 83.2-83.2 0-45.099-38.101-83.2-83.2-83.2zm0 118.4h-91.026c12.837 14.669 14.415 42.825-4.95 61.05 11.227 19.646 1.687 45.624-12.925 53.625 6.524 39.128-10.076 61.325-50.6 61.325H248c-45.491 0-77.21-35.913-120-39.676V215.571c25.239-2.964 42.966-21.222 59.075-39.596 11.275-12.65 21.725-25.3 30.799-39.875C232.355 112.712 244.006 80 252.8 80c23.375 0 44 8.8 44 35.2 0 35.2-26.4 53.075-26.4 70.4h158.4c18.425 0 35.2 16.5 35.2 35.2 0 18.975-16.225 35.2-35.2 35.2zM88 384c0 13.255-10.745 24-24 24s-24-10.745-24-24 10.745-24 24-24 24 10.745 24 24z"]
};
var faHandPointUp = {
  prefix: 'far',
  iconName: 'hand-point-up',
  icon: [448, 512, [], "f0a6", "M105.6 83.2v86.177a115.52 115.52 0 0 0-22.4-2.176c-47.914 0-83.2 35.072-83.2 92 0 45.314 48.537 57.002 78.784 75.707 12.413 7.735 23.317 16.994 33.253 25.851l.146.131.148.129C129.807 376.338 136 384.236 136 391.2v2.679c-4.952 5.747-8 13.536-8 22.12v64c0 17.673 12.894 32 28.8 32h230.4c15.906 0 28.8-14.327 28.8-32v-64c0-8.584-3.048-16.373-8-22.12V391.2c0-28.688 40-67.137 40-127.2v-21.299c0-62.542-38.658-98.8-91.145-99.94-17.813-12.482-40.785-18.491-62.791-15.985A93.148 93.148 0 0 0 272 118.847V83.2C272 37.765 234.416 0 188.8 0c-45.099 0-83.2 38.101-83.2 83.2zm118.4 0v91.026c14.669-12.837 42.825-14.415 61.05 4.95 19.646-11.227 45.624-1.687 53.625 12.925 39.128-6.524 61.325 10.076 61.325 50.6V264c0 45.491-35.913 77.21-39.676 120H183.571c-2.964-25.239-21.222-42.966-39.596-59.075-12.65-11.275-25.3-21.725-39.875-30.799C80.712 279.645 48 267.994 48 259.2c0-23.375 8.8-44 35.2-44 35.2 0 53.075 26.4 70.4 26.4V83.2c0-18.425 16.5-35.2 35.2-35.2 18.975 0 35.2 16.225 35.2 35.2zM352 424c13.255 0 24 10.745 24 24s-10.745 24-24 24-24-10.745-24-24 10.745-24 24-24z"]
};
var faHandPointer = {
  prefix: 'far',
  iconName: 'hand-pointer',
  icon: [448, 512, [], "f25a", "M358.182 179.361c-19.493-24.768-52.679-31.945-79.872-19.098-15.127-15.687-36.182-22.487-56.595-19.629V67c0-36.944-29.736-67-66.286-67S89.143 30.056 89.143 67v161.129c-19.909-7.41-43.272-5.094-62.083 8.872-29.355 21.795-35.793 63.333-14.55 93.152l109.699 154.001C134.632 501.59 154.741 512 176 512h178.286c30.802 0 57.574-21.5 64.557-51.797l27.429-118.999A67.873 67.873 0 0 0 448 326v-84c0-46.844-46.625-79.273-89.818-62.639zM80.985 279.697l27.126 38.079c8.995 12.626 29.031 6.287 29.031-9.283V67c0-25.12 36.571-25.16 36.571 0v175c0 8.836 7.163 16 16 16h6.857c8.837 0 16-7.164 16-16v-35c0-25.12 36.571-25.16 36.571 0v35c0 8.836 7.163 16 16 16H272c8.837 0 16-7.164 16-16v-21c0-25.12 36.571-25.16 36.571 0v21c0 8.836 7.163 16 16 16h6.857c8.837 0 16-7.164 16-16 0-25.121 36.571-25.16 36.571 0v84c0 1.488-.169 2.977-.502 4.423l-27.43 119.001c-1.978 8.582-9.29 14.576-17.782 14.576H176c-5.769 0-11.263-2.878-14.697-7.697l-109.712-154c-14.406-20.223 14.994-42.818 29.394-22.606zM176.143 400v-96c0-8.837 6.268-16 14-16h6c7.732 0 14 7.163 14 16v96c0 8.837-6.268 16-14 16h-6c-7.733 0-14-7.163-14-16zm75.428 0v-96c0-8.837 6.268-16 14-16h6c7.732 0 14 7.163 14 16v96c0 8.837-6.268 16-14 16h-6c-7.732 0-14-7.163-14-16zM327 400v-96c0-8.837 6.268-16 14-16h6c7.732 0 14 7.163 14 16v96c0 8.837-6.268 16-14 16h-6c-7.732 0-14-7.163-14-16z"]
};
var faHandRock = {
  prefix: 'far',
  iconName: 'hand-rock',
  icon: [512, 512, [], "f255", "M408.864 79.052c-22.401-33.898-66.108-42.273-98.813-23.588-29.474-31.469-79.145-31.093-108.334-.022-47.16-27.02-108.71 5.055-110.671 60.806C44.846 105.407 0 140.001 0 187.429v56.953c0 32.741 14.28 63.954 39.18 85.634l97.71 85.081c4.252 3.702 3.11 5.573 3.11 32.903 0 17.673 14.327 32 32 32h252c17.673 0 32-14.327 32-32 0-23.513-1.015-30.745 3.982-42.37l42.835-99.656c6.094-14.177 9.183-29.172 9.183-44.568V146.963c0-52.839-54.314-88.662-103.136-67.911zM464 261.406a64.505 64.505 0 0 1-5.282 25.613l-42.835 99.655c-5.23 12.171-7.883 25.04-7.883 38.25V432H188v-10.286c0-16.37-7.14-31.977-19.59-42.817l-97.71-85.08C56.274 281.255 48 263.236 48 244.381v-56.953c0-33.208 52-33.537 52 .677v41.228a16 16 0 0 0 5.493 12.067l7 6.095A16 16 0 0 0 139 235.429V118.857c0-33.097 52-33.725 52 .677v26.751c0 8.836 7.164 16 16 16h7c8.836 0 16-7.164 16-16v-41.143c0-33.134 52-33.675 52 .677v40.466c0 8.836 7.163 16 16 16h7c8.837 0 16-7.164 16-16v-27.429c0-33.03 52-33.78 52 .677v26.751c0 8.836 7.163 16 16 16h7c8.837 0 16-7.164 16-16 0-33.146 52-33.613 52 .677v114.445z"]
};
var faHandScissors = {
  prefix: 'far',
  iconName: 'hand-scissors',
  icon: [512, 512, [], "f257", "M256 480l70-.013c5.114 0 10.231-.583 15.203-1.729l118.999-27.427C490.56 443.835 512 417.02 512 386.277V180.575c0-23.845-13.03-45.951-34.005-57.69l-97.999-54.853c-34.409-19.261-67.263-5.824-92.218 24.733L142.85 37.008c-37.887-14.579-80.612 3.727-95.642 41.201-15.098 37.642 3.635 80.37 41.942 95.112L168 192l-94-9.141c-40.804 0-74 32.811-74 73.14 0 40.33 33.196 73.141 74 73.141h87.635c-3.675 26.245 8.692 51.297 30.341 65.006C178.657 436.737 211.044 480 256 480zm0-48.013c-25.16 0-25.12-36.567 0-36.567 8.837 0 16-7.163 16-16v-6.856c0-8.837-7.163-16-16-16h-28c-25.159 0-25.122-36.567 0-36.567h28c8.837 0 16-7.163 16-16v-6.856c0-8.837-7.163-16-16-16H74c-34.43 0-34.375-50.281 0-50.281h182c8.837 0 16-7.163 16-16v-11.632a16 16 0 0 0-10.254-14.933L106.389 128.51c-31.552-12.14-13.432-59.283 19.222-46.717l166.549 64.091a16.001 16.001 0 0 0 18.139-4.812l21.764-26.647c5.82-7.127 16.348-9.064 24.488-4.508l98 54.854c5.828 3.263 9.449 9.318 9.449 15.805v205.701c0 8.491-5.994 15.804-14.576 17.782l-119.001 27.427a19.743 19.743 0 0 1-4.423.502h-70z"]
};
var faHandSpock = {
  prefix: 'far',
  iconName: 'hand-spock',
  icon: [512, 512, [], "f259", "M501.03053,116.17605c-19.39059-31.50779-51.24406-35.72849-66.31044-35.01756-14.11325-50.81051-62.0038-54.08-70.73816-54.08a74.03091,74.03091,0,0,0-72.23816,58.916l-4.64648,22.66014-13.68357-53.207c-9.09569-35.37107-46.412-64.05074-89.66-53.07223a73.89749,73.89749,0,0,0-55.121,78.94722,73.68273,73.68273,0,0,0-64.8495,94.42181l24.35933,82.19721c-38.24017-7.54492-62.79677,16.18358-68.11512,21.84764a73.6791,73.6791,0,0,0,3.19921,104.19329l91.36509,85.9765A154.164,154.164,0,0,0,220.62279,512h107.4549A127.30079,127.30079,0,0,0,452.3392,413.86139l57.623-241.96272A73.20274,73.20274,0,0,0,501.03053,116.17605Zm-37.7597,44.60544L405.64788,402.74812a79.46616,79.46616,0,0,1-77.57019,61.25972H220.62279a106.34052,106.34052,0,0,1-73.1366-28.998l-91.369-85.98041C31.34381,325.72669,66.61133,288.131,91.39644,311.5392l51.123,48.10739c5.42577,5.10937,13.48239.71679,13.48239-5.82617a246.79914,246.79914,0,0,0-10.17771-70.1523l-36.01362-121.539c-9.7324-32.88279,39.69916-47.27145,49.38664-14.625l31.3437,105.77923c5.59374,18.90428,33.78119,10.71288,28.9648-8.00781L177.06427,80.23662c-8.50389-33.1035,41.43157-45.64646,49.86515-12.83593l47.32609,184.035c4.42773,17.24218,29.16207,16.5039,32.71089-.80468l31.791-154.9706c6.81054-33.1074,57.51748-24.10741,50.11906,11.96288L360.32764,246.78924c-3.72265,18.10936,23.66793,24.63084,28.05659,6.21679L413.185,148.85962C421.1498,115.512,471.14,127.79713,463.27083,160.78149Z"]
};
var faHandshake = {
  prefix: 'far',
  iconName: 'handshake',
  icon: [640, 512, [], "f2b5", "M519.2 127.9l-47.6-47.6A56.252 56.252 0 0 0 432 64H205.2c-14.8 0-29.1 5.9-39.6 16.3L118 127.9H0v255.7h64c17.6 0 31.8-14.2 31.9-31.7h9.1l84.6 76.4c30.9 25.1 73.8 25.7 105.6 3.8 12.5 10.8 26 15.9 41.1 15.9 18.2 0 35.3-7.4 48.8-24 22.1 8.7 48.2 2.6 64-16.8l26.2-32.3c5.6-6.9 9.1-14.8 10.9-23h57.9c.1 17.5 14.4 31.7 31.9 31.7h64V127.9H519.2zM48 351.6c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16c0 8.9-7.2 16-16 16zm390-6.9l-26.1 32.2c-2.8 3.4-7.8 4-11.3 1.2l-23.9-19.4-30 36.5c-6 7.3-15 4.8-18 2.4l-36.8-31.5-15.6 19.2c-13.9 17.1-39.2 19.7-55.3 6.6l-97.3-88H96V175.8h41.9l61.7-61.6c2-.8 3.7-1.5 5.7-2.3H262l-38.7 35.5c-29.4 26.9-31.1 72.3-4.4 101.3 14.8 16.2 61.2 41.2 101.5 4.4l8.2-7.5 108.2 87.8c3.4 2.8 3.9 7.9 1.2 11.3zm106-40.8h-69.2c-2.3-2.8-4.9-5.4-7.7-7.7l-102.7-83.4 12.5-11.4c6.5-6 7-16.1 1-22.6L367 167.1c-6-6.5-16.1-6.9-22.6-1l-55.2 50.6c-9.5 8.7-25.7 9.4-34.6 0-9.3-9.9-8.5-25.1 1.2-33.9l65.6-60.1c7.4-6.8 17-10.5 27-10.5l83.7-.2c2.1 0 4.1.8 5.5 2.3l61.7 61.6H544v128zm48 47.7c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16c0 8.9-7.2 16-16 16z"]
};
var faHdd = {
  prefix: 'far',
  iconName: 'hdd',
  icon: [576, 512, [], "f0a0", "M567.403 235.642L462.323 84.589A48 48 0 0 0 422.919 64H153.081a48 48 0 0 0-39.404 20.589L8.597 235.642A48.001 48.001 0 0 0 0 263.054V400c0 26.51 21.49 48 48 48h480c26.51 0 48-21.49 48-48V263.054c0-9.801-3-19.366-8.597-27.412zM153.081 112h269.838l77.913 112H75.168l77.913-112zM528 400H48V272h480v128zm-32-64c0 17.673-14.327 32-32 32s-32-14.327-32-32 14.327-32 32-32 32 14.327 32 32zm-96 0c0 17.673-14.327 32-32 32s-32-14.327-32-32 14.327-32 32-32 32 14.327 32 32z"]
};
var faHeart = {
  prefix: 'far',
  iconName: 'heart',
  icon: [512, 512, [], "f004", "M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"]
};
var faHospital = {
  prefix: 'far',
  iconName: 'hospital',
  icon: [448, 512, [], "f0f8", "M128 244v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12zm140 12h40c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12zm-76 84v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12zm76 12h40c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12zm180 124v36H0v-36c0-6.627 5.373-12 12-12h19.5V85.035C31.5 73.418 42.245 64 55.5 64H144V24c0-13.255 10.745-24 24-24h112c13.255 0 24 10.745 24 24v40h88.5c13.255 0 24 9.418 24 21.035V464H436c6.627 0 12 5.373 12 12zM79.5 463H192v-67c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v67h112.5V112H304v24c0 13.255-10.745 24-24 24H168c-13.255 0-24-10.745-24-24v-24H79.5v351zM266 64h-26V38a6 6 0 0 0-6-6h-20a6 6 0 0 0-6 6v26h-26a6 6 0 0 0-6 6v20a6 6 0 0 0 6 6h26v26a6 6 0 0 0 6 6h20a6 6 0 0 0 6-6V96h26a6 6 0 0 0 6-6V70a6 6 0 0 0-6-6z"]
};
var faHourglass = {
  prefix: 'far',
  iconName: 'hourglass',
  icon: [384, 512, [], "f254", "M368 48h4c6.627 0 12-5.373 12-12V12c0-6.627-5.373-12-12-12H12C5.373 0 0 5.373 0 12v24c0 6.627 5.373 12 12 12h4c0 80.564 32.188 165.807 97.18 208C47.899 298.381 16 383.9 16 464h-4c-6.627 0-12 5.373-12 12v24c0 6.627 5.373 12 12 12h360c6.627 0 12-5.373 12-12v-24c0-6.627-5.373-12-12-12h-4c0-80.564-32.188-165.807-97.18-208C336.102 213.619 368 128.1 368 48zM64 48h256c0 101.62-57.307 184-128 184S64 149.621 64 48zm256 416H64c0-101.62 57.308-184 128-184s128 82.38 128 184z"]
};
var faIdBadge = {
  prefix: 'far',
  iconName: 'id-badge',
  icon: [384, 512, [], "f2c1", "M336 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zm0 464H48V48h288v416zM144 112h96c8.8 0 16-7.2 16-16s-7.2-16-16-16h-96c-8.8 0-16 7.2-16 16s7.2 16 16 16zm48 176c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm-89.6 128h179.2c12.4 0 22.4-8.6 22.4-19.2v-19.2c0-31.8-30.1-57.6-67.2-57.6-10.8 0-18.7 8-44.8 8-26.9 0-33.4-8-44.8-8-37.1 0-67.2 25.8-67.2 57.6v19.2c0 10.6 10 19.2 22.4 19.2z"]
};
var faIdCard = {
  prefix: 'far',
  iconName: 'id-card',
  icon: [576, 512, [], "f2c2", "M528 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm0 400H303.2c.9-4.5.8 3.6.8-22.4 0-31.8-30.1-57.6-67.2-57.6-10.8 0-18.7 8-44.8 8-26.9 0-33.4-8-44.8-8-37.1 0-67.2 25.8-67.2 57.6 0 26-.2 17.9.8 22.4H48V144h480v288zm-168-80h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8H360c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8zm0-64h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8H360c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8zm0-64h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8H360c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8zm-168 96c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64z"]
};
var faImage = {
  prefix: 'far',
  iconName: 'image',
  icon: [512, 512, [], "f03e", "M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm-6 336H54a6 6 0 0 1-6-6V118a6 6 0 0 1 6-6h404a6 6 0 0 1 6 6v276a6 6 0 0 1-6 6zM128 152c-22.091 0-40 17.909-40 40s17.909 40 40 40 40-17.909 40-40-17.909-40-40-40zM96 352h320v-80l-87.515-87.515c-4.686-4.686-12.284-4.686-16.971 0L192 304l-39.515-39.515c-4.686-4.686-12.284-4.686-16.971 0L96 304v48z"]
};
var faImages = {
  prefix: 'far',
  iconName: 'images',
  icon: [576, 512, [], "f302", "M480 416v16c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V176c0-26.51 21.49-48 48-48h16v48H54a6 6 0 0 0-6 6v244a6 6 0 0 0 6 6h372a6 6 0 0 0 6-6v-10h48zm42-336H150a6 6 0 0 0-6 6v244a6 6 0 0 0 6 6h372a6 6 0 0 0 6-6V86a6 6 0 0 0-6-6zm6-48c26.51 0 48 21.49 48 48v256c0 26.51-21.49 48-48 48H144c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h384zM264 144c0 22.091-17.909 40-40 40s-40-17.909-40-40 17.909-40 40-40 40 17.909 40 40zm-72 96l39.515-39.515c4.686-4.686 12.284-4.686 16.971 0L288 240l103.515-103.515c4.686-4.686 12.284-4.686 16.971 0L480 208v80H192v-48z"]
};
var faKeyboard = {
  prefix: 'far',
  iconName: 'keyboard',
  icon: [576, 512, [], "f11c", "M528 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h480c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm8 336c0 4.411-3.589 8-8 8H48c-4.411 0-8-3.589-8-8V112c0-4.411 3.589-8 8-8h480c4.411 0 8 3.589 8 8v288zM170 270v-28c0-6.627-5.373-12-12-12h-28c-6.627 0-12 5.373-12 12v28c0 6.627 5.373 12 12 12h28c6.627 0 12-5.373 12-12zm96 0v-28c0-6.627-5.373-12-12-12h-28c-6.627 0-12 5.373-12 12v28c0 6.627 5.373 12 12 12h28c6.627 0 12-5.373 12-12zm96 0v-28c0-6.627-5.373-12-12-12h-28c-6.627 0-12 5.373-12 12v28c0 6.627 5.373 12 12 12h28c6.627 0 12-5.373 12-12zm96 0v-28c0-6.627-5.373-12-12-12h-28c-6.627 0-12 5.373-12 12v28c0 6.627 5.373 12 12 12h28c6.627 0 12-5.373 12-12zm-336 82v-28c0-6.627-5.373-12-12-12H82c-6.627 0-12 5.373-12 12v28c0 6.627 5.373 12 12 12h28c6.627 0 12-5.373 12-12zm384 0v-28c0-6.627-5.373-12-12-12h-28c-6.627 0-12 5.373-12 12v28c0 6.627 5.373 12 12 12h28c6.627 0 12-5.373 12-12zM122 188v-28c0-6.627-5.373-12-12-12H82c-6.627 0-12 5.373-12 12v28c0 6.627 5.373 12 12 12h28c6.627 0 12-5.373 12-12zm96 0v-28c0-6.627-5.373-12-12-12h-28c-6.627 0-12 5.373-12 12v28c0 6.627 5.373 12 12 12h28c6.627 0 12-5.373 12-12zm96 0v-28c0-6.627-5.373-12-12-12h-28c-6.627 0-12 5.373-12 12v28c0 6.627 5.373 12 12 12h28c6.627 0 12-5.373 12-12zm96 0v-28c0-6.627-5.373-12-12-12h-28c-6.627 0-12 5.373-12 12v28c0 6.627 5.373 12 12 12h28c6.627 0 12-5.373 12-12zm96 0v-28c0-6.627-5.373-12-12-12h-28c-6.627 0-12 5.373-12 12v28c0 6.627 5.373 12 12 12h28c6.627 0 12-5.373 12-12zm-98 158v-16c0-6.627-5.373-12-12-12H180c-6.627 0-12 5.373-12 12v16c0 6.627 5.373 12 12 12h216c6.627 0 12-5.373 12-12z"]
};
var faKiss = {
  prefix: 'far',
  iconName: 'kiss',
  icon: [496, 512, [], "f596", "M168 176c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm136 132c0-19.2-28.8-41.5-71.5-44-3.8-.4-7.4 2.4-8.2 6.2-.9 3.8 1.1 7.7 4.7 9.2l16.9 7.2c13 5.5 20.8 13.5 20.8 21.5s-7.8 16-20.7 21.5l-17 7.2c-5.7 2.4-6 12.2 0 14.8l16.9 7.2c13 5.5 20.8 13.5 20.8 21.5s-7.8 16-20.7 21.5l-17 7.2c-3.6 1.5-5.6 5.4-4.7 9.2.8 3.6 4.1 6.2 7.8 6.2h.5c42.8-2.5 71.5-24.8 71.5-44 0-13-13.4-27.3-35.2-36C290.6 335.3 304 321 304 308zM248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-110.3 0-200-89.7-200-200S137.7 56 248 56s200 89.7 200 200-89.7 200-200 200zm80-280c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32z"]
};
var faKissBeam = {
  prefix: 'far',
  iconName: 'kiss-beam',
  icon: [496, 512, [], "f597", "M168 152c-23.8 0-52.7 29.3-56 71.4-.3 3.7 2 7.2 5.6 8.3 3.5 1 7.5-.5 9.3-3.7l9.5-17c7.7-13.7 19.2-21.6 31.5-21.6s23.8 7.9 31.5 21.6l9.5 17c2.1 3.7 6.2 4.7 9.3 3.7 3.6-1.1 5.9-4.5 5.6-8.3-3.1-42.1-32-71.4-55.8-71.4zM248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-110.3 0-200-89.7-200-200S137.7 56 248 56s200 89.7 200 200-89.7 200-200 200zm56-148c0-19.2-28.8-41.5-71.5-44-3.8-.4-7.4 2.4-8.2 6.2-.9 3.8 1.1 7.7 4.7 9.2l16.9 7.2c13 5.5 20.8 13.5 20.8 21.5s-7.8 16-20.7 21.5l-17 7.2c-5.7 2.4-6 12.2 0 14.8l16.9 7.2c13 5.5 20.8 13.5 20.8 21.5s-7.8 16-20.7 21.5l-17 7.2c-3.6 1.5-5.6 5.4-4.7 9.2.8 3.6 4.1 6.2 7.8 6.2h.5c42.8-2.5 71.5-24.8 71.5-44 0-13-13.4-27.3-35.2-36C290.6 335.3 304 321 304 308zm24-156c-23.8 0-52.7 29.3-56 71.4-.3 3.7 2 7.2 5.6 8.3 3.5 1 7.5-.5 9.3-3.7l9.5-17c7.7-13.7 19.2-21.6 31.5-21.6s23.8 7.9 31.5 21.6l9.5 17c2.1 3.7 6.2 4.7 9.3 3.7 3.6-1.1 5.9-4.5 5.6-8.3-3.1-42.1-32-71.4-55.8-71.4z"]
};
var faKissWinkHeart = {
  prefix: 'far',
  iconName: 'kiss-wink-heart',
  icon: [504, 512, [], "f598", "M304 308.5c0-19.2-28.8-41.5-71.5-44-3.8-.4-7.4 2.4-8.2 6.2-.9 3.8 1.1 7.7 4.7 9.2l16.9 7.2c13 5.5 20.8 13.5 20.8 21.5s-7.8 16-20.7 21.5l-17 7.2c-5.7 2.4-6 12.2 0 14.8l16.9 7.2c13 5.5 20.8 13.5 20.8 21.5s-7.8 16-20.7 21.5l-17 7.2c-3.6 1.5-5.6 5.4-4.7 9.2.8 3.6 4.1 6.2 7.8 6.2h.5c42.8-2.5 71.5-24.8 71.5-44 0-13-13.4-27.3-35.2-36 21.7-9.1 35.1-23.4 35.1-36.4zm70.5-83.5l9.5 8.5c3.8 3.3 9.3 4 13.7 1.6 4.4-2.4 6.9-7.4 6.1-12.4-4-25.2-34.2-42.1-59.8-42.1s-55.9 16.9-59.8 42.1c-.8 5 1.7 10 6.1 12.4 5.8 3.1 11.2.7 13.7-1.6l9.5-8.5c14.8-13.2 46.2-13.2 61 0zM136 208.5c0 17.7 14.3 32 32 32s32-14.3 32-32-14.3-32-32-32-32 14.3-32 32zm365.1 194c-8-20.8-31.5-31.5-53.1-25.9l-8.4 2.2-2.3-8.4c-5.9-21.4-27-36.5-49-33-25.2 4-40.6 28.6-34 52.6l22.9 82.6c1.5 5.3 7 8.5 12.4 7.1l83-21.5c24.1-6.3 37.7-31.8 28.5-55.7zM334 436.3c-26.1 12.5-55.2 19.7-86 19.7-110.3 0-200-89.7-200-200S137.7 56 248 56s200 89.7 200 200c0 22.1-3.7 43.3-10.4 63.2 9 6.4 17 14.2 22.6 23.9 6.4.1 12.6 1.4 18.6 2.9 10.9-27.9 17.1-58.2 17.1-90C496 119 385 8 248 8S0 119 0 256s111 248 248 248c35.4 0 68.9-7.5 99.4-20.9-2.5-7.3 4.3 17.2-13.4-46.8z"]
};
var faLaugh = {
  prefix: 'far',
  iconName: 'laugh',
  icon: [496, 512, [], "f599", "M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm141.4 389.4c-37.8 37.8-88 58.6-141.4 58.6s-103.6-20.8-141.4-58.6S48 309.4 48 256s20.8-103.6 58.6-141.4S194.6 56 248 56s103.6 20.8 141.4 58.6S448 202.6 448 256s-20.8 103.6-58.6 141.4zM328 224c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm-160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm194.4 64H133.6c-8.2 0-14.5 7-13.5 15 7.5 59.2 58.9 105 121.1 105h13.6c62.2 0 113.6-45.8 121.1-105 1-8-5.3-15-13.5-15z"]
};
var faLaughBeam = {
  prefix: 'far',
  iconName: 'laugh-beam',
  icon: [496, 512, [], "f59a", "M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm141.4 389.4c-37.8 37.8-88 58.6-141.4 58.6s-103.6-20.8-141.4-58.6S48 309.4 48 256s20.8-103.6 58.6-141.4S194.6 56 248 56s103.6 20.8 141.4 58.6S448 202.6 448 256s-20.8 103.6-58.6 141.4zM328 152c-23.8 0-52.7 29.3-56 71.4-.7 8.6 10.8 11.9 14.9 4.5l9.5-17c7.7-13.7 19.2-21.6 31.5-21.6s23.8 7.9 31.5 21.6l9.5 17c4.1 7.4 15.6 4 14.9-4.5-3.1-42.1-32-71.4-55.8-71.4zm-201 75.9l9.5-17c7.7-13.7 19.2-21.6 31.5-21.6s23.8 7.9 31.5 21.6l9.5 17c4.1 7.4 15.6 4 14.9-4.5-3.3-42.1-32.2-71.4-56-71.4s-52.7 29.3-56 71.4c-.6 8.5 10.9 11.9 15.1 4.5zM362.4 288H133.6c-8.2 0-14.5 7-13.5 15 7.5 59.2 58.9 105 121.1 105h13.6c62.2 0 113.6-45.8 121.1-105 1-8-5.3-15-13.5-15z"]
};
var faLaughSquint = {
  prefix: 'far',
  iconName: 'laugh-squint',
  icon: [496, 512, [], "f59b", "M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm141.4 389.4c-37.8 37.8-88 58.6-141.4 58.6s-103.6-20.8-141.4-58.6S48 309.4 48 256s20.8-103.6 58.6-141.4S194.6 56 248 56s103.6 20.8 141.4 58.6S448 202.6 448 256s-20.8 103.6-58.6 141.4zM343.6 196l33.6-40.3c8.6-10.3-3.8-24.8-15.4-18l-80 48c-7.8 4.7-7.8 15.9 0 20.6l80 48c11.5 6.8 24-7.6 15.4-18L343.6 196zm-209.4 58.3l80-48c7.8-4.7 7.8-15.9 0-20.6l-80-48c-11.6-6.9-24 7.7-15.4 18l33.6 40.3-33.6 40.3c-8.7 10.4 3.8 24.8 15.4 18zM362.4 288H133.6c-8.2 0-14.5 7-13.5 15 7.5 59.2 58.9 105 121.1 105h13.6c62.2 0 113.6-45.8 121.1-105 1-8-5.3-15-13.5-15z"]
};
var faLaughWink = {
  prefix: 'far',
  iconName: 'laugh-wink',
  icon: [496, 512, [], "f59c", "M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm141.4 389.4c-37.8 37.8-88 58.6-141.4 58.6s-103.6-20.8-141.4-58.6C68.8 359.6 48 309.4 48 256s20.8-103.6 58.6-141.4C144.4 76.8 194.6 56 248 56s103.6 20.8 141.4 58.6c37.8 37.8 58.6 88 58.6 141.4s-20.8 103.6-58.6 141.4zM328 164c-25.7 0-55.9 16.9-59.9 42.1-1.7 11.2 11.5 18.2 19.8 10.8l9.5-8.5c14.8-13.2 46.2-13.2 61 0l9.5 8.5c8.5 7.4 21.6.3 19.8-10.8-3.8-25.2-34-42.1-59.7-42.1zm-160 60c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm194.4 64H133.6c-8.2 0-14.5 7-13.5 15 7.5 59.2 58.9 105 121.1 105h13.6c62.2 0 113.6-45.8 121.1-105 1-8-5.3-15-13.5-15z"]
};
var faLemon = {
  prefix: 'far',
  iconName: 'lemon',
  icon: [512, 512, [], "f094", "M484.112 27.889C455.989-.233 416.108-8.057 387.059 8.865 347.604 31.848 223.504-41.111 91.196 91.197-41.277 223.672 31.923 347.472 8.866 387.058c-16.922 29.051-9.1 68.932 19.022 97.054 28.135 28.135 68.011 35.938 97.057 19.021 39.423-22.97 163.557 49.969 295.858-82.329 132.474-132.477 59.273-256.277 82.331-295.861 16.922-29.05 9.1-68.931-19.022-97.054zm-22.405 72.894c-38.8 66.609 45.6 165.635-74.845 286.08-120.44 120.443-219.475 36.048-286.076 74.843-22.679 13.207-64.035-27.241-50.493-50.488 38.8-66.609-45.6-165.635 74.845-286.08C245.573 4.702 344.616 89.086 411.219 50.292c22.73-13.24 64.005 27.288 50.488 50.491zm-169.861 8.736c1.37 10.96-6.404 20.957-17.365 22.327-54.846 6.855-135.779 87.787-142.635 142.635-1.373 10.989-11.399 18.734-22.326 17.365-10.961-1.37-18.735-11.366-17.365-22.326 9.162-73.286 104.167-168.215 177.365-177.365 10.953-1.368 20.956 6.403 22.326 17.364z"]
};
var faLifeRing = {
  prefix: 'far',
  iconName: 'life-ring',
  icon: [512, 512, [], "f1cd", "M256 504c136.967 0 248-111.033 248-248S392.967 8 256 8 8 119.033 8 256s111.033 248 248 248zm-103.398-76.72l53.411-53.411c31.806 13.506 68.128 13.522 99.974 0l53.411 53.411c-63.217 38.319-143.579 38.319-206.796 0zM336 256c0 44.112-35.888 80-80 80s-80-35.888-80-80 35.888-80 80-80 80 35.888 80 80zm91.28 103.398l-53.411-53.411c13.505-31.806 13.522-68.128 0-99.974l53.411-53.411c38.319 63.217 38.319 143.579 0 206.796zM359.397 84.72l-53.411 53.411c-31.806-13.505-68.128-13.522-99.973 0L152.602 84.72c63.217-38.319 143.579-38.319 206.795 0zM84.72 152.602l53.411 53.411c-13.506 31.806-13.522 68.128 0 99.974L84.72 359.398c-38.319-63.217-38.319-143.579 0-206.796z"]
};
var faLightbulb = {
  prefix: 'far',
  iconName: 'lightbulb',
  icon: [352, 512, [], "f0eb", "M176 80c-52.94 0-96 43.06-96 96 0 8.84 7.16 16 16 16s16-7.16 16-16c0-35.3 28.72-64 64-64 8.84 0 16-7.16 16-16s-7.16-16-16-16zM96.06 459.17c0 3.15.93 6.22 2.68 8.84l24.51 36.84c2.97 4.46 7.97 7.14 13.32 7.14h78.85c5.36 0 10.36-2.68 13.32-7.14l24.51-36.84c1.74-2.62 2.67-5.7 2.68-8.84l.05-43.18H96.02l.04 43.18zM176 0C73.72 0 0 82.97 0 176c0 44.37 16.45 84.85 43.56 115.78 16.64 18.99 42.74 58.8 52.42 92.16v.06h48v-.12c-.01-4.77-.72-9.51-2.15-14.07-5.59-17.81-22.82-64.77-62.17-109.67-20.54-23.43-31.52-53.15-31.61-84.14-.2-73.64 59.67-128 127.95-128 70.58 0 128 57.42 128 128 0 30.97-11.24 60.85-31.65 84.14-39.11 44.61-56.42 91.47-62.1 109.46a47.507 47.507 0 0 0-2.22 14.3v.1h48v-.05c9.68-33.37 35.78-73.18 52.42-92.16C335.55 260.85 352 220.37 352 176 352 78.8 273.2 0 176 0z"]
};
var faListAlt = {
  prefix: 'far',
  iconName: 'list-alt',
  icon: [512, 512, [], "f022", "M464 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zm-6 400H54a6 6 0 0 1-6-6V86a6 6 0 0 1 6-6h404a6 6 0 0 1 6 6v340a6 6 0 0 1-6 6zm-42-92v24c0 6.627-5.373 12-12 12H204c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h200c6.627 0 12 5.373 12 12zm0-96v24c0 6.627-5.373 12-12 12H204c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h200c6.627 0 12 5.373 12 12zm0-96v24c0 6.627-5.373 12-12 12H204c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h200c6.627 0 12 5.373 12 12zm-252 12c0 19.882-16.118 36-36 36s-36-16.118-36-36 16.118-36 36-36 36 16.118 36 36zm0 96c0 19.882-16.118 36-36 36s-36-16.118-36-36 16.118-36 36-36 36 16.118 36 36zm0 96c0 19.882-16.118 36-36 36s-36-16.118-36-36 16.118-36 36-36 36 16.118 36 36z"]
};
var faMap = {
  prefix: 'far',
  iconName: 'map',
  icon: [576, 512, [], "f279", "M560.02 32c-1.96 0-3.98.37-5.96 1.16L384.01 96H384L212 35.28A64.252 64.252 0 0 0 191.76 32c-6.69 0-13.37 1.05-19.81 3.14L20.12 87.95A32.006 32.006 0 0 0 0 117.66v346.32C0 473.17 7.53 480 15.99 480c1.96 0 3.97-.37 5.96-1.16L192 416l172 60.71a63.98 63.98 0 0 0 40.05.15l151.83-52.81A31.996 31.996 0 0 0 576 394.34V48.02c0-9.19-7.53-16.02-15.98-16.02zM224 90.42l128 45.19v285.97l-128-45.19V90.42zM48 418.05V129.07l128-44.53v286.2l-.64.23L48 418.05zm480-35.13l-128 44.53V141.26l.64-.24L528 93.95v288.97z"]
};
var faMeh = {
  prefix: 'far',
  iconName: 'meh',
  icon: [496, 512, [], "f11a", "M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-110.3 0-200-89.7-200-200S137.7 56 248 56s200 89.7 200 200-89.7 200-200 200zm-80-216c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm160-64c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm8 144H160c-13.2 0-24 10.8-24 24s10.8 24 24 24h176c13.2 0 24-10.8 24-24s-10.8-24-24-24z"]
};
var faMehBlank = {
  prefix: 'far',
  iconName: 'meh-blank',
  icon: [496, 512, [], "f5a4", "M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-110.3 0-200-89.7-200-200S137.7 56 248 56s200 89.7 200 200-89.7 200-200 200zm-80-280c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm160 0c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32z"]
};
var faMehRollingEyes = {
  prefix: 'far',
  iconName: 'meh-rolling-eyes',
  icon: [496, 512, [], "f5a5", "M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-110.3 0-200-89.7-200-200S137.7 56 248 56s200 89.7 200 200-89.7 200-200 200zm88-304c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72zm0 112c-22.1 0-40-17.9-40-40 0-13.6 7.3-25.1 17.7-32.3-1 2.6-1.7 5.3-1.7 8.3 0 13.3 10.7 24 24 24s24-10.7 24-24c0-2.9-.7-5.7-1.7-8.3 10.4 7.2 17.7 18.7 17.7 32.3 0 22.1-17.9 40-40 40zm-104-40c0-39.8-32.2-72-72-72s-72 32.2-72 72 32.2 72 72 72 72-32.2 72-72zm-112 0c0-13.6 7.3-25.1 17.7-32.3-1 2.6-1.7 5.3-1.7 8.3 0 13.3 10.7 24 24 24s24-10.7 24-24c0-2.9-.7-5.7-1.7-8.3 10.4 7.2 17.7 18.7 17.7 32.3 0 22.1-17.9 40-40 40s-40-17.9-40-40zm192 128H184c-13.2 0-24 10.8-24 24s10.8 24 24 24h128c13.2 0 24-10.8 24-24s-10.8-24-24-24z"]
};
var faMinusSquare = {
  prefix: 'far',
  iconName: 'minus-square',
  icon: [448, 512, [], "f146", "M108 284c-6.6 0-12-5.4-12-12v-32c0-6.6 5.4-12 12-12h232c6.6 0 12 5.4 12 12v32c0 6.6-5.4 12-12 12H108zM448 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zm-48 346V86c0-3.3-2.7-6-6-6H54c-3.3 0-6 2.7-6 6v340c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"]
};
var faMoneyBillAlt = {
  prefix: 'far',
  iconName: 'money-bill-alt',
  icon: [640, 512, [], "f3d1", "M320 144c-53.02 0-96 50.14-96 112 0 61.85 42.98 112 96 112 53 0 96-50.13 96-112 0-61.86-42.98-112-96-112zm40 168c0 4.42-3.58 8-8 8h-64c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h16v-55.44l-.47.31a7.992 7.992 0 0 1-11.09-2.22l-8.88-13.31a7.992 7.992 0 0 1 2.22-11.09l15.33-10.22a23.99 23.99 0 0 1 13.31-4.03H328c4.42 0 8 3.58 8 8v88h16c4.42 0 8 3.58 8 8v16zM608 64H32C14.33 64 0 78.33 0 96v320c0 17.67 14.33 32 32 32h576c17.67 0 32-14.33 32-32V96c0-17.67-14.33-32-32-32zm-16 272c-35.35 0-64 28.65-64 64H112c0-35.35-28.65-64-64-64V176c35.35 0 64-28.65 64-64h416c0 35.35 28.65 64 64 64v160z"]
};
var faMoon = {
  prefix: 'far',
  iconName: 'moon',
  icon: [512, 512, [], "f186", "M279.135 512c78.756 0 150.982-35.804 198.844-94.775 28.27-34.831-2.558-85.722-46.249-77.401-82.348 15.683-158.272-47.268-158.272-130.792 0-48.424 26.06-92.292 67.434-115.836 38.745-22.05 28.999-80.788-15.022-88.919A257.936 257.936 0 0 0 279.135 0c-141.36 0-256 114.575-256 256 0 141.36 114.576 256 256 256zm0-464c12.985 0 25.689 1.201 38.016 3.478-54.76 31.163-91.693 90.042-91.693 157.554 0 113.848 103.641 199.2 215.252 177.944C402.574 433.964 344.366 464 279.135 464c-114.875 0-208-93.125-208-208s93.125-208 208-208z"]
};
var faNewspaper = {
  prefix: 'far',
  iconName: 'newspaper',
  icon: [576, 512, [], "f1ea", "M552 64H112c-20.858 0-38.643 13.377-45.248 32H24c-13.255 0-24 10.745-24 24v272c0 30.928 25.072 56 56 56h496c13.255 0 24-10.745 24-24V88c0-13.255-10.745-24-24-24zM48 392V144h16v248c0 4.411-3.589 8-8 8s-8-3.589-8-8zm480 8H111.422c.374-2.614.578-5.283.578-8V112h416v288zM172 280h136c6.627 0 12-5.373 12-12v-96c0-6.627-5.373-12-12-12H172c-6.627 0-12 5.373-12 12v96c0 6.627 5.373 12 12 12zm28-80h80v40h-80v-40zm-40 140v-24c0-6.627 5.373-12 12-12h136c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12H172c-6.627 0-12-5.373-12-12zm192 0v-24c0-6.627 5.373-12 12-12h104c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12H364c-6.627 0-12-5.373-12-12zm0-144v-24c0-6.627 5.373-12 12-12h104c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12H364c-6.627 0-12-5.373-12-12zm0 72v-24c0-6.627 5.373-12 12-12h104c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12H364c-6.627 0-12-5.373-12-12z"]
};
var faObjectGroup = {
  prefix: 'far',
  iconName: 'object-group',
  icon: [512, 512, [], "f247", "M500 128c6.627 0 12-5.373 12-12V44c0-6.627-5.373-12-12-12h-72c-6.627 0-12 5.373-12 12v12H96V44c0-6.627-5.373-12-12-12H12C5.373 32 0 37.373 0 44v72c0 6.627 5.373 12 12 12h12v256H12c-6.627 0-12 5.373-12 12v72c0 6.627 5.373 12 12 12h72c6.627 0 12-5.373 12-12v-12h320v12c0 6.627 5.373 12 12 12h72c6.627 0 12-5.373 12-12v-72c0-6.627-5.373-12-12-12h-12V128h12zm-52-64h32v32h-32V64zM32 64h32v32H32V64zm32 384H32v-32h32v32zm416 0h-32v-32h32v32zm-40-64h-12c-6.627 0-12 5.373-12 12v12H96v-12c0-6.627-5.373-12-12-12H72V128h12c6.627 0 12-5.373 12-12v-12h320v12c0 6.627 5.373 12 12 12h12v256zm-36-192h-84v-52c0-6.628-5.373-12-12-12H108c-6.627 0-12 5.372-12 12v168c0 6.628 5.373 12 12 12h84v52c0 6.628 5.373 12 12 12h200c6.627 0 12-5.372 12-12V204c0-6.628-5.373-12-12-12zm-268-24h144v112H136V168zm240 176H232v-24h76c6.627 0 12-5.372 12-12v-76h56v112z"]
};
var faObjectUngroup = {
  prefix: 'far',
  iconName: 'object-ungroup',
  icon: [576, 512, [], "f248", "M564 224c6.627 0 12-5.373 12-12v-72c0-6.627-5.373-12-12-12h-72c-6.627 0-12 5.373-12 12v12h-88v-24h12c6.627 0 12-5.373 12-12V44c0-6.627-5.373-12-12-12h-72c-6.627 0-12 5.373-12 12v12H96V44c0-6.627-5.373-12-12-12H12C5.373 32 0 37.373 0 44v72c0 6.627 5.373 12 12 12h12v160H12c-6.627 0-12 5.373-12 12v72c0 6.627 5.373 12 12 12h72c6.627 0 12-5.373 12-12v-12h88v24h-12c-6.627 0-12 5.373-12 12v72c0 6.627 5.373 12 12 12h72c6.627 0 12-5.373 12-12v-12h224v12c0 6.627 5.373 12 12 12h72c6.627 0 12-5.373 12-12v-72c0-6.627-5.373-12-12-12h-12V224h12zM352 64h32v32h-32V64zm0 256h32v32h-32v-32zM64 352H32v-32h32v32zm0-256H32V64h32v32zm32 216v-12c0-6.627-5.373-12-12-12H72V128h12c6.627 0 12-5.373 12-12v-12h224v12c0 6.627 5.373 12 12 12h12v160h-12c-6.627 0-12 5.373-12 12v12H96zm128 136h-32v-32h32v32zm280-64h-12c-6.627 0-12 5.373-12 12v12H256v-12c0-6.627-5.373-12-12-12h-12v-24h88v12c0 6.627 5.373 12 12 12h72c6.627 0 12-5.373 12-12v-72c0-6.627-5.373-12-12-12h-12v-88h88v12c0 6.627 5.373 12 12 12h12v160zm40 64h-32v-32h32v32zm0-256h-32v-32h32v32z"]
};
var faPaperPlane = {
  prefix: 'far',
  iconName: 'paper-plane',
  icon: [512, 512, [], "f1d8", "M440 6.5L24 246.4c-34.4 19.9-31.1 70.8 5.7 85.9L144 379.6V464c0 46.4 59.2 65.5 86.6 28.6l43.8-59.1 111.9 46.2c5.9 2.4 12.1 3.6 18.3 3.6 8.2 0 16.3-2.1 23.6-6.2 12.8-7.2 21.6-20 23.9-34.5l59.4-387.2c6.1-40.1-36.9-68.8-71.5-48.9zM192 464v-64.6l36.6 15.1L192 464zm212.6-28.7l-153.8-63.5L391 169.5c10.7-15.5-9.5-33.5-23.7-21.2L155.8 332.6 48 288 464 48l-59.4 387.3z"]
};
var faPauseCircle = {
  prefix: 'far',
  iconName: 'pause-circle',
  icon: [512, 512, [], "f28b", "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm96-280v160c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16zm-112 0v160c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16z"]
};
var faPlayCircle = {
  prefix: 'far',
  iconName: 'play-circle',
  icon: [512, 512, [], "f144", "M371.7 238l-176-107c-15.8-8.8-35.7 2.5-35.7 21v208c0 18.4 19.8 29.8 35.7 21l176-101c16.4-9.1 16.4-32.8 0-42zM504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256z"]
};
var faPlusSquare = {
  prefix: 'far',
  iconName: 'plus-square',
  icon: [448, 512, [], "f0fe", "M352 240v32c0 6.6-5.4 12-12 12h-88v88c0 6.6-5.4 12-12 12h-32c-6.6 0-12-5.4-12-12v-88h-88c-6.6 0-12-5.4-12-12v-32c0-6.6 5.4-12 12-12h88v-88c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v88h88c6.6 0 12 5.4 12 12zm96-160v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zm-48 346V86c0-3.3-2.7-6-6-6H54c-3.3 0-6 2.7-6 6v340c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"]
};
var faQuestionCircle = {
  prefix: 'far',
  iconName: 'question-circle',
  icon: [512, 512, [], "f059", "M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 448c-110.532 0-200-89.431-200-200 0-110.495 89.472-200 200-200 110.491 0 200 89.471 200 200 0 110.53-89.431 200-200 200zm107.244-255.2c0 67.052-72.421 68.084-72.421 92.863V300c0 6.627-5.373 12-12 12h-45.647c-6.627 0-12-5.373-12-12v-8.659c0-35.745 27.1-50.034 47.579-61.516 17.561-9.845 28.324-16.541 28.324-29.579 0-17.246-21.999-28.693-39.784-28.693-23.189 0-33.894 10.977-48.942 29.969-4.057 5.12-11.46 6.071-16.666 2.124l-27.824-21.098c-5.107-3.872-6.251-11.066-2.644-16.363C184.846 131.491 214.94 112 261.794 112c49.071 0 101.45 38.304 101.45 88.8zM298 368c0 23.159-18.841 42-42 42s-42-18.841-42-42 18.841-42 42-42 42 18.841 42 42z"]
};
var faRegistered = {
  prefix: 'far',
  iconName: 'registered',
  icon: [512, 512, [], "f25d", "M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 448c-110.532 0-200-89.451-200-200 0-110.531 89.451-200 200-200 110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200zm110.442-81.791c-53.046-96.284-50.25-91.468-53.271-96.085 24.267-13.879 39.482-41.563 39.482-73.176 0-52.503-30.247-85.252-101.498-85.252h-78.667c-6.617 0-12 5.383-12 12V380c0 6.617 5.383 12 12 12h38.568c6.617 0 12-5.383 12-12v-83.663h31.958l47.515 89.303a11.98 11.98 0 0 0 10.593 6.36h42.81c9.14 0 14.914-9.799 10.51-17.791zM256.933 239.906h-33.875v-64.14h27.377c32.417 0 38.929 12.133 38.929 31.709-.001 20.913-11.518 32.431-32.431 32.431z"]
};
var faSadCry = {
  prefix: 'far',
  iconName: 'sad-cry',
  icon: [496, 512, [], "f5b3", "M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm144 386.4V280c0-13.2-10.8-24-24-24s-24 10.8-24 24v151.4C315.5 447 282.8 456 248 456s-67.5-9-96-24.6V280c0-13.2-10.8-24-24-24s-24 10.8-24 24v114.4c-34.6-36-56-84.7-56-138.4 0-110.3 89.7-200 200-200s200 89.7 200 200c0 53.7-21.4 102.5-56 138.4zM205.8 234.5c4.4-2.4 6.9-7.4 6.1-12.4-4-25.2-34.2-42.1-59.8-42.1s-55.9 16.9-59.8 42.1c-.8 5 1.7 10 6.1 12.4 4.4 2.4 9.9 1.8 13.7-1.6l9.5-8.5c14.8-13.2 46.2-13.2 61 0l9.5 8.5c2.5 2.3 7.9 4.8 13.7 1.6zM344 180c-25.7 0-55.9 16.9-59.8 42.1-.8 5 1.7 10 6.1 12.4 4.5 2.4 9.9 1.8 13.7-1.6l9.5-8.5c14.8-13.2 46.2-13.2 61 0l9.5 8.5c2.5 2.2 8 4.7 13.7 1.6 4.4-2.4 6.9-7.4 6.1-12.4-3.9-25.2-34.1-42.1-59.8-42.1zm-96 92c-30.9 0-56 28.7-56 64s25.1 64 56 64 56-28.7 56-64-25.1-64-56-64z"]
};
var faSadTear = {
  prefix: 'far',
  iconName: 'sad-tear',
  icon: [496, 512, [], "f5b4", "M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-110.3 0-200-89.7-200-200S137.7 56 248 56s200 89.7 200 200-89.7 200-200 200zm8-152c-13.2 0-24 10.8-24 24s10.8 24 24 24c23.8 0 46.3 10.5 61.6 28.8 8.1 9.8 23.2 11.9 33.8 3.1 10.2-8.5 11.6-23.6 3.1-33.8C330 320.8 294.1 304 256 304zm-88-64c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm160-64c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm-165.6 98.8C151 290.1 126 325.4 126 342.9c0 22.7 18.8 41.1 42 41.1s42-18.4 42-41.1c0-17.5-25-52.8-36.4-68.1-2.8-3.7-8.4-3.7-11.2 0z"]
};
var faSave = {
  prefix: 'far',
  iconName: 'save',
  icon: [448, 512, [], "f0c7", "M433.941 129.941l-83.882-83.882A48 48 0 0 0 316.118 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V163.882a48 48 0 0 0-14.059-33.941zM272 80v80H144V80h128zm122 352H54a6 6 0 0 1-6-6V86a6 6 0 0 1 6-6h42v104c0 13.255 10.745 24 24 24h176c13.255 0 24-10.745 24-24V83.882l78.243 78.243a6 6 0 0 1 1.757 4.243V426a6 6 0 0 1-6 6zM224 232c-48.523 0-88 39.477-88 88s39.477 88 88 88 88-39.477 88-88-39.477-88-88-88zm0 128c-22.056 0-40-17.944-40-40s17.944-40 40-40 40 17.944 40 40-17.944 40-40 40z"]
};
var faShareSquare = {
  prefix: 'far',
  iconName: 'share-square',
  icon: [576, 512, [], "f14d", "M561.938 158.06L417.94 14.092C387.926-15.922 336 5.097 336 48.032v57.198c-42.45 1.88-84.03 6.55-120.76 17.99-35.17 10.95-63.07 27.58-82.91 49.42C108.22 199.2 96 232.6 96 271.94c0 61.697 33.178 112.455 84.87 144.76 37.546 23.508 85.248-12.651 71.02-55.74-15.515-47.119-17.156-70.923 84.11-78.76V336c0 42.993 51.968 63.913 81.94 33.94l143.998-144c18.75-18.74 18.75-49.14 0-67.88zM384 336V232.16C255.309 234.082 166.492 255.35 206.31 376 176.79 357.55 144 324.08 144 271.94c0-109.334 129.14-118.947 240-119.85V48l144 144-144 144zm24.74 84.493a82.658 82.658 0 0 0 20.974-9.303c7.976-4.952 18.286.826 18.286 10.214V464c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V112c0-26.51 21.49-48 48-48h132c6.627 0 12 5.373 12 12v4.486c0 4.917-2.987 9.369-7.569 11.152-13.702 5.331-26.396 11.537-38.05 18.585a12.138 12.138 0 0 1-6.28 1.777H54a6 6 0 0 0-6 6v340a6 6 0 0 0 6 6h340a6 6 0 0 0 6-6v-25.966c0-5.37 3.579-10.059 8.74-11.541z"]
};
var faSmile = {
  prefix: 'far',
  iconName: 'smile',
  icon: [496, 512, [], "f118", "M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-110.3 0-200-89.7-200-200S137.7 56 248 56s200 89.7 200 200-89.7 200-200 200zm-80-216c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm4 72.6c-20.8 25-51.5 39.4-84 39.4s-63.2-14.3-84-39.4c-8.5-10.2-23.7-11.5-33.8-3.1-10.2 8.5-11.5 23.6-3.1 33.8 30 36 74.1 56.6 120.9 56.6s90.9-20.6 120.9-56.6c8.5-10.2 7.1-25.3-3.1-33.8-10.1-8.4-25.3-7.1-33.8 3.1z"]
};
var faSmileBeam = {
  prefix: 'far',
  iconName: 'smile-beam',
  icon: [496, 512, [], "f5b8", "M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-110.3 0-200-89.7-200-200S137.7 56 248 56s200 89.7 200 200-89.7 200-200 200zm84-143.4c-20.8 25-51.5 39.4-84 39.4s-63.2-14.3-84-39.4c-8.5-10.2-23.6-11.5-33.8-3.1-10.2 8.5-11.5 23.6-3.1 33.8 30 36 74.1 56.6 120.9 56.6s90.9-20.6 120.9-56.6c8.5-10.2 7.1-25.3-3.1-33.8-10.2-8.4-25.3-7.1-33.8 3.1zM136.5 211c7.7-13.7 19.2-21.6 31.5-21.6s23.8 7.9 31.5 21.6l9.5 17c2.1 3.7 6.2 4.7 9.3 3.7 3.6-1.1 6-4.5 5.7-8.3-3.3-42.1-32.2-71.4-56-71.4s-52.7 29.3-56 71.4c-.3 3.7 2.1 7.2 5.7 8.3 3.4 1.1 7.4-.5 9.3-3.7l9.5-17zM328 152c-23.8 0-52.7 29.3-56 71.4-.3 3.7 2.1 7.2 5.7 8.3 3.5 1.1 7.4-.5 9.3-3.7l9.5-17c7.7-13.7 19.2-21.6 31.5-21.6s23.8 7.9 31.5 21.6l9.5 17c2.1 3.7 6.2 4.7 9.3 3.7 3.6-1.1 6-4.5 5.7-8.3-3.3-42.1-32.2-71.4-56-71.4z"]
};
var faSmileWink = {
  prefix: 'far',
  iconName: 'smile-wink',
  icon: [496, 512, [], "f4da", "M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-110.3 0-200-89.7-200-200S137.7 56 248 56s200 89.7 200 200-89.7 200-200 200zm117.8-146.4c-10.2-8.5-25.3-7.1-33.8 3.1-20.8 25-51.5 39.4-84 39.4s-63.2-14.3-84-39.4c-8.5-10.2-23.7-11.5-33.8-3.1-10.2 8.5-11.5 23.6-3.1 33.8 30 36 74.1 56.6 120.9 56.6s90.9-20.6 120.9-56.6c8.5-10.2 7.1-25.3-3.1-33.8zM168 240c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm160-60c-25.7 0-55.9 16.9-59.9 42.1-1.7 11.2 11.5 18.2 19.8 10.8l9.5-8.5c14.8-13.2 46.2-13.2 61 0l9.5 8.5c8.5 7.4 21.6.3 19.8-10.8-3.8-25.2-34-42.1-59.7-42.1z"]
};
var faSnowflake = {
  prefix: 'far',
  iconName: 'snowflake',
  icon: [448, 512, [], "f2dc", "M440.1 355.2l-39.2-23 34.1-9.3c8.4-2.3 13.4-11.1 11.1-19.6l-4.1-15.5c-2.2-8.5-10.9-13.6-19.3-11.3L343 298.2 271.2 256l71.9-42.2 79.7 21.7c8.4 2.3 17-2.8 19.3-11.3l4.1-15.5c2.2-8.5-2.7-17.3-11.1-19.6l-34.1-9.3 39.2-23c7.5-4.4 10.1-14.2 5.8-21.9l-7.9-13.9c-4.3-7.7-14-10.3-21.5-5.9l-39.2 23 9.1-34.7c2.2-8.5-2.7-17.3-11.1-19.6l-15.2-4.1c-8.4-2.3-17 2.8-19.3 11.3l-21.3 81-71.9 42.2v-84.5L306 70.4c6.1-6.2 6.1-16.4 0-22.6l-11.1-11.3c-6.1-6.2-16.1-6.2-22.2 0l-24.9 25.4V16c0-8.8-7-16-15.7-16h-15.7c-8.7 0-15.7 7.2-15.7 16v46.1l-24.9-25.4c-6.1-6.2-16.1-6.2-22.2 0L142.1 48c-6.1 6.2-6.1 16.4 0 22.6l58.3 59.3v84.5l-71.9-42.2-21.3-81c-2.2-8.5-10.9-13.6-19.3-11.3L72.7 84c-8.4 2.3-13.4 11.1-11.1 19.6l9.1 34.7-39.2-23c-7.5-4.4-17.1-1.8-21.5 5.9l-7.9 13.9c-4.3 7.7-1.8 17.4 5.8 21.9l39.2 23-34.1 9.1c-8.4 2.3-13.4 11.1-11.1 19.6L6 224.2c2.2 8.5 10.9 13.6 19.3 11.3l79.7-21.7 71.9 42.2-71.9 42.2-79.7-21.7c-8.4-2.3-17 2.8-19.3 11.3l-4.1 15.5c-2.2 8.5 2.7 17.3 11.1 19.6l34.1 9.3-39.2 23c-7.5 4.4-10.1 14.2-5.8 21.9L10 391c4.3 7.7 14 10.3 21.5 5.9l39.2-23-9.1 34.7c-2.2 8.5 2.7 17.3 11.1 19.6l15.2 4.1c8.4 2.3 17-2.8 19.3-11.3l21.3-81 71.9-42.2v84.5l-58.3 59.3c-6.1 6.2-6.1 16.4 0 22.6l11.1 11.3c6.1 6.2 16.1 6.2 22.2 0l24.9-25.4V496c0 8.8 7 16 15.7 16h15.7c8.7 0 15.7-7.2 15.7-16v-46.1l24.9 25.4c6.1 6.2 16.1 6.2 22.2 0l11.1-11.3c6.1-6.2 6.1-16.4 0-22.6l-58.3-59.3v-84.5l71.9 42.2 21.3 81c2.2 8.5 10.9 13.6 19.3 11.3L375 428c8.4-2.3 13.4-11.1 11.1-19.6l-9.1-34.7 39.2 23c7.5 4.4 17.1 1.8 21.5-5.9l7.9-13.9c4.6-7.5 2.1-17.3-5.5-21.7z"]
};
var faSquare = {
  prefix: 'far',
  iconName: 'square',
  icon: [448, 512, [], "f0c8", "M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-6 400H54c-3.3 0-6-2.7-6-6V86c0-3.3 2.7-6 6-6h340c3.3 0 6 2.7 6 6v340c0 3.3-2.7 6-6 6z"]
};
var faStar = {
  prefix: 'far',
  iconName: 'star',
  icon: [576, 512, [], "f005", "M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"]
};
var faStarHalf = {
  prefix: 'far',
  iconName: 'star-half',
  icon: [576, 512, [], "f089", "M288 385.3l-124.3 65.4 23.7-138.4-100.6-98 139-20.2 62.2-126V0c-11.4 0-22.8 5.9-28.7 17.8L194 150.2 47.9 171.4c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.1 23 46 46.4 33.7L288 439.6v-54.3z"]
};
var faStickyNote = {
  prefix: 'far',
  iconName: 'sticky-note',
  icon: [448, 512, [], "f249", "M448 348.106V80c0-26.51-21.49-48-48-48H48C21.49 32 0 53.49 0 80v351.988c0 26.51 21.49 48 48 48h268.118a48 48 0 0 0 33.941-14.059l83.882-83.882A48 48 0 0 0 448 348.106zm-128 80v-76.118h76.118L320 428.106zM400 80v223.988H296c-13.255 0-24 10.745-24 24v104H48V80h352z"]
};
var faStopCircle = {
  prefix: 'far',
  iconName: 'stop-circle',
  icon: [512, 512, [], "f28d", "M504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256zm296-80v160c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h160c8.8 0 16 7.2 16 16z"]
};
var faSun = {
  prefix: 'far',
  iconName: 'sun',
  icon: [512, 512, [], "f185", "M494.2 221.9l-59.8-40.5 13.7-71c2.6-13.2-1.6-26.8-11.1-36.4-9.6-9.5-23.2-13.7-36.2-11.1l-70.9 13.7-40.4-59.9c-15.1-22.3-51.9-22.3-67 0l-40.4 59.9-70.8-13.7C98 60.4 84.5 64.5 75 74.1c-9.5 9.6-13.7 23.1-11.1 36.3l13.7 71-59.8 40.5C6.6 229.5 0 242 0 255.5s6.7 26 17.8 33.5l59.8 40.5-13.7 71c-2.6 13.2 1.6 26.8 11.1 36.3 9.5 9.5 22.9 13.7 36.3 11.1l70.8-13.7 40.4 59.9C230 505.3 242.6 512 256 512s26-6.7 33.5-17.8l40.4-59.9 70.9 13.7c13.4 2.7 26.8-1.6 36.3-11.1 9.5-9.5 13.6-23.1 11.1-36.3l-13.7-71 59.8-40.5c11.1-7.5 17.8-20.1 17.8-33.5-.1-13.6-6.7-26.1-17.9-33.7zm-112.9 85.6l17.6 91.2-91-17.6L256 458l-51.9-77-90.9 17.6 17.6-91.2-76.8-52 76.8-52-17.6-91.2 91 17.6L256 53l51.9 76.9 91-17.6-17.6 91.1 76.8 52-76.8 52.1zM256 152c-57.3 0-104 46.7-104 104s46.7 104 104 104 104-46.7 104-104-46.7-104-104-104zm0 160c-30.9 0-56-25.1-56-56s25.1-56 56-56 56 25.1 56 56-25.1 56-56 56z"]
};
var faSurprise = {
  prefix: 'far',
  iconName: 'surprise',
  icon: [496, 512, [], "f5c2", "M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-110.3 0-200-89.7-200-200S137.7 56 248 56s200 89.7 200 200-89.7 200-200 200zm0-176c-35.3 0-64 28.7-64 64s28.7 64 64 64 64-28.7 64-64-28.7-64-64-64zm-48-72c0-17.7-14.3-32-32-32s-32 14.3-32 32 14.3 32 32 32 32-14.3 32-32zm128-32c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32z"]
};
var faThumbsDown = {
  prefix: 'far',
  iconName: 'thumbs-down',
  icon: [512, 512, [], "f165", "M466.27 225.31c4.674-22.647.864-44.538-8.99-62.99 2.958-23.868-4.021-48.565-17.34-66.99C438.986 39.423 404.117 0 327 0c-7 0-15 .01-22.22.01C201.195.01 168.997 40 128 40h-10.845c-5.64-4.975-13.042-8-21.155-8H32C14.327 32 0 46.327 0 64v240c0 17.673 14.327 32 32 32h64c11.842 0 22.175-6.438 27.708-16h7.052c19.146 16.953 46.013 60.653 68.76 83.4 13.667 13.667 10.153 108.6 71.76 108.6 57.58 0 95.27-31.936 95.27-104.73 0-18.41-3.93-33.73-8.85-46.54h36.48c48.602 0 85.82-41.565 85.82-85.58 0-19.15-4.96-34.99-13.73-49.84zM64 296c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24zm330.18 16.73H290.19c0 37.82 28.36 55.37 28.36 94.54 0 23.75 0 56.73-47.27 56.73-18.91-18.91-9.46-66.18-37.82-94.54C206.9 342.89 167.28 272 138.92 272H128V85.83c53.611 0 100.001-37.82 171.64-37.82h37.82c35.512 0 60.82 17.12 53.12 65.9 15.2 8.16 26.5 36.44 13.94 57.57 21.581 20.384 18.699 51.065 5.21 65.62 9.45 0 22.36 18.91 22.27 37.81-.09 18.91-16.71 37.82-37.82 37.82z"]
};
var faThumbsUp = {
  prefix: 'far',
  iconName: 'thumbs-up',
  icon: [512, 512, [], "f164", "M466.27 286.69C475.04 271.84 480 256 480 236.85c0-44.015-37.218-85.58-85.82-85.58H357.7c4.92-12.81 8.85-28.13 8.85-46.54C366.55 31.936 328.86 0 271.28 0c-61.607 0-58.093 94.933-71.76 108.6-22.747 22.747-49.615 66.447-68.76 83.4H32c-17.673 0-32 14.327-32 32v240c0 17.673 14.327 32 32 32h64c14.893 0 27.408-10.174 30.978-23.95 44.509 1.001 75.06 39.94 177.802 39.94 7.22 0 15.22.01 22.22.01 77.117 0 111.986-39.423 112.94-95.33 13.319-18.425 20.299-43.122 17.34-66.99 9.854-18.452 13.664-40.343 8.99-62.99zm-61.75 53.83c12.56 21.13 1.26 49.41-13.94 57.57 7.7 48.78-17.608 65.9-53.12 65.9h-37.82c-71.639 0-118.029-37.82-171.64-37.82V240h10.92c28.36 0 67.98-70.89 94.54-97.46 28.36-28.36 18.91-75.63 37.82-94.54 47.27 0 47.27 32.98 47.27 56.73 0 39.17-28.36 56.72-28.36 94.54h103.99c21.11 0 37.73 18.91 37.82 37.82.09 18.9-12.82 37.81-22.27 37.81 13.489 14.555 16.371 45.236-5.21 65.62zM88 432c0 13.255-10.745 24-24 24s-24-10.745-24-24 10.745-24 24-24 24 10.745 24 24z"]
};
var faTimesCircle = {
  prefix: 'far',
  iconName: 'times-circle',
  icon: [512, 512, [], "f057", "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm101.8-262.2L295.6 256l62.2 62.2c4.7 4.7 4.7 12.3 0 17l-22.6 22.6c-4.7 4.7-12.3 4.7-17 0L256 295.6l-62.2 62.2c-4.7 4.7-12.3 4.7-17 0l-22.6-22.6c-4.7-4.7-4.7-12.3 0-17l62.2-62.2-62.2-62.2c-4.7-4.7-4.7-12.3 0-17l22.6-22.6c4.7-4.7 12.3-4.7 17 0l62.2 62.2 62.2-62.2c4.7-4.7 12.3-4.7 17 0l22.6 22.6c4.7 4.7 4.7 12.3 0 17z"]
};
var faTired = {
  prefix: 'far',
  iconName: 'tired',
  icon: [496, 512, [], "f5c8", "M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-110.3 0-200-89.7-200-200S137.7 56 248 56s200 89.7 200 200-89.7 200-200 200zm129.1-303.8c-3.8-4.4-10.3-5.4-15.3-2.5l-80 48c-3.6 2.2-5.8 6.1-5.8 10.3s2.2 8.1 5.8 10.3l80 48c5.4 3.2 11.8 1.6 15.3-2.5 3.8-4.5 3.9-11 .1-15.5L343.6 208l33.6-40.3c3.8-4.5 3.7-11.1-.1-15.5zM220 208c0-4.2-2.2-8.1-5.8-10.3l-80-48c-5-3-11.5-1.9-15.3 2.5-3.8 4.5-3.9 11-.1 15.5l33.6 40.3-33.6 40.3c-3.8 4.5-3.7 11 .1 15.5 3.5 4.1 9.9 5.7 15.3 2.5l80-48c3.6-2.2 5.8-6.1 5.8-10.3zm28 64c-45.4 0-100.9 38.3-107.8 93.3-1.5 11.8 6.9 21.6 15.5 17.9C178.4 373.5 212 368 248 368s69.6 5.5 92.3 15.2c8.5 3.7 17-6 15.5-17.9-6.9-55-62.4-93.3-107.8-93.3z"]
};
var faTrashAlt = {
  prefix: 'far',
  iconName: 'trash-alt',
  icon: [448, 512, [], "f2ed", "M268 416h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12zM432 80h-82.41l-34-56.7A48 48 0 0 0 274.41 0H173.59a48 48 0 0 0-41.16 23.3L98.41 80H16A16 16 0 0 0 0 96v16a16 16 0 0 0 16 16h16v336a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128h16a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16zM171.84 50.91A6 6 0 0 1 177 48h94a6 6 0 0 1 5.15 2.91L293.61 80H154.39zM368 464H80V128h288zm-212-48h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12z"]
};
var faUser = {
  prefix: 'far',
  iconName: 'user',
  icon: [448, 512, [], "f007", "M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"]
};
var faUserCircle = {
  prefix: 'far',
  iconName: 'user-circle',
  icon: [496, 512, [], "f2bd", "M248 104c-53 0-96 43-96 96s43 96 96 96 96-43 96-96-43-96-96-96zm0 144c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm0-240C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-49.7 0-95.1-18.3-130.1-48.4 14.9-23 40.4-38.6 69.6-39.5 20.8 6.4 40.6 9.6 60.5 9.6s39.7-3.1 60.5-9.6c29.2 1 54.7 16.5 69.6 39.5-35 30.1-80.4 48.4-130.1 48.4zm162.7-84.1c-24.4-31.4-62.1-51.9-105.1-51.9-10.2 0-26 9.6-57.6 9.6-31.5 0-47.4-9.6-57.6-9.6-42.9 0-80.6 20.5-105.1 51.9C61.9 339.2 48 299.2 48 256c0-110.3 89.7-200 200-200s200 89.7 200 200c0 43.2-13.9 83.2-37.3 115.9z"]
};
var faWindowClose = {
  prefix: 'far',
  iconName: 'window-close',
  icon: [512, 512, [], "f410", "M464 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm0 394c0 3.3-2.7 6-6 6H54c-3.3 0-6-2.7-6-6V86c0-3.3 2.7-6 6-6h404c3.3 0 6 2.7 6 6v340zM356.5 194.6L295.1 256l61.4 61.4c4.6 4.6 4.6 12.1 0 16.8l-22.3 22.3c-4.6 4.6-12.1 4.6-16.8 0L256 295.1l-61.4 61.4c-4.6 4.6-12.1 4.6-16.8 0l-22.3-22.3c-4.6-4.6-4.6-12.1 0-16.8l61.4-61.4-61.4-61.4c-4.6-4.6-4.6-12.1 0-16.8l22.3-22.3c4.6-4.6 12.1-4.6 16.8 0l61.4 61.4 61.4-61.4c4.6-4.6 12.1-4.6 16.8 0l22.3 22.3c4.7 4.6 4.7 12.1 0 16.8z"]
};
var faWindowMaximize = {
  prefix: 'far',
  iconName: 'window-maximize',
  icon: [512, 512, [], "f2d0", "M464 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm0 394c0 3.3-2.7 6-6 6H54c-3.3 0-6-2.7-6-6V192h416v234z"]
};
var faWindowMinimize = {
  prefix: 'far',
  iconName: 'window-minimize',
  icon: [512, 512, [], "f2d1", "M480 480H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h448c17.7 0 32 14.3 32 32s-14.3 32-32 32z"]
};
var faWindowRestore = {
  prefix: 'far',
  iconName: 'window-restore',
  icon: [512, 512, [], "f2d2", "M464 0H144c-26.5 0-48 21.5-48 48v48H48c-26.5 0-48 21.5-48 48v320c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48v-48h48c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zm-96 464H48V256h320v208zm96-96h-48V144c0-26.5-21.5-48-48-48H144V48h320v320z"]
};
var _iconsCache = {
  faAddressBook: faAddressBook,
  faAddressCard: faAddressCard,
  faAngry: faAngry,
  faArrowAltCircleDown: faArrowAltCircleDown,
  faArrowAltCircleLeft: faArrowAltCircleLeft,
  faArrowAltCircleRight: faArrowAltCircleRight,
  faArrowAltCircleUp: faArrowAltCircleUp,
  faBell: faBell,
  faBellSlash: faBellSlash,
  faBookmark: faBookmark,
  faBuilding: faBuilding,
  faCalendar: faCalendar,
  faCalendarAlt: faCalendarAlt,
  faCalendarCheck: faCalendarCheck,
  faCalendarMinus: faCalendarMinus,
  faCalendarPlus: faCalendarPlus,
  faCalendarTimes: faCalendarTimes,
  faCaretSquareDown: faCaretSquareDown,
  faCaretSquareLeft: faCaretSquareLeft,
  faCaretSquareRight: faCaretSquareRight,
  faCaretSquareUp: faCaretSquareUp,
  faChartBar: faChartBar,
  faCheckCircle: faCheckCircle,
  faCheckSquare: faCheckSquare,
  faCircle: faCircle,
  faClipboard: faClipboard,
  faClock: faClock,
  faClone: faClone,
  faClosedCaptioning: faClosedCaptioning,
  faComment: faComment,
  faCommentAlt: faCommentAlt,
  faCommentDots: faCommentDots,
  faComments: faComments,
  faCompass: faCompass,
  faCopy: faCopy,
  faCopyright: faCopyright,
  faCreditCard: faCreditCard,
  faDizzy: faDizzy,
  faDotCircle: faDotCircle,
  faEdit: faEdit,
  faEnvelope: faEnvelope,
  faEnvelopeOpen: faEnvelopeOpen,
  faEye: faEye,
  faEyeSlash: faEyeSlash,
  faFile: faFile,
  faFileAlt: faFileAlt,
  faFileArchive: faFileArchive,
  faFileAudio: faFileAudio,
  faFileCode: faFileCode,
  faFileExcel: faFileExcel,
  faFileImage: faFileImage,
  faFilePdf: faFilePdf,
  faFilePowerpoint: faFilePowerpoint,
  faFileVideo: faFileVideo,
  faFileWord: faFileWord,
  faFlag: faFlag,
  faFlushed: faFlushed,
  faFolder: faFolder,
  faFolderOpen: faFolderOpen,
  faFontAwesomeLogoFull: faFontAwesomeLogoFull,
  faFrown: faFrown,
  faFrownOpen: faFrownOpen,
  faFutbol: faFutbol,
  faGem: faGem,
  faGrimace: faGrimace,
  faGrin: faGrin,
  faGrinAlt: faGrinAlt,
  faGrinBeam: faGrinBeam,
  faGrinBeamSweat: faGrinBeamSweat,
  faGrinHearts: faGrinHearts,
  faGrinSquint: faGrinSquint,
  faGrinSquintTears: faGrinSquintTears,
  faGrinStars: faGrinStars,
  faGrinTears: faGrinTears,
  faGrinTongue: faGrinTongue,
  faGrinTongueSquint: faGrinTongueSquint,
  faGrinTongueWink: faGrinTongueWink,
  faGrinWink: faGrinWink,
  faHandLizard: faHandLizard,
  faHandPaper: faHandPaper,
  faHandPeace: faHandPeace,
  faHandPointDown: faHandPointDown,
  faHandPointLeft: faHandPointLeft,
  faHandPointRight: faHandPointRight,
  faHandPointUp: faHandPointUp,
  faHandPointer: faHandPointer,
  faHandRock: faHandRock,
  faHandScissors: faHandScissors,
  faHandSpock: faHandSpock,
  faHandshake: faHandshake,
  faHdd: faHdd,
  faHeart: faHeart,
  faHospital: faHospital,
  faHourglass: faHourglass,
  faIdBadge: faIdBadge,
  faIdCard: faIdCard,
  faImage: faImage,
  faImages: faImages,
  faKeyboard: faKeyboard,
  faKiss: faKiss,
  faKissBeam: faKissBeam,
  faKissWinkHeart: faKissWinkHeart,
  faLaugh: faLaugh,
  faLaughBeam: faLaughBeam,
  faLaughSquint: faLaughSquint,
  faLaughWink: faLaughWink,
  faLemon: faLemon,
  faLifeRing: faLifeRing,
  faLightbulb: faLightbulb,
  faListAlt: faListAlt,
  faMap: faMap,
  faMeh: faMeh,
  faMehBlank: faMehBlank,
  faMehRollingEyes: faMehRollingEyes,
  faMinusSquare: faMinusSquare,
  faMoneyBillAlt: faMoneyBillAlt,
  faMoon: faMoon,
  faNewspaper: faNewspaper,
  faObjectGroup: faObjectGroup,
  faObjectUngroup: faObjectUngroup,
  faPaperPlane: faPaperPlane,
  faPauseCircle: faPauseCircle,
  faPlayCircle: faPlayCircle,
  faPlusSquare: faPlusSquare,
  faQuestionCircle: faQuestionCircle,
  faRegistered: faRegistered,
  faSadCry: faSadCry,
  faSadTear: faSadTear,
  faSave: faSave,
  faShareSquare: faShareSquare,
  faSmile: faSmile,
  faSmileBeam: faSmileBeam,
  faSmileWink: faSmileWink,
  faSnowflake: faSnowflake,
  faSquare: faSquare,
  faStar: faStar,
  faStarHalf: faStarHalf,
  faStickyNote: faStickyNote,
  faStopCircle: faStopCircle,
  faSun: faSun,
  faSurprise: faSurprise,
  faThumbsDown: faThumbsDown,
  faThumbsUp: faThumbsUp,
  faTimesCircle: faTimesCircle,
  faTired: faTired,
  faTrashAlt: faTrashAlt,
  faUser: faUser,
  faUserCircle: faUserCircle,
  faWindowClose: faWindowClose,
  faWindowMaximize: faWindowMaximize,
  faWindowMinimize: faWindowMinimize,
  faWindowRestore: faWindowRestore
};




/***/ }),

/***/ "ubSd":
/*!*********************************************************************!*\
  !*** ./src/app/ui-components/features/message/message.component.ts ***!
  \*********************************************************************/
/*! exports provided: MuMessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MuMessageComponent", function() { return MuMessageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_message_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./message.component.html */ "sToD");
/* harmony import */ var _message_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./message.component.scss */ "AWTm");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let MuMessageComponent = class MuMessageComponent {
    constructor() { }
    ngOnInit() { }
};
MuMessageComponent.ctorParameters = () => [];
MuMessageComponent.propDecorators = {
    message: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    admission: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    node: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
MuMessageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'mu-message',
        template: _raw_loader_message_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_message_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MuMessageComponent);



/***/ }),

/***/ "vYk/":
/*!*********************************************!*\
  !*** ./src/app/models/student-admission.ts ***!
  \*********************************************/
/*! exports provided: AcademicPeriod, ProgramChoice, RegistrationStatus, RegistrationType, ProgramType, ContextColor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcademicPeriod", function() { return AcademicPeriod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramChoice", function() { return ProgramChoice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationStatus", function() { return RegistrationStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationType", function() { return RegistrationType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramType", function() { return ProgramType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContextColor", function() { return ContextColor; });
var AcademicPeriod;
(function (AcademicPeriod) {
    AcademicPeriod["SEPTEMBER"] = "001";
    AcademicPeriod["FEBRUARY"] = "004";
})(AcademicPeriod || (AcademicPeriod = {}));
var ProgramChoice;
(function (ProgramChoice) {
    ProgramChoice["MAIN"] = "01";
})(ProgramChoice || (ProgramChoice = {}));
var RegistrationStatus;
(function (RegistrationStatus) {
    RegistrationStatus["APPROVED"] = "1";
    RegistrationStatus["CREATED"] = "2";
    RegistrationStatus["CANCELLED"] = "5";
})(RegistrationStatus || (RegistrationStatus = {}));
var RegistrationType;
(function (RegistrationType) {
    RegistrationType["REGULAR"] = "01";
    RegistrationType["NON_REGULAR"] = "02";
})(RegistrationType || (RegistrationType = {}));
var ProgramType;
(function (ProgramType) {
    ProgramType["ADMISSION"] = "ADMISSTION";
})(ProgramType || (ProgramType = {}));
var ContextColor;
(function (ContextColor) {
    ContextColor["SUCCESS"] = "0";
    ContextColor["DANGER"] = "1";
    ContextColor["WARNING"] = "2";
    ContextColor["INFO"] = "3";
    ContextColor["VOID"] = "";
})(ContextColor || (ContextColor = {}));


/***/ }),

/***/ "waww":
/*!*************************************************************************************!*\
  !*** ./src/app/ui-components/features/message-center/message-center.component.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: auto minmax(0, 1fr) auto;\n}\n\nheader .header-section {\n  display: grid;\n  grid-template-columns: 1fr auto;\n  align-items: center;\n  padding: 1rem 3rem;\n  gap: 1rem;\n}\n\nheader .header-section.message-active {\n  grid-template-columns: auto 1fr auto;\n}\n\nheader .header-section.alt-section {\n  grid-template-columns: auto auto 1fr;\n  border-width: var(--mu-border-width) 0;\n  border-style: solid;\n}\n\nheader .header-section .close-btn {\n  --padding-alt: 0.85rem;\n  padding-inline-start: var(--padding-alt);\n  padding-inline-end: var(--padding-alt);\n}\n\nion-select {\n  background-color: var(--ion-color-secondary);\n  border-color: var(--mu-color-border);\n  border-width: var(--mu-border-width);\n  border-style: solid;\n  border-radius: var(--mu-border-radius);\n}\n\nmain {\n  overflow: auto;\n}\n\nmain ul li {\n  padding: 0 3rem;\n}\n\n.message-body {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n\n.message-body-header {\n  padding: 2rem 3rem 1rem;\n  color: var(--ion-color-primary);\n  cursor: pointer;\n  border-top-width: var(--mu-border-width);\n  border-style: solid;\n}\n\n.message-body-header h4, .message-body-header h5 {\n  font-weight: 400;\n  color: var(--ion-color-primary);\n  font-size: 1.5em;\n  line-height: 1.25;\n}\n\n.message-body-header h5 {\n  font-size: 1em;\n  color: var(--ion-color-medium);\n}\n\n.message-body-content {\n  padding: 0 3rem;\n  flex-grow: 1;\n}\n\n.message-body-footer {\n  padding: 2rem 3rem;\n  display: grid;\n  grid-template-columns: auto 1fr;\n  gap: 2rem;\n  align-items: center;\n  position: relative;\n}\n\n.message-body-footer mu-dots {\n  width: calc(100% + 1.5rem);\n}\n\nheader.native {\n  color: white;\n  display: flex;\n  justify-content: space-between;\n}\n\nheader.native .header-section {\n  padding: 0 3rem;\n}\n\nheader.native .header-section.alt-section {\n  grid-template-columns: auto 1fr;\n  border-style: none;\n  padding: 0.5rem 3rem;\n}\n\nheader.native .header-section.alt-section ion-select {\n  color: var(--ion-color-primary);\n}\n\nmain.native {\n  padding: 1rem 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcbWVzc2FnZS1jZW50ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsMEJBQUE7RUFDQSw0Q0FBQTtBQUNKOztBQUdJO0VBQ0ksYUFBQTtFQUNBLCtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUFBUjs7QUFDUTtFQUNJLG9DQUFBO0FBQ1o7O0FBQ1E7RUFDSSxvQ0FBQTtFQUNBLHNDQUFBO0VBQ0EsbUJBQUE7QUFDWjs7QUFDUTtFQUNJLHNCQUFBO0VBQ0Esd0NBQUE7RUFDQSxzQ0FBQTtBQUNaOztBQUlBO0VBQ0ksNENBQUE7RUFDQSxvQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQ0FBQTtBQURKOztBQUdBO0VBQ0ksY0FBQTtBQUFKOztBQUVRO0VBQ0ksZUFBQTtBQUFaOztBQUlBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQURKOztBQUVJO0VBQ0ksdUJBQUE7RUFDQSwrQkFBQTtFQUNBLGVBQUE7RUFDQSx3Q0FBQTtFQUNBLG1CQUFBO0FBQVI7O0FBQ1E7RUFDSSxnQkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUNaOztBQUNRO0VBQ0ksY0FBQTtFQUNBLDhCQUFBO0FBQ1o7O0FBRUk7RUFDSSxlQUFBO0VBQ0EsWUFBQTtBQUFSOztBQUVJO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsK0JBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUFSOztBQUNRO0VBQ0ksMEJBQUE7QUFDWjs7QUFHQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7QUFBSjs7QUFDSTtFQUNJLGVBQUE7QUFDUjs7QUFBUTtFQUNJLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQUVaOztBQURZO0VBQ0ksK0JBQUE7QUFHaEI7O0FBRUE7RUFDSSxlQUFBO0FBQ0oiLCJmaWxlIjoibWVzc2FnZS1jZW50ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgZGlzcGxheTogIGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIG1pbm1heCgwLCAxZnIpIGF1dG87XG59XG5cbmhlYWRlciB7XG4gICAgLmhlYWRlci1zZWN0aW9uIHtcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgYXV0bztcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZzogMXJlbSAzcmVtO1xuICAgICAgICBnYXA6IDFyZW07XG4gICAgICAgICYubWVzc2FnZS1hY3RpdmUge1xuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmciBhdXRvO1xuICAgICAgICB9XG4gICAgICAgICYuYWx0LXNlY3Rpb24ge1xuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG8gMWZyO1xuICAgICAgICAgICAgYm9yZGVyLXdpZHRoOiB2YXIoLS1tdS1ib3JkZXItd2lkdGgpIDA7XG4gICAgICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgICAgICB9XG4gICAgICAgIC5jbG9zZS1idG4geyAgICBcbiAgICAgICAgICAgIC0tcGFkZGluZy1hbHQ6IDAuODVyZW07XG4gICAgICAgICAgICBwYWRkaW5nLWlubGluZS1zdGFydDogdmFyKC0tcGFkZGluZy1hbHQpO1xuICAgICAgICAgICAgcGFkZGluZy1pbmxpbmUtZW5kOiB2YXIoLS1wYWRkaW5nLWFsdCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmlvbi1zZWxlY3Qge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tbXUtY29sb3ItYm9yZGVyKTtcbiAgICBib3JkZXItd2lkdGg6IHZhcigtLW11LWJvcmRlci13aWR0aCk7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1tdS1ib3JkZXItcmFkaXVzKTtcbn1cbm1haW4ge1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIHVsIHtcbiAgICAgICAgbGkge1xuICAgICAgICAgICAgcGFkZGluZzogMCAzcmVtO1xuICAgICAgICB9XG4gICAgfVxufVxuLm1lc3NhZ2UtYm9keSB7ICAgIFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgJi1oZWFkZXIgeyAgICBcbiAgICAgICAgcGFkZGluZzogMnJlbSAzcmVtIDFyZW07XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgYm9yZGVyLXRvcC13aWR0aDogdmFyKC0tbXUtYm9yZGVyLXdpZHRoKTtcbiAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICAgICAgaDQsIGg1IHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI1O1xuICAgICAgICB9XG4gICAgICAgIGg1IHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgICAgICB9XG4gICAgfVxuICAgICYtY29udGVudCB7XG4gICAgICAgIHBhZGRpbmc6IDAgM3JlbTtcbiAgICAgICAgZmxleC1ncm93OiAxO1xuICAgIH1cbiAgICAmLWZvb3RlciB7XG4gICAgICAgIHBhZGRpbmc6IDJyZW0gM3JlbTtcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmcjtcbiAgICAgICAgZ2FwOiAycmVtO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIG11LWRvdHMge1xuICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSArIDEuNXJlbSk7ICAgICAgICBcbiAgICAgICAgfVxuICAgIH1cbn1cbmhlYWRlci5uYXRpdmUge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAuaGVhZGVyLXNlY3Rpb24ge1xuICAgICAgICBwYWRkaW5nOiAwIDNyZW07XG4gICAgICAgICYuYWx0LXNlY3Rpb24ge1xuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmcjtcbiAgICAgICAgICAgIGJvcmRlci1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAuNXJlbSAzcmVtOyBcbiAgICAgICAgICAgIGlvbi1zZWxlY3Qge1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbm1haW4ubmF0aXZlIHtcbiAgICBwYWRkaW5nOiAxcmVtIDA7XG59Il19 */");

/***/ }),

/***/ "xW66":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ui-components/features/file-upload/file-upload.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<input\n  class=\"mu-hidden-input\"\n  #fileInput\n  multiple\n  type=\"file\"\n  [accept]=\"allowedFileExtensions\"\n  aria-hidden\n  (change)=\"handleSelectFile()\"\n/>\n<div class=\"mu-file-input-container\">\n  <div class=\"fake-input-field mu-flex align-center justify-end mu-p3\">\n    <ion-text class=\"filename\" *ngIf=\"fileContents\">\n      {{ fileContents.originalName?fileContents.originalName:fileContents.name }}\n    </ion-text>\n  </div>\n  <div class=\"controls\" *ngIf=\"!fileContents\">\n    <mu-button\n      (click)=\"openFileSelectDialogue()\"\n      label=\"{{ (isDispatching? 'file-upload.uploading': 'file-upload.upload-file') | translate }}\"\n      class=\"no-border-radius-left\"\n      [animated]=\"isDispatching\"\n      [icon]=\"isDispatching?spinnerIcon:uploadIcon\"\n      [disabled]=\"isDispatching\"\n    >\n      Upload file\n    </mu-button>\n  </div>\n  <div class=\"controls\" *ngIf=\"fileContents\">\n    <mu-button\n      (click)=\"viewUpload()\"\n      label=\"{{ (isDownloading? 'file-upload.downloading': 'file-upload.view') | translate }}\"\n      class=\"no-border-radius\"\n      [animated]=\"isDownloading\"\n      [icon]=\"isDownloading?spinnerIcon:viewIcon\"\n    >\n      {{ (isDownloading? 'file-upload.downloading': 'file-upload.view') | translate }}\n    </mu-button>\n    <!--\n    <div class=\"button-divider\" aria-hidden></div>\n    <mu-button\n      (click)=\"removeSelectedFile()\"\n      label=\"Delete\"\n      class=\"no-border-radius-left\"\n      [icon]=\"trashIcon\"\n      [disabled]=\"disabled\"\n    >\n      Delete\n    </mu-button>\n    -->\n  </div>\n  <div *ngIf=\"(hasValidationError && validationErrors.length) || hasUploadedSuccesfully\" class=\"message-area\">\n    <ion-text *ngFor=\"let error of validationErrors\" color=\"danger\"><div class=\"mu-p2\" [innerHTML]=\"error\"></div></ion-text>\n    <ion-text *ngIf=\"hasUploadedSuccesfully\" color=\"success\"><div class=\"mu-p2\">{{ 'file-upload.success' | translate}}</div></ion-text>\n  </div>\n</div>\n");

/***/ }),

/***/ "y9j2":
/*!***********************************************************************************!*\
  !*** ./src/app/ui-components/features/message-center/message-center.component.ts ***!
  \***********************************************************************************/
/*! exports provided: MuMessageCenterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MuMessageCenterComponent", function() { return MuMessageCenterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_message_center_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./message-center.component.html */ "LsEg");
/* harmony import */ var _message_center_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./message-center.component.scss */ "waww");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngxs/store */ "AcyG");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_interfaces_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/interfaces/component */ "E7Uh");
/* harmony import */ var src_app_store_actions_message_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/store/actions/message.actions */ "eFHV");
/* harmony import */ var src_app_store_state_message_state__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/store/state/message.state */ "Vnf1");
/* harmony import */ var src_app_store_state_student_admissions_state__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/store/state/student-admissions.state */ "qlWn");
/* harmony import */ var src_app_store_actions_content_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/store/actions/content.actions */ "chTE");
/* harmony import */ var src_app_services_platform_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/services/platform.service */ "EktT");













let MuMessageCenterComponent = class MuMessageCenterComponent extends src_app_interfaces_component__WEBPACK_IMPORTED_MODULE_7__["ApiClass"] {
    constructor(store, platform) {
        super(src_app_interfaces_component__WEBPACK_IMPORTED_MODULE_7__["ApiStatusStreamType"].MESSAGES);
        this.store = store;
        this.platform = platform;
        this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.renderWebview = this.platform.isWeb();
        this.selectOptions = [];
        // Displays the current unread messages
        this.unreadMessagesCount = 0;
        this._filter = "all";
    }
    get messages() {
        return this._filteredMessages;
    }
    set messages(value) {
        this._messages = value;
        this.filterMessages();
    }
    get filter() {
        return this._filter;
    }
    set filter(value) {
        this._filter = value;
        this.filterMessages();
    }
    /**
     * Filters the messages according to the currently set filter
     */
    filterMessages() {
        var _a;
        this._filteredMessages = (_a = this._messages) === null || _a === void 0 ? void 0 : _a.filter(message => (message.admission_id === this.filter || this.filter === "all"));
    }
    /**
     * Clears the current set filter
     */
    clearFilter() {
        this._filter = undefined;
    }
    clearActiveMessage() {
        this.activeMessage = undefined;
    }
    activateMessage(message) {
        this.store.dispatch(new src_app_store_actions_message_actions__WEBPACK_IMPORTED_MODULE_8__["SwitchMessage"](message.id));
    }
    listenToStudentAdmissionsChanges() {
        this.studentAdmissionsStream
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.ngUnsubscribe), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])((studentAdmissions) => {
            this.selectOptions = studentAdmissions.map(({ educationProgramName: label, educationProgramID: id, guid, admissionStatusText, admissionLock, contextColor, educationProgramYear, educationProgramAcademicPeriod }) => ({ label, id, guid, status: admissionStatusText, locked: admissionLock, contextColor, educationProgramYear, educationProgramAcademicPeriod }));
        }))
            .subscribe();
    }
    listenToSelectedMessageStream() {
        this.selectedMessageStream
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.ngUnsubscribe), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])((message) => {
            this.activeMessage = message;
        })).subscribe();
    }
    listenToMessagesStream() {
        this.messageStream
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.ngUnsubscribe), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])((messages) => {
            this.messages = messages;
            this.unreadMessagesCount = messages === null || messages === void 0 ? void 0 : messages.filter((obj) => obj.read === false).length;
        })).subscribe();
    }
    ngOnInit() {
        this.store.dispatch(new src_app_store_actions_message_actions__WEBPACK_IMPORTED_MODULE_8__["GetMessages"]());
        this.listenToStudentAdmissionsChanges();
        this.listenToSelectedMessageStream();
        this.listenToMessagesStream();
    }
    /**
     * Returns to the message center overview
     */
    back() {
        this.store.dispatch(new src_app_store_actions_message_actions__WEBPACK_IMPORTED_MODULE_8__["SwitchMessage"](null));
        this.activeMessage = null;
    }
    /**
     * Closes the message center
     */
    close() {
        this.store.dispatch(new src_app_store_actions_message_actions__WEBPACK_IMPORTED_MODULE_8__["ToggleMessagesIsActive"]());
    }
    /**
     * Go to the currently set active message's node_id / task
     */
    toTask() {
        // CHANGE TO RELEVANT ADMISSION
        const admission = this.getAdmissionById(this.activeMessage.admission_id);
        const audit = this.activeMessage.node_id;
        if (admission && audit) {
            this.store.dispatch(new src_app_store_actions_content_actions__WEBPACK_IMPORTED_MODULE_11__["LocationChangeRequest"]({ admission, audit }));
        }
        this.store.dispatch(new src_app_store_actions_message_actions__WEBPACK_IMPORTED_MODULE_8__["ToggleMessagesIsActive"]());
    }
    /**
     * Gets the admission name by id
     *
     * @param admission_id Admission Id to find the correct option with
     * @returns The admission name
     */
    getAdmissionNameById(admission_id) {
        var _a, _b;
        return (_b = (_a = this.selectOptions) === null || _a === void 0 ? void 0 : _a.find(option => option.guid === admission_id)) === null || _b === void 0 ? void 0 : _b.label;
    }
    /**
     * Gets the admission in full by id
     *
     * @param admission_id Admission Id to find the correct option with
     * @returns The admission
     */
    getAdmissionById(admission_id) {
        var _a;
        return (_a = this.selectOptions) === null || _a === void 0 ? void 0 : _a.find(option => option.guid === admission_id);
    }
    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.unsubscribe();
    }
};
MuMessageCenterComponent.ctorParameters = () => [
    { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Store"] },
    { type: src_app_services_platform_service__WEBPACK_IMPORTED_MODULE_12__["PlatformService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Select"])(src_app_store_state_student_admissions_state__WEBPACK_IMPORTED_MODULE_10__["StudentAdmissionsState"].studentAdmissions)
], MuMessageCenterComponent.prototype, "studentAdmissionsStream", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Select"])(src_app_store_state_message_state__WEBPACK_IMPORTED_MODULE_9__["MessageState"].messages)
], MuMessageCenterComponent.prototype, "messageStream", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Select"])(src_app_store_state_message_state__WEBPACK_IMPORTED_MODULE_9__["MessageState"].selectedMessage)
], MuMessageCenterComponent.prototype, "selectedMessageStream", void 0);
MuMessageCenterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'mu-message-center',
        template: _raw_loader_message_center_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_message_center_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MuMessageCenterComponent);



/***/ })

}]);
//# sourceMappingURL=modules-home-home-page-module.js.map