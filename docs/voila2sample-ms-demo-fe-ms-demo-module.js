(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["voila2sample-ms-demo-fe-ms-demo-module"],{

/***/ "M/y6":
/*!*****************************************************************!*\
  !*** ./src/app/pages/voila2sample-ms-demo-fe/ms-demo.module.ts ***!
  \*****************************************************************/
/*! exports provided: MsDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MsDemoModule", function() { return MsDemoModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ms_demo_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ms-demo-routing.module */ "UFdw");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



class MsDemoModule {
}
MsDemoModule.ɵfac = function MsDemoModule_Factory(t) { return new (t || MsDemoModule)(); };
MsDemoModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: MsDemoModule });
MsDemoModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _ms_demo_routing_module__WEBPACK_IMPORTED_MODULE_1__["MsDemoRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](MsDemoModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _ms_demo_routing_module__WEBPACK_IMPORTED_MODULE_1__["MsDemoRoutingModule"]] }); })();


/***/ }),

/***/ "UFdw":
/*!*************************************************************************!*\
  !*** ./src/app/pages/voila2sample-ms-demo-fe/ms-demo-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: MsDemoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MsDemoRoutingModule", function() { return MsDemoRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [
    {
        path: '',
        children: [
            {
                path: "cliente", loadChildren: () => Promise.all(/*! import() | cliente-cliente-module */[__webpack_require__.e("default~cliente-cliente-module~ordine-ordine-module~prodotto-prodotto-module~riga-ordine-riga-ordine~9422228b"), __webpack_require__.e("default~cliente-cliente-module~ordine-ordine-module~tipo-ordine-tipo-ordine-module"), __webpack_require__.e("common"), __webpack_require__.e("cliente-cliente-module")]).then(__webpack_require__.bind(null, /*! ./cliente/cliente.module */ "gGb2")).then((m) => m.ClienteModule),
            },
            {
                path: "prodotto", loadChildren: () => Promise.all(/*! import() | prodotto-prodotto-module */[__webpack_require__.e("default~cliente-cliente-module~ordine-ordine-module~prodotto-prodotto-module~riga-ordine-riga-ordine~9422228b"), __webpack_require__.e("default~ordine-ordine-module~prodotto-prodotto-module"), __webpack_require__.e("prodotto-prodotto-module")]).then(__webpack_require__.bind(null, /*! ./prodotto/prodotto.module */ "aD5j")).then((m) => m.ProdottoModule),
            },
            {
                path: "ordine", loadChildren: () => Promise.all(/*! import() | ordine-ordine-module */[__webpack_require__.e("default~cliente-cliente-module~ordine-ordine-module~prodotto-prodotto-module~riga-ordine-riga-ordine~9422228b"), __webpack_require__.e("default~cliente-cliente-module~ordine-ordine-module~tipo-ordine-tipo-ordine-module"), __webpack_require__.e("default~ordine-ordine-module~prodotto-prodotto-module"), __webpack_require__.e("ordine-ordine-module")]).then(__webpack_require__.bind(null, /*! ./ordine/ordine.module */ "lZGy")).then((m) => m.OrdineModule),
            },
            {
                path: "riga-ordine", loadChildren: () => Promise.all(/*! import() | riga-ordine-riga-ordine-module */[__webpack_require__.e("default~cliente-cliente-module~ordine-ordine-module~prodotto-prodotto-module~riga-ordine-riga-ordine~9422228b"), __webpack_require__.e("common"), __webpack_require__.e("riga-ordine-riga-ordine-module")]).then(__webpack_require__.bind(null, /*! ./riga-ordine/riga-ordine.module */ "yr8w")).then((m) => m.RigaOrdineModule),
            },
            {
                path: "tipo-ordine", loadChildren: () => Promise.all(/*! import() | tipo-ordine-tipo-ordine-module */[__webpack_require__.e("default~cliente-cliente-module~ordine-ordine-module~prodotto-prodotto-module~riga-ordine-riga-ordine~9422228b"), __webpack_require__.e("default~cliente-cliente-module~ordine-ordine-module~tipo-ordine-tipo-ordine-module"), __webpack_require__.e("common"), __webpack_require__.e("tipo-ordine-tipo-ordine-module")]).then(__webpack_require__.bind(null, /*! ./tipo-ordine/tipo-ordine.module */ "LMga")).then((m) => m.TipoOrdineModule),
            },
        ]
    }
];
class MsDemoRoutingModule {
}
MsDemoRoutingModule.ɵfac = function MsDemoRoutingModule_Factory(t) { return new (t || MsDemoRoutingModule)(); };
MsDemoRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: MsDemoRoutingModule });
MsDemoRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MsDemoRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=voila2sample-ms-demo-fe-ms-demo-module.js.map