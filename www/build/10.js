webpackJsonp([10],{

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiseaseDetailPageModule", function() { return DiseaseDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__disease_detail__ = __webpack_require__(551);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var DiseaseDetailPageModule = /** @class */ (function () {
    function DiseaseDetailPageModule() {
    }
    DiseaseDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__disease_detail__["a" /* DiseaseDetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__disease_detail__["a" /* DiseaseDetailPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__disease_detail__["a" /* DiseaseDetailPage */]
            ]
        })
    ], DiseaseDetailPageModule);
    return DiseaseDetailPageModule;
}());

//# sourceMappingURL=disease-detail.module.js.map

/***/ }),

/***/ 551:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiseaseDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers__ = __webpack_require__(118);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DiseaseDetailPage = /** @class */ (function () {
    function DiseaseDetailPage(navCtrl, navParams, diseases) {
        this.navCtrl = navCtrl;
        this.disease = navParams.get('disease') || diseases.defaultDisease;
    }
    DiseaseDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-disease-detail',template:/*ion-inline-start:"C:\Users\Paula\Documents\Senior Design\app repo\DiseaseAdvisor\src\pages\disease-detail\disease-detail.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>{{ disease.name }}</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <div class="disease-detail" padding>\n\n    <h2>{{disease.name}}</h2>\n\n    <p>{{disease.causes}}</p>\n\n    <p>{{disease.Preventions}}</p>\n\n    <p>{{disease.Vaccines}}</p>\n\n    <p>{{disease.symptoms}}</p>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Paula\Documents\Senior Design\app repo\DiseaseAdvisor\src\pages\disease-detail\disease-detail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers__["c" /* Diseases */]])
    ], DiseaseDetailPage);
    return DiseaseDetailPage;
}());

//# sourceMappingURL=disease-detail.js.map

/***/ })

});
//# sourceMappingURL=10.js.map