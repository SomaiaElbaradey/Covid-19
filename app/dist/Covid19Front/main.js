(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+VzF":
/*!****************************************!*\
  !*** ./src/app/services/auth.guard.ts ***!
  \****************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.service */ "qfBg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(route, state) {
        if (!this.authService.isLogged()) {
            this.router.navigate(['/']);
        }
        return this.authService.isLogged();
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\ITI\Projects\Covid19Front\src\main.ts */"zUnb");


/***/ }),

/***/ "0Tvp":
/*!***********************************************************!*\
  !*** ./src/app/components/favcards/favcards.component.ts ***!
  \***********************************************************/
/*! exports provided: FavcardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavcardsComponent", function() { return FavcardsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_country_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/country.service */ "Xpb8");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-pagination */ "oOf3");





function FavcardsComponent_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FavcardsComponent_div_2_div_1_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const country_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.deleteFav(country_r1._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Population: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Confirmed: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Deaths: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Recovered: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const country_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("card-icon-div flag-icon flag-icon-", country_r1.country_iso2.toLowerCase(), " flag-icon-squared");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](country_r1.country);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", country_r1.population, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", country_r1.confirmed, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", country_r1.deaths, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", country_r1.recovered, " ");
} }
function FavcardsComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FavcardsComponent_div_2_div_1_Template, 26, 8, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const country_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", country_r1.population);
} }
const _c0 = function (a2, a3) { return { id: "listing_pagination", itemsPerPage: 12, currentPage: a2, totalItems: a3 }; };
class FavcardsComponent {
    constructor(_CountryService, route) {
        this._CountryService = _CountryService;
        this.route = route;
        this.re = '/assets/icons/re.png';
        this.death = '/assets/icons/death.png';
        this.page = 1;
    }
    ngDoCheck() {
    }
    ngOnInit() {
        this._CountryService.getFavCountries().subscribe(res => {
            this.countries = res;
            this.totalCountries = this.countries.length;
        }, err => console.log(err));
    }
    deleteFav(id) {
        this._CountryService.deleteFav(id).subscribe(res => this.ngOnInit(), err => console.log(err));
    }
}
FavcardsComponent.ɵfac = function FavcardsComponent_Factory(t) { return new (t || FavcardsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_country_service__WEBPACK_IMPORTED_MODULE_1__["CountryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
FavcardsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FavcardsComponent, selectors: [["app-favcards"]], inputs: { favcountries: "favcountries" }, decls: 5, vars: 7, consts: [[1, "container", "cards"], [1, "row", "d-flex", "justify-content-center"], ["class", " card col-md-3", "style", "width: 18rem;", 4, "ngFor", "ngForOf"], ["id", "listing_pagination", "maxSize", "6", "directionLinks", "true", 1, "text-center", "paginationNo", 3, "pageChange"], [1, "card", "col-md-3", 2, "width", "18rem"], ["class", "card-body", 4, "ngIf"], [1, "card-body"], [1, "close-div", "text-right", "align-self-end", 3, "click"], [1, "row", "d-flex", "flex-row"], [1, "col-3", "align-self-start"], [1, "col-8", "align-self-center"], [1, "card-title"], [1, "card-text", "text-left"], [1, "pop"], [1, "card-data"], [1, "conf"], [1, "death"], [1, "re"]], template: function FavcardsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FavcardsComponent_div_2_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "paginate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "pagination-controls", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function FavcardsComponent_Template_pagination_controls_pageChange_4_listener($event) { return ctx.page = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 1, ctx.countries, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](4, _c0, ctx.page, ctx.totalCountries)));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], ngx_pagination__WEBPACK_IMPORTED_MODULE_4__["PaginationControlsComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_4__["PaginatePipe"]], styles: [".close-div[_ngcontent-%COMP%]{\r\n    display: inline-block;\r\n    background-image: url('x.png');\r\n    background-size: cover;\r\n    margin-left: 90%;\r\n    width: 35px;\r\n    height: 28px;\r\n}\r\n.close-div[_ngcontent-%COMP%]:hover{\r\n    cursor: pointer;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZhdmNhcmRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7SUFDckIsOEJBQStDO0lBQy9DLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGVBQWU7QUFDbkIiLCJmaWxlIjoiZmF2Y2FyZHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jbG9zZS1kaXZ7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ3NyYy9hc3NldHMvaWNvbnMveC5wbmcnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBtYXJnaW4tbGVmdDogOTAlO1xyXG4gICAgd2lkdGg6IDM1cHg7XHJcbiAgICBoZWlnaHQ6IDI4cHg7XHJcbn1cclxuLmNsb3NlLWRpdjpob3ZlcntcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufSJdfQ== */", ".cards[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{\r\n    margin-top: 100px;\r\n    gap:5%;\r\n    margin-bottom: 39px;\r\n}\r\n\r\n.cards[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{\r\n    background-color: #00cdcd;\r\n    color: white;\r\n    text-align: center;\r\n}\r\n\r\n.card-icon-div[_ngcontent-%COMP%]{\r\n    border-radius: 50%;\r\n    width: 50px;\r\n    height: 50px;\r\n    color: #00cdcd;\r\n}\r\n\r\n.card[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%]{\r\n    font-weight: 600;\r\n    font-size: 23px;\r\n    padding: 5px;\r\n    margin: 0;\r\n}\r\n\r\n.card[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%]{\r\n    font-weight: 600;\r\n    font-size: 17px;\r\n}\r\n\r\n.cards[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover{\r\n    border-bottom: 5px #f2ce5f solid ;\r\n}\r\n\r\n.cards[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover   .card-icon-div[_ngcontent-%COMP%] {\r\n    color: #f2ce5f; \r\n}\r\n\r\n.paginationNo[_ngcontent-%COMP%]{\r\n    margin-bottom: 10px;\r\n    color: #303952;\r\n    font-weight: 800;\r\n}\r\n\r\n.paginationNo[_ngcontent-%COMP%]     .ngx-pagination .current {\r\n    background: #00cdcd;\r\n}\r\n\r\n.card-text[_ngcontent-%COMP%]   .card-data[_ngcontent-%COMP%]{\r\n    display: inline-block;\r\n    width: 90px;\r\n}\r\n\r\n.card[_ngcontent-%COMP%]{\r\n    margin-bottom: 1em;\r\n}\r\n\r\n.death[_ngcontent-%COMP%]{\r\n    color: #8f0815;\r\n}\r\n\r\n.re[_ngcontent-%COMP%]{\r\n    color: #0f065c;\r\n}\r\n\r\n.pop[_ngcontent-%COMP%]{\r\n    color: black;\r\n}\r\n\r\n.conf[_ngcontent-%COMP%]{\r\n    color: #0a5c23;\r\n}\r\n\r\n.heart-div[_ngcontent-%COMP%]{\r\n    display: inline-block;\r\n    background-image: url('wHeart.png');\r\n    background-size: cover;\r\n    margin-left: 90%;\r\n    width: 35px;\r\n    height: 35px;\r\n}\r\n\r\n.heart-div[_ngcontent-%COMP%]:hover{\r\n    background-image: url('rHeart.png');\r\n    cursor: pointer;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsTUFBTTtJQUNOLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osY0FBYztBQUNsQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsWUFBWTtJQUNaLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsbUNBQW9EO0lBQ3BELHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBQ0E7SUFDSSxtQ0FBb0Q7SUFDcEQsZUFBZTtBQUNuQiIsImZpbGUiOiJjYXJkcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmRzPmRpdntcclxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xyXG4gICAgZ2FwOjUlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzlweDtcclxufVxyXG5cclxuLmNhcmRzIC5jYXJke1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwY2RjZDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmNhcmQtaWNvbi1kaXZ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGNvbG9yOiAjMDBjZGNkO1xyXG59XHJcblxyXG4uY2FyZCAuY2FyZC10aXRsZXtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IDIzcHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5jYXJkIC5jYXJkLXRleHR7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG59XHJcblxyXG4uY2FyZHMgLmNhcmQ6aG92ZXJ7XHJcbiAgICBib3JkZXItYm90dG9tOiA1cHggI2YyY2U1ZiBzb2xpZCA7XHJcbn1cclxuXHJcbi5jYXJkcyAuY2FyZDpob3ZlciAuY2FyZC1pY29uLWRpdiB7XHJcbiAgICBjb2xvcjogI2YyY2U1ZjsgXHJcbn1cclxuXHJcbi5wYWdpbmF0aW9uTm97XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgY29sb3I6ICMzMDM5NTI7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG59XHJcblxyXG4ucGFnaW5hdGlvbk5vIC9kZWVwLyAubmd4LXBhZ2luYXRpb24gLmN1cnJlbnQge1xyXG4gICAgYmFja2dyb3VuZDogIzAwY2RjZDtcclxufVxyXG5cclxuLmNhcmQtdGV4dCAuY2FyZC1kYXRhe1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDkwcHg7XHJcbn1cclxuXHJcbi5jYXJke1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xyXG59XHJcblxyXG4uZGVhdGh7XHJcbiAgICBjb2xvcjogIzhmMDgxNTtcclxufVxyXG5cclxuLnJle1xyXG4gICAgY29sb3I6ICMwZjA2NWM7XHJcbn1cclxuXHJcbi5wb3B7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5jb25me1xyXG4gICAgY29sb3I6ICMwYTVjMjM7XHJcbn1cclxuXHJcbi5oZWFydC1kaXZ7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ3NyYy9hc3NldHMvaWNvbnMvd0hlYXJ0LnBuZycpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIG1hcmdpbi1sZWZ0OiA5MCU7XHJcbiAgICB3aWR0aDogMzVweDtcclxuICAgIGhlaWdodDogMzVweDtcclxufVxyXG4uaGVhcnQtZGl2OmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdzcmMvYXNzZXRzL2ljb25zL3JIZWFydC5wbmcnKTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufSJdfQ== */"] });


/***/ }),

/***/ "2MiI":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class HeaderComponent {
    constructor() {
        this.logo = '/assets/img/logo.png';
        this.image = '/assets/img/glob.png';
    }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 16, vars: 1, consts: [[1, "header"], [1, "container", "p-5", "intro"], [1, "row", "align-items-center"], [1, "col-md-6", "intro-desc"], ["href", "#end", 1, "btn", "read-btn", "d-flex", "align-items-center", "justify-content-center"], [1, "col-md-5", "p-3"], ["alt", "", 1, "img-fluid", "d-block", "mx-auto", 3, "src"], ["id", "triangle"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Coronavirus around the world");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "(COVID-19)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "In our Website you can see COVID-19 data worldwide \u2014 you can visualize the latest data on confirmed cases, deaths, and recovered.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Read More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, styles: ["body[_ngcontent-%COMP%]{\r\n    font-family: 'Lato', sans-serif;\r\n}\r\n\r\n.header[_ngcontent-%COMP%]{\r\n    padding-left: 2em;\r\n    padding-right: 3em;\r\n    background: linear-gradient(to bottom right, #00cdcd 65%,#fff 65.1%, #fff 100%);\r\n}\r\n\r\n.navbar[_ngcontent-%COMP%], .header[_ngcontent-%COMP%]{\r\n    background-color: #00cdcd!important;\r\n    color: white!important;\r\n    opacity: 1!important;\r\n}\r\n\r\n\r\n\r\n.nav-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    font-size: 18px;\r\n}\r\n\r\n.nav-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\n    cursor: pointer;\r\n}\r\n\r\n.intro-desc[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\r\n    font: 59px bolder;\r\n    font-weight: 700;\r\n}\r\n\r\n.intro-desc[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    width: 80%;\r\n    font-size: 19px;\r\n}\r\n\r\n.read-btn[_ngcontent-%COMP%]{\r\n    background-color:white;\r\n    color: #00cdcd;\r\n    align-self: center;\r\n    border-radius: 30px;\r\n    height: 45px;\r\n    width: 166px;\r\n    font-size: 21px;\r\n}\r\n\r\n.read-btn[_ngcontent-%COMP%]:hover{\r\n    background-color:#f2ce5f;\r\n    color: white;\r\n}\r\n\r\n\r\n\r\n.modal-header[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%]{\r\n    font-size: 25px;\r\n    color: #303952;\r\n    font-weight: 600;\r\n}\r\n\r\n.modal-body[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\r\n    margin-bottom: 23px;\r\n    width: 80%;\r\n    display: inline-block;\r\n}\r\n\r\n.person[_ngcontent-%COMP%]{\r\n    margin-right: 15px;\r\n}\r\n\r\n.lock[_ngcontent-%COMP%]{\r\n    margin-right: 20px;\r\n}\r\n\r\n.modal-footer[_ngcontent-%COMP%]   .save[_ngcontent-%COMP%]{\r\n    border: none;\r\n    color: white;\r\n    background-color: #00cdcd;\r\n}\r\n\r\n.modal-footer[_ngcontent-%COMP%]   .save[_ngcontent-%COMP%]:hover{\r\n    background-color: #f2ce5f;\r\n}\r\n\r\n.invalid[_ngcontent-%COMP%]{\r\n    color: rgb(151, 30, 30);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxXQUFXOztBQUVYO0lBQ0ksK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQiwrRUFBK0U7QUFDbkY7O0FBRUE7SUFDSSxtQ0FBbUM7SUFDbkMsc0JBQXNCO0lBQ3RCLG9CQUFvQjtBQUN4Qjs7QUFFQSxHQUFHOztBQUNIO0lBQ0ksZUFBZTtBQUNuQjs7QUFDQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFlBQVk7SUFDWixlQUFlO0FBQ25COztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLFlBQVk7QUFDaEI7O0FBRUEsaUJBQWlCOztBQUVqQjtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBQ0E7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBoZWFkZXIgKi9cclxuXHJcbmJvZHl7XHJcbiAgICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uaGVhZGVye1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyZW07XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAzZW07XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCAjMDBjZGNkIDY1JSwjZmZmIDY1LjElLCAjZmZmIDEwMCUpO1xyXG59XHJcblxyXG4ubmF2YmFyLCAuaGVhZGVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwY2RjZCFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogd2hpdGUhaW1wb3J0YW50O1xyXG4gICAgb3BhY2l0eTogMSFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8qKi9cclxuLm5hdi1pdGVtIGF7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuLm5hdi1pdGVtIGE6aG92ZXJ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5pbnRyby1kZXNjIGgze1xyXG4gICAgZm9udDogNTlweCBib2xkZXI7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4uaW50cm8tZGVzYyBwe1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGZvbnQtc2l6ZTogMTlweDtcclxufVxyXG5cclxuLnJlYWQtYnRue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxuICAgIGNvbG9yOiAjMDBjZGNkO1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgIGhlaWdodDogNDVweDtcclxuICAgIHdpZHRoOiAxNjZweDtcclxuICAgIGZvbnQtc2l6ZTogMjFweDtcclxufVxyXG5cclxuLnJlYWQtYnRuOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZjJjZTVmO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4vKiBtb2RhbCBkZXNpZ24gKi9cclxuXHJcbi5tb2RhbC1oZWFkZXIgLm1vZGFsLXRpdGxle1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgY29sb3I6ICMzMDM5NTI7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4ubW9kYWwtYm9keSBpbnB1dHtcclxuICAgIG1hcmdpbi1ib3R0b206IDIzcHg7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4ucGVyc29ue1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG59XHJcblxyXG4ubG9ja3tcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxufVxyXG4ubW9kYWwtZm9vdGVyIC5zYXZle1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwY2RjZDtcclxufVxyXG5cclxuLm1vZGFsLWZvb3RlciAuc2F2ZTpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmNlNWY7XHJcbn1cclxuXHJcbi5pbnZhbGlke1xyXG4gICAgY29sb3I6IHJnYigxNTEsIDMwLCAzMCk7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "6jUy":
/*!***********************************************************!*\
  !*** ./src/app/components/userhome/userhome.component.ts ***!
  \***********************************************************/
/*! exports provided: UserhomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserhomeComponent", function() { return UserhomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _favnavbar_favnavbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../favnavbar/favnavbar.component */ "tPeU");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../header/header.component */ "2MiI");
/* harmony import */ var _cards_cards_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cards/cards.component */ "O6Bj");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../footer/footer.component */ "LmEr");





class UserhomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
UserhomeComponent.ɵfac = function UserhomeComponent_Factory(t) { return new (t || UserhomeComponent)(); };
UserhomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserhomeComponent, selectors: [["app-userhome"]], decls: 4, vars: 0, template: function UserhomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-favnavbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-cards");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-footer");
    } }, directives: [_favnavbar_favnavbar_component__WEBPACK_IMPORTED_MODULE_1__["FavnavbarComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _cards_cards_component__WEBPACK_IMPORTED_MODULE_3__["CardsComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]], encapsulation: 2 });


/***/ }),

/***/ "7AdY":
/*!*****************************************************!*\
  !*** ./src/app/components/error/error.component.ts ***!
  \*****************************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");



class ErrorComponent {
    constructor(route) {
        this.route = route;
        this.logo = '/assets/img/logo.png';
        this.image = '/assets/img/glob.png';
    }
    ngOnInit() {
    }
    navigateToHome() {
        this.route.navigateByUrl('/home');
    }
}
ErrorComponent.ɵfac = function ErrorComponent_Factory(t) { return new (t || ErrorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
ErrorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ErrorComponent, selectors: [["app-error"]], decls: 20, vars: 2, consts: [[1, "header"], [1, "navbar", "navbar-expand", "navbar-dark", "fixed-top"], [1, "container", "mt-3"], [1, "navbar-brand"], ["width", "150", "alt", "", 1, "img-fluid", 3, "src"], [1, "container", "p-5", "intro"], [1, "row", "align-items-center"], [1, "col-md-6", "intro-desc"], [2, "color", "rgb(160, 26, 26)", "font-weight", "600", "font-size", "25px"], [1, "btn", "read-btn", "d-flex", "align-items-center", "justify-content-center", 3, "click"], [1, "col-md-5", "p-3"], ["alt", "", 1, "img-fluid", "d-block", "mx-auto", 3, "src"], ["id", "triangle"]], template: function ErrorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Coronavirus around the world");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "(COVID-19)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Route is not found.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ErrorComponent_Template_a_click_14_listener() { return ctx.navigateToHome(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.logo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbNavbar"]], styles: ["body[_ngcontent-%COMP%]{\r\n    font-family: 'Lato', sans-serif;\r\n}\r\n\r\n.header[_ngcontent-%COMP%]{\r\n    padding-left: 2em;\r\n    padding-right: 3em;\r\n    background: linear-gradient(to bottom right, #00cdcd 65%,#fff 65.1%, #fff 100%);\r\n}\r\n\r\n.navbar[_ngcontent-%COMP%], .header[_ngcontent-%COMP%]{\r\n    background-color: #00cdcd!important;\r\n    color: white!important;\r\n    opacity: 1!important;\r\n}\r\n\r\n\r\n\r\n.nav-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    font-size: 18px;\r\n}\r\n\r\n.nav-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\n    cursor: pointer;\r\n}\r\n\r\n.intro-desc[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\r\n    font: 59px bolder;\r\n    font-weight: 700;\r\n}\r\n\r\n.intro-desc[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    width: 80%;\r\n    font-size: 19px;\r\n}\r\n\r\n.read-btn[_ngcontent-%COMP%]{\r\n    background-color:white;\r\n    color: #00cdcd;\r\n    align-self: center;\r\n    border-radius: 30px;\r\n    height: 45px;\r\n    width: 166px;\r\n    font-size: 21px;\r\n}\r\n\r\n.read-btn[_ngcontent-%COMP%]:hover{\r\n    background-color:#f2ce5f;\r\n    color: white;\r\n}\r\n\r\n\r\n\r\n.modal-header[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%]{\r\n    font-size: 25px;\r\n    color: #303952;\r\n    font-weight: 600;\r\n}\r\n\r\n.modal-body[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\r\n    margin-bottom: 23px;\r\n    width: 80%;\r\n    display: inline-block;\r\n}\r\n\r\n.person[_ngcontent-%COMP%]{\r\n    margin-right: 15px;\r\n}\r\n\r\n.lock[_ngcontent-%COMP%]{\r\n    margin-right: 20px;\r\n}\r\n\r\n.modal-footer[_ngcontent-%COMP%]   .save[_ngcontent-%COMP%]{\r\n    border: none;\r\n    color: white;\r\n    background-color: #00cdcd;\r\n}\r\n\r\n.modal-footer[_ngcontent-%COMP%]   .save[_ngcontent-%COMP%]:hover{\r\n    background-color: #f2ce5f;\r\n}\r\n\r\n.invalid[_ngcontent-%COMP%]{\r\n    color: rgb(151, 30, 30);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxXQUFXOztBQUVYO0lBQ0ksK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQiwrRUFBK0U7QUFDbkY7O0FBRUE7SUFDSSxtQ0FBbUM7SUFDbkMsc0JBQXNCO0lBQ3RCLG9CQUFvQjtBQUN4Qjs7QUFFQSxHQUFHOztBQUNIO0lBQ0ksZUFBZTtBQUNuQjs7QUFDQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFlBQVk7SUFDWixlQUFlO0FBQ25COztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLFlBQVk7QUFDaEI7O0FBRUEsaUJBQWlCOztBQUVqQjtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBQ0E7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBoZWFkZXIgKi9cclxuXHJcbmJvZHl7XHJcbiAgICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uaGVhZGVye1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyZW07XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAzZW07XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCAjMDBjZGNkIDY1JSwjZmZmIDY1LjElLCAjZmZmIDEwMCUpO1xyXG59XHJcblxyXG4ubmF2YmFyLCAuaGVhZGVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwY2RjZCFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogd2hpdGUhaW1wb3J0YW50O1xyXG4gICAgb3BhY2l0eTogMSFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8qKi9cclxuLm5hdi1pdGVtIGF7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuLm5hdi1pdGVtIGE6aG92ZXJ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5pbnRyby1kZXNjIGgze1xyXG4gICAgZm9udDogNTlweCBib2xkZXI7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4uaW50cm8tZGVzYyBwe1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGZvbnQtc2l6ZTogMTlweDtcclxufVxyXG5cclxuLnJlYWQtYnRue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxuICAgIGNvbG9yOiAjMDBjZGNkO1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgIGhlaWdodDogNDVweDtcclxuICAgIHdpZHRoOiAxNjZweDtcclxuICAgIGZvbnQtc2l6ZTogMjFweDtcclxufVxyXG5cclxuLnJlYWQtYnRuOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZjJjZTVmO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4vKiBtb2RhbCBkZXNpZ24gKi9cclxuXHJcbi5tb2RhbC1oZWFkZXIgLm1vZGFsLXRpdGxle1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgY29sb3I6ICMzMDM5NTI7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4ubW9kYWwtYm9keSBpbnB1dHtcclxuICAgIG1hcmdpbi1ib3R0b206IDIzcHg7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4ucGVyc29ue1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG59XHJcblxyXG4ubG9ja3tcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxufVxyXG4ubW9kYWwtZm9vdGVyIC5zYXZle1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwY2RjZDtcclxufVxyXG5cclxuLm1vZGFsLWZvb3RlciAuc2F2ZTpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmNlNWY7XHJcbn1cclxuXHJcbi5pbnZhbGlke1xyXG4gICAgY29sb3I6IHJnYigxNTEsIDMwLCAzMCk7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "9vt0":
/*!**********************************************!*\
  !*** ./src/app/token-interceptor.service.ts ***!
  \**********************************************/
/*! exports provided: TokenInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptorService", function() { return TokenInterceptorService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class TokenInterceptorService {
    constructor() {
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().append('x-login-token', localStorage.getItem("Covid19Token"));
    }
    intercept(req, next) {
        let token = req.clone({
            setHeaders: {
                Authorization: `covidKey`,
                'x-login-token': localStorage.getItem("Covid19Token")
            }
        });
        return next.handle(token)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((_error) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(_error);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["finalize"])(() => {
            console.log(`method: ${req.method}, url: ${req.urlWithParams}`);
        }));
    }
}
TokenInterceptorService.ɵfac = function TokenInterceptorService_Factory(t) { return new (t || TokenInterceptorService)(); };
TokenInterceptorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: TokenInterceptorService, factory: TokenInterceptorService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "AytR":
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
const environment = {
    production: false,
    api: 'http://localhost:2939'
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

/***/ "BuFo":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../navbar/navbar.component */ "hrlM");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../header/header.component */ "2MiI");
/* harmony import */ var _cards_cards_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cards/cards.component */ "O6Bj");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../footer/footer.component */ "LmEr");





class HomeComponent {
    constructor() { }
    ngOnInit() { }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 4, vars: 0, template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-cards");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-footer");
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _cards_cards_component__WEBPACK_IMPORTED_MODULE_3__["CardsComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]], styles: ["body[_ngcontent-%COMP%]{\r\n    font-family: 'Lato', sans-serif;\r\n}\r\n\r\n.header[_ngcontent-%COMP%]{\r\n    padding-left: 2em;\r\n    padding-right: 3em;\r\n    background: linear-gradient(to bottom right, #00cdcd 65%,#fff 65.1%, #fff 100%);\r\n}\r\n\r\n.navbar[_ngcontent-%COMP%], .header[_ngcontent-%COMP%]{\r\n    background-color: #00cdcd!important;\r\n    color: white!important;\r\n    opacity: 1!important;\r\n}\r\n\r\n\r\n\r\n.nav-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    font-size: 18px;\r\n}\r\n\r\n.nav-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\n    cursor: pointer;\r\n}\r\n\r\n.intro-desc[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\r\n    font: 59px bolder;\r\n    font-weight: 700;\r\n}\r\n\r\n.intro-desc[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    width: 80%;\r\n    font-size: 19px;\r\n}\r\n\r\n.read-btn[_ngcontent-%COMP%]{\r\n    background-color:white;\r\n    color: #00cdcd;\r\n    align-self: center;\r\n    border-radius: 30px;\r\n    height: 45px;\r\n    width: 166px;\r\n    font-size: 21px;\r\n}\r\n\r\n.read-btn[_ngcontent-%COMP%]:hover{\r\n    background-color:#f2ce5f;\r\n    color: white;\r\n}\r\n\r\n\r\n\r\n.modal-header[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%]{\r\n    font-size: 25px;\r\n    color: #303952;\r\n    font-weight: 600;\r\n}\r\n\r\n.modal-body[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\r\n    margin-bottom: 23px;\r\n    width: 80%;\r\n    display: inline-block;\r\n}\r\n\r\n.person[_ngcontent-%COMP%]{\r\n    margin-right: 15px;\r\n}\r\n\r\n.lock[_ngcontent-%COMP%]{\r\n    margin-right: 20px;\r\n}\r\n\r\n.modal-footer[_ngcontent-%COMP%]   .save[_ngcontent-%COMP%]{\r\n    border: none;\r\n    color: white;\r\n    background-color: #00cdcd;\r\n}\r\n\r\n.modal-footer[_ngcontent-%COMP%]   .save[_ngcontent-%COMP%]:hover{\r\n    background-color: #f2ce5f;\r\n}\r\n\r\n.invalid[_ngcontent-%COMP%]{\r\n    color: rgb(151, 30, 30);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxXQUFXOztBQUVYO0lBQ0ksK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQiwrRUFBK0U7QUFDbkY7O0FBRUE7SUFDSSxtQ0FBbUM7SUFDbkMsc0JBQXNCO0lBQ3RCLG9CQUFvQjtBQUN4Qjs7QUFFQSxHQUFHOztBQUNIO0lBQ0ksZUFBZTtBQUNuQjs7QUFDQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFlBQVk7SUFDWixlQUFlO0FBQ25COztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLFlBQVk7QUFDaEI7O0FBRUEsaUJBQWlCOztBQUVqQjtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBQ0E7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBoZWFkZXIgKi9cclxuXHJcbmJvZHl7XHJcbiAgICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uaGVhZGVye1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyZW07XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAzZW07XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCAjMDBjZGNkIDY1JSwjZmZmIDY1LjElLCAjZmZmIDEwMCUpO1xyXG59XHJcblxyXG4ubmF2YmFyLCAuaGVhZGVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwY2RjZCFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogd2hpdGUhaW1wb3J0YW50O1xyXG4gICAgb3BhY2l0eTogMSFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8qKi9cclxuLm5hdi1pdGVtIGF7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuLm5hdi1pdGVtIGE6aG92ZXJ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5pbnRyby1kZXNjIGgze1xyXG4gICAgZm9udDogNTlweCBib2xkZXI7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4uaW50cm8tZGVzYyBwe1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGZvbnQtc2l6ZTogMTlweDtcclxufVxyXG5cclxuLnJlYWQtYnRue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxuICAgIGNvbG9yOiAjMDBjZGNkO1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgIGhlaWdodDogNDVweDtcclxuICAgIHdpZHRoOiAxNjZweDtcclxuICAgIGZvbnQtc2l6ZTogMjFweDtcclxufVxyXG5cclxuLnJlYWQtYnRuOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZjJjZTVmO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4vKiBtb2RhbCBkZXNpZ24gKi9cclxuXHJcbi5tb2RhbC1oZWFkZXIgLm1vZGFsLXRpdGxle1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgY29sb3I6ICMzMDM5NTI7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4ubW9kYWwtYm9keSBpbnB1dHtcclxuICAgIG1hcmdpbi1ib3R0b206IDIzcHg7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4ucGVyc29ue1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG59XHJcblxyXG4ubG9ja3tcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxufVxyXG4ubW9kYWwtZm9vdGVyIC5zYXZle1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwY2RjZDtcclxufVxyXG5cclxuLm1vZGFsLWZvb3RlciAuc2F2ZTpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmNlNWY7XHJcbn1cclxuXHJcbi5pbnZhbGlke1xyXG4gICAgY29sb3I6IHJnYigxNTEsIDMwLCAzMCk7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "LmEr":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class FooterComponent {
    constructor() {
        this.mobile = '/assets/img/mobile3.png';
        this.logo = '/assets/img/logo.png';
    }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 18, vars: 2, consts: [["id", "end", 1, "main-features"], [1, "container"], [1, "row", "align-items-center"], [1, "col-lg-6", "text-center"], [1, "features-circle"], ["width", "60%", 3, "src"], [1, "col-lg-6", "text-center", "features-header"], [1, "footer", "text-center", "text-lg-start"], [1, "text-center", "p-3", 2, "background-color", "rgba(0, 0, 0, 0.2)"], ["href", "mailto: somayaelbaradey@gmail.com"], ["width", "100", "alt", "", 1, "img-fluid", 3, "src"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "As covid-19 has spread around the world, people have become grimly concerned about the death tolls due to the COVID-19 everyday. We provide data about deaths, confirmed cases, recovered cases and population for each country. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "footer", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " \u00A9 2021 Copyright: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.mobile, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.logo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, styles: [".features-circle[_ngcontent-%COMP%]{\r\n    background-image: url('s.gif');\r\n    background-size: cover;\r\n}\r\n.main-features[_ngcontent-%COMP%]{\r\n    padding-top: 30px;\r\n    background-color: #fbfbfb;\r\n}\r\n.main-features[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    width: 90%;\r\n}\r\n.main-features[_ngcontent-%COMP%]   .features-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .main-features[_ngcontent-%COMP%]   .features-header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n    margin: auto;\r\n    font-size: 42px;\r\n    font-weight: 700;\r\n    padding-bottom: 20px;\r\n    color: #303952; \r\n}\r\n.main-features[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n    font-size: 19px;\r\n    color: #00cdcd!important; \r\n}\r\n.main-features[_ngcontent-%COMP%]   .features-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    margin: auto;\r\n    font-size: 19px;\r\n    font-weight: 500;\r\n}\r\n.footer[_ngcontent-%COMP%]{\r\n    background-color: #00cdcd;\r\n}\r\n@media (max-width: 992px) {\r\n    .main-features[_ngcontent-%COMP%]   .center-left[_ngcontent-%COMP%]{\r\n        padding-right: 0px;\r\n    }\r\n    \r\n    .main-features[_ngcontent-%COMP%]   .center-right[_ngcontent-%COMP%]{\r\n        padding-left: 0px;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksOEJBQTZDO0lBQzdDLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLHlCQUF5QjtBQUM3QjtBQUVBO0lBQ0ksVUFBVTtBQUNkO0FBQ0E7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsY0FBYztBQUNsQjtBQUVBO0lBQ0ksZUFBZTtJQUNmLHdCQUF3QjtBQUM1QjtBQUVBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUVBO0lBQ0k7UUFDSSxrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSxpQkFBaUI7SUFDckI7QUFDSiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mZWF0dXJlcy1jaXJjbGV7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ3NyYy9hc3NldHMvaW1nL3MuZ2lmJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcbi5tYWluLWZlYXR1cmVze1xyXG4gICAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmJmYmZiO1xyXG59XHJcblxyXG4ubWFpbi1mZWF0dXJlcyBwe1xyXG4gICAgd2lkdGg6IDkwJTtcclxufVxyXG4ubWFpbi1mZWF0dXJlcyAuZmVhdHVyZXMtaGVhZGVyIGgzLC5tYWluLWZlYXR1cmVzIC5mZWF0dXJlcy1oZWFkZXIgc3BhbntcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGZvbnQtc2l6ZTogNDJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICAgIGNvbG9yOiAjMzAzOTUyOyBcclxufVxyXG5cclxuLm1haW4tZmVhdHVyZXMgc3BhbntcclxuICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICAgIGNvbG9yOiAjMDBjZGNkIWltcG9ydGFudDsgXHJcbn1cclxuXHJcbi5tYWluLWZlYXR1cmVzIC5mZWF0dXJlcy1oZWFkZXIgcHtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi5mb290ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBjZGNkO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAgIC5tYWluLWZlYXR1cmVzIC5jZW50ZXItbGVmdHtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5tYWluLWZlYXR1cmVzIC5jZW50ZXItcmlnaHR7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgICB9XHJcbn0iXX0= */"] });


/***/ }),

/***/ "O6Bj":
/*!*****************************************************!*\
  !*** ./src/app/components/cards/cards.component.ts ***!
  \*****************************************************/
/*! exports provided: CardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardsComponent", function() { return CardsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_country_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/country.service */ "Xpb8");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-pagination */ "oOf3");




function CardsComponent_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardsComponent_div_2_div_1_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const country_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.addFav(country_r1._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Population: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Confirmed: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Deaths: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Recovered: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const country_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("card-icon-div flag-icon flag-icon-", country_r1.country_iso2.toLowerCase(), " flag-icon-squared");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](country_r1.country);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", country_r1.population, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", country_r1.confirmed, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", country_r1.deaths, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", country_r1.recovered, " ");
} }
function CardsComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CardsComponent_div_2_div_1_Template, 26, 8, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const country_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", country_r1.population);
} }
const _c0 = function (a2, a3) { return { id: "listing_pagination", itemsPerPage: 12, currentPage: a2, totalItems: a3 }; };
class CardsComponent {
    constructor(_CountryService) {
        this._CountryService = _CountryService;
        this.re = '/assets/icons/re.png';
        this.death = '/assets/icons/death.png';
        this.whiteheart = '/assets/icons/wHeart.png';
        this.redheart = '/assets/icons/rHeart.png';
        this.page = 1;
    }
    ngOnInit() {
        this._CountryService.allCountries().subscribe(res => {
            this.countries = res;
            this.totalCountries = this.countries.length;
        }, err => console.log(err));
    }
    addFav(id) {
        this._CountryService.addFav(id).subscribe(res => console.log(res), err => console.log(err));
    }
}
CardsComponent.ɵfac = function CardsComponent_Factory(t) { return new (t || CardsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_country_service__WEBPACK_IMPORTED_MODULE_1__["CountryService"])); };
CardsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardsComponent, selectors: [["app-cards"]], decls: 5, vars: 7, consts: [[1, "container", "cards"], [1, "row", "d-flex", "justify-content-center"], ["class", " card col-md-3", "style", "width: 18rem;", 4, "ngFor", "ngForOf"], ["id", "listing_pagination", "maxSize", "6", "directionLinks", "true", 1, "text-center", "paginationNo", 3, "pageChange"], [1, "card", "col-md-3", 2, "width", "18rem"], ["class", "card-body", 4, "ngIf"], [1, "card-body"], [1, "heart-div", "text-right", "align-self-end", 3, "click"], [1, "row", "d-flex", "flex-row"], [1, "col-3", "align-self-start"], [1, "col-8", "align-self-center"], [1, "card-title"], [1, "card-text", "text-left"], [1, "pop"], [1, "card-data"], [1, "conf"], [1, "death"], [1, "re"]], template: function CardsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CardsComponent_div_2_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "paginate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "pagination-controls", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function CardsComponent_Template_pagination_controls_pageChange_4_listener($event) { return ctx.page = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 1, ctx.countries, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](4, _c0, ctx.page, ctx.totalCountries)));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], ngx_pagination__WEBPACK_IMPORTED_MODULE_3__["PaginationControlsComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_3__["PaginatePipe"]], styles: [".cards[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{\r\n    margin-top: 100px;\r\n    gap:5%;\r\n    margin-bottom: 39px;\r\n}\r\n\r\n.cards[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{\r\n    background-color: #00cdcd;\r\n    color: white;\r\n    text-align: center;\r\n}\r\n\r\n.card-icon-div[_ngcontent-%COMP%]{\r\n    border-radius: 50%;\r\n    width: 50px;\r\n    height: 50px;\r\n    color: #00cdcd;\r\n}\r\n\r\n.card[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%]{\r\n    font-weight: 600;\r\n    font-size: 23px;\r\n    padding: 5px;\r\n    margin: 0;\r\n}\r\n\r\n.card[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%]{\r\n    font-weight: 600;\r\n    font-size: 17px;\r\n}\r\n\r\n.cards[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover{\r\n    border-bottom: 5px #f2ce5f solid ;\r\n}\r\n\r\n.cards[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover   .card-icon-div[_ngcontent-%COMP%] {\r\n    color: #f2ce5f; \r\n}\r\n\r\n.paginationNo[_ngcontent-%COMP%]{\r\n    margin-bottom: 10px;\r\n    color: #303952;\r\n    font-weight: 800;\r\n}\r\n\r\n.paginationNo[_ngcontent-%COMP%]     .ngx-pagination .current {\r\n    background: #00cdcd;\r\n}\r\n\r\n.card-text[_ngcontent-%COMP%]   .card-data[_ngcontent-%COMP%]{\r\n    display: inline-block;\r\n    width: 90px;\r\n}\r\n\r\n.card[_ngcontent-%COMP%]{\r\n    margin-bottom: 1em;\r\n}\r\n\r\n.death[_ngcontent-%COMP%]{\r\n    color: #8f0815;\r\n}\r\n\r\n.re[_ngcontent-%COMP%]{\r\n    color: #0f065c;\r\n}\r\n\r\n.pop[_ngcontent-%COMP%]{\r\n    color: black;\r\n}\r\n\r\n.conf[_ngcontent-%COMP%]{\r\n    color: #0a5c23;\r\n}\r\n\r\n.heart-div[_ngcontent-%COMP%]{\r\n    display: inline-block;\r\n    background-image: url('wHeart.png');\r\n    background-size: cover;\r\n    margin-left: 90%;\r\n    width: 35px;\r\n    height: 35px;\r\n}\r\n\r\n.heart-div[_ngcontent-%COMP%]:hover{\r\n    background-image: url('rHeart.png');\r\n    cursor: pointer;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsTUFBTTtJQUNOLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osY0FBYztBQUNsQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsWUFBWTtJQUNaLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsbUNBQW9EO0lBQ3BELHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBQ0E7SUFDSSxtQ0FBb0Q7SUFDcEQsZUFBZTtBQUNuQiIsImZpbGUiOiJjYXJkcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmRzPmRpdntcclxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xyXG4gICAgZ2FwOjUlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzlweDtcclxufVxyXG5cclxuLmNhcmRzIC5jYXJke1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwY2RjZDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmNhcmQtaWNvbi1kaXZ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGNvbG9yOiAjMDBjZGNkO1xyXG59XHJcblxyXG4uY2FyZCAuY2FyZC10aXRsZXtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IDIzcHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5jYXJkIC5jYXJkLXRleHR7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG59XHJcblxyXG4uY2FyZHMgLmNhcmQ6aG92ZXJ7XHJcbiAgICBib3JkZXItYm90dG9tOiA1cHggI2YyY2U1ZiBzb2xpZCA7XHJcbn1cclxuXHJcbi5jYXJkcyAuY2FyZDpob3ZlciAuY2FyZC1pY29uLWRpdiB7XHJcbiAgICBjb2xvcjogI2YyY2U1ZjsgXHJcbn1cclxuXHJcbi5wYWdpbmF0aW9uTm97XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgY29sb3I6ICMzMDM5NTI7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG59XHJcblxyXG4ucGFnaW5hdGlvbk5vIC9kZWVwLyAubmd4LXBhZ2luYXRpb24gLmN1cnJlbnQge1xyXG4gICAgYmFja2dyb3VuZDogIzAwY2RjZDtcclxufVxyXG5cclxuLmNhcmQtdGV4dCAuY2FyZC1kYXRhe1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDkwcHg7XHJcbn1cclxuXHJcbi5jYXJke1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xyXG59XHJcblxyXG4uZGVhdGh7XHJcbiAgICBjb2xvcjogIzhmMDgxNTtcclxufVxyXG5cclxuLnJle1xyXG4gICAgY29sb3I6ICMwZjA2NWM7XHJcbn1cclxuXHJcbi5wb3B7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5jb25me1xyXG4gICAgY29sb3I6ICMwYTVjMjM7XHJcbn1cclxuXHJcbi5oZWFydC1kaXZ7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ3NyYy9hc3NldHMvaWNvbnMvd0hlYXJ0LnBuZycpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIG1hcmdpbi1sZWZ0OiA5MCU7XHJcbiAgICB3aWR0aDogMzVweDtcclxuICAgIGhlaWdodDogMzVweDtcclxufVxyXG4uaGVhcnQtZGl2OmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdzcmMvYXNzZXRzL2ljb25zL3JIZWFydC5wbmcnKTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufSJdfQ== */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AppComponent {
    constructor() {
        this.title = 'Covid19Front';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "Xpb8":
/*!*********************************************!*\
  !*** ./src/app/services/country.service.ts ***!
  \*********************************************/
/*! exports provided: CountryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryService", function() { return CountryService; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




class CountryService {
    constructor(_HttpClient, router) {
        this._HttpClient = _HttpClient;
        this.router = router;
        this.baseURL = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].api}/api/country/`;
    }
    //get all countries
    allCountries() {
        return this._HttpClient
            .get(`${this.baseURL}countries`);
    }
    //remove from fav countries
    deleteFav(id) {
        return this._HttpClient
            .delete(`${this.baseURL}${id}`);
    }
    //add fav countries
    addFav(id) {
        return this._HttpClient
            .patch(`${this.baseURL}${id}`, { responseType: "text" });
    }
    //get all countries
    getFavCountries() {
        return this._HttpClient
            .get(`${this.baseURL}getFav`);
    }
}
CountryService.ɵfac = function CountryService_Factory(t) { return new (t || CountryService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
CountryService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CountryService, factory: CountryService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home/home.component */ "BuFo");
/* harmony import */ var _components_cards_cards_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/cards/cards.component */ "O6Bj");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/footer/footer.component */ "LmEr");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _token_interceptor_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./token-interceptor.service */ "9vt0");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-pagination */ "oOf3");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "hrlM");
/* harmony import */ var _components_userhome_userhome_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/userhome/userhome.component */ "6jUy");
/* harmony import */ var _components_favnavbar_favnavbar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/favnavbar/favnavbar.component */ "tPeU");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/header/header.component */ "2MiI");
/* harmony import */ var _components_favcards_favcards_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/favcards/favcards.component */ "0Tvp");
/* harmony import */ var _components_favhome_favhome_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/favhome/favhome.component */ "wkF7");
/* harmony import */ var _components_error_error_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/error/error.component */ "7AdY");
/* harmony import */ var _services_auth_guard__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/auth.guard */ "+VzF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/core */ "fXoL");





















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _services_auth_guard__WEBPACK_IMPORTED_MODULE_19__["AuthGuard"],
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
            useClass: _token_interceptor_service__WEBPACK_IMPORTED_MODULE_6__["TokenInterceptorService"],
            multi: true
        }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_10__["NgxPaginationModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"],
        _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"],
        _components_cards_cards_component__WEBPACK_IMPORTED_MODULE_3__["CardsComponent"],
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"],
        _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__["NavbarComponent"],
        _components_userhome_userhome_component__WEBPACK_IMPORTED_MODULE_13__["UserhomeComponent"],
        _components_favnavbar_favnavbar_component__WEBPACK_IMPORTED_MODULE_14__["FavnavbarComponent"],
        _components_header_header_component__WEBPACK_IMPORTED_MODULE_15__["HeaderComponent"],
        _components_favcards_favcards_component__WEBPACK_IMPORTED_MODULE_16__["FavcardsComponent"],
        _components_favhome_favhome_component__WEBPACK_IMPORTED_MODULE_17__["FavhomeComponent"],
        _components_error_error_component__WEBPACK_IMPORTED_MODULE_18__["ErrorComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
        ngx_pagination__WEBPACK_IMPORTED_MODULE_10__["NgxPaginationModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModule"]] }); })();


/***/ }),

/***/ "hrlM":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function NavbarComponent_ng_template_16_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " you have logged in successfully");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function NavbarComponent_ng_template_16_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r7.err);
} }
function NavbarComponent_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h4", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "form", 16, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, NavbarComponent_ng_template_16_span_12_Template, 3, 0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, NavbarComponent_ng_template_16_span_13_Template, 2, 1, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarComponent_ng_template_16_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](6); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r8.signin(_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarComponent_ng_template_16_Template_button_click_17_listener() { const modal_r4 = ctx.$implicit; return modal_r4.close(""); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r1.logo, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.logged);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.err);
} }
function NavbarComponent_ng_template_18_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " you have logged in successfully");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function NavbarComponent_ng_template_18_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r14.err);
} }
function NavbarComponent_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h4", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " SignUp");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "form", 16, 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, NavbarComponent_ng_template_18_span_12_Template, 3, 0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, NavbarComponent_ng_template_18_span_13_Template, 2, 1, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarComponent_ng_template_18_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](6); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r15.register(_r12); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarComponent_ng_template_18_Template_button_click_17_listener() { const modal_r11 = ctx.$implicit; return modal_r11.close(""); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r3.logo, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.logged);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.err);
} }
class NavbarComponent {
    constructor(modalService, _UserService) {
        this.modalService = modalService;
        this._UserService = _UserService;
        this.logo = '/assets/img/logo.png';
        this.logged = false;
        //login
        this.err = null;
    }
    ngOnInit() {
    }
    //open login form
    login(login) {
        this.err = null;
        this.logged = false;
        this.modalService.open(login, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }
    signin(user) {
        this.err = null;
        this._UserService.login(user.username.value, user.password.value).subscribe(res => {
            this.logged = true;
            console.log(res);
        }, err => {
            console.log(err);
            this.err = err.error;
        });
    }
    //open sign up modal
    signup(signup) {
        this.err = null;
        this.logged = false;
        this.modalService.open(signup, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }
    //register
    register(user) {
        this.err = null;
        this._UserService.register(user.username.value, user.password.value).subscribe(res => this.logged = true, err => {
            console.log(err);
            this.err = err.error;
        });
    }
    getDismissReason(reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return `with: ${reason}`;
        }
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"])); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 20, vars: 1, consts: [[1, "header"], [1, "navbar", "navbar-expand", "navbar-dark", "fixed-top"], [1, "container", "mt-3"], [1, "navbar-brand"], ["width", "150", "alt", "", 1, "img-fluid", 3, "src"], ["id", "navbarNavDropdown"], [1, "navbar-nav", "ml-auto"], [1, "nav-item"], ["aria-current", "page", "href", "#", 1, "nav-link", "active"], [1, "nav-link", 3, "click"], ["loginModal", ""], ["registerModal", ""], [1, "modal-header", "text-center"], [1, "modal-title", "align-self-center"], ["width", "70", 3, "src"], [1, "modal-body"], [1, "step-group"], ["Form", ""], ["src", "https://img.icons8.com/pastel-glyph/35/000000/person-male--v3.png", 1, "align-self-center", "person"], ["type", "text", "name", "username", "placeholder", "Username", 1, "form-control"], ["src", "https://img.icons8.com/metro/30/000000/lock-2.png", 1, "lock"], ["type", "password", "name", "password", "placeholder", "Password", 1, "form-control"], ["style", "color: rgb(4, 61, 42); margin-left: 10px;", 4, "ngIf"], ["class", "invalid", 4, "ngIf"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-outline-primary", "save", 3, "click"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], [2, "color", "rgb(4, 61, 42)", "margin-left", "10px"], ["src", "https://img.icons8.com/fluent/30/000000/checkmark.png"], [1, "invalid"], ["registerForm", ""]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](17); return ctx.login(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](19); return ctx.signup(_r2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Signup");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, NavbarComponent_ng_template_16_Template, 19, 3, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, NavbarComponent_ng_template_18_Template, 19, 3, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx.logo, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbNavbar"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: ["body[_ngcontent-%COMP%]{\r\n    font-family: 'Lato', sans-serif;\r\n}\r\n\r\n.header[_ngcontent-%COMP%]{\r\n    padding-left: 2em;\r\n    padding-right: 3em;\r\n    background: linear-gradient(to bottom right, #00cdcd 65%,#fff 65.1%, #fff 100%);\r\n}\r\n\r\n.navbar[_ngcontent-%COMP%], .header[_ngcontent-%COMP%]{\r\n    background-color: #00cdcd!important;\r\n    color: white!important;\r\n    opacity: 1!important;\r\n}\r\n\r\n\r\n\r\n.nav-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    font-size: 18px;\r\n}\r\n\r\n.nav-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\n    cursor: pointer;\r\n}\r\n\r\n.intro-desc[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\r\n    font: 59px bolder;\r\n    font-weight: 700;\r\n}\r\n\r\n.intro-desc[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    width: 80%;\r\n    font-size: 19px;\r\n}\r\n\r\n.read-btn[_ngcontent-%COMP%]{\r\n    background-color:white;\r\n    color: #00cdcd;\r\n    align-self: center;\r\n    border-radius: 30px;\r\n    height: 45px;\r\n    width: 166px;\r\n    font-size: 21px;\r\n}\r\n\r\n.read-btn[_ngcontent-%COMP%]:hover{\r\n    background-color:#f2ce5f;\r\n    color: white;\r\n}\r\n\r\n\r\n\r\n.modal-header[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%]{\r\n    font-size: 25px;\r\n    color: #303952;\r\n    font-weight: 600;\r\n}\r\n\r\n.modal-body[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\r\n    margin-bottom: 23px;\r\n    width: 80%;\r\n    display: inline-block;\r\n}\r\n\r\n.person[_ngcontent-%COMP%]{\r\n    margin-right: 15px;\r\n}\r\n\r\n.lock[_ngcontent-%COMP%]{\r\n    margin-right: 20px;\r\n}\r\n\r\n.modal-footer[_ngcontent-%COMP%]   .save[_ngcontent-%COMP%]{\r\n    border: none;\r\n    color: white;\r\n    background-color: #00cdcd;\r\n}\r\n\r\n.modal-footer[_ngcontent-%COMP%]   .save[_ngcontent-%COMP%]:hover{\r\n    background-color: #f2ce5f;\r\n}\r\n\r\n.invalid[_ngcontent-%COMP%]{\r\n    color: rgb(151, 30, 30);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxXQUFXOztBQUVYO0lBQ0ksK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQiwrRUFBK0U7QUFDbkY7O0FBRUE7SUFDSSxtQ0FBbUM7SUFDbkMsc0JBQXNCO0lBQ3RCLG9CQUFvQjtBQUN4Qjs7QUFFQSxHQUFHOztBQUNIO0lBQ0ksZUFBZTtBQUNuQjs7QUFDQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFlBQVk7SUFDWixlQUFlO0FBQ25COztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLFlBQVk7QUFDaEI7O0FBRUEsaUJBQWlCOztBQUVqQjtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBQ0E7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBoZWFkZXIgKi9cclxuXHJcbmJvZHl7XHJcbiAgICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uaGVhZGVye1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyZW07XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAzZW07XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCAjMDBjZGNkIDY1JSwjZmZmIDY1LjElLCAjZmZmIDEwMCUpO1xyXG59XHJcblxyXG4ubmF2YmFyLCAuaGVhZGVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwY2RjZCFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogd2hpdGUhaW1wb3J0YW50O1xyXG4gICAgb3BhY2l0eTogMSFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8qKi9cclxuLm5hdi1pdGVtIGF7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuLm5hdi1pdGVtIGE6aG92ZXJ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5pbnRyby1kZXNjIGgze1xyXG4gICAgZm9udDogNTlweCBib2xkZXI7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4uaW50cm8tZGVzYyBwe1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGZvbnQtc2l6ZTogMTlweDtcclxufVxyXG5cclxuLnJlYWQtYnRue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxuICAgIGNvbG9yOiAjMDBjZGNkO1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgIGhlaWdodDogNDVweDtcclxuICAgIHdpZHRoOiAxNjZweDtcclxuICAgIGZvbnQtc2l6ZTogMjFweDtcclxufVxyXG5cclxuLnJlYWQtYnRuOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZjJjZTVmO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4vKiBtb2RhbCBkZXNpZ24gKi9cclxuXHJcbi5tb2RhbC1oZWFkZXIgLm1vZGFsLXRpdGxle1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgY29sb3I6ICMzMDM5NTI7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4ubW9kYWwtYm9keSBpbnB1dHtcclxuICAgIG1hcmdpbi1ib3R0b206IDIzcHg7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4ucGVyc29ue1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG59XHJcblxyXG4ubG9ja3tcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxufVxyXG4ubW9kYWwtZm9vdGVyIC5zYXZle1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwY2RjZDtcclxufVxyXG5cclxuLm1vZGFsLWZvb3RlciAuc2F2ZTpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmNlNWY7XHJcbn1cclxuXHJcbi5pbnZhbGlke1xyXG4gICAgY29sb3I6IHJnYigxNTEsIDMwLCAzMCk7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "qfBg":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





class UserService {
    constructor(_HttpClient, router) {
        this._HttpClient = _HttpClient;
        this.router = router;
        this.baseURL = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].api}/api/user/`;
    }
    //login 
    login(username, password) {
        return this._HttpClient
            .post(`${this.baseURL}login`, { username, password }, { responseType: "text" }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
            if (response) {
                localStorage.setItem("Covid19Token", response);
                this.router.navigateByUrl('/home');
            }
        }));
    }
    //register request 
    register(username, password) {
        return this._HttpClient
            .post(`${this.baseURL}register`, { username, password }, { responseType: "text" }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
            if (response) {
                this.router.navigateByUrl('/home');
            }
        }));
    }
    isLogged() {
        return !!(localStorage.getItem("Covid19Token"));
    }
    logout() {
        localStorage.removeItem("Covid19Token");
        this.router.navigateByUrl('/');
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "tPeU":
/*!*************************************************************!*\
  !*** ./src/app/components/favnavbar/favnavbar.component.ts ***!
  \*************************************************************/
/*! exports provided: FavnavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavnavbarComponent", function() { return FavnavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_country_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/country.service */ "Xpb8");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");






class FavnavbarComponent {
    constructor(_CountryService, _UserService, route) {
        this._CountryService = _CountryService;
        this._UserService = _UserService;
        this.route = route;
        this.logo = '/assets/img/logo.png';
        this.user = '/assets/icons/user.png';
        this.logout = '/assets/icons/logout.png';
        this.fav = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    getFav() {
        this._CountryService.getFavCountries().subscribe(res => {
            console.log(res);
            this.fav.emit(res);
            this.route.navigateByUrl('/favourites');
        }, err => console.log(err));
    }
    goHome() {
        this.route.navigateByUrl('/home');
    }
    logOut() {
        this._UserService.logout();
    }
}
FavnavbarComponent.ɵfac = function FavnavbarComponent_Factory(t) { return new (t || FavnavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_country_service__WEBPACK_IMPORTED_MODULE_1__["CountryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
FavnavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FavnavbarComponent, selectors: [["app-favnavbar"]], outputs: { fav: "favcountries" }, decls: 17, vars: 2, consts: [[1, "header"], [1, "navbar", "navbar-expand", "navbar-dark", "fixed-top"], [1, "container", "mt-3"], [1, "navbar-brand"], ["width", "150", "alt", "", 1, "img-fluid", 3, "src"], ["id", "navbarNavDropdown"], [1, "navbar-nav", "ml-auto"], [1, "nav-item"], ["aria-current", "page", 1, "nav-link", "active", 3, "click"], [1, "nav-link", 3, "click"], [2, "padding-right", "3px", 3, "src"]], template: function FavnavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FavnavbarComponent_Template_a_click_8_listener() { return ctx.goHome(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FavnavbarComponent_Template_a_click_11_listener() { return ctx.getFav(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Favourites");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FavnavbarComponent_Template_a_click_14_listener() { return ctx.logOut(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.logo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.logout, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbNavbar"]], styles: ["body[_ngcontent-%COMP%]{\r\n    font-family: 'Lato', sans-serif;\r\n}\r\n\r\n.header[_ngcontent-%COMP%]{\r\n    padding-left: 2em;\r\n    padding-right: 3em;\r\n    background: linear-gradient(to bottom right, #00cdcd 65%,#fff 65.1%, #fff 100%);\r\n}\r\n\r\n.navbar[_ngcontent-%COMP%], .header[_ngcontent-%COMP%]{\r\n    background-color: #00cdcd!important;\r\n    color: white!important;\r\n    opacity: 1!important;\r\n}\r\n\r\n\r\n\r\n.nav-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    font-size: 18px;\r\n}\r\n\r\n.nav-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\n    cursor: pointer;\r\n}\r\n\r\n.intro-desc[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\r\n    font: 59px bolder;\r\n    font-weight: 700;\r\n}\r\n\r\n.intro-desc[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    width: 80%;\r\n    font-size: 19px;\r\n}\r\n\r\n.read-btn[_ngcontent-%COMP%]{\r\n    background-color:white;\r\n    color: #00cdcd;\r\n    align-self: center;\r\n    border-radius: 30px;\r\n    height: 45px;\r\n    width: 166px;\r\n    font-size: 21px;\r\n}\r\n\r\n.read-btn[_ngcontent-%COMP%]:hover{\r\n    background-color:#f2ce5f;\r\n    color: white;\r\n}\r\n\r\n\r\n\r\n.modal-header[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%]{\r\n    font-size: 25px;\r\n    color: #303952;\r\n    font-weight: 600;\r\n}\r\n\r\n.modal-body[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\r\n    margin-bottom: 23px;\r\n    width: 80%;\r\n    display: inline-block;\r\n}\r\n\r\n.person[_ngcontent-%COMP%]{\r\n    margin-right: 15px;\r\n}\r\n\r\n.lock[_ngcontent-%COMP%]{\r\n    margin-right: 20px;\r\n}\r\n\r\n.modal-footer[_ngcontent-%COMP%]   .save[_ngcontent-%COMP%]{\r\n    border: none;\r\n    color: white;\r\n    background-color: #00cdcd;\r\n}\r\n\r\n.modal-footer[_ngcontent-%COMP%]   .save[_ngcontent-%COMP%]:hover{\r\n    background-color: #f2ce5f;\r\n}\r\n\r\n.invalid[_ngcontent-%COMP%]{\r\n    color: rgb(151, 30, 30);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxXQUFXOztBQUVYO0lBQ0ksK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQiwrRUFBK0U7QUFDbkY7O0FBRUE7SUFDSSxtQ0FBbUM7SUFDbkMsc0JBQXNCO0lBQ3RCLG9CQUFvQjtBQUN4Qjs7QUFFQSxHQUFHOztBQUNIO0lBQ0ksZUFBZTtBQUNuQjs7QUFDQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFlBQVk7SUFDWixlQUFlO0FBQ25COztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLFlBQVk7QUFDaEI7O0FBRUEsaUJBQWlCOztBQUVqQjtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBQ0E7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBoZWFkZXIgKi9cclxuXHJcbmJvZHl7XHJcbiAgICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uaGVhZGVye1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyZW07XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAzZW07XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCAjMDBjZGNkIDY1JSwjZmZmIDY1LjElLCAjZmZmIDEwMCUpO1xyXG59XHJcblxyXG4ubmF2YmFyLCAuaGVhZGVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwY2RjZCFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogd2hpdGUhaW1wb3J0YW50O1xyXG4gICAgb3BhY2l0eTogMSFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8qKi9cclxuLm5hdi1pdGVtIGF7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuLm5hdi1pdGVtIGE6aG92ZXJ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5pbnRyby1kZXNjIGgze1xyXG4gICAgZm9udDogNTlweCBib2xkZXI7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4uaW50cm8tZGVzYyBwe1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGZvbnQtc2l6ZTogMTlweDtcclxufVxyXG5cclxuLnJlYWQtYnRue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxuICAgIGNvbG9yOiAjMDBjZGNkO1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgIGhlaWdodDogNDVweDtcclxuICAgIHdpZHRoOiAxNjZweDtcclxuICAgIGZvbnQtc2l6ZTogMjFweDtcclxufVxyXG5cclxuLnJlYWQtYnRuOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZjJjZTVmO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4vKiBtb2RhbCBkZXNpZ24gKi9cclxuXHJcbi5tb2RhbC1oZWFkZXIgLm1vZGFsLXRpdGxle1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgY29sb3I6ICMzMDM5NTI7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4ubW9kYWwtYm9keSBpbnB1dHtcclxuICAgIG1hcmdpbi1ib3R0b206IDIzcHg7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4ucGVyc29ue1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG59XHJcblxyXG4ubG9ja3tcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxufVxyXG4ubW9kYWwtZm9vdGVyIC5zYXZle1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwY2RjZDtcclxufVxyXG5cclxuLm1vZGFsLWZvb3RlciAuc2F2ZTpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmNlNWY7XHJcbn1cclxuXHJcbi5pbnZhbGlke1xyXG4gICAgY29sb3I6IHJnYigxNTEsIDMwLCAzMCk7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/home/home.component */ "BuFo");
/* harmony import */ var _components_userhome_userhome_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/userhome/userhome.component */ "6jUy");
/* harmony import */ var _components_favhome_favhome_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/favhome/favhome.component */ "wkF7");
/* harmony import */ var _components_error_error_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/error/error.component */ "7AdY");
/* harmony import */ var _services_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/auth.guard */ "+VzF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");








const routes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
    { path: 'home', component: _components_userhome_userhome_component__WEBPACK_IMPORTED_MODULE_2__["UserhomeComponent"], canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
    { path: 'favourites', component: _components_favhome_favhome_component__WEBPACK_IMPORTED_MODULE_3__["FavhomeComponent"], canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
    { path: '**', component: _components_error_error_component__WEBPACK_IMPORTED_MODULE_4__["ErrorComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)
        ], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "wkF7":
/*!*********************************************************!*\
  !*** ./src/app/components/favhome/favhome.component.ts ***!
  \*********************************************************/
/*! exports provided: FavhomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavhomeComponent", function() { return FavhomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _favnavbar_favnavbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../favnavbar/favnavbar.component */ "tPeU");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../header/header.component */ "2MiI");
/* harmony import */ var _favcards_favcards_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../favcards/favcards.component */ "0Tvp");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../footer/footer.component */ "LmEr");





class FavhomeComponent {
    constructor() {
        this.favcountries = '';
    }
    ngOnInit() {
    }
    fav(e) {
        this.favcountries = e;
    }
}
FavhomeComponent.ɵfac = function FavhomeComponent_Factory(t) { return new (t || FavhomeComponent)(); };
FavhomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FavhomeComponent, selectors: [["app-favhome"]], decls: 4, vars: 1, consts: [[3, "favcountries"]], template: function FavhomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-favnavbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("favcountries", function FavhomeComponent_Template_app_favnavbar_favcountries_0_listener($event) { return ctx.fav($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-favcards", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("favcountries", ctx.favcountries);
    } }, directives: [_favnavbar_favnavbar_component__WEBPACK_IMPORTED_MODULE_1__["FavnavbarComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _favcards_favcards_component__WEBPACK_IMPORTED_MODULE_3__["FavcardsComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmYXZob21lLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map