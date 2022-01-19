(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Projects\front-end\src\main.ts */"zUnb");


/***/ }),

/***/ "10JN":
/*!*********************************************************!*\
  !*** ./src/app/store/actions/student-audits.actions.ts ***!
  \*********************************************************/
/*! exports provided: GetStudentAudits, SetSelectedStudentAuditId, SetShowAuditContent, SwitchAuditView, HandleAuditsResponse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetStudentAudits", function() { return GetStudentAudits; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetSelectedStudentAuditId", function() { return SetSelectedStudentAuditId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetShowAuditContent", function() { return SetShowAuditContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwitchAuditView", function() { return SwitchAuditView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HandleAuditsResponse", function() { return HandleAuditsResponse; });
class GetStudentAudits {
    constructor() { }
}
GetStudentAudits.type = '[Student Audit Groups component] GetStudentAudits';
class SetSelectedStudentAuditId {
    constructor(id) {
        this.id = id;
    }
}
SetSelectedStudentAuditId.type = '[Student Audits state] SetSelectedStudentAudit';
class SetShowAuditContent {
    constructor(show) {
        this.show = show;
    }
}
SetShowAuditContent.type = '[Student Audits state] SetShowAuditContent';
class SwitchAuditView {
    constructor(taskEnrichments) {
        this.taskEnrichments = taskEnrichments;
    }
}
SwitchAuditView.type = '[Content state] SwitchAuditView';
class HandleAuditsResponse {
    constructor(data, id) {
        this.data = data;
        this.id = id;
    }
}
HandleAuditsResponse.type = '[Student Audits State] HandleAuditsResponse';


/***/ }),

/***/ "3mek":
/*!*************************************************!*\
  !*** ./src/app/store/actions/global.actions.ts ***!
  \*************************************************/
/*! exports provided: ClearAllStates */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClearAllStates", function() { return ClearAllStates; });
class ClearAllStates {
    constructor() { }
}
ClearAllStates.type = '[Logout Button] clearAllStates';


/***/ }),

/***/ "5mCX":
/*!******************************************!*\
  !*** ./src/app/interfaces/api-status.ts ***!
  \******************************************/
/*! exports provided: updateApiStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateApiStatus", function() { return updateApiStatus; });
const updateApiStatus = (prop = {}) => ({
    isFetching: prop.isFetching || false,
    isInitialised: prop.isInitialised || false,
    hasApiError: prop.hasApiError || false,
    hasConnectionError: prop.hasConnectionError || false,
});


/***/ }),

/***/ "AI2x":
/*!******************************************************************!*\
  !*** ./src/app/store/actions/student-audit-documents.actions.ts ***!
  \******************************************************************/
/*! exports provided: GetStudentAuditDocuments, HandleAuditsResponse, SetSelectedStudentAuditId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetStudentAuditDocuments", function() { return GetStudentAuditDocuments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HandleAuditsResponse", function() { return HandleAuditsResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetSelectedStudentAuditId", function() { return SetSelectedStudentAuditId; });
class GetStudentAuditDocuments {
    constructor() { }
}
GetStudentAuditDocuments.type = '[Student Audit Document state] GetStudentAuditDocuments';
class HandleAuditsResponse {
    constructor(data) {
        this.data = data;
    }
}
HandleAuditsResponse.type = '[Student Audit Document state] HandleAuditsResponse';
class SetSelectedStudentAuditId {
    constructor(id) {
        this.id = id;
    }
}
SetSelectedStudentAuditId.type = '[Student Audit Document state] SetSelectedStudentAudit';


/***/ }),

/***/ "Acgq":
/*!*******************************************!*\
  !*** ./src/app/store/state/menu.state.ts ***!
  \*******************************************/
/*! exports provided: defaultState, MenuState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultState", function() { return defaultState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuState", function() { return MenuState; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngxs/store */ "AcyG");
/* harmony import */ var src_app_interfaces_api_status__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/interfaces/api-status */ "5mCX");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _actions_content_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../actions/content.actions */ "chTE");
/* harmony import */ var _normalizers_content_normalizer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./normalizers/content.normalizer */ "TVAo");









const defaultState = {
    nl: null,
    en: null,
    hasApiError: false,
    hasConnectionError: false,
    isFetching: false,
    isInitialised: false,
    selectedMenu: null
};
let MenuState = class MenuState {
    constructor(http, router, store) {
        this.http = http;
        this.router = router;
        this.store = store;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            apiKey: src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiKey,
        });
    }
    static selectedMenu({ selectedMenu, }) {
        return selectedMenu;
    }
    switchMenu(ctx) {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const { participant } = this.store.snapshot();
            const { languageCode } = participant;
            const translations = (_a = ctx.getState()[languageCode]) === null || _a === void 0 ? void 0 : _a.map(_normalizers_content_normalizer__WEBPACK_IMPORTED_MODULE_8__["normalizeMenuContent"]);
            if (!translations) {
                return ctx.dispatch(new _actions_content_actions__WEBPACK_IMPORTED_MODULE_7__["GetMenuEnrichment"]());
            }
            ctx.patchState({
                selectedMenu: translations,
            });
        });
    }
    GetMenuEnrichment(ctx) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const { participant } = this.store.snapshot();
            const { languageCode } = participant;
            ctx.patchState(Object.assign({}, Object(src_app_interfaces_api_status__WEBPACK_IMPORTED_MODULE_5__["updateApiStatus"])({ isFetching: true })));
            this.http.get(this.constructUrl(languageCode), { headers: this.headers }).subscribe({
                next: (data) => ctx.dispatch(new _actions_content_actions__WEBPACK_IMPORTED_MODULE_7__["HandleMenuEnrichmentResponse"](data)),
                error: (e) => console.warn(e),
            });
        });
    }
    handleMenuEnrichmentResponse(ctx, { enrichment }) {
        const { participant } = this.store.snapshot();
        const { languageCode } = participant;
        ctx.setState((oldState) => (Object.assign(Object.assign(Object.assign({}, oldState), Object(src_app_interfaces_api_status__WEBPACK_IMPORTED_MODULE_5__["updateApiStatus"])({ isInitialised: true })), { [languageCode]: enrichment.data })));
        ctx.dispatch(new _actions_content_actions__WEBPACK_IMPORTED_MODULE_7__["SwitchMenu"]());
    }
    // @Action(ClearAllStates)
    // async clearState(ctx: StateContext<MenuStateModel>) {
    //   ctx.setState({ ...defaultState });
    // }
    constructUrl(languageCode) {
        return `${src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].endpoints.root}${src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].endpoints.menu}?lang=${languageCode}`;
    }
};
MenuState.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Store"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Action"])(_actions_content_actions__WEBPACK_IMPORTED_MODULE_7__["SwitchMenu"])
], MenuState.prototype, "switchMenu", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Action"])(_actions_content_actions__WEBPACK_IMPORTED_MODULE_7__["GetMenuEnrichment"])
], MenuState.prototype, "GetMenuEnrichment", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Action"])(_actions_content_actions__WEBPACK_IMPORTED_MODULE_7__["HandleMenuEnrichmentResponse"])
], MenuState.prototype, "handleMenuEnrichmentResponse", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Selector"])()
], MenuState, "selectedMenu", null);
MenuState = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["State"])({
        name: 'menu',
        defaults: Object.assign({}, defaultState),
    }),
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], MenuState);



/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    authServer: {
        login: 'https://simplesso-test.maastrichtuniversity.nl/IdentityProviderSelection',
        token: 'https://simplesso-test.maastrichtuniversity.nl/api/Identity',
    },
    apiKey: '7cd39531-52ee-40ec-a055-8ecf987cb810',
    clientId: 'mu-test',
    callbackUrl: {
        web: 'http://localhost:8100/auth',
        app: 'nl.mu.aj://auth',
    },
    messaging: {
        appId: '678b391a-bb39-4284-99c3-84f886a57023',
    },
    endpoints: {
        root: 'https://intg-dev.maastrichtuniversity.nl/AJ_BFF/v10/',
        student: 'api/Student',
        admissions: 'Admission',
        audits: `Admission`,
        auditDocuments: 'Documents',
        auditDocumentsUpload: 'Documents/Upload',
        enrichment: 'AuditEnrichment',
        statusTexts: 'api/AuditStatusText',
        help: 'api/drupalenrichment/GetHelpEnrichment',
        menu: 'api/drupalenrichment/GetMenuBarEnrichment',
        message: 'MessageBox',
        messageStatus: 'Status',
        chat_en: 'https://www.maastrichtuniversity.nl/chat.html',
        chat_nl: 'https://www.maastrichtuniversity.nl/chat-nl.html'
    },
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "CKn5":
/*!**************************************************!*\
  !*** ./src/app/store/state/participant.state.ts ***!
  \**************************************************/
/*! exports provided: ParticipantState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParticipantState", function() { return ParticipantState; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngxs/store */ "AcyG");
/* harmony import */ var src_app_enums_language__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/enums/language */ "zpKt");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/storage.service */ "n90K");
/* harmony import */ var _actions_global_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../actions/global.actions */ "3mek");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _actions_participant_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../actions/participant.actions */ "bTLy");
/* harmony import */ var _actions_content_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../actions/content.actions */ "chTE");
/* harmony import */ var _actions_status_texts_actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../actions/status-texts.actions */ "hCTH");











const defaultState = {
    participantId: '',
    sssoId: '',
    languageCode: src_app_enums_language__WEBPACK_IMPORTED_MODULE_4__["LanguageCode"].EN,
    chatUrl: src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].endpoints['chat_' + src_app_enums_language__WEBPACK_IMPORTED_MODULE_4__["LanguageCode"].EN]
};
let ParticipantState = class ParticipantState {
    constructor(storageService, store, translate) {
        this.storageService = storageService;
        this.store = store;
        this.translate = translate;
    }
    static participantId({ participantId }) {
        return participantId;
    }
    static chatUrl({ chatUrl }) {
        return chatUrl;
    }
    static languageCode({ languageCode }) {
        return languageCode;
    }
    initialiseParticipantData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const storageData = yield this.storageService.getStorageData();
            this.store.dispatch(new _actions_participant_actions__WEBPACK_IMPORTED_MODULE_8__["SetParticipantData"](storageData));
        });
    }
    setParticipantData(ctx, { participantData }) {
        this.storageService.setStorageData(Object.assign({}, participantData));
        console.log('ParticipantData languageCode', participantData.languageCode);
        ctx.setState((oldState) => (Object.assign(Object.assign({}, oldState), participantData)));
    }
    setLanguage(ctx, { languageCode }) {
        this.translate.use(languageCode);
        const chatUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].endpoints['chat_' + languageCode];
        ctx.setState((oldState) => (Object.assign(Object.assign({}, oldState), { languageCode,
            chatUrl })));
        this.storageService.setLanguageCode(languageCode);
        this.store.dispatch(new _actions_content_actions__WEBPACK_IMPORTED_MODULE_9__["SwitchHelp"]());
        this.store.dispatch(new _actions_content_actions__WEBPACK_IMPORTED_MODULE_9__["SwitchMenu"]());
        this.store.dispatch(new _actions_status_texts_actions__WEBPACK_IMPORTED_MODULE_10__["SwitchStatusTexts"]());
    }
    clearState(ctx) {
        ctx.setState(Object.assign({}, defaultState));
    }
};
ParticipantState.ctorParameters = () => [
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"] },
    { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Action"])(_actions_participant_actions__WEBPACK_IMPORTED_MODULE_8__["InitialiseParticipantData"])
], ParticipantState.prototype, "initialiseParticipantData", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Action"])(_actions_participant_actions__WEBPACK_IMPORTED_MODULE_8__["SetParticipantData"])
], ParticipantState.prototype, "setParticipantData", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Action"])(_actions_participant_actions__WEBPACK_IMPORTED_MODULE_8__["SetLanguageCode"])
], ParticipantState.prototype, "setLanguage", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Action"])(_actions_global_actions__WEBPACK_IMPORTED_MODULE_6__["ClearAllStates"])
], ParticipantState.prototype, "clearState", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Selector"])()
], ParticipantState, "participantId", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Selector"])()
], ParticipantState, "chatUrl", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Selector"])()
], ParticipantState, "languageCode", null);
ParticipantState = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["State"])({
        name: 'participant',
        defaults: Object.assign({}, defaultState),
    }),
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], ParticipantState);



/***/ }),

/***/ "EOOO":
/*!***************************************************************!*\
  !*** ./src/app/store/state/normalizers/message.normalizer.ts ***!
  \***************************************************************/
/*! exports provided: normalizeMessageContent, getReadMessageStatus, setReadMessageStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeMessageContent", function() { return normalizeMessageContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getReadMessageStatus", function() { return getReadMessageStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setReadMessageStatus", function() { return setReadMessageStatus; });
/* harmony import */ var src_app_interfaces_message__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/interfaces/message */ "xG0Y");

const normalizeMessageContent = (raw) => {
    return {
        id: raw.MessageId,
        subject: raw.Subject,
        content: raw.Body,
        status: raw.Status,
        read: getReadMessageStatus(raw.Status),
        node_id: raw.NodeId,
        admission_id: raw.AdmissionGuid,
        send_dt: raw.DateTimeCreated,
        academicPeriod: raw.AcademicPeriod,
        studyYear: raw.StudyYear
    };
};
const getReadMessageStatus = (messageStatus) => {
    return (messageStatus === src_app_interfaces_message__WEBPACK_IMPORTED_MODULE_0__["MessageStatus"].READ_NORMAL_PRIO || messageStatus === src_app_interfaces_message__WEBPACK_IMPORTED_MODULE_0__["MessageStatus"].READ_HIGH_PRIO);
};
const setReadMessageStatus = (messageStatus) => {
    return ((messageStatus === src_app_interfaces_message__WEBPACK_IMPORTED_MODULE_0__["MessageStatus"].READ_HIGH_PRIO || messageStatus === src_app_interfaces_message__WEBPACK_IMPORTED_MODULE_0__["MessageStatus"].UNREAD_HIGH_PRIO) ? src_app_interfaces_message__WEBPACK_IMPORTED_MODULE_0__["MessageStatus"].READ_HIGH_PRIO : src_app_interfaces_message__WEBPACK_IMPORTED_MODULE_0__["MessageStatus"].READ_NORMAL_PRIO);
};


/***/ }),

/***/ "EktT":
/*!**********************************************!*\
  !*** ./src/app/services/platform.service.ts ***!
  \**********************************************/
/*! exports provided: PlatformService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlatformService", function() { return PlatformService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");



let PlatformService = class PlatformService {
    constructor(platform) {
        this.platform = platform;
        this.resizeSubject = this.platform.resize;
    }
    isPhone() {
        return this.platform.is('mobile') || this.platform.is('phablet');
    }
    isWeb() {
        return !this.isPhone();
    }
    isIos() {
        return this.platform.is('ios');
    }
};
PlatformService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] }
];
PlatformService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], PlatformService);



/***/ }),

/***/ "G4S2":
/*!*****************************************!*\
  !*** ./src/app/models/student-audit.ts ***!
  \*****************************************/
/*! exports provided: StatusText, NodeType, NodeActor, NodeTaskCategory, NodeTaskType, EmptyAudit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusText", function() { return StatusText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodeType", function() { return NodeType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodeActor", function() { return NodeActor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodeTaskCategory", function() { return NodeTaskCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodeTaskType", function() { return NodeTaskType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmptyAudit", function() { return EmptyAudit; });
var StatusText;
(function (StatusText) {
    StatusText["COMPLETED"] = "Completed";
    StatusText["NOT_COMPLETED"] = "Not Completed";
    StatusText["IN_PROCESS"] = "In Process";
    StatusText["WAIT_FOR_UM"] = "Wait for UM";
    StatusText["WAIT_FOR_STUDENT"] = "Wait for Student";
})(StatusText || (StatusText = {}));
var NodeType;
(function (NodeType) {
    NodeType["OVERIG"] = "O";
    NodeType["EISEN_PAKKET"] = "P";
    NodeType["BEOORDELINGS_EIS"] = "B";
    NodeType["SUB_EIS"] = "S";
    NodeType["AANMELD_EIS"] = "A";
})(NodeType || (NodeType = {}));
var NodeActor;
(function (NodeActor) {
    NodeActor["AUTOMATIC"] = "A";
    NodeActor["EMPLOYEE"] = "E";
    NodeActor["STUDENT"] = "S";
})(NodeActor || (NodeActor = {}));
// when will I need this?
var NodeTaskCategory;
(function (NodeTaskCategory) {
    NodeTaskCategory["STUDIELINK"] = "SLI";
    NodeTaskCategory["ADMISSION"] = "ADM";
    NodeTaskCategory["ENROLLEMENT"] = "ENR";
})(NodeTaskCategory || (NodeTaskCategory = {}));
var NodeTaskType;
(function (NodeTaskType) {
    NodeTaskType["ACCEPT_PLACEMENT"] = "A";
    NodeTaskType["INTERVIEW"] = "I";
    NodeTaskType["PAYMENT"] = "P";
    NodeTaskType["TEST"] = "T";
    NodeTaskType["UPLOAD_FILE"] = "U";
    NodeTaskType["WEB_LINK"] = "W";
})(NodeTaskType || (NodeTaskType = {}));
const EmptyAudit = {
    ID: "XXXX",
    NodeInvisible4St: false,
    NodeUrgentAction: false,
    StatusText: StatusText.WAIT_FOR_UM,
    Reqresult: '',
    ParentID: '',
    NodeType: NodeType.EISEN_PAKKET,
    NodeActor: NodeActor.AUTOMATIC,
    NodeText: '',
    NodeFeedback: null,
    NodeDeadline: null,
    NodeTaskType: null,
    NodeWaitStep: false,
    NodeDocType: null,
    NodeDocTypeTxt: null,
    NodeDocFileExt: null,
    NodeUrl: null,
    Requirement: '',
    Subrequirement: '',
    Text: '',
    Weighting: null,
    NodeTaskCateg: NodeTaskCategory.ADMISSION,
    nodeType: NodeType.EISEN_PAKKET,
    nodeActor: NodeActor.AUTOMATIC,
};


/***/ }),

/***/ "H9s2":
/*!*******************************************!*\
  !*** ./src/app/store/state/help.state.ts ***!
  \*******************************************/
/*! exports provided: defaultState, HelpState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultState", function() { return defaultState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpState", function() { return HelpState; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngxs/store */ "AcyG");
/* harmony import */ var src_app_interfaces_api_status__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/interfaces/api-status */ "5mCX");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _actions_content_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../actions/content.actions */ "chTE");
/* harmony import */ var _normalizers_content_normalizer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./normalizers/content.normalizer */ "TVAo");









const defaultState = {
    nl: null,
    en: null,
    hasApiError: false,
    hasConnectionError: false,
    isFetching: false,
    isInitialised: false,
    selectedHelp: null,
    isActive: false
};
let HelpState = class HelpState {
    constructor(http, router, store) {
        this.http = http;
        this.router = router;
        this.store = store;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            apiKey: src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiKey,
        });
    }
    static selectedHelp({ selectedHelp, }) {
        return selectedHelp;
    }
    static isHelpActive({ isActive, }) {
        return isActive;
    }
    toggleHelpIsActive(ctx) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            ctx.setState((oldState) => (Object.assign(Object.assign({}, oldState), { isActive: !oldState.isActive })));
        });
    }
    switchHelp(ctx) {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const { participant } = this.store.snapshot();
            const { languageCode } = participant;
            const translations = (_a = ctx.getState()[languageCode]) === null || _a === void 0 ? void 0 : _a.map(_normalizers_content_normalizer__WEBPACK_IMPORTED_MODULE_8__["normalizeHelpContent"]);
            if (!translations) {
                return ctx.dispatch(new _actions_content_actions__WEBPACK_IMPORTED_MODULE_7__["GetHelpEnrichment"]());
            }
            ctx.patchState({
                selectedHelp: translations,
            });
        });
    }
    GetHelpEnrichment(ctx) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const { participant } = this.store.snapshot();
            const { languageCode } = participant;
            ctx.patchState(Object.assign({}, Object(src_app_interfaces_api_status__WEBPACK_IMPORTED_MODULE_5__["updateApiStatus"])({ isFetching: true })));
            this.http.get(this.constructUrl(languageCode), { headers: this.headers }).subscribe({
                next: (data) => ctx.dispatch(new _actions_content_actions__WEBPACK_IMPORTED_MODULE_7__["HandleHelpEnrichmentResponse"](data)),
                error: (e) => console.warn(e),
            });
        });
    }
    handleHelpEnrichmentResponse(ctx, { enrichment }) {
        const { participant } = this.store.snapshot();
        const { languageCode } = participant;
        ctx.setState((oldState) => (Object.assign(Object.assign(Object.assign({}, oldState), Object(src_app_interfaces_api_status__WEBPACK_IMPORTED_MODULE_5__["updateApiStatus"])({ isInitialised: true })), { [languageCode]: enrichment.data })));
        ctx.dispatch(new _actions_content_actions__WEBPACK_IMPORTED_MODULE_7__["SwitchHelp"]());
    }
    // @Action(ClearAllStates)
    // async clearState(ctx: StateContext<HelpStateModel>) {
    //   ctx.setState({ ...defaultState });
    // }
    constructUrl(languageCode) {
        return `${src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].endpoints.root}${src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].endpoints.help}?lang=${languageCode}`;
    }
};
HelpState.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Store"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Action"])(_actions_content_actions__WEBPACK_IMPORTED_MODULE_7__["ToggleHelpIsActive"])
], HelpState.prototype, "toggleHelpIsActive", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Action"])(_actions_content_actions__WEBPACK_IMPORTED_MODULE_7__["SwitchHelp"])
], HelpState.prototype, "switchHelp", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Action"])(_actions_content_actions__WEBPACK_IMPORTED_MODULE_7__["GetHelpEnrichment"])
], HelpState.prototype, "GetHelpEnrichment", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Action"])(_actions_content_actions__WEBPACK_IMPORTED_MODULE_7__["HandleHelpEnrichmentResponse"])
], HelpState.prototype, "handleHelpEnrichmentResponse", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Selector"])()
], HelpState, "selectedHelp", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Selector"])()
], HelpState, "isHelpActive", null);
HelpState = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["State"])({
        name: 'help',
        defaults: Object.assign({}, defaultState),
    }),
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], HelpState);



/***/ }),

/***/ "HizE":
/*!***************************************************!*\
  !*** ./src/app/store/state/status-texts.state.ts ***!
  \***************************************************/
/*! exports provided: defaultState, StatusTextsState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultState", function() { return defaultState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusTextsState", function() { return StatusTextsState; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngxs/store */ "AcyG");
/* harmony import */ var src_app_interfaces_api_status__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/interfaces/api-status */ "5mCX");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _actions_status_texts_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../actions/status-texts.actions */ "hCTH");








const defaultState = {
    nl: null,
    en: null,
    hasApiError: false,
    hasConnectionError: false,
    isFetching: false,
    isInitialised: false,
    selectedStatusTexts: null,
};
let StatusTextsState = class StatusTextsState {
    constructor(http, router, store) {
        this.http = http;
        this.router = router;
        this.store = store;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            apiKey: src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiKey
        });
    }
    static selectedStatusTexts({ selectedStatusTexts, }) {
        return selectedStatusTexts;
    }
    switchStatusTexts(ctx) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const { participant } = this.store.snapshot();
            const { languageCode } = participant;
            const translations = ctx.getState()[languageCode];
            if (!translations) {
                return ctx.dispatch(new _actions_status_texts_actions__WEBPACK_IMPORTED_MODULE_7__["GetStatusTexts"]());
            }
            ctx.patchState({
                selectedStatusTexts: translations,
            });
        });
    }
    getStatusTexts(ctx) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            ctx.patchState(Object.assign({}, Object(src_app_interfaces_api_status__WEBPACK_IMPORTED_MODULE_5__["updateApiStatus"])({ isFetching: true })));
            const { participant } = this.store.snapshot();
            const { languageCode } = participant;
            const url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].endpoints.root + src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].endpoints.statusTexts}?lang=${languageCode}`;
            this.http.get(url, { headers: this.headers }).subscribe({
                next: (data) => ctx.dispatch(new _actions_status_texts_actions__WEBPACK_IMPORTED_MODULE_7__["HandleAuditStatusResponse"](data, languageCode)),
                error: (e) => {
                    console.warn(e.message || e);
                    this.router.navigate(['/', 'login']);
                },
            });
        });
    }
    setStatusTexts(ctx, { response, lang }) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            ctx.patchState(Object.assign(Object.assign({}, Object(src_app_interfaces_api_status__WEBPACK_IMPORTED_MODULE_5__["updateApiStatus"])({ isInitialised: true })), { [lang]: response }));
            ctx.dispatch(new _actions_status_texts_actions__WEBPACK_IMPORTED_MODULE_7__["SwitchStatusTexts"]());
        });
    }
};
StatusTextsState.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Store"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Action"])(_actions_status_texts_actions__WEBPACK_IMPORTED_MODULE_7__["SwitchStatusTexts"])
], StatusTextsState.prototype, "switchStatusTexts", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Action"])(_actions_status_texts_actions__WEBPACK_IMPORTED_MODULE_7__["GetStatusTexts"])
], StatusTextsState.prototype, "getStatusTexts", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Action"])(_actions_status_texts_actions__WEBPACK_IMPORTED_MODULE_7__["HandleAuditStatusResponse"])
], StatusTextsState.prototype, "setStatusTexts", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Selector"])()
], StatusTextsState, "selectedStatusTexts", null);
StatusTextsState = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["State"])({
        name: 'statusTexts',
        defaults: Object.assign({}, defaultState),
    }),
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], StatusTextsState);



/***/ }),

/***/ "Jz07":
/*!*************************************************************!*\
  !*** ./src/app/store/actions/student-admissions.actions.ts ***!
  \*************************************************************/
/*! exports provided: GetStudentAdmissions, SetSelectedGuid, SetSelectedNodeId, HandleAdmissionsResponse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetStudentAdmissions", function() { return GetStudentAdmissions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetSelectedGuid", function() { return SetSelectedGuid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetSelectedNodeId", function() { return SetSelectedNodeId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HandleAdmissionsResponse", function() { return HandleAdmissionsResponse; });
class GetStudentAdmissions {
    constructor(guid, participantId) {
        this.guid = guid;
        this.participantId = participantId;
    }
}
GetStudentAdmissions.type = '[Student Admissions component] GetStudentAdmissions';
class SetSelectedGuid {
    constructor(guid, status, locked, contextColor) {
        this.guid = guid;
        this.status = status;
        this.locked = locked;
        this.contextColor = contextColor;
    }
}
SetSelectedGuid.type = '[Student Admissions component] SetSelectedGuid';
class SetSelectedNodeId {
    constructor(id) {
        this.id = id;
    }
}
SetSelectedNodeId.type = '[Student Admissions component] SetSelectedNodeId';
class HandleAdmissionsResponse {
    constructor(data, guid) {
        this.data = data;
        this.guid = guid;
    }
}
HandleAdmissionsResponse.type = '[Student Admissions state] HandleAdmissionsResponse';


/***/ }),

/***/ "Lpmr":
/*!******************************************!*\
  !*** ./src/app/services/link.service.ts ***!
  \******************************************/
/*! exports provided: LinkService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkService", function() { return LinkService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "m/P+");
/* harmony import */ var _ionic_native_safari_view_controller_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/safari-view-controller/ngx */ "zPEN");
/* harmony import */ var _platform_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./platform.service */ "EktT");





let LinkService = class LinkService {
    constructor(platform, iab, safariViewController) {
        this.platform = platform;
        this.iab = iab;
        this.safariViewController = safariViewController;
        this.defaultNavigationStyle = '_blank';
    }
    openUrl(url, options = { external: false, attributes: null }) {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.platform.isWeb()) {
                try {
                    window.open(url, (((_a = options.attributes) === null || _a === void 0 ? void 0 : _a.target) ? options.attributes.target : this.defaultNavigationStyle)).focus();
                }
                catch (error) {
                    console.error(error);
                    window.location.href = url;
                }
            }
            else {
                try {
                    this.openSafariWebView(url);
                }
                catch (e) {
                    this.openInAppBrowser(url);
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
};
LinkService.ctorParameters = () => [
    { type: _platform_service__WEBPACK_IMPORTED_MODULE_4__["PlatformService"] },
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__["InAppBrowser"] },
    { type: _ionic_native_safari_view_controller_ngx__WEBPACK_IMPORTED_MODULE_3__["SafariViewController"] }
];
LinkService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], LinkService);



/***/ }),

/***/ "NTGt":
/*!******************************************************!*\
  !*** ./src/app/store/actions/data-upload.actions.ts ***!
  \******************************************************/
/*! exports provided: SetDataUploadState, ClearDataUploadState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetDataUploadState", function() { return SetDataUploadState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClearDataUploadState", function() { return ClearDataUploadState; });
class SetDataUploadState {
    constructor(completed, formData, errors) {
        this.completed = completed;
        this.formData = formData;
        this.errors = errors;
    }
}
SetDataUploadState.type = '[DataUpload State] SetDataUploadState';
class ClearDataUploadState {
    constructor() { }
}
ClearDataUploadState.type = '[DataUpload State] ClearDataUploadState';


/***/ }),

/***/ "QhiC":
/*!**************************************************************!*\
  !*** ./src/app/guards/can-activate-protected-route.guard.ts ***!
  \**************************************************************/
/*! exports provided: CanActivateProtectedRouteGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanActivateProtectedRouteGuard", function() { return CanActivateProtectedRouteGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngxs/store */ "AcyG");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/storage.service */ "n90K");





let CanActivateProtectedRouteGuard = class CanActivateProtectedRouteGuard {
    constructor(router, storageService, store) {
        this.router = router;
        this.storageService = storageService;
        this.store = store;
    }
    canActivate(route, state) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const hasValidAccessToken = yield this.storageService.hasValidAccessToken();
            if (hasValidAccessToken) {
                return true;
            }
            this.router.navigate(['/', 'login']);
            return false;
        });
    }
};
CanActivateProtectedRouteGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"] },
    { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }
];
CanActivateProtectedRouteGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], CanActivateProtectedRouteGuard);



/***/ }),

/***/ "SWcY":
/*!*********************************************************************!*\
  !*** ./src/app/store/state/normalizers/student-audit.normalizer.ts ***!
  \*********************************************************************/
/*! exports provided: normalizeAuditGroup, translateAudit, normalizeAudits, normalizeAuditDocument */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeAuditGroup", function() { return normalizeAuditGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "translateAudit", function() { return translateAudit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeAudits", function() { return normalizeAudits; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeAuditDocument", function() { return normalizeAuditDocument; });
/* harmony import */ var src_app_models_student_audit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/student-audit */ "G4S2");

const normalizeAuditGroup = (raw, taskEnrichments) => {
    const translatedTitles = taskEnrichments.map(({ attributes }) => ({
        id: attributes.field_audit_node_id,
        title: attributes.title,
    }));
    return {
        categ: `category.${raw.Categ}`,
        studentAudits: raw.StudentAudits.map(normalizeAudits).map(translateAudit(translatedTitles)),
    };
};
const translateAudit = (auditTitles) => (audit) => {
    const matchingAuditTitle = auditTitles.filter(({ id }) => id == audit.id)[0];
    return Object.assign(Object.assign({}, audit), { nodeText: matchingAuditTitle ? matchingAuditTitle.title : '' });
};
const normalizeAudits = (raw) => {
    return {
        statusText: raw.StatusText,
        isCompleted: raw.StatusText === src_app_models_student_audit__WEBPACK_IMPORTED_MODULE_0__["StatusText"].COMPLETED,
        id: raw.ID,
        nodeText: raw.NodeText,
        nodeDeadline: raw.NodeDeadline,
        nodeTaskType: raw.NodeTaskType,
        nodeWaitStep: raw.NodeWaitStep,
        nodeDocType: raw.NodeDocType,
        nodeDocTypeTxt: raw.NodeDocTypeTxt,
        nodeDocFileExt: raw.NodeDocFileExt,
        nodeFeedback: raw.NodeFeedback,
        nodeUrl: raw.NodeUrl,
        nodeTaskCategory: raw.NodeTaskCateg
    };
};
const normalizeAuditDocument = (raw) => {
    return {
        id: raw.DocumentID,
        nodeId: raw.NodeID,
        name: raw.FileName,
        originalName: raw.FileNameOriginal,
        uploadTime: raw.UploadTime,
        uploadBy: raw.UploadBy,
        locked: raw.Locked,
        authenticated: raw.Authenticated,
        authenticatedDate: raw.AuthenticatedDate
    };
};


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _capacitor_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @capacitor/app */ "Ktnr");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngxs/store */ "AcyG");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_link_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/link.service */ "Lpmr");
/* harmony import */ var _services_platform_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/platform.service */ "EktT");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/storage.service */ "n90K");
/* harmony import */ var _store_actions_content_actions__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./store/actions/content.actions */ "chTE");
/* harmony import */ var _store_state_menu_state__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./store/state/menu.state */ "Acgq");
/* harmony import */ var _store_state_participant_state__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./store/state/participant.state */ "CKn5");


















let AppComponent = class AppComponent {
    constructor(actionsheetCtrl, navCtrl, platform, storageService, translateService, router, zone, store, linkService) {
        this.actionsheetCtrl = actionsheetCtrl;
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.storageService = storageService;
        this.translateService = translateService;
        this.router = router;
        this.zone = zone;
        this.store = store;
        this.linkService = linkService;
        this.faHome = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faHome"];
        this.faBars = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faBars"];
        this.faEnvelope = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faEnvelope"];
        this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_10__["Subject"]();
    }
    ngOnInit() {
        this.storageService.initializeStoreData();
        this.onOpenFromBrowser();
        this.listenToParticipantChanges();
        this.listenToSelectedMenuChanges();
        this.shouldRenderNativeNavigation = !this.platform.isWeb();
    }
    onOpenFromBrowser() {
        let path;
        let query;
        let code;
        let rest;
        _capacitor_app__WEBPACK_IMPORTED_MODULE_5__["App"].addListener('appUrlOpen', ({ url }) => {
            this.zone.run(() => {
                const [urlScheme, route] = url.split('://');
                if (route) {
                    [path, rest] = route.split('?');
                    [rest, query] = route.split('code=');
                    [code] = query && query.split('&');
                }
                if (path && code) {
                    this.router.navigate(['/', path], { queryParams: { code } });
                }
            });
        });
    }
    goToHome() {
        this.navCtrl.navigateBack(['/', 'home']);
    }
    goToMessages() {
        this.router.navigate(['/', 'messages']);
    }
    listenToSelectedMenuChanges() {
        this.selectedMenuStream
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["takeUntil"])(this.ngUnsubscribe), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["filter"])((value) => !!value), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["tap"])((menuObjects) => {
            this.menuItems = menuObjects.map((item) => {
                return {
                    text: item.title,
                    role: 'destructive',
                    handler: () => {
                        this.linkService.openUrl(item.url, item.options);
                    }
                };
            });
        }))
            .subscribe();
    }
    presentNativeMenu() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionsheetCtrl.create({
                header: 'Menu',
                cssClass: 'native-menu',
                buttons: [
                    ...this.menuItems,
                    {
                        text: this.translateService.instant('elements.inbox'),
                        role: 'destructive',
                        icon: 'mail',
                        handler: () => {
                            this.router.navigate(['/', 'messages']);
                        }
                    },
                    {
                        text: this.translateService.instant('elements.help'),
                        role: 'destructive',
                        icon: 'help-circle',
                        handler: () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            yield actionSheet.dismiss();
                            this.store.dispatch(new _store_actions_content_actions__WEBPACK_IMPORTED_MODULE_15__["ToggleHelpIsActive"]());
                        })
                    },
                    {
                        text: this.translateService.instant('elements.logout'),
                        role: 'destructive',
                        icon: 'log-out',
                        handler: () => {
                            this.router.navigate(['/', 'logout']);
                        },
                    },
                ],
            });
            yield actionSheet.present();
        });
    }
    listenToParticipantChanges() {
        this.participantIdStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["takeUntil"])(this.ngUnsubscribe), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["tap"])((participantId) => {
            this.participantId = participantId;
        }))
            .subscribe();
    }
    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.unsubscribe();
    }
};
AppComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ActionSheetController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"] },
    { type: _services_platform_service__WEBPACK_IMPORTED_MODULE_13__["PlatformService"] },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_14__["StorageService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] },
    { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_9__["Store"] },
    { type: _services_link_service__WEBPACK_IMPORTED_MODULE_12__["LinkService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_9__["Select"])(_store_state_participant_state__WEBPACK_IMPORTED_MODULE_17__["ParticipantState"].participantId)
], AppComponent.prototype, "participantIdStream", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_9__["Select"])(_store_state_menu_state__WEBPACK_IMPORTED_MODULE_16__["MenuState"].selectedMenu)
], AppComponent.prototype, "selectedMenuStream", void 0);
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "TVAo":
/*!***************************************************************!*\
  !*** ./src/app/store/state/normalizers/content.normalizer.ts ***!
  \***************************************************************/
/*! exports provided: normalizeContent, normalizeHelpContent, normalizeMenuContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeContent", function() { return normalizeContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeHelpContent", function() { return normalizeHelpContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeMenuContent", function() { return normalizeMenuContent; });
const normalizeContent = ({ attributes: { field_after, field_before, field_audit_node_id, title, langcode }, }) => ({
    before: field_before ? field_before.processed : null,
    after: field_after ? field_after.processed : null,
    contentTitle: title,
    auditId: field_audit_node_id,
    langcode: langcode
});
const normalizeHelpContent = ({ attributes: { field_text, title }, }) => ({
    title: title,
    content: field_text.processed
});
const normalizeMenuContent = ({ attributes: { description, enabled, expanded, menu_name, options, parent, provider, title, url, weight }, }) => ({
    description,
    enabled,
    expanded,
    menu_name,
    options,
    parent,
    provider,
    title,
    url,
    weight
});


/***/ }),

/***/ "VWKi":
/*!**************************************************************!*\
  !*** ./src/app/store/state/student-audit-documents.state.ts ***!
  \**************************************************************/
/*! exports provided: StudentAuditDocumentsState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentAuditDocumentsState", function() { return StudentAuditDocumentsState; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngxs/store */ "AcyG");
/* harmony import */ var src_app_interfaces_api_status__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/interfaces/api-status */ "5mCX");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _actions_global_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../actions/global.actions */ "3mek");
/* harmony import */ var _actions_student_audit_documents_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../actions/student-audit-documents.actions */ "AI2x");
/* harmony import */ var _normalizers_student_audit_normalizer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./normalizers/student-audit.normalizer */ "SWcY");
/* harmony import */ var _participant_state__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./participant.state */ "CKn5");
/* harmony import */ var _student_admissions_state__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./student-admissions.state */ "qlWn");
/* harmony import */ var _student_audits_state__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./student-audits.state */ "qGxV");














const defaultState = {
    auditDocuments: [],
    showAuditContent: false,
    isFetching: false,
    isInitialised: false,
    hasApiError: false,
    hasConnectionError: false
};
let StudentAuditDocumentsState = class StudentAuditDocumentsState {
    constructor(http, router, store, zone, toast) {
        this.http = http;
        this.router = router;
        this.store = store;
        this.zone = zone;
        this.toast = toast;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            apiKey: src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiKey
        });
    }
    static apiStatus({ isFetching, isInitialised, hasApiError, hasConnectionError, }) {
        return {
            isFetching,
            isInitialised,
            hasApiError,
            hasConnectionError,
        };
    }
    static auditDocuments({ auditDocuments }) {
        return auditDocuments;
    }
    getStudentAuditDocuments(ctx) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            ctx.patchState(Object.assign({}, Object(src_app_interfaces_api_status__WEBPACK_IMPORTED_MODULE_6__["updateApiStatus"])({ isFetching: true })));
            this.http.get(this.constructUrl(), { headers: this.headers }).subscribe({
                next: (data) => {
                    ctx.dispatch(new _actions_student_audit_documents_actions__WEBPACK_IMPORTED_MODULE_9__["HandleAuditsResponse"](data));
                },
                error: (e) => {
                    console.warn(e.error.Message);
                    this.zone.run(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        const toast = yield this.toast.create({
                            message: 'Error: Failure to fetch Documents',
                            position: 'bottom',
                            color: 'danger',
                            duration: 5000
                        });
                        yield toast.present();
                        // this.router.navigate(['/', 'logout']);
                    }));
                },
            });
        });
    }
    handleAuditsResponse(ctx, { data }) {
        const { selectedAuditId } = this.store.selectSnapshot(_student_audits_state__WEBPACK_IMPORTED_MODULE_13__["StudentAuditsState"]);
        ctx.setState((oldState) => (Object.assign(Object.assign({}, oldState), { selectedAuditId, auditDocuments: data.map(studentRaw => Object(_normalizers_student_audit_normalizer__WEBPACK_IMPORTED_MODULE_10__["normalizeAuditDocument"])(studentRaw)) })));
    }
    setSelectedStudentAuditId(ctx, { id }) {
        ctx.setState((oldState) => (Object.assign(Object.assign({}, oldState), { selectedAuditId: id, showAuditContent: true })));
    }
    static selectedAuditDocument({ auditDocuments, selectedAuditId, }) {
        const studentAuditDocuments = auditDocuments
            .filter(({ nodeId }) => nodeId === selectedAuditId);
        return studentAuditDocuments;
    }
    clearState(ctx) {
        ctx.setState(Object.assign({}, defaultState));
    }
    constructUrl() {
        const { participantId } = this.store.selectSnapshot(_participant_state__WEBPACK_IMPORTED_MODULE_11__["ParticipantState"]);
        const { selectedGuid } = this.store.selectSnapshot(_student_admissions_state__WEBPACK_IMPORTED_MODULE_12__["StudentAdmissionsState"]);
        return `${src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].endpoints.root + src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].endpoints.student + '/' + participantId + '/' + src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].endpoints.audits}/${selectedGuid}/${src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].endpoints.auditDocuments}`;
    }
};
StudentAuditDocumentsState.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Store"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Action"])(_actions_student_audit_documents_actions__WEBPACK_IMPORTED_MODULE_9__["GetStudentAuditDocuments"])
], StudentAuditDocumentsState.prototype, "getStudentAuditDocuments", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Action"])(_actions_student_audit_documents_actions__WEBPACK_IMPORTED_MODULE_9__["HandleAuditsResponse"])
], StudentAuditDocumentsState.prototype, "handleAuditsResponse", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Action"])(_actions_student_audit_documents_actions__WEBPACK_IMPORTED_MODULE_9__["SetSelectedStudentAuditId"])
], StudentAuditDocumentsState.prototype, "setSelectedStudentAuditId", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Action"])(_actions_global_actions__WEBPACK_IMPORTED_MODULE_8__["ClearAllStates"])
], StudentAuditDocumentsState.prototype, "clearState", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Selector"])()
], StudentAuditDocumentsState, "apiStatus", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Selector"])()
], StudentAuditDocumentsState, "auditDocuments", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Selector"])()
], StudentAuditDocumentsState, "selectedAuditDocument", null);
StudentAuditDocumentsState = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["State"])({
        name: 'studentAuditDocument',
        defaults: Object.assign({}, defaultState),
    }),
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], StudentAuditDocumentsState);



/***/ }),

/***/ "Vnf1":
/*!**********************************************!*\
  !*** ./src/app/store/state/message.state.ts ***!
  \**********************************************/
/*! exports provided: defaultState, MessageState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultState", function() { return defaultState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageState", function() { return MessageState; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngxs/store */ "AcyG");
/* harmony import */ var src_app_interfaces_api_status__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/interfaces/api-status */ "5mCX");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _actions_global_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../actions/global.actions */ "3mek");
/* harmony import */ var _actions_message_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../actions/message.actions */ "eFHV");
/* harmony import */ var _normalizers_message_normalizer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./normalizers/message.normalizer */ "EOOO");
/* harmony import */ var src_app_interfaces_message__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/interfaces/message */ "xG0Y");
/* harmony import */ var _participant_state__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./participant.state */ "CKn5");












const defaultState = {
    messages: null,
    messageData: null,
    selectedMessage: null,
    isActive: null,
    hasApiError: false,
    hasConnectionError: false,
    isFetching: false,
    isInitialised: false
};
let MessageState = class MessageState {
    constructor(http, router, store) {
        this.http = http;
        this.router = router;
        this.store = store;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            apiKey: src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiKey,
        });
    }
    static apiStatus({ isFetching, isInitialised, hasApiError, hasConnectionError, }) {
        return {
            isFetching,
            isInitialised,
            hasApiError,
            hasConnectionError,
        };
    }
    static isMessagesActive({ isActive, }) {
        return isActive;
    }
    toggleMessagesIsActive(ctx) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            ctx.setState((oldState) => (Object.assign(Object.assign({}, oldState), { isActive: !oldState.isActive })));
        });
    }
    static selectedMessage({ selectedMessage, }) {
        return selectedMessage;
    }
    static messages({ messages, }) {
        return messages;
    }
    switchMessage(ctx, { id }) {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!id) {
                ctx.patchState({ selectedMessage: null });
            }
            else {
                const message = (_a = ctx.getState().messages) === null || _a === void 0 ? void 0 : _a.filter(message => message.id == id)[0];
                if (!message) {
                    return ctx.dispatch(new _actions_message_actions__WEBPACK_IMPORTED_MODULE_8__["GetMessageEnrichment"]());
                }
                ctx.setState((oldState) => (Object.assign(Object.assign({}, oldState), { selectedMessage: message, messages: oldState.messages.map((messageOld) => {
                        const newMessage = Object.assign({}, messageOld);
                        if (newMessage.id === id) {
                            if (newMessage.status === src_app_interfaces_message__WEBPACK_IMPORTED_MODULE_10__["MessageStatus"].UNREAD_NORMAL_PRIO || newMessage.status === src_app_interfaces_message__WEBPACK_IMPORTED_MODULE_10__["MessageStatus"].UNREAD_HIGH_PRIO) {
                                ctx.dispatch(new _actions_message_actions__WEBPACK_IMPORTED_MODULE_8__["MarkMessageAsRead"](newMessage));
                                newMessage.status = Object(_normalizers_message_normalizer__WEBPACK_IMPORTED_MODULE_9__["setReadMessageStatus"])(newMessage.status);
                            }
                            newMessage.read = true;
                        }
                        return newMessage;
                    }), messageData: oldState.messageData.map((messageRaw) => {
                        const newMessageRaw = Object.assign({}, messageRaw);
                        if (newMessageRaw.MessageId === id) {
                            newMessageRaw.Status = Object(_normalizers_message_normalizer__WEBPACK_IMPORTED_MODULE_9__["setReadMessageStatus"])(newMessageRaw.Status);
                        }
                        return newMessageRaw;
                    }) })));
            }
        });
    }
    markMessageAsRead(ctx, { message }) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const status = Object(_normalizers_message_normalizer__WEBPACK_IMPORTED_MODULE_9__["setReadMessageStatus"])(message.status);
            this.http.post(this.constructMessageUrl(message.id, status), {}, { headers: this.headers }).subscribe({
                next: (response) => {
                    console.log('Response', response);
                }
            });
        });
    }
    GetMessages(ctx) {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const messages = ctx.getState().messages || ((_a = ctx.getState().messageData) === null || _a === void 0 ? void 0 : _a.map(messageRaw => (Object(_normalizers_message_normalizer__WEBPACK_IMPORTED_MODULE_9__["normalizeMessageContent"])(messageRaw))));
            if (!messages) {
                return ctx.dispatch(new _actions_message_actions__WEBPACK_IMPORTED_MODULE_8__["GetMessageEnrichment"]());
            }
        });
    }
    GetMessageEnrichment(ctx) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            ctx.patchState(Object.assign({}, Object(src_app_interfaces_api_status__WEBPACK_IMPORTED_MODULE_5__["updateApiStatus"])({ isFetching: true })));
            this.http.get(this.constructUrl(), { headers: this.headers }).subscribe({
                next: (data) => ctx.dispatch(new _actions_message_actions__WEBPACK_IMPORTED_MODULE_8__["HandleMessageEnrichmentResponse"](data)),
                error: (e) => {
                    ctx.dispatch(new _actions_message_actions__WEBPACK_IMPORTED_MODULE_8__["HandleMessageEnrichmentResponse"]([]));
                },
            });
        });
    }
    handleMessageEnrichmentResponse(ctx, { messageResponse }) {
        ctx.setState((oldState) => (Object.assign(Object.assign(Object.assign({}, oldState), Object(src_app_interfaces_api_status__WEBPACK_IMPORTED_MODULE_5__["updateApiStatus"])({ isInitialised: true })), { messageData: messageResponse, messages: messageResponse.map(_normalizers_message_normalizer__WEBPACK_IMPORTED_MODULE_9__["normalizeMessageContent"]) })));
        ctx.dispatch(new _actions_message_actions__WEBPACK_IMPORTED_MODULE_8__["GetMessages"]());
    }
    clearState(ctx) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            ctx.setState(Object.assign({}, defaultState));
        });
    }
    constructUrl() {
        const { participantId } = this.store.selectSnapshot(_participant_state__WEBPACK_IMPORTED_MODULE_11__["ParticipantState"]);
        return `${src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].endpoints.root}${src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].endpoints.student}/${participantId}/${src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].endpoints.message}`;
    }
    constructMessageUrl(id, status) {
        const { participantId } = this.store.selectSnapshot(_participant_state__WEBPACK_IMPORTED_MODULE_11__["ParticipantState"]);
        return `${src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].endpoints.root}${src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].endpoints.student}/${participantId}/${src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].endpoints.message}/${id}/${src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].endpoints.messageStatus}?status=${status}`;
    }
};
MessageState.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Store"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Action"])(_actions_message_actions__WEBPACK_IMPORTED_MODULE_8__["ToggleMessagesIsActive"])
], MessageState.prototype, "toggleMessagesIsActive", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Action"])(_actions_message_actions__WEBPACK_IMPORTED_MODULE_8__["SwitchMessage"])
], MessageState.prototype, "switchMessage", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Action"])(_actions_message_actions__WEBPACK_IMPORTED_MODULE_8__["MarkMessageAsRead"])
], MessageState.prototype, "markMessageAsRead", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Action"])(_actions_message_actions__WEBPACK_IMPORTED_MODULE_8__["GetMessages"])
], MessageState.prototype, "GetMessages", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Action"])(_actions_message_actions__WEBPACK_IMPORTED_MODULE_8__["GetMessageEnrichment"])
], MessageState.prototype, "GetMessageEnrichment", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Action"])(_actions_message_actions__WEBPACK_IMPORTED_MODULE_8__["HandleMessageEnrichmentResponse"])
], MessageState.prototype, "handleMessageEnrichmentResponse", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Action"])(_actions_global_actions__WEBPACK_IMPORTED_MODULE_7__["ClearAllStates"])
], MessageState.prototype, "clearState", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Selector"])()
], MessageState, "apiStatus", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Selector"])()
], MessageState, "isMessagesActive", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Selector"])()
], MessageState, "selectedMessage", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Selector"])()
], MessageState, "messages", null);
MessageState = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["State"])({
        name: 'Message',
        defaults: Object.assign({}, defaultState),
    }),
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], MessageState);



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\n  <ion-tabs>\n  </ion-tabs>\n</ion-app>\n");

/***/ }),

/***/ "WUhp":
/*!*************************************************************************!*\
  !*** ./src/app/store/state/normalizers/student-admission.normalizer.ts ***!
  \*************************************************************************/
/*! exports provided: normalizeAdmission */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeAdmission", function() { return normalizeAdmission; });
const normalizeAdmission = (raw) => ({
    educationProgramID: raw.EducationProgramID,
    educationProgramName: raw.EducationProgramName,
    educationProgramYear: raw.StudyYear,
    educationProgramAcademicPeriod: raw.AcademicPeriod,
    educationProgramDescription: raw.EducationProgramDescription,
    guid: raw.Guid,
    regStatus: raw.RegStatus,
    regStatusText: raw.RegStatusText,
    regType: raw.RegType,
    regTypeText: raw.RegTypeText,
    admissionStatusText: raw.AdmissionStatusText,
    admissionLock: raw.AdmissionLock,
    contextColor: '' + raw.ContextualColor,
});


/***/ }),

/***/ "Xeri":
/*!**************************************************!*\
  !*** ./src/app/store/state/data-upload.state.ts ***!
  \**************************************************/
/*! exports provided: defaultState, DataUploadState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultState", function() { return defaultState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataUploadState", function() { return DataUploadState; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ "AcyG");
/* harmony import */ var _actions_data_upload_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/data-upload.actions */ "NTGt");




const defaultState = {
    formData: null,
    completed: null,
    errors: [],
};
let DataUploadState = class DataUploadState {
    static dataUploadState(stream) {
        return stream;
    }
    setDataUploadState(ctx, payload) {
        ctx.setState((oldState) => (Object.assign(Object.assign({}, oldState), payload)));
    }
    clearDataUploadState(ctx) {
        ctx.setState((oldState) => (Object.assign(Object.assign({}, oldState), { completed: null, formData: null, errors: [] })));
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Action"])(_actions_data_upload_actions__WEBPACK_IMPORTED_MODULE_3__["SetDataUploadState"])
], DataUploadState.prototype, "setDataUploadState", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Action"])(_actions_data_upload_actions__WEBPACK_IMPORTED_MODULE_3__["ClearDataUploadState"])
], DataUploadState.prototype, "clearDataUploadState", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Selector"])()
], DataUploadState, "dataUploadState", null);
DataUploadState = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["State"])({
        name: 'dataUpload',
        defaults: Object.assign({}, defaultState),
    }),
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], DataUploadState);



/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: HttpLoaderFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ngxs_devtools_plugin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngxs/devtools-plugin */ "xuHu");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngxs/store */ "AcyG");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/http-loader */ "mqiu");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/storage-angular */ "jSNZ");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "m/P+");
/* harmony import */ var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/onesignal/ngx */ "wljF");
/* harmony import */ var _ionic_native_safari_view_controller_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic-native/safari-view-controller/ngx */ "zPEN");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _store_state__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./store/state */ "fwvt");



















// TO ALLOW AHEAD OF TIME COMPILATION
function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
}
let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_15__["AppComponent"]],
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_15__["AppComponent"]],
        entryComponents: [],
        imports: [
            _app_routing_module__WEBPACK_IMPORTED_MODULE_16__["AppRoutingModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_10__["FontAwesomeModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"].forRoot(),
            _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_11__["IonicStorageModule"].forRoot(),
            _ngxs_store__WEBPACK_IMPORTED_MODULE_7__["NgxsModule"].forRoot(_store_state__WEBPACK_IMPORTED_MODULE_18__["CombinedState"], {
                developmentMode: !src_environments_environment__WEBPACK_IMPORTED_MODULE_17__["environment"].production,
            }),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"].forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateLoader"],
                    useFactory: (HttpLoaderFactory),
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]],
                },
            }),
            _ngxs_devtools_plugin__WEBPACK_IMPORTED_MODULE_6__["NgxsReduxDevtoolsPluginModule"].forRoot(),
        ],
        providers: [
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicRouteStrategy"] },
            _ionic_native_safari_view_controller_ngx__WEBPACK_IMPORTED_MODULE_14__["SafariViewController"],
            _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_12__["InAppBrowser"],
            _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_13__["OneSignal"],
        ],
    })
], AppModule);



/***/ }),

/***/ "bE18":
/*!**********************************************!*\
  !*** ./src/app/store/state/content.state.ts ***!
  \**********************************************/
/*! exports provided: defaultState, ContentState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultState", function() { return defaultState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentState", function() { return ContentState; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngxs/store */ "AcyG");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _actions_content_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions/content.actions */ "chTE");
/* harmony import */ var _actions_global_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../actions/global.actions */ "3mek");
/* harmony import */ var _normalizers_content_normalizer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./normalizers/content.normalizer */ "TVAo");
/* harmony import */ var _actions_student_audits_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../actions/student-audits.actions */ "10JN");
/* harmony import */ var src_app_store_actions_student_audit_documents_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/store/actions/student-audit-documents.actions */ "AI2x");
/* harmony import */ var src_app_interfaces_api_status__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/interfaces/api-status */ "5mCX");
/* harmony import */ var _participant_state__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./participant.state */ "CKn5");
/* harmony import */ var _student_admissions_state__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./student-admissions.state */ "qlWn");
/* harmony import */ var _actions_student_admissions_actions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../actions/student-admissions.actions */ "Jz07");
/* harmony import */ var _services_platform_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../services/platform.service */ "EktT");















const defaultState = {
    nl: null,
    en: null,
    renderedContent: null,
    hasApiError: false,
    hasConnectionError: false,
    isFetching: false,
    isInitialised: false,
};
let ContentState = class ContentState {
    constructor(http, store, platform) {
        this.http = http;
        this.store = store;
        this.platform = platform;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            apiKey: src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiKey
        });
    }
    static apiStatus({ isFetching, isInitialised, hasApiError, hasConnectionError, }) {
        return {
            isFetching,
            isInitialised,
            hasApiError,
            hasConnectionError,
        };
    }
    static renderedContent({ renderedContent, }) {
        return renderedContent;
    }
    switchContentView(ctx) {
        const state = ctx.getState();
        const languageSpecificEnrichment = state[this.localData.languageCode];
        if (!languageSpecificEnrichment) {
            ctx.dispatch(new _actions_content_actions__WEBPACK_IMPORTED_MODULE_5__["GetTaskEnrichments"]());
            return;
        }
        const requestedContent = this.searchContent(state);
        ctx.setState((oldState) => (Object.assign(Object.assign({}, oldState), { renderedContent: requestedContent })));
        ctx.dispatch(new _actions_student_audits_actions__WEBPACK_IMPORTED_MODULE_8__["SwitchAuditView"](languageSpecificEnrichment));
    }
    getTaskEnrichments(ctx) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            ctx.patchState(Object.assign({}, Object(src_app_interfaces_api_status__WEBPACK_IMPORTED_MODULE_10__["updateApiStatus"])({ isFetching: true })));
            this.http.get(this.constructUrl(), { headers: this.headers }).subscribe({
                next: (data) => ctx.dispatch(new _actions_content_actions__WEBPACK_IMPORTED_MODULE_5__["HandleTaskEnrichmentResponse"](data)),
                error: (e) => ctx.dispatch(new _actions_content_actions__WEBPACK_IMPORTED_MODULE_5__["HandleFailureEnrichmentResponse"](e)),
            });
        });
    }
    handleTaskEnrichmentResponse(ctx, { enrichment }) {
        const { languageCode } = this.localData;
        ctx.setState((oldState) => (Object.assign(Object.assign(Object.assign({}, oldState), Object(src_app_interfaces_api_status__WEBPACK_IMPORTED_MODULE_10__["updateApiStatus"])({ isInitialised: true })), { [languageCode]: [...enrichment.data] })));
        ctx.dispatch(new _actions_content_actions__WEBPACK_IMPORTED_MODULE_5__["SwitchContentView"]());
    }
    handleFailureEnrichmentResponse(ctx, { response }) {
        console.warn(response);
        const { languageCode } = this.localData;
        if (response.status === 500) {
            ctx.setState((oldState) => (Object.assign(Object.assign(Object.assign({}, oldState), Object(src_app_interfaces_api_status__WEBPACK_IMPORTED_MODULE_10__["updateApiStatus"])({ isInitialised: true })), { [languageCode]: [] })));
        }
    }
    locationChangeRequest(ctx, { locationRequest }) {
        if (locationRequest.admission) {
            // SET THE ADMISSION
            this.store.dispatch(new _actions_student_admissions_actions__WEBPACK_IMPORTED_MODULE_13__["SetSelectedGuid"](locationRequest.admission.guid, locationRequest.admission.status, locationRequest.admission.locked, locationRequest.admission.contextColor));
            if (locationRequest.audit) {
                // SET THE AUDIT
                this.store.dispatch(new _actions_student_admissions_actions__WEBPACK_IMPORTED_MODULE_13__["SetSelectedNodeId"](locationRequest.audit));
                this.store.dispatch(new _actions_student_audits_actions__WEBPACK_IMPORTED_MODULE_8__["SetSelectedStudentAuditId"](locationRequest.audit));
                this.store.dispatch(new src_app_store_actions_student_audit_documents_actions__WEBPACK_IMPORTED_MODULE_9__["SetSelectedStudentAuditId"](locationRequest.audit));
            }
            // SHOW THE CONTENT
            this.store.dispatch(new _actions_student_audits_actions__WEBPACK_IMPORTED_MODULE_8__["SetShowAuditContent"](true));
            if (this.platform.isWeb()) {
                this.store.dispatch(new _actions_content_actions__WEBPACK_IMPORTED_MODULE_5__["SwitchContentView"]());
            }
        }
    }
    clearState(ctx) {
        ctx.setState(Object.assign({}, defaultState));
    }
    get localData() {
        const { studentAudits, studentAdmissions, participant, } = this.store.snapshot();
        const { selectedAuditId } = studentAudits;
        const { selectedGuid } = studentAdmissions;
        const { participantId, languageCode } = participant;
        return {
            selectedAuditId,
            selectedGuid,
            participantId,
            languageCode,
        };
    }
    searchContent(state) {
        const { languageCode, selectedAuditId } = this.localData;
        return state[languageCode]
            .filter((c) => c.attributes.field_audit_node_id === selectedAuditId)
            .map(_normalizers_content_normalizer__WEBPACK_IMPORTED_MODULE_7__["normalizeContent"])[0];
    }
    constructUrl() {
        const { languageCode } = this.localData;
        const { participantId } = this.store.selectSnapshot(_participant_state__WEBPACK_IMPORTED_MODULE_11__["ParticipantState"]);
        const { selectedGuid } = this.store.selectSnapshot(_student_admissions_state__WEBPACK_IMPORTED_MODULE_12__["StudentAdmissionsState"]);
        return `${src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].endpoints.root + src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].endpoints.student + '/' + participantId + '/' + src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].endpoints.audits}/${selectedGuid}/${src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].endpoints.enrichment}?lang=${languageCode}`;
    }
};
ContentState.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"] },
    { type: _services_platform_service__WEBPACK_IMPORTED_MODULE_14__["PlatformService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Action"])(_actions_content_actions__WEBPACK_IMPORTED_MODULE_5__["SwitchContentView"])
], ContentState.prototype, "switchContentView", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Action"])(_actions_content_actions__WEBPACK_IMPORTED_MODULE_5__["GetTaskEnrichments"])
], ContentState.prototype, "getTaskEnrichments", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Action"])(_actions_content_actions__WEBPACK_IMPORTED_MODULE_5__["HandleTaskEnrichmentResponse"])
], ContentState.prototype, "handleTaskEnrichmentResponse", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Action"])(_actions_content_actions__WEBPACK_IMPORTED_MODULE_5__["HandleFailureEnrichmentResponse"])
], ContentState.prototype, "handleFailureEnrichmentResponse", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Action"])(_actions_content_actions__WEBPACK_IMPORTED_MODULE_5__["LocationChangeRequest"])
], ContentState.prototype, "locationChangeRequest", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Action"])(_actions_global_actions__WEBPACK_IMPORTED_MODULE_6__["ClearAllStates"])
], ContentState.prototype, "clearState", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Selector"])()
], ContentState, "apiStatus", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Selector"])()
], ContentState, "renderedContent", null);
ContentState = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["State"])({
        name: 'content',
        defaults: Object.assign({}, defaultState),
    }),
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], ContentState);



/***/ }),

/***/ "bTLy":
/*!******************************************************!*\
  !*** ./src/app/store/actions/participant.actions.ts ***!
  \******************************************************/
/*! exports provided: InitialiseParticipantData, SetParticipantData, SetLanguageCode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitialiseParticipantData", function() { return InitialiseParticipantData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetParticipantData", function() { return SetParticipantData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetLanguageCode", function() { return SetLanguageCode; });
class InitialiseParticipantData {
    constructor() { }
}
InitialiseParticipantData.type = '[route guards] InitialiseParticipantData';
class SetParticipantData {
    constructor(participantData) {
        this.participantData = participantData;
    }
}
SetParticipantData.type = '[Login component] SetParticipantData';
class SetLanguageCode {
    constructor(languageCode) {
        this.languageCode = languageCode;
    }
}
SetLanguageCode.type = '[Top Menu component] SetLanguage';


/***/ }),

/***/ "chTE":
/*!**************************************************!*\
  !*** ./src/app/store/actions/content.actions.ts ***!
  \**************************************************/
/*! exports provided: GetTaskEnrichments, HandleTaskEnrichmentResponse, HandleFailureEnrichmentResponse, GetHelpEnrichment, HandleHelpEnrichmentResponse, SwitchHelp, ToggleHelpIsActive, GetMenuEnrichment, HandleMenuEnrichmentResponse, SwitchMenu, SwitchContentView, LocationChangeRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetTaskEnrichments", function() { return GetTaskEnrichments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HandleTaskEnrichmentResponse", function() { return HandleTaskEnrichmentResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HandleFailureEnrichmentResponse", function() { return HandleFailureEnrichmentResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetHelpEnrichment", function() { return GetHelpEnrichment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HandleHelpEnrichmentResponse", function() { return HandleHelpEnrichmentResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwitchHelp", function() { return SwitchHelp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleHelpIsActive", function() { return ToggleHelpIsActive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetMenuEnrichment", function() { return GetMenuEnrichment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HandleMenuEnrichmentResponse", function() { return HandleMenuEnrichmentResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwitchMenu", function() { return SwitchMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwitchContentView", function() { return SwitchContentView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationChangeRequest", function() { return LocationChangeRequest; });
class GetTaskEnrichments {
    constructor() { }
}
GetTaskEnrichments.type = '[Content component] GetTaskEnrichments';
class HandleTaskEnrichmentResponse {
    constructor(enrichment) {
        this.enrichment = enrichment;
    }
}
HandleTaskEnrichmentResponse.type = '[Content State] HandleTaskEnrichmentResponse';
class HandleFailureEnrichmentResponse {
    constructor(response) {
        this.response = response;
    }
}
HandleFailureEnrichmentResponse.type = '[Content State] HandleFailureEnrichmentResponse';
class GetHelpEnrichment {
    constructor() { }
}
GetHelpEnrichment.type = '[Help State] GetHelpEnrichment';
class HandleHelpEnrichmentResponse {
    constructor(enrichment) {
        this.enrichment = enrichment;
    }
}
HandleHelpEnrichmentResponse.type = '[Help State] HandleHelpEnrichmentResponse';
class SwitchHelp {
    constructor() { }
}
SwitchHelp.type = '[Help State] SwitchHelp';
class ToggleHelpIsActive {
    constructor() { }
}
ToggleHelpIsActive.type = '[Help State] ToggleHelpIsActive';
class GetMenuEnrichment {
    constructor() { }
}
GetMenuEnrichment.type = '[Menu State] GetMenuEnrichment';
class HandleMenuEnrichmentResponse {
    constructor(enrichment) {
        this.enrichment = enrichment;
    }
}
HandleMenuEnrichmentResponse.type = '[Menu State] HandleMenuEnrichmentResponse';
class SwitchMenu {
    constructor() { }
}
SwitchMenu.type = '[Menu State] SwitchMenu';
class SwitchContentView {
    constructor() { }
}
SwitchContentView.type = '[Content State | Language Popover | Student Audit Groups Component] SwitchContentView';
class LocationChangeRequest {
    constructor(locationRequest) {
        this.locationRequest = locationRequest;
    }
}
LocationChangeRequest.type = '[Content State] LocationChangeRequest';


/***/ }),

/***/ "eFHV":
/*!**************************************************!*\
  !*** ./src/app/store/actions/message.actions.ts ***!
  \**************************************************/
/*! exports provided: GetMessages, GetMessagesByAdmission, GetMessageEnrichment, HandleMessageEnrichmentResponse, SwitchMessage, MarkMessageAsRead, ToggleMessagesIsActive */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetMessages", function() { return GetMessages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetMessagesByAdmission", function() { return GetMessagesByAdmission; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetMessageEnrichment", function() { return GetMessageEnrichment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HandleMessageEnrichmentResponse", function() { return HandleMessageEnrichmentResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwitchMessage", function() { return SwitchMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkMessageAsRead", function() { return MarkMessageAsRead; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleMessagesIsActive", function() { return ToggleMessagesIsActive; });
class GetMessages {
    constructor() { }
}
GetMessages.type = '[Message State] GetMessages';
class GetMessagesByAdmission {
    constructor(admissionId) {
        this.admissionId = admissionId;
    }
}
GetMessagesByAdmission.type = '[Message State] GetMessagesByAdmission';
class GetMessageEnrichment {
    constructor() { }
}
GetMessageEnrichment.type = '[Message State] GetMessageEnrichment';
class HandleMessageEnrichmentResponse {
    constructor(messageResponse) {
        this.messageResponse = messageResponse;
    }
}
HandleMessageEnrichmentResponse.type = '[Message State] HandleMessageEnrichmentResponse';
class SwitchMessage {
    constructor(id) {
        this.id = id;
    }
}
SwitchMessage.type = '[Message State] SwitchMessage';
class MarkMessageAsRead {
    constructor(message) {
        this.message = message;
    }
}
MarkMessageAsRead.type = '[Message State] MarkMessageAsRead';
class ToggleMessagesIsActive {
    constructor() { }
}
ToggleMessagesIsActive.type = '[Message State] ToggleMessagesIsActive';


/***/ }),

/***/ "fwvt":
/*!**************************************!*\
  !*** ./src/app/store/state/index.ts ***!
  \**************************************/
/*! exports provided: CombinedState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CombinedState", function() { return CombinedState; });
/* harmony import */ var _content_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content.state */ "bE18");
/* harmony import */ var _data_upload_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data-upload.state */ "Xeri");
/* harmony import */ var _participant_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./participant.state */ "CKn5");
/* harmony import */ var _status_texts_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./status-texts.state */ "HizE");
/* harmony import */ var _help_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./help.state */ "H9s2");
/* harmony import */ var _menu_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu.state */ "Acgq");
/* harmony import */ var _student_admissions_state__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./student-admissions.state */ "qlWn");
/* harmony import */ var _student_audit_documents_state__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./student-audit-documents.state */ "VWKi");
/* harmony import */ var _student_audits_state__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./student-audits.state */ "qGxV");
/* harmony import */ var _message_state__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./message.state */ "Vnf1");










const CombinedState = [
    _content_state__WEBPACK_IMPORTED_MODULE_0__["ContentState"],
    _participant_state__WEBPACK_IMPORTED_MODULE_2__["ParticipantState"],
    _status_texts_state__WEBPACK_IMPORTED_MODULE_3__["StatusTextsState"],
    _help_state__WEBPACK_IMPORTED_MODULE_4__["HelpState"],
    _menu_state__WEBPACK_IMPORTED_MODULE_5__["MenuState"],
    _message_state__WEBPACK_IMPORTED_MODULE_9__["MessageState"],
    _student_admissions_state__WEBPACK_IMPORTED_MODULE_6__["StudentAdmissionsState"],
    _student_audits_state__WEBPACK_IMPORTED_MODULE_8__["StudentAuditsState"],
    _student_audit_documents_state__WEBPACK_IMPORTED_MODULE_7__["StudentAuditDocumentsState"],
    _data_upload_state__WEBPACK_IMPORTED_MODULE_1__["DataUploadState"]
];


/***/ }),

/***/ "gmmD":
/*!***********************************************************!*\
  !*** ./src/app/guards/can-activate-public-route.guard.ts ***!
  \***********************************************************/
/*! exports provided: CanActivatePublicRouteGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanActivatePublicRouteGuard", function() { return CanActivatePublicRouteGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngxs/store */ "AcyG");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/storage.service */ "n90K");





let CanActivatePublicRouteGuard = class CanActivatePublicRouteGuard {
    constructor(router, storageService, store) {
        this.router = router;
        this.storageService = storageService;
        this.store = store;
    }
    canActivate(route, state) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const hasValidAccessToken = yield this.storageService.hasValidAccessToken();
            if (hasValidAccessToken) {
                this.router.navigate(['/', 'home']);
                return false;
            }
            return true;
        });
    }
};
CanActivatePublicRouteGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"] },
    { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }
];
CanActivatePublicRouteGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], CanActivatePublicRouteGuard);



/***/ }),

/***/ "hCTH":
/*!*******************************************************!*\
  !*** ./src/app/store/actions/status-texts.actions.ts ***!
  \*******************************************************/
/*! exports provided: ClearAllStates, GetStatusTexts, HandleAuditStatusResponse, SwitchStatusTexts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClearAllStates", function() { return ClearAllStates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetStatusTexts", function() { return GetStatusTexts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HandleAuditStatusResponse", function() { return HandleAuditStatusResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwitchStatusTexts", function() { return SwitchStatusTexts; });
class ClearAllStates {
    constructor() { }
}
ClearAllStates.type = '[Logout Button] ClearAllStates';
class GetStatusTexts {
    constructor() { }
}
GetStatusTexts.type = '[Content State] GetStatusTexts';
class HandleAuditStatusResponse {
    constructor(response, lang) {
        this.response = response;
        this.lang = lang;
    }
}
HandleAuditStatusResponse.type = '[Status Texts State] HandleAuditStatusResponse';
class SwitchStatusTexts {
    constructor() { }
}
SwitchStatusTexts.type = '[Status Texts State] SwitchStatusTexts';


/***/ }),

/***/ "kLfG":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		"dUtr",
		"common",
		0
	],
	"./ion-alert.entry.js": [
		"Q8AI",
		"common",
		1
	],
	"./ion-app_8.entry.js": [
		"hgI1",
		"common",
		2
	],
	"./ion-avatar_3.entry.js": [
		"CfoV",
		"common",
		3
	],
	"./ion-back-button.entry.js": [
		"Nt02",
		"common",
		4
	],
	"./ion-backdrop.entry.js": [
		"Q2Bp",
		5
	],
	"./ion-button_2.entry.js": [
		"0Pbj",
		"common",
		6
	],
	"./ion-card_5.entry.js": [
		"ydQj",
		"common",
		7
	],
	"./ion-checkbox.entry.js": [
		"4fMi",
		"common",
		8
	],
	"./ion-chip.entry.js": [
		"czK9",
		"common",
		9
	],
	"./ion-col_3.entry.js": [
		"/CAe",
		10
	],
	"./ion-datetime_3.entry.js": [
		"WgF3",
		"common",
		11
	],
	"./ion-fab_3.entry.js": [
		"uQcF",
		"common",
		12
	],
	"./ion-img.entry.js": [
		"wHD8",
		13
	],
	"./ion-infinite-scroll_2.entry.js": [
		"2lz6",
		14
	],
	"./ion-input.entry.js": [
		"ercB",
		"common",
		15
	],
	"./ion-item-option_3.entry.js": [
		"MGMP",
		"common",
		16
	],
	"./ion-item_8.entry.js": [
		"9bur",
		"common",
		17
	],
	"./ion-loading.entry.js": [
		"cABk",
		"common",
		18
	],
	"./ion-menu_3.entry.js": [
		"kyFE",
		"common",
		19
	],
	"./ion-modal.entry.js": [
		"TvZU",
		"common",
		20
	],
	"./ion-nav_2.entry.js": [
		"vnES",
		"common",
		21
	],
	"./ion-popover.entry.js": [
		"qCuA",
		"common",
		22
	],
	"./ion-progress-bar.entry.js": [
		"0tOe",
		"common",
		23
	],
	"./ion-radio_2.entry.js": [
		"h11V",
		"common",
		24
	],
	"./ion-range.entry.js": [
		"XGij",
		"common",
		25
	],
	"./ion-refresher_2.entry.js": [
		"nYbb",
		"common",
		26
	],
	"./ion-reorder_2.entry.js": [
		"smMY",
		"common",
		27
	],
	"./ion-ripple-effect.entry.js": [
		"STjf",
		28
	],
	"./ion-route_4.entry.js": [
		"k5eQ",
		"common",
		29
	],
	"./ion-searchbar.entry.js": [
		"OR5t",
		"common",
		30
	],
	"./ion-segment_2.entry.js": [
		"fSgp",
		"common",
		31
	],
	"./ion-select_3.entry.js": [
		"lfGF",
		"common",
		32
	],
	"./ion-slide_2.entry.js": [
		"5xYT",
		33
	],
	"./ion-spinner.entry.js": [
		"nI0H",
		"common",
		34
	],
	"./ion-split-pane.entry.js": [
		"NAQR",
		35
	],
	"./ion-tab-bar_2.entry.js": [
		"knkW",
		"common",
		36
	],
	"./ion-tab_2.entry.js": [
		"TpdJ",
		"common",
		37
	],
	"./ion-text.entry.js": [
		"ISmu",
		"common",
		38
	],
	"./ion-textarea.entry.js": [
		"U7LX",
		"common",
		39
	],
	"./ion-toast.entry.js": [
		"L3sA",
		"common",
		40
	],
	"./ion-toggle.entry.js": [
		"IUOf",
		"common",
		41
	],
	"./ion-virtual-scroll.entry.js": [
		"8Mb5",
		42
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "kLfG";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "n90K":
/*!*********************************************!*\
  !*** ./src/app/services/storage.service.ts ***!
  \*********************************************/
/*! exports provided: StorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageService", function() { return StorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "fwsW");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngxs/store */ "AcyG");
/* harmony import */ var src_app_enums_language__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/enums/language */ "zpKt");
/* harmony import */ var _store_actions_participant_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/actions/participant.actions */ "bTLy");






let StorageService = class StorageService {
    constructor(storage, store) {
        this.storage = storage;
        this.store = store;
    }
    initStorage() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.storage.create();
        });
    }
    getStorageData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const promises = [
                this.storage.get('lang'),
                this.storage.get('participantId'),
                this.storage.get('sssoId'),
            ];
            const [languageCode, participantId, sssoId] = yield Promise.all(promises);
            return {
                languageCode,
                participantId,
                sssoId,
            };
        });
    }
    initializeStoreData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.storage.create();
            const { languageCode, participantId, sssoId } = yield this.getStorageData();
            const participantAction = new _store_actions_participant_actions__WEBPACK_IMPORTED_MODULE_5__["SetParticipantData"]({ participantId, sssoId });
            const languageAction = new _store_actions_participant_actions__WEBPACK_IMPORTED_MODULE_5__["SetLanguageCode"](languageCode || src_app_enums_language__WEBPACK_IMPORTED_MODULE_4__["LanguageCode"].EN);
            if (participantId && sssoId) {
                this.store.dispatch(participantAction);
            }
            // INITIALIZES HELP/STATUSTEXT/MENU SO LESS CALLS HAPPEN
            this.store.dispatch(languageAction);
        });
    }
    hasValidAccessToken() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const promises = [
                this.storage.get('sssoId'),
                this.storage.get('participantId'),
            ];
            const [ssoId, participantId] = yield Promise.all(promises);
            return ssoId && participantId;
        });
    }
    setStorageData({ participantId, sssoId, }) {
        this.storage.set('participantId', participantId);
        this.storage.set('sssoId', sssoId);
    }
    setLanguageCode(lang) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.storage.set('lang', lang);
        });
    }
    getLanguageCode() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.storage.get('lang');
        });
    }
    getParticipantId() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.storage.get('participantId');
        });
    }
    clearStorage() {
        this.storage.clear();
    }
};
StorageService.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"] },
    { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }
];
StorageService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], StorageService);



/***/ }),

/***/ "qGxV":
/*!*****************************************************!*\
  !*** ./src/app/store/state/student-audits.state.ts ***!
  \*****************************************************/
/*! exports provided: StudentAuditsState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentAuditsState", function() { return StudentAuditsState; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngxs/store */ "AcyG");
/* harmony import */ var src_app_interfaces_api_status__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/interfaces/api-status */ "5mCX");
/* harmony import */ var src_app_models_student_audit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/models/student-audit */ "G4S2");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _actions_content_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../actions/content.actions */ "chTE");
/* harmony import */ var _actions_global_actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../actions/global.actions */ "3mek");
/* harmony import */ var _actions_student_audits_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../actions/student-audits.actions */ "10JN");
/* harmony import */ var _normalizers_student_audit_normalizer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./normalizers/student-audit.normalizer */ "SWcY");
/* harmony import */ var _participant_state__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./participant.state */ "CKn5");
/* harmony import */ var _student_admissions_state__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./student-admissions.state */ "qlWn");















const defaultState = {
    auditGroups: [],
    auditGroupsRaw: [],
    hasApiError: false,
    hasConnectionError: false,
    isFetching: false,
    isInitialised: false,
    selectedAuditId: '',
    showAuditContent: false,
};
let StudentAuditsState = class StudentAuditsState {
    constructor(http, router, store, zone, location) {
        this.http = http;
        this.router = router;
        this.store = store;
        this.zone = zone;
        this.location = location;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            apiKey: src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].apiKey
        });
    }
    static apiStatus({ isFetching, isInitialised, hasApiError, hasConnectionError, }) {
        return {
            isFetching,
            isInitialised,
            hasApiError,
            hasConnectionError,
        };
    }
    static auditGroups({ auditGroups }) {
        return auditGroups;
    }
    static showAuditContent({ showAuditContent, }) {
        return showAuditContent;
    }
    static selectedAudit({ auditGroups, selectedAuditId, }) {
        const [studentAudit] = auditGroups
            .flatMap(({ studentAudits }) => studentAudits)
            .filter(({ id }) => id === selectedAuditId);
        return studentAudit;
    }
    getStudentAudits(ctx) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            ctx.patchState(Object.assign({}, Object(src_app_interfaces_api_status__WEBPACK_IMPORTED_MODULE_6__["updateApiStatus"])({ isFetching: true })));
            this.http.get(this.constructUrl(), { headers: this.headers }).subscribe({
                next: (data) => {
                    ctx.dispatch(new _actions_student_audits_actions__WEBPACK_IMPORTED_MODULE_11__["HandleAuditsResponse"](data));
                },
                error: (e) => {
                    console.warn(e.error.Message);
                    this.zone.run(() => {
                        this.router.navigate(['/', 'logout']);
                    });
                },
            });
        });
    }
    handleAuditsResponse(ctx, { data }) {
        const { selectedNodeId, selectedGuid } = this.store.selectSnapshot(_student_admissions_state__WEBPACK_IMPORTED_MODULE_14__["StudentAdmissionsState"]);
        const audits = [].concat(...data.map(auditGroup => auditGroup === null || auditGroup === void 0 ? void 0 : auditGroup.StudentAudits));
        let audit = selectedNodeId ? audits.filter(audit => audit.ID === selectedNodeId)[0] : data[0].StudentAudits[0];
        if (data[0].Categ === "empty") {
            // Handle no Audit data for admission
            data[0].StudentAudits = [src_app_models_student_audit__WEBPACK_IMPORTED_MODULE_7__["EmptyAudit"]];
            audit = src_app_models_student_audit__WEBPACK_IMPORTED_MODULE_7__["EmptyAudit"];
        }
        ctx.setState((oldState) => (Object.assign(Object.assign({}, oldState), { selectedAuditId: audit.ID, auditGroupsRaw: data })));
        ctx.dispatch(new _actions_content_actions__WEBPACK_IMPORTED_MODULE_9__["SwitchContentView"]());
        this.location.go('home/' + selectedGuid + '/' + audit.ID);
    }
    setSelectedStudentAuditId(ctx, { id }) {
        ctx.setState((oldState) => (Object.assign(Object.assign({}, oldState), { selectedAuditId: id, showAuditContent: true })));
        const { selectedGuid } = this.store.selectSnapshot(_student_admissions_state__WEBPACK_IMPORTED_MODULE_14__["StudentAdmissionsState"]);
        this.location.go('home/' + selectedGuid + '/' + id);
    }
    setShowAuditContent(ctx, { show }) {
        ctx.patchState({ showAuditContent: show });
    }
    SwitchAuditView(ctx, { taskEnrichments }) {
        const { auditGroupsRaw } = ctx.getState();
        ctx.setState((oldState) => (Object.assign(Object.assign(Object.assign({}, oldState), Object(src_app_interfaces_api_status__WEBPACK_IMPORTED_MODULE_6__["updateApiStatus"])({ isInitialised: true })), { showAuditContent: false, auditGroups: auditGroupsRaw.map((group) => Object(_normalizers_student_audit_normalizer__WEBPACK_IMPORTED_MODULE_12__["normalizeAuditGroup"])(group, taskEnrichments)) })));
    }
    clearState(ctx) {
        ctx.setState(Object.assign({}, defaultState));
    }
    constructUrl() {
        const { participantId } = this.store.selectSnapshot(_participant_state__WEBPACK_IMPORTED_MODULE_13__["ParticipantState"]);
        const { selectedGuid } = this.store.selectSnapshot(_student_admissions_state__WEBPACK_IMPORTED_MODULE_14__["StudentAdmissionsState"]);
        return `${src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].endpoints.root + src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].endpoints.student + '/' + participantId + '/' + src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].endpoints.audits}/${selectedGuid}`;
    }
};
StudentAuditsState.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Store"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Action"])(_actions_student_audits_actions__WEBPACK_IMPORTED_MODULE_11__["GetStudentAudits"])
], StudentAuditsState.prototype, "getStudentAudits", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Action"])(_actions_student_audits_actions__WEBPACK_IMPORTED_MODULE_11__["HandleAuditsResponse"])
], StudentAuditsState.prototype, "handleAuditsResponse", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Action"])(_actions_student_audits_actions__WEBPACK_IMPORTED_MODULE_11__["SetSelectedStudentAuditId"])
], StudentAuditsState.prototype, "setSelectedStudentAuditId", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Action"])(_actions_student_audits_actions__WEBPACK_IMPORTED_MODULE_11__["SetShowAuditContent"])
], StudentAuditsState.prototype, "setShowAuditContent", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Action"])(_actions_student_audits_actions__WEBPACK_IMPORTED_MODULE_11__["SwitchAuditView"])
], StudentAuditsState.prototype, "SwitchAuditView", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Action"])(_actions_global_actions__WEBPACK_IMPORTED_MODULE_10__["ClearAllStates"])
], StudentAuditsState.prototype, "clearState", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Selector"])()
], StudentAuditsState, "apiStatus", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Selector"])()
], StudentAuditsState, "auditGroups", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Selector"])()
], StudentAuditsState, "showAuditContent", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Selector"])()
], StudentAuditsState, "selectedAudit", null);
StudentAuditsState = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["State"])({
        name: 'studentAudits',
        defaults: Object.assign({}, defaultState),
    }),
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])()
], StudentAuditsState);



/***/ }),

/***/ "qlWn":
/*!*********************************************************!*\
  !*** ./src/app/store/state/student-admissions.state.ts ***!
  \*********************************************************/
/*! exports provided: StudentAdmissionsState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentAdmissionsState", function() { return StudentAdmissionsState; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngxs/store */ "AcyG");
/* harmony import */ var src_app_interfaces_api_status__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/interfaces/api-status */ "5mCX");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _actions_global_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../actions/global.actions */ "3mek");
/* harmony import */ var _actions_student_admissions_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../actions/student-admissions.actions */ "Jz07");
/* harmony import */ var _normalizers_student_admission_normalizer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./normalizers/student-admission.normalizer */ "WUhp");
/* harmony import */ var _participant_state__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./participant.state */ "CKn5");












const defaultState = {
    hasApiError: false,
    hasConnectionError: false,
    isFetching: false,
    isInitialised: false,
    selectedGuid: '',
    selectedNodeId: '',
    selectedAdmissionLocked: false,
    selectedAdmissionContextColor: null,
    studentAdmissionsRaw: [],
};
let StudentAdmissionsState = class StudentAdmissionsState {
    constructor(store, http, router, location) {
        this.store = store;
        this.http = http;
        this.router = router;
        this.location = location;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            apiKey: src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiKey
        });
    }
    static apiStatus({ hasApiError, hasConnectionError, isFetching, isInitialised, }) {
        return {
            hasApiError,
            hasConnectionError,
            isFetching,
            isInitialised,
        };
    }
    static selectedGuid({ selectedGuid }) {
        return selectedGuid;
    }
    static selectedNodeId({ selectedNodeId }) {
        return selectedNodeId;
    }
    static selectedAdmissionStatus({ selectedAdmissionStatus }) {
        return selectedAdmissionStatus;
    }
    static selectedAdmissionContextColor({ selectedAdmissionContextColor }) {
        return selectedAdmissionContextColor;
    }
    static selectedAdmissionLocked({ selectedAdmissionLocked }) {
        return selectedAdmissionLocked;
    }
    static studentAdmissions({ studentAdmissionsRaw, }) {
        const normalized = studentAdmissionsRaw.map((s) => Object(_normalizers_student_admission_normalizer__WEBPACK_IMPORTED_MODULE_10__["normalizeAdmission"])(s));
        return normalized;
    }
    setSelectedNodeId(ctx, { id }) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            ctx.patchState({ selectedNodeId: id });
        });
    }
    getStudentAdmissions(ctx, { guid }) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            ctx.patchState(Object.assign({}, Object(src_app_interfaces_api_status__WEBPACK_IMPORTED_MODULE_6__["updateApiStatus"])({ isFetching: true })));
            this.http.get(this.constructUrl(), { headers: this.headers }).subscribe({
                next: (data) => ctx.dispatch(new _actions_student_admissions_actions__WEBPACK_IMPORTED_MODULE_9__["HandleAdmissionsResponse"](data, guid)),
                error: (e) => {
                    console.warn(e.message || e);
                    this.router.navigate(['/', 'logout']);
                },
            });
        });
    }
    handleAdmissionsResponse(ctx, { data, guid }) {
        const studentAdmission = guid ? data.filter(admission => admission.Guid === guid)[0] : data[0];
        ctx.setState(() => (Object.assign(Object.assign({}, Object(src_app_interfaces_api_status__WEBPACK_IMPORTED_MODULE_6__["updateApiStatus"])({ isInitialised: true })), { studentAdmissionsRaw: data, selectedGuid: studentAdmission.Guid, selectedAdmissionStatus: studentAdmission.AdmissionStatusText, selectedAdmissionLocked: studentAdmission.AdmissionLock, selectedAdmissionContextColor: '' + studentAdmission.ContextualColor })));
        this.location.go('home/' + studentAdmission.Guid);
    }
    setSelectedGuid(ctx, action) {
        ctx.setState((oldState) => (Object.assign(Object.assign({}, oldState), { selectedGuid: action.guid, selectedAdmissionStatus: action.status, selectedAdmissionLocked: action.locked, selectedAdmissionContextColor: action.contextColor })));
        this.location.go('home/' + action.guid);
    }
    clearState(ctx) {
        ctx.setState(Object.assign({}, defaultState));
    }
    constructUrl() {
        const id = this.store.selectSnapshot(_participant_state__WEBPACK_IMPORTED_MODULE_11__["ParticipantState"].participantId);
        return `${src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].endpoints.root + src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].endpoints.student}/${id}/${src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].endpoints.admissions}`;
    }
};
StudentAdmissionsState.ctorParameters = () => [
    { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Store"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Action"])(_actions_student_admissions_actions__WEBPACK_IMPORTED_MODULE_9__["SetSelectedNodeId"])
], StudentAdmissionsState.prototype, "setSelectedNodeId", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Action"])(_actions_student_admissions_actions__WEBPACK_IMPORTED_MODULE_9__["GetStudentAdmissions"])
], StudentAdmissionsState.prototype, "getStudentAdmissions", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Action"])(_actions_student_admissions_actions__WEBPACK_IMPORTED_MODULE_9__["HandleAdmissionsResponse"])
], StudentAdmissionsState.prototype, "handleAdmissionsResponse", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Action"])(_actions_student_admissions_actions__WEBPACK_IMPORTED_MODULE_9__["SetSelectedGuid"])
], StudentAdmissionsState.prototype, "setSelectedGuid", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Action"])(_actions_global_actions__WEBPACK_IMPORTED_MODULE_8__["ClearAllStates"])
], StudentAdmissionsState.prototype, "clearState", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Selector"])()
], StudentAdmissionsState, "apiStatus", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Selector"])()
], StudentAdmissionsState, "selectedGuid", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Selector"])()
], StudentAdmissionsState, "selectedNodeId", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Selector"])()
], StudentAdmissionsState, "selectedAdmissionStatus", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Selector"])()
], StudentAdmissionsState, "selectedAdmissionContextColor", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Selector"])()
], StudentAdmissionsState, "selectedAdmissionLocked", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Selector"])()
], StudentAdmissionsState, "studentAdmissions", null);
StudentAdmissionsState = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["State"])({
        name: 'studentAdmissions',
        defaults: Object.assign({}, defaultState),
    }),
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])()
], StudentAdmissionsState);



/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _guards_can_activate_protected_route_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./guards/can-activate-protected-route.guard */ "QhiC");
/* harmony import */ var _guards_can_activate_public_route_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./guards/can-activate-public-route.guard */ "gmmD");





const routes = [
    {
        path: '',
        children: [
            {
                path: 'auth',
                canActivate: [_guards_can_activate_public_route_guard__WEBPACK_IMPORTED_MODULE_4__["CanActivatePublicRouteGuard"]],
                loadChildren: () => Promise.all(/*! import() | modules-auth-auth-page-module */[__webpack_require__.e("default~modules-auth-auth-page-module~modules-home-home-page-module~modules-login-login-page-module~~f6fb3fd2"), __webpack_require__.e("modules-auth-auth-page-module")]).then(__webpack_require__.bind(null, /*! ./modules/auth/auth.page.module */ "LODU")).then((m) => m.AuthPageModule),
            },
            {
                path: 'login',
                canActivate: [_guards_can_activate_public_route_guard__WEBPACK_IMPORTED_MODULE_4__["CanActivatePublicRouteGuard"]],
                loadChildren: () => Promise.all(/*! import() | modules-login-login-page-module */[__webpack_require__.e("default~modules-auth-auth-page-module~modules-home-home-page-module~modules-login-login-page-module~~f6fb3fd2"), __webpack_require__.e("modules-login-login-page-module")]).then(__webpack_require__.bind(null, /*! ./modules/login/login.page.module */ "Rq89")).then((m) => m.LoginPageModule),
            },
            {
                path: 'home',
                canActivate: [_guards_can_activate_protected_route_guard__WEBPACK_IMPORTED_MODULE_3__["CanActivateProtectedRouteGuard"]],
                loadChildren: () => Promise.all(/*! import() | modules-home-home-page-module */[__webpack_require__.e("default~modules-auth-auth-page-module~modules-home-home-page-module~modules-login-login-page-module~~f6fb3fd2"), __webpack_require__.e("modules-home-home-page-module")]).then(__webpack_require__.bind(null, /*! ./modules/home/home.page.module */ "rZFE")).then((m) => m.HomePageModule),
            },
            {
                path: 'logout',
                loadChildren: () => Promise.all(/*! import() | modules-logout-logout-page-module */[__webpack_require__.e("default~modules-auth-auth-page-module~modules-home-home-page-module~modules-login-login-page-module~~f6fb3fd2"), __webpack_require__.e("modules-logout-logout-page-module")]).then(__webpack_require__.bind(null, /*! ./modules/logout/logout.page.module */ "tn5m")).then((m) => m.LogoutPageModule),
            },
            {
                path: '**',
                redirectTo: 'login',
            },
        ],
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"] }),
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AppRoutingModule);



/***/ }),

/***/ "xG0Y":
/*!***************************************!*\
  !*** ./src/app/interfaces/message.ts ***!
  \***************************************/
/*! exports provided: MessageStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageStatus", function() { return MessageStatus; });
var MessageStatus;
(function (MessageStatus) {
    MessageStatus["UNREAD_NORMAL_PRIO"] = "1";
    MessageStatus["READ_NORMAL_PRIO"] = "2";
    MessageStatus["UNREAD_HIGH_PRIO"] = "3";
    MessageStatus["READ_HIGH_PRIO"] = "4";
})(MessageStatus || (MessageStatus = {}));


/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".native-app-navigation {\n  border: none;\n  height: 58px;\n}\n.native-app-navigation ion-badge {\n  font-size: 0.75rem;\n}\n.native-app-navigation ion-badge.notification-count {\n  background: var(--ion-color-danger);\n  width: var(--mu-spacing-md);\n  height: var(--mu-spacing-md);\n  margin-left: calc(-1 * var(--mu-spacing-md));\n  margin-top: calc(-1 * var(--mu-spacing-xxs));\n}\n.native-app-navigation fa-icon,\n.native-app-navigation ion-label {\n  color: var(--ion-color-secondary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7QUFDRjtBQUFFO0VBQ0Usa0JBQUE7QUFFSjtBQURJO0VBQ0UsbUNBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNENBQUE7RUFDQSw0Q0FBQTtBQUdOO0FBQ0U7O0VBRUUsaUNBQUE7QUFDSiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF0aXZlLWFwcC1uYXZpZ2F0aW9uIHtcbiAgYm9yZGVyOiBub25lO1xuICBoZWlnaHQ6IDU4cHg7XG4gIGlvbi1iYWRnZSB7XG4gICAgZm9udC1zaXplOiAwLjc1cmVtO1xuICAgICYubm90aWZpY2F0aW9uLWNvdW50IHtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xuICAgICAgd2lkdGg6IHZhcigtLW11LXNwYWNpbmctbWQpO1xuICAgICAgaGVpZ2h0OiB2YXIoLS1tdS1zcGFjaW5nLW1kKTtcbiAgICAgIG1hcmdpbi1sZWZ0OiBjYWxjKC0xICogdmFyKC0tbXUtc3BhY2luZy1tZCkpO1xuICAgICAgbWFyZ2luLXRvcDogY2FsYygtMSAqIHZhcigtLW11LXNwYWNpbmcteHhzKSk7XG4gICAgfVxuICB9XG5cbiAgZmEtaWNvbixcbiAgaW9uLWxhYmVsIHtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ }),

/***/ "zpKt":
/*!***********************************!*\
  !*** ./src/app/enums/language.ts ***!
  \***********************************/
/*! exports provided: LanguageCode, Language */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageCode", function() { return LanguageCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Language", function() { return Language; });
var LanguageCode;
(function (LanguageCode) {
    LanguageCode["NL"] = "nl";
    LanguageCode["EN"] = "en";
})(LanguageCode || (LanguageCode = {}));
var Language;
(function (Language) {
    Language["NL"] = "Nederlands";
    Language["EN"] = "English";
})(Language || (Language = {}));


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map