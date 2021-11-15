(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~cliente-cliente-module~ordine-ordine-module~prodotto-prodotto-module~riga-ordine-riga-ordine~9422228b"],{

/***/ "8RJb":
/*!*****************************************************!*\
  !*** ./src/app/utilities/services/route.service.ts ***!
  \*****************************************************/
/*! exports provided: RouteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteService", function() { return RouteService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




class RouteService {
    constructor(injector) {
        this.injector = injector;
    }
    get router() {
        if (!this.routerService)
            this.routerService = this.injector.get(_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]);
        return this.routerService;
    }
    get route() {
        if (!this.routeService)
            this.routeService = this.injector.get(_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]);
        return this.routeService;
    }
    get location() {
        if (!this.locationService)
            this.locationService = this.injector.get(_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]);
        return this.locationService;
    }
}
RouteService.ɵfac = function RouteService_Factory(t) { return new (t || RouteService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"])); };
RouteService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RouteService, factory: RouteService.ɵfac });


/***/ }),

/***/ "AiQM":
/*!****************************************************************************!*\
  !*** ./src/app/pages/voila2sample-ms-demo-fe/ordine/ordine-api.service.ts ***!
  \****************************************************************************/
/*! exports provided: OrdineApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdineApiService", function() { return OrdineApiService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var blazing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! blazing */ "pYbk");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _shared_base_base_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/base/base-api.service */ "GXZf");
/* harmony import */ var src_moc_ordine_ordine_mock_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/moc/ordine/ordine-mock.service */ "Icb1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");









class OrdineApiService extends _shared_base_base_api_service__WEBPACK_IMPORTED_MODULE_3__["BaseApiService"] {
    constructor(httpClient, dateService, ordineMock) {
        super(httpClient, dateService);
        this.ordineMock = ordineMock;
        this.url = "demo/ordine";
    }
    getOrdineByCriteria(options) {
        return this.getEntityListByCriteria(this.url, options);
    }
    addOrdine(ordine) {
        const fixedOrdine = this.stringifyDate(ordine, 'dataOrdine');
        return this.addEntityInstance(fixedOrdine, this.url);
    }
    getOrdineById(id) {
        return this.ordineMock.getOrdine().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((ordineResult) => { return this.convertIntoDate(ordineResult, 'dataOrdine'); }));
    }
    updateOrdine(ordine) {
        const fixedOrdine = this.stringifyDate(ordine, 'dataOrdine');
        return this.updateEntityInstance(fixedOrdine, this.url);
    }
    deleteOrdine(id) {
        return this.deleteEntityInstance(id, this.url);
    }
    getListOrdineByLink(link, options) {
        return this.getEntityListByLink(link, options);
    }
    printPdfReport(id) {
        window.open(this.baseUrl + "/" + this.url + '/pdf/' + id);
    }
}
OrdineApiService.ɵfac = function OrdineApiService_Factory(t) { return new (t || OrdineApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](blazing__WEBPACK_IMPORTED_MODULE_1__["DateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](src_moc_ordine_ordine_mock_service__WEBPACK_IMPORTED_MODULE_4__["OrdineMockService"])); };
OrdineApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: OrdineApiService, factory: OrdineApiService.ɵfac });


/***/ }),

/***/ "GFGE":
/*!*******************************************************!*\
  !*** ./src/app/utilities/pipe/utility-pipe.module.ts ***!
  \*******************************************************/
/*! exports provided: UtilityPipeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilityPipeModule", function() { return UtilityPipeModule; });
/* harmony import */ var _utility_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utility-pipe */ "SWKW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


const PIPE = [
    _utility_pipe__WEBPACK_IMPORTED_MODULE_0__["PageStatusPipe"],
    _utility_pipe__WEBPACK_IMPORTED_MODULE_0__["PermissionPipe"],
    _utility_pipe__WEBPACK_IMPORTED_MODULE_0__["ReadOnlyPipe"]
];
class UtilityPipeModule {
}
UtilityPipeModule.ɵfac = function UtilityPipeModule_Factory(t) { return new (t || UtilityPipeModule)(); };
UtilityPipeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: UtilityPipeModule });
UtilityPipeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](UtilityPipeModule, { declarations: [_utility_pipe__WEBPACK_IMPORTED_MODULE_0__["PageStatusPipe"],
        _utility_pipe__WEBPACK_IMPORTED_MODULE_0__["PermissionPipe"],
        _utility_pipe__WEBPACK_IMPORTED_MODULE_0__["ReadOnlyPipe"]], exports: [_utility_pipe__WEBPACK_IMPORTED_MODULE_0__["PageStatusPipe"],
        _utility_pipe__WEBPACK_IMPORTED_MODULE_0__["PermissionPipe"],
        _utility_pipe__WEBPACK_IMPORTED_MODULE_0__["ReadOnlyPipe"]] }); })();


/***/ }),

/***/ "GXZf":
/*!*************************************************!*\
  !*** ./src/app/shared/base/base-api.service.ts ***!
  \*************************************************/
/*! exports provided: BaseApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseApiService", function() { return BaseApiService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var blazing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! blazing */ "pYbk");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");






class BaseApiService {
    constructor(httpClient, dateService) {
        this.httpClient = httpClient;
        this.dateService = dateService;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl;
    }
    getEntityListByCriteria(url, options) {
        return this.httpClient.get(this.baseUrl + '/' + url, { params: options });
    }
    addEntityInstance(entity, url) {
        return this.httpClient.post(this.baseUrl + '/' + url, this.wrapInApiRequest(entity));
    }
    getEntityInstanceById(id, url) {
        return this.httpClient.get(this.baseUrl + '/' + url + '/' + id);
    }
    updateEntityInstance(entity, url) {
        return this.httpClient.put(this.baseUrl + '/' + url, this.wrapInApiRequest(entity));
    }
    deleteEntityInstance(id, url) {
        return this.httpClient.delete(this.baseUrl + '/' + url + '/' + id);
    }
    getEntityListByLink(link, options) {
        return this.httpClient.get(link, { params: options });
    }
    convertIntoDate(result, property) {
        return this.dateService.convertIntoDate(result, property);
    }
    stringifyDate(entity, property) {
        return this.dateService.stringifyDate(entity, property);
    }
    wrapInApiRequest(entity) {
        return { data: entity };
    }
}
BaseApiService.ɵfac = function BaseApiService_Factory(t) { return new (t || BaseApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](blazing__WEBPACK_IMPORTED_MODULE_1__["DateService"])); };
BaseApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: BaseApiService, factory: BaseApiService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Icb1":
/*!***********************************************!*\
  !*** ./src/moc/ordine/ordine-mock.service.ts ***!
  \***********************************************/
/*! exports provided: OrdineMockService, ORDINI, ORDINE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdineMockService", function() { return OrdineMockService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ORDINI", function() { return ORDINI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ORDINE", function() { return ORDINE; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class OrdineMockService {
    getOrdineList() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(ORDINI);
    }
    getOrdine() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(ORDINE);
    }
}
OrdineMockService.ɵfac = function OrdineMockService_Factory(t) { return new (t || OrdineMockService)(); };
OrdineMockService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: OrdineMockService, factory: OrdineMockService.ɵfac, providedIn: "root" });
const ORDINI = [
    {
        "messages": [],
        "response": {
            "_embedded": {
                "ordineDtoList": [
                    {
                        "objectKey": "1~2020",
                        "objectTitle": "1~2020",
                        "idOrdine": 1,
                        "anno": 2020,
                        "dataOrdine": "2020-12-13",
                        "urgente": true,
                        "ragioneSociale": "dottore",
                        "idTipoOrdine": null,
                        "theClienteObjectTitle": "dottore",
                        "theClienteObjectKey": "dottore",
                        "theTipoOrdineObjectTitle": null,
                        "theTipoOrdineObjectKey": null,
                        "theOrdinePadreObjectTitle": null,
                        "theOrdinePadreObjectKey": null,
                        "ordineKey": {
                            "entityState": "",
                            "idOrdine": 1,
                            "anno": 2020,
                            "updatedEntityState": false,
                            "createdEntityState": false,
                            "deletedEntityState": false
                        },
                        "_links": {
                            "self": [
                                {
                                    "href": "http://localhost:8090/demo/ordine/1~2020"
                                },
                                {
                                    "href": "http://localhost:8090/demo/ordine/1~2020"
                                }
                            ],
                            "theCliente": {
                                "href": "http://localhost:8090/demo/cliente/dottore"
                            },
                            "theRigaOrdine": {
                                "href": "http://localhost:8090/demo/riga-ordine/findByTheOrdine/1~2020"
                            },
                            "theOrdineFigli": {
                                "href": "http://localhost:8090/demo/ordine/findByTheOrdinePadre/1~2020"
                            }
                        }
                    }
                ]
            },
            "_links": {
                "self": {
                    "href": "http://127.0.0.1:8014/demo/ordine?page=0&size=20"
                }
            },
            "page": {
                "size": 20,
                "totalElements": 1,
                "totalPages": 1,
                "number": 0
            }
        },
        "errorDetails": null
    }
];
const ORDINE = {
    "messages": [],
    "response": {
        "objectKey": "1~2020",
        "objectTitle": "1~2020",
        "idOrdine": 1,
        "anno": 2020,
        "dataOrdine": "2020-12-13",
        "urgente": true,
        "ragioneSociale": "dottore",
        "idTipoOrdine": null,
        "theClienteObjectTitle": "dottore",
        "theClienteObjectKey": "dottore",
        "theTipoOrdineObjectTitle": null,
        "theTipoOrdineObjectKey": null,
        "theOrdinePadreObjectTitle": null,
        "theOrdinePadreObjectKey": null,
        "ordineKey": {
            "entityState": "",
            "idOrdine": 1,
            "anno": 2020,
            "updatedEntityState": false,
            "createdEntityState": false,
            "deletedEntityState": false
        },
        "_links": {
            "self": [
                {
                    "href": "http://localhost:8090/demo/ordine/1~2020"
                },
                {
                    "href": "http://localhost:8090/demo/ordine/1~2020"
                }
            ],
            "theCliente": {
                "href": "http://localhost:8090/demo/cliente/dottore"
            },
            "theRigaOrdine": {
                "href": "http://localhost:8090/demo/riga-ordine/findByTheOrdine/1~2020"
            },
            "theOrdineFigli": {
                "href": "http://localhost:8090/demo/ordine/findByTheOrdinePadre/1~2020"
            }
        }
    },
    "errorDetails": null
};


/***/ }),

/***/ "SWKW":
/*!************************************************!*\
  !*** ./src/app/utilities/pipe/utility-pipe.ts ***!
  \************************************************/
/*! exports provided: PageStatusPipe, PermissionPipe, ReadOnlyPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageStatusPipe", function() { return PageStatusPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionPipe", function() { return PermissionPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReadOnlyPipe", function() { return ReadOnlyPipe; });
/* harmony import */ var blazing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! blazing */ "pYbk");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! voila2-runtime-ng */ "WGmK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class PageStatusPipe extends blazing__WEBPACK_IMPORTED_MODULE_0__["IsEqualPipe"] {
}
PageStatusPipe.ɵfac = function PageStatusPipe_Factory(t) { return ɵPageStatusPipe_BaseFactory(t || PageStatusPipe); };
PageStatusPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefinePipe"]({ name: "hasPageStatus", type: PageStatusPipe, pure: true });
const ɵPageStatusPipe_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](PageStatusPipe);
class PermissionPipe {
    transform(element, expectedElementList) {
        if (src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].securityOn)
            return Object(blazing__WEBPACK_IMPORTED_MODULE_0__["isEquals"])(element, expectedElementList);
        return true;
    }
}
PermissionPipe.ɵfac = function PermissionPipe_Factory(t) { return new (t || PermissionPipe)(); };
PermissionPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefinePipe"]({ name: "hasPermission", type: PermissionPipe, pure: true });
class ReadOnlyPipe {
    transform(pageSatus, isReadOnly) {
        if (Object(blazing__WEBPACK_IMPORTED_MODULE_0__["isEquals"])(pageSatus, voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_2__["PageStatus"].NEW) && isReadOnly)
            return false;
        return true;
    }
}
ReadOnlyPipe.ɵfac = function ReadOnlyPipe_Factory(t) { return new (t || ReadOnlyPipe)(); };
ReadOnlyPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefinePipe"]({ name: "isReadOnly", type: ReadOnlyPipe, pure: true });


/***/ }),

/***/ "f4j/":
/*!*******************************************************!*\
  !*** ./src/app/utilities/services/buttons.service.ts ***!
  \*******************************************************/
/*! exports provided: ButtonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonService", function() { return ButtonService; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



class ButtonService {
    constructor(location) {
        this.location = location;
    }
    goBack() {
        this.location.back();
    }
}
ButtonService.ɵfac = function ButtonService_Factory(t) { return new (t || ButtonService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["Location"])); };
ButtonService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ButtonService, factory: ButtonService.ɵfac });


/***/ }),

/***/ "wqBZ":
/*!************************************************************!*\
  !*** ./src/app/utilities/dialog/confirm-dialog.service.ts ***!
  \************************************************************/
/*! exports provided: ConfirmDialogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmDialogService", function() { return ConfirmDialogService; });
/* harmony import */ var blazing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! blazing */ "pYbk");
/* harmony import */ var _confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./confirm-dialog/confirm-dialog.component */ "iIqq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




class ConfirmDialogService {
    constructor(dialogService) {
        this.dialogService = dialogService;
    }
    openConfirmDialog(message, title, icon) {
        const prop = {
            message: message,
            title: title || 'Attenzione',
            icon: icon || 'fa fa-exclamation-triangle'
        };
        return this.dialogService.showDialog(_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_1__["ConfirmDialogComponent"], { properties: prop });
    }
}
ConfirmDialogService.ɵfac = function ConfirmDialogService_Factory(t) { return new (t || ConfirmDialogService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](blazing__WEBPACK_IMPORTED_MODULE_0__["BzDialogService"])); };
ConfirmDialogService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ConfirmDialogService, factory: ConfirmDialogService.ɵfac });


/***/ }),

/***/ "zd5x":
/*!********************************************************!*\
  !*** ./src/app/utilities/services/overlays.service.ts ***!
  \********************************************************/
/*! exports provided: OverlaysService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverlaysService", function() { return OverlaysService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var blazing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! blazing */ "pYbk");
/* harmony import */ var _dialog_confirm_dialog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dialog/confirm-dialog.service */ "wqBZ");
/* harmony import */ var _toastr_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toastr.service */ "N4PE");





class OverlaysService {
    constructor(injector) {
        this.injector = injector;
    }
    get toast() {
        if (!this.toastService)
            this.toastService = this.injector.get(_toastr_service__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]);
        return this.toastService;
    }
    get dialog() {
        if (!this.dialogService)
            this.dialogService = this.injector.get(blazing__WEBPACK_IMPORTED_MODULE_1__["BzDialogService"]);
        return this.dialogService;
    }
    get confirmDialog() {
        if (!this.confirmDialogService)
            this.confirmDialogService = this.injector.get(_dialog_confirm_dialog_service__WEBPACK_IMPORTED_MODULE_2__["ConfirmDialogService"]);
        return this.confirmDialogService;
    }
}
OverlaysService.ɵfac = function OverlaysService_Factory(t) { return new (t || OverlaysService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"])); };
OverlaysService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: OverlaysService, factory: OverlaysService.ɵfac });


/***/ })

}]);
//# sourceMappingURL=default~cliente-cliente-module~ordine-ordine-module~prodotto-prodotto-module~riga-ordine-riga-ordine~9422228b.js.map