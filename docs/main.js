(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\fedeg\OneDrive\Documenti\progetti di test\FedMice.github.io\src\main.ts */"zUnb");


/***/ }),

/***/ "5ey7":
/*!**************************************************************!*\
  !*** ./src/assets/i18n lazy ^\.\/.*\.json$ namespace object ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./en.json": [
		"amrp",
		2
	],
	"./it.json": [
		"E8Es",
		3
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
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__.t(id, 3);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "5ey7";
module.exports = webpackAsyncContext;

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
    baseUrl: 'http://localhost:8090',
    authUrl: 'http://localhost:8282/auth',
    clientId: 'spa',
    securityOn: false
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

/***/ "IsIh":
/*!*********************************************************!*\
  !*** ./src/app/shared/interceptor/error.interceptor.ts ***!
  \*********************************************************/
/*! exports provided: WebInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebInterceptor", function() { return WebInterceptor; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_utilities_services_toastr_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/utilities/services/toastr.service */ "N4PE");
/* harmony import */ var voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! voila2-runtime-ng */ "WGmK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");








class WebInterceptor {
    constructor(toasterService, securityService) {
        this.toasterService = toasterService;
        this.securityService = securityService;
    }
    intercept(req, next) {
        const authReq = req.clone({
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + sessionStorage.getItem("token")
            })
        });
        return next.handle(authReq).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((error) => {
            if (error.status == 401) {
                this.securityService.logOut();
            }
            console.error("Error.....", error.error);
            this.toasterService.showDanger(error.message);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
        }));
    }
}
WebInterceptor.ɵfac = function WebInterceptor_Factory(t) { return new (t || WebInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](src_app_utilities_services_toastr_service__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_4__["SecurityService"])); };
WebInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: WebInterceptor, factory: WebInterceptor.ɵfac });


/***/ }),

/***/ "JBJG":
/*!**********************************!*\
  !*** ./src/app/mapper.config.ts ***!
  \**********************************/
/*! exports provided: configureMapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configureMapper", function() { return configureMapper; });
/* harmony import */ var _pages_voila2sample_ms_demo_fe_mapper_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/voila2sample-ms-demo-fe/mapper.config */ "Yf4p");

function configureMapper() {
    Object(_pages_voila2sample_ms_demo_fe_mapper_config__WEBPACK_IMPORTED_MODULE_0__["mapperDemoConfig"])();
}


/***/ }),

/***/ "N4PE":
/*!******************************************************!*\
  !*** ./src/app/utilities/services/toastr.service.ts ***!
  \******************************************************/
/*! exports provided: ToastrService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastrService", function() { return ToastrService; });
/* harmony import */ var blazing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! blazing */ "pYbk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



class ToastrService {
    constructor(toastrService) {
        this.toastrService = toastrService;
        this._DANGER_DURATION = 500000;
    }
    showDanger(message) {
        this.toastrService.showDanger(message, { duration: this._DANGER_DURATION });
    }
    showSuccess(message) {
        this.toastrService.showSuccess(message);
    }
    showInfo(message) {
        this.toastrService.showInfo(message);
    }
    showWarning(message) {
        this.toastrService.showWarning(message);
    }
    showToast(message, config) {
        this.toastrService.showToast(message, config);
    }
    /**
     * Show tosat by severity.
     *
     * @param message
     * @param severity
     */
    showToastBySeverity(message, severity) {
        switch (severity) {
            case 'FATAL':
            case 'ERROR': {
                this.showDanger(message);
                break;
            }
            case 'INFO': {
                this.showSuccess(message);
                break;
            }
            case 'WARING': {
                this.showWarning(message);
                break;
            }
            default: {
                this.showInfo(message);
                break;
            }
        }
    }
}
ToastrService.ɵfac = function ToastrService_Factory(t) { return new (t || ToastrService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](blazing__WEBPACK_IMPORTED_MODULE_0__["BzToastrService"])); };
ToastrService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ToastrService, factory: ToastrService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "OgeL":
/*!************************************************************************************************!*\
  !*** ./src/app/pages/voila2sample-ms-demo-fe/assets/i18n lazy ^\.\/.*\.json$ namespace object ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./en.json": [
		"x+N2",
		0
	],
	"./it.json": [
		"ftia",
		1
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
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__.t(id, 3);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "OgeL";
module.exports = webpackAsyncContext;

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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_common_locales_it__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/locales/it */ "1IWC");
/* harmony import */ var _angular_common_locales_it__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_it__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! voila2-runtime-ng */ "WGmK");
/* harmony import */ var _security_privilege__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./security/privilege */ "wAVz");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _mapper_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mapper.config */ "JBJG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");










Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["registerLocaleData"])(_angular_common_locales_it__WEBPACK_IMPORTED_MODULE_1___default.a);
class AppComponent {
    constructor(securityService, router) {
        this.securityService = securityService;
        this.router = router;
    }
    ngOnInit() {
        Object(_mapper_config__WEBPACK_IMPORTED_MODULE_5__["configureMapper"])();
        Object(_security_privilege__WEBPACK_IMPORTED_MODULE_3__["buildPrivilegesEnum"])();
        if (src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].securityOn) {
            this.securityService.manageToken();
            this.securityService.setPrivilages();
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_2__["SecurityService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "T8YS":
/*!*************************************!*\
  !*** ./src/app/translate.config.ts ***!
  \*************************************/
/*! exports provided: LazyTranslateLoader, I18NFiles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LazyTranslateLoader", function() { return LazyTranslateLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I18NFiles", function() { return I18NFiles; });
/* harmony import */ var translate_ng__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! translate-ng */ "JfpY");

class LazyTranslateLoader {
    getTranslation(lang) {
        return translate_ng__WEBPACK_IMPORTED_MODULE_0__["TranslateService"].getTranslationsFiles(I18NFiles(lang));
    }
}
function I18NFiles(lang) {
    return [
        __webpack_require__("5ey7")(`./${lang}.json`),
        __webpack_require__("OgeL")(`./${lang}.json`),
    ];
}


/***/ }),

/***/ "Yf4p":
/*!****************************************************************!*\
  !*** ./src/app/pages/voila2sample-ms-demo-fe/mapper.config.ts ***!
  \****************************************************************/
/*! exports provided: mapperDemoConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapperDemoConfig", function() { return mapperDemoConfig; });
/* harmony import */ var blazing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! blazing */ "pYbk");
/* harmony import */ var src_app_utilities_function_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/utilities/function/helper */ "iHp/");
/* harmony import */ var _shared_base_base_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/base/base.helper */ "tHpT");



function mapperDemoConfig() {
    const bzAutoMapper = Object(_shared_base_base_helper__WEBPACK_IMPORTED_MODULE_2__["inizializeMapper"])();
    bzAutoMapper.createMap('Cliente', 'ICliente');
    //Basta sfruttare questa mappa, al backend si deve restituire un oggeto di tipo Date.
    bzAutoMapper.createMap('Prodotto', 'IProdotto')
        .forMember('dataScadenza', { value: src_app_utilities_function_helper__WEBPACK_IMPORTED_MODULE_1__["convertIntoDate"], operation: blazing__WEBPACK_IMPORTED_MODULE_0__["IMapOperation"].CHANGE })
        .forMember('lastModifiedDate', { value: src_app_utilities_function_helper__WEBPACK_IMPORTED_MODULE_1__["convertIntoDate"], operation: blazing__WEBPACK_IMPORTED_MODULE_0__["IMapOperation"].CHANGE })
        .forMember('createdDate', { value: src_app_utilities_function_helper__WEBPACK_IMPORTED_MODULE_1__["convertIntoDate"], operation: blazing__WEBPACK_IMPORTED_MODULE_0__["IMapOperation"].CHANGE });
    bzAutoMapper.createMap('Ordine', 'IOrdine');
    bzAutoMapper.createMap('RigaOrdine', 'IRigaOrdine');
    bzAutoMapper.createMap('TipoOrdine', 'ITipoOrdine');
}


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _shared_base_base_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/base/base.component */ "nOOO");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var blazing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! blazing */ "pYbk");
/* harmony import */ var _utilities_dialog_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utilities/dialog/confirm-dialog/confirm-dialog.component */ "iIqq");
/* harmony import */ var _shared_interceptor_error_interceptor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/interceptor/error.interceptor */ "IsIh");
/* harmony import */ var translate_ng__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! translate-ng */ "JfpY");
/* harmony import */ var _security_security_config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./security/security.config */ "n8Yp");
/* harmony import */ var _translate_config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./translate.config */ "T8YS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ "fXoL");















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ providers: [
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"], useClass: _shared_interceptor_error_interceptor__WEBPACK_IMPORTED_MODULE_8__["WebInterceptor"], multi: true },
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"], useClass: blazing__WEBPACK_IMPORTED_MODULE_6__["BzHttpProgressBarInterceptor"], multi: true },
        Object(_security_security_config__WEBPACK_IMPORTED_MODULE_10__["manageSecurityConfig"])()
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            blazing__WEBPACK_IMPORTED_MODULE_6__["BzCardModule"],
            blazing__WEBPACK_IMPORTED_MODULE_6__["BzButtonModule"],
            blazing__WEBPACK_IMPORTED_MODULE_6__["BzThemeModule"].forRoot(),
            translate_ng__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"].forRoot({
                loader: {
                    provide: translate_ng__WEBPACK_IMPORTED_MODULE_9__["TranslateLoader"],
                    useClass: _translate_config__WEBPACK_IMPORTED_MODULE_11__["LazyTranslateLoader"],
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]]
                }
            })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _shared_base_base_component__WEBPACK_IMPORTED_MODULE_4__["BaseComponent"],
        _utilities_dialog_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_7__["ConfirmDialogComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
        blazing__WEBPACK_IMPORTED_MODULE_6__["BzCardModule"],
        blazing__WEBPACK_IMPORTED_MODULE_6__["BzButtonModule"], blazing__WEBPACK_IMPORTED_MODULE_6__["BzThemeModule"], translate_ng__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"]] }); })();


/***/ }),

/***/ "iHp/":
/*!**********************************************!*\
  !*** ./src/app/utilities/function/helper.ts ***!
  \**********************************************/
/*! exports provided: convertIntoDate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertIntoDate", function() { return convertIntoDate; });
/**
 * Convert value into date object.
 *
 * @author Federico Gambardella<federico.gambardella@micegroup.it>
 * @param value
 * @returns
 */
function convertIntoDate(value) {
    if (value)
        return new Date(value);
    return value;
}


/***/ }),

/***/ "iIqq":
/*!*****************************************************************************!*\
  !*** ./src/app/utilities/dialog/confirm-dialog/confirm-dialog.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ConfirmDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmDialogComponent", function() { return ConfirmDialogComponent; });
/* harmony import */ var blazing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! blazing */ "pYbk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



class ConfirmDialogComponent {
    constructor(dialogService) {
        this.dialogService = dialogService;
        this.cardSize = blazing__WEBPACK_IMPORTED_MODULE_0__["CardSize"].SMALL;
        this.title = '';
        this.message = '';
        this.icon = '';
    }
    ngOnInit() {
    }
}
ConfirmDialogComponent.ɵfac = function ConfirmDialogComponent_Factory(t) { return new (t || ConfirmDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](blazing__WEBPACK_IMPORTED_MODULE_0__["BzDialogService"])); };
ConfirmDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ConfirmDialogComponent, selectors: [["app-confirm-dialog"]], decls: 15, vars: 6, consts: [["global", "", 3, "size"], [1, "title"], [1, "fa", "fa-times", "fk-pointer", "fk-right", 3, "click"], [1, "fk-center"], ["bzButton", "", "status", "primary", 1, "button-right", 3, "click"], ["bzButton", "", "status", "primary", 1, "fk-right", 3, "click"]], template: function ConfirmDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "bz-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "bz-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ConfirmDialogComponent_Template_i_click_5_listener() { return ctx.dialogService.closeDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "bz-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "bz-card-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ConfirmDialogComponent_Template_button_click_11_listener() { return ctx.dialogService.closeDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Annulla");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ConfirmDialogComponent_Template_button_click_13_listener() { return ctx.dialogService.sendData(true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Ok");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("size", ctx.cardSize);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("header-icon ", ctx.icon, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.message);
    } }, directives: [blazing__WEBPACK_IMPORTED_MODULE_0__["BzCardComponent"], blazing__WEBPACK_IMPORTED_MODULE_0__["BzCardHeaderComponent"], blazing__WEBPACK_IMPORTED_MODULE_0__["BzCardContentComponent"], blazing__WEBPACK_IMPORTED_MODULE_0__["BzCardFooterComponent"], blazing__WEBPACK_IMPORTED_MODULE_0__["BzButtonDirective"]], styles: [".header-icon[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  font-size: 30px;\n}\n\n.title[_ngcontent-%COMP%] {\n  font-size: 25px;\n}\n\n.button-right[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNvbmZpcm0tZGlhbG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtBQUNKIiwiZmlsZSI6ImNvbmZpcm0tZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci1pY29uIHtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG5cclxuLnRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxufVxyXG5cclxuLmJ1dHRvbi1yaWdodCB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6MTBweDtcclxufSJdfQ== */"] });


/***/ }),

/***/ "n8Yp":
/*!*********************************************!*\
  !*** ./src/app/security/security.config.ts ***!
  \*********************************************/
/*! exports provided: securityConfig, getAuthGuards, manageSecurityConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "securityConfig", function() { return securityConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAuthGuards", function() { return getAuthGuards; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "manageSecurityConfig", function() { return manageSecurityConfig; });
/* harmony import */ var voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! voila2-runtime-ng */ "WGmK");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var blazing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! blazing */ "pYbk");




function securityConfig(securityInstance) {
    return () => securityInstance.init({
        config: {
            url: src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].authUrl,
            realm: 'voila2sample',
            clientId: src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].clientId,
        },
        initOptions: {
            onLoad: 'login-required'
        },
    });
}
function getAuthGuards() {
    if (src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].securityOn)
        return [voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]];
}
function manageSecurityConfig() {
    if (src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].securityOn)
        return {
            provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__["APP_INITIALIZER"],
            useFactory: securityConfig,
            multi: true,
            deps: [voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_0__["SecurityService"]],
        };
    return Object(blazing__WEBPACK_IMPORTED_MODULE_3__["getFakeProvider"])();
}


/***/ }),

/***/ "nOOO":
/*!***********************************************!*\
  !*** ./src/app/shared/base/base.component.ts ***!
  \***********************************************/
/*! exports provided: BaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseComponent", function() { return BaseComponent; });
/* harmony import */ var voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! voila2-runtime-ng */ "WGmK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class BaseComponent extends voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_0__["GenericComponent"] {
}
BaseComponent.ɵfac = function BaseComponent_Factory(t) { return ɵBaseComponent_BaseFactory(t || BaseComponent); };
BaseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: BaseComponent, selectors: [["app-base"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 0, vars: 0, template: function BaseComponent_Template(rf, ctx) { }, encapsulation: 2 });
const ɵBaseComponent_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](BaseComponent);


/***/ }),

/***/ "q+7z":
/*!*****************************************************************!*\
  !*** ./src/app/pages/voila2sample-ms-demo-fe/privilege.enum.ts ***!
  \*****************************************************************/
/*! exports provided: DemoPrivileges */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoPrivileges", function() { return DemoPrivileges; });
var DemoPrivileges;
(function (DemoPrivileges) {
    /// Cliente
    DemoPrivileges["CLIENTE_FIND_PAGINATED"] = "8014100";
    DemoPrivileges["CLIENTE_FIND_BY_ID"] = "8014101";
    DemoPrivileges["CLIENTE_CREATE"] = "8014102";
    DemoPrivileges["CLIENTE_UPDATE"] = "8014103";
    DemoPrivileges["CLIENTE_DELETE"] = "8014104";
    DemoPrivileges["CLIENTE_PDF_REPORT"] = "8014105";
    DemoPrivileges["CLIENTE_FIND_BY_THE_ORDINE_OBJECT_KEY"] = "8014106";
    /// Prodotto
    DemoPrivileges["PRODOTTO_FIND_PAGINATED"] = "8014200";
    DemoPrivileges["PRODOTTO_FIND_BY_ID"] = "8014201";
    DemoPrivileges["PRODOTTO_CREATE"] = "8014202";
    DemoPrivileges["PRODOTTO_UPDATE"] = "8014203";
    DemoPrivileges["PRODOTTO_DELETE"] = "8014204";
    DemoPrivileges["PRODOTTO_PDF_REPORT"] = "8014205";
    DemoPrivileges["PRODOTTO_FIND_BY_THE_RIGA_ORDINE_OBJECT_KEY"] = "8014206";
    /// Ordine
    DemoPrivileges["ORDINE_FIND_PAGINATED"] = "8014300";
    DemoPrivileges["ORDINE_FIND_BY_ID"] = "8014301";
    DemoPrivileges["ORDINE_CREATE"] = "8014302";
    DemoPrivileges["ORDINE_UPDATE"] = "8014303";
    DemoPrivileges["ORDINE_DELETE"] = "8014304";
    DemoPrivileges["ORDINE_PDF_REPORT"] = "8014305";
    DemoPrivileges["ORDINE_FIND_BY_CLIENTE"] = "8014306";
    DemoPrivileges["ORDINE_FIND_BY_TIPO_ORDINE"] = "8014307";
    DemoPrivileges["ORDINE_FIND_BY_ORDINE_PADRE"] = "8014308";
    DemoPrivileges["ORDINE_FIND_BY_THE_RIGA_ORDINE_OBJECT_KEY"] = "8014309";
    DemoPrivileges["ORDINE_FIND_BY_THE_ORDINE_FIGLI_OBJECT_KEY"] = "80143010";
    /// RigaOrdine
    DemoPrivileges["RIGA_ORDINE_FIND_PAGINATED"] = "8014400";
    DemoPrivileges["RIGA_ORDINE_FIND_BY_ID"] = "8014401";
    DemoPrivileges["RIGA_ORDINE_CREATE"] = "8014402";
    DemoPrivileges["RIGA_ORDINE_UPDATE"] = "8014403";
    DemoPrivileges["RIGA_ORDINE_DELETE"] = "8014404";
    DemoPrivileges["RIGA_ORDINE_PDF_REPORT"] = "8014405";
    DemoPrivileges["RIGA_ORDINE_FIND_BY_ORDINE"] = "8014406";
    DemoPrivileges["RIGA_ORDINE_FIND_BY_PRODOTTO"] = "8014407";
    /// TipoOrdine
    DemoPrivileges["TIPO_ORDINE_FIND_PAGINATED"] = "8014500";
    DemoPrivileges["TIPO_ORDINE_FIND_BY_ID"] = "8014501";
    DemoPrivileges["TIPO_ORDINE_CREATE"] = "8014502";
    DemoPrivileges["TIPO_ORDINE_UPDATE"] = "8014503";
    DemoPrivileges["TIPO_ORDINE_DELETE"] = "8014504";
    DemoPrivileges["TIPO_ORDINE_PDF_REPORT"] = "8014505";
    DemoPrivileges["TIPO_ORDINE_FIND_BY_THE_ORDINE_OBJECT_KEY"] = "8014506";
})(DemoPrivileges || (DemoPrivileges = {}));


/***/ }),

/***/ "tHpT":
/*!********************************************!*\
  !*** ./src/app/shared/base/base.helper.ts ***!
  \********************************************/
/*! exports provided: fillOptions, inizializeMapper, setTabObjectKey, useMapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fillOptions", function() { return fillOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inizializeMapper", function() { return inizializeMapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setTabObjectKey", function() { return setTabObjectKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMapper", function() { return useMapper; });
/* harmony import */ var blazing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! blazing */ "pYbk");
/* harmony import */ var voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! voila2-runtime-ng */ "WGmK");


/**
 * Fill options.
 *
 * @author Federico Gambardella<federico.gambardella@micegroup.it>
 * @param pageStatus
 * @param object
 */
function fillOptions(pageStatus, object) {
    let options;
    if (Object(voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_1__["isInViewMode"])(pageStatus)) {
        options = blazing__WEBPACK_IMPORTED_MODULE_0__["PaginationUtils"].setOptionsForSpring(object);
    }
    else
        options = undefined;
    return options;
}
/**
 * Inizilize mapper.
 *
 * @returns
 */
function inizializeMapper() {
    return new blazing__WEBPACK_IMPORTED_MODULE_0__["BzAutoMapper"]();
}
/**
 * Set tab objectKey.
 *
 * @author Federico Gambardella<federico.gambardella@micegroup.it>
 * @param source
 * @param instance
 * @param prop
 * @param modelName
 */
function setTabObjectKey(source, instance, prop, modelName) {
    for (let child of blazing__WEBPACK_IMPORTED_MODULE_0__["ObjectUtils"].resolveProps(source, prop)) {
        blazing__WEBPACK_IMPORTED_MODULE_0__["ObjectUtils"].resolveProps(child, modelName, instance.getObjectKey());
    }
}
/**
 * Use BzAutoMapper.
 *
 * @author Federico Gambardella<federico.gambardella@micegroup.it>
 * @param firstKey
 * @param secondKey
 * @param sourceObject
 * @param destObject
 * @returns
 */
function useMapper(firstKey, secondKey, sourceObject, destObject) {
    const mapper = blazing__WEBPACK_IMPORTED_MODULE_0__["BzAutoMapper"].getInstance();
    return mapper.map(firstKey, secondKey, sourceObject, destObject);
}


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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [
    {
        path: "pages",
        loadChildren: () => __webpack_require__.e(/*! import() | pages-pages-module */ "pages-pages-module").then(__webpack_require__.bind(null, /*! ./pages/pages.module */ "dgmN")).then((m) => m.PagesModule),
    },
    { path: '', redirectTo: 'pages/home', pathMatch: 'full' },
    { path: '**', redirectTo: 'pages/home', pathMatch: 'full' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, { scrollPositionRestoration: 'top' })], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "wAVz":
/*!***************************************!*\
  !*** ./src/app/security/privilege.ts ***!
  \***************************************/
/*! exports provided: buildPrivilegesEnum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildPrivilegesEnum", function() { return buildPrivilegesEnum; });
/* harmony import */ var blazing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! blazing */ "pYbk");
/* harmony import */ var voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! voila2-runtime-ng */ "WGmK");
/* harmony import */ var _pages_voila2sample_ms_demo_fe_privilege_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/voila2sample-ms-demo-fe/privilege.enum */ "q+7z");



function buildPrivilegesEnum() {
    const privileges = blazing__WEBPACK_IMPORTED_MODULE_0__["ObjectUtils"].merge(_pages_voila2sample_ms_demo_fe_privilege_enum__WEBPACK_IMPORTED_MODULE_2__["DemoPrivileges"]);
    Object(voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_1__["setPrivilegesEnum"])(privileges);
}


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


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

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map