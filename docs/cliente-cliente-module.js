(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cliente-cliente-module"],{

/***/ "0It+":
/*!***************************************************************************************************************!*\
  !*** ./src/app/pages/voila2sample-ms-demo-fe/cliente/list-cliente/search-cliente/search-cliente.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: SearchClienteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchClienteComponent", function() { return SearchClienteComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var blazing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! blazing */ "pYbk");
/* harmony import */ var _cliente_group_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../cliente-group-api.service */ "C7t5");
/* harmony import */ var voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! voila2-runtime-ng */ "WGmK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var translate_ng__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! translate-ng */ "JfpY");









const PROVIDERS = [
    _cliente_group_api_service__WEBPACK_IMPORTED_MODULE_2__["ClienteGroupApiService"],
];
class SearchClienteComponent {
    constructor(formBuilder, dateService, clienteGroupApiService) {
        this.formBuilder = formBuilder;
        this.dateService = dateService;
        this.clienteGroupApiService = clienteGroupApiService;
    }
    ngOnInit() {
        this.inizialize();
    }
    search() {
        let clienteCriteria = Object.assign({});
        if (this.searchClienteForm.value) {
            const ragioneSociale = this.searchClienteForm.value.ragioneSociale;
            //ragioneSociale
            if (ragioneSociale) {
                clienteCriteria.ragioneSociale = new voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_3__["StringFilter"];
                clienteCriteria.ragioneSociale.setContains(this.searchClienteForm.value.ragioneSociale);
            }
            const referenteAziendale = this.searchClienteForm.value.referenteAziendale;
            //referenteAziendale
            if (referenteAziendale) {
                clienteCriteria.referenteAziendale = new voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_3__["StringFilter"];
                clienteCriteria.referenteAziendale.setContains(this.searchClienteForm.value.referenteAziendale);
            }
            const email = this.searchClienteForm.value.email;
            //email
            if (email) {
                clienteCriteria.email = new voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_3__["StringFilter"];
                clienteCriteria.email.setContains(this.searchClienteForm.value.email);
            }
            const telefono = this.searchClienteForm.value.telefono;
            //telefono
            if (telefono) {
                clienteCriteria.telefono = new voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_3__["StringFilter"];
                clienteCriteria.telefono.setContains(this.searchClienteForm.value.telefono);
            }
            const piva = this.searchClienteForm.value.piva;
            //piva
            if (piva) {
                clienteCriteria.piva = new voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_3__["StringFilter"];
                clienteCriteria.piva.setContains(this.searchClienteForm.value.piva);
            }
            const codiceFiscale = this.searchClienteForm.value.codiceFiscale;
            //codiceFiscale
            if (codiceFiscale) {
                clienteCriteria.codiceFiscale = new voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_3__["StringFilter"];
                clienteCriteria.codiceFiscale.setContains(this.searchClienteForm.value.codiceFiscale);
            }
            const sitoInternet = this.searchClienteForm.value.sitoInternet;
            //sitoInternet
            if (sitoInternet) {
                clienteCriteria.sitoInternet = new voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_3__["StringFilter"];
                clienteCriteria.sitoInternet.setContains(this.searchClienteForm.value.sitoInternet);
            }
            const fax = this.searchClienteForm.value.fax;
            //fax
            if (fax) {
                clienteCriteria.fax = new voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_3__["StringFilter"];
                clienteCriteria.fax.setContains(this.searchClienteForm.value.fax);
            }
            const organizzazionePadre = this.searchClienteForm.value.organizzazionePadre;
            //organizzazionePadre
            if (organizzazionePadre) {
                clienteCriteria.organizzazionePadre = new voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_3__["StringFilter"];
                clienteCriteria.organizzazionePadre.setContains(this.searchClienteForm.value.organizzazionePadre);
            }
        }
        return clienteCriteria;
    }
    inizialize() {
        this.searchClienteForm = this.formBuilder.group({
            'ragioneSociale': [null],
            'referenteAziendale': [null],
            'email': [null],
            'telefono': [null],
            'piva': [null],
            'codiceFiscale': [null],
            'sitoInternet': [null],
            'fax': [null],
            'organizzazionePadre': [null],
        });
    }
}
SearchClienteComponent.ɵfac = function SearchClienteComponent_Factory(t) { return new (t || SearchClienteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](blazing__WEBPACK_IMPORTED_MODULE_1__["DateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_cliente_group_api_service__WEBPACK_IMPORTED_MODULE_2__["ClienteGroupApiService"])); };
SearchClienteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: SearchClienteComponent, selectors: [["app-search-cliente"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([...PROVIDERS])], decls: 42, vars: 4, consts: [["isCollapsable", "", 1, "card"], [3, "formGroup"], [1, "fk-row", "inputs"], [1, "fk-col-8"], ["label", "Ragione Sociale", "formControlName", "ragioneSociale", 3, "keyup.enter"], ["label", "Referente Aziendale", "formControlName", "referenteAziendale", 3, "keyup.enter"], ["label", "Email", "formControlName", "email", 3, "keyup.enter"], ["label", "Telefono", "formControlName", "telefono", 3, "keyup.enter"], ["label", "Piva", "formControlName", "piva", 3, "keyup.enter"], ["label", "Codice Fiscale", "formControlName", "codiceFiscale", 3, "keyup.enter"], ["label", "Sito Internet", "formControlName", "sitoInternet", 3, "keyup.enter"], ["label", "Fax", "formControlName", "fax", 3, "keyup.enter"], ["label", "Organizzazione Padre", "formControlName", "organizzazionePadre", 3, "keyup.enter"]], template: function SearchClienteComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keyup.enter", function SearchClienteComponent_Template_bz_input_keyup_enter_8_listener() { return ctx.search(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "bz-input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keyup.enter", function SearchClienteComponent_Template_bz_input_keyup_enter_12_listener() { return ctx.search(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "bz-input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keyup.enter", function SearchClienteComponent_Template_bz_input_keyup_enter_16_listener() { return ctx.search(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](17, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "bz-input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keyup.enter", function SearchClienteComponent_Template_bz_input_keyup_enter_20_listener() { return ctx.search(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](21, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "bz-input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keyup.enter", function SearchClienteComponent_Template_bz_input_keyup_enter_24_listener() { return ctx.search(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](25, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "bz-input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keyup.enter", function SearchClienteComponent_Template_bz_input_keyup_enter_28_listener() { return ctx.search(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](29, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "bz-input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keyup.enter", function SearchClienteComponent_Template_bz_input_keyup_enter_32_listener() { return ctx.search(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](33, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "bz-input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keyup.enter", function SearchClienteComponent_Template_bz_input_keyup_enter_36_listener() { return ctx.search(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](37, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "bz-input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keyup.enter", function SearchClienteComponent_Template_bz_input_keyup_enter_40_listener() { return ctx.search(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](41, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 2, "header.search"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.searchClienteForm);
    } }, directives: [blazing__WEBPACK_IMPORTED_MODULE_1__["BzCardComponent"], blazing__WEBPACK_IMPORTED_MODULE_1__["BzCardHeaderComponent"], blazing__WEBPACK_IMPORTED_MODULE_1__["BzCardContentComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], blazing__WEBPACK_IMPORTED_MODULE_1__["BzInputComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"]], pipes: [translate_ng__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWFyY2gtY2xpZW50ZS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "56dn":
/*!*************************************************************************************************************!*\
  !*** ./src/app/pages/voila2sample-ms-demo-fe/cliente/detail-cliente/tabs-cliente/tabs-cliente.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: TabsClienteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsClienteComponent", function() { return TabsClienteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! voila2-runtime-ng */ "WGmK");
/* harmony import */ var blazing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! blazing */ "pYbk");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ordine_tab_ordine_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ordine/tab-ordine.component */ "z+ao");
/* harmony import */ var _utilities_pipe_utility_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../utilities/pipe/utility-pipe */ "SWKW");









function TabsClienteComponent_bz_tab_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "bz-tab", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-tab-ordine", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.formGroup)("entity", ctx_r0.entity)("pageStatus", ctx_r0.pageStatus)("readonly", true);
} }
class TabsClienteComponent {
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
TabsClienteComponent.ɵfac = function TabsClienteComponent_Factory(t) { return new (t || TabsClienteComponent)(); };
TabsClienteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TabsClienteComponent, selectors: [["app-tabs-cliente"]], inputs: { formGroup: "formGroup", entity: "entity", pageStatus: "pageStatus" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 3, vars: 4, consts: [["tabTitle", "ORDINE ", 4, "ngIf"], ["tabTitle", "ORDINE "], [3, "formGroup", "entity", "pageStatus", "readonly"]], template: function TabsClienteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "bz-tabset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TabsClienteComponent_bz_tab_1_Template, 2, 4, "bz-tab", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "hasPermission");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, ctx.Privileges == null ? null : ctx.Privileges.CLIENTE_FIND_BY_THE_ORDINE_OBJECT_KEY, ctx.privileges));
    } }, directives: [blazing__WEBPACK_IMPORTED_MODULE_3__["BzTabsetComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], blazing__WEBPACK_IMPORTED_MODULE_3__["BzTabComponent"], _ordine_tab_ordine_component__WEBPACK_IMPORTED_MODULE_5__["TabOrdineComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"]], pipes: [_utilities_pipe_utility_pipe__WEBPACK_IMPORTED_MODULE_6__["PermissionPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWJzLWNsaWVudGUuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "8apR":
/*!***************************************************************************!*\
  !*** ./src/app/pages/voila2sample-ms-demo-fe/cliente/cliente.constant.ts ***!
  \***************************************************************************/
/*! exports provided: cliente_ */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cliente_", function() { return cliente_; });
const cliente_ = {
    detail: {
        toast: {
            SUCCESS_INSERT: 'Cliente aggiunto con successo',
            SUCCESS_DELETE: 'Cliente eliminato con successo',
            SUCCESS_UPDATE: 'Cliente aggiornato con successo'
        },
        relLink: {
            THE_ORDINE: 'theOrdine',
        },
        dialog: {
            DELETE_MESSAGE: "Sei sicuro di voler cancellare cliente ?"
        },
        path: {
            LIST: '/pages/ms-demo/cliente/list-cliente'
        }
    },
};


/***/ }),

/***/ "C7t5":
/*!************************************************************************************!*\
  !*** ./src/app/pages/voila2sample-ms-demo-fe/cliente/cliente-group-api.service.ts ***!
  \************************************************************************************/
/*! exports provided: ClienteGroupApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClienteGroupApiService", function() { return ClienteGroupApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _cliente_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cliente-api.service */ "eUbe");



class ClienteGroupApiService {
    constructor(injector) {
        this.injector = injector;
    }
    get cliente() {
        if (!this.clienteApiService)
            this.clienteApiService = this.injector.get(_cliente_api_service__WEBPACK_IMPORTED_MODULE_1__["ClienteApiService"]);
        return this.clienteApiService;
    }
}
ClienteGroupApiService.ɵfac = function ClienteGroupApiService_Factory(t) { return new (t || ClienteGroupApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"])); };
ClienteGroupApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ClienteGroupApiService, factory: ClienteGroupApiService.ɵfac });


/***/ }),

/***/ "M6be":
/*!***********************************************************************!*\
  !*** ./src/app/pages/voila2sample-ms-demo-fe/cliente/cliente-form.ts ***!
  \***********************************************************************/
/*! exports provided: clienteForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clienteForm", function() { return clienteForm; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");

function clienteForm(formBuilder) {
    return formBuilder.group({
        ragioneSociale: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
        referenteAziendale: [null],
        email: [null],
        telefono: [null],
        piva: [null],
        codiceFiscale: [null],
        sitoInternet: [null],
        fax: [null],
        organizzazionePadre: [null],
        theUserEntityObjectKey: [null],
        theOrdine: [[]],
    });
}


/***/ }),

/***/ "X4yI":
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/voila2sample-ms-demo-fe/cliente/detail-cliente/detail-cliente.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: DetailClienteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailClienteComponent", function() { return DetailClienteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _utilities_services_buttons_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../utilities/services/buttons.service */ "f4j/");
/* harmony import */ var _cliente_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cliente-api.service */ "eUbe");
/* harmony import */ var _cliente_group_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cliente-group-api.service */ "C7t5");
/* harmony import */ var _cliente_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../cliente-form */ "M6be");
/* harmony import */ var _utilities_services_route_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../utilities/services/route.service */ "8RJb");
/* harmony import */ var _utilities_dialog_confirm_dialog_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../utilities/dialog/confirm-dialog.service */ "wqBZ");
/* harmony import */ var _shared_base_base_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/base/base.component */ "nOOO");
/* harmony import */ var _utilities_enum_page_status_enum__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../utilities/enum/page-status.enum */ "ZO1O");
/* harmony import */ var _utilities_services_overlays_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../utilities/services/overlays.service */ "zd5x");
/* harmony import */ var _cliente_constant__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../cliente.constant */ "8apR");
/* harmony import */ var voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! voila2-runtime-ng */ "WGmK");
/* harmony import */ var src_app_shared_base_base_helper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/base/base.helper */ "tHpT");
/* harmony import */ var translate_ng__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! translate-ng */ "JfpY");
/* harmony import */ var _cliente_model__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../cliente.model */ "lDpK");
/* harmony import */ var blazing__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! blazing */ "pYbk");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _tabs_cliente_tabs_cliente_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./tabs-cliente/tabs-cliente.component */ "56dn");
/* harmony import */ var _utilities_pipe_utility_pipe__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../utilities/pipe/utility-pipe */ "SWKW");



























function DetailClienteComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "bz-input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "bz-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](25, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "bz-input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "bz-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](31, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "bz-input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "bz-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](37, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "bz-input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "bz-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](43, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "bz-input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "bz-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](49, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "bz-input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "bz-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](55, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disableAttr", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 10, ctx_r0.pageStatus, "edit"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" L'Ragione Sociale ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 13, "label.obligatoryValues"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" L'Referente Aziendale ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 15, "label.obligatoryValues"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" L'Email ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 17, "label.obligatoryValues"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" L'Telefono ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](25, 19, "label.obligatoryValues"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" L'Piva ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](31, 21, "label.obligatoryValues"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" L'Codice Fiscale ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](37, 23, "label.obligatoryValues"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" L'Sito Internet ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](43, 25, "label.obligatoryValues"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" L'Fax ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](49, 27, "label.obligatoryValues"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" L'Organizzazione Padre ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](55, 29, "label.obligatoryValues"), " ");
} }
function DetailClienteComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Ragione Sociale: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Referente Aziendale: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Email: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Telefono: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Piva: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Codice Fiscale: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Sito Internet: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Fax: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " Organizzazione Padre: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " User Entity: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.cliente == null ? null : ctx_r1.cliente.ragioneSociale);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.cliente == null ? null : ctx_r1.cliente.referenteAziendale);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.cliente == null ? null : ctx_r1.cliente.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.cliente == null ? null : ctx_r1.cliente.telefono);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.cliente == null ? null : ctx_r1.cliente.piva);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.cliente == null ? null : ctx_r1.cliente.codiceFiscale);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.cliente == null ? null : ctx_r1.cliente.sitoInternet);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.cliente == null ? null : ctx_r1.cliente.fax);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.cliente == null ? null : ctx_r1.cliente.organizzazionePadre);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.cliente == null ? null : ctx_r1.cliente.theUserEntityObjectTitle);
} }
function DetailClienteComponent_button_17_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("bzClick", function DetailClienteComponent_button_17_Template_button_bzClick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.insertCliente(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("bzCheckForm", ctx_r2.clienteForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, "buttons.save"), " ");
} }
function DetailClienteComponent_button_20_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("bzClick", function DetailClienteComponent_button_20_Template_button_bzClick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.editCliente(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "buttons.edit"), " ");
} }
function DetailClienteComponent_button_23_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("bzClick", function DetailClienteComponent_button_23_Template_button_bzClick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.updateCliente(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("bzCheckForm", ctx_r4.clienteForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, "buttons.save"), " ");
} }
function DetailClienteComponent_button_26_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("bzClick", function DetailClienteComponent_button_26_Template_button_bzClick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.confirmDeleteCliente(); });
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
    _cliente_api_service__WEBPACK_IMPORTED_MODULE_3__["ClienteApiService"],
    _utilities_services_buttons_service__WEBPACK_IMPORTED_MODULE_2__["ButtonService"],
    _utilities_services_overlays_service__WEBPACK_IMPORTED_MODULE_10__["OverlaysService"],
    _utilities_services_route_service__WEBPACK_IMPORTED_MODULE_6__["RouteService"],
    _utilities_dialog_confirm_dialog_service__WEBPACK_IMPORTED_MODULE_7__["ConfirmDialogService"],
    _cliente_group_api_service__WEBPACK_IMPORTED_MODULE_4__["ClienteGroupApiService"]
];
class DetailClienteComponent extends _shared_base_base_component__WEBPACK_IMPORTED_MODULE_8__["BaseComponent"] {
    constructor(buttonsService, formBuilder, routeService, overlaysService, injector, clienteGroupApiService) {
        super();
        this.buttonsService = buttonsService;
        this.formBuilder = formBuilder;
        this.routeService = routeService;
        this.overlaysService = overlaysService;
        this.injector = injector;
        this.clienteGroupApiService = clienteGroupApiService;
        this.spinner = true;
        this.privileges = Object(voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_12__["getPrivileges"])();
    }
    get Privileges() {
        return Object(voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_12__["getPrivilegesEnum"])();
    }
    ngOnInit() {
        this.clienteForm = Object(_cliente_form__WEBPACK_IMPORTED_MODULE_5__["clienteForm"])(this.formBuilder);
        this.routeService.route.data.subscribe((data) => {
            this.pageStatus = data.pageSatus;
        });
        this.getClienteById();
        this.setTabPageStatusOnInit();
        if (Object(voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_12__["isInNewMode"])(this.pageStatus))
            this.spinner = false;
    }
    insertCliente() {
        const cliente = this.clienteForm.value;
        Object(src_app_shared_base_base_helper__WEBPACK_IMPORTED_MODULE_13__["setTabObjectKey"])(cliente, new _cliente_model__WEBPACK_IMPORTED_MODULE_15__["Cliente"](cliente), 'theOrdine', 'theClienteObjectKey');
        this.clienteGroupApiService.cliente.addCliente(cliente).subscribe((clienteResult) => {
            const toast = this.overlaysService.toast;
            this.cliente = this.manageResponse(clienteResult, toast, new translate_ng__WEBPACK_IMPORTED_MODULE_14__["TranslatePipe"](this.injector));
            if (this.cliente)
                Object(voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_12__["navigateToPath"])('/pages/ms-demo/cliente/detail-cliente/' + this.cliente.objectKey + '/view', this.routeService.router);
        });
    }
    getClienteById() {
        if (Object(voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_12__["isInViewEditMode"])(this.pageStatus)) {
            const id = Object(voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_12__["getIdFromPath"])(this.routeService.route);
            if (id) {
                this.clienteGroupApiService.cliente.getClienteById(id).subscribe((clienteResult) => {
                    this.cliente = clienteResult.response;
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
        this.clienteForm.patchValue({
            ragioneSociale: this.cliente.ragioneSociale,
            referenteAziendale: this.cliente.referenteAziendale,
            email: this.cliente.email,
            telefono: this.cliente.telefono,
            piva: this.cliente.piva,
            codiceFiscale: this.cliente.codiceFiscale,
            sitoInternet: this.cliente.sitoInternet,
            fax: this.cliente.fax,
            organizzazionePadre: this.cliente.organizzazionePadre,
            theUserEntityObjectKey: this.cliente.theUserEntityObjectKey,
        });
    }
    editCliente() {
        this.setStatusPage(_utilities_enum_page_status_enum__WEBPACK_IMPORTED_MODULE_9__["PageStatus"].EDIT, this.routeService.location);
        this.getClienteById();
    }
    updateCliente() {
        const cliente = this.clienteForm.value;
        this.clienteGroupApiService.cliente.updateCliente(cliente).subscribe((clienteResult) => {
            const toast = this.overlaysService.toast;
            this.cliente = this.manageResponse(clienteResult, toast, new translate_ng__WEBPACK_IMPORTED_MODULE_14__["TranslatePipe"](this.injector));
            if (this.cliente)
                Object(voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_12__["navigateToPath"])('/pages/ms-demo/cliente/detail-cliente/' + this.cliente.objectKey + '/view', this.routeService.router);
        });
    }
    /**
     * Delete cliente by id.
     */
    deleteClienteById() {
        this.clienteGroupApiService.cliente.deleteCliente(this.cliente.objectKey).subscribe(() => {
            this.overlaysService.toast.showSuccess(_cliente_constant__WEBPACK_IMPORTED_MODULE_11__["cliente_"].detail.toast.SUCCESS_DELETE);
            Object(voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_12__["navigateToPath"])(_cliente_constant__WEBPACK_IMPORTED_MODULE_11__["cliente_"].detail.path.LIST, this.routeService.router);
            this.overlaysService.dialog.closeDialog();
        });
    }
    /**
     * Confirm delete cliente.
     */
    confirmDeleteCliente() {
        const message = _cliente_constant__WEBPACK_IMPORTED_MODULE_11__["cliente_"].detail.dialog.DELETE_MESSAGE;
        this.overlaysService.confirmDialog.openConfirmDialog(message).subscribe((isTrue) => {
            if (isTrue)
                this.deleteClienteById();
        });
    }
}
DetailClienteComponent.ɵfac = function DetailClienteComponent_Factory(t) { return new (t || DetailClienteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_utilities_services_buttons_service__WEBPACK_IMPORTED_MODULE_2__["ButtonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_utilities_services_route_service__WEBPACK_IMPORTED_MODULE_6__["RouteService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_utilities_services_overlays_service__WEBPACK_IMPORTED_MODULE_10__["OverlaysService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_cliente_group_api_service__WEBPACK_IMPORTED_MODULE_4__["ClienteGroupApiService"])); };
DetailClienteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DetailClienteComponent, selectors: [["app-detail-cliente"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([...PROVIDERS]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 29, vars: 48, consts: [[3, "formGroup"], ["bzTooltip", "Cliente", 1, "fa", "fa-question-circle"], [4, "ngIf"], [3, "formGroup", "entity", "pageStatus"], [1, "card"], ["bzButton", "", "status", "primary", "type", "button", 3, "click"], ["bzButton", "", "status", "primary", "class", "button", 3, "bzCheckForm", "bzClick", 4, "ngIf"], ["bzButton", "", "status", "primary", "class", "button", "type", "button", 3, "bzClick", 4, "ngIf"], ["bzButton", "", "status", "primary", "class", "button", 3, "bzClick", 4, "ngIf"], [1, "fk-row", "inputs"], [1, "fk-col-8"], ["label", "Ragione Sociale:", "formControlName", "ragioneSociale", "type", "string", 3, "disableAttr"], ["label", "Referente Aziendale:", "formControlName", "referenteAziendale", "type", "string"], ["label", "Email:", "formControlName", "email", "type", "string"], ["label", "Telefono:", "formControlName", "telefono", "type", "string"], ["label", "Piva:", "formControlName", "piva", "type", "string"], ["label", "Codice Fiscale:", "formControlName", "codiceFiscale", "type", "string"], ["label", "Sito Internet:", "formControlName", "sitoInternet", "type", "string"], ["label", "Fax:", "formControlName", "fax", "type", "string"], ["label", "Organizzazione Padre:", "formControlName", "organizzazionePadre", "type", "string"], ["bzButton", "", "status", "primary", 1, "button", 3, "bzCheckForm", "bzClick"], ["bzButton", "", "status", "primary", "type", "button", 1, "button", 3, "bzClick"], ["bzButton", "", "status", "primary", 1, "button", 3, "bzClick"]], template: function DetailClienteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "bz-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "bz-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "bz-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DetailClienteComponent_ng_container_7_Template, 56, 31, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "hasPageStatus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, DetailClienteComponent_div_9_Template, 61, 10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "hasPageStatus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-tabs-cliente", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "bz-card", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "bz-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailClienteComponent_Template_button_click_14_listener() { return ctx.buttonsService.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, DetailClienteComponent_button_17_Template, 3, 4, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "hasPageStatus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "hasPermission");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, DetailClienteComponent_button_20_Template, 3, 3, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "hasPageStatus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "hasPermission");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, DetailClienteComponent_button_23_Template, 3, 4, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "hasPageStatus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](25, "hasPermission");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, DetailClienteComponent_button_26_Template, 3, 3, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "hasPageStatus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](28, "hasPermission");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.clienteForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 12, "header.detail"), " Cliente ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 14, ctx.pageStatus, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](46, _c0)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](10, 17, ctx.pageStatus, "view"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.clienteForm)("entity", ctx.cliente)("pageStatus", ctx.tabPageStatus);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 20, "buttons.goBack"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](18, 22, ctx.pageStatus, "new") && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](19, 25, ctx.Privileges == null ? null : ctx.Privileges.CLIENTE_CREATE, ctx.privileges));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](21, 28, ctx.pageStatus, "view") && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](22, 31, ctx.Privileges == null ? null : ctx.Privileges.CLIENTE_FIND_BY_ID, ctx.privileges));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](24, 34, ctx.pageStatus, "edit") && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](25, 37, ctx.Privileges == null ? null : ctx.Privileges.CLIENTE_UPDATE, ctx.privileges));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](27, 40, ctx.pageStatus, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](47, _c1)) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](28, 43, ctx.Privileges == null ? null : ctx.Privileges.CLIENTE_DELETE, ctx.privileges));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], blazing__WEBPACK_IMPORTED_MODULE_16__["BzCardComponent"], blazing__WEBPACK_IMPORTED_MODULE_16__["BzCardHeaderComponent"], blazing__WEBPACK_IMPORTED_MODULE_16__["BzTooltipDirective"], blazing__WEBPACK_IMPORTED_MODULE_16__["BzCardContentComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgIf"], _tabs_cliente_tabs_cliente_component__WEBPACK_IMPORTED_MODULE_18__["TabsClienteComponent"], blazing__WEBPACK_IMPORTED_MODULE_16__["BzButtonDirective"], blazing__WEBPACK_IMPORTED_MODULE_16__["BzInputComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], blazing__WEBPACK_IMPORTED_MODULE_16__["BzErrorComponent"], blazing__WEBPACK_IMPORTED_MODULE_16__["BzClickDirective"]], pipes: [translate_ng__WEBPACK_IMPORTED_MODULE_14__["TranslatePipe"], _utilities_pipe_utility_pipe__WEBPACK_IMPORTED_MODULE_19__["PageStatusPipe"], _utilities_pipe_utility_pipe__WEBPACK_IMPORTED_MODULE_19__["PermissionPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXRhaWwtY2xpZW50ZS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "gGb2":
/*!*************************************************************************!*\
  !*** ./src/app/pages/voila2sample-ms-demo-fe/cliente/cliente.module.ts ***!
  \*************************************************************************/
/*! exports provided: ClienteModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClienteModule", function() { return ClienteModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _list_cliente_list_cliente_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list-cliente/list-cliente.component */ "sXFL");
/* harmony import */ var blazing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! blazing */ "pYbk");
/* harmony import */ var _cliente_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cliente-routing.module */ "ny8Q");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _list_cliente_search_cliente_search_cliente_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list-cliente/search-cliente/search-cliente.component */ "0It+");
/* harmony import */ var _detail_cliente_detail_cliente_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detail-cliente/detail-cliente.component */ "X4yI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _utilities_pipe_utility_pipe_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../utilities/pipe/utility-pipe.module */ "GFGE");
/* harmony import */ var translate_ng__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! translate-ng */ "JfpY");
/* harmony import */ var _detail_cliente_tabs_cliente_tabs_cliente_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./detail-cliente/tabs-cliente/tabs-cliente.component */ "56dn");
/* harmony import */ var _dialog_dialog_list_cliente_dialog_list_cliente_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../dialog/dialog-list-cliente/dialog-list-cliente.component */ "D1H/");
/* harmony import */ var _detail_cliente_tabs_cliente_ordine_tab_ordine_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./detail-cliente/tabs-cliente/ordine/tab-ordine.component */ "z+ao");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ "fXoL");















const COMPONENTS = [
    _list_cliente_list_cliente_component__WEBPACK_IMPORTED_MODULE_1__["ListClienteComponent"],
    _list_cliente_search_cliente_search_cliente_component__WEBPACK_IMPORTED_MODULE_5__["SearchClienteComponent"],
    _detail_cliente_detail_cliente_component__WEBPACK_IMPORTED_MODULE_6__["DetailClienteComponent"],
    _detail_cliente_tabs_cliente_tabs_cliente_component__WEBPACK_IMPORTED_MODULE_10__["TabsClienteComponent"],
    _dialog_dialog_list_cliente_dialog_list_cliente_component__WEBPACK_IMPORTED_MODULE_11__["DialogListClienteComponent"],
    _detail_cliente_tabs_cliente_ordine_tab_ordine_component__WEBPACK_IMPORTED_MODULE_12__["TabOrdineComponent"],
];
class ClienteModule {
}
ClienteModule.ɵfac = function ClienteModule_Factory(t) { return new (t || ClienteModule)(); };
ClienteModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({ type: ClienteModule });
ClienteModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            blazing__WEBPACK_IMPORTED_MODULE_2__["BzCardModule"],
            blazing__WEBPACK_IMPORTED_MODULE_2__["BzTableModule"],
            _cliente_routing_module__WEBPACK_IMPORTED_MODULE_3__["ClienteRoutingModule"],
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
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](ClienteModule, { declarations: [_list_cliente_list_cliente_component__WEBPACK_IMPORTED_MODULE_1__["ListClienteComponent"],
        _list_cliente_search_cliente_search_cliente_component__WEBPACK_IMPORTED_MODULE_5__["SearchClienteComponent"],
        _detail_cliente_detail_cliente_component__WEBPACK_IMPORTED_MODULE_6__["DetailClienteComponent"],
        _detail_cliente_tabs_cliente_tabs_cliente_component__WEBPACK_IMPORTED_MODULE_10__["TabsClienteComponent"],
        _dialog_dialog_list_cliente_dialog_list_cliente_component__WEBPACK_IMPORTED_MODULE_11__["DialogListClienteComponent"],
        _detail_cliente_tabs_cliente_ordine_tab_ordine_component__WEBPACK_IMPORTED_MODULE_12__["TabOrdineComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        blazing__WEBPACK_IMPORTED_MODULE_2__["BzCardModule"],
        blazing__WEBPACK_IMPORTED_MODULE_2__["BzTableModule"],
        _cliente_routing_module__WEBPACK_IMPORTED_MODULE_3__["ClienteRoutingModule"],
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

/***/ "lDpK":
/*!************************************************************************!*\
  !*** ./src/app/pages/voila2sample-ms-demo-fe/cliente/cliente.model.ts ***!
  \************************************************************************/
/*! exports provided: Cliente */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cliente", function() { return Cliente; });
/* harmony import */ var _shared_base_base_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/base/base.model */ "JxpM");
/* harmony import */ var blazing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! blazing */ "pYbk");


class Cliente extends _shared_base_base_model__WEBPACK_IMPORTED_MODULE_0__["BaseModel"] {
    constructor(cliente) { super(), this.mapEntity(cliente); }
    /**
     * Get Cliente objectKey.
     *
     * @returns
     */
    getObjectKey() {
        const bzStringBuilder = new blazing__WEBPACK_IMPORTED_MODULE_1__["BzStringBuilder"]();
        const builder = bzStringBuilder
            .append(this.ragioneSociale);
        return builder.value;
    }
    /**
     * Map entity to model.
     *
     * @param prodotto
     */
    mapEntity(cliente) {
        if (cliente) {
            const bzAutoMapper = blazing__WEBPACK_IMPORTED_MODULE_1__["BzAutoMapper"].getInstance();
            bzAutoMapper.map('Cliente', 'ICliente', cliente, this);
        }
    }
}


/***/ }),

/***/ "ny8Q":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/voila2sample-ms-demo-fe/cliente/cliente-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: ClienteRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClienteRoutingModule", function() { return ClienteRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_security_security_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/security/security.config */ "n8Yp");
/* harmony import */ var voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! voila2-runtime-ng */ "WGmK");
/* harmony import */ var _detail_cliente_detail_cliente_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./detail-cliente/detail-cliente.component */ "X4yI");
/* harmony import */ var _list_cliente_list_cliente_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list-cliente/list-cliente.component */ "sXFL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");







const Privileges = Object(voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_2__["getPrivilegesEnum"])();
const routes = [
    {
        path: '',
        children: [
            {
                path: 'list-cliente',
                component: _list_cliente_list_cliente_component__WEBPACK_IMPORTED_MODULE_4__["ListClienteComponent"],
                canActivate: Object(src_app_security_security_config__WEBPACK_IMPORTED_MODULE_1__["getAuthGuards"])(),
                data: { privileges: [Privileges.CLIENTE_FIND_PAGINATED] }
            },
            {
                path: 'detail-cliente/new',
                component: _detail_cliente_detail_cliente_component__WEBPACK_IMPORTED_MODULE_3__["DetailClienteComponent"],
                canActivate: Object(src_app_security_security_config__WEBPACK_IMPORTED_MODULE_1__["getAuthGuards"])(),
                data: { pageSatus: 'new', privileges: [Privileges.CLIENTE_CREATE] }
            },
            {
                path: 'detail-cliente/:id/view',
                component: _detail_cliente_detail_cliente_component__WEBPACK_IMPORTED_MODULE_3__["DetailClienteComponent"],
                canActivate: Object(src_app_security_security_config__WEBPACK_IMPORTED_MODULE_1__["getAuthGuards"])(),
                data: { pageSatus: 'view', privileges: [Privileges.CLIENTE_FIND_BY_ID] }
            },
            {
                path: 'detail-cliente/:id/edit',
                component: _detail_cliente_detail_cliente_component__WEBPACK_IMPORTED_MODULE_3__["DetailClienteComponent"],
                canActivate: Object(src_app_security_security_config__WEBPACK_IMPORTED_MODULE_1__["getAuthGuards"])(),
                data: { pageSatus: 'edit', privileges: [Privileges.CLIENTE_UPDATE] }
            }
        ]
    }
];
class ClienteRoutingModule {
}
ClienteRoutingModule.ɵfac = function ClienteRoutingModule_Factory(t) { return new (t || ClienteRoutingModule)(); };
ClienteRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: ClienteRoutingModule });
ClienteRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](ClienteRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "sXFL":
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/voila2sample-ms-demo-fe/cliente/list-cliente/list-cliente.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: ListClienteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListClienteComponent", function() { return ListClienteComponent; });
/* harmony import */ var blazing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! blazing */ "pYbk");
/* harmony import */ var _shared_base_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/base/base.component */ "nOOO");
/* harmony import */ var _cliente_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cliente-api.service */ "eUbe");
/* harmony import */ var _utilities_services_buttons_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../utilities/services/buttons.service */ "f4j/");
/* harmony import */ var _search_cliente_search_cliente_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./search-cliente/search-cliente.component */ "0It+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! voila2-runtime-ng */ "WGmK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var translate_ng__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! translate-ng */ "JfpY");
/* harmony import */ var _utilities_pipe_utility_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../utilities/pipe/utility-pipe */ "SWKW");















function ListClienteComponent_td_8_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ListClienteComponent_td_8_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r12); const cliente_r10 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r11.navigateToView(cliente_r10.objectKey); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cliente_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](cliente_r10.ragioneSociale);
} }
function ListClienteComponent_td_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cliente_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", cliente_r13.referenteAziendale, "");
} }
function ListClienteComponent_td_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cliente_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", cliente_r14.email, "");
} }
function ListClienteComponent_td_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cliente_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", cliente_r15.telefono, "");
} }
function ListClienteComponent_td_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cliente_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", cliente_r16.piva, "");
} }
function ListClienteComponent_td_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cliente_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", cliente_r17.codiceFiscale, "");
} }
function ListClienteComponent_td_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cliente_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", cliente_r18.sitoInternet, "");
} }
function ListClienteComponent_td_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cliente_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", cliente_r19.fax, "");
} }
function ListClienteComponent_td_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cliente_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", cliente_r20.organizzazionePadre, "");
} }
function ListClienteComponent_button_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "buttons.new"), " ");
} }
class ListClienteComponent extends _shared_base_base_component__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"] {
    constructor(clienteApiService, router) {
        super();
        this.clienteApiService = clienteApiService;
        this.router = router;
        this.clienteList = [];
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
        this.clienteApiService.getClienteByCriteria(options).subscribe((data) => {
            this.clienteList = Object(voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_6__["extractResponse"])('cliente', data);
            this.totalPages = Object(voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_6__["extractTotalPages"])(data);
            this.spinner = false;
        }, () => {
            this.spinner = false;
        });
    }
    searchWithCriteria() {
        this.clienteCriteria = this.searchCliente.search();
        const object = { page: 0, pageSize: this.pageSize };
        this.paginateTable(object, this.clienteCriteria);
    }
    navigateToView(id) {
        Object(voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_6__["navigateToPath"])('/pages/ms-demo/cliente/detail-cliente/' + id + '/view', this.router);
    }
}
ListClienteComponent.ɵfac = function ListClienteComponent_Factory(t) { return new (t || ListClienteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_cliente_api_service__WEBPACK_IMPORTED_MODULE_2__["ClienteApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
ListClienteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: ListClienteComponent, selectors: [["app-list-cliente"]], viewQuery: function ListClienteComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_search_cliente_search_cliente_component__WEBPACK_IMPORTED_MODULE_4__["SearchClienteComponent"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.searchCliente = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([_cliente_api_service__WEBPACK_IMPORTED_MODULE_2__["ClienteApiService"], _utilities_services_buttons_service__WEBPACK_IMPORTED_MODULE_3__["ButtonService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]], decls: 43, vars: 15, consts: [[3, "bzSpinner"], ["paginatedBe", "", 3, "sources", "pageSize", "nVisiblePages", "totalPages", "pageObject"], ["bzHeaderColumn", "", "bzSortColumn", "ragioneSociale", "scope", "col"], [4, "bzColumnDef"], ["bzHeaderColumn", "", "bzSortColumn", "referenteAziendale", "scope", "col"], ["bzHeaderColumn", "", "bzSortColumn", "email", "scope", "col"], ["bzHeaderColumn", "", "bzSortColumn", "telefono", "scope", "col"], ["bzHeaderColumn", "", "bzSortColumn", "piva", "scope", "col"], ["bzHeaderColumn", "", "bzSortColumn", "codiceFiscale", "scope", "col"], ["bzHeaderColumn", "", "bzSortColumn", "sitoInternet", "scope", "col"], ["bzHeaderColumn", "", "bzSortColumn", "fax", "scope", "col"], ["bzHeaderColumn", "", "bzSortColumn", "organizzazionePadre", "scope", "col"], ["bzTableNoValue", ""], [1, "card"], ["bzButton", "", "status", "primary", 1, "button", 3, "click"], ["bzButton", "", "status", "primary", "class", "button", "routerLink", "/pages/ms-demo/cliente/detail-cliente/new", 4, "ngIf"], [1, "fk-pointer", 3, "click"], ["bzButton", "", "status", "primary", "routerLink", "/pages/ms-demo/cliente/detail-cliente/new", 1, "button"]], template: function ListClienteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "bz-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "bz-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "bz-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "bz-table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("pageObject", function ListClienteComponent_Template_bz_table_pageObject_5_listener($event) { return ctx.paginateTable($event, ctx.clienteCriteria); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, " Ragione Sociale ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, ListClienteComponent_td_8_Template, 3, 1, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, " Referente Aziendale ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](11, ListClienteComponent_td_11_Template, 2, 1, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, " Email ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](14, ListClienteComponent_td_14_Template, 2, 1, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16, " Telefono ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](17, ListClienteComponent_td_17_Template, 2, 1, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19, " Piva ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](20, ListClienteComponent_td_20_Template, 2, 1, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22, " Codice Fiscale ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](23, ListClienteComponent_td_23_Template, 2, 1, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](25, " Sito Internet ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](26, ListClienteComponent_td_26_Template, 2, 1, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](28, " Fax ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](29, ListClienteComponent_td_29_Template, 2, 1, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](31, " Organizzazione Padre ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](32, ListClienteComponent_td_32_Template, 2, 1, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](33, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](35, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](36, "app-search-cliente");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](37, "bz-card", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "bz-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](39, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ListClienteComponent_Template_button_click_39_listener() { return ctx.searchWithCriteria(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](40, " Cerca");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](41, ListClienteComponent_button_41_Template, 3, 3, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](42, "hasPermission");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("bzSpinner", ctx.spinner);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" Cliente ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 8, "header.list"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("sources", ctx.clienteList)("pageSize", ctx.pageSize)("nVisiblePages", 3)("totalPages", ctx.totalPages);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](35, 10, "label.noElements"), " Cliente ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](42, 12, ctx.Privileges == null ? null : ctx.Privileges.CLIENTE_CREATE, ctx.privileges));
    } }, directives: [blazing__WEBPACK_IMPORTED_MODULE_0__["BzCardComponent"], blazing__WEBPACK_IMPORTED_MODULE_0__["BzCardHeaderComponent"], blazing__WEBPACK_IMPORTED_MODULE_0__["BzCardContentComponent"], blazing__WEBPACK_IMPORTED_MODULE_0__["BzTableComponent"], blazing__WEBPACK_IMPORTED_MODULE_0__["BzTableHeaderDirective"], blazing__WEBPACK_IMPORTED_MODULE_0__["BzTableColumnSortDirective"], blazing__WEBPACK_IMPORTED_MODULE_0__["BzTableColumnDefDirective"], blazing__WEBPACK_IMPORTED_MODULE_0__["BzTableNoValueDirective"], _search_cliente_search_cliente_component__WEBPACK_IMPORTED_MODULE_4__["SearchClienteComponent"], blazing__WEBPACK_IMPORTED_MODULE_0__["BzButtonDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"]], pipes: [translate_ng__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"], _utilities_pipe_utility_pipe__WEBPACK_IMPORTED_MODULE_10__["PermissionPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0LWNsaWVudGUuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "z+ao":
/*!******************************************************************************************************************!*\
  !*** ./src/app/pages/voila2sample-ms-demo-fe/cliente/detail-cliente/tabs-cliente/ordine/tab-ordine.component.ts ***!
  \******************************************************************************************************************/
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
/* harmony import */ var src_app_pages_voila2sample_ms_demo_fe_dialog_dialog_list_tipo_ordine_dialog_list_tipo_ordine_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/pages/voila2sample-ms-demo-fe/dialog/dialog-list-tipo-ordine/dialog-list-tipo-ordine.component */ "ZC3r");
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r12.theinvalidObjectKey, "");
} }
function TabOrdineComponent_bz_card_0_td_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r13.theTipoOrdineObjectKey, "");
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Invalid ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, TabOrdineComponent_bz_card_0_td_20_Template, 2, 1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Tipo Ordine ");
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TabOrdineComponent_bz_card_2_td_8_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const element_r23 = ctx.$implicit; const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r24.showTipoOrdineListDialog(element_r23.rowIndex); });
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " TipoOrdine ");
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
    showTipoOrdineListDialog(index) {
        this.dialogService.showDialog(src_app_pages_voila2sample_ms_demo_fe_dialog_dialog_list_tipo_ordine_dialog_list_tipo_ordine_component__WEBPACK_IMPORTED_MODULE_5__["DialogListTipoOrdineComponent"]).subscribe((data) => {
            if (data) {
                this.setSmartControlByIndex(this.smartFormGroup, index, data, 'objectKey', 'theTipoOrdineObjectKey');
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
            Object(voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_9__["setControl"])(this.form, 'theClienteObjectKey', (_a = this.entity) === null || _a === void 0 ? void 0 : _a.objectKey);
            this.theEntitylink = (_c = (_b = this.entity) === null || _b === void 0 ? void 0 : _b._links.theOrdine) === null || _c === void 0 ? void 0 : _c.href;
        }
    }
}
TabOrdineComponent.ɵfac = function TabOrdineComponent_Factory(t) { return new (t || TabOrdineComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_pages_voila2sample_ms_demo_fe_ordine_ordine_api_service__WEBPACK_IMPORTED_MODULE_3__["OrdineApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](blazing__WEBPACK_IMPORTED_MODULE_2__["BzDialogService"])); };
TabOrdineComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TabOrdineComponent, selectors: [["app-tab-ordine"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([src_app_pages_voila2sample_ms_demo_fe_ordine_ordine_api_service__WEBPACK_IMPORTED_MODULE_3__["OrdineApiService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 4, vars: 10, consts: [[3, "bzSpinner", 4, "ngIf"], [4, "ngIf"], [3, "bzSpinner"], ["paginatedBe", "", 3, "sources", "pageSize", "nVisiblePages", "totalPages", "pageObject"], ["bzHeaderColumn", "", "bzSortColumn", "idOrdine", "scope", "col"], [4, "bzColumnDef"], ["bzHeaderColumn", "", "bzSortColumn", "anno", "scope", "col"], ["bzHeaderColumn", "", "bzSortColumn", "dataOrdine", "scope", "col"], ["bzHeaderColumn", "", "bzSortColumn", "urgente", "scope", "col"], ["bzHeaderColumn", "", "bzSortColumn", "theinvalidObjectKey", "scope", "col"], ["bzHeaderColumn", "", "bzSortColumn", "theTipoOrdineObjectKey", "scope", "col"], ["bzTableNoValue", ""], ["withIndex", "", "paginated", "", 3, "bzSmartTable", "bzFormGroup", "bzDisabledControls", "bzForm", "smartArray"], ["bzHeaderColumn", "", "scope", "col", 1, "prodotto-column-width"], [3, "formGroup", 4, "bzColumnDef"], ["bzHeaderColumn", "", "scope", "col"], ["bzButton", "", "bzAddRow", ""], [3, "formGroup"], ["formGroupName", "ordineKey"], ["formControlName", "theTipoOrdineObjectKey"], ["bzInputButton", "", "status", "primary", 3, "click"], ["iconName", "fa fa-window-maximize"], ["formControlName", "theOrdinePadreObjectKey", 3, "click"], ["formControlName", "idOrdine"], ["formControlName", "anno"], ["formControlName", "dataOrdine"], ["formControlName", "urgente"], ["bzButton", "", "status", "danger", 3, "bzRemoveRow"], ["bzButton", "", "status", "primary", 3, "bzRestoreRow"]], template: function TabOrdineComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TabOrdineComponent_bz_card_0_Template, 27, 11, "bz-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "hasPageStatus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TabOrdineComponent_bz_card_2_Template, 32, 18, "bz-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "hasPageStatus");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](1, 2, ctx.pageStatus, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c3)) || ctx.readonly);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 5, ctx.pageStatus, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c3)) && !ctx.readonly);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], blazing__WEBPACK_IMPORTED_MODULE_2__["BzCardComponent"], blazing__WEBPACK_IMPORTED_MODULE_2__["BzCardHeaderComponent"], blazing__WEBPACK_IMPORTED_MODULE_2__["BzCardContentComponent"], blazing__WEBPACK_IMPORTED_MODULE_2__["BzTableComponent"], blazing__WEBPACK_IMPORTED_MODULE_2__["BzTableHeaderDirective"], blazing__WEBPACK_IMPORTED_MODULE_2__["BzTableColumnSortDirective"], blazing__WEBPACK_IMPORTED_MODULE_2__["BzTableColumnDefDirective"], blazing__WEBPACK_IMPORTED_MODULE_2__["BzTableNoValueDirective"], blazing__WEBPACK_IMPORTED_MODULE_2__["ɵbu"], blazing__WEBPACK_IMPORTED_MODULE_2__["BzButtonDirective"], blazing__WEBPACK_IMPORTED_MODULE_2__["BzAddRowDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupName"], blazing__WEBPACK_IMPORTED_MODULE_2__["BzInputComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], blazing__WEBPACK_IMPORTED_MODULE_2__["BzInputButtonDirective"], blazing__WEBPACK_IMPORTED_MODULE_2__["BzIconComponent"], blazing__WEBPACK_IMPORTED_MODULE_2__["ɵbv"], blazing__WEBPACK_IMPORTED_MODULE_2__["ɵbw"]], pipes: [_utilities_pipe_utility_pipe__WEBPACK_IMPORTED_MODULE_11__["PageStatusPipe"], translate_ng__WEBPACK_IMPORTED_MODULE_12__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWItb3JkaW5lLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ })

}]);
//# sourceMappingURL=cliente-cliente-module.js.map