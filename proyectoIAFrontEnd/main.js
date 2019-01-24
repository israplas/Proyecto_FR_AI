(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contenido {\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    border: solid 2px #00a6ff;\n    margin: 70px;\n    background-color: #fff;\n    box-shadow: 1px 3px 20px 0px black;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"contenido\">\n  <menu></menu>\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'proyectoIAFrontEnd';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/menu/menu.component */ "./src/app/components/menu/menu.component.ts");
/* harmony import */ var _components_principal_principal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/principal/principal.component */ "./src/app/components/principal/principal.component.ts");
/* harmony import */ var _components_option_reconocer_option_reconocer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/option_reconocer/option_reconocer.component */ "./src/app/components/option_reconocer/option_reconocer.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_4__["MenuComponent"],
                _components_principal_principal_component__WEBPACK_IMPORTED_MODULE_5__["PrincipalComponent"],
                _components_option_reconocer_option_reconocer_component__WEBPACK_IMPORTED_MODULE_6__["OptionReconocerComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routes__WEBPACK_IMPORTED_MODULE_3__["RoutesModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: RoutesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutesModule", function() { return RoutesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_principal_principal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/principal/principal.component */ "./src/app/components/principal/principal.component.ts");
/* harmony import */ var _components_option_reconocer_option_reconocer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/option_reconocer/option_reconocer.component */ "./src/app/components/option_reconocer/option_reconocer.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', component: _components_principal_principal_component__WEBPACK_IMPORTED_MODULE_2__["PrincipalComponent"] },
    { path: 'reconocer', component: _components_option_reconocer_option_reconocer_component__WEBPACK_IMPORTED_MODULE_3__["OptionReconocerComponent"] }
];
var RoutesModule = /** @class */ (function () {
    function RoutesModule() {
    }
    RoutesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], RoutesModule);
    return RoutesModule;
}());



/***/ }),

/***/ "./src/app/components/menu/menu.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/menu/menu.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".menu {\n    border-bottom: solid 1px #e5e9f2;\n    padding: 0px 15px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    \n}\n\n.logo {\n    margin: 5px;\n}\n\n.titulo {\n    border-radius: 7px;\n    background-color: #8190a5;\n    color: #e1e4e9;\n    padding: 5px;\n    display: inline-block;\n}\n\n.option {\n    padding: 10px;\n    color: #5e6874;\n    cursor: pointer;\n}\n\n.active {\n    background-color: #e5e9f2;\n\n}"

/***/ }),

/***/ "./src/app/components/menu/menu.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/menu/menu.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"menu\">\n    <div class=\"titulo\">\n        Face Recognition\n    </div>\n    <div class=\"logo\">\n        <img src=\"/assets/img/logo.png\" alt=\"\" width=\"40px\">\n    </div>\n    <div class=\"options\">\n        <div class=\"option active\" routerLink=\"/\">\n            HOME\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/menu/menu.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/menu/menu.component.ts ***!
  \***************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
    }
    MenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/components/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.css */ "./src/app/components/menu/menu.component.css")]
        })
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/components/option_reconocer/option_reconocer.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/option_reconocer/option_reconocer.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contenido {\n    display: flex;\n    justify-content: space-around;\n    margin-top: 60px;\n}\n\n.option {\n    border: solid 3px #969faa;\n    border-radius: 30px;\n    padding: 15px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    cursor: pointer;\n}\n\n.option img {\n    height: 180px;\n    margin-bottom: 20px;\n}\n\n.option .descripcion {\n    color: #47525e;\n    font-family: 'Times New Roman', Times, serif;\n    font-size: 18px;\n}"

/***/ }),

/***/ "./src/app/components/option_reconocer/option_reconocer.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/option_reconocer/option_reconocer.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"contenido\">\n    <div class=\"option\" (click)=\"getReconocerImagen()\">\n        <img src=\"/assets/img/user-profile.png\" alt=\"\">\n        <div class=\"descripcion\">DESDE IMAGEN</div>\n    </div>\n    <div class=\"option\" (click)=\"getReconocerCamara()\">\n        <img src=\"/assets/img/integrated-webcam.png\" alt=\"\">\n        <div class=\"descripcion\">DESDE CAMARA</div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/option_reconocer/option_reconocer.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/option_reconocer/option_reconocer.component.ts ***!
  \***************************************************************************/
/*! exports provided: OptionReconocerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionReconocerComponent", function() { return OptionReconocerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_servicios_servicios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/servicios/servicios */ "./src/app/servicios/servicios.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OptionReconocerComponent = /** @class */ (function () {
    function OptionReconocerComponent(serverService) {
        this.serverService = serverService;
    }
    OptionReconocerComponent.prototype.getReconocerImagen = function () {
        this.serverService.getReconocerImagen();
    };
    OptionReconocerComponent.prototype.getReconocerCamara = function () {
        this.serverService.getReconocerCamara();
    };
    OptionReconocerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'option-reconocer',
            template: __webpack_require__(/*! ./option_reconocer.component.html */ "./src/app/components/option_reconocer/option_reconocer.component.html"),
            styles: [__webpack_require__(/*! ./option_reconocer.component.css */ "./src/app/components/option_reconocer/option_reconocer.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_servicios_servicios__WEBPACK_IMPORTED_MODULE_1__["ServerService"]])
    ], OptionReconocerComponent);
    return OptionReconocerComponent;
}());



/***/ }),

/***/ "./src/app/components/principal/principal.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/principal/principal.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contenido {\n    display: flex;\n    justify-content: space-around;\n    margin-top: 60px;\n}\n\n.option {\n    border: solid 3px #969faa;\n    border-radius: 30px;\n    padding: 15px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    cursor: pointer;\n}\n\n.option img {\n    height: 180px;\n    margin-bottom: 20px;\n}\n\n.option .descripcion {\n    color: #47525e;\n    font-family: 'Times New Roman', Times, serif;\n    font-size: 18px;\n}"

/***/ }),

/***/ "./src/app/components/principal/principal.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/principal/principal.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"contenido\">\n    <div class=\"option\" (click)=\"getImport()\">\n        <img src=\"/assets/img/import_img.png\" alt=\"\">\n        <div class=\"descripcion\">IMPORTAR IMÁGENES</div>\n    </div>\n    <div class=\"option\" (click)=\"getEntrenar()\">\n        <img src=\"/assets/img/train.png\" alt=\"\">\n        <div class=\"descripcion\">ENTRENAR</div>\n    </div>\n    <div class=\"option\" routerLink=\"/reconocer\">\n        <img src=\"/assets/img/recognize_facial.png\" alt=\"\">\n        <div class=\"descripcion\">RECONOCER</div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/principal/principal.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/principal/principal.component.ts ***!
  \*************************************************************/
/*! exports provided: PrincipalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrincipalComponent", function() { return PrincipalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_servicios_servicios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/servicios/servicios */ "./src/app/servicios/servicios.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PrincipalComponent = /** @class */ (function () {
    function PrincipalComponent(serverService) {
        this.serverService = serverService;
    }
    PrincipalComponent.prototype.getImport = function () {
        this.serverService.getImport();
    };
    PrincipalComponent.prototype.getEntrenar = function () {
        this.serverService.getEntrenar();
    };
    PrincipalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'principal',
            template: __webpack_require__(/*! ./principal.component.html */ "./src/app/components/principal/principal.component.html"),
            styles: [__webpack_require__(/*! ./principal.component.css */ "./src/app/components/principal/principal.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_servicios_servicios__WEBPACK_IMPORTED_MODULE_1__["ServerService"]])
    ], PrincipalComponent);
    return PrincipalComponent;
}());



/***/ }),

/***/ "./src/app/servicios/servicios.ts":
/*!****************************************!*\
  !*** ./src/app/servicios/servicios.ts ***!
  \****************************************/
/*! exports provided: ServerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerService", function() { return ServerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ServerService = /** @class */ (function () {
    function ServerService(http) {
        this.http = http;
    }
    ServerService.prototype.getImport = function () {
        return this.http.get('/import');
    };
    ServerService.prototype.getEntrenar = function () {
        return this.http.get('/entrenar');
    };
    ServerService.prototype.getReconocerImagen = function () {
        return this.http.get('/reconocerImagen');
    };
    ServerService.prototype.getReconocerCamara = function () {
        return this.http.get('/reconocerCamara');
    };
    ServerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ServerService);
    return ServerService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/stalyn/Documentos/proyectoIAFrontEnd/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map