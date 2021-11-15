(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["prodotto-prodotto-module"],{

/***/ "/gd+":
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/voila2sample-ms-demo-fe/prodotto/list-prodotto/list-prodotto.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: ListProdottoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListProdottoComponent", function() { return ListProdottoComponent; });
/* harmony import */ var blazing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! blazing */ "pYbk");
/* harmony import */ var _shared_base_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/base/base.component */ "nOOO");
/* harmony import */ var _prodotto_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../prodotto-api.service */ "nnBb");
/* harmony import */ var _utilities_services_buttons_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../utilities/services/buttons.service */ "f4j/");
/* harmony import */ var _search_prodotto_search_prodotto_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./search-prodotto/search-prodotto.component */ "P+WB");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! voila2-runtime-ng */ "WGmK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var translate_ng__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! translate-ng */ "JfpY");
/* harmony import */ var _utilities_pipe_utility_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../utilities/pipe/utility-pipe */ "SWKW");















function ListProdottoComponent_td_8_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ListProdottoComponent_td_8_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r12); const prodotto_r10 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r11.navigateToView(prodotto_r10.objectKey); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const prodotto_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](prodotto_r10.idProdotto);
} }
function ListProdottoComponent_td_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const prodotto_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", prodotto_r13.descrizioneProdotto, "");
} }
function ListProdottoComponent_td_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const prodotto_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", prodotto_r14.prezzoUnitario, "");
} }
function ListProdottoComponent_td_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const prodotto_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](2, 1, prodotto_r15.dataScadenza, "dd/MM/yyyy HH:mm:ss"), "");
} }
function ListProdottoComponent_td_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const prodotto_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", prodotto_r16.limitedEdition, "");
} }
function ListProdottoComponent_td_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const prodotto_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", prodotto_r17.createdBy, "");
} }
function ListProdottoComponent_td_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const prodotto_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", prodotto_r18.lastModifiedBy, "");
} }
function ListProdottoComponent_td_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const prodotto_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](2, 1, prodotto_r19.createdDate, "dd/MM/yyyy HH:mm:ss"), "");
} }
function ListProdottoComponent_td_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const prodotto_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](2, 1, prodotto_r20.lastModifiedDate, "dd/MM/yyyy HH:mm:ss"), "");
} }
function ListProdottoComponent_button_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "buttons.new"), " ");
} }
class ListProdottoComponent extends _shared_base_base_component__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"] {
    constructor(prodottoApiService, router) {
        super();
        this.prodottoApiService = prodottoApiService;
        this.router = router;
        this.prodottoList = [];
        this.totalPages = 0;
        this.spinner = true;
        this.pageSize = 5;
        this.privileges = Object(voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_6__["getPrivileges"])();
    }
    get Privileges() {
        return Object(voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_6__["getPrivilegesEnum"])();
    }
    paginateTable(object, criteria) {
        const options = blazing__WEBPACK_IMPORTED_MODULE_0__["PaginationUtils"].setOptionsForSpring(object, criteria);
        this.prodottoApiService.getProdottoByCriteria(options).subscribe((data) => {
            this.prodottoList = Object(voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_6__["extractResponse"])('prodotto', data);
            this.totalPages = Object(voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_6__["extractTotalPages"])(data);
            this.spinner = false;
        }, () => {
            this.spinner = false;
        });
    }
    searchWithCriteria() {
        this.prodottoCriteria = this.searchProdotto.search();
        const object = { page: 0, pageSize: this.pageSize };
        this.paginateTable(object, this.prodottoCriteria);
    }
    navigateToView(id) {
        Object(voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_6__["navigateToPath"])('/pages/ms-demo/prodotto/detail-prodotto/' + id + '/view', this.router);
    }
}
ListProdottoComponent.ɵfac = function ListProdottoComponent_Factory(t) { return new (t || ListProdottoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_prodotto_api_service__WEBPACK_IMPORTED_MODULE_2__["ProdottoApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
ListProdottoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: ListProdottoComponent, selectors: [["app-list-prodotto"]], viewQuery: function ListProdottoComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_search_prodotto_search_prodotto_component__WEBPACK_IMPORTED_MODULE_4__["SearchProdottoComponent"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.searchProdotto = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([_prodotto_api_service__WEBPACK_IMPORTED_MODULE_2__["ProdottoApiService"], _utilities_services_buttons_service__WEBPACK_IMPORTED_MODULE_3__["ButtonService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]], decls: 43, vars: 15, consts: [[3, "bzSpinner"], ["paginatedBe", "", 3, "sources", "pageSize", "nVisiblePages", "totalPages", "pageObject"], ["bzHeaderColumn", "", "bzSortColumn", "idProdotto", "scope", "col"], [4, "bzColumnDef"], ["bzHeaderColumn", "", "bzSortColumn", "descrizioneProdotto", "scope", "col"], ["bzHeaderColumn", "", "bzSortColumn", "prezzoUnitario", "scope", "col"], ["bzHeaderColumn", "", "bzSortColumn", "dataScadenza", "scope", "col"], ["bzHeaderColumn", "", "bzSortColumn", "limitedEdition", "scope", "col"], ["bzHeaderColumn", "", "bzSortColumn", "createdBy", "scope", "col"], ["bzHeaderColumn", "", "bzSortColumn", "lastModifiedBy", "scope", "col"], ["bzHeaderColumn", "", "bzSortColumn", "createdDate", "scope", "col"], ["bzHeaderColumn", "", "bzSortColumn", "lastModifiedDate", "scope", "col"], ["bzTableNoValue", ""], [1, "card"], ["bzButton", "", "status", "primary", 1, "button", 3, "click"], ["bzButton", "", "status", "primary", "class", "button", "routerLink", "/pages/ms-demo/prodotto/detail-prodotto/new", 4, "ngIf"], [1, "fk-pointer", 3, "click"], ["bzButton", "", "status", "primary", "routerLink", "/pages/ms-demo/prodotto/detail-prodotto/new", 1, "button"]], template: function ListProdottoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "bz-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "bz-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "bz-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "bz-table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("pageObject", function ListProdottoComponent_Template_bz_table_pageObject_5_listener($event) { return ctx.paginateTable($event, ctx.prodottoCriteria); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, " Id Prodotto ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, ListProdottoComponent_td_8_Template, 3, 1, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, " Descrizione Prodotto ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](11, ListProdottoComponent_td_11_Template, 2, 1, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, " Prezzo Unitario ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](14, ListProdottoComponent_td_14_Template, 2, 1, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16, " Data Scadenza ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](17, ListProdottoComponent_td_17_Template, 3, 4, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19, " Limited Edition ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](20, ListProdottoComponent_td_20_Template, 2, 1, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22, " Created By ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](23, ListProdottoComponent_td_23_Template, 2, 1, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](25, " Last Modified By ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](26, ListProdottoComponent_td_26_Template, 2, 1, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](28, " Created Date ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](29, ListProdottoComponent_td_29_Template, 3, 4, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](31, " Last Modified Date ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](32, ListProdottoComponent_td_32_Template, 3, 4, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](33, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](35, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](36, "app-search-prodotto");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](37, "bz-card", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "bz-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](39, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ListProdottoComponent_Template_button_click_39_listener() { return ctx.searchWithCriteria(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](40, " Cerca");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](41, ListProdottoComponent_button_41_Template, 3, 3, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](42, "hasPermission");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("bzSpinner", ctx.spinner);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" Prodotto ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 8, "header.list"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("sources", ctx.prodottoList)("pageSize", ctx.pageSize)("nVisiblePages", 3)("totalPages", ctx.totalPages);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](35, 10, "label.noElements"), " Prodotto ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](42, 12, ctx.Privileges == null ? null : ctx.Privileges.PRODOTTO_CREATE, ctx.privileges));
    } }, directives: [blazing__WEBPACK_IMPORTED_MODULE_0__["BzCardComponent"], blazing__WEBPACK_IMPORTED_MODULE_0__["BzCardHeaderComponent"], blazing__WEBPACK_IMPORTED_MODULE_0__["BzCardContentComponent"], blazing__WEBPACK_IMPORTED_MODULE_0__["BzTableComponent"], blazing__WEBPACK_IMPORTED_MODULE_0__["BzTableHeaderDirective"], blazing__WEBPACK_IMPORTED_MODULE_0__["BzTableColumnSortDirective"], blazing__WEBPACK_IMPORTED_MODULE_0__["BzTableColumnDefDirective"], blazing__WEBPACK_IMPORTED_MODULE_0__["BzTableNoValueDirective"], _search_prodotto_search_prodotto_component__WEBPACK_IMPORTED_MODULE_4__["SearchProdottoComponent"], blazing__WEBPACK_IMPORTED_MODULE_0__["BzButtonDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"]], pipes: [translate_ng__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"], _utilities_pipe_utility_pipe__WEBPACK_IMPORTED_MODULE_10__["PermissionPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0LXByb2RvdHRvLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "2yDd":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/voila2sample-ms-demo-fe/prodotto/prodotto-routing.module.ts ***!
  \***********************************************************************************/
/*! exports provided: ProdottoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdottoRoutingModule", function() { return ProdottoRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_security_security_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/security/security.config */ "n8Yp");
/* harmony import */ var voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! voila2-runtime-ng */ "WGmK");
/* harmony import */ var _detail_prodotto_detail_prodotto_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./detail-prodotto/detail-prodotto.component */ "7OBx");
/* harmony import */ var _list_prodotto_list_prodotto_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list-prodotto/list-prodotto.component */ "/gd+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");







const Privileges = Object(voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_2__["getPrivilegesEnum"])();
const routes = [
    {
        path: '',
        children: [
            {
                path: 'list-prodotto',
                component: _list_prodotto_list_prodotto_component__WEBPACK_IMPORTED_MODULE_4__["ListProdottoComponent"],
                canActivate: Object(src_app_security_security_config__WEBPACK_IMPORTED_MODULE_1__["getAuthGuards"])(),
                data: { privileges: [Privileges.PRODOTTO_FIND_PAGINATED] }
            },
            {
                path: 'detail-prodotto/new',
                component: _detail_prodotto_detail_prodotto_component__WEBPACK_IMPORTED_MODULE_3__["DetailProdottoComponent"],
                canActivate: Object(src_app_security_security_config__WEBPACK_IMPORTED_MODULE_1__["getAuthGuards"])(),
                data: { pageSatus: 'new', privileges: [Privileges.PRODOTTO_CREATE] }
            },
            {
                path: 'detail-prodotto/:id/view',
                component: _detail_prodotto_detail_prodotto_component__WEBPACK_IMPORTED_MODULE_3__["DetailProdottoComponent"],
                canActivate: Object(src_app_security_security_config__WEBPACK_IMPORTED_MODULE_1__["getAuthGuards"])(),
                data: { pageSatus: 'view', privileges: [Privileges.PRODOTTO_FIND_BY_ID] }
            },
            {
                path: 'detail-prodotto/:id/edit',
                component: _detail_prodotto_detail_prodotto_component__WEBPACK_IMPORTED_MODULE_3__["DetailProdottoComponent"],
                canActivate: Object(src_app_security_security_config__WEBPACK_IMPORTED_MODULE_1__["getAuthGuards"])(),
                data: { pageSatus: 'edit', privileges: [Privileges.PRODOTTO_UPDATE] }
            }
        ]
    }
];
class ProdottoRoutingModule {
}
ProdottoRoutingModule.ɵfac = function ProdottoRoutingModule_Factory(t) { return new (t || ProdottoRoutingModule)(); };
ProdottoRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: ProdottoRoutingModule });
ProdottoRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](ProdottoRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "76Nv":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/pages/voila2sample-ms-demo-fe/prodotto/detail-prodotto/tabs-prodotto/riga-ordine/tab-riga-ordine.component.ts ***!
  \*******************************************************************************************************************************/
/*! exports provided: TabRigaOrdineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabRigaOrdineComponent", function() { return TabRigaOrdineComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var blazing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! blazing */ "pYbk");
/* harmony import */ var src_app_pages_voila2sample_ms_demo_fe_riga_ordine_riga_ordine_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/pages/voila2sample-ms-demo-fe/riga-ordine/riga-ordine-api.service */ "Vbgi");
/* harmony import */ var src_app_pages_voila2sample_ms_demo_fe_riga_ordine_riga_ordine_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/pages/voila2sample-ms-demo-fe/riga-ordine/riga-ordine-form */ "Dz6k");
/* harmony import */ var src_app_pages_voila2sample_ms_demo_fe_dialog_dialog_list_ordine_dialog_list_ordine_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/pages/voila2sample-ms-demo-fe/dialog/dialog-list-ordine/dialog-list-ordine.component */ "xEzP");
/* harmony import */ var src_app_shared_base_base_tab_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/base/base-tab.component */ "yNyt");
/* harmony import */ var src_app_shared_base_base_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/base/base.helper */ "tHpT");
/* harmony import */ var voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! voila2-runtime-ng */ "WGmK");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _utilities_pipe_utility_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../utilities/pipe/utility-pipe */ "SWKW");
/* harmony import */ var translate_ng__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! translate-ng */ "JfpY");
















function TabRigaOrdineComponent_bz_card_0_td_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r4.rigaOrdineKey.theOrdineObjectKey, "");
} }
function TabRigaOrdineComponent_bz_card_0_td_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r5.quantita, "");
} }
function TabRigaOrdineComponent_bz_card_0_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "bz-card", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "bz-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "bz-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "bz-table", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageObject", function TabRigaOrdineComponent_bz_card_0_Template_bz_table_pageObject_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.paginateTable($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Ordine ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TabRigaOrdineComponent_bz_card_0_td_8_Template, 2, 1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Quantita ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, TabRigaOrdineComponent_bz_card_0_td_11_Template, 2, 1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](12, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("bzSpinner", ctx_r0.spinner);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 7, "header.list"), " Riga Ordine ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("sources", ctx_r0.rigaOrdineList)("pageSize", ctx_r0.pageSize)("nVisiblePages", 3)("totalPages", ctx_r0.totalPages);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 9, "label.noElement"), " Riga Ordine ");
} }
function TabRigaOrdineComponent_bz_card_2_td_8_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "bz-input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TabRigaOrdineComponent_bz_card_2_td_8_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const element_r11 = ctx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r12.showOrdineListDialog(element_r11.rowIndex); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "bz-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", element_r11.value);
} }
function TabRigaOrdineComponent_bz_card_2_td_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "bz-input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", element_r14 == null ? null : element_r14.value);
} }
function TabRigaOrdineComponent_bz_card_2_td_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("bzRemoveRow", element_r15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, "buttons.delete"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("bzRestoreRow", element_r15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 6, "buttons.restore"), " ");
} }
const _c0 = function () { return ["theOrdineObjectKey"]; };
const _c1 = function () { return ["theProdottoObjectKey"]; };
function TabRigaOrdineComponent_bz_card_2_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "bz-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "bz-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "bz-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "bz-table", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("smartArray", function TabRigaOrdineComponent_bz_card_2_Template_bz_table_smartArray_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.getSmartArray($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Ordine ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TabRigaOrdineComponent_bz_card_2_td_8_Template, 5, 1, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Quantita ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, TabRigaOrdineComponent_bz_card_2_td_11_Template, 2, 1, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, TabRigaOrdineComponent_bz_card_2_td_13_Template, 7, 8, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 8, "header.list"), " Riga Ordine ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("bzSmartTable", ctx_r1.rigaOrdineList)("bzFormGroup", ctx_r1.smartFormGroup)("bzDisabledControls", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c0))("bzDisabledControls", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c1))("bzForm", ctx_r1.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 10, "label.noElement"), " Riga Ordine ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 12, "buttons.new"), " Riga Ordine ");
} }
const _c2 = function () { return ["new", "edit"]; };
class TabRigaOrdineComponent extends src_app_shared_base_base_tab_component__WEBPACK_IMPORTED_MODULE_6__["BaseTabComponent"] {
    constructor(formBuilder, rigaOrdineApiService, dialogService) {
        super();
        this.formBuilder = formBuilder;
        this.rigaOrdineApiService = rigaOrdineApiService;
        this.dialogService = dialogService;
        this.rigaOrdineList = [];
        this.form = Object(src_app_pages_voila2sample_ms_demo_fe_riga_ordine_riga_ordine_form__WEBPACK_IMPORTED_MODULE_4__["rigaOrdineForm"])(this.formBuilder);
        this.smartFormGroup = this.formBuilder.group({});
    }
    ngOnChanges(changes) {
        this.manageEntityChanges(changes);
        this.managePageStatusChanges(changes);
    }
    /**
     * Paginate table.
     *
     */
    paginateTable(object) {
        let options = Object(src_app_shared_base_base_helper__WEBPACK_IMPORTED_MODULE_7__["fillOptions"])(this.pageStatus, object);
        if (this.theEntitylink) {
            this.rigaOrdineApiService.getListRigaOrdineByLink(this.theEntitylink, options).subscribe((data) => {
                this.rigaOrdineList = Object(voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_8__["extractResponse"])('rigaOrdine', data);
                this.totalPages = Object(voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_8__["extractTotalPages"])(data);
                this.spinner = false;
            }, () => {
                this.spinner = false;
            });
        }
    }
    getSmartArray(smartArray) {
        if (this.smartFormGroup.valid || this.smartFormGroup.status === "DISABLED") {
            Object(voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_8__["setControl"])(this.formGroup, 'theRigaOrdine', smartArray);
        }
    }
    showOrdineListDialog(index) {
        this.dialogService.showDialog(src_app_pages_voila2sample_ms_demo_fe_dialog_dialog_list_ordine_dialog_list_ordine_component__WEBPACK_IMPORTED_MODULE_5__["DialogListOrdineComponent"]).subscribe((data) => {
            if (data) {
                this.setSmartControlByIndex(this.smartFormGroup, index, data, 'objectKey', 'rigaOrdineKey.theOrdineObjectKey');
            }
        });
    }
    managePageStatusChanges(changes) {
        const pageStatusChanges = changes.pageStatus;
        if (pageStatusChanges === null || pageStatusChanges === void 0 ? void 0 : pageStatusChanges.currentValue) {
            this.rigaOrdineList = [];
            const object = this.managePageStatus(pageStatusChanges, this.smartFormGroup);
            this.paginateTable(object);
        }
    }
    manageEntityChanges(changes) {
        var _a, _b, _c;
        const entityChanges = changes.entity;
        if (entityChanges) {
            this.entity = entityChanges.currentValue;
            Object(voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_8__["setControl"])(this.form, 'rigaOrdineKey.theProdottoObjectKey', (_a = this.entity) === null || _a === void 0 ? void 0 : _a.objectKey);
            this.theEntitylink = (_c = (_b = this.entity) === null || _b === void 0 ? void 0 : _b._links.theRigaOrdine) === null || _c === void 0 ? void 0 : _c.href;
        }
    }
}
TabRigaOrdineComponent.ɵfac = function TabRigaOrdineComponent_Factory(t) { return new (t || TabRigaOrdineComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_pages_voila2sample_ms_demo_fe_riga_ordine_riga_ordine_api_service__WEBPACK_IMPORTED_MODULE_3__["RigaOrdineApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](blazing__WEBPACK_IMPORTED_MODULE_2__["BzDialogService"])); };
TabRigaOrdineComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TabRigaOrdineComponent, selectors: [["app-tab-riga-ordine"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([src_app_pages_voila2sample_ms_demo_fe_riga_ordine_riga_ordine_api_service__WEBPACK_IMPORTED_MODULE_3__["RigaOrdineApiService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 4, vars: 10, consts: [[3, "bzSpinner", 4, "ngIf"], [4, "ngIf"], [3, "bzSpinner"], ["paginatedBe", "", 3, "sources", "pageSize", "nVisiblePages", "totalPages", "pageObject"], ["bzHeaderColumn", "", "bzSortColumn", "theOrdineObjectKey", "scope", "col"], [4, "bzColumnDef"], ["bzHeaderColumn", "", "bzSortColumn", "quantita", "scope", "col"], ["bzTableNoValue", ""], ["withIndex", "", "paginated", "", 3, "bzSmartTable", "bzFormGroup", "bzDisabledControls", "bzForm", "smartArray"], ["bzHeaderColumn", "", "scope", "col", 1, "prodotto-column-width"], [3, "formGroup", 4, "bzColumnDef"], ["bzHeaderColumn", "", "scope", "col"], ["bzButton", "", "bzAddRow", ""], [3, "formGroup"], ["formGroupName", "rigaOrdineKey"], ["formControlName", "theOrdineObjectKey"], ["bzInputButton", "", "status", "primary", 3, "click"], ["iconName", "fa fa-window-maximize"], ["formControlName", "quantita"], ["bzButton", "", "status", "danger", 3, "bzRemoveRow"], ["bzButton", "", "status", "primary", 3, "bzRestoreRow"]], template: function TabRigaOrdineComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TabRigaOrdineComponent_bz_card_0_Template, 15, 11, "bz-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "hasPageStatus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TabRigaOrdineComponent_bz_card_2_Template, 20, 16, "bz-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "hasPageStatus");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](1, 2, ctx.pageStatus, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c2)) || ctx.readonly);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 5, ctx.pageStatus, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c2)) && !ctx.readonly);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], blazing__WEBPACK_IMPORTED_MODULE_2__["BzCardComponent"], blazing__WEBPACK_IMPORTED_MODULE_2__["BzCardHeaderComponent"], blazing__WEBPACK_IMPORTED_MODULE_2__["BzCardContentComponent"], blazing__WEBPACK_IMPORTED_MODULE_2__["BzTableComponent"], blazing__WEBPACK_IMPORTED_MODULE_2__["BzTableHeaderDirective"], blazing__WEBPACK_IMPORTED_MODULE_2__["BzTableColumnSortDirective"], blazing__WEBPACK_IMPORTED_MODULE_2__["BzTableColumnDefDirective"], blazing__WEBPACK_IMPORTED_MODULE_2__["BzTableNoValueDirective"], blazing__WEBPACK_IMPORTED_MODULE_2__["ɵbu"], blazing__WEBPACK_IMPORTED_MODULE_2__["BzButtonDirective"], blazing__WEBPACK_IMPORTED_MODULE_2__["BzAddRowDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupName"], blazing__WEBPACK_IMPORTED_MODULE_2__["BzInputComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], blazing__WEBPACK_IMPORTED_MODULE_2__["BzInputButtonDirective"], blazing__WEBPACK_IMPORTED_MODULE_2__["BzIconComponent"], blazing__WEBPACK_IMPORTED_MODULE_2__["ɵbv"], blazing__WEBPACK_IMPORTED_MODULE_2__["ɵbw"]], pipes: [_utilities_pipe_utility_pipe__WEBPACK_IMPORTED_MODULE_10__["PageStatusPipe"], translate_ng__WEBPACK_IMPORTED_MODULE_11__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWItcmlnYS1vcmRpbmUuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "7OBx":
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/voila2sample-ms-demo-fe/prodotto/detail-prodotto/detail-prodotto.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: DetailProdottoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailProdottoComponent", function() { return DetailProdottoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _utilities_services_buttons_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../utilities/services/buttons.service */ "f4j/");
/* harmony import */ var _prodotto_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../prodotto-api.service */ "nnBb");
/* harmony import */ var _prodotto_group_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../prodotto-group-api.service */ "f751");
/* harmony import */ var _prodotto_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../prodotto-form */ "o8+T");
/* harmony import */ var _utilities_services_route_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../utilities/services/route.service */ "8RJb");
/* harmony import */ var _utilities_dialog_confirm_dialog_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../utilities/dialog/confirm-dialog.service */ "wqBZ");
/* harmony import */ var _shared_base_base_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/base/base.component */ "nOOO");
/* harmony import */ var _utilities_services_overlays_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../utilities/services/overlays.service */ "zd5x");
/* harmony import */ var _prodotto_constant__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../prodotto.constant */ "fWqq");
/* harmony import */ var voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! voila2-runtime-ng */ "WGmK");
/* harmony import */ var src_app_shared_base_base_helper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/base/base.helper */ "tHpT");
/* harmony import */ var translate_ng__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! translate-ng */ "JfpY");
/* harmony import */ var _prodotto_model__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../prodotto.model */ "Twrq");
/* harmony import */ var blazing__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! blazing */ "pYbk");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _tabs_prodotto_tabs_prodotto_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./tabs-prodotto/tabs-prodotto.component */ "cQIp");
/* harmony import */ var _utilities_pipe_utility_pipe__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../utilities/pipe/utility-pipe */ "SWKW");


























function DetailProdottoComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "bz-input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "hasPageStatus");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "bz-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "bz-input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "bz-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "bz-input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "bz-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "bz-date-picker", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "bz-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](25, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "bz-switch", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disableAttr", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 5, ctx_r0.pageStatus, "edit"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Id Prodotto ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 8, "label.obligatoryValues"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" L'Descrizione Prodotto ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 10, "label.obligatoryValues"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Prezzo Unitario ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 12, "label.obligatoryValues"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Data Scadenza ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](25, 14, "label.obligatoryValues"), " ");
} }
function DetailProdottoComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Id Prodotto: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Descrizione Prodotto: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Prezzo Unitario: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Data Scadenza: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](25, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Limited Edition: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Created By: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Last Modified By: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " Created Date: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](50, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " Last Modified Date: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](57, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.prodotto == null ? null : ctx_r1.prodotto.idProdotto);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.prodotto == null ? null : ctx_r1.prodotto.descrizioneProdotto);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.prodotto == null ? null : ctx_r1.prodotto.prezzoUnitario);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](25, 9, ctx_r1.prodotto == null ? null : ctx_r1.prodotto.dataScadenza, "dd/MM/YYYY HH:mm:ss"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.prodotto == null ? null : ctx_r1.prodotto.limitedEdition);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.prodotto == null ? null : ctx_r1.prodotto.createdBy);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.prodotto == null ? null : ctx_r1.prodotto.lastModifiedBy);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](50, 12, ctx_r1.prodotto == null ? null : ctx_r1.prodotto.createdDate, "dd/MM/YYYY HH:mm:ss"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](57, 15, ctx_r1.prodotto == null ? null : ctx_r1.prodotto.lastModifiedDate, "dd/MM/YYYY HH:mm:ss"));
} }
function DetailProdottoComponent_button_17_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("bzClick", function DetailProdottoComponent_button_17_Template_button_bzClick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.insertProdotto(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("bzCheckForm", ctx_r2.prodottoForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, "buttons.save"), " ");
} }
function DetailProdottoComponent_button_20_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("bzClick", function DetailProdottoComponent_button_20_Template_button_bzClick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.editProdotto(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "buttons.edit"), " ");
} }
function DetailProdottoComponent_button_23_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("bzClick", function DetailProdottoComponent_button_23_Template_button_bzClick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.updateProdotto(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("bzCheckForm", ctx_r4.prodottoForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, "buttons.save"), " ");
} }
function DetailProdottoComponent_button_26_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("bzClick", function DetailProdottoComponent_button_26_Template_button_bzClick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.confirmDeleteProdotto(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "buttons.delete"), " ");
} }
const _c0 = function () { return ["new", "edit"]; };
const _c1 = function () { return ["edit", "view"]; };
const PROVIDERS = [
    _prodotto_api_service__WEBPACK_IMPORTED_MODULE_3__["ProdottoApiService"],
    _utilities_services_buttons_service__WEBPACK_IMPORTED_MODULE_2__["ButtonService"],
    _utilities_services_overlays_service__WEBPACK_IMPORTED_MODULE_9__["OverlaysService"],
    _utilities_services_route_service__WEBPACK_IMPORTED_MODULE_6__["RouteService"],
    _utilities_dialog_confirm_dialog_service__WEBPACK_IMPORTED_MODULE_7__["ConfirmDialogService"],
    _prodotto_group_api_service__WEBPACK_IMPORTED_MODULE_4__["ProdottoGroupApiService"],
];
class DetailProdottoComponent extends _shared_base_base_component__WEBPACK_IMPORTED_MODULE_8__["BaseComponent"] {
    constructor(buttonsService, formBuilder, routeService, overlaysService, injector, prodottoGroupApiService) {
        super();
        this.buttonsService = buttonsService;
        this.formBuilder = formBuilder;
        this.routeService = routeService;
        this.overlaysService = overlaysService;
        this.injector = injector;
        this.prodottoGroupApiService = prodottoGroupApiService;
        this.spinner = true;
        this.privileges = Object(voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_11__["getPrivileges"])();
    }
    get Privileges() {
        return Object(voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_11__["getPrivilegesEnum"])();
    }
    ngOnInit() {
        this.prodottoForm = Object(_prodotto_form__WEBPACK_IMPORTED_MODULE_5__["prodottoForm"])(this.formBuilder);
        this.routeService.route.data.subscribe((data) => {
            this.pageStatus = data.pageSatus;
        });
        this.getProdottoById();
        this.setTabPageStatusOnInit();
        if (Object(voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_11__["isInNewMode"])(this.pageStatus))
            this.spinner = false;
    }
    insertProdotto() {
        const prodotto = this.prodottoForm.value;
        Object(src_app_shared_base_base_helper__WEBPACK_IMPORTED_MODULE_12__["setTabObjectKey"])(prodotto, new _prodotto_model__WEBPACK_IMPORTED_MODULE_14__["Prodotto"](prodotto), 'theRigaOrdine', 'rigaOrdineKey.theProdottoObjectKey');
        this.prodottoGroupApiService.prodotto.addProdotto(prodotto).subscribe((prodottoResult) => {
            const toast = this.overlaysService.toast;
            this.prodotto = this.manageResponse(prodottoResult, toast, new translate_ng__WEBPACK_IMPORTED_MODULE_13__["TranslatePipe"](this.injector));
            if (this.prodotto)
                Object(voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_11__["navigateToPath"])('/pages/ms-demo/prodotto/detail-prodotto/' + this.prodotto.objectKey + '/view', this.routeService.router);
        });
    }
    getProdottoById() {
        if (Object(voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_11__["isInViewEditMode"])(this.pageStatus)) {
            const id = Object(voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_11__["getIdFromPath"])(this.routeService.route);
            if (id) {
                this.prodottoGroupApiService.prodotto.getProdottoById(id).subscribe((prodottoResult) => {
                    this.prodotto = Object(src_app_shared_base_base_helper__WEBPACK_IMPORTED_MODULE_12__["useMapper"])('Prodotto', 'IProdotto', prodottoResult.response);
                    console.log("Prodotto .... ", this.prodotto);
                    this.setTabPageStatus(this.pageStatus);
                    this.fillForm();
                    this.spinner = false;
                }, () => {
                    this.spinner = false;
                });
            }
        }
    }
    fillForm() {
        this.prodottoForm.patchValue({
            idProdotto: this.prodotto.idProdotto,
            descrizioneProdotto: this.prodotto.descrizioneProdotto,
            prezzoUnitario: this.prodotto.prezzoUnitario,
            dataScadenza: this.prodotto.dataScadenza,
            limitedEdition: this.prodotto.limitedEdition,
            createdBy: this.prodotto.createdBy,
            lastModifiedBy: this.prodotto.lastModifiedBy,
            createdDate: this.prodotto.createdDate,
            lastModifiedDate: this.prodotto.lastModifiedDate,
        });
    }
    editProdotto() {
        //this.setStatusPage(PageStatus.EDIT, this.routeService.location);
        //this.getProdottoById();
        Object(voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_11__["navigateToPath"])('/pages/ms-demo/prodotto/detail-prodotto/' + this.prodotto.objectKey + '/edit', this.routeService.router);
    }
    updateProdotto() {
        const prodotto = this.prodottoForm.value;
        this.prodottoGroupApiService.prodotto.updateProdotto(prodotto).subscribe((prodottoResult) => {
            const toast = this.overlaysService.toast;
            this.prodotto = this.manageResponse(prodottoResult, toast, new translate_ng__WEBPACK_IMPORTED_MODULE_13__["TranslatePipe"](this.injector));
            if (this.prodotto)
                Object(voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_11__["navigateToPath"])('/pages/ms-demo/prodotto/detail-prodotto/' + this.prodotto.objectKey + '/view', this.routeService.router);
        });
    }
    /**
     * Delete prodotto by id.
     */
    deleteProdottoById() {
        this.prodottoGroupApiService.prodotto.deleteProdotto(this.prodotto.objectKey).subscribe(() => {
            this.overlaysService.toast.showSuccess(_prodotto_constant__WEBPACK_IMPORTED_MODULE_10__["prodotto_"].detail.toast.SUCCESS_DELETE);
            Object(voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_11__["navigateToPath"])(_prodotto_constant__WEBPACK_IMPORTED_MODULE_10__["prodotto_"].detail.path.LIST, this.routeService.router);
            this.overlaysService.dialog.closeDialog();
        });
    }
    /**
     * Confirm delete prodotto.
     */
    confirmDeleteProdotto() {
        const message = _prodotto_constant__WEBPACK_IMPORTED_MODULE_10__["prodotto_"].detail.dialog.DELETE_MESSAGE;
        this.overlaysService.confirmDialog.openConfirmDialog(message).subscribe((isTrue) => {
            if (isTrue)
                this.deleteProdottoById();
        });
    }
}
DetailProdottoComponent.ɵfac = function DetailProdottoComponent_Factory(t) { return new (t || DetailProdottoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_utilities_services_buttons_service__WEBPACK_IMPORTED_MODULE_2__["ButtonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_utilities_services_route_service__WEBPACK_IMPORTED_MODULE_6__["RouteService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_utilities_services_overlays_service__WEBPACK_IMPORTED_MODULE_9__["OverlaysService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_prodotto_group_api_service__WEBPACK_IMPORTED_MODULE_4__["ProdottoGroupApiService"])); };
DetailProdottoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DetailProdottoComponent, selectors: [["app-detail-prodotto"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([...PROVIDERS]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 29, vars: 48, consts: [[3, "formGroup"], ["bzTooltip", "Anagrafica dei Prodotti", 1, "fa", "fa-question-circle"], [4, "ngIf"], [3, "formGroup", "entity", "pageStatus"], [1, "card"], ["bzButton", "", "status", "primary", "type", "button", 3, "click"], ["bzButton", "", "status", "primary", "class", "button", 3, "bzCheckForm", "bzClick", 4, "ngIf"], ["bzButton", "", "status", "primary", "class", "button", "type", "button", 3, "bzClick", 4, "ngIf"], ["bzButton", "", "status", "primary", "class", "button", 3, "bzClick", 4, "ngIf"], [1, "fk-row", "inputs"], [1, "fk-col-8"], ["label", "Id Prodotto:", "formControlName", "idProdotto", "type", "number", 3, "disableAttr"], ["label", "Descrizione Prodotto:", "formControlName", "descrizioneProdotto", "type", "string"], ["label", "Prezzo Unitario:", "formControlName", "prezzoUnitario", "type", "number"], ["label", "Data Scadenza:", "controlName", "dataScadenza", "type", "Date", "timePicker", ""], ["label", "Limited Edition", "ariaId", "Limited Edition", "formControlName", "limitedEdition", "type", "boolean"], ["bzTooltip", "Data di Scadenza"], ["bzButton", "", "status", "primary", 1, "button", 3, "bzCheckForm", "bzClick"], ["bzButton", "", "status", "primary", "type", "button", 1, "button", 3, "bzClick"], ["bzButton", "", "status", "primary", 1, "button", 3, "bzClick"]], template: function DetailProdottoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "bz-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "bz-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "bz-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DetailProdottoComponent_ng_container_7_Template, 29, 16, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "hasPageStatus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, DetailProdottoComponent_div_9_Template, 58, 18, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "hasPageStatus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-tabs-prodotto", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "bz-card", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "bz-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailProdottoComponent_Template_button_click_14_listener() { return ctx.buttonsService.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, DetailProdottoComponent_button_17_Template, 3, 4, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "hasPageStatus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "hasPermission");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, DetailProdottoComponent_button_20_Template, 3, 3, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "hasPageStatus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "hasPermission");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, DetailProdottoComponent_button_23_Template, 3, 4, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "hasPageStatus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](25, "hasPermission");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, DetailProdottoComponent_button_26_Template, 3, 3, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "hasPageStatus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](28, "hasPermission");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.prodottoForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 12, "header.detail"), " Prodotto ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 14, ctx.pageStatus, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](46, _c0)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](10, 17, ctx.pageStatus, "view"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.prodottoForm)("entity", ctx.prodotto)("pageStatus", ctx.tabPageStatus);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 20, "buttons.goBack"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](18, 22, ctx.pageStatus, "new") && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](19, 25, ctx.Privileges == null ? null : ctx.Privileges.PRODOTTO_CREATE, ctx.privileges));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](21, 28, ctx.pageStatus, "view") && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](22, 31, ctx.Privileges == null ? null : ctx.Privileges.PRODOTTO_FIND_BY_ID, ctx.privileges));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](24, 34, ctx.pageStatus, "edit") && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](25, 37, ctx.Privileges == null ? null : ctx.Privileges.PRODOTTO_UPDATE, ctx.privileges));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](27, 40, ctx.pageStatus, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](47, _c1)) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](28, 43, ctx.Privileges == null ? null : ctx.Privileges.PRODOTTO_DELETE, ctx.privileges));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], blazing__WEBPACK_IMPORTED_MODULE_15__["BzCardComponent"], blazing__WEBPACK_IMPORTED_MODULE_15__["BzCardHeaderComponent"], blazing__WEBPACK_IMPORTED_MODULE_15__["BzTooltipDirective"], blazing__WEBPACK_IMPORTED_MODULE_15__["BzCardContentComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgIf"], _tabs_prodotto_tabs_prodotto_component__WEBPACK_IMPORTED_MODULE_17__["TabsProdottoComponent"], blazing__WEBPACK_IMPORTED_MODULE_15__["BzButtonDirective"], blazing__WEBPACK_IMPORTED_MODULE_15__["BzInputComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], blazing__WEBPACK_IMPORTED_MODULE_15__["BzErrorComponent"], blazing__WEBPACK_IMPORTED_MODULE_15__["BzDatePickerComponent"], blazing__WEBPACK_IMPORTED_MODULE_15__["BzSwitchComponent"], blazing__WEBPACK_IMPORTED_MODULE_15__["BzClickDirective"]], pipes: [translate_ng__WEBPACK_IMPORTED_MODULE_13__["TranslatePipe"], _utilities_pipe_utility_pipe__WEBPACK_IMPORTED_MODULE_18__["PageStatusPipe"], _utilities_pipe_utility_pipe__WEBPACK_IMPORTED_MODULE_18__["PermissionPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["DatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXRhaWwtcHJvZG90dG8uY29tcG9uZW50LnNjc3MifQ== */"] });


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

/***/ "P+WB":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/pages/voila2sample-ms-demo-fe/prodotto/list-prodotto/search-prodotto/search-prodotto.component.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: SearchProdottoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchProdottoComponent", function() { return SearchProdottoComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var blazing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! blazing */ "pYbk");
/* harmony import */ var _prodotto_group_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../prodotto-group-api.service */ "f751");
/* harmony import */ var voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! voila2-runtime-ng */ "WGmK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var translate_ng__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! translate-ng */ "JfpY");









const PROVIDERS = [
    _prodotto_group_api_service__WEBPACK_IMPORTED_MODULE_2__["ProdottoGroupApiService"],
];
class SearchProdottoComponent {
    constructor(formBuilder, dateService, prodottoGroupApiService) {
        this.formBuilder = formBuilder;
        this.dateService = dateService;
        this.prodottoGroupApiService = prodottoGroupApiService;
    }
    ngOnInit() {
        this.inizialize();
    }
    search() {
        let prodottoCriteria = Object.assign({});
        if (this.searchProdottoForm.value) {
            const idProdottoFrom = this.searchProdottoForm.value.idProdottoFrom;
            const idProdottoTo = this.searchProdottoForm.value.idProdottoTo;
            //idProdotto
            if (idProdottoFrom || idProdottoTo) {
                prodottoCriteria.idProdotto = new voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_3__["IntegerFilter"];
                prodottoCriteria.idProdotto.setGreaterOrEqualThan(idProdottoFrom);
                prodottoCriteria.idProdotto.setLessOrEqualThan(idProdottoTo);
            }
            const descrizioneProdotto = this.searchProdottoForm.value.descrizioneProdotto;
            //descrizioneProdotto
            if (descrizioneProdotto) {
                prodottoCriteria.descrizioneProdotto = new voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_3__["StringFilter"];
                prodottoCriteria.descrizioneProdotto.setContains(this.searchProdottoForm.value.descrizioneProdotto);
            }
            const prezzoUnitarioFrom = this.searchProdottoForm.value.prezzoUnitarioFrom;
            const prezzoUnitarioTo = this.searchProdottoForm.value.prezzoUnitarioTo;
            //prezzoUnitario
            if (prezzoUnitarioFrom || prezzoUnitarioTo) {
                prodottoCriteria.prezzoUnitario = new voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_3__["BigDecimalFilter"];
                prodottoCriteria.prezzoUnitario.setGreaterOrEqualThan(prezzoUnitarioFrom);
                prodottoCriteria.prezzoUnitario.setLessOrEqualThan(prezzoUnitarioTo);
            }
            const dataScadenzaFrom = this.searchProdottoForm.value.dataScadenzaFrom;
            const dataScadenzaTo = this.searchProdottoForm.value.dataScadenzaTo;
            //dataScadenza
            if (dataScadenzaFrom || dataScadenzaTo) {
                prodottoCriteria.dataScadenza = new voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_3__["LocalDateTimeFilter"];
                prodottoCriteria.dataScadenza.setGreaterOrEqualThan(dataScadenzaFrom);
                prodottoCriteria.dataScadenza.setLessOrEqualThan(dataScadenzaTo);
            }
            const limitedEdition = this.searchProdottoForm.value.limitedEdition;
            //limitedEdition
            if (limitedEdition) {
                prodottoCriteria.limitedEdition = new voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_3__["BooleanFilter"]();
                prodottoCriteria.limitedEdition.setSpecified(limitedEdition);
            }
            const createdBy = this.searchProdottoForm.value.createdBy;
            //createdBy
            if (createdBy) {
                prodottoCriteria.createdBy = new voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_3__["StringFilter"];
                prodottoCriteria.createdBy.setContains(this.searchProdottoForm.value.createdBy);
            }
            const lastModifiedBy = this.searchProdottoForm.value.lastModifiedBy;
            //lastModifiedBy
            if (lastModifiedBy) {
                prodottoCriteria.lastModifiedBy = new voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_3__["StringFilter"];
                prodottoCriteria.lastModifiedBy.setContains(this.searchProdottoForm.value.lastModifiedBy);
            }
            const createdDateFrom = this.searchProdottoForm.value.createdDateFrom;
            const createdDateTo = this.searchProdottoForm.value.createdDateTo;
            //createdDate
            if (createdDateFrom || createdDateTo) {
                prodottoCriteria.createdDate = new voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_3__["LocalDateTimeFilter"];
                prodottoCriteria.createdDate.setGreaterOrEqualThan(createdDateFrom);
                prodottoCriteria.createdDate.setLessOrEqualThan(createdDateTo);
            }
            const lastModifiedDateFrom = this.searchProdottoForm.value.lastModifiedDateFrom;
            const lastModifiedDateTo = this.searchProdottoForm.value.lastModifiedDateTo;
            //lastModifiedDate
            if (lastModifiedDateFrom || lastModifiedDateTo) {
                prodottoCriteria.lastModifiedDate = new voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_3__["LocalDateTimeFilter"];
                prodottoCriteria.lastModifiedDate.setGreaterOrEqualThan(lastModifiedDateFrom);
                prodottoCriteria.lastModifiedDate.setLessOrEqualThan(lastModifiedDateTo);
            }
        }
        return prodottoCriteria;
    }
    inizialize() {
        this.searchProdottoForm = this.formBuilder.group({
            'idProdottoFrom': [null],
            'idProdottoTo': [null],
            'descrizioneProdotto': [null],
            'prezzoUnitarioFrom': [null],
            'prezzoUnitarioTo': [null],
            'dataScadenzaFrom': [null],
            'dataScadenzaTo': [null],
            'limitedEdition': [null],
            'createdBy': [null],
            'lastModifiedBy': [null],
            'createdDateFrom': [null],
            'createdDateTo': [null],
            'lastModifiedDateFrom': [null],
            'lastModifiedDateTo': [null],
        });
    }
}
SearchProdottoComponent.ɵfac = function SearchProdottoComponent_Factory(t) { return new (t || SearchProdottoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](blazing__WEBPACK_IMPORTED_MODULE_1__["DateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_prodotto_group_api_service__WEBPACK_IMPORTED_MODULE_2__["ProdottoGroupApiService"])); };
SearchProdottoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: SearchProdottoComponent, selectors: [["app-search-prodotto"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([...PROVIDERS])], decls: 48, vars: 10, consts: [["isCollapsable", "", 1, "card"], [3, "formGroup"], [1, "fk-row", "inputs"], [1, "fk-col-8"], ["label", "Id Prodotto da", "placeholder", "da", "formControlName", "idProdottoFrom", 3, "keyup.enter"], ["label", "Id Prodotto a", "placeholder", "a", "formControlName", "idProdottoTo", 3, "keyup.enter"], ["label", "Descrizione Prodotto", "formControlName", "descrizioneProdotto", 3, "keyup.enter"], ["label", "Prezzo Unitario da", "placeholder", "da", "formControlName", "prezzoUnitarioFrom", 3, "keyup.enter"], ["label", "Prezzo Unitario a", "placeholder", "a", "formControlName", "prezzoUnitarioTo", 3, "keyup.enter"], ["label", "Data Scadenza da", "placeholder", "da", "controlName", "dataScadenzaFrom", "timePicker", "", 3, "isPlaceholder", "keyup.enter"], ["label", "Data Scadenza a", "placeholder", "a", "controlName", "dataScadenzaTo", "timePicker", "", 3, "isPlaceholder", "keyup.enter"], ["formControlName", "limitedEdition", 3, "keyup.enter"], ["label", "Created By", "formControlName", "createdBy", 3, "keyup.enter"], ["label", "Last Modified By", "formControlName", "lastModifiedBy", 3, "keyup.enter"], ["label", "Created Date da", "placeholder", "da", "controlName", "createdDateFrom", "timePicker", "", 3, "isPlaceholder", "keyup.enter"], ["label", "Created Date a", "placeholder", "a", "controlName", "createdDateTo", "timePicker", "", 3, "isPlaceholder", "keyup.enter"], ["label", "Last Modified Date da", "placeholder", "da", "controlName", "lastModifiedDateFrom", "timePicker", "", 3, "isPlaceholder", "keyup.enter"], ["label", "Last Modified Date a", "placeholder", "a", "controlName", "lastModifiedDateTo", "timePicker", "", 3, "isPlaceholder", "keyup.enter"]], template: function SearchProdottoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "bz-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "bz-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "bz-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "bz-input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keyup.enter", function SearchProdottoComponent_Template_bz_input_keyup_enter_8_listener() { return ctx.search(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "bz-input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keyup.enter", function SearchProdottoComponent_Template_bz_input_keyup_enter_10_listener() { return ctx.search(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "bz-input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keyup.enter", function SearchProdottoComponent_Template_bz_input_keyup_enter_13_listener() { return ctx.search(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "bz-input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keyup.enter", function SearchProdottoComponent_Template_bz_input_keyup_enter_17_listener() { return ctx.search(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "bz-input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keyup.enter", function SearchProdottoComponent_Template_bz_input_keyup_enter_19_listener() { return ctx.search(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "bz-date-picker", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keyup.enter", function SearchProdottoComponent_Template_bz_date_picker_keyup_enter_22_listener() { return ctx.search(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "bz-date-picker", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keyup.enter", function SearchProdottoComponent_Template_bz_date_picker_keyup_enter_24_listener() { return ctx.search(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "bz-switch", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keyup.enter", function SearchProdottoComponent_Template_bz_switch_keyup_enter_27_listener() { return ctx.search(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "Limited Edition");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](29, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "bz-input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keyup.enter", function SearchProdottoComponent_Template_bz_input_keyup_enter_32_listener() { return ctx.search(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](33, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "bz-input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keyup.enter", function SearchProdottoComponent_Template_bz_input_keyup_enter_36_listener() { return ctx.search(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](37, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "bz-date-picker", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keyup.enter", function SearchProdottoComponent_Template_bz_date_picker_keyup_enter_40_listener() { return ctx.search(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "bz-date-picker", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keyup.enter", function SearchProdottoComponent_Template_bz_date_picker_keyup_enter_42_listener() { return ctx.search(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "bz-date-picker", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keyup.enter", function SearchProdottoComponent_Template_bz_date_picker_keyup_enter_45_listener() { return ctx.search(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "bz-date-picker", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keyup.enter", function SearchProdottoComponent_Template_bz_date_picker_keyup_enter_47_listener() { return ctx.search(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 8, "header.search"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.searchProdottoForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("isPlaceholder", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("isPlaceholder", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("isPlaceholder", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("isPlaceholder", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("isPlaceholder", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("isPlaceholder", false);
    } }, directives: [blazing__WEBPACK_IMPORTED_MODULE_1__["BzCardComponent"], blazing__WEBPACK_IMPORTED_MODULE_1__["BzCardHeaderComponent"], blazing__WEBPACK_IMPORTED_MODULE_1__["BzCardContentComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], blazing__WEBPACK_IMPORTED_MODULE_1__["BzInputComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], blazing__WEBPACK_IMPORTED_MODULE_1__["BzDatePickerComponent"], blazing__WEBPACK_IMPORTED_MODULE_1__["BzSwitchComponent"]], pipes: [translate_ng__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWFyY2gtcHJvZG90dG8uY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "Twrq":
/*!**************************************************************************!*\
  !*** ./src/app/pages/voila2sample-ms-demo-fe/prodotto/prodotto.model.ts ***!
  \**************************************************************************/
/*! exports provided: Prodotto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Prodotto", function() { return Prodotto; });
/* harmony import */ var _shared_base_base_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/base/base.model */ "JxpM");
/* harmony import */ var blazing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! blazing */ "pYbk");


class Prodotto extends _shared_base_base_model__WEBPACK_IMPORTED_MODULE_0__["BaseModel"] {
    constructor(prodotto) { super(); this.mapEntity(prodotto); }
    /**
     * Get Prodotto objectKey.
     *
     * @returns
     */
    getObjectKey() {
        const bzStringBuilder = new blazing__WEBPACK_IMPORTED_MODULE_1__["BzStringBuilder"]();
        const builder = bzStringBuilder
            .append(this.idProdotto);
        return builder.value;
    }
    /**
     * Map entity to model.
     *
     * @param prodotto
     */
    mapEntity(prodotto) {
        if (prodotto) {
            const bzAutoMapper = blazing__WEBPACK_IMPORTED_MODULE_1__["BzAutoMapper"].getInstance();
            bzAutoMapper.map('Prodotto', 'IProdotto', prodotto, this);
        }
    }
}


/***/ }),

/***/ "aD5j":
/*!***************************************************************************!*\
  !*** ./src/app/pages/voila2sample-ms-demo-fe/prodotto/prodotto.module.ts ***!
  \***************************************************************************/
/*! exports provided: ProdottoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdottoModule", function() { return ProdottoModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _list_prodotto_list_prodotto_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list-prodotto/list-prodotto.component */ "/gd+");
/* harmony import */ var blazing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! blazing */ "pYbk");
/* harmony import */ var _prodotto_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./prodotto-routing.module */ "2yDd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _list_prodotto_search_prodotto_search_prodotto_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list-prodotto/search-prodotto/search-prodotto.component */ "P+WB");
/* harmony import */ var _detail_prodotto_detail_prodotto_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detail-prodotto/detail-prodotto.component */ "7OBx");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _utilities_pipe_utility_pipe_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../utilities/pipe/utility-pipe.module */ "GFGE");
/* harmony import */ var translate_ng__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! translate-ng */ "JfpY");
/* harmony import */ var _detail_prodotto_tabs_prodotto_tabs_prodotto_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./detail-prodotto/tabs-prodotto/tabs-prodotto.component */ "cQIp");
/* harmony import */ var _dialog_dialog_list_prodotto_dialog_list_prodotto_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../dialog/dialog-list-prodotto/dialog-list-prodotto.component */ "lL2B");
/* harmony import */ var _detail_prodotto_tabs_prodotto_riga_ordine_tab_riga_ordine_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./detail-prodotto/tabs-prodotto/riga-ordine/tab-riga-ordine.component */ "76Nv");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ "fXoL");















const COMPONENTS = [
    _list_prodotto_list_prodotto_component__WEBPACK_IMPORTED_MODULE_1__["ListProdottoComponent"],
    _list_prodotto_search_prodotto_search_prodotto_component__WEBPACK_IMPORTED_MODULE_5__["SearchProdottoComponent"],
    _detail_prodotto_detail_prodotto_component__WEBPACK_IMPORTED_MODULE_6__["DetailProdottoComponent"],
    _detail_prodotto_tabs_prodotto_tabs_prodotto_component__WEBPACK_IMPORTED_MODULE_10__["TabsProdottoComponent"],
    _dialog_dialog_list_prodotto_dialog_list_prodotto_component__WEBPACK_IMPORTED_MODULE_11__["DialogListProdottoComponent"],
    _detail_prodotto_tabs_prodotto_riga_ordine_tab_riga_ordine_component__WEBPACK_IMPORTED_MODULE_12__["TabRigaOrdineComponent"],
];
class ProdottoModule {
}
ProdottoModule.ɵfac = function ProdottoModule_Factory(t) { return new (t || ProdottoModule)(); };
ProdottoModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({ type: ProdottoModule });
ProdottoModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            blazing__WEBPACK_IMPORTED_MODULE_2__["BzCardModule"],
            blazing__WEBPACK_IMPORTED_MODULE_2__["BzTableModule"],
            _prodotto_routing_module__WEBPACK_IMPORTED_MODULE_3__["ProdottoRoutingModule"],
            blazing__WEBPACK_IMPORTED_MODULE_2__["BzButtonModule"],
            blazing__WEBPACK_IMPORTED_MODULE_2__["BzInputModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            blazing__WEBPACK_IMPORTED_MODULE_2__["BzDatePickerModule"],
            blazing__WEBPACK_IMPORTED_MODULE_2__["BzSwitchModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"],
            blazing__WEBPACK_IMPORTED_MODULE_2__["BzTooltipModule"],
            blazing__WEBPACK_IMPORTED_MODULE_2__["BzDropdownModule"],
            blazing__WEBPACK_IMPORTED_MODULE_2__["BzToastrModule"],
            blazing__WEBPACK_IMPORTED_MODULE_2__["BzErrorModule"],
            _utilities_pipe_utility_pipe_module__WEBPACK_IMPORTED_MODULE_8__["UtilityPipeModule"],
            blazing__WEBPACK_IMPORTED_MODULE_2__["BzDialogModule"],
            blazing__WEBPACK_IMPORTED_MODULE_2__["BzTabsetModule"],
            blazing__WEBPACK_IMPORTED_MODULE_2__["BzEventModule"],
            translate_ng__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"],
            blazing__WEBPACK_IMPORTED_MODULE_2__["BzIconModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](ProdottoModule, { declarations: [_list_prodotto_list_prodotto_component__WEBPACK_IMPORTED_MODULE_1__["ListProdottoComponent"],
        _list_prodotto_search_prodotto_search_prodotto_component__WEBPACK_IMPORTED_MODULE_5__["SearchProdottoComponent"],
        _detail_prodotto_detail_prodotto_component__WEBPACK_IMPORTED_MODULE_6__["DetailProdottoComponent"],
        _detail_prodotto_tabs_prodotto_tabs_prodotto_component__WEBPACK_IMPORTED_MODULE_10__["TabsProdottoComponent"],
        _dialog_dialog_list_prodotto_dialog_list_prodotto_component__WEBPACK_IMPORTED_MODULE_11__["DialogListProdottoComponent"],
        _detail_prodotto_tabs_prodotto_riga_ordine_tab_riga_ordine_component__WEBPACK_IMPORTED_MODULE_12__["TabRigaOrdineComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        blazing__WEBPACK_IMPORTED_MODULE_2__["BzCardModule"],
        blazing__WEBPACK_IMPORTED_MODULE_2__["BzTableModule"],
        _prodotto_routing_module__WEBPACK_IMPORTED_MODULE_3__["ProdottoRoutingModule"],
        blazing__WEBPACK_IMPORTED_MODULE_2__["BzButtonModule"],
        blazing__WEBPACK_IMPORTED_MODULE_2__["BzInputModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
        blazing__WEBPACK_IMPORTED_MODULE_2__["BzDatePickerModule"],
        blazing__WEBPACK_IMPORTED_MODULE_2__["BzSwitchModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"],
        blazing__WEBPACK_IMPORTED_MODULE_2__["BzTooltipModule"],
        blazing__WEBPACK_IMPORTED_MODULE_2__["BzDropdownModule"],
        blazing__WEBPACK_IMPORTED_MODULE_2__["BzToastrModule"],
        blazing__WEBPACK_IMPORTED_MODULE_2__["BzErrorModule"],
        _utilities_pipe_utility_pipe_module__WEBPACK_IMPORTED_MODULE_8__["UtilityPipeModule"],
        blazing__WEBPACK_IMPORTED_MODULE_2__["BzDialogModule"],
        blazing__WEBPACK_IMPORTED_MODULE_2__["BzTabsetModule"],
        blazing__WEBPACK_IMPORTED_MODULE_2__["BzEventModule"],
        translate_ng__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"],
        blazing__WEBPACK_IMPORTED_MODULE_2__["BzIconModule"]] }); })();


/***/ }),

/***/ "cQIp":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/pages/voila2sample-ms-demo-fe/prodotto/detail-prodotto/tabs-prodotto/tabs-prodotto.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: TabsProdottoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsProdottoComponent", function() { return TabsProdottoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! voila2-runtime-ng */ "WGmK");
/* harmony import */ var blazing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! blazing */ "pYbk");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _riga_ordine_tab_riga_ordine_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./riga-ordine/tab-riga-ordine.component */ "76Nv");
/* harmony import */ var _utilities_pipe_utility_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../utilities/pipe/utility-pipe */ "SWKW");









function TabsProdottoComponent_bz_tab_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "bz-tab", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-tab-riga-ordine", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.formGroup)("entity", ctx_r0.entity)("pageStatus", ctx_r0.pageStatus)("readonly", false);
} }
class TabsProdottoComponent {
    constructor() {
        this.privileges = Object(voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_2__["getPrivileges"])();
    }
    get Privileges() {
        return Object(voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_2__["getPrivilegesEnum"])();
    }
    ngOnChanges(changes) {
        this.manageEntityChanges(changes);
        this.managePageSatutusChanges(changes);
    }
    managePageSatutusChanges(changes) {
        const pageStatusChanges = changes.pageStatus;
        if (pageStatusChanges)
            this.pageStatus = pageStatusChanges === null || pageStatusChanges === void 0 ? void 0 : pageStatusChanges.currentValue;
    }
    manageEntityChanges(changes) {
        const entityChanges = changes.entity;
        if (entityChanges === null || entityChanges === void 0 ? void 0 : entityChanges.currentValue) {
            this.entity = entityChanges.currentValue;
        }
    }
}
TabsProdottoComponent.ɵfac = function TabsProdottoComponent_Factory(t) { return new (t || TabsProdottoComponent)(); };
TabsProdottoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TabsProdottoComponent, selectors: [["app-tabs-prodotto"]], inputs: { formGroup: "formGroup", entity: "entity", pageStatus: "pageStatus" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 3, vars: 4, consts: [["tabTitle", "RIGA ORDINE ", 4, "ngIf"], ["tabTitle", "RIGA ORDINE "], [3, "formGroup", "entity", "pageStatus", "readonly"]], template: function TabsProdottoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "bz-tabset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TabsProdottoComponent_bz_tab_1_Template, 2, 4, "bz-tab", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "hasPermission");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, ctx.Privileges == null ? null : ctx.Privileges.PRODOTTO_FIND_BY_THE_RIGA_ORDINE_OBJECT_KEY, ctx.privileges));
    } }, directives: [blazing__WEBPACK_IMPORTED_MODULE_3__["BzTabsetComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], blazing__WEBPACK_IMPORTED_MODULE_3__["BzTabComponent"], _riga_ordine_tab_riga_ordine_component__WEBPACK_IMPORTED_MODULE_5__["TabRigaOrdineComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"]], pipes: [_utilities_pipe_utility_pipe__WEBPACK_IMPORTED_MODULE_6__["PermissionPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWJzLXByb2RvdHRvLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "f751":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/voila2sample-ms-demo-fe/prodotto/prodotto-group-api.service.ts ***!
  \**************************************************************************************/
/*! exports provided: ProdottoGroupApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdottoGroupApiService", function() { return ProdottoGroupApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _prodotto_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./prodotto-api.service */ "nnBb");



class ProdottoGroupApiService {
    constructor(injector) {
        this.injector = injector;
    }
    get prodotto() {
        if (!this.prodottoApiService)
            this.prodottoApiService = this.injector.get(_prodotto_api_service__WEBPACK_IMPORTED_MODULE_1__["ProdottoApiService"]);
        return this.prodottoApiService;
    }
}
ProdottoGroupApiService.ɵfac = function ProdottoGroupApiService_Factory(t) { return new (t || ProdottoGroupApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"])); };
ProdottoGroupApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProdottoGroupApiService, factory: ProdottoGroupApiService.ɵfac });


/***/ }),

/***/ "fWqq":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/voila2sample-ms-demo-fe/prodotto/prodotto.constant.ts ***!
  \*****************************************************************************/
/*! exports provided: prodotto_ */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prodotto_", function() { return prodotto_; });
const prodotto_ = {
    detail: {
        toast: {
            SUCCESS_INSERT: 'Prodotto aggiunto con successo',
            SUCCESS_DELETE: 'Prodotto eliminato con successo',
            SUCCESS_UPDATE: 'Prodotto aggiornato con successo'
        },
        relLink: {
            THE_RIGA_ORDINE: 'theRigaOrdine',
        },
        dialog: {
            DELETE_MESSAGE: "Sei sicuro di voler cancellare prodotto ?"
        },
        path: {
            LIST: '/pages/ms-demo/prodotto/list-prodotto'
        }
    },
};


/***/ }),

/***/ "o8+T":
/*!*************************************************************************!*\
  !*** ./src/app/pages/voila2sample-ms-demo-fe/prodotto/prodotto-form.ts ***!
  \*************************************************************************/
/*! exports provided: prodottoForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prodottoForm", function() { return prodottoForm; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");

function prodottoForm(formBuilder) {
    return formBuilder.group({
        idProdotto: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
        descrizioneProdotto: [null],
        prezzoUnitario: [null],
        dataScadenza: [null],
        limitedEdition: [null],
        createdBy: [null],
        lastModifiedBy: [null],
        createdDate: [null],
        lastModifiedDate: [null],
        theRigaOrdine: [[]],
    });
}


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
//# sourceMappingURL=prodotto-prodotto-module.js.map