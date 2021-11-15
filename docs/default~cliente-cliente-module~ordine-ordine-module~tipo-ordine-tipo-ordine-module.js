(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~cliente-cliente-module~ordine-ordine-module~tipo-ordine-tipo-ordine-module"],{

/***/ "4+27":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/voila2sample-ms-demo-fe/tipo-ordine/tipo-ordine-api.service.ts ***!
  \**************************************************************************************/
/*! exports provided: TipoOrdineApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipoOrdineApiService", function() { return TipoOrdineApiService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var blazing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! blazing */ "pYbk");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _shared_base_base_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/base/base-api.service */ "GXZf");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");







class TipoOrdineApiService extends _shared_base_base_api_service__WEBPACK_IMPORTED_MODULE_3__["BaseApiService"] {
    constructor(httpClient, dateService) {
        super(httpClient, dateService);
        this.url = "demo/tipo-ordine";
    }
    getTipoOrdineByCriteria(options) {
        return this.getEntityListByCriteria(this.url, options);
    }
    addTipoOrdine(tipoOrdine) {
        const fixedTipoOrdine = this.stringifyDate(tipoOrdine, 'dataTipoOrdine');
        return this.addEntityInstance(fixedTipoOrdine, this.url);
    }
    getTipoOrdineById(id) {
        return this.getEntityInstanceById(id, this.url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((tipoOrdineResult) => { return this.convertIntoDate(tipoOrdineResult, 'dataTipoOrdine'); }));
    }
    updateTipoOrdine(tipoOrdine) {
        const fixedTipoOrdine = this.stringifyDate(tipoOrdine, 'dataTipoOrdine');
        return this.updateEntityInstance(fixedTipoOrdine, this.url);
    }
    deleteTipoOrdine(id) {
        return this.deleteEntityInstance(id, this.url);
    }
    getListTipoOrdineByLink(link, options) {
        return this.getEntityListByLink(link, options);
    }
    printPdfReport(id) {
        window.open(this.baseUrl + "/" + this.url + '/pdf/' + id);
    }
}
TipoOrdineApiService.ɵfac = function TipoOrdineApiService_Factory(t) { return new (t || TipoOrdineApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](blazing__WEBPACK_IMPORTED_MODULE_1__["DateService"])); };
TipoOrdineApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: TipoOrdineApiService, factory: TipoOrdineApiService.ɵfac });


/***/ }),

/***/ "D1H/":
/*!***********************************************************************************************************!*\
  !*** ./src/app/pages/voila2sample-ms-demo-fe/dialog/dialog-list-cliente/dialog-list-cliente.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: DialogListClienteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogListClienteComponent", function() { return DialogListClienteComponent; });
/* harmony import */ var blazing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! blazing */ "pYbk");
/* harmony import */ var _cliente_cliente_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../cliente/cliente-api.service */ "eUbe");
/* harmony import */ var src_app_shared_base_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/base/base.component */ "nOOO");
/* harmony import */ var src_app_utilities_services_buttons_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/utilities/services/buttons.service */ "f4j/");
/* harmony import */ var voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! voila2-runtime-ng */ "WGmK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var translate_ng__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! translate-ng */ "JfpY");










function DialogListClienteComponent_td_8_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DialogListClienteComponent_td_8_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11); const element_r9 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r10.selectElement(element_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", element_r9.ragioneSociale, " ");
} }
function DialogListClienteComponent_td_11_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DialogListClienteComponent_td_11_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r14); const element_r12 = ctx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r13.selectElement(element_r12); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", element_r12.referenteAziendale, " ");
} }
function DialogListClienteComponent_td_14_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DialogListClienteComponent_td_14_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r17); const element_r15 = ctx.$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r16.selectElement(element_r15); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", element_r15.email, " ");
} }
function DialogListClienteComponent_td_17_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DialogListClienteComponent_td_17_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r20); const element_r18 = ctx.$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r19.selectElement(element_r18); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", element_r18.telefono, " ");
} }
function DialogListClienteComponent_td_20_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DialogListClienteComponent_td_20_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r23); const element_r21 = ctx.$implicit; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r22.selectElement(element_r21); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", element_r21.piva, " ");
} }
function DialogListClienteComponent_td_23_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DialogListClienteComponent_td_23_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r26); const element_r24 = ctx.$implicit; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r25.selectElement(element_r24); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", element_r24.codiceFiscale, " ");
} }
function DialogListClienteComponent_td_26_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DialogListClienteComponent_td_26_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r29); const element_r27 = ctx.$implicit; const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r28.selectElement(element_r27); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", element_r27.sitoInternet, " ");
} }
function DialogListClienteComponent_td_29_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DialogListClienteComponent_td_29_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r32); const element_r30 = ctx.$implicit; const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r31.selectElement(element_r30); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", element_r30.fax, " ");
} }
function DialogListClienteComponent_td_32_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DialogListClienteComponent_td_32_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r35); const element_r33 = ctx.$implicit; const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r34.selectElement(element_r33); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", element_r33.organizzazionePadre, " ");
} }
const PROVIDERS = [
    _cliente_cliente_api_service__WEBPACK_IMPORTED_MODULE_1__["ClienteApiService"],
    src_app_utilities_services_buttons_service__WEBPACK_IMPORTED_MODULE_3__["ButtonService"]
];
class DialogListClienteComponent extends src_app_shared_base_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"] {
    constructor(clienteApiService, buttonsService, dialogService) {
        super();
        this.clienteApiService = clienteApiService;
        this.buttonsService = buttonsService;
        this.dialogService = dialogService;
        this.clienteList = [];
        this.totalPages = 0;
        this.spinner = true;
        this.pageSize = 5;
        this.cardSize = blazing__WEBPACK_IMPORTED_MODULE_0__["CardSize"].LARGE;
    }
    paginateTable(object, criteria) {
        const options = blazing__WEBPACK_IMPORTED_MODULE_0__["PaginationUtils"].setOptionsForSpring(object, criteria);
        this.clienteApiService.getClienteByCriteria(options).subscribe((data) => {
            this.clienteList = Object(voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_4__["extractResponse"])('cliente', data);
            this.totalPages = Object(voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_4__["extractTotalPages"])(data);
            this.spinner = false;
        }, () => {
            this.spinner = false;
        });
    }
    selectElement(cliente) {
        this.dialogService.closeDialog(cliente);
    }
}
DialogListClienteComponent.ɵfac = function DialogListClienteComponent_Factory(t) { return new (t || DialogListClienteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_cliente_cliente_api_service__WEBPACK_IMPORTED_MODULE_1__["ClienteApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_utilities_services_buttons_service__WEBPACK_IMPORTED_MODULE_3__["ButtonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](blazing__WEBPACK_IMPORTED_MODULE_0__["BzDialogService"])); };
DialogListClienteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: DialogListClienteComponent, selectors: [["app-dialog-list-cliente"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵProvidersFeature"]([...PROVIDERS]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]], decls: 36, vars: 12, consts: [["global", "", 3, "bzSpinner", "size"], ["paginatedBe", "", 3, "sources", "pageSize", "nVisiblePages", "totalPages", "pageObject"], ["bzHeaderColumn", "", "bzSortColumn", "ragioneSociale"], ["class", "fk-pointer", 3, "click", 4, "bzColumnDef"], ["bzHeaderColumn", "", "bzSortColumn", "referenteAziendale"], ["bzHeaderColumn", "", "bzSortColumn", "email"], ["bzHeaderColumn", "", "bzSortColumn", "telefono"], ["bzHeaderColumn", "", "bzSortColumn", "piva"], ["bzHeaderColumn", "", "bzSortColumn", "codiceFiscale"], ["bzHeaderColumn", "", "bzSortColumn", "sitoInternet"], ["bzHeaderColumn", "", "bzSortColumn", "fax"], ["bzHeaderColumn", "", "bzSortColumn", "organizzazionePadre"], ["bzTableNoValue", ""], [1, "fk-pointer", 3, "click"]], template: function DialogListClienteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "bz-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "bz-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "bz-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "bz-table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("pageObject", function DialogListClienteComponent_Template_bz_table_pageObject_5_listener($event) { return ctx.paginateTable($event, null); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, " ragioneSociale ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, DialogListClienteComponent_td_8_Template, 2, 1, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, " referenteAziendale ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, DialogListClienteComponent_td_11_Template, 2, 1, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, " email ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, DialogListClienteComponent_td_14_Template, 2, 1, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, " telefono ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, DialogListClienteComponent_td_17_Template, 2, 1, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, " piva ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](20, DialogListClienteComponent_td_20_Template, 2, 1, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, " codiceFiscale ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](23, DialogListClienteComponent_td_23_Template, 2, 1, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, " sitoInternet ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](26, DialogListClienteComponent_td_26_Template, 2, 1, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, " fax ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](29, DialogListClienteComponent_td_29_Template, 2, 1, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31, " organizzazionePadre ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](32, DialogListClienteComponent_td_32_Template, 2, 1, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](33, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](35, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("bzSpinner", ctx.spinner)("size", ctx.cardSize);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" cliente ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 8, "header.list"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("sources", ctx.clienteList)("pageSize", ctx.pageSize)("nVisiblePages", 3)("totalPages", ctx.totalPages);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](35, 10, "label.noElements"), " Cliente ");
    } }, directives: [blazing__WEBPACK_IMPORTED_MODULE_0__["BzCardComponent"], blazing__WEBPACK_IMPORTED_MODULE_0__["BzCardHeaderComponent"], blazing__WEBPACK_IMPORTED_MODULE_0__["BzCardContentComponent"], blazing__WEBPACK_IMPORTED_MODULE_0__["BzTableComponent"], blazing__WEBPACK_IMPORTED_MODULE_0__["BzTableHeaderDirective"], blazing__WEBPACK_IMPORTED_MODULE_0__["BzTableColumnSortDirective"], blazing__WEBPACK_IMPORTED_MODULE_0__["BzTableColumnDefDirective"], blazing__WEBPACK_IMPORTED_MODULE_0__["BzTableNoValueDirective"]], pipes: [translate_ng__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkaWFsb2ctbGlzdC1jbGllbnRlLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "JxpM":
/*!*******************************************!*\
  !*** ./src/app/shared/base/base.model.ts ***!
  \*******************************************/
/*! exports provided: BaseModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseModel", function() { return BaseModel; });
/* harmony import */ var voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! voila2-runtime-ng */ "WGmK");

class BaseModel extends voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_0__["GenericModel"] {
}


/***/ }),

/***/ "Thuv":
/*!*********************************************************************!*\
  !*** ./src/app/pages/voila2sample-ms-demo-fe/ordine/ordine-form.ts ***!
  \*********************************************************************/
/*! exports provided: ordineForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ordineForm", function() { return ordineForm; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");

function ordineForm(formBuilder) {
    return formBuilder.group({
        ordineKey: formBuilder.group({
            idOrdine: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            anno: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
        }),
        dataOrdine: [null],
        urgente: [null],
        theClienteObjectKey: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
        theTipoOrdineObjectKey: [null],
        theOrdinePadreObjectKey: [null],
        theRigaOrdine: [[]],
        theOrdineFigli: [[]],
    });
}


/***/ }),

/***/ "ZC3r":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/pages/voila2sample-ms-demo-fe/dialog/dialog-list-tipo-ordine/dialog-list-tipo-ordine.component.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: DialogListTipoOrdineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogListTipoOrdineComponent", function() { return DialogListTipoOrdineComponent; });
/* harmony import */ var blazing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! blazing */ "pYbk");
/* harmony import */ var _tipo_ordine_tipo_ordine_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../tipo-ordine/tipo-ordine-api.service */ "4+27");
/* harmony import */ var src_app_shared_base_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/base/base.component */ "nOOO");
/* harmony import */ var src_app_utilities_services_buttons_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/utilities/services/buttons.service */ "f4j/");
/* harmony import */ var voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! voila2-runtime-ng */ "WGmK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var translate_ng__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! translate-ng */ "JfpY");










function DialogListTipoOrdineComponent_td_8_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DialogListTipoOrdineComponent_td_8_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4); const element_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r3.selectElement(element_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", element_r2.idTipoOrdine, " ");
} }
function DialogListTipoOrdineComponent_td_11_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DialogListTipoOrdineComponent_td_11_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7); const element_r5 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r6.selectElement(element_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", element_r5.nomeTipoOrdine, " ");
} }
const PROVIDERS = [
    _tipo_ordine_tipo_ordine_api_service__WEBPACK_IMPORTED_MODULE_1__["TipoOrdineApiService"],
    src_app_utilities_services_buttons_service__WEBPACK_IMPORTED_MODULE_3__["ButtonService"]
];
class DialogListTipoOrdineComponent extends src_app_shared_base_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"] {
    constructor(tipoOrdineApiService, buttonsService, dialogService) {
        super();
        this.tipoOrdineApiService = tipoOrdineApiService;
        this.buttonsService = buttonsService;
        this.dialogService = dialogService;
        this.tipoOrdineList = [];
        this.totalPages = 0;
        this.spinner = true;
        this.pageSize = 5;
        this.cardSize = blazing__WEBPACK_IMPORTED_MODULE_0__["CardSize"].LARGE;
    }
    paginateTable(object, criteria) {
        const options = blazing__WEBPACK_IMPORTED_MODULE_0__["PaginationUtils"].setOptionsForSpring(object, criteria);
        this.tipoOrdineApiService.getTipoOrdineByCriteria(options).subscribe((data) => {
            this.tipoOrdineList = Object(voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_4__["extractResponse"])('tipoOrdine', data);
            this.totalPages = Object(voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_4__["extractTotalPages"])(data);
            this.spinner = false;
        }, () => {
            this.spinner = false;
        });
    }
    selectElement(tipoOrdine) {
        this.dialogService.closeDialog(tipoOrdine);
    }
}
DialogListTipoOrdineComponent.ɵfac = function DialogListTipoOrdineComponent_Factory(t) { return new (t || DialogListTipoOrdineComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_tipo_ordine_tipo_ordine_api_service__WEBPACK_IMPORTED_MODULE_1__["TipoOrdineApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_utilities_services_buttons_service__WEBPACK_IMPORTED_MODULE_3__["ButtonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](blazing__WEBPACK_IMPORTED_MODULE_0__["BzDialogService"])); };
DialogListTipoOrdineComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: DialogListTipoOrdineComponent, selectors: [["app-dialog-list-tipo-ordine"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵProvidersFeature"]([...PROVIDERS]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]], decls: 15, vars: 12, consts: [["global", "", 3, "bzSpinner", "size"], ["paginatedBe", "", 3, "sources", "pageSize", "nVisiblePages", "totalPages", "pageObject"], ["bzHeaderColumn", "", "bzSortColumn", "idTipoOrdine"], ["class", "fk-pointer", 3, "click", 4, "bzColumnDef"], ["bzHeaderColumn", "", "bzSortColumn", "nomeTipoOrdine"], ["bzTableNoValue", ""], [1, "fk-pointer", 3, "click"]], template: function DialogListTipoOrdineComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "bz-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "bz-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "bz-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "bz-table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("pageObject", function DialogListTipoOrdineComponent_Template_bz_table_pageObject_5_listener($event) { return ctx.paginateTable($event, null); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, " idTipoOrdine ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, DialogListTipoOrdineComponent_td_8_Template, 2, 1, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, " nomeTipoOrdine ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, DialogListTipoOrdineComponent_td_11_Template, 2, 1, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](12, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("bzSpinner", ctx.spinner)("size", ctx.cardSize);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" tipoOrdine ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 8, "header.list"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("sources", ctx.tipoOrdineList)("pageSize", ctx.pageSize)("nVisiblePages", 3)("totalPages", ctx.totalPages);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](14, 10, "label.noElements"), " Tipo Ordine ");
    } }, directives: [blazing__WEBPACK_IMPORTED_MODULE_0__["BzCardComponent"], blazing__WEBPACK_IMPORTED_MODULE_0__["BzCardHeaderComponent"], blazing__WEBPACK_IMPORTED_MODULE_0__["BzCardContentComponent"], blazing__WEBPACK_IMPORTED_MODULE_0__["BzTableComponent"], blazing__WEBPACK_IMPORTED_MODULE_0__["BzTableHeaderDirective"], blazing__WEBPACK_IMPORTED_MODULE_0__["BzTableColumnSortDirective"], blazing__WEBPACK_IMPORTED_MODULE_0__["BzTableColumnDefDirective"], blazing__WEBPACK_IMPORTED_MODULE_0__["BzTableNoValueDirective"]], pipes: [translate_ng__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkaWFsb2ctbGlzdC10aXBvLW9yZGluZS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "eUbe":
/*!******************************************************************************!*\
  !*** ./src/app/pages/voila2sample-ms-demo-fe/cliente/cliente-api.service.ts ***!
  \******************************************************************************/
/*! exports provided: ClienteApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClienteApiService", function() { return ClienteApiService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var blazing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! blazing */ "pYbk");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _shared_base_base_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/base/base-api.service */ "GXZf");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");







class ClienteApiService extends _shared_base_base_api_service__WEBPACK_IMPORTED_MODULE_3__["BaseApiService"] {
    constructor(httpClient, dateService) {
        super(httpClient, dateService);
        this.url = "demo/cliente";
    }
    getClienteByCriteria(options) {
        return this.getEntityListByCriteria(this.url, options);
    }
    addCliente(cliente) {
        const fixedCliente = this.stringifyDate(cliente, 'dataCliente');
        return this.addEntityInstance(fixedCliente, this.url);
    }
    getClienteById(id) {
        return this.getEntityInstanceById(id, this.url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((clienteResult) => { return this.convertIntoDate(clienteResult, 'dataCliente'); }));
    }
    updateCliente(cliente) {
        const fixedCliente = this.stringifyDate(cliente, 'dataCliente');
        return this.updateEntityInstance(fixedCliente, this.url);
    }
    deleteCliente(id) {
        return this.deleteEntityInstance(id, this.url);
    }
    getListClienteByLink(link, options) {
        return this.getEntityListByLink(link, options);
    }
    printPdfReport(id) {
        window.open(this.baseUrl + "/" + this.url + '/pdf/' + id);
    }
}
ClienteApiService.ɵfac = function ClienteApiService_Factory(t) { return new (t || ClienteApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](blazing__WEBPACK_IMPORTED_MODULE_1__["DateService"])); };
ClienteApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: ClienteApiService, factory: ClienteApiService.ɵfac });


/***/ }),

/***/ "xEzP":
/*!*********************************************************************************************************!*\
  !*** ./src/app/pages/voila2sample-ms-demo-fe/dialog/dialog-list-ordine/dialog-list-ordine.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: DialogListOrdineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogListOrdineComponent", function() { return DialogListOrdineComponent; });
/* harmony import */ var blazing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! blazing */ "pYbk");
/* harmony import */ var _ordine_ordine_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ordine/ordine-api.service */ "AiQM");
/* harmony import */ var src_app_shared_base_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/base/base.component */ "nOOO");
/* harmony import */ var src_app_utilities_services_buttons_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/utilities/services/buttons.service */ "f4j/");
/* harmony import */ var voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! voila2-runtime-ng */ "WGmK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var translate_ng__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! translate-ng */ "JfpY");










function DialogListOrdineComponent_td_8_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DialogListOrdineComponent_td_8_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6); const element_r4 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r5.selectElement(element_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", element_r4.idOrdine, " ");
} }
function DialogListOrdineComponent_td_11_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DialogListOrdineComponent_td_11_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r9); const element_r7 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r8.selectElement(element_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", element_r7.anno, " ");
} }
function DialogListOrdineComponent_td_14_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DialogListOrdineComponent_td_14_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r12); const element_r10 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r11.selectElement(element_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", element_r10.dataOrdine, " ");
} }
function DialogListOrdineComponent_td_17_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DialogListOrdineComponent_td_17_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r15); const element_r13 = ctx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r14.selectElement(element_r13); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", element_r13.urgente, " ");
} }
const PROVIDERS = [
    _ordine_ordine_api_service__WEBPACK_IMPORTED_MODULE_1__["OrdineApiService"],
    src_app_utilities_services_buttons_service__WEBPACK_IMPORTED_MODULE_3__["ButtonService"]
];
class DialogListOrdineComponent extends src_app_shared_base_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"] {
    constructor(ordineApiService, buttonsService, dialogService) {
        super();
        this.ordineApiService = ordineApiService;
        this.buttonsService = buttonsService;
        this.dialogService = dialogService;
        this.ordineList = [];
        this.totalPages = 0;
        this.spinner = true;
        this.pageSize = 5;
        this.cardSize = blazing__WEBPACK_IMPORTED_MODULE_0__["CardSize"].LARGE;
    }
    paginateTable(object, criteria) {
        const options = blazing__WEBPACK_IMPORTED_MODULE_0__["PaginationUtils"].setOptionsForSpring(object, criteria);
        this.ordineApiService.getOrdineByCriteria(options).subscribe((data) => {
            this.ordineList = Object(voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_4__["extractResponse"])('ordine', data);
            this.totalPages = Object(voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_4__["extractTotalPages"])(data);
            this.spinner = false;
        }, () => {
            this.spinner = false;
        });
    }
    selectElement(ordine) {
        this.dialogService.closeDialog(ordine);
    }
}
DialogListOrdineComponent.ɵfac = function DialogListOrdineComponent_Factory(t) { return new (t || DialogListOrdineComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ordine_ordine_api_service__WEBPACK_IMPORTED_MODULE_1__["OrdineApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_utilities_services_buttons_service__WEBPACK_IMPORTED_MODULE_3__["ButtonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](blazing__WEBPACK_IMPORTED_MODULE_0__["BzDialogService"])); };
DialogListOrdineComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: DialogListOrdineComponent, selectors: [["app-dialog-list-ordine"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵProvidersFeature"]([...PROVIDERS]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]], decls: 21, vars: 12, consts: [["global", "", 3, "bzSpinner", "size"], ["paginatedBe", "", 3, "sources", "pageSize", "nVisiblePages", "totalPages", "pageObject"], ["bzHeaderColumn", "", "bzSortColumn", "idOrdine"], ["class", "fk-pointer", 3, "click", 4, "bzColumnDef"], ["bzHeaderColumn", "", "bzSortColumn", "anno"], ["bzHeaderColumn", "", "bzSortColumn", "dataOrdine"], ["bzHeaderColumn", "", "bzSortColumn", "urgente"], ["bzTableNoValue", ""], [1, "fk-pointer", 3, "click"]], template: function DialogListOrdineComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "bz-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "bz-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "bz-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "bz-table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("pageObject", function DialogListOrdineComponent_Template_bz_table_pageObject_5_listener($event) { return ctx.paginateTable($event, null); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, " idOrdine ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, DialogListOrdineComponent_td_8_Template, 2, 1, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, " anno ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, DialogListOrdineComponent_td_11_Template, 2, 1, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, " dataOrdine ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, DialogListOrdineComponent_td_14_Template, 2, 1, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, " urgente ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, DialogListOrdineComponent_td_17_Template, 2, 1, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](18, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](20, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("bzSpinner", ctx.spinner)("size", ctx.cardSize);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ordine ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 8, "header.list"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("sources", ctx.ordineList)("pageSize", ctx.pageSize)("nVisiblePages", 3)("totalPages", ctx.totalPages);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](20, 10, "label.noElements"), " Ordine ");
    } }, directives: [blazing__WEBPACK_IMPORTED_MODULE_0__["BzCardComponent"], blazing__WEBPACK_IMPORTED_MODULE_0__["BzCardHeaderComponent"], blazing__WEBPACK_IMPORTED_MODULE_0__["BzCardContentComponent"], blazing__WEBPACK_IMPORTED_MODULE_0__["BzTableComponent"], blazing__WEBPACK_IMPORTED_MODULE_0__["BzTableHeaderDirective"], blazing__WEBPACK_IMPORTED_MODULE_0__["BzTableColumnSortDirective"], blazing__WEBPACK_IMPORTED_MODULE_0__["BzTableColumnDefDirective"], blazing__WEBPACK_IMPORTED_MODULE_0__["BzTableNoValueDirective"]], pipes: [translate_ng__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkaWFsb2ctbGlzdC1vcmRpbmUuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "yNyt":
/*!***************************************************!*\
  !*** ./src/app/shared/base/base-tab.component.ts ***!
  \***************************************************/
/*! exports provided: BaseTabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseTabComponent", function() { return BaseTabComponent; });
/* harmony import */ var voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! voila2-runtime-ng */ "WGmK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class BaseTabComponent extends voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_0__["GenericTabComponent"] {
}
BaseTabComponent.ɵfac = function BaseTabComponent_Factory(t) { return ɵBaseTabComponent_BaseFactory(t || BaseTabComponent); };
BaseTabComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: BaseTabComponent, selectors: [["base-tab"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 0, vars: 0, template: function BaseTabComponent_Template(rf, ctx) { }, encapsulation: 2 });
const ɵBaseTabComponent_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](BaseTabComponent);


/***/ })

}]);
//# sourceMappingURL=default~cliente-cliente-module~ordine-ordine-module~tipo-ordine-tipo-ordine-module.js.map