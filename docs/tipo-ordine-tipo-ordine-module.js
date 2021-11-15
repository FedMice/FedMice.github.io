(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tipo-ordine-tipo-ordine-module"],{

/***/ "11Qr":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/voila2sample-ms-demo-fe/tipo-ordine/tipo-ordine-routing.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: TipoOrdineRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipoOrdineRoutingModule", function() { return TipoOrdineRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_security_security_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/security/security.config */ "n8Yp");
/* harmony import */ var voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! voila2-runtime-ng */ "WGmK");
/* harmony import */ var _detail_tipo_ordine_detail_tipo_ordine_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./detail-tipo-ordine/detail-tipo-ordine.component */ "p+LB");
/* harmony import */ var _list_tipo_ordine_list_tipo_ordine_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list-tipo-ordine/list-tipo-ordine.component */ "n9Bg");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");







const Privileges = Object(voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_2__["getPrivilegesEnum"])();
const routes = [
    {
        path: '',
        children: [
            {
                path: 'list-tipo-ordine',
                component: _list_tipo_ordine_list_tipo_ordine_component__WEBPACK_IMPORTED_MODULE_4__["ListTipoOrdineComponent"],
                canActivate: Object(src_app_security_security_config__WEBPACK_IMPORTED_MODULE_1__["getAuthGuards"])(),
                data: { privileges: [Privileges.TIPO_ORDINE_FIND_PAGINATED] }
            },
            {
                path: 'detail-tipo-ordine/new',
                component: _detail_tipo_ordine_detail_tipo_ordine_component__WEBPACK_IMPORTED_MODULE_3__["DetailTipoOrdineComponent"],
                canActivate: Object(src_app_security_security_config__WEBPACK_IMPORTED_MODULE_1__["getAuthGuards"])(),
                data: { pageSatus: 'new', privileges: [Privileges.TIPO_ORDINE_CREATE] }
            },
            {
                path: 'detail-tipo-ordine/:id/view',
                component: _detail_tipo_ordine_detail_tipo_ordine_component__WEBPACK_IMPORTED_MODULE_3__["DetailTipoOrdineComponent"],
                canActivate: Object(src_app_security_security_config__WEBPACK_IMPORTED_MODULE_1__["getAuthGuards"])(),
                data: { pageSatus: 'view', privileges: [Privileges.TIPO_ORDINE_FIND_BY_ID] }
            },
            {
                path: 'detail-tipo-ordine/:id/edit',
                component: _detail_tipo_ordine_detail_tipo_ordine_component__WEBPACK_IMPORTED_MODULE_3__["DetailTipoOrdineComponent"],
                canActivate: Object(src_app_security_security_config__WEBPACK_IMPORTED_MODULE_1__["getAuthGuards"])(),
                data: { pageSatus: 'edit', privileges: [Privileges.TIPO_ORDINE_UPDATE] }
            }
        ]
    }
];
class TipoOrdineRoutingModule {
}
TipoOrdineRoutingModule.ɵfac = function TipoOrdineRoutingModule_Factory(t) { return new (t || TipoOrdineRoutingModule)(); };
TipoOrdineRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: TipoOrdineRoutingModule });
TipoOrdineRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](TipoOrdineRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "6p7s":
/*!********************************************************************************!*\
  !*** ./src/app/pages/voila2sample-ms-demo-fe/tipo-ordine/tipo-ordine.model.ts ***!
  \********************************************************************************/
/*! exports provided: TipoOrdine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipoOrdine", function() { return TipoOrdine; });
/* harmony import */ var _shared_base_base_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/base/base.model */ "JxpM");
/* harmony import */ var blazing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! blazing */ "pYbk");


class TipoOrdine extends _shared_base_base_model__WEBPACK_IMPORTED_MODULE_0__["BaseModel"] {
    constructor(tipoordine) { super(), this.mapEntity(tipoordine); }
    /**
     * Get TipoOrdine objectKey.
     *
     * @returns
     */
    getObjectKey() {
        const bzStringBuilder = new blazing__WEBPACK_IMPORTED_MODULE_1__["BzStringBuilder"]();
        const builder = bzStringBuilder
            .append(this.idTipoOrdine);
        return builder.value;
    }
    /**
     * Map entity to model.
     *
     * @param prodotto
     */
    mapEntity(tipoordine) {
        if (tipoordine) {
            const bzAutoMapper = blazing__WEBPACK_IMPORTED_MODULE_1__["BzAutoMapper"].getInstance();
            bzAutoMapper.map('TipoOrdine', 'ITipoOrdine', tipoordine, this);
        }
    }
}


/***/ }),

/***/ "710N":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/voila2sample-ms-demo-fe/tipo-ordine/tipo-ordine-form.ts ***!
  \*******************************************************************************/
/*! exports provided: tipoOrdineForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tipoOrdineForm", function() { return tipoOrdineForm; });
function tipoOrdineForm(formBuilder) {
    return formBuilder.group({
        idTipoOrdine: [null],
        nomeTipoOrdine: [null],
        theOrdine: [[]],
    });
}


/***/ }),

/***/ "Ed1z":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/voila2sample-ms-demo-fe/tipo-ordine/tipo-ordine.constant.ts ***!
  \***********************************************************************************/
/*! exports provided: tipoOrdine_ */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tipoOrdine_", function() { return tipoOrdine_; });
const tipoOrdine_ = {
    detail: {
        toast: {
            SUCCESS_INSERT: 'TipoOrdine aggiunto con successo',
            SUCCESS_DELETE: 'TipoOrdine eliminato con successo',
            SUCCESS_UPDATE: 'TipoOrdine aggiornato con successo'
        },
        relLink: {
            THE_ORDINE: 'theOrdine',
        },
        dialog: {
            DELETE_MESSAGE: "Sei sicuro di voler cancellare tipoOrdine ?"
        },
        path: {
            LIST: '/pages/ms-demo/tipo-ordine/list-tipo-ordine'
        }
    },
};


/***/ }),

/***/ "Jlo/":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/voila2sample-ms-demo-fe/tipo-ordine/tipo-ordine-group-api.service.ts ***!
  \********************************************************************************************/
/*! exports provided: TipoOrdineGroupApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipoOrdineGroupApiService", function() { return TipoOrdineGroupApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _tipo_ordine_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tipo-ordine-api.service */ "4+27");



class TipoOrdineGroupApiService {
    constructor(injector) {
        this.injector = injector;
    }
    get tipoOrdine() {
        if (!this.tipoOrdineApiService)
            this.tipoOrdineApiService = this.injector.get(_tipo_ordine_api_service__WEBPACK_IMPORTED_MODULE_1__["TipoOrdineApiService"]);
        return this.tipoOrdineApiService;
    }
}
TipoOrdineGroupApiService.ɵfac = function TipoOrdineGroupApiService_Factory(t) { return new (t || TipoOrdineGroupApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"])); };
TipoOrdineGroupApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TipoOrdineGroupApiService, factory: TipoOrdineGroupApiService.ɵfac });


/***/ }),

/***/ "LMga":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/voila2sample-ms-demo-fe/tipo-ordine/tipo-ordine.module.ts ***!
  \*********************************************************************************/
/*! exports provided: TipoOrdineModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipoOrdineModule", function() { return TipoOrdineModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _list_tipo_ordine_list_tipo_ordine_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list-tipo-ordine/list-tipo-ordine.component */ "n9Bg");
/* harmony import */ var blazing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! blazing */ "pYbk");
/* harmony import */ var _tipo_ordine_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tipo-ordine-routing.module */ "11Qr");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _list_tipo_ordine_search_tipo_ordine_search_tipo_ordine_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list-tipo-ordine/search-tipo-ordine/search-tipo-ordine.component */ "ouIK");
/* harmony import */ var _detail_tipo_ordine_detail_tipo_ordine_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detail-tipo-ordine/detail-tipo-ordine.component */ "p+LB");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _utilities_pipe_utility_pipe_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../utilities/pipe/utility-pipe.module */ "GFGE");
/* harmony import */ var translate_ng__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! translate-ng */ "JfpY");
/* harmony import */ var _detail_tipo_ordine_tabs_tipo_ordine_tabs_tipo_ordine_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./detail-tipo-ordine/tabs-tipo-ordine/tabs-tipo-ordine.component */ "jc1D");
/* harmony import */ var _dialog_dialog_list_tipo_ordine_dialog_list_tipo_ordine_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../dialog/dialog-list-tipo-ordine/dialog-list-tipo-ordine.component */ "ZC3r");
/* harmony import */ var _detail_tipo_ordine_tabs_tipo_ordine_ordine_tab_ordine_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./detail-tipo-ordine/tabs-tipo-ordine/ordine/tab-ordine.component */ "OZ9g");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ "fXoL");















const COMPONENTS = [
    _list_tipo_ordine_list_tipo_ordine_component__WEBPACK_IMPORTED_MODULE_1__["ListTipoOrdineComponent"],
    _list_tipo_ordine_search_tipo_ordine_search_tipo_ordine_component__WEBPACK_IMPORTED_MODULE_5__["SearchTipoOrdineComponent"],
    _detail_tipo_ordine_detail_tipo_ordine_component__WEBPACK_IMPORTED_MODULE_6__["DetailTipoOrdineComponent"],
    _detail_tipo_ordine_tabs_tipo_ordine_tabs_tipo_ordine_component__WEBPACK_IMPORTED_MODULE_10__["TabsTipoOrdineComponent"],
    _dialog_dialog_list_tipo_ordine_dialog_list_tipo_ordine_component__WEBPACK_IMPORTED_MODULE_11__["DialogListTipoOrdineComponent"],
    _detail_tipo_ordine_tabs_tipo_ordine_ordine_tab_ordine_component__WEBPACK_IMPORTED_MODULE_12__["TabOrdineComponent"],
];
class TipoOrdineModule {
}
TipoOrdineModule.ɵfac = function TipoOrdineModule_Factory(t) { return new (t || TipoOrdineModule)(); };
TipoOrdineModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({ type: TipoOrdineModule });
TipoOrdineModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            blazing__WEBPACK_IMPORTED_MODULE_2__["BzCardModule"],
            blazing__WEBPACK_IMPORTED_MODULE_2__["BzTableModule"],
            _tipo_ordine_routing_module__WEBPACK_IMPORTED_MODULE_3__["TipoOrdineRoutingModule"],
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
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](TipoOrdineModule, { declarations: [_list_tipo_ordine_list_tipo_ordine_component__WEBPACK_IMPORTED_MODULE_1__["ListTipoOrdineComponent"],
        _list_tipo_ordine_search_tipo_ordine_search_tipo_ordine_component__WEBPACK_IMPORTED_MODULE_5__["SearchTipoOrdineComponent"],
        _detail_tipo_ordine_detail_tipo_ordine_component__WEBPACK_IMPORTED_MODULE_6__["DetailTipoOrdineComponent"],
        _detail_tipo_ordine_tabs_tipo_ordine_tabs_tipo_ordine_component__WEBPACK_IMPORTED_MODULE_10__["TabsTipoOrdineComponent"],
        _dialog_dialog_list_tipo_ordine_dialog_list_tipo_ordine_component__WEBPACK_IMPORTED_MODULE_11__["DialogListTipoOrdineComponent"],
        _detail_tipo_ordine_tabs_tipo_ordine_ordine_tab_ordine_component__WEBPACK_IMPORTED_MODULE_12__["TabOrdineComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        blazing__WEBPACK_IMPORTED_MODULE_2__["BzCardModule"],
        blazing__WEBPACK_IMPORTED_MODULE_2__["BzTableModule"],
        _tipo_ordine_routing_module__WEBPACK_IMPORTED_MODULE_3__["TipoOrdineRoutingModule"],
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

/***/ "OZ9g":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/pages/voila2sample-ms-demo-fe/tipo-ordine/detail-tipo-ordine/tabs-tipo-ordine/ordine/tab-ordine.component.ts ***!
  \******************************************************************************************************************************/
/*! exports provided: TabOrdineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabOrdineComponent", function() { return TabOrdineComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var blazing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! blazing */ "pYbk");
/* harmony import */ var src_app_pages_voila2sample_ms_demo_fe_ordine_ordine_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/pages/voila2sample-ms-demo-fe/ordine/ordine-api.service */ "AiQM");
/* harmony import */ var src_app_pages_voila2sample_ms_demo_fe_ordine_ordine_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/pages/voila2sample-ms-demo-fe/ordine/ordine-form */ "Thuv");
/* harmony import */ var src_app_pages_voila2sample_ms_demo_fe_dialog_dialog_list_cliente_dialog_list_cliente_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/pages/voila2sample-ms-demo-fe/dialog/dialog-list-cliente/dialog-list-cliente.component */ "D1H/");
/* harmony import */ var src_app_pages_voila2sample_ms_demo_fe_dialog_dialog_list_ordine_dialog_list_ordine_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/pages/voila2sample-ms-demo-fe/dialog/dialog-list-ordine/dialog-list-ordine.component */ "xEzP");
/* harmony import */ var src_app_shared_base_base_tab_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/base/base-tab.component */ "yNyt");
/* harmony import */ var src_app_shared_base_base_helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/base/base.helper */ "tHpT");
/* harmony import */ var voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! voila2-runtime-ng */ "WGmK");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _utilities_pipe_utility_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../utilities/pipe/utility-pipe */ "SWKW");
/* harmony import */ var translate_ng__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! translate-ng */ "JfpY");

















function TabOrdineComponent_bz_card_0_td_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r8.ordineKey.idOrdine, "");
} }
function TabOrdineComponent_bz_card_0_td_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r9.ordineKey.anno, "");
} }
function TabOrdineComponent_bz_card_0_td_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r10.dataOrdine, "");
} }
function TabOrdineComponent_bz_card_0_td_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r11.urgente, "");
} }
function TabOrdineComponent_bz_card_0_td_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r12.theClienteObjectKey, "");
} }
function TabOrdineComponent_bz_card_0_td_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r13.theinvalidObjectKey, "");
} }
function TabOrdineComponent_bz_card_0_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "bz-card", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "bz-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "bz-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "bz-table", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageObject", function TabOrdineComponent_bz_card_0_Template_bz_table_pageObject_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.paginateTable($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " IdOrdine ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TabOrdineComponent_bz_card_0_td_8_Template, 2, 1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Anno ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, TabOrdineComponent_bz_card_0_td_11_Template, 2, 1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " DataOrdine ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, TabOrdineComponent_bz_card_0_td_14_Template, 2, 1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Urgente ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, TabOrdineComponent_bz_card_0_td_17_Template, 2, 1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Cliente ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, TabOrdineComponent_bz_card_0_td_20_Template, 2, 1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Invalid ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, TabOrdineComponent_bz_card_0_td_23_Template, 2, 1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](24, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("bzSpinner", ctx_r0.spinner);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 7, "header.list"), " Ordine ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("sources", ctx_r0.ordineList)("pageSize", ctx_r0.pageSize)("nVisiblePages", 3)("totalPages", ctx_r0.totalPages);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](26, 9, "label.noElement"), " Ordine ");
} }
function TabOrdineComponent_bz_card_2_td_8_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "bz-input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TabOrdineComponent_bz_card_2_td_8_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const element_r23 = ctx.$implicit; const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r24.showClienteListDialog(element_r23.rowIndex); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "bz-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", element_r23.value);
} }
function TabOrdineComponent_bz_card_2_td_11_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "bz-input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TabOrdineComponent_bz_card_2_td_11_Template_bz_input_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const element_r26 = ctx.$implicit; const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r27.showOrdineListDialog(element_r26.rowIndex); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "bz-input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TabOrdineComponent_bz_card_2_td_11_Template_bz_input_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const element_r26 = ctx.$implicit; const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r29.showOrdineListDialog(element_r26.rowIndex); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", element_r26.value);
} }
function TabOrdineComponent_bz_card_2_td_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "bz-input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", element_r30 == null ? null : element_r30.value);
} }
function TabOrdineComponent_bz_card_2_td_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "bz-input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", element_r31 == null ? null : element_r31.value);
} }
function TabOrdineComponent_bz_card_2_td_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "bz-input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", element_r32 == null ? null : element_r32.value);
} }
function TabOrdineComponent_bz_card_2_td_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "bz-input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", element_r33 == null ? null : element_r33.value);
} }
function TabOrdineComponent_bz_card_2_td_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("bzRemoveRow", element_r34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, "buttons.delete"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("bzRestoreRow", element_r34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 6, "buttons.restore"), " ");
} }
const _c0 = function () { return ["theClienteObjectKey"]; };
const _c1 = function () { return ["theTipoOrdineObjectKey"]; };
const _c2 = function () { return ["theOrdineObjectKey"]; };
function TabOrdineComponent_bz_card_2_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "bz-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "bz-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "bz-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "bz-table", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("smartArray", function TabOrdineComponent_bz_card_2_Template_bz_table_smartArray_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r35.getSmartArray($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Cliente ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TabOrdineComponent_bz_card_2_td_8_Template, 5, 1, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " OrdinePadre ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, TabOrdineComponent_bz_card_2_td_11_Template, 3, 1, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " IdOrdine ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, TabOrdineComponent_bz_card_2_td_14_Template, 2, 1, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Anno ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, TabOrdineComponent_bz_card_2_td_17_Template, 2, 1, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " DataOrdine ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, TabOrdineComponent_bz_card_2_td_20_Template, 2, 1, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Urgente ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, TabOrdineComponent_bz_card_2_td_23_Template, 2, 1, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, TabOrdineComponent_bz_card_2_td_25_Template, 7, 8, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](28, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](31, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 9, "header.list"), " Ordine ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("bzSmartTable", ctx_r1.ordineList)("bzFormGroup", ctx_r1.smartFormGroup)("bzDisabledControls", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c0))("bzDisabledControls", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](16, _c1))("bzDisabledControls", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c2))("bzForm", ctx_r1.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](28, 11, "label.noElement"), " Ordine ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](31, 13, "buttons.new"), " Ordine ");
} }
const _c3 = function () { return ["new", "edit"]; };
class TabOrdineComponent extends src_app_shared_base_base_tab_component__WEBPACK_IMPORTED_MODULE_7__["BaseTabComponent"] {
    constructor(formBuilder, ordineApiService, dialogService) {
        super();
        this.formBuilder = formBuilder;
        this.ordineApiService = ordineApiService;
        this.dialogService = dialogService;
        this.ordineList = [];
        this.form = Object(src_app_pages_voila2sample_ms_demo_fe_ordine_ordine_form__WEBPACK_IMPORTED_MODULE_4__["ordineForm"])(this.formBuilder);
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
        let options = Object(src_app_shared_base_base_helper__WEBPACK_IMPORTED_MODULE_8__["fillOptions"])(this.pageStatus, object);
        if (this.theEntitylink) {
            this.ordineApiService.getListOrdineByLink(this.theEntitylink, options).subscribe((data) => {
                this.ordineList = Object(voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_9__["extractResponse"])('ordine', data);
                this.totalPages = Object(voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_9__["extractTotalPages"])(data);
                this.spinner = false;
            }, () => {
                this.spinner = false;
            });
        }
    }
    getSmartArray(smartArray) {
        if (this.smartFormGroup.valid || this.smartFormGroup.status === "DISABLED") {
            Object(voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_9__["setControl"])(this.formGroup, 'theOrdine', smartArray);
        }
    }
    showClienteListDialog(index) {
        this.dialogService.showDialog(src_app_pages_voila2sample_ms_demo_fe_dialog_dialog_list_cliente_dialog_list_cliente_component__WEBPACK_IMPORTED_MODULE_5__["DialogListClienteComponent"]).subscribe((data) => {
            if (data) {
                this.setSmartControlByIndex(this.smartFormGroup, index, data, 'objectKey', 'theClienteObjectKey');
            }
        });
    }
    showOrdineListDialog(index) {
        this.dialogService.showDialog(src_app_pages_voila2sample_ms_demo_fe_dialog_dialog_list_ordine_dialog_list_ordine_component__WEBPACK_IMPORTED_MODULE_6__["DialogListOrdineComponent"]).subscribe((data) => {
            if (data) {
                this.setSmartControlByIndex(this.smartFormGroup, index, data, 'objectKey', 'theOrdinePadreObjectKey');
            }
        });
    }
    managePageStatusChanges(changes) {
        const pageStatusChanges = changes.pageStatus;
        if (pageStatusChanges === null || pageStatusChanges === void 0 ? void 0 : pageStatusChanges.currentValue) {
            this.ordineList = [];
            const object = this.managePageStatus(pageStatusChanges, this.smartFormGroup);
            this.paginateTable(object);
        }
    }
    manageEntityChanges(changes) {
        var _a, _b, _c;
        const entityChanges = changes.entity;
        if (entityChanges) {
            this.entity = entityChanges.currentValue;
            Object(voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_9__["setControl"])(this.form, 'theTipoOrdineObjectKey', (_a = this.entity) === null || _a === void 0 ? void 0 : _a.objectKey);
            this.theEntitylink = (_c = (_b = this.entity) === null || _b === void 0 ? void 0 : _b._links.theOrdine) === null || _c === void 0 ? void 0 : _c.href;
        }
    }
}
TabOrdineComponent.ɵfac = function TabOrdineComponent_Factory(t) { return new (t || TabOrdineComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_pages_voila2sample_ms_demo_fe_ordine_ordine_api_service__WEBPACK_IMPORTED_MODULE_3__["OrdineApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](blazing__WEBPACK_IMPORTED_MODULE_2__["BzDialogService"])); };
TabOrdineComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TabOrdineComponent, selectors: [["app-tab-ordine"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([src_app_pages_voila2sample_ms_demo_fe_ordine_ordine_api_service__WEBPACK_IMPORTED_MODULE_3__["OrdineApiService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 4, vars: 10, consts: [[3, "bzSpinner", 4, "ngIf"], [4, "ngIf"], [3, "bzSpinner"], ["paginatedBe", "", 3, "sources", "pageSize", "nVisiblePages", "totalPages", "pageObject"], ["bzHeaderColumn", "", "bzSortColumn", "idOrdine", "scope", "col"], [4, "bzColumnDef"], ["bzHeaderColumn", "", "bzSortColumn", "anno", "scope", "col"], ["bzHeaderColumn", "", "bzSortColumn", "dataOrdine", "scope", "col"], ["bzHeaderColumn", "", "bzSortColumn", "urgente", "scope", "col"], ["bzHeaderColumn", "", "bzSortColumn", "theClienteObjectKey", "scope", "col"], ["bzHeaderColumn", "", "bzSortColumn", "theinvalidObjectKey", "scope", "col"], ["bzTableNoValue", ""], ["withIndex", "", "paginated", "", 3, "bzSmartTable", "bzFormGroup", "bzDisabledControls", "bzForm", "smartArray"], ["bzHeaderColumn", "", "scope", "col", 1, "prodotto-column-width"], [3, "formGroup", 4, "bzColumnDef"], ["bzHeaderColumn", "", "scope", "col"], ["bzButton", "", "bzAddRow", ""], [3, "formGroup"], ["formGroupName", "ordineKey"], ["formControlName", "theClienteObjectKey"], ["bzInputButton", "", "status", "primary", 3, "click"], ["iconName", "fa fa-window-maximize"], ["formControlName", "theOrdinePadreObjectKey", 3, "click"], ["formControlName", "idOrdine"], ["formControlName", "anno"], ["formControlName", "dataOrdine"], ["formControlName", "urgente"], ["bzButton", "", "status", "danger", 3, "bzRemoveRow"], ["bzButton", "", "status", "primary", 3, "bzRestoreRow"]], template: function TabOrdineComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TabOrdineComponent_bz_card_0_Template, 27, 11, "bz-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "hasPageStatus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TabOrdineComponent_bz_card_2_Template, 32, 18, "bz-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "hasPageStatus");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](1, 2, ctx.pageStatus, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c3)) || ctx.readonly);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 5, ctx.pageStatus, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c3)) && !ctx.readonly);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], blazing__WEBPACK_IMPORTED_MODULE_2__["BzCardComponent"], blazing__WEBPACK_IMPORTED_MODULE_2__["BzCardHeaderComponent"], blazing__WEBPACK_IMPORTED_MODULE_2__["BzCardContentComponent"], blazing__WEBPACK_IMPORTED_MODULE_2__["BzTableComponent"], blazing__WEBPACK_IMPORTED_MODULE_2__["BzTableHeaderDirective"], blazing__WEBPACK_IMPORTED_MODULE_2__["BzTableColumnSortDirective"], blazing__WEBPACK_IMPORTED_MODULE_2__["BzTableColumnDefDirective"], blazing__WEBPACK_IMPORTED_MODULE_2__["BzTableNoValueDirective"], blazing__WEBPACK_IMPORTED_MODULE_2__["ɵbu"], blazing__WEBPACK_IMPORTED_MODULE_2__["BzButtonDirective"], blazing__WEBPACK_IMPORTED_MODULE_2__["BzAddRowDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupName"], blazing__WEBPACK_IMPORTED_MODULE_2__["BzInputComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], blazing__WEBPACK_IMPORTED_MODULE_2__["BzInputButtonDirective"], blazing__WEBPACK_IMPORTED_MODULE_2__["BzIconComponent"], blazing__WEBPACK_IMPORTED_MODULE_2__["ɵbv"], blazing__WEBPACK_IMPORTED_MODULE_2__["ɵbw"]], pipes: [_utilities_pipe_utility_pipe__WEBPACK_IMPORTED_MODULE_11__["PageStatusPipe"], translate_ng__WEBPACK_IMPORTED_MODULE_12__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWItb3JkaW5lLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "jc1D":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/pages/voila2sample-ms-demo-fe/tipo-ordine/detail-tipo-ordine/tabs-tipo-ordine/tabs-tipo-ordine.component.ts ***!
  \*****************************************************************************************************************************/
/*! exports provided: TabsTipoOrdineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsTipoOrdineComponent", function() { return TabsTipoOrdineComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! voila2-runtime-ng */ "WGmK");
/* harmony import */ var blazing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! blazing */ "pYbk");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ordine_tab_ordine_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ordine/tab-ordine.component */ "OZ9g");
/* harmony import */ var _utilities_pipe_utility_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../utilities/pipe/utility-pipe */ "SWKW");









function TabsTipoOrdineComponent_bz_tab_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "bz-tab", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-tab-ordine", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.formGroup)("entity", ctx_r0.entity)("pageStatus", ctx_r0.pageStatus)("readonly", true);
} }
class TabsTipoOrdineComponent {
    constructor() {
        this.privileges = Object(voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_2__["getPrivileges"])();
        this.readonly = true;
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
TabsTipoOrdineComponent.ɵfac = function TabsTipoOrdineComponent_Factory(t) { return new (t || TabsTipoOrdineComponent)(); };
TabsTipoOrdineComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TabsTipoOrdineComponent, selectors: [["app-tabs-tipo-ordine"]], inputs: { formGroup: "formGroup", entity: "entity", pageStatus: "pageStatus" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 4, vars: 7, consts: [["tabTitle", "ORDINE ", 4, "ngIf"], ["tabTitle", "ORDINE "], [3, "formGroup", "entity", "pageStatus", "readonly"]], template: function TabsTipoOrdineComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "bz-tabset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TabsTipoOrdineComponent_bz_tab_1_Template, 2, 4, "bz-tab", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "hasPermission");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "isReadOnly");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, ctx.Privileges == null ? null : ctx.Privileges.TIPOORDINE_FIND_BY_THE_ORDINE_OBJECT_KEY, ctx.privileges) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 4, ctx.pageStatus, true));
    } }, directives: [blazing__WEBPACK_IMPORTED_MODULE_3__["BzTabsetComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], blazing__WEBPACK_IMPORTED_MODULE_3__["BzTabComponent"], _ordine_tab_ordine_component__WEBPACK_IMPORTED_MODULE_5__["TabOrdineComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"]], pipes: [_utilities_pipe_utility_pipe__WEBPACK_IMPORTED_MODULE_6__["PermissionPipe"], _utilities_pipe_utility_pipe__WEBPACK_IMPORTED_MODULE_6__["ReadOnlyPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWJzLXRpcG8tb3JkaW5lLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "n9Bg":
/*!**********************************************************************************************************!*\
  !*** ./src/app/pages/voila2sample-ms-demo-fe/tipo-ordine/list-tipo-ordine/list-tipo-ordine.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: ListTipoOrdineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListTipoOrdineComponent", function() { return ListTipoOrdineComponent; });
/* harmony import */ var blazing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! blazing */ "pYbk");
/* harmony import */ var _shared_base_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/base/base.component */ "nOOO");
/* harmony import */ var _tipo_ordine_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tipo-ordine-api.service */ "4+27");
/* harmony import */ var _utilities_services_buttons_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../utilities/services/buttons.service */ "f4j/");
/* harmony import */ var _search_tipo_ordine_search_tipo_ordine_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./search-tipo-ordine/search-tipo-ordine.component */ "ouIK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! voila2-runtime-ng */ "WGmK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var translate_ng__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! translate-ng */ "JfpY");
/* harmony import */ var _utilities_pipe_utility_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../utilities/pipe/utility-pipe */ "SWKW");















function ListTipoOrdineComponent_td_8_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ListTipoOrdineComponent_td_8_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r5); const tipoOrdine_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r4.navigateToView(tipoOrdine_r3.objectKey); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tipoOrdine_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](tipoOrdine_r3.idTipoOrdine);
} }
function ListTipoOrdineComponent_td_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tipoOrdine_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", tipoOrdine_r6.nomeTipoOrdine, "");
} }
function ListTipoOrdineComponent_button_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "buttons.new"), " ");
} }
class ListTipoOrdineComponent extends _shared_base_base_component__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"] {
    constructor(tipoOrdineApiService, router) {
        super();
        this.tipoOrdineApiService = tipoOrdineApiService;
        this.router = router;
        this.tipoOrdineList = [];
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
        this.tipoOrdineApiService.getTipoOrdineByCriteria(options).subscribe((data) => {
            this.tipoOrdineList = Object(voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_6__["extractResponse"])('tipoOrdine', data);
            this.totalPages = Object(voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_6__["extractTotalPages"])(data);
            this.spinner = false;
        }, () => {
            this.spinner = false;
        });
    }
    searchWithCriteria() {
        this.tipoOrdineCriteria = this.searchTipoOrdine.search();
        const object = { page: 0, pageSize: this.pageSize };
        this.paginateTable(object, this.tipoOrdineCriteria);
    }
    navigateToView(id) {
        Object(voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_6__["navigateToPath"])('/pages/ms-demo/tipo-ordine/detail-tipo-ordine/' + id + '/view', this.router);
    }
}
ListTipoOrdineComponent.ɵfac = function ListTipoOrdineComponent_Factory(t) { return new (t || ListTipoOrdineComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_tipo_ordine_api_service__WEBPACK_IMPORTED_MODULE_2__["TipoOrdineApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
ListTipoOrdineComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: ListTipoOrdineComponent, selectors: [["app-list-tipo-ordine"]], viewQuery: function ListTipoOrdineComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_search_tipo_ordine_search_tipo_ordine_component__WEBPACK_IMPORTED_MODULE_4__["SearchTipoOrdineComponent"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.searchTipoOrdine = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([_tipo_ordine_api_service__WEBPACK_IMPORTED_MODULE_2__["TipoOrdineApiService"], _utilities_services_buttons_service__WEBPACK_IMPORTED_MODULE_3__["ButtonService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]], decls: 22, vars: 15, consts: [[3, "bzSpinner"], ["paginatedBe", "", 3, "sources", "pageSize", "nVisiblePages", "totalPages", "pageObject"], ["bzHeaderColumn", "", "bzSortColumn", "idTipoOrdine", "scope", "col"], [4, "bzColumnDef"], ["bzHeaderColumn", "", "bzSortColumn", "nomeTipoOrdine", "scope", "col"], ["bzTableNoValue", ""], [1, "card"], ["bzButton", "", "status", "primary", 1, "button", 3, "click"], ["bzButton", "", "status", "primary", "class", "button", "routerLink", "/pages/ms-demo/tipo-ordine/detail-tipo-ordine/new", 4, "ngIf"], [1, "fk-pointer", 3, "click"], ["bzButton", "", "status", "primary", "routerLink", "/pages/ms-demo/tipo-ordine/detail-tipo-ordine/new", 1, "button"]], template: function ListTipoOrdineComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "bz-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "bz-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "bz-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "bz-table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("pageObject", function ListTipoOrdineComponent_Template_bz_table_pageObject_5_listener($event) { return ctx.paginateTable($event, ctx.tipoOrdineCriteria); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, " Id Tipo Ordine ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, ListTipoOrdineComponent_td_8_Template, 3, 1, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, " Nome Tipo Ordine ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](11, ListTipoOrdineComponent_td_11_Template, 2, 1, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](12, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](15, "app-search-tipo-ordine");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "bz-card", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "bz-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ListTipoOrdineComponent_Template_button_click_18_listener() { return ctx.searchWithCriteria(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19, " Cerca");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](20, ListTipoOrdineComponent_button_20_Template, 3, 3, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](21, "hasPermission");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("bzSpinner", ctx.spinner);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" Tipo Ordine ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 8, "header.list"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("sources", ctx.tipoOrdineList)("pageSize", ctx.pageSize)("nVisiblePages", 3)("totalPages", ctx.totalPages);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](14, 10, "label.noElements"), " Tipo Ordine ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](21, 12, ctx.Privileges == null ? null : ctx.Privileges.TIPO_ORDINE_CREATE, ctx.privileges));
    } }, directives: [blazing__WEBPACK_IMPORTED_MODULE_0__["BzCardComponent"], blazing__WEBPACK_IMPORTED_MODULE_0__["BzCardHeaderComponent"], blazing__WEBPACK_IMPORTED_MODULE_0__["BzCardContentComponent"], blazing__WEBPACK_IMPORTED_MODULE_0__["BzTableComponent"], blazing__WEBPACK_IMPORTED_MODULE_0__["BzTableHeaderDirective"], blazing__WEBPACK_IMPORTED_MODULE_0__["BzTableColumnSortDirective"], blazing__WEBPACK_IMPORTED_MODULE_0__["BzTableColumnDefDirective"], blazing__WEBPACK_IMPORTED_MODULE_0__["BzTableNoValueDirective"], _search_tipo_ordine_search_tipo_ordine_component__WEBPACK_IMPORTED_MODULE_4__["SearchTipoOrdineComponent"], blazing__WEBPACK_IMPORTED_MODULE_0__["BzButtonDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"]], pipes: [translate_ng__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"], _utilities_pipe_utility_pipe__WEBPACK_IMPORTED_MODULE_10__["PermissionPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0LXRpcG8tb3JkaW5lLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "ouIK":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/pages/voila2sample-ms-demo-fe/tipo-ordine/list-tipo-ordine/search-tipo-ordine/search-tipo-ordine.component.ts ***!
  \*******************************************************************************************************************************/
/*! exports provided: SearchTipoOrdineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchTipoOrdineComponent", function() { return SearchTipoOrdineComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var blazing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! blazing */ "pYbk");
/* harmony import */ var _tipo_ordine_group_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../tipo-ordine-group-api.service */ "Jlo/");
/* harmony import */ var voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! voila2-runtime-ng */ "WGmK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var translate_ng__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! translate-ng */ "JfpY");









const PROVIDERS = [
    _tipo_ordine_group_api_service__WEBPACK_IMPORTED_MODULE_2__["TipoOrdineGroupApiService"],
];
class SearchTipoOrdineComponent {
    constructor(formBuilder, dateService, tipoOrdineGroupApiService) {
        this.formBuilder = formBuilder;
        this.dateService = dateService;
        this.tipoOrdineGroupApiService = tipoOrdineGroupApiService;
    }
    ngOnInit() {
        this.inizialize();
    }
    search() {
        let tipoOrdineCriteria = Object.assign({});
        if (this.searchTipoOrdineForm.value) {
            const idTipoOrdineFrom = this.searchTipoOrdineForm.value.idTipoOrdineFrom;
            const idTipoOrdineTo = this.searchTipoOrdineForm.value.idTipoOrdineTo;
            //idTipoOrdine
            if (idTipoOrdineFrom || idTipoOrdineTo) {
                tipoOrdineCriteria.idTipoOrdine = new voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_3__["IntegerFilter"];
                tipoOrdineCriteria.idTipoOrdine.setGreaterOrEqualThan(idTipoOrdineFrom);
                tipoOrdineCriteria.idTipoOrdine.setLessOrEqualThan(idTipoOrdineTo);
            }
            const nomeTipoOrdine = this.searchTipoOrdineForm.value.nomeTipoOrdine;
            //nomeTipoOrdine
            if (nomeTipoOrdine) {
                tipoOrdineCriteria.nomeTipoOrdine = new voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_3__["StringFilter"];
                tipoOrdineCriteria.nomeTipoOrdine.setContains(this.searchTipoOrdineForm.value.nomeTipoOrdine);
            }
        }
        return tipoOrdineCriteria;
    }
    inizialize() {
        this.searchTipoOrdineForm = this.formBuilder.group({
            'idTipoOrdineFrom': [null],
            'idTipoOrdineTo': [null],
            'nomeTipoOrdine': [null],
        });
    }
}
SearchTipoOrdineComponent.ɵfac = function SearchTipoOrdineComponent_Factory(t) { return new (t || SearchTipoOrdineComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](blazing__WEBPACK_IMPORTED_MODULE_1__["DateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_tipo_ordine_group_api_service__WEBPACK_IMPORTED_MODULE_2__["TipoOrdineGroupApiService"])); };
SearchTipoOrdineComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: SearchTipoOrdineComponent, selectors: [["app-search-tipo-ordine"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([...PROVIDERS])], decls: 15, vars: 4, consts: [["isCollapsable", "", 1, "card"], [3, "formGroup"], [1, "fk-row", "inputs"], [1, "fk-col-8"], ["label", "Id Tipo Ordine da", "placeholder", "da", "formControlName", "idTipoOrdineFrom", 3, "keyup.enter"], ["label", "Id Tipo Ordine a", "placeholder", "a", "formControlName", "idTipoOrdineTo", 3, "keyup.enter"], ["label", "Nome Tipo Ordine", "formControlName", "nomeTipoOrdine", 3, "keyup.enter"]], template: function SearchTipoOrdineComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keyup.enter", function SearchTipoOrdineComponent_Template_bz_input_keyup_enter_8_listener() { return ctx.search(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "bz-input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keyup.enter", function SearchTipoOrdineComponent_Template_bz_input_keyup_enter_10_listener() { return ctx.search(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "bz-input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keyup.enter", function SearchTipoOrdineComponent_Template_bz_input_keyup_enter_13_listener() { return ctx.search(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 2, "header.search"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.searchTipoOrdineForm);
    } }, directives: [blazing__WEBPACK_IMPORTED_MODULE_1__["BzCardComponent"], blazing__WEBPACK_IMPORTED_MODULE_1__["BzCardHeaderComponent"], blazing__WEBPACK_IMPORTED_MODULE_1__["BzCardContentComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], blazing__WEBPACK_IMPORTED_MODULE_1__["BzInputComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"]], pipes: [translate_ng__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWFyY2gtdGlwby1vcmRpbmUuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "p+LB":
/*!**************************************************************************************************************!*\
  !*** ./src/app/pages/voila2sample-ms-demo-fe/tipo-ordine/detail-tipo-ordine/detail-tipo-ordine.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: DetailTipoOrdineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailTipoOrdineComponent", function() { return DetailTipoOrdineComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _utilities_services_buttons_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../utilities/services/buttons.service */ "f4j/");
/* harmony import */ var _tipo_ordine_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tipo-ordine-api.service */ "4+27");
/* harmony import */ var _tipo_ordine_group_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tipo-ordine-group-api.service */ "Jlo/");
/* harmony import */ var _tipo_ordine_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../tipo-ordine-form */ "710N");
/* harmony import */ var _utilities_services_route_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../utilities/services/route.service */ "8RJb");
/* harmony import */ var _utilities_dialog_confirm_dialog_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../utilities/dialog/confirm-dialog.service */ "wqBZ");
/* harmony import */ var _shared_base_base_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/base/base.component */ "nOOO");
/* harmony import */ var _utilities_enum_page_status_enum__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../utilities/enum/page-status.enum */ "ZO1O");
/* harmony import */ var _utilities_services_overlays_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../utilities/services/overlays.service */ "zd5x");
/* harmony import */ var _tipo_ordine_constant__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../tipo-ordine.constant */ "Ed1z");
/* harmony import */ var voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! voila2-runtime-ng */ "WGmK");
/* harmony import */ var src_app_shared_base_base_helper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/base/base.helper */ "tHpT");
/* harmony import */ var translate_ng__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! translate-ng */ "JfpY");
/* harmony import */ var _tipo_ordine_model__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../tipo-ordine.model */ "6p7s");
/* harmony import */ var blazing__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! blazing */ "pYbk");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _tabs_tipo_ordine_tabs_tipo_ordine_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./tabs-tipo-ordine/tabs-tipo-ordine.component */ "jc1D");
/* harmony import */ var _utilities_pipe_utility_pipe__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../utilities/pipe/utility-pipe */ "SWKW");



























function DetailTipoOrdineComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "bz-input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "bz-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" L'Nome Tipo Ordine ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 1, "label.obligatoryValues"), " ");
} }
function DetailTipoOrdineComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Id Tipo Ordine: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Nome Tipo Ordine: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.tipoOrdine == null ? null : ctx_r1.tipoOrdine.idTipoOrdine);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.tipoOrdine == null ? null : ctx_r1.tipoOrdine.nomeTipoOrdine);
} }
function DetailTipoOrdineComponent_button_17_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("bzClick", function DetailTipoOrdineComponent_button_17_Template_button_bzClick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.insertTipoOrdine(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("bzCheckForm", ctx_r2.tipoOrdineForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, "buttons.save"), " ");
} }
function DetailTipoOrdineComponent_button_20_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("bzClick", function DetailTipoOrdineComponent_button_20_Template_button_bzClick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.editTipoOrdine(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "buttons.edit"), " ");
} }
function DetailTipoOrdineComponent_button_23_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("bzClick", function DetailTipoOrdineComponent_button_23_Template_button_bzClick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.updateTipoOrdine(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("bzCheckForm", ctx_r4.tipoOrdineForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, "buttons.save"), " ");
} }
function DetailTipoOrdineComponent_button_26_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("bzClick", function DetailTipoOrdineComponent_button_26_Template_button_bzClick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.confirmDeleteTipoOrdine(); });
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
    _tipo_ordine_api_service__WEBPACK_IMPORTED_MODULE_3__["TipoOrdineApiService"],
    _utilities_services_buttons_service__WEBPACK_IMPORTED_MODULE_2__["ButtonService"],
    _utilities_services_overlays_service__WEBPACK_IMPORTED_MODULE_10__["OverlaysService"],
    _utilities_services_route_service__WEBPACK_IMPORTED_MODULE_6__["RouteService"],
    _utilities_dialog_confirm_dialog_service__WEBPACK_IMPORTED_MODULE_7__["ConfirmDialogService"],
    _tipo_ordine_group_api_service__WEBPACK_IMPORTED_MODULE_4__["TipoOrdineGroupApiService"],
];
class DetailTipoOrdineComponent extends _shared_base_base_component__WEBPACK_IMPORTED_MODULE_8__["BaseComponent"] {
    constructor(buttonsService, formBuilder, routeService, overlaysService, injector, tipoOrdineGroupApiService) {
        super();
        this.buttonsService = buttonsService;
        this.formBuilder = formBuilder;
        this.routeService = routeService;
        this.overlaysService = overlaysService;
        this.injector = injector;
        this.tipoOrdineGroupApiService = tipoOrdineGroupApiService;
        this.spinner = true;
        this.privileges = Object(voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_12__["getPrivileges"])();
    }
    get Privileges() {
        return Object(voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_12__["getPrivilegesEnum"])();
    }
    ngOnInit() {
        this.tipoOrdineForm = Object(_tipo_ordine_form__WEBPACK_IMPORTED_MODULE_5__["tipoOrdineForm"])(this.formBuilder);
        this.routeService.route.data.subscribe((data) => {
            this.pageStatus = data.pageSatus;
        });
        this.getTipoOrdineById();
        this.setTabPageStatusOnInit();
        if (Object(voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_12__["isInNewMode"])(this.pageStatus))
            this.spinner = false;
    }
    insertTipoOrdine() {
        const tipoOrdine = this.tipoOrdineForm.value;
        Object(src_app_shared_base_base_helper__WEBPACK_IMPORTED_MODULE_13__["setTabObjectKey"])(tipoOrdine, new _tipo_ordine_model__WEBPACK_IMPORTED_MODULE_15__["TipoOrdine"](tipoOrdine), 'theOrdine', 'theTipoOrdineObjectKey');
        this.tipoOrdineGroupApiService.tipoOrdine.addTipoOrdine(tipoOrdine).subscribe((tipoOrdineResult) => {
            const toast = this.overlaysService.toast;
            this.tipoOrdine = this.manageResponse(tipoOrdineResult, toast, new translate_ng__WEBPACK_IMPORTED_MODULE_14__["TranslatePipe"](this.injector));
            if (this.tipoOrdine)
                Object(voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_12__["navigateToPath"])('/pages/ms-demo/tipo-ordine/detail-tipo-ordine/' + this.tipoOrdine.objectKey + '/view', this.routeService.router);
        });
    }
    getTipoOrdineById() {
        if (Object(voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_12__["isInViewEditMode"])(this.pageStatus)) {
            const id = Object(voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_12__["getIdFromPath"])(this.routeService.route);
            if (id) {
                this.tipoOrdineGroupApiService.tipoOrdine.getTipoOrdineById(id).subscribe((tipoOrdineResult) => {
                    this.tipoOrdine = tipoOrdineResult.response;
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
        this.tipoOrdineForm.patchValue({
            idTipoOrdine: this.tipoOrdine.idTipoOrdine,
            nomeTipoOrdine: this.tipoOrdine.nomeTipoOrdine,
        });
    }
    editTipoOrdine() {
        this.setStatusPage(_utilities_enum_page_status_enum__WEBPACK_IMPORTED_MODULE_9__["PageStatus"].EDIT, this.routeService.location);
        this.getTipoOrdineById();
    }
    updateTipoOrdine() {
        const tipoOrdine = this.tipoOrdineForm.value;
        this.tipoOrdineGroupApiService.tipoOrdine.updateTipoOrdine(tipoOrdine).subscribe((tipoOrdineResult) => {
            const toast = this.overlaysService.toast;
            this.tipoOrdine = this.manageResponse(tipoOrdineResult, toast, new translate_ng__WEBPACK_IMPORTED_MODULE_14__["TranslatePipe"](this.injector));
            if (this.tipoOrdine)
                Object(voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_12__["navigateToPath"])('/pages/ms-demo/tipo-ordine/detail-tipo-ordine/' + this.tipoOrdine.objectKey + '/view', this.routeService.router);
        });
    }
    /**
     * Delete tipoOrdine by id.
     */
    deleteTipoOrdineById() {
        this.tipoOrdineGroupApiService.tipoOrdine.deleteTipoOrdine(this.tipoOrdine.objectKey).subscribe(() => {
            this.overlaysService.toast.showSuccess(_tipo_ordine_constant__WEBPACK_IMPORTED_MODULE_11__["tipoOrdine_"].detail.toast.SUCCESS_DELETE);
            Object(voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_12__["navigateToPath"])(_tipo_ordine_constant__WEBPACK_IMPORTED_MODULE_11__["tipoOrdine_"].detail.path.LIST, this.routeService.router);
            this.overlaysService.dialog.closeDialog();
        });
    }
    /**
     * Confirm delete tipoOrdine.
     */
    confirmDeleteTipoOrdine() {
        const message = _tipo_ordine_constant__WEBPACK_IMPORTED_MODULE_11__["tipoOrdine_"].detail.dialog.DELETE_MESSAGE;
        this.overlaysService.confirmDialog.openConfirmDialog(message).subscribe((isTrue) => {
            if (isTrue)
                this.deleteTipoOrdineById();
        });
    }
}
DetailTipoOrdineComponent.ɵfac = function DetailTipoOrdineComponent_Factory(t) { return new (t || DetailTipoOrdineComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_utilities_services_buttons_service__WEBPACK_IMPORTED_MODULE_2__["ButtonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_utilities_services_route_service__WEBPACK_IMPORTED_MODULE_6__["RouteService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_utilities_services_overlays_service__WEBPACK_IMPORTED_MODULE_10__["OverlaysService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_tipo_ordine_group_api_service__WEBPACK_IMPORTED_MODULE_4__["TipoOrdineGroupApiService"])); };
DetailTipoOrdineComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DetailTipoOrdineComponent, selectors: [["app-detail-tipo-ordine"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([...PROVIDERS]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 29, vars: 48, consts: [[3, "formGroup"], ["bzTooltip", "Tipologica degli ordini emessi", 1, "fa", "fa-question-circle"], [4, "ngIf"], [3, "formGroup", "entity", "pageStatus"], [1, "card"], ["bzButton", "", "status", "primary", "type", "button", 3, "click"], ["bzButton", "", "status", "primary", "class", "button", 3, "bzCheckForm", "bzClick", 4, "ngIf"], ["bzButton", "", "status", "primary", "class", "button", "type", "button", 3, "bzClick", 4, "ngIf"], ["bzButton", "", "status", "primary", "class", "button", 3, "bzClick", 4, "ngIf"], [1, "fk-row", "inputs"], [1, "fk-col-8"], ["label", "Nome Tipo Ordine:", "formControlName", "nomeTipoOrdine", "type", "string"], ["bzTooltip", "Identificativo"], ["bzTooltip", "Nome tipo Ordine"], ["bzButton", "", "status", "primary", 1, "button", 3, "bzCheckForm", "bzClick"], ["bzButton", "", "status", "primary", "type", "button", 1, "button", 3, "bzClick"], ["bzButton", "", "status", "primary", 1, "button", 3, "bzClick"]], template: function DetailTipoOrdineComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "bz-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "bz-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "bz-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DetailTipoOrdineComponent_ng_container_7_Template, 7, 3, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "hasPageStatus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, DetailTipoOrdineComponent_div_9_Template, 13, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "hasPageStatus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-tabs-tipo-ordine", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "bz-card", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "bz-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailTipoOrdineComponent_Template_button_click_14_listener() { return ctx.buttonsService.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, DetailTipoOrdineComponent_button_17_Template, 3, 4, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "hasPageStatus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "hasPermission");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, DetailTipoOrdineComponent_button_20_Template, 3, 3, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "hasPageStatus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "hasPermission");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, DetailTipoOrdineComponent_button_23_Template, 3, 4, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "hasPageStatus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](25, "hasPermission");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, DetailTipoOrdineComponent_button_26_Template, 3, 3, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "hasPageStatus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](28, "hasPermission");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.tipoOrdineForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 12, "header.detail"), " Tipo Ordine ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 14, ctx.pageStatus, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](46, _c0)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](10, 17, ctx.pageStatus, "view"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.tipoOrdineForm)("entity", ctx.tipoOrdine)("pageStatus", ctx.tabPageStatus);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 20, "buttons.goBack"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](18, 22, ctx.pageStatus, "new") && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](19, 25, ctx.Privileges == null ? null : ctx.Privileges.TIPO_ORDINE_CREATE, ctx.privileges));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](21, 28, ctx.pageStatus, "view") && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](22, 31, ctx.Privileges == null ? null : ctx.Privileges.TIPO_ORDINE_FIND_BY_ID, ctx.privileges));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](24, 34, ctx.pageStatus, "edit") && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](25, 37, ctx.Privileges == null ? null : ctx.Privileges.TIPO_ORDINE_UPDATE, ctx.privileges));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](27, 40, ctx.pageStatus, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](47, _c1)) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](28, 43, ctx.Privileges == null ? null : ctx.Privileges.TIPO_ORDINE_DELETE, ctx.privileges));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], blazing__WEBPACK_IMPORTED_MODULE_16__["BzCardComponent"], blazing__WEBPACK_IMPORTED_MODULE_16__["BzCardHeaderComponent"], blazing__WEBPACK_IMPORTED_MODULE_16__["BzTooltipDirective"], blazing__WEBPACK_IMPORTED_MODULE_16__["BzCardContentComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgIf"], _tabs_tipo_ordine_tabs_tipo_ordine_component__WEBPACK_IMPORTED_MODULE_18__["TabsTipoOrdineComponent"], blazing__WEBPACK_IMPORTED_MODULE_16__["BzButtonDirective"], blazing__WEBPACK_IMPORTED_MODULE_16__["BzInputComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], blazing__WEBPACK_IMPORTED_MODULE_16__["BzErrorComponent"], blazing__WEBPACK_IMPORTED_MODULE_16__["BzClickDirective"]], pipes: [translate_ng__WEBPACK_IMPORTED_MODULE_14__["TranslatePipe"], _utilities_pipe_utility_pipe__WEBPACK_IMPORTED_MODULE_19__["PageStatusPipe"], _utilities_pipe_utility_pipe__WEBPACK_IMPORTED_MODULE_19__["PermissionPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXRhaWwtdGlwby1vcmRpbmUuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ })

}]);
//# sourceMappingURL=tipo-ordine-tipo-ordine-module.js.map