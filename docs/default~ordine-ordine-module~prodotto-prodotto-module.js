(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~ordine-ordine-module~prodotto-prodotto-module"],{

/***/ "Dz6k":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/voila2sample-ms-demo-fe/riga-ordine/riga-ordine-form.ts ***!
  \*******************************************************************************/
/*! exports provided: rigaOrdineForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rigaOrdineForm", function() { return rigaOrdineForm; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");

function rigaOrdineForm(formBuilder) {
    return formBuilder.group({
        rigaOrdineKey: formBuilder.group({
            idOrdine: [null],
            anno: [null],
            theOrdineObjectKey: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            idProdotto: [null],
            theProdottoObjectKey: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
        }),
        quantita: [null],
    });
}


/***/ }),

/***/ "Vbgi":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/voila2sample-ms-demo-fe/riga-ordine/riga-ordine-api.service.ts ***!
  \**************************************************************************************/
/*! exports provided: RigaOrdineApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RigaOrdineApiService", function() { return RigaOrdineApiService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var blazing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! blazing */ "pYbk");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _shared_base_base_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/base/base-api.service */ "GXZf");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");







class RigaOrdineApiService extends _shared_base_base_api_service__WEBPACK_IMPORTED_MODULE_3__["BaseApiService"] {
    constructor(httpClient, dateService) {
        super(httpClient, dateService);
        this.url = "demo/riga-ordine";
    }
    getRigaOrdineByCriteria(options) {
        return this.getEntityListByCriteria(this.url, options);
    }
    addRigaOrdine(rigaOrdine) {
        const fixedRigaOrdine = this.stringifyDate(rigaOrdine, 'dataRigaOrdine');
        return this.addEntityInstance(fixedRigaOrdine, this.url);
    }
    getRigaOrdineById(id) {
        return this.getEntityInstanceById(id, this.url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((rigaOrdineResult) => { return this.convertIntoDate(rigaOrdineResult, 'dataRigaOrdine'); }));
    }
    updateRigaOrdine(rigaOrdine) {
        const fixedRigaOrdine = this.stringifyDate(rigaOrdine, 'dataRigaOrdine');
        return this.updateEntityInstance(fixedRigaOrdine, this.url);
    }
    deleteRigaOrdine(id) {
        return this.deleteEntityInstance(id, this.url);
    }
    getListRigaOrdineByLink(link, options) {
        return this.getEntityListByLink(link, options);
    }
    printPdfReport(id) {
        window.open(this.baseUrl + "/" + this.url + '/pdf/' + id);
    }
}
RigaOrdineApiService.ɵfac = function RigaOrdineApiService_Factory(t) { return new (t || RigaOrdineApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](blazing__WEBPACK_IMPORTED_MODULE_1__["DateService"])); };
RigaOrdineApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: RigaOrdineApiService, factory: RigaOrdineApiService.ɵfac });


/***/ }),

/***/ "lL2B":
/*!*************************************************************************************************************!*\
  !*** ./src/app/pages/voila2sample-ms-demo-fe/dialog/dialog-list-prodotto/dialog-list-prodotto.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: DialogListProdottoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogListProdottoComponent", function() { return DialogListProdottoComponent; });
/* harmony import */ var blazing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! blazing */ "pYbk");
/* harmony import */ var _prodotto_prodotto_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../prodotto/prodotto-api.service */ "nnBb");
/* harmony import */ var src_app_shared_base_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/base/base.component */ "nOOO");
/* harmony import */ var src_app_utilities_services_buttons_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/utilities/services/buttons.service */ "f4j/");
/* harmony import */ var voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! voila2-runtime-ng */ "WGmK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var translate_ng__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! translate-ng */ "JfpY");










function DialogListProdottoComponent_td_8_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DialogListProdottoComponent_td_8_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11); const element_r9 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r10.selectElement(element_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", element_r9.idProdotto, " ");
} }
function DialogListProdottoComponent_td_11_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DialogListProdottoComponent_td_11_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r14); const element_r12 = ctx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r13.selectElement(element_r12); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", element_r12.descrizioneProdotto, " ");
} }
function DialogListProdottoComponent_td_14_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DialogListProdottoComponent_td_14_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r17); const element_r15 = ctx.$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r16.selectElement(element_r15); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", element_r15.prezzoUnitario, " ");
} }
function DialogListProdottoComponent_td_17_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DialogListProdottoComponent_td_17_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r20); const element_r18 = ctx.$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r19.selectElement(element_r18); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", element_r18.dataScadenza, " ");
} }
function DialogListProdottoComponent_td_20_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DialogListProdottoComponent_td_20_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r23); const element_r21 = ctx.$implicit; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r22.selectElement(element_r21); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", element_r21.limitedEdition, " ");
} }
function DialogListProdottoComponent_td_23_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DialogListProdottoComponent_td_23_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r26); const element_r24 = ctx.$implicit; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r25.selectElement(element_r24); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", element_r24.createdBy, " ");
} }
function DialogListProdottoComponent_td_26_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DialogListProdottoComponent_td_26_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r29); const element_r27 = ctx.$implicit; const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r28.selectElement(element_r27); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", element_r27.lastModifiedBy, " ");
} }
function DialogListProdottoComponent_td_29_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DialogListProdottoComponent_td_29_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r32); const element_r30 = ctx.$implicit; const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r31.selectElement(element_r30); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", element_r30.createdDate, " ");
} }
function DialogListProdottoComponent_td_32_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DialogListProdottoComponent_td_32_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r35); const element_r33 = ctx.$implicit; const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r34.selectElement(element_r33); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", element_r33.lastModifiedDate, " ");
} }
const PROVIDERS = [
    _prodotto_prodotto_api_service__WEBPACK_IMPORTED_MODULE_1__["ProdottoApiService"],
    src_app_utilities_services_buttons_service__WEBPACK_IMPORTED_MODULE_3__["ButtonService"]
];
class DialogListProdottoComponent extends src_app_shared_base_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"] {
    constructor(prodottoApiService, buttonsService, dialogService) {
        super();
        this.prodottoApiService = prodottoApiService;
        this.buttonsService = buttonsService;
        this.dialogService = dialogService;
        this.prodottoList = [];
        this.totalPages = 0;
        this.spinner = true;
        this.pageSize = 5;
        this.cardSize = blazing__WEBPACK_IMPORTED_MODULE_0__["CardSize"].LARGE;
    }
    paginateTable(object, criteria) {
        const options = blazing__WEBPACK_IMPORTED_MODULE_0__["PaginationUtils"].setOptionsForSpring(object, criteria);
        this.prodottoApiService.getProdottoByCriteria(options).subscribe((data) => {
            this.prodottoList = Object(voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_4__["extractResponse"])('prodotto', data);
            this.totalPages = Object(voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_4__["extractTotalPages"])(data);
            this.spinner = false;
        }, () => {
            this.spinner = false;
        });
    }
    selectElement(prodotto) {
        this.dialogService.closeDialog(prodotto);
    }
}
DialogListProdottoComponent.ɵfac = function DialogListProdottoComponent_Factory(t) { return new (t || DialogListProdottoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_prodotto_prodotto_api_service__WEBPACK_IMPORTED_MODULE_1__["ProdottoApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_utilities_services_buttons_service__WEBPACK_IMPORTED_MODULE_3__["ButtonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](blazing__WEBPACK_IMPORTED_MODULE_0__["BzDialogService"])); };
DialogListProdottoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: DialogListProdottoComponent, selectors: [["app-dialog-list-prodotto"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵProvidersFeature"]([...PROVIDERS]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]], decls: 36, vars: 12, consts: [["global", "", 3, "bzSpinner", "size"], ["paginatedBe", "", 3, "sources", "pageSize", "nVisiblePages", "totalPages", "pageObject"], ["bzHeaderColumn", "", "bzSortColumn", "idProdotto"], ["class", "fk-pointer", 3, "click", 4, "bzColumnDef"], ["bzHeaderColumn", "", "bzSortColumn", "descrizioneProdotto"], ["bzHeaderColumn", "", "bzSortColumn", "prezzoUnitario"], ["bzHeaderColumn", "", "bzSortColumn", "dataScadenza"], ["bzHeaderColumn", "", "bzSortColumn", "limitedEdition"], ["bzHeaderColumn", "", "bzSortColumn", "createdBy"], ["bzHeaderColumn", "", "bzSortColumn", "lastModifiedBy"], ["bzHeaderColumn", "", "bzSortColumn", "createdDate"], ["bzHeaderColumn", "", "bzSortColumn", "lastModifiedDate"], ["bzTableNoValue", ""], [1, "fk-pointer", 3, "click"]], template: function DialogListProdottoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "bz-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "bz-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "bz-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "bz-table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("pageObject", function DialogListProdottoComponent_Template_bz_table_pageObject_5_listener($event) { return ctx.paginateTable($event, null); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, " idProdotto ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, DialogListProdottoComponent_td_8_Template, 2, 1, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, " descrizioneProdotto ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, DialogListProdottoComponent_td_11_Template, 2, 1, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, " prezzoUnitario ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, DialogListProdottoComponent_td_14_Template, 2, 1, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, " dataScadenza ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, DialogListProdottoComponent_td_17_Template, 2, 1, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, " limitedEdition ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](20, DialogListProdottoComponent_td_20_Template, 2, 1, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, " createdBy ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](23, DialogListProdottoComponent_td_23_Template, 2, 1, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, " lastModifiedBy ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](26, DialogListProdottoComponent_td_26_Template, 2, 1, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, " createdDate ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](29, DialogListProdottoComponent_td_29_Template, 2, 1, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31, " lastModifiedDate ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](32, DialogListProdottoComponent_td_32_Template, 2, 1, "td", 3);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" prodotto ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 8, "header.list"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("sources", ctx.prodottoList)("pageSize", ctx.pageSize)("nVisiblePages", 3)("totalPages", ctx.totalPages);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](35, 10, "label.noElements"), " Prodotto ");
    } }, directives: [blazing__WEBPACK_IMPORTED_MODULE_0__["BzCardComponent"], blazing__WEBPACK_IMPORTED_MODULE_0__["BzCardHeaderComponent"], blazing__WEBPACK_IMPORTED_MODULE_0__["BzCardContentComponent"], blazing__WEBPACK_IMPORTED_MODULE_0__["BzTableComponent"], blazing__WEBPACK_IMPORTED_MODULE_0__["BzTableHeaderDirective"], blazing__WEBPACK_IMPORTED_MODULE_0__["BzTableColumnSortDirective"], blazing__WEBPACK_IMPORTED_MODULE_0__["BzTableColumnDefDirective"], blazing__WEBPACK_IMPORTED_MODULE_0__["BzTableNoValueDirective"]], pipes: [translate_ng__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkaWFsb2ctbGlzdC1wcm9kb3R0by5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "nnBb":
/*!********************************************************************************!*\
  !*** ./src/app/pages/voila2sample-ms-demo-fe/prodotto/prodotto-api.service.ts ***!
  \********************************************************************************/
/*! exports provided: ProdottoApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdottoApiService", function() { return ProdottoApiService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var blazing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! blazing */ "pYbk");
/* harmony import */ var _shared_base_base_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/base/base-api.service */ "GXZf");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");






class ProdottoApiService extends _shared_base_base_api_service__WEBPACK_IMPORTED_MODULE_2__["BaseApiService"] {
    constructor(httpClient, dateService) {
        super(httpClient, dateService);
        this.url = "demo/prodotto";
    }
    getProdottoByCriteria(options) {
        return this.getEntityListByCriteria(this.url, options);
    }
    addProdotto(prodotto) {
        return this.addEntityInstance(prodotto, this.url);
    }
    getProdottoById(id) {
        return this.getEntityInstanceById(id, this.url);
    }
    updateProdotto(prodotto) {
        return this.updateEntityInstance(prodotto, this.url);
    }
    deleteProdotto(id) {
        return this.deleteEntityInstance(id, this.url);
    }
    getListProdottoByLink(link, options) {
        return this.getEntityListByLink(link, options);
    }
    printPdfReport(id) {
        window.open(this.baseUrl + "/" + this.url + '/pdf/' + id);
    }
}
ProdottoApiService.ɵfac = function ProdottoApiService_Factory(t) { return new (t || ProdottoApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](blazing__WEBPACK_IMPORTED_MODULE_1__["DateService"])); };
ProdottoApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: ProdottoApiService, factory: ProdottoApiService.ɵfac });


/***/ })

}]);
//# sourceMappingURL=default~ordine-ordine-module~prodotto-prodotto-module.js.map