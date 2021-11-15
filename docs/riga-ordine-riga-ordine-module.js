(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["riga-ordine-riga-ordine-module"],{

/***/ "1XJX":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/voila2sample-ms-demo-fe/riga-ordine/riga-ordine-routing.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: RigaOrdineRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RigaOrdineRoutingModule", function() { return RigaOrdineRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_security_security_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/security/security.config */ "n8Yp");
/* harmony import */ var voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! voila2-runtime-ng */ "WGmK");
/* harmony import */ var _detail_riga_ordine_detail_riga_ordine_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./detail-riga-ordine/detail-riga-ordine.component */ "snN0");
/* harmony import */ var _list_riga_ordine_list_riga_ordine_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list-riga-ordine/list-riga-ordine.component */ "KYPr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");







const Privileges = Object(voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_2__["getPrivilegesEnum"])();
const routes = [
    {
        path: '',
        children: [
            {
                path: 'list-riga-ordine',
                component: _list_riga_ordine_list_riga_ordine_component__WEBPACK_IMPORTED_MODULE_4__["ListRigaOrdineComponent"],
                canActivate: Object(src_app_security_security_config__WEBPACK_IMPORTED_MODULE_1__["getAuthGuards"])(),
                data: { privileges: [Privileges.RIGA_ORDINE_FIND_PAGINATED] }
            },
            {
                path: 'detail-riga-ordine/new',
                component: _detail_riga_ordine_detail_riga_ordine_component__WEBPACK_IMPORTED_MODULE_3__["DetailRigaOrdineComponent"],
                canActivate: Object(src_app_security_security_config__WEBPACK_IMPORTED_MODULE_1__["getAuthGuards"])(),
                data: { pageSatus: 'new', privileges: [Privileges.RIGA_ORDINE_CREATE] }
            },
            {
                path: 'detail-riga-ordine/:id/view',
                component: _detail_riga_ordine_detail_riga_ordine_component__WEBPACK_IMPORTED_MODULE_3__["DetailRigaOrdineComponent"],
                canActivate: Object(src_app_security_security_config__WEBPACK_IMPORTED_MODULE_1__["getAuthGuards"])(),
                data: { pageSatus: 'view', privileges: [Privileges.RIGA_ORDINE_FIND_BY_ID] }
            },
            {
                path: 'detail-riga-ordine/:id/edit',
                component: _detail_riga_ordine_detail_riga_ordine_component__WEBPACK_IMPORTED_MODULE_3__["DetailRigaOrdineComponent"],
                canActivate: Object(src_app_security_security_config__WEBPACK_IMPORTED_MODULE_1__["getAuthGuards"])(),
                data: { pageSatus: 'edit', privileges: [Privileges.RIGA_ORDINE_UPDATE] }
            }
        ]
    }
];
class RigaOrdineRoutingModule {
}
RigaOrdineRoutingModule.ɵfac = function RigaOrdineRoutingModule_Factory(t) { return new (t || RigaOrdineRoutingModule)(); };
RigaOrdineRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: RigaOrdineRoutingModule });
RigaOrdineRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](RigaOrdineRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "5CLR":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/pages/voila2sample-ms-demo-fe/riga-ordine/list-riga-ordine/search-riga-ordine/search-riga-ordine.component.ts ***!
  \*******************************************************************************************************************************/
/*! exports provided: SearchRigaOrdineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchRigaOrdineComponent", function() { return SearchRigaOrdineComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var blazing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! blazing */ "pYbk");
/* harmony import */ var _riga_ordine_group_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../riga-ordine-group-api.service */ "9df2");
/* harmony import */ var voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! voila2-runtime-ng */ "WGmK");
/* harmony import */ var _ordine_ordine_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ordine/ordine-api.service */ "AiQM");
/* harmony import */ var _prodotto_prodotto_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../prodotto/prodotto-api.service */ "nnBb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var translate_ng__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! translate-ng */ "JfpY");











const PROVIDERS = [
    _riga_ordine_group_api_service__WEBPACK_IMPORTED_MODULE_2__["RigaOrdineGroupApiService"],
    _ordine_ordine_api_service__WEBPACK_IMPORTED_MODULE_4__["OrdineApiService"],
    _prodotto_prodotto_api_service__WEBPACK_IMPORTED_MODULE_5__["ProdottoApiService"],
];
class SearchRigaOrdineComponent {
    constructor(formBuilder, dateService, rigaOrdineGroupApiService) {
        this.formBuilder = formBuilder;
        this.dateService = dateService;
        this.rigaOrdineGroupApiService = rigaOrdineGroupApiService;
        this.ordineList = [];
        this.prodottoList = [];
    }
    ngOnInit() {
        this.inizialize();
        this.getParentsList();
    }
    search() {
        let rigaOrdineCriteria = Object.assign({});
        if (this.searchRigaOrdineForm.value) {
            const quantitaFrom = this.searchRigaOrdineForm.value.quantitaFrom;
            const quantitaTo = this.searchRigaOrdineForm.value.quantitaTo;
            //quantita
            if (quantitaFrom || quantitaTo) {
                rigaOrdineCriteria.quantita = new voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_3__["BigDecimalFilter"];
                rigaOrdineCriteria.quantita.setGreaterOrEqualThan(quantitaFrom);
                rigaOrdineCriteria.quantita.setLessOrEqualThan(quantitaTo);
            }
            // theOrdineObjectKey
            if (this.searchRigaOrdineForm.value.theOrdineObjectKey) {
                rigaOrdineCriteria.theOrdineObjectKey = this.searchRigaOrdineForm.value.theOrdineObjectKey;
            }
            // theProdottoObjectKey
            if (this.searchRigaOrdineForm.value.theProdottoObjectKey) {
                rigaOrdineCriteria.theProdottoObjectKey = this.searchRigaOrdineForm.value.theProdottoObjectKey;
            }
        }
        return rigaOrdineCriteria;
    }
    inizialize() {
        this.searchRigaOrdineForm = this.formBuilder.group({
            'quantitaFrom': [null],
            'quantitaTo': [null],
            'theOrdineObjectKey': [null],
            'theProdottoObjectKey': [null]
        });
    }
    getOrdineList() {
        this.rigaOrdineGroupApiService.ordine.getOrdineByCriteria().subscribe((data) => {
            this.ordineList = Object(voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_3__["getListForDropdown"])('ordine', data);
        });
    }
    getProdottoList() {
        this.rigaOrdineGroupApiService.prodotto.getProdottoByCriteria().subscribe((data) => {
            this.prodottoList = Object(voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_3__["getListForDropdown"])('prodotto', data);
        });
    }
    getParentsList() {
        this.getOrdineList();
        this.getProdottoList();
    }
}
SearchRigaOrdineComponent.ɵfac = function SearchRigaOrdineComponent_Factory(t) { return new (t || SearchRigaOrdineComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](blazing__WEBPACK_IMPORTED_MODULE_1__["DateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_riga_ordine_group_api_service__WEBPACK_IMPORTED_MODULE_2__["RigaOrdineGroupApiService"])); };
SearchRigaOrdineComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: SearchRigaOrdineComponent, selectors: [["app-search-riga-ordine"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵProvidersFeature"]([...PROVIDERS])], decls: 19, vars: 6, consts: [["isCollapsable", "", 1, "card"], [3, "formGroup"], [1, "fk-row", "inputs"], [1, "fk-col-8"], ["label", "Quantita da", "placeholder", "da", "formControlName", "quantitaFrom", 3, "keyup.enter"], ["label", "Quantita a", "placeholder", "a", "formControlName", "quantitaTo", 3, "keyup.enter"], ["label", "Ordine", "optionLabel", "objectTitle", "optionValue", "objectKey", "formControlName", "theOrdineObjectKey", 3, "options"], ["label", "Prodotto", "optionLabel", "objectTitle", "optionValue", "objectKey", "formControlName", "theProdottoObjectKey", 3, "options"]], template: function SearchRigaOrdineComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "bz-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "bz-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "bz-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "bz-input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("keyup.enter", function SearchRigaOrdineComponent_Template_bz_input_keyup_enter_8_listener() { return ctx.search(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "bz-input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("keyup.enter", function SearchRigaOrdineComponent_Template_bz_input_keyup_enter_10_listener() { return ctx.search(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "bz-dropdown", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](14, "bz-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "bz-dropdown", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](18, "bz-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 4, "header.search"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.searchRigaOrdineForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("options", ctx.ordineList);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("options", ctx.prodottoList);
    } }, directives: [blazing__WEBPACK_IMPORTED_MODULE_1__["BzCardComponent"], blazing__WEBPACK_IMPORTED_MODULE_1__["BzCardHeaderComponent"], blazing__WEBPACK_IMPORTED_MODULE_1__["BzCardContentComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], blazing__WEBPACK_IMPORTED_MODULE_1__["BzInputComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], blazing__WEBPACK_IMPORTED_MODULE_1__["BzDropdownComponent"], blazing__WEBPACK_IMPORTED_MODULE_1__["BzErrorComponent"]], pipes: [translate_ng__WEBPACK_IMPORTED_MODULE_7__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWFyY2gtcmlnYS1vcmRpbmUuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "8beH":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/pages/voila2sample-ms-demo-fe/riga-ordine/detail-riga-ordine/tabs-riga-ordine/tabs-riga-ordine.component.ts ***!
  \*****************************************************************************************************************************/
/*! exports provided: TabsRigaOrdineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsRigaOrdineComponent", function() { return TabsRigaOrdineComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! voila2-runtime-ng */ "WGmK");
/* harmony import */ var blazing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! blazing */ "pYbk");





class TabsRigaOrdineComponent {
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
TabsRigaOrdineComponent.ɵfac = function TabsRigaOrdineComponent_Factory(t) { return new (t || TabsRigaOrdineComponent)(); };
TabsRigaOrdineComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TabsRigaOrdineComponent, selectors: [["app-tabs-riga-ordine"]], inputs: { formGroup: "formGroup", entity: "entity", pageStatus: "pageStatus" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 1, vars: 0, template: function TabsRigaOrdineComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "bz-tabset");
    } }, directives: [blazing__WEBPACK_IMPORTED_MODULE_3__["BzTabsetComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWJzLXJpZ2Etb3JkaW5lLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "9df2":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/voila2sample-ms-demo-fe/riga-ordine/riga-ordine-group-api.service.ts ***!
  \********************************************************************************************/
/*! exports provided: RigaOrdineGroupApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RigaOrdineGroupApiService", function() { return RigaOrdineGroupApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _riga_ordine_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./riga-ordine-api.service */ "Vbgi");
/* harmony import */ var _voila2sample_ms_demo_fe_ordine_ordine_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../voila2sample-ms-demo-fe/ordine/ordine-api.service */ "AiQM");
/* harmony import */ var _voila2sample_ms_demo_fe_prodotto_prodotto_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../voila2sample-ms-demo-fe/prodotto/prodotto-api.service */ "nnBb");





class RigaOrdineGroupApiService {
    constructor(injector) {
        this.injector = injector;
    }
    get rigaOrdine() {
        if (!this.rigaOrdineApiService)
            this.rigaOrdineApiService = this.injector.get(_riga_ordine_api_service__WEBPACK_IMPORTED_MODULE_1__["RigaOrdineApiService"]);
        return this.rigaOrdineApiService;
    }
    get ordine() {
        if (!this.ordineApiService)
            this.ordineApiService = this.injector.get(_voila2sample_ms_demo_fe_ordine_ordine_api_service__WEBPACK_IMPORTED_MODULE_2__["OrdineApiService"]);
        return this.ordineApiService;
    }
    get prodotto() {
        if (!this.prodottoApiService)
            this.prodottoApiService = this.injector.get(_voila2sample_ms_demo_fe_prodotto_prodotto_api_service__WEBPACK_IMPORTED_MODULE_3__["ProdottoApiService"]);
        return this.prodottoApiService;
    }
}
RigaOrdineGroupApiService.ɵfac = function RigaOrdineGroupApiService_Factory(t) { return new (t || RigaOrdineGroupApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"])); };
RigaOrdineGroupApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RigaOrdineGroupApiService, factory: RigaOrdineGroupApiService.ɵfac });


/***/ }),

/***/ "AGGt":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/voila2sample-ms-demo-fe/riga-ordine/riga-ordine.constant.ts ***!
  \***********************************************************************************/
/*! exports provided: rigaOrdine_ */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rigaOrdine_", function() { return rigaOrdine_; });
const rigaOrdine_ = {
    detail: {
        toast: {
            SUCCESS_INSERT: 'RigaOrdine aggiunto con successo',
            SUCCESS_DELETE: 'RigaOrdine eliminato con successo',
            SUCCESS_UPDATE: 'RigaOrdine aggiornato con successo'
        },
        relLink: {},
        dialog: {
            DELETE_MESSAGE: "Sei sicuro di voler cancellare rigaOrdine ?"
        },
        path: {
            LIST: '/pages/ms-demo/riga-ordine/list-riga-ordine'
        }
    },
};


/***/ }),

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

/***/ "KYPr":
/*!**********************************************************************************************************!*\
  !*** ./src/app/pages/voila2sample-ms-demo-fe/riga-ordine/list-riga-ordine/list-riga-ordine.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: ListRigaOrdineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListRigaOrdineComponent", function() { return ListRigaOrdineComponent; });
/* harmony import */ var blazing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! blazing */ "pYbk");
/* harmony import */ var _shared_base_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/base/base.component */ "nOOO");
/* harmony import */ var _riga_ordine_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../riga-ordine-api.service */ "Vbgi");
/* harmony import */ var _utilities_services_buttons_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../utilities/services/buttons.service */ "f4j/");
/* harmony import */ var _search_riga_ordine_search_riga_ordine_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./search-riga-ordine/search-riga-ordine.component */ "5CLR");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! voila2-runtime-ng */ "WGmK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var translate_ng__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! translate-ng */ "JfpY");
/* harmony import */ var _utilities_pipe_utility_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../utilities/pipe/utility-pipe */ "SWKW");















function ListRigaOrdineComponent_td_8_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ListRigaOrdineComponent_td_8_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r6); const rigaOrdine_r4 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r5.navigateToView(rigaOrdine_r4.objectKey); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rigaOrdine_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](rigaOrdine_r4.rigaOrdineKey.theOrdineObjectTitle);
} }
function ListRigaOrdineComponent_td_11_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ListRigaOrdineComponent_td_11_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r9); const rigaOrdine_r7 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r8.navigateToView(rigaOrdine_r7.objectKey); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rigaOrdine_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](rigaOrdine_r7.rigaOrdineKey.theProdottoObjectTitle);
} }
function ListRigaOrdineComponent_td_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rigaOrdine_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", rigaOrdine_r10.quantita, "");
} }
function ListRigaOrdineComponent_button_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "buttons.new"), " ");
} }
class ListRigaOrdineComponent extends _shared_base_base_component__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"] {
    constructor(rigaOrdineApiService, router) {
        super();
        this.rigaOrdineApiService = rigaOrdineApiService;
        this.router = router;
        this.rigaOrdineList = [];
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
        this.rigaOrdineApiService.getRigaOrdineByCriteria(options).subscribe((data) => {
            this.rigaOrdineList = Object(voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_6__["extractResponse"])('rigaOrdine', data);
            this.totalPages = Object(voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_6__["extractTotalPages"])(data);
            this.spinner = false;
        }, () => {
            this.spinner = false;
        });
    }
    searchWithCriteria() {
        this.rigaOrdineCriteria = this.searchRigaOrdine.search();
        const object = { page: 0, pageSize: this.pageSize };
        this.paginateTable(object, this.rigaOrdineCriteria);
    }
    navigateToView(id) {
        Object(voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_6__["navigateToPath"])('/pages/ms-demo/riga-ordine/detail-riga-ordine/' + id + '/view', this.router);
    }
}
ListRigaOrdineComponent.ɵfac = function ListRigaOrdineComponent_Factory(t) { return new (t || ListRigaOrdineComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_riga_ordine_api_service__WEBPACK_IMPORTED_MODULE_2__["RigaOrdineApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
ListRigaOrdineComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: ListRigaOrdineComponent, selectors: [["app-list-riga-ordine"]], viewQuery: function ListRigaOrdineComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_search_riga_ordine_search_riga_ordine_component__WEBPACK_IMPORTED_MODULE_4__["SearchRigaOrdineComponent"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.searchRigaOrdine = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([_riga_ordine_api_service__WEBPACK_IMPORTED_MODULE_2__["RigaOrdineApiService"], _utilities_services_buttons_service__WEBPACK_IMPORTED_MODULE_3__["ButtonService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]], decls: 25, vars: 15, consts: [[3, "bzSpinner"], ["paginatedBe", "", 3, "sources", "pageSize", "nVisiblePages", "totalPages", "pageObject"], ["bzHeaderColumn", "", "scope", "col"], [4, "bzColumnDef"], ["bzHeaderColumn", "", "bzSortColumn", "quantita", "scope", "col"], ["bzTableNoValue", ""], [1, "card"], ["bzButton", "", "status", "primary", 1, "button", 3, "click"], ["bzButton", "", "status", "primary", "class", "button", "routerLink", "/pages/ms-demo/riga-ordine/detail-riga-ordine/new", 4, "ngIf"], [1, "fk-pointer", 3, "click"], ["bzButton", "", "status", "primary", "routerLink", "/pages/ms-demo/riga-ordine/detail-riga-ordine/new", 1, "button"]], template: function ListRigaOrdineComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "bz-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "bz-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "bz-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "bz-table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("pageObject", function ListRigaOrdineComponent_Template_bz_table_pageObject_5_listener($event) { return ctx.paginateTable($event, ctx.rigaOrdineCriteria); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, " Ordine ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, ListRigaOrdineComponent_td_8_Template, 3, 1, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, " Prodotto ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](11, ListRigaOrdineComponent_td_11_Template, 3, 1, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, " Quantita ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](14, ListRigaOrdineComponent_td_14_Template, 2, 1, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](15, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](17, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](18, "app-search-riga-ordine");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "bz-card", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "bz-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ListRigaOrdineComponent_Template_button_click_21_listener() { return ctx.searchWithCriteria(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22, " Cerca");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](23, ListRigaOrdineComponent_button_23_Template, 3, 3, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](24, "hasPermission");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("bzSpinner", ctx.spinner);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" Riga Ordine ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 8, "header.list"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("sources", ctx.rigaOrdineList)("pageSize", ctx.pageSize)("nVisiblePages", 3)("totalPages", ctx.totalPages);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](17, 10, "label.noElements"), " Riga Ordine ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](24, 12, ctx.Privileges == null ? null : ctx.Privileges.RIGA_ORDINE_CREATE, ctx.privileges));
    } }, directives: [blazing__WEBPACK_IMPORTED_MODULE_0__["BzCardComponent"], blazing__WEBPACK_IMPORTED_MODULE_0__["BzCardHeaderComponent"], blazing__WEBPACK_IMPORTED_MODULE_0__["BzCardContentComponent"], blazing__WEBPACK_IMPORTED_MODULE_0__["BzTableComponent"], blazing__WEBPACK_IMPORTED_MODULE_0__["BzTableHeaderDirective"], blazing__WEBPACK_IMPORTED_MODULE_0__["BzTableColumnDefDirective"], blazing__WEBPACK_IMPORTED_MODULE_0__["BzTableColumnSortDirective"], blazing__WEBPACK_IMPORTED_MODULE_0__["BzTableNoValueDirective"], _search_riga_ordine_search_riga_ordine_component__WEBPACK_IMPORTED_MODULE_4__["SearchRigaOrdineComponent"], blazing__WEBPACK_IMPORTED_MODULE_0__["BzButtonDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"]], pipes: [translate_ng__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"], _utilities_pipe_utility_pipe__WEBPACK_IMPORTED_MODULE_10__["PermissionPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0LXJpZ2Etb3JkaW5lLmNvbXBvbmVudC5zY3NzIn0= */"] });


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


/***/ }),

/***/ "snN0":
/*!**************************************************************************************************************!*\
  !*** ./src/app/pages/voila2sample-ms-demo-fe/riga-ordine/detail-riga-ordine/detail-riga-ordine.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: DetailRigaOrdineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailRigaOrdineComponent", function() { return DetailRigaOrdineComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _utilities_services_buttons_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../utilities/services/buttons.service */ "f4j/");
/* harmony import */ var _riga_ordine_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../riga-ordine-api.service */ "Vbgi");
/* harmony import */ var _riga_ordine_group_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../riga-ordine-group-api.service */ "9df2");
/* harmony import */ var _riga_ordine_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../riga-ordine-form */ "Dz6k");
/* harmony import */ var _utilities_services_route_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../utilities/services/route.service */ "8RJb");
/* harmony import */ var _utilities_dialog_confirm_dialog_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../utilities/dialog/confirm-dialog.service */ "wqBZ");
/* harmony import */ var _shared_base_base_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/base/base.component */ "nOOO");
/* harmony import */ var _utilities_enum_page_status_enum__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../utilities/enum/page-status.enum */ "ZO1O");
/* harmony import */ var _utilities_services_overlays_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../utilities/services/overlays.service */ "zd5x");
/* harmony import */ var _riga_ordine_constant__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../riga-ordine.constant */ "AGGt");
/* harmony import */ var voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! voila2-runtime-ng */ "WGmK");
/* harmony import */ var _voila2sample_ms_demo_fe_ordine_ordine_api_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../voila2sample-ms-demo-fe/ordine/ordine-api.service */ "AiQM");
/* harmony import */ var _voila2sample_ms_demo_fe_prodotto_prodotto_api_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../voila2sample-ms-demo-fe/prodotto/prodotto-api.service */ "nnBb");
/* harmony import */ var translate_ng__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! translate-ng */ "JfpY");
/* harmony import */ var blazing__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! blazing */ "pYbk");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _utilities_pipe_utility_pipe__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../utilities/pipe/utility-pipe */ "SWKW");


























function DetailRigaOrdineComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "bz-dropdown", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "bz-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "bz-dropdown", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "bz-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "bz-input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "bz-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx_r0.ordineList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx_r0.prodottoList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Quantita ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 3, "label.obligatoryValues"), " ");
} }
function DetailRigaOrdineComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Quantita: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Ordine: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Prodotto: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.rigaOrdine == null ? null : ctx_r1.rigaOrdine.quantita);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.rigaOrdine == null ? null : ctx_r1.rigaOrdine.rigaOrdineKey == null ? null : ctx_r1.rigaOrdine.rigaOrdineKey.theOrdineObjectTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.rigaOrdine == null ? null : ctx_r1.rigaOrdine.rigaOrdineKey == null ? null : ctx_r1.rigaOrdine.rigaOrdineKey.theProdottoObjectTitle);
} }
function DetailRigaOrdineComponent_button_16_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("bzClick", function DetailRigaOrdineComponent_button_16_Template_button_bzClick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.insertRigaOrdine(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("bzCheckForm", ctx_r2.rigaOrdineForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, "buttons.save"), " ");
} }
function DetailRigaOrdineComponent_button_19_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("bzClick", function DetailRigaOrdineComponent_button_19_Template_button_bzClick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.editRigaOrdine(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "buttons.edit"), " ");
} }
function DetailRigaOrdineComponent_button_22_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("bzClick", function DetailRigaOrdineComponent_button_22_Template_button_bzClick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.updateRigaOrdine(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("bzCheckForm", ctx_r4.rigaOrdineForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, "buttons.save"), " ");
} }
function DetailRigaOrdineComponent_button_25_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("bzClick", function DetailRigaOrdineComponent_button_25_Template_button_bzClick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.confirmDeleteRigaOrdine(); });
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
    _riga_ordine_api_service__WEBPACK_IMPORTED_MODULE_3__["RigaOrdineApiService"],
    _utilities_services_buttons_service__WEBPACK_IMPORTED_MODULE_2__["ButtonService"],
    _utilities_services_overlays_service__WEBPACK_IMPORTED_MODULE_10__["OverlaysService"],
    _utilities_services_route_service__WEBPACK_IMPORTED_MODULE_6__["RouteService"],
    _utilities_dialog_confirm_dialog_service__WEBPACK_IMPORTED_MODULE_7__["ConfirmDialogService"],
    _riga_ordine_group_api_service__WEBPACK_IMPORTED_MODULE_4__["RigaOrdineGroupApiService"],
    _voila2sample_ms_demo_fe_ordine_ordine_api_service__WEBPACK_IMPORTED_MODULE_13__["OrdineApiService"],
    _voila2sample_ms_demo_fe_prodotto_prodotto_api_service__WEBPACK_IMPORTED_MODULE_14__["ProdottoApiService"],
];
class DetailRigaOrdineComponent extends _shared_base_base_component__WEBPACK_IMPORTED_MODULE_8__["BaseComponent"] {
    constructor(buttonsService, formBuilder, routeService, overlaysService, injector, rigaOrdineGroupApiService) {
        super();
        this.buttonsService = buttonsService;
        this.formBuilder = formBuilder;
        this.routeService = routeService;
        this.overlaysService = overlaysService;
        this.injector = injector;
        this.rigaOrdineGroupApiService = rigaOrdineGroupApiService;
        this.ordineList = [];
        this.prodottoList = [];
        this.spinner = true;
        this.privileges = Object(voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_12__["getPrivileges"])();
    }
    get Privileges() {
        return Object(voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_12__["getPrivilegesEnum"])();
    }
    ngOnInit() {
        this.rigaOrdineForm = Object(_riga_ordine_form__WEBPACK_IMPORTED_MODULE_5__["rigaOrdineForm"])(this.formBuilder);
        this.routeService.route.data.subscribe((data) => {
            this.pageStatus = data.pageSatus;
        });
        this.getRigaOrdineById();
        this.setTabPageStatusOnInit();
        this.getParentsList();
        if (Object(voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_12__["isInNewMode"])(this.pageStatus))
            this.spinner = false;
    }
    insertRigaOrdine() {
        const rigaOrdine = this.rigaOrdineForm.value;
        this.rigaOrdineGroupApiService.rigaOrdine.addRigaOrdine(rigaOrdine).subscribe((rigaOrdineResult) => {
            const toast = this.overlaysService.toast;
            this.rigaOrdine = this.manageResponse(rigaOrdineResult, toast, new translate_ng__WEBPACK_IMPORTED_MODULE_15__["TranslatePipe"](this.injector));
            if (this.rigaOrdine)
                Object(voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_12__["navigateToPath"])('/pages/ms-demo/riga-ordine/detail-riga-ordine/' + this.rigaOrdine.objectKey + '/view', this.routeService.router);
        });
    }
    getRigaOrdineById() {
        if (Object(voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_12__["isInViewEditMode"])(this.pageStatus)) {
            const id = Object(voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_12__["getIdFromPath"])(this.routeService.route);
            if (id) {
                this.rigaOrdineGroupApiService.rigaOrdine.getRigaOrdineById(id).subscribe((rigaOrdineResult) => {
                    this.rigaOrdine = rigaOrdineResult.response;
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
        this.rigaOrdineForm.patchValue({
            rigaOrdineKey: {
                theOrdineObjectKey: this.rigaOrdine.rigaOrdineKey.theOrdineObjectKey,
                idProdotto: this.rigaOrdine.rigaOrdineKey.idProdotto,
                theProdottoObjectKey: this.rigaOrdine.rigaOrdineKey.theProdottoObjectKey,
            },
            quantita: this.rigaOrdine.quantita,
        });
    }
    editRigaOrdine() {
        this.setStatusPage(_utilities_enum_page_status_enum__WEBPACK_IMPORTED_MODULE_9__["PageStatus"].EDIT, this.routeService.location);
        this.getRigaOrdineById();
    }
    updateRigaOrdine() {
        const rigaOrdine = this.rigaOrdineForm.value;
        this.rigaOrdineGroupApiService.rigaOrdine.updateRigaOrdine(rigaOrdine).subscribe((rigaOrdineResult) => {
            const toast = this.overlaysService.toast;
            this.rigaOrdine = this.manageResponse(rigaOrdineResult, toast, new translate_ng__WEBPACK_IMPORTED_MODULE_15__["TranslatePipe"](this.injector));
            if (this.rigaOrdine)
                Object(voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_12__["navigateToPath"])('/pages/ms-demo/riga-ordine/detail-riga-ordine/' + this.rigaOrdine.objectKey + '/view', this.routeService.router);
        });
    }
    /**
     * Delete rigaOrdine by id.
     */
    deleteRigaOrdineById() {
        this.rigaOrdineGroupApiService.rigaOrdine.deleteRigaOrdine(this.rigaOrdine.objectKey).subscribe(() => {
            this.overlaysService.toast.showSuccess(_riga_ordine_constant__WEBPACK_IMPORTED_MODULE_11__["rigaOrdine_"].detail.toast.SUCCESS_DELETE);
            Object(voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_12__["navigateToPath"])(_riga_ordine_constant__WEBPACK_IMPORTED_MODULE_11__["rigaOrdine_"].detail.path.LIST, this.routeService.router);
            this.overlaysService.dialog.closeDialog();
        });
    }
    /**
     * Confirm delete rigaOrdine.
     */
    confirmDeleteRigaOrdine() {
        const message = _riga_ordine_constant__WEBPACK_IMPORTED_MODULE_11__["rigaOrdine_"].detail.dialog.DELETE_MESSAGE;
        this.overlaysService.confirmDialog.openConfirmDialog(message).subscribe((isTrue) => {
            if (isTrue)
                this.deleteRigaOrdineById();
        });
    }
    getOrdineList() {
        this.rigaOrdineGroupApiService.ordine.getOrdineByCriteria().subscribe((data) => {
            this.ordineList = Object(voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_12__["getListForDropdown"])('ordine', data);
        });
    }
    getProdottoList() {
        this.rigaOrdineGroupApiService.prodotto.getProdottoByCriteria().subscribe((data) => {
            this.prodottoList = Object(voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_12__["getListForDropdown"])('prodotto', data);
        });
    }
    getParentsList() {
        this.getOrdineList();
        this.getProdottoList();
    }
}
DetailRigaOrdineComponent.ɵfac = function DetailRigaOrdineComponent_Factory(t) { return new (t || DetailRigaOrdineComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_utilities_services_buttons_service__WEBPACK_IMPORTED_MODULE_2__["ButtonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_utilities_services_route_service__WEBPACK_IMPORTED_MODULE_6__["RouteService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_utilities_services_overlays_service__WEBPACK_IMPORTED_MODULE_10__["OverlaysService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_riga_ordine_group_api_service__WEBPACK_IMPORTED_MODULE_4__["RigaOrdineGroupApiService"])); };
DetailRigaOrdineComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DetailRigaOrdineComponent, selectors: [["app-detail-riga-ordine"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([...PROVIDERS]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 28, vars: 45, consts: [[3, "formGroup"], ["bzTooltip", "Riga Ordine", 1, "fa", "fa-question-circle"], [4, "ngIf"], [1, "card"], ["bzButton", "", "status", "primary", "type", "button", 3, "click"], ["bzButton", "", "status", "primary", "class", "button", 3, "bzCheckForm", "bzClick", 4, "ngIf"], ["bzButton", "", "status", "primary", "class", "button", "type", "button", 3, "bzClick", 4, "ngIf"], ["bzButton", "", "status", "primary", "class", "button", 3, "bzClick", 4, "ngIf"], ["formGroupName", "rigaOrdineKey"], [1, "fk-row", "inputs"], [1, "fk-col-8"], ["label", "Ordine", "optionLabel", "objectTitle", "optionValue", "objectKey", "formControlName", "theOrdineObjectKey", 3, "options"], ["label", "Prodotto", "optionLabel", "objectTitle", "optionValue", "objectKey", "formControlName", "theProdottoObjectKey", 3, "options"], ["label", "Quantita:", "formControlName", "quantita", "type", "number"], ["bzButton", "", "status", "primary", 1, "button", 3, "bzCheckForm", "bzClick"], ["bzButton", "", "status", "primary", "type", "button", 1, "button", 3, "bzClick"], ["bzButton", "", "status", "primary", 1, "button", 3, "bzClick"]], template: function DetailRigaOrdineComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "bz-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "bz-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "bz-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DetailRigaOrdineComponent_ng_container_7_Template, 16, 5, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "hasPageStatus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, DetailRigaOrdineComponent_div_9_Template, 19, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "hasPageStatus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "bz-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "bz-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailRigaOrdineComponent_Template_button_click_13_listener() { return ctx.buttonsService.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, DetailRigaOrdineComponent_button_16_Template, 3, 4, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "hasPageStatus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "hasPermission");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, DetailRigaOrdineComponent_button_19_Template, 3, 3, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "hasPageStatus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "hasPermission");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, DetailRigaOrdineComponent_button_22_Template, 3, 4, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "hasPageStatus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "hasPermission");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, DetailRigaOrdineComponent_button_25_Template, 3, 3, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "hasPageStatus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "hasPermission");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.rigaOrdineForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 9, "header.detail"), " Riga Ordine ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 11, ctx.pageStatus, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](43, _c0)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](10, 14, ctx.pageStatus, "view"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 17, "buttons.goBack"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](17, 19, ctx.pageStatus, "new") && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](18, 22, ctx.Privileges == null ? null : ctx.Privileges.RIGA_ORDINE_CREATE, ctx.privileges));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](20, 25, ctx.pageStatus, "view") && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](21, 28, ctx.Privileges == null ? null : ctx.Privileges.RIGA_ORDINE_FIND_BY_ID, ctx.privileges));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](23, 31, ctx.pageStatus, "edit") && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](24, 34, ctx.Privileges == null ? null : ctx.Privileges.RIGA_ORDINE_UPDATE, ctx.privileges));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](26, 37, ctx.pageStatus, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](44, _c1)) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](27, 40, ctx.Privileges == null ? null : ctx.Privileges.RIGA_ORDINE_DELETE, ctx.privileges));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], blazing__WEBPACK_IMPORTED_MODULE_16__["BzCardComponent"], blazing__WEBPACK_IMPORTED_MODULE_16__["BzCardHeaderComponent"], blazing__WEBPACK_IMPORTED_MODULE_16__["BzTooltipDirective"], blazing__WEBPACK_IMPORTED_MODULE_16__["BzCardContentComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgIf"], blazing__WEBPACK_IMPORTED_MODULE_16__["BzButtonDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupName"], blazing__WEBPACK_IMPORTED_MODULE_16__["BzDropdownComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], blazing__WEBPACK_IMPORTED_MODULE_16__["BzErrorComponent"], blazing__WEBPACK_IMPORTED_MODULE_16__["BzInputComponent"], blazing__WEBPACK_IMPORTED_MODULE_16__["BzClickDirective"]], pipes: [translate_ng__WEBPACK_IMPORTED_MODULE_15__["TranslatePipe"], _utilities_pipe_utility_pipe__WEBPACK_IMPORTED_MODULE_18__["PageStatusPipe"], _utilities_pipe_utility_pipe__WEBPACK_IMPORTED_MODULE_18__["PermissionPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXRhaWwtcmlnYS1vcmRpbmUuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "yr8w":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/voila2sample-ms-demo-fe/riga-ordine/riga-ordine.module.ts ***!
  \*********************************************************************************/
/*! exports provided: RigaOrdineModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RigaOrdineModule", function() { return RigaOrdineModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _list_riga_ordine_list_riga_ordine_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list-riga-ordine/list-riga-ordine.component */ "KYPr");
/* harmony import */ var blazing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! blazing */ "pYbk");
/* harmony import */ var _riga_ordine_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./riga-ordine-routing.module */ "1XJX");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _list_riga_ordine_search_riga_ordine_search_riga_ordine_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list-riga-ordine/search-riga-ordine/search-riga-ordine.component */ "5CLR");
/* harmony import */ var _detail_riga_ordine_detail_riga_ordine_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detail-riga-ordine/detail-riga-ordine.component */ "snN0");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _utilities_pipe_utility_pipe_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../utilities/pipe/utility-pipe.module */ "GFGE");
/* harmony import */ var translate_ng__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! translate-ng */ "JfpY");
/* harmony import */ var _detail_riga_ordine_tabs_riga_ordine_tabs_riga_ordine_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./detail-riga-ordine/tabs-riga-ordine/tabs-riga-ordine.component */ "8beH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ "fXoL");













const COMPONENTS = [
    _list_riga_ordine_list_riga_ordine_component__WEBPACK_IMPORTED_MODULE_1__["ListRigaOrdineComponent"],
    _list_riga_ordine_search_riga_ordine_search_riga_ordine_component__WEBPACK_IMPORTED_MODULE_5__["SearchRigaOrdineComponent"],
    _detail_riga_ordine_detail_riga_ordine_component__WEBPACK_IMPORTED_MODULE_6__["DetailRigaOrdineComponent"],
    _detail_riga_ordine_tabs_riga_ordine_tabs_riga_ordine_component__WEBPACK_IMPORTED_MODULE_10__["TabsRigaOrdineComponent"],
];
class RigaOrdineModule {
}
RigaOrdineModule.ɵfac = function RigaOrdineModule_Factory(t) { return new (t || RigaOrdineModule)(); };
RigaOrdineModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: RigaOrdineModule });
RigaOrdineModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            blazing__WEBPACK_IMPORTED_MODULE_2__["BzCardModule"],
            blazing__WEBPACK_IMPORTED_MODULE_2__["BzTableModule"],
            _riga_ordine_routing_module__WEBPACK_IMPORTED_MODULE_3__["RigaOrdineRoutingModule"],
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
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](RigaOrdineModule, { declarations: [_list_riga_ordine_list_riga_ordine_component__WEBPACK_IMPORTED_MODULE_1__["ListRigaOrdineComponent"],
        _list_riga_ordine_search_riga_ordine_search_riga_ordine_component__WEBPACK_IMPORTED_MODULE_5__["SearchRigaOrdineComponent"],
        _detail_riga_ordine_detail_riga_ordine_component__WEBPACK_IMPORTED_MODULE_6__["DetailRigaOrdineComponent"],
        _detail_riga_ordine_tabs_riga_ordine_tabs_riga_ordine_component__WEBPACK_IMPORTED_MODULE_10__["TabsRigaOrdineComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        blazing__WEBPACK_IMPORTED_MODULE_2__["BzCardModule"],
        blazing__WEBPACK_IMPORTED_MODULE_2__["BzTableModule"],
        _riga_ordine_routing_module__WEBPACK_IMPORTED_MODULE_3__["RigaOrdineRoutingModule"],
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


/***/ })

}]);
//# sourceMappingURL=riga-ordine-riga-ordine-module.js.map