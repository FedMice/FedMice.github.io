(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ordine-ordine-module"],{

/***/ "+jxt":
/*!*************************************************************************!*\
  !*** ./src/app/pages/voila2sample-ms-demo-fe/ordine/ordine.constant.ts ***!
  \*************************************************************************/
/*! exports provided: ordine_ */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ordine_", function() { return ordine_; });
const ordine_ = {
    detail: {
        toast: {
            SUCCESS_INSERT: 'Ordine aggiunto con successo',
            SUCCESS_DELETE: 'Ordine eliminato con successo',
            SUCCESS_UPDATE: 'Ordine aggiornato con successo'
        },
        relLink: {
            THE_RIGA_ORDINE: 'theRigaOrdine',
            THE_ORDINE_FIGLI: 'theOrdineFigli',
        },
        dialog: {
            DELETE_MESSAGE: "Sei sicuro di voler cancellare ordine ?"
        },
        path: {
            LIST: '/pages/ms-demo/ordine/list-ordine'
        }
    },
};


/***/ }),

/***/ "6x6Y":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/pages/voila2sample-ms-demo-fe/ordine/detail-ordine/tabs-ordine/riga-ordine/tab-riga-ordine.component.ts ***!
  \*************************************************************************************************************************/
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
/* harmony import */ var src_app_pages_voila2sample_ms_demo_fe_dialog_dialog_list_prodotto_dialog_list_prodotto_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/pages/voila2sample-ms-demo-fe/dialog/dialog-list-prodotto/dialog-list-prodotto.component */ "lL2B");
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r4.rigaOrdineKey.theProdottoObjectKey, "");
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Prodotto ");
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TabRigaOrdineComponent_bz_card_2_td_8_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const element_r11 = ctx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r12.showProdottoListDialog(element_r11.rowIndex); });
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Prodotto ");
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
    showProdottoListDialog(index) {
        this.dialogService.showDialog(src_app_pages_voila2sample_ms_demo_fe_dialog_dialog_list_prodotto_dialog_list_prodotto_component__WEBPACK_IMPORTED_MODULE_5__["DialogListProdottoComponent"]).subscribe((data) => {
            if (data) {
                this.setSmartControlByIndex(this.smartFormGroup, index, data, 'objectKey', 'rigaOrdineKey.theProdottoObjectKey');
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
            Object(voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_8__["setControl"])(this.form, 'rigaOrdineKey.theOrdineObjectKey', (_a = this.entity) === null || _a === void 0 ? void 0 : _a.objectKey);
            this.theEntitylink = (_c = (_b = this.entity) === null || _b === void 0 ? void 0 : _b._links.theRigaOrdine) === null || _c === void 0 ? void 0 : _c.href;
        }
    }
}
TabRigaOrdineComponent.ɵfac = function TabRigaOrdineComponent_Factory(t) { return new (t || TabRigaOrdineComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_pages_voila2sample_ms_demo_fe_riga_ordine_riga_ordine_api_service__WEBPACK_IMPORTED_MODULE_3__["RigaOrdineApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](blazing__WEBPACK_IMPORTED_MODULE_2__["BzDialogService"])); };
TabRigaOrdineComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TabRigaOrdineComponent, selectors: [["app-tab-riga-ordine"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([src_app_pages_voila2sample_ms_demo_fe_riga_ordine_riga_ordine_api_service__WEBPACK_IMPORTED_MODULE_3__["RigaOrdineApiService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 4, vars: 10, consts: [[3, "bzSpinner", 4, "ngIf"], [4, "ngIf"], [3, "bzSpinner"], ["paginatedBe", "", 3, "sources", "pageSize", "nVisiblePages", "totalPages", "pageObject"], ["bzHeaderColumn", "", "bzSortColumn", "theProdottoObjectKey", "scope", "col"], [4, "bzColumnDef"], ["bzHeaderColumn", "", "bzSortColumn", "quantita", "scope", "col"], ["bzTableNoValue", ""], ["withIndex", "", "paginated", "", 3, "bzSmartTable", "bzFormGroup", "bzDisabledControls", "bzForm", "smartArray"], ["bzHeaderColumn", "", "scope", "col", 1, "prodotto-column-width"], [3, "formGroup", 4, "bzColumnDef"], ["bzHeaderColumn", "", "scope", "col"], ["bzButton", "", "bzAddRow", ""], [3, "formGroup"], ["formGroupName", "rigaOrdineKey"], ["formControlName", "theProdottoObjectKey"], ["bzInputButton", "", "status", "primary", 3, "click"], ["iconName", "fa fa-window-maximize"], ["formControlName", "quantita"], ["bzButton", "", "status", "danger", 3, "bzRemoveRow"], ["bzButton", "", "status", "primary", 3, "bzRestoreRow"]], template: function TabRigaOrdineComponent_Template(rf, ctx) { if (rf & 1) {
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

/***/ "AJVm":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/voila2sample-ms-demo-fe/ordine/ordine-group-api.service.ts ***!
  \**********************************************************************************/
/*! exports provided: OrdineGroupApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdineGroupApiService", function() { return OrdineGroupApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ordine_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ordine-api.service */ "AiQM");
/* harmony import */ var _voila2sample_ms_demo_fe_cliente_cliente_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../voila2sample-ms-demo-fe/cliente/cliente-api.service */ "eUbe");
/* harmony import */ var _voila2sample_ms_demo_fe_tipo_ordine_tipo_ordine_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../voila2sample-ms-demo-fe/tipo-ordine/tipo-ordine-api.service */ "4+27");





class OrdineGroupApiService {
    constructor(injector) {
        this.injector = injector;
    }
    get ordine() {
        if (!this.ordineApiService)
            this.ordineApiService = this.injector.get(_ordine_api_service__WEBPACK_IMPORTED_MODULE_1__["OrdineApiService"]);
        return this.ordineApiService;
    }
    get cliente() {
        if (!this.clienteApiService)
            this.clienteApiService = this.injector.get(_voila2sample_ms_demo_fe_cliente_cliente_api_service__WEBPACK_IMPORTED_MODULE_2__["ClienteApiService"]);
        return this.clienteApiService;
    }
    get tipoOrdine() {
        if (!this.tipoOrdineApiService)
            this.tipoOrdineApiService = this.injector.get(_voila2sample_ms_demo_fe_tipo_ordine_tipo_ordine_api_service__WEBPACK_IMPORTED_MODULE_3__["TipoOrdineApiService"]);
        return this.tipoOrdineApiService;
    }
}
OrdineGroupApiService.ɵfac = function OrdineGroupApiService_Factory(t) { return new (t || OrdineGroupApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"])); };
OrdineGroupApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: OrdineGroupApiService, factory: OrdineGroupApiService.ɵfac });


/***/ }),

/***/ "EpK6":
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/voila2sample-ms-demo-fe/ordine/detail-ordine/detail-ordine.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: DetailOrdineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailOrdineComponent", function() { return DetailOrdineComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _utilities_services_buttons_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../utilities/services/buttons.service */ "f4j/");
/* harmony import */ var _ordine_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ordine-api.service */ "AiQM");
/* harmony import */ var _ordine_group_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ordine-group-api.service */ "AJVm");
/* harmony import */ var _ordine_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ordine-form */ "Thuv");
/* harmony import */ var _utilities_services_route_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../utilities/services/route.service */ "8RJb");
/* harmony import */ var _utilities_dialog_confirm_dialog_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../utilities/dialog/confirm-dialog.service */ "wqBZ");
/* harmony import */ var _shared_base_base_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/base/base.component */ "nOOO");
/* harmony import */ var _utilities_services_overlays_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../utilities/services/overlays.service */ "zd5x");
/* harmony import */ var _ordine_constant__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../ordine.constant */ "+jxt");
/* harmony import */ var voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! voila2-runtime-ng */ "WGmK");
/* harmony import */ var src_app_shared_base_base_helper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/base/base.helper */ "tHpT");
/* harmony import */ var _voila2sample_ms_demo_fe_cliente_cliente_api_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../voila2sample-ms-demo-fe/cliente/cliente-api.service */ "eUbe");
/* harmony import */ var _voila2sample_ms_demo_fe_tipo_ordine_tipo_ordine_api_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../voila2sample-ms-demo-fe/tipo-ordine/tipo-ordine-api.service */ "4+27");
/* harmony import */ var translate_ng__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! translate-ng */ "JfpY");
/* harmony import */ var _ordine_model__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../ordine.model */ "RVFa");
/* harmony import */ var blazing__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! blazing */ "pYbk");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _tabs_ordine_tabs_ordine_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./tabs-ordine/tabs-ordine.component */ "s/85");
/* harmony import */ var _utilities_pipe_utility_pipe__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../utilities/pipe/utility-pipe */ "SWKW");




























function DetailOrdineComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "bz-input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "hasPageStatus");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "bz-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "bz-input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "hasPageStatus");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "bz-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "bz-date-picker", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "bz-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "bz-switch", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "bz-dropdown", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "bz-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "bz-dropdown", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "bz-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "bz-dropdown", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "bz-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disableAttr", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 8, ctx_r0.pageStatus, "edit"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Id Ordine ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 11, "label.obligatoryValues"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disableAttr", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](12, 13, ctx_r0.pageStatus, "edit"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Anno ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 16, "label.obligatoryValues"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Data Ordine ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 18, "label.obligatoryValues"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx_r0.clienteList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx_r0.tipoOrdineList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx_r0.ordineList);
} }
function DetailOrdineComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Id Ordine: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Anno: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Data Ordine: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Urgente: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Cliente: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Tipo Ordine: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Ordine: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.ordine == null ? null : ctx_r1.ordine.ordineKey == null ? null : ctx_r1.ordine.ordineKey.idOrdine);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.ordine == null ? null : ctx_r1.ordine.ordineKey == null ? null : ctx_r1.ordine.ordineKey.anno);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](19, 7, ctx_r1.ordine == null ? null : ctx_r1.ordine.dataOrdine, "dd/MM/YYYY "));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.ordine == null ? null : ctx_r1.ordine.urgente);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.ordine == null ? null : ctx_r1.ordine.theClienteObjectTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.ordine == null ? null : ctx_r1.ordine.theTipoOrdineObjectTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.ordine == null ? null : ctx_r1.ordine.theOrdinePadreObjectTitle);
} }
function DetailOrdineComponent_button_17_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("bzClick", function DetailOrdineComponent_button_17_Template_button_bzClick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.insertOrdine(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("bzCheckForm", ctx_r2.ordineForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, "buttons.save"), " ");
} }
function DetailOrdineComponent_button_20_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("bzClick", function DetailOrdineComponent_button_20_Template_button_bzClick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.editOrdine(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "buttons.edit"), " ");
} }
function DetailOrdineComponent_button_23_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("bzClick", function DetailOrdineComponent_button_23_Template_button_bzClick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.updateOrdine(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("bzCheckForm", ctx_r4.ordineForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, "buttons.save"), " ");
} }
function DetailOrdineComponent_button_26_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("bzClick", function DetailOrdineComponent_button_26_Template_button_bzClick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.confirmDeleteOrdine(); });
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
    _ordine_api_service__WEBPACK_IMPORTED_MODULE_3__["OrdineApiService"],
    _utilities_services_buttons_service__WEBPACK_IMPORTED_MODULE_2__["ButtonService"],
    _utilities_services_overlays_service__WEBPACK_IMPORTED_MODULE_9__["OverlaysService"],
    _utilities_services_route_service__WEBPACK_IMPORTED_MODULE_6__["RouteService"],
    _utilities_dialog_confirm_dialog_service__WEBPACK_IMPORTED_MODULE_7__["ConfirmDialogService"],
    _ordine_group_api_service__WEBPACK_IMPORTED_MODULE_4__["OrdineGroupApiService"],
    _voila2sample_ms_demo_fe_cliente_cliente_api_service__WEBPACK_IMPORTED_MODULE_13__["ClienteApiService"],
    _voila2sample_ms_demo_fe_tipo_ordine_tipo_ordine_api_service__WEBPACK_IMPORTED_MODULE_14__["TipoOrdineApiService"],
];
class DetailOrdineComponent extends _shared_base_base_component__WEBPACK_IMPORTED_MODULE_8__["BaseComponent"] {
    constructor(buttonsService, formBuilder, routeService, overlaysService, injector, ordineGroupApiService) {
        super();
        this.buttonsService = buttonsService;
        this.formBuilder = formBuilder;
        this.routeService = routeService;
        this.overlaysService = overlaysService;
        this.injector = injector;
        this.ordineGroupApiService = ordineGroupApiService;
        this.clienteList = [];
        this.tipoOrdineList = [];
        this.ordineList = [];
        this.spinner = true;
        this.privileges = Object(voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_11__["getPrivileges"])();
    }
    get Privileges() {
        return Object(voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_11__["getPrivilegesEnum"])();
    }
    ngOnInit() {
        this.ordineForm = Object(_ordine_form__WEBPACK_IMPORTED_MODULE_5__["ordineForm"])(this.formBuilder);
        this.routeService.route.data.subscribe((data) => {
            this.pageStatus = data.pageSatus;
        });
        this.getOrdineById();
        this.setTabPageStatusOnInit();
        this.getParentsList();
        if (Object(voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_11__["isInNewMode"])(this.pageStatus))
            this.spinner = false;
    }
    insertOrdine() {
        const ordine = this.ordineForm.value;
        Object(src_app_shared_base_base_helper__WEBPACK_IMPORTED_MODULE_12__["setTabObjectKey"])(ordine, new _ordine_model__WEBPACK_IMPORTED_MODULE_16__["Ordine"](ordine), 'theRigaOrdine', 'rigaOrdineKey.theOrdineObjectKey');
        Object(src_app_shared_base_base_helper__WEBPACK_IMPORTED_MODULE_12__["setTabObjectKey"])(ordine, new _ordine_model__WEBPACK_IMPORTED_MODULE_16__["Ordine"](ordine), 'theOrdineFigli', 'theOrdineObjectKey');
        this.ordineGroupApiService.ordine.addOrdine(ordine).subscribe((ordineResult) => {
            const toast = this.overlaysService.toast;
            this.ordine = this.manageResponse(ordineResult, toast, new translate_ng__WEBPACK_IMPORTED_MODULE_15__["TranslatePipe"](this.injector));
            console.log("Ordine .... ", this.ordine);
            if (this.ordine)
                Object(voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_11__["navigateToPath"])('/pages/ms-demo/ordine/detail-ordine/' + this.ordine.objectKey + '/view', this.routeService.router);
        });
    }
    getOrdineById() {
        if (Object(voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_11__["isInViewEditMode"])(this.pageStatus)) {
            const id = Object(voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_11__["getIdFromPath"])(this.routeService.route);
            if (id) {
                this.ordineGroupApiService.ordine.getOrdineById(id).subscribe((ordineResult) => {
                    this.ordine = ordineResult.response;
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
        this.ordineForm.patchValue({
            ordineKey: {
                idOrdine: this.ordine.ordineKey.idOrdine,
                anno: this.ordine.ordineKey.anno,
            },
            dataOrdine: this.ordine.dataOrdine,
            urgente: this.ordine.urgente,
            theClienteObjectKey: this.ordine.theClienteObjectKey,
            theTipoOrdineObjectKey: this.ordine.theTipoOrdineObjectKey,
            theOrdinePadreObjectKey: this.ordine.theOrdinePadreObjectKey,
        });
    }
    editOrdine() {
        // this.setStatusPage(PageStatus.EDIT, this.routeService.location);
        // this.getOrdineById();
        Object(voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_11__["navigateToPath"])('/pages/ms-demo/ordine/detail-ordine/' + this.ordine.objectKey + '/edit', this.routeService.router);
    }
    updateOrdine() {
        const ordine = this.ordineForm.value;
        this.ordineGroupApiService.ordine.updateOrdine(ordine).subscribe((ordineResult) => {
            const toast = this.overlaysService.toast;
            this.ordine = this.manageResponse(ordineResult, toast, new translate_ng__WEBPACK_IMPORTED_MODULE_15__["TranslatePipe"](this.injector));
            if (this.ordine)
                Object(voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_11__["navigateToPath"])('/pages/ms-demo/ordine/detail-ordine/' + this.ordine.objectKey + '/view', this.routeService.router);
        });
    }
    /**
     * Delete ordine by id.
     */
    deleteOrdineById() {
        this.ordineGroupApiService.ordine.deleteOrdine(this.ordine.objectKey).subscribe(() => {
            this.overlaysService.toast.showSuccess(_ordine_constant__WEBPACK_IMPORTED_MODULE_10__["ordine_"].detail.toast.SUCCESS_DELETE);
            Object(voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_11__["navigateToPath"])(_ordine_constant__WEBPACK_IMPORTED_MODULE_10__["ordine_"].detail.path.LIST, this.routeService.router);
            this.overlaysService.dialog.closeDialog();
        });
    }
    /**
     * Confirm delete ordine.
     */
    confirmDeleteOrdine() {
        const message = _ordine_constant__WEBPACK_IMPORTED_MODULE_10__["ordine_"].detail.dialog.DELETE_MESSAGE;
        this.overlaysService.confirmDialog.openConfirmDialog(message).subscribe((isTrue) => {
            if (isTrue)
                this.deleteOrdineById();
        });
    }
    getClienteList() {
        this.ordineGroupApiService.cliente.getClienteByCriteria().subscribe((data) => {
            this.clienteList = Object(voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_11__["getListForDropdown"])('cliente', data);
        });
    }
    getTipoOrdineList() {
        this.ordineGroupApiService.tipoOrdine.getTipoOrdineByCriteria().subscribe((data) => {
            this.tipoOrdineList = Object(voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_11__["getListForDropdown"])('tipoOrdine', data);
        });
    }
    getOrdineList() {
        this.ordineGroupApiService.ordine.getOrdineByCriteria().subscribe((data) => {
            this.ordineList = Object(voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_11__["getListForDropdown"])('ordine', data);
        });
    }
    getParentsList() {
        this.getClienteList();
        this.getTipoOrdineList();
        this.getOrdineList();
    }
}
DetailOrdineComponent.ɵfac = function DetailOrdineComponent_Factory(t) { return new (t || DetailOrdineComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_utilities_services_buttons_service__WEBPACK_IMPORTED_MODULE_2__["ButtonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_utilities_services_route_service__WEBPACK_IMPORTED_MODULE_6__["RouteService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_utilities_services_overlays_service__WEBPACK_IMPORTED_MODULE_9__["OverlaysService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ordine_group_api_service__WEBPACK_IMPORTED_MODULE_4__["OrdineGroupApiService"])); };
DetailOrdineComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DetailOrdineComponent, selectors: [["app-detail-ordine"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([...PROVIDERS]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 29, vars: 48, consts: [[3, "formGroup"], ["bzTooltip", "Ordine", 1, "fa", "fa-question-circle"], [4, "ngIf"], [3, "formGroup", "entity", "pageStatus"], [1, "card"], ["bzButton", "", "status", "primary", "type", "button", 3, "click"], ["bzButton", "", "status", "primary", "class", "button", 3, "bzCheckForm", "bzClick", 4, "ngIf"], ["bzButton", "", "status", "primary", "class", "button", "type", "button", 3, "bzClick", 4, "ngIf"], ["bzButton", "", "status", "primary", "class", "button", 3, "bzClick", 4, "ngIf"], ["formGroupName", "ordineKey"], [1, "fk-row", "inputs"], [1, "fk-col-8"], ["label", "Id Ordine:", "formControlName", "idOrdine", "type", "number", 3, "disableAttr"], ["label", "Anno:", "formControlName", "anno", "type", "number", 3, "disableAttr"], ["label", "Data Ordine:", "controlName", "dataOrdine", "type", "Date"], ["label", "Urgente", "ariaId", "Urgente", "formControlName", "urgente", "type", "boolean"], ["label", "Cliente", "optionLabel", "objectTitle", "optionValue", "objectKey", "formControlName", "theClienteObjectKey", 3, "options"], ["label", "Tipo Ordine", "optionLabel", "objectTitle", "optionValue", "objectKey", "formControlName", "theTipoOrdineObjectKey", 3, "options"], ["label", "Ordine", "optionLabel", "objectTitle", "optionValue", "objectKey", "formControlName", "theOrdinePadreObjectKey", 3, "options"], ["bzButton", "", "status", "primary", 1, "button", 3, "bzCheckForm", "bzClick"], ["bzButton", "", "status", "primary", "type", "button", 1, "button", 3, "bzClick"], ["bzButton", "", "status", "primary", 1, "button", 3, "bzClick"]], template: function DetailOrdineComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "bz-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "bz-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "bz-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DetailOrdineComponent_ng_container_7_Template, 37, 20, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "hasPageStatus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, DetailOrdineComponent_div_9_Template, 44, 10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "hasPageStatus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-tabs-ordine", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "bz-card", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "bz-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailOrdineComponent_Template_button_click_14_listener() { return ctx.buttonsService.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, DetailOrdineComponent_button_17_Template, 3, 4, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "hasPageStatus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "hasPermission");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, DetailOrdineComponent_button_20_Template, 3, 3, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "hasPageStatus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "hasPermission");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, DetailOrdineComponent_button_23_Template, 3, 4, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "hasPageStatus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](25, "hasPermission");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, DetailOrdineComponent_button_26_Template, 3, 3, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "hasPageStatus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](28, "hasPermission");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.ordineForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 12, "header.detail"), " Ordine ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 14, ctx.pageStatus, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](46, _c0)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](10, 17, ctx.pageStatus, "view"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.ordineForm)("entity", ctx.ordine)("pageStatus", ctx.tabPageStatus);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 20, "buttons.goBack"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](18, 22, ctx.pageStatus, "new") && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](19, 25, ctx.Privileges == null ? null : ctx.Privileges.ORDINE_CREATE, ctx.privileges));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](21, 28, ctx.pageStatus, "view") && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](22, 31, ctx.Privileges == null ? null : ctx.Privileges.ORDINE_FIND_BY_ID, ctx.privileges));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](24, 34, ctx.pageStatus, "edit") && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](25, 37, ctx.Privileges == null ? null : ctx.Privileges.ORDINE_UPDATE, ctx.privileges));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](27, 40, ctx.pageStatus, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](47, _c1)) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](28, 43, ctx.Privileges == null ? null : ctx.Privileges.ORDINE_DELETE, ctx.privileges));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], blazing__WEBPACK_IMPORTED_MODULE_17__["BzCardComponent"], blazing__WEBPACK_IMPORTED_MODULE_17__["BzCardHeaderComponent"], blazing__WEBPACK_IMPORTED_MODULE_17__["BzTooltipDirective"], blazing__WEBPACK_IMPORTED_MODULE_17__["BzCardContentComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["NgIf"], _tabs_ordine_tabs_ordine_component__WEBPACK_IMPORTED_MODULE_19__["TabsOrdineComponent"], blazing__WEBPACK_IMPORTED_MODULE_17__["BzButtonDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupName"], blazing__WEBPACK_IMPORTED_MODULE_17__["BzInputComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], blazing__WEBPACK_IMPORTED_MODULE_17__["BzErrorComponent"], blazing__WEBPACK_IMPORTED_MODULE_17__["BzDatePickerComponent"], blazing__WEBPACK_IMPORTED_MODULE_17__["BzSwitchComponent"], blazing__WEBPACK_IMPORTED_MODULE_17__["BzDropdownComponent"], blazing__WEBPACK_IMPORTED_MODULE_17__["BzClickDirective"]], pipes: [translate_ng__WEBPACK_IMPORTED_MODULE_15__["TranslatePipe"], _utilities_pipe_utility_pipe__WEBPACK_IMPORTED_MODULE_20__["PageStatusPipe"], _utilities_pipe_utility_pipe__WEBPACK_IMPORTED_MODULE_20__["PermissionPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["DatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXRhaWwtb3JkaW5lLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "OMqE":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/voila2sample-ms-demo-fe/ordine/ordine-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: OrdineRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdineRoutingModule", function() { return OrdineRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_security_security_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/security/security.config */ "n8Yp");
/* harmony import */ var voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! voila2-runtime-ng */ "WGmK");
/* harmony import */ var _detail_ordine_detail_ordine_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./detail-ordine/detail-ordine.component */ "EpK6");
/* harmony import */ var _list_ordine_list_ordine_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list-ordine/list-ordine.component */ "XD9y");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");







const Privileges = Object(voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_2__["getPrivilegesEnum"])();
const routes = [
    {
        path: '',
        children: [
            {
                path: 'list-ordine',
                component: _list_ordine_list_ordine_component__WEBPACK_IMPORTED_MODULE_4__["ListOrdineComponent"],
                canActivate: Object(src_app_security_security_config__WEBPACK_IMPORTED_MODULE_1__["getAuthGuards"])(),
                data: { privileges: [Privileges.ORDINE_FIND_PAGINATED] }
            },
            {
                path: 'detail-ordine/new',
                component: _detail_ordine_detail_ordine_component__WEBPACK_IMPORTED_MODULE_3__["DetailOrdineComponent"],
                canActivate: Object(src_app_security_security_config__WEBPACK_IMPORTED_MODULE_1__["getAuthGuards"])(),
                data: { pageSatus: 'new', privileges: [Privileges.ORDINE_CREATE] }
            },
            {
                path: 'detail-ordine/:id/view',
                component: _detail_ordine_detail_ordine_component__WEBPACK_IMPORTED_MODULE_3__["DetailOrdineComponent"],
                canActivate: Object(src_app_security_security_config__WEBPACK_IMPORTED_MODULE_1__["getAuthGuards"])(),
                data: { pageSatus: 'view', privileges: [Privileges.ORDINE_FIND_BY_ID] }
            },
            {
                path: 'detail-ordine/:id/edit',
                component: _detail_ordine_detail_ordine_component__WEBPACK_IMPORTED_MODULE_3__["DetailOrdineComponent"],
                canActivate: Object(src_app_security_security_config__WEBPACK_IMPORTED_MODULE_1__["getAuthGuards"])(),
                data: { pageSatus: 'edit', privileges: [Privileges.ORDINE_UPDATE] }
            }
        ]
    }
];
class OrdineRoutingModule {
}
OrdineRoutingModule.ɵfac = function OrdineRoutingModule_Factory(t) { return new (t || OrdineRoutingModule)(); };
OrdineRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: OrdineRoutingModule });
OrdineRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](OrdineRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "RVFa":
/*!**********************************************************************!*\
  !*** ./src/app/pages/voila2sample-ms-demo-fe/ordine/ordine.model.ts ***!
  \**********************************************************************/
/*! exports provided: Ordine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ordine", function() { return Ordine; });
/* harmony import */ var _shared_base_base_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/base/base.model */ "JxpM");
/* harmony import */ var blazing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! blazing */ "pYbk");


class Ordine extends _shared_base_base_model__WEBPACK_IMPORTED_MODULE_0__["BaseModel"] {
    constructor(ordine) { super(); this.mapEntity(ordine); }
    /**
     * Get Ordine objectKey.
     *
     * @returns
     */
    getObjectKey() {
        const bzStringBuilder = new blazing__WEBPACK_IMPORTED_MODULE_1__["BzStringBuilder"]();
        const builder = bzStringBuilder
            .append(this.ordineKey.idOrdine)
            .append('~')
            .append(this.ordineKey.anno);
        return builder.value;
    }
    /**
     * Map entity to model.
     *
     * @param prodotto
     */
    mapEntity(ordine) {
        if (ordine) {
            const bzAutoMapper = blazing__WEBPACK_IMPORTED_MODULE_1__["BzAutoMapper"].getInstance();
            console.log("FFFFFFFF....", blazing__WEBPACK_IMPORTED_MODULE_1__["ObjectUtils"].isAnObject(this));
            bzAutoMapper.map('Ordine', 'IOrdine', ordine, this);
            console.log("THIS ::::::: ", this);
        }
    }
}


/***/ }),

/***/ "XD9y":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/voila2sample-ms-demo-fe/ordine/list-ordine/list-ordine.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: ListOrdineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListOrdineComponent", function() { return ListOrdineComponent; });
/* harmony import */ var blazing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! blazing */ "pYbk");
/* harmony import */ var _shared_base_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/base/base.component */ "nOOO");
/* harmony import */ var _ordine_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ordine-api.service */ "AiQM");
/* harmony import */ var _utilities_services_buttons_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../utilities/services/buttons.service */ "f4j/");
/* harmony import */ var _search_ordine_search_ordine_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./search-ordine/search-ordine.component */ "xtXZ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! voila2-runtime-ng */ "WGmK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var translate_ng__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! translate-ng */ "JfpY");
/* harmony import */ var _utilities_pipe_utility_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../utilities/pipe/utility-pipe */ "SWKW");















function ListOrdineComponent_td_8_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ListOrdineComponent_td_8_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r10); const ordine_r8 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r9.navigateToView(ordine_r8.objectKey); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ordine_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ordine_r8.ordineKey.idOrdine);
} }
function ListOrdineComponent_td_11_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ListOrdineComponent_td_11_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r13); const ordine_r11 = ctx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r12.navigateToView(ordine_r11.objectKey); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ordine_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ordine_r11.ordineKey.anno);
} }
function ListOrdineComponent_td_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ordine_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ordine_r14.dataOrdine, "");
} }
function ListOrdineComponent_td_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ordine_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ordine_r15.urgente, "");
} }
function ListOrdineComponent_td_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ordine_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ordine_r16.theClienteObjectTitle, "");
} }
function ListOrdineComponent_td_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ordine_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ordine_r17.theTipoOrdineObjectTitle, "");
} }
function ListOrdineComponent_td_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ordine_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ordine_r18.theOrdinePadreObjectTitle, "");
} }
function ListOrdineComponent_button_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "buttons.new"), " ");
} }
class ListOrdineComponent extends _shared_base_base_component__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"] {
    constructor(ordineApiService, router) {
        super();
        this.ordineApiService = ordineApiService;
        this.router = router;
        this.ordineList = [];
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
        this.ordineApiService.getOrdineByCriteria(options).subscribe((data) => {
            this.ordineList = Object(voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_6__["extractResponse"])('ordine', data);
            this.totalPages = Object(voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_6__["extractTotalPages"])(data);
            this.spinner = false;
        }, () => {
            this.spinner = false;
        });
    }
    searchWithCriteria() {
        this.ordineCriteria = this.searchOrdine.search();
        const object = { page: 0, pageSize: this.pageSize };
        this.paginateTable(object, this.ordineCriteria);
    }
    navigateToView(id) {
        Object(voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_6__["navigateToPath"])('/pages/ms-demo/ordine/detail-ordine/' + id + '/view', this.router);
    }
}
ListOrdineComponent.ɵfac = function ListOrdineComponent_Factory(t) { return new (t || ListOrdineComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ordine_api_service__WEBPACK_IMPORTED_MODULE_2__["OrdineApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
ListOrdineComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: ListOrdineComponent, selectors: [["app-list-ordine"]], viewQuery: function ListOrdineComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_search_ordine_search_ordine_component__WEBPACK_IMPORTED_MODULE_4__["SearchOrdineComponent"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.searchOrdine = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([_ordine_api_service__WEBPACK_IMPORTED_MODULE_2__["OrdineApiService"], _utilities_services_buttons_service__WEBPACK_IMPORTED_MODULE_3__["ButtonService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]], decls: 37, vars: 15, consts: [[3, "bzSpinner"], ["paginatedBe", "", 3, "sources", "pageSize", "nVisiblePages", "totalPages", "pageObject"], ["bzHeaderColumn", "", "bzSortColumn", "idOrdine", "scope", "col"], [4, "bzColumnDef"], ["bzHeaderColumn", "", "bzSortColumn", "anno", "scope", "col"], ["bzHeaderColumn", "", "bzSortColumn", "dataOrdine", "scope", "col"], ["bzHeaderColumn", "", "bzSortColumn", "urgente", "scope", "col"], ["bzHeaderColumn", "", "scope", "col"], ["bzTableNoValue", ""], [1, "card"], ["bzButton", "", "status", "primary", 1, "button", 3, "click"], ["bzButton", "", "status", "primary", "class", "button", "routerLink", "/pages/ms-demo/ordine/detail-ordine/new", 4, "ngIf"], [1, "fk-pointer", 3, "click"], ["bzButton", "", "status", "primary", "routerLink", "/pages/ms-demo/ordine/detail-ordine/new", 1, "button"]], template: function ListOrdineComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "bz-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "bz-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "bz-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "bz-table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("pageObject", function ListOrdineComponent_Template_bz_table_pageObject_5_listener($event) { return ctx.paginateTable($event, ctx.ordineCriteria); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, " Id Ordine ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, ListOrdineComponent_td_8_Template, 3, 1, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, " Anno ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](11, ListOrdineComponent_td_11_Template, 3, 1, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, " Data Ordine ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](14, ListOrdineComponent_td_14_Template, 2, 1, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16, " Urgente ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](17, ListOrdineComponent_td_17_Template, 2, 1, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19, " Cliente ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](20, ListOrdineComponent_td_20_Template, 2, 1, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22, " Tipo Ordine ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](23, ListOrdineComponent_td_23_Template, 2, 1, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](25, " Ordine ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](26, ListOrdineComponent_td_26_Template, 2, 1, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](27, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](29, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](30, "app-search-ordine");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "bz-card", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "bz-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ListOrdineComponent_Template_button_click_33_listener() { return ctx.searchWithCriteria(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](34, " Cerca");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](35, ListOrdineComponent_button_35_Template, 3, 3, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](36, "hasPermission");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("bzSpinner", ctx.spinner);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" Ordine ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 8, "header.list"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("sources", ctx.ordineList)("pageSize", ctx.pageSize)("nVisiblePages", 3)("totalPages", ctx.totalPages);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](29, 10, "label.noElements"), " Ordine ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](36, 12, ctx.Privileges == null ? null : ctx.Privileges.ORDINE_CREATE, ctx.privileges));
    } }, directives: [blazing__WEBPACK_IMPORTED_MODULE_0__["BzCardComponent"], blazing__WEBPACK_IMPORTED_MODULE_0__["BzCardHeaderComponent"], blazing__WEBPACK_IMPORTED_MODULE_0__["BzCardContentComponent"], blazing__WEBPACK_IMPORTED_MODULE_0__["BzTableComponent"], blazing__WEBPACK_IMPORTED_MODULE_0__["BzTableHeaderDirective"], blazing__WEBPACK_IMPORTED_MODULE_0__["BzTableColumnSortDirective"], blazing__WEBPACK_IMPORTED_MODULE_0__["BzTableColumnDefDirective"], blazing__WEBPACK_IMPORTED_MODULE_0__["BzTableNoValueDirective"], _search_ordine_search_ordine_component__WEBPACK_IMPORTED_MODULE_4__["SearchOrdineComponent"], blazing__WEBPACK_IMPORTED_MODULE_0__["BzButtonDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"]], pipes: [translate_ng__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"], _utilities_pipe_utility_pipe__WEBPACK_IMPORTED_MODULE_10__["PermissionPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0LW9yZGluZS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "hDEX":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/pages/voila2sample-ms-demo-fe/ordine/detail-ordine/tabs-ordine/ordine-figli/tab-ordine-figli.component.ts ***!
  \***************************************************************************************************************************/
/*! exports provided: TabOrdineFigliComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabOrdineFigliComponent", function() { return TabOrdineFigliComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var blazing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! blazing */ "pYbk");
/* harmony import */ var src_app_pages_voila2sample_ms_demo_fe_ordine_ordine_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/pages/voila2sample-ms-demo-fe/ordine/ordine-api.service */ "AiQM");
/* harmony import */ var src_app_pages_voila2sample_ms_demo_fe_ordine_ordine_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/pages/voila2sample-ms-demo-fe/ordine/ordine-form */ "Thuv");
/* harmony import */ var src_app_pages_voila2sample_ms_demo_fe_dialog_dialog_list_cliente_dialog_list_cliente_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/pages/voila2sample-ms-demo-fe/dialog/dialog-list-cliente/dialog-list-cliente.component */ "D1H/");
/* harmony import */ var src_app_pages_voila2sample_ms_demo_fe_dialog_dialog_list_tipo_ordine_dialog_list_tipo_ordine_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/pages/voila2sample-ms-demo-fe/dialog/dialog-list-tipo-ordine/dialog-list-tipo-ordine.component */ "ZC3r");
/* harmony import */ var src_app_shared_base_base_tab_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/base/base-tab.component */ "yNyt");
/* harmony import */ var src_app_shared_base_base_helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/base/base.helper */ "tHpT");
/* harmony import */ var voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! voila2-runtime-ng */ "WGmK");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _utilities_pipe_utility_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../utilities/pipe/utility-pipe */ "SWKW");
/* harmony import */ var translate_ng__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! translate-ng */ "JfpY");

















function TabOrdineFigliComponent_bz_card_0_td_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r8.ordineKey.idOrdine, "");
} }
function TabOrdineFigliComponent_bz_card_0_td_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r9.ordineKey.anno, "");
} }
function TabOrdineFigliComponent_bz_card_0_td_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r10.dataOrdine, "");
} }
function TabOrdineFigliComponent_bz_card_0_td_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r11.urgente, "");
} }
function TabOrdineFigliComponent_bz_card_0_td_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r12.theClienteObjectKey, "");
} }
function TabOrdineFigliComponent_bz_card_0_td_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r13.theTipoOrdineObjectKey, "");
} }
function TabOrdineFigliComponent_bz_card_0_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "bz-card", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "bz-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "bz-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "bz-table", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageObject", function TabOrdineFigliComponent_bz_card_0_Template_bz_table_pageObject_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.paginateTable($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " IdOrdine ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TabOrdineFigliComponent_bz_card_0_td_8_Template, 2, 1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Anno ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, TabOrdineFigliComponent_bz_card_0_td_11_Template, 2, 1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " DataOrdine ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, TabOrdineFigliComponent_bz_card_0_td_14_Template, 2, 1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Urgente ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, TabOrdineFigliComponent_bz_card_0_td_17_Template, 2, 1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Cliente ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, TabOrdineFigliComponent_bz_card_0_td_20_Template, 2, 1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Tipo Ordine ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, TabOrdineFigliComponent_bz_card_0_td_23_Template, 2, 1, "td", 5);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 7, "header.list"), " Ordine Figli ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("sources", ctx_r0.ordineFigliList)("pageSize", ctx_r0.pageSize)("nVisiblePages", 3)("totalPages", ctx_r0.totalPages);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](26, 9, "label.noElement"), " Ordine Figli ");
} }
function TabOrdineFigliComponent_bz_card_2_td_8_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "bz-input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TabOrdineFigliComponent_bz_card_2_td_8_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const element_r23 = ctx.$implicit; const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r24.showClienteListDialog(element_r23.rowIndex); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "bz-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", element_r23.value);
} }
function TabOrdineFigliComponent_bz_card_2_td_11_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "bz-input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TabOrdineFigliComponent_bz_card_2_td_11_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const element_r26 = ctx.$implicit; const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r27.showTipoOrdineListDialog(element_r26.rowIndex); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "bz-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", element_r26.value);
} }
function TabOrdineFigliComponent_bz_card_2_td_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "bz-input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", element_r29 == null ? null : element_r29.value);
} }
function TabOrdineFigliComponent_bz_card_2_td_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "bz-input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", element_r30 == null ? null : element_r30.value);
} }
function TabOrdineFigliComponent_bz_card_2_td_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "bz-input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", element_r31 == null ? null : element_r31.value);
} }
function TabOrdineFigliComponent_bz_card_2_td_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "bz-input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", element_r32 == null ? null : element_r32.value);
} }
function TabOrdineFigliComponent_bz_card_2_td_25_Template(rf, ctx) { if (rf & 1) {
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
    const element_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("bzRemoveRow", element_r33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, "buttons.delete"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("bzRestoreRow", element_r33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 6, "buttons.restore"), " ");
} }
const _c0 = function () { return ["theClienteObjectKey"]; };
const _c1 = function () { return ["theTipoOrdineObjectKey"]; };
const _c2 = function () { return ["theOrdineObjectKey"]; };
function TabOrdineFigliComponent_bz_card_2_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "bz-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "bz-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "bz-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "bz-table", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("smartArray", function TabOrdineFigliComponent_bz_card_2_Template_bz_table_smartArray_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r34.getSmartArray($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Cliente ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TabOrdineFigliComponent_bz_card_2_td_8_Template, 5, 1, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " TipoOrdine ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, TabOrdineFigliComponent_bz_card_2_td_11_Template, 5, 1, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " IdOrdine ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, TabOrdineFigliComponent_bz_card_2_td_14_Template, 2, 1, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Anno ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, TabOrdineFigliComponent_bz_card_2_td_17_Template, 2, 1, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " DataOrdine ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, TabOrdineFigliComponent_bz_card_2_td_20_Template, 2, 1, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Urgente ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, TabOrdineFigliComponent_bz_card_2_td_23_Template, 2, 1, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, TabOrdineFigliComponent_bz_card_2_td_25_Template, 7, 8, "td", 5);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 9, "header.list"), " Ordine Figli ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("bzSmartTable", ctx_r1.ordineFigliList)("bzFormGroup", ctx_r1.smartFormGroup)("bzDisabledControls", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c0))("bzDisabledControls", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](16, _c1))("bzDisabledControls", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c2))("bzForm", ctx_r1.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](28, 11, "label.noElement"), " Ordine Figli ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](31, 13, "buttons.new"), " Ordine Figli ");
} }
const _c3 = function () { return ["new", "edit"]; };
class TabOrdineFigliComponent extends src_app_shared_base_base_tab_component__WEBPACK_IMPORTED_MODULE_7__["BaseTabComponent"] {
    constructor(formBuilder, ordineApiService, dialogService) {
        super();
        this.formBuilder = formBuilder;
        this.ordineApiService = ordineApiService;
        this.dialogService = dialogService;
        this.ordineFigliList = [];
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
                this.ordineFigliList = Object(voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_9__["extractResponse"])('ordine', data);
                this.totalPages = Object(voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_9__["extractTotalPages"])(data);
                this.spinner = false;
            }, () => {
                this.spinner = false;
            });
        }
    }
    getSmartArray(smartArray) {
        if (this.smartFormGroup.valid || this.smartFormGroup.status === "DISABLED") {
            Object(voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_9__["setControl"])(this.formGroup, 'theOrdineFigli', smartArray);
        }
    }
    showClienteListDialog(index) {
        this.dialogService.showDialog(src_app_pages_voila2sample_ms_demo_fe_dialog_dialog_list_cliente_dialog_list_cliente_component__WEBPACK_IMPORTED_MODULE_5__["DialogListClienteComponent"]).subscribe((data) => {
            if (data) {
                this.setSmartControlByIndex(this.smartFormGroup, index, data, 'objectKey', 'theClienteObjectKey');
            }
        });
    }
    showTipoOrdineListDialog(index) {
        this.dialogService.showDialog(src_app_pages_voila2sample_ms_demo_fe_dialog_dialog_list_tipo_ordine_dialog_list_tipo_ordine_component__WEBPACK_IMPORTED_MODULE_6__["DialogListTipoOrdineComponent"]).subscribe((data) => {
            if (data) {
                this.setSmartControlByIndex(this.smartFormGroup, index, data, 'objectKey', 'theTipoOrdineObjectKey');
            }
        });
    }
    managePageStatusChanges(changes) {
        const pageStatusChanges = changes.pageStatus;
        if (pageStatusChanges === null || pageStatusChanges === void 0 ? void 0 : pageStatusChanges.currentValue) {
            this.ordineFigliList = [];
            const object = this.managePageStatus(pageStatusChanges, this.smartFormGroup);
            this.paginateTable(object);
        }
    }
    manageEntityChanges(changes) {
        var _a, _b, _c;
        const entityChanges = changes.entity;
        if (entityChanges) {
            this.entity = entityChanges.currentValue;
            Object(voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_9__["setControl"])(this.form, 'theOrdineObjectKey', (_a = this.entity) === null || _a === void 0 ? void 0 : _a.objectKey);
            this.theEntitylink = (_c = (_b = this.entity) === null || _b === void 0 ? void 0 : _b._links.theOrdineFigli) === null || _c === void 0 ? void 0 : _c.href;
        }
    }
}
TabOrdineFigliComponent.ɵfac = function TabOrdineFigliComponent_Factory(t) { return new (t || TabOrdineFigliComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_pages_voila2sample_ms_demo_fe_ordine_ordine_api_service__WEBPACK_IMPORTED_MODULE_3__["OrdineApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](blazing__WEBPACK_IMPORTED_MODULE_2__["BzDialogService"])); };
TabOrdineFigliComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TabOrdineFigliComponent, selectors: [["app-tab-ordine-figli"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([src_app_pages_voila2sample_ms_demo_fe_ordine_ordine_api_service__WEBPACK_IMPORTED_MODULE_3__["OrdineApiService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 4, vars: 10, consts: [[3, "bzSpinner", 4, "ngIf"], [4, "ngIf"], [3, "bzSpinner"], ["paginatedBe", "", 3, "sources", "pageSize", "nVisiblePages", "totalPages", "pageObject"], ["bzHeaderColumn", "", "bzSortColumn", "idOrdine", "scope", "col"], [4, "bzColumnDef"], ["bzHeaderColumn", "", "bzSortColumn", "anno", "scope", "col"], ["bzHeaderColumn", "", "bzSortColumn", "dataOrdine", "scope", "col"], ["bzHeaderColumn", "", "bzSortColumn", "urgente", "scope", "col"], ["bzHeaderColumn", "", "bzSortColumn", "theClienteObjectKey", "scope", "col"], ["bzHeaderColumn", "", "bzSortColumn", "theTipoOrdineObjectKey", "scope", "col"], ["bzTableNoValue", ""], ["withIndex", "", "paginated", "", 3, "bzSmartTable", "bzFormGroup", "bzDisabledControls", "bzForm", "smartArray"], ["bzHeaderColumn", "", "scope", "col", 1, "prodotto-column-width"], [3, "formGroup", 4, "bzColumnDef"], ["bzHeaderColumn", "", "scope", "col"], ["bzButton", "", "bzAddRow", ""], [3, "formGroup"], ["formGroupName", "ordineKey"], ["formControlName", "theClienteObjectKey"], ["bzInputButton", "", "status", "primary", 3, "click"], ["iconName", "fa fa-window-maximize"], ["formControlName", "theTipoOrdineObjectKey"], ["formControlName", "idOrdine"], ["formControlName", "anno"], ["formControlName", "dataOrdine"], ["formControlName", "urgente"], ["bzButton", "", "status", "danger", 3, "bzRemoveRow"], ["bzButton", "", "status", "primary", 3, "bzRestoreRow"]], template: function TabOrdineFigliComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TabOrdineFigliComponent_bz_card_0_Template, 27, 11, "bz-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "hasPageStatus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TabOrdineFigliComponent_bz_card_2_Template, 32, 18, "bz-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "hasPageStatus");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](1, 2, ctx.pageStatus, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c3)) || ctx.readonly);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 5, ctx.pageStatus, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c3)) && !ctx.readonly);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], blazing__WEBPACK_IMPORTED_MODULE_2__["BzCardComponent"], blazing__WEBPACK_IMPORTED_MODULE_2__["BzCardHeaderComponent"], blazing__WEBPACK_IMPORTED_MODULE_2__["BzCardContentComponent"], blazing__WEBPACK_IMPORTED_MODULE_2__["BzTableComponent"], blazing__WEBPACK_IMPORTED_MODULE_2__["BzTableHeaderDirective"], blazing__WEBPACK_IMPORTED_MODULE_2__["BzTableColumnSortDirective"], blazing__WEBPACK_IMPORTED_MODULE_2__["BzTableColumnDefDirective"], blazing__WEBPACK_IMPORTED_MODULE_2__["BzTableNoValueDirective"], blazing__WEBPACK_IMPORTED_MODULE_2__["ɵbu"], blazing__WEBPACK_IMPORTED_MODULE_2__["BzButtonDirective"], blazing__WEBPACK_IMPORTED_MODULE_2__["BzAddRowDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupName"], blazing__WEBPACK_IMPORTED_MODULE_2__["BzInputComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], blazing__WEBPACK_IMPORTED_MODULE_2__["BzInputButtonDirective"], blazing__WEBPACK_IMPORTED_MODULE_2__["BzIconComponent"], blazing__WEBPACK_IMPORTED_MODULE_2__["ɵbv"], blazing__WEBPACK_IMPORTED_MODULE_2__["ɵbw"]], pipes: [_utilities_pipe_utility_pipe__WEBPACK_IMPORTED_MODULE_11__["PageStatusPipe"], translate_ng__WEBPACK_IMPORTED_MODULE_12__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWItb3JkaW5lLWZpZ2xpLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "lZGy":
/*!***********************************************************************!*\
  !*** ./src/app/pages/voila2sample-ms-demo-fe/ordine/ordine.module.ts ***!
  \***********************************************************************/
/*! exports provided: OrdineModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdineModule", function() { return OrdineModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _list_ordine_list_ordine_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list-ordine/list-ordine.component */ "XD9y");
/* harmony import */ var blazing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! blazing */ "pYbk");
/* harmony import */ var _ordine_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ordine-routing.module */ "OMqE");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _list_ordine_search_ordine_search_ordine_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list-ordine/search-ordine/search-ordine.component */ "xtXZ");
/* harmony import */ var _detail_ordine_detail_ordine_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detail-ordine/detail-ordine.component */ "EpK6");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _utilities_pipe_utility_pipe_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../utilities/pipe/utility-pipe.module */ "GFGE");
/* harmony import */ var translate_ng__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! translate-ng */ "JfpY");
/* harmony import */ var _detail_ordine_tabs_ordine_tabs_ordine_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./detail-ordine/tabs-ordine/tabs-ordine.component */ "s/85");
/* harmony import */ var _dialog_dialog_list_ordine_dialog_list_ordine_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../dialog/dialog-list-ordine/dialog-list-ordine.component */ "xEzP");
/* harmony import */ var _detail_ordine_tabs_ordine_riga_ordine_tab_riga_ordine_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./detail-ordine/tabs-ordine/riga-ordine/tab-riga-ordine.component */ "6x6Y");
/* harmony import */ var _detail_ordine_tabs_ordine_ordine_figli_tab_ordine_figli_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./detail-ordine/tabs-ordine/ordine-figli/tab-ordine-figli.component */ "hDEX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ "fXoL");
















const COMPONENTS = [
    _list_ordine_list_ordine_component__WEBPACK_IMPORTED_MODULE_1__["ListOrdineComponent"],
    _list_ordine_search_ordine_search_ordine_component__WEBPACK_IMPORTED_MODULE_5__["SearchOrdineComponent"],
    _detail_ordine_detail_ordine_component__WEBPACK_IMPORTED_MODULE_6__["DetailOrdineComponent"],
    _detail_ordine_tabs_ordine_tabs_ordine_component__WEBPACK_IMPORTED_MODULE_10__["TabsOrdineComponent"],
    _dialog_dialog_list_ordine_dialog_list_ordine_component__WEBPACK_IMPORTED_MODULE_11__["DialogListOrdineComponent"],
    _detail_ordine_tabs_ordine_riga_ordine_tab_riga_ordine_component__WEBPACK_IMPORTED_MODULE_12__["TabRigaOrdineComponent"],
    _detail_ordine_tabs_ordine_ordine_figli_tab_ordine_figli_component__WEBPACK_IMPORTED_MODULE_13__["TabOrdineFigliComponent"],
];
class OrdineModule {
}
OrdineModule.ɵfac = function OrdineModule_Factory(t) { return new (t || OrdineModule)(); };
OrdineModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({ type: OrdineModule });
OrdineModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            blazing__WEBPACK_IMPORTED_MODULE_2__["BzCardModule"],
            blazing__WEBPACK_IMPORTED_MODULE_2__["BzTableModule"],
            _ordine_routing_module__WEBPACK_IMPORTED_MODULE_3__["OrdineRoutingModule"],
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
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetNgModuleScope"](OrdineModule, { declarations: [_list_ordine_list_ordine_component__WEBPACK_IMPORTED_MODULE_1__["ListOrdineComponent"],
        _list_ordine_search_ordine_search_ordine_component__WEBPACK_IMPORTED_MODULE_5__["SearchOrdineComponent"],
        _detail_ordine_detail_ordine_component__WEBPACK_IMPORTED_MODULE_6__["DetailOrdineComponent"],
        _detail_ordine_tabs_ordine_tabs_ordine_component__WEBPACK_IMPORTED_MODULE_10__["TabsOrdineComponent"],
        _dialog_dialog_list_ordine_dialog_list_ordine_component__WEBPACK_IMPORTED_MODULE_11__["DialogListOrdineComponent"],
        _detail_ordine_tabs_ordine_riga_ordine_tab_riga_ordine_component__WEBPACK_IMPORTED_MODULE_12__["TabRigaOrdineComponent"],
        _detail_ordine_tabs_ordine_ordine_figli_tab_ordine_figli_component__WEBPACK_IMPORTED_MODULE_13__["TabOrdineFigliComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        blazing__WEBPACK_IMPORTED_MODULE_2__["BzCardModule"],
        blazing__WEBPACK_IMPORTED_MODULE_2__["BzTableModule"],
        _ordine_routing_module__WEBPACK_IMPORTED_MODULE_3__["OrdineRoutingModule"],
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

/***/ "s/85":
/*!*********************************************************************************************************!*\
  !*** ./src/app/pages/voila2sample-ms-demo-fe/ordine/detail-ordine/tabs-ordine/tabs-ordine.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: TabsOrdineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsOrdineComponent", function() { return TabsOrdineComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! voila2-runtime-ng */ "WGmK");
/* harmony import */ var blazing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! blazing */ "pYbk");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _riga_ordine_tab_riga_ordine_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./riga-ordine/tab-riga-ordine.component */ "6x6Y");
/* harmony import */ var _ordine_figli_tab_ordine_figli_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ordine-figli/tab-ordine-figli.component */ "hDEX");
/* harmony import */ var _utilities_pipe_utility_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../utilities/pipe/utility-pipe */ "SWKW");










function TabsOrdineComponent_bz_tab_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "bz-tab", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-tab-riga-ordine", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.formGroup)("entity", ctx_r0.entity)("pageStatus", ctx_r0.pageStatus)("readonly", false);
} }
function TabsOrdineComponent_bz_tab_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "bz-tab", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-tab-ordine-figli", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r1.formGroup)("entity", ctx_r1.entity)("pageStatus", ctx_r1.pageStatus)("readonly", false);
} }
class TabsOrdineComponent {
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
TabsOrdineComponent.ɵfac = function TabsOrdineComponent_Factory(t) { return new (t || TabsOrdineComponent)(); };
TabsOrdineComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TabsOrdineComponent, selectors: [["app-tabs-ordine"]], inputs: { formGroup: "formGroup", entity: "entity", pageStatus: "pageStatus" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 5, vars: 8, consts: [["tabTitle", "RIGA ORDINE ", 4, "ngIf"], ["tabTitle", "ORDINE FIGLI ", 4, "ngIf"], ["tabTitle", "RIGA ORDINE "], [3, "formGroup", "entity", "pageStatus", "readonly"], ["tabTitle", "ORDINE FIGLI "]], template: function TabsOrdineComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "bz-tabset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TabsOrdineComponent_bz_tab_1_Template, 2, 4, "bz-tab", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "hasPermission");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TabsOrdineComponent_bz_tab_3_Template, 2, 4, "bz-tab", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "hasPermission");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 2, ctx.Privileges == null ? null : ctx.Privileges.ORDINE_FIND_BY_THE_RIGA_ORDINE_OBJECT_KEY, ctx.privileges));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 5, ctx.Privileges == null ? null : ctx.Privileges.ORDINE_FIND_BY_THE_ORDINE_FIGLI_OBJECT_KEY, ctx.privileges));
    } }, directives: [blazing__WEBPACK_IMPORTED_MODULE_3__["BzTabsetComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], blazing__WEBPACK_IMPORTED_MODULE_3__["BzTabComponent"], _riga_ordine_tab_riga_ordine_component__WEBPACK_IMPORTED_MODULE_5__["TabRigaOrdineComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _ordine_figli_tab_ordine_figli_component__WEBPACK_IMPORTED_MODULE_6__["TabOrdineFigliComponent"]], pipes: [_utilities_pipe_utility_pipe__WEBPACK_IMPORTED_MODULE_7__["PermissionPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWJzLW9yZGluZS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "xtXZ":
/*!***********************************************************************************************************!*\
  !*** ./src/app/pages/voila2sample-ms-demo-fe/ordine/list-ordine/search-ordine/search-ordine.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: SearchOrdineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchOrdineComponent", function() { return SearchOrdineComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var blazing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! blazing */ "pYbk");
/* harmony import */ var _ordine_group_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ordine-group-api.service */ "AJVm");
/* harmony import */ var voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! voila2-runtime-ng */ "WGmK");
/* harmony import */ var _cliente_cliente_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../cliente/cliente-api.service */ "eUbe");
/* harmony import */ var _tipo_ordine_tipo_ordine_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../tipo-ordine/tipo-ordine-api.service */ "4+27");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var translate_ng__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! translate-ng */ "JfpY");











const PROVIDERS = [
    _ordine_group_api_service__WEBPACK_IMPORTED_MODULE_2__["OrdineGroupApiService"],
    _cliente_cliente_api_service__WEBPACK_IMPORTED_MODULE_4__["ClienteApiService"],
    _tipo_ordine_tipo_ordine_api_service__WEBPACK_IMPORTED_MODULE_5__["TipoOrdineApiService"],
];
class SearchOrdineComponent {
    constructor(formBuilder, dateService, ordineGroupApiService) {
        this.formBuilder = formBuilder;
        this.dateService = dateService;
        this.ordineGroupApiService = ordineGroupApiService;
        this.clienteList = [];
        this.tipoOrdineList = [];
        this.ordineList = [];
    }
    ngOnInit() {
        this.inizialize();
        this.getParentsList();
    }
    search() {
        let ordineCriteria = Object.assign({});
        if (this.searchOrdineForm.value) {
            const idOrdineFrom = this.searchOrdineForm.value.idOrdineFrom;
            const idOrdineTo = this.searchOrdineForm.value.idOrdineTo;
            //idOrdine
            if (idOrdineFrom || idOrdineTo) {
                ordineCriteria.idOrdine = new voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_3__["IntegerFilter"];
                ordineCriteria.idOrdine.setGreaterOrEqualThan(idOrdineFrom);
                ordineCriteria.idOrdine.setLessOrEqualThan(idOrdineTo);
            }
            const annoFrom = this.searchOrdineForm.value.annoFrom;
            const annoTo = this.searchOrdineForm.value.annoTo;
            //anno
            if (annoFrom || annoTo) {
                ordineCriteria.anno = new voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_3__["IntegerFilter"];
                ordineCriteria.anno.setGreaterOrEqualThan(annoFrom);
                ordineCriteria.anno.setLessOrEqualThan(annoTo);
            }
            const dataOrdineFrom = this.searchOrdineForm.value.dataOrdineFrom;
            const dataOrdineTo = this.searchOrdineForm.value.dataOrdineTo;
            //dataOrdine
            if (dataOrdineFrom || dataOrdineTo) {
                ordineCriteria.dataOrdine = new voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_3__["LocalDateFilter"];
                ordineCriteria.dataOrdine.setGreaterOrEqualThan(dataOrdineFrom);
                ordineCriteria.dataOrdine.setLessOrEqualThan(dataOrdineTo);
            }
            const urgente = this.searchOrdineForm.value.urgente;
            //urgente
            if (urgente) {
                ordineCriteria.urgente = new voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_3__["BooleanFilter"]();
                ordineCriteria.urgente.setSpecified(urgente);
            }
            // theClienteObjectKey
            if (this.searchOrdineForm.value.theClienteObjectKey) {
                ordineCriteria.theClienteObjectKey = this.searchOrdineForm.value.theClienteObjectKey;
            }
            // theTipoOrdineObjectKey
            if (this.searchOrdineForm.value.theTipoOrdineObjectKey) {
                ordineCriteria.theTipoOrdineObjectKey = this.searchOrdineForm.value.theTipoOrdineObjectKey;
            }
            // theOrdinePadreObjectKey
            if (this.searchOrdineForm.value.theOrdinePadreObjectKey) {
                ordineCriteria.theOrdinePadreObjectKey = this.searchOrdineForm.value.theOrdinePadreObjectKey;
            }
        }
        return ordineCriteria;
    }
    inizialize() {
        this.searchOrdineForm = this.formBuilder.group({
            'idOrdineFrom': [null],
            'idOrdineTo': [null],
            'annoFrom': [null],
            'annoTo': [null],
            'dataOrdineFrom': [null],
            'dataOrdineTo': [null],
            'urgente': [null],
            'theClienteObjectKey': [null],
            'theTipoOrdineObjectKey': [null],
            'theOrdinePadreObjectKey': [null]
        });
    }
    getClienteList() {
        this.ordineGroupApiService.cliente.getClienteByCriteria().subscribe((data) => {
            this.clienteList = Object(voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_3__["getListForDropdown"])('cliente', data);
        });
    }
    getTipoOrdineList() {
        this.ordineGroupApiService.tipoOrdine.getTipoOrdineByCriteria().subscribe((data) => {
            this.tipoOrdineList = Object(voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_3__["getListForDropdown"])('tipoOrdine', data);
        });
    }
    getOrdineList() {
        this.ordineGroupApiService.ordine.getOrdineByCriteria().subscribe((data) => {
            this.ordineList = Object(voila2_runtime_ng__WEBPACK_IMPORTED_MODULE_3__["getListForDropdown"])('ordine', data);
        });
    }
    getParentsList() {
        this.getClienteList();
        this.getTipoOrdineList();
        this.getOrdineList();
    }
}
SearchOrdineComponent.ɵfac = function SearchOrdineComponent_Factory(t) { return new (t || SearchOrdineComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](blazing__WEBPACK_IMPORTED_MODULE_1__["DateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ordine_group_api_service__WEBPACK_IMPORTED_MODULE_2__["OrdineGroupApiService"])); };
SearchOrdineComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: SearchOrdineComponent, selectors: [["app-search-ordine"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵProvidersFeature"]([...PROVIDERS])], decls: 38, vars: 7, consts: [["isCollapsable", "", 1, "card"], [3, "formGroup"], [1, "fk-row", "inputs"], [1, "fk-col-8"], ["label", "Id Ordine da", "placeholder", "da", "formControlName", "idOrdineFrom", 3, "keyup.enter"], ["label", "Id Ordine a", "placeholder", "a", "formControlName", "idOrdineTo", 3, "keyup.enter"], ["label", "Anno da", "placeholder", "da", "formControlName", "annoFrom", 3, "keyup.enter"], ["label", "Anno a", "placeholder", "a", "formControlName", "annoTo", 3, "keyup.enter"], ["label", "Data Ordine da", "placeholder", "da", "controlName", "dataOrdineFrom", 3, "keyup.enter"], ["label", "Data Ordine a", "placeholder", "a", "controlName", "dataOrdineTo", 3, "keyup.enter"], ["formControlName", "urgente", 3, "keyup.enter"], ["label", "Cliente", "optionLabel", "objectTitle", "optionValue", "objectKey", "formControlName", "theClienteObjectKey", 3, "options"], ["label", "TipoOrdine", "optionLabel", "objectTitle", "optionValue", "objectKey", "formControlName", "theTipoOrdineObjectKey", 3, "options"], ["label", "Ordine", "optionLabel", "objectTitle", "optionValue", "objectKey", "formControlName", "theOrdinePadreObjectKey", 3, "options"]], template: function SearchOrdineComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("keyup.enter", function SearchOrdineComponent_Template_bz_input_keyup_enter_8_listener() { return ctx.search(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "bz-input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("keyup.enter", function SearchOrdineComponent_Template_bz_input_keyup_enter_10_listener() { return ctx.search(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "bz-input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("keyup.enter", function SearchOrdineComponent_Template_bz_input_keyup_enter_13_listener() { return ctx.search(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "bz-input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("keyup.enter", function SearchOrdineComponent_Template_bz_input_keyup_enter_15_listener() { return ctx.search(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "bz-date-picker", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("keyup.enter", function SearchOrdineComponent_Template_bz_date_picker_keyup_enter_18_listener() { return ctx.search(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "bz-date-picker", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("keyup.enter", function SearchOrdineComponent_Template_bz_date_picker_keyup_enter_20_listener() { return ctx.search(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "bz-switch", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("keyup.enter", function SearchOrdineComponent_Template_bz_switch_keyup_enter_23_listener() { return ctx.search(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24, "Urgente");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](25, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "bz-dropdown", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](29, "bz-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "bz-dropdown", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](33, "bz-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "bz-dropdown", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](37, "bz-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 5, "header.search"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.searchOrdineForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("options", ctx.clienteList);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("options", ctx.tipoOrdineList);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("options", ctx.ordineList);
    } }, directives: [blazing__WEBPACK_IMPORTED_MODULE_1__["BzCardComponent"], blazing__WEBPACK_IMPORTED_MODULE_1__["BzCardHeaderComponent"], blazing__WEBPACK_IMPORTED_MODULE_1__["BzCardContentComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], blazing__WEBPACK_IMPORTED_MODULE_1__["BzInputComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], blazing__WEBPACK_IMPORTED_MODULE_1__["BzDatePickerComponent"], blazing__WEBPACK_IMPORTED_MODULE_1__["BzSwitchComponent"], blazing__WEBPACK_IMPORTED_MODULE_1__["BzDropdownComponent"], blazing__WEBPACK_IMPORTED_MODULE_1__["BzErrorComponent"]], pipes: [translate_ng__WEBPACK_IMPORTED_MODULE_7__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWFyY2gtb3JkaW5lLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ })

}]);
//# sourceMappingURL=ordine-ordine-module.js.map