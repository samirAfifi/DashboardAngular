(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\KN\task_Dashboard\app\src\main.ts */"zUnb");


/***/ }),

/***/ "4mxS":
/*!************************************************************!*\
  !*** ./src/app/compnonet/over-view/over-view.component.ts ***!
  \************************************************************/
/*! exports provided: OverViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverViewComponent", function() { return OverViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var angular_gridster2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-gridster2 */ "Ljk9");




const _c0 = function () { return { cols: 4, rows: 4, y: 1, x: 0 }; };
const _c1 = function () { return { cols: 8, rows: 4, y: 5, x: 1 }; };
class OverViewComponent {
    constructor() {
        // slider
        this.slides = ['./assets/imgs/doge.jpg', './assets/imgs/cat.jpg', './assets/imgs/laika.jpg'];
        this.i = 0;
    }
    ngOnInit() {
        this.options = {
            gridType: angular_gridster2__WEBPACK_IMPORTED_MODULE_1__["GridType"].Fixed,
            compactType: angular_gridster2__WEBPACK_IMPORTED_MODULE_1__["CompactType"].None,
            margin: 10,
            outerMargin: true,
            outerMarginTop: null,
            outerMarginRight: null,
            outerMarginBottom: null,
            outerMarginLeft: null,
            useTransformPositioning: true,
            mobileBreakpoint: 200,
            minCols: 1,
            maxCols: 100,
            minRows: 1,
            maxRows: 100,
            maxItemCols: 100,
            minItemCols: 1,
            maxItemRows: 100,
            minItemRows: 1,
            maxItemArea: 500,
            minItemArea: 1,
            defaultItemCols: 1,
            defaultItemRows: 1,
            fixedColWidth: 105,
            fixedRowHeight: 105,
            keepFixedHeightInMobile: false,
            keepFixedWidthInMobile: false,
            scrollSensitivity: 10,
            scrollSpeed: 20,
            enableEmptyCellClick: false,
            enableEmptyCellContextMenu: false,
            enableEmptyCellDrop: false,
            enableEmptyCellDrag: false,
            emptyCellDragMaxCols: 50,
            emptyCellDragMaxRows: 50,
            ignoreMarginInRow: false,
            draggable: {
                enabled: true
            },
            resizable: {
                enabled: true
            },
            swap: false,
            pushItems: true,
            disablePushOnDrag: false,
            disablePushOnResize: false,
            pushDirections: { north: true, east: true, south: true, west: true },
            pushResizeItems: false,
            displayGrid: angular_gridster2__WEBPACK_IMPORTED_MODULE_1__["DisplayGrid"].Always,
            disableWindowResize: false,
            disableWarnings: false,
            scrollToNewItems: false
        };
        this.dashboard = [
            { cols: 12, rows: 11, y: 12, x: 12 },
        ];
    }
    changedOptions() {
        if (this.options.api && this.options.api.optionsChanged) {
            this.options.api.optionsChanged();
        }
    }
    removeItem($event, item) {
        $event.preventDefault();
        $event.stopPropagation();
        this.dashboard.splice(this.dashboard.indexOf(item), 1);
    }
    addItem() {
        this.dashboard.push({ x: 12, y: 12, cols: 12, rows: 12 });
    }
    getSlide() {
        return this.slides[this.i];
    }
    getPrev() {
        this.i = this.i === 0 ? 0 : this.i - 1;
    }
    //edit here    
    getNext() {
        this.i = this.i === this.slides.length - 1 ? this.i : this.i + 1;
    }
}
OverViewComponent.ɵfac = function OverViewComponent_Factory(t) { return new (t || OverViewComponent)(); };
OverViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OverViewComponent, selectors: [["app-over-view"]], decls: 46, vars: 6, consts: [[1, "groud", 3, "options"], [1, "item", 3, "item"], [1, "analysis"], ["id", "carouselExampleControls", "data-ride", "carousel", 1, "carousel", "slide"], ["role", "listbox", 1, "carousel-inner"], ["alt", "slide", 3, "src"], [1, "carousel-caption"], [1, "icon"], [1, "fa-solid", "fa-chevron-left", 3, "click"], [1, "fa-solid", "fa-chevron-right", 3, "click"], [1, "card"], [1, "card-block"], [1, "row"], ["id", "content-spy", 1, "col-sm-3"], [1, "nav", "nav-pills", "nav-stacked"], ["role", "presentation", 1, "active"], ["href", "#lorem"], ["role", "presentation"], ["href", "#eros"], ["href", "#vestibulum"], ["id", "content", "data-spy", "scroll", "data-target", "#content-spy", 1, "col-sm-9"], ["id", "lorem"], ["id", "eros"], ["id", "vestibulum"], ["src", "assets/imgs/jon.png", 1, "img-responsive"]], template: function OverViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "gridster", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "gridster-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Laika said:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Hey! How are you?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OverViewComponent_Template_i_click_12_listener() { return ctx.getPrev(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OverViewComponent_Template_i_click_13_listener() { return ctx.getNext(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "gridster-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ul", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "The Lorem");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "The Eros");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "The Vestibulum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "The Lorem");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi suscipit enim eu sodales feugiat. In dignissim ultrices lectus et feugiat. Mauris interdum massa quis enim faucibus, id suscipit urna egestas. Cras nibh urna, blandit mattis auctor sed, tristique sed urna. Donec sed enim dignissim, volutpat tellus eget, semper mauris. Praesent eu congue risus. Curabitur euismod, eros in placerat commodo, dolor quam sagittis elit, convallis mollis lorem leo vitae odio. Integer sagittis urna sed tellus commodo consectetur. Sed molestie malesuada risus id ultricies. Fusce gravida hendrerit felis, quis cursus odio elementum sit amet. Integer efficitur velit at mauris convallis cursus. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "The Eros");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Curabitur eget pharetra risus, ac bibendum magna. Pellentesque dapibus ipsum a metus feugiat, ac rutrum quam pretium. Morbi scelerisque, elit in tincidunt vehicula, sem nulla condimentum dui, vitae sollicitudin tellus ligula ut justo. Proin consequat at velit sed lacinia. Nunc ac tellus molestie, consequat odio vel, tristique felis. Aliquam porttitor, justo ac aliquet vehicula, erat quam dictum est, nec facilisis mi ligula ut purus. Donec viverra mauris metus, aliquet porta quam vulputate quis. Sed bibendum tortor tortor, et malesuada lectus faucibus at. Proin lectus elit, congue eu dapibus ac, maximus commodo nunc. Vestibulum nunc augue, scelerisque sed augue at, viverra pellentesque magna. In non mauris id justo vehicula congue ultrices at ante. Nulla in ipsum diam. Nam in lacus ipsum. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "The Vestibulum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Integer eleifend consectetur est, et hendrerit arcu consequat sed. Sed lacus elit, ornare in turpis at, laoreet suscipit turpis. Vivamus scelerisque metus a sem feugiat consectetur. Nam tempus quis metus eget ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae sagittis nulla, sed porttitor leo. Duis rutrum nisi sed ex tristique euismod. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In eu risus sodales, faucibus ex et, pellentesque eros. Aenean eleifend lorem a tincidunt euismod. Suspendisse tempus vel justo id vestibulum. Sed sed dui sollicitudin, condimentum ante iaculis, eleifend nulla. Etiam leo lectus, dignissim et luctus in, dignissim ac quam. Nunc sagittis viverra hendrerit. Donec vulputate, ante ac ultricies ullamcorper, urna purus bibendum lectus, in egestas nisi tellus non justo. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.options);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.getSlide(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c1));
    } }, directives: [angular_gridster2__WEBPACK_IMPORTED_MODULE_1__["GridsterComponent"], angular_gridster2__WEBPACK_IMPORTED_MODULE_1__["GridsterItemComponent"]], styles: [".card-block{\r\n    padding: 10px;\r\n}\r\n.quick-stats{\r\n    display: flex;\r\n    justify-content: space-between;\r\n    font-size: 2rem;\r\n    line-height: 3rem;\r\n    border-bottom: 0.1rem solid #e5e9ec;\r\n}\r\n.quick-stats strong{\r\n    font-weight: 300;\r\n}\r\n.quick-stats span{\r\n    font-weight: 300;\r\n    float: right;\r\n    color: #8b91a0;\r\n}\r\n.card,.card-block{\r\n    border-radius: 10px;\r\n}\r\n.item{\r\n   \r\n    padding: 10px;\r\n    box-shadow: 5px 10px 10px #888888;\r\n    border-radius: 10px;\r\n    margin-bottom: 50px;\r\n}\r\n.carousel-inner {\r\n    position: relative;\r\n}\r\n.carousel-inner img{\r\n    width: 100%;\r\n}\r\ni {\r\n    font-size: 35px;\r\n    z-index: 9999999;\r\n    color: black;\r\n    cursor: pointer;\r\n\r\n}\r\n.icon .fa-chevron-left{\r\n    position: absolute;\r\n    top: 50%;\r\n    left:3%\r\n   \r\n}\r\n.icon .fa-chevron-right{\r\n    position: absolute;\r\n    top: 50%;\r\n    right:  3%;\r\n    color: #fff;\r\n\r\n\r\n}\r\n#content {\r\n    height: 30em;\r\n    overflow: auto;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG5vbmV0L292ZXItdmlldy9vdmVyLXZpZXcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixtQ0FBbUM7QUFDdkM7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkI7QUFDQTs7SUFFSSxhQUFhO0lBQ2IsaUNBQWlDO0lBQ2pDLG1CQUFtQjtJQUNuQixtQkFBbUI7QUFDdkI7QUFHQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksV0FBVztBQUNmO0FBQ0M7SUFDRyxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixlQUFlOztBQUVuQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUjs7QUFFSjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixVQUFVO0lBQ1YsV0FBVzs7O0FBR2Y7QUFDQTtJQUNJLFlBQVk7SUFDWixjQUFjO0VBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG5vbmV0L292ZXItdmlldy9vdmVyLXZpZXcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLWJsb2Nre1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG4ucXVpY2stc3RhdHN7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDNyZW07XHJcbiAgICBib3JkZXItYm90dG9tOiAwLjFyZW0gc29saWQgI2U1ZTllYztcclxufVxyXG4ucXVpY2stc3RhdHMgc3Ryb25ne1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxufVxyXG4ucXVpY2stc3RhdHMgc3BhbntcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBjb2xvcjogIzhiOTFhMDtcclxufVxyXG4uY2FyZCwuY2FyZC1ibG9ja3tcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuLml0ZW17XHJcbiAgIFxyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJveC1zaGFkb3c6IDVweCAxMHB4IDEwcHggIzg4ODg4ODtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG59XHJcblxyXG5cclxuLmNhcm91c2VsLWlubmVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uY2Fyb3VzZWwtaW5uZXIgaW1ne1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuIGkge1xyXG4gICAgZm9udC1zaXplOiAzNXB4O1xyXG4gICAgei1pbmRleDogOTk5OTk5OTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbn1cclxuLmljb24gLmZhLWNoZXZyb24tbGVmdHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDozJVxyXG4gICBcclxufVxyXG4uaWNvbiAuZmEtY2hldnJvbi1yaWdodHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgcmlnaHQ6ICAzJTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG5cclxuXHJcbn1cclxuI2NvbnRlbnQge1xyXG4gICAgaGVpZ2h0OiAzMGVtO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgfSJdfQ== */"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OverViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-over-view',
                templateUrl: './over-view.component.html',
                styleUrls: ['./over-view.component.css'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], null, null); })();


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

/***/ "Hl0R":
/*!************************************************************!*\
  !*** ./src/app/compnonet/jqwidgets/jqwidgets.component.ts ***!
  \************************************************************/
/*! exports provided: JqwidgetsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JqwidgetsComponent", function() { return JqwidgetsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var angular_gridster2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-gridster2 */ "Ljk9");
/* harmony import */ var jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jqwidgets-ng/jqxgrid */ "aSZe");






const _c0 = ["grid"];
const _c1 = ["myWindow"];
const _c2 = ["id"];
const _c3 = ["name"];
const _c4 = ["address"];
const _c5 = ["email"];
const _c6 = ["myGrid"];
const _c7 = ["editrow"];
const _c8 = function () { return { cols: 10, rows: 4, y: 1, x: 0 }; };
class JqwidgetsComponent {
    constructor() {
        this.columns = [
            { text: 'Id', datafield: 'id' },
            { text: 'Name', datafield: 'name' },
            { text: 'Address', datafield: 'address' },
            { text: 'Email', datafield: 'email' },
            {
                text: 'Edit', datafield: 'Edit', columntype: 'button',
                cellsrenderer: () => {
                    return 'Edit';
                },
                buttonclick: (row) => {
                    console.log(row.valueOf);
                    // let dataRecord = this.myGrid.getrowdata(this.editrow);
                    // this.id.row(dataRecord.id);
                    // this.lastname.val(dataRecord.lastname);
                    // this.product.val(dataRecord.productname);
                    // // show the popup window.
                    // this.myWindow.position({ x: 68, y: 368 });
                    // myWindow.open();
                }
            },
            { text: 'Delete', datafield: 'Delete', columntype: 'button', cellsrenderer: () => {
                    return 'Delete';
                }, }
        ];
        this.source = new jqx.dataAdapter({
            localData: [
                { id: 1, name: 'samir', address: 'Manteqah Ath Thamenah Nasr City', email: 'samir1@gmail.com', },
                { id: 2, name: 'Helium', address: 'major city, town, and transport', email: 'Nitrogen@gmail.com' },
                { id: 3, name: 'Lithium', address: 'major city, town, and transport', email: 'Helium1@gmail.com' },
                { id: 4, name: 'Beryllium', address: 'major city, town, and transport', email: 'Lithium@gmail.com' },
                { id: 5, name: 'Boron', address: 'major city, town, and transport', email: 'Beryllium@gmail.com' },
                { id: 6, name: 'Carbon', address: 'major city, town, and transport', email: 'Boron@gmail.com' },
                { id: 7, name: 'Nitrogen', address: 'major city, town, and transport', email: 'Carbon@gmail.com' },
                { id: 8, name: 'Nitrogen', address: 'major city, town, and transport', email: 'Nitrogen@gmail.com' },
                { id: 9, name: 'Fluorine', address: 'major city, town, and transport', email: 'Fluorine@gmail.com' },
                { id: 10, name: 'Neon', address: 'major city, town, and transport', email: 'Neon@gmail.com' },
            ]
        });
        // slider
        this.slides = ['./assets/imgs/doge.jpg', './assets/imgs/cat.jpg', './assets/imgs/laika.jpg'];
        this.i = 0;
    }
    ngAfterViewInit() {
    }
    ////////////////////// Gridster
    ngOnInit() {
        this.options = {
            gridType: angular_gridster2__WEBPACK_IMPORTED_MODULE_1__["GridType"].Fixed,
            compactType: angular_gridster2__WEBPACK_IMPORTED_MODULE_1__["CompactType"].None,
            margin: 10,
            outerMargin: true,
            outerMarginTop: null,
            outerMarginRight: null,
            outerMarginBottom: null,
            outerMarginLeft: null,
            useTransformPositioning: true,
            mobileBreakpoint: 200,
            minCols: 1,
            maxCols: 100,
            minRows: 1,
            maxRows: 100,
            maxItemCols: 100,
            minItemCols: 1,
            maxItemRows: 100,
            minItemRows: 1,
            maxItemArea: 500,
            minItemArea: 1,
            defaultItemCols: 1,
            defaultItemRows: 1,
            fixedColWidth: 105,
            fixedRowHeight: 105,
            keepFixedHeightInMobile: false,
            keepFixedWidthInMobile: false,
            scrollSensitivity: 10,
            scrollSpeed: 20,
            enableEmptyCellClick: false,
            enableEmptyCellContextMenu: false,
            enableEmptyCellDrop: false,
            enableEmptyCellDrag: false,
            emptyCellDragMaxCols: 50,
            emptyCellDragMaxRows: 50,
            ignoreMarginInRow: false,
            draggable: {
                enabled: true
            },
            resizable: {
                enabled: true
            },
            swap: false,
            pushItems: true,
            disablePushOnDrag: false,
            disablePushOnResize: false,
            pushDirections: { north: true, east: true, south: true, west: true },
            pushResizeItems: false,
            displayGrid: angular_gridster2__WEBPACK_IMPORTED_MODULE_1__["DisplayGrid"].Always,
            disableWindowResize: false,
            disableWarnings: false,
            scrollToNewItems: false
        };
        this.dashboard = [
            { cols: 12, rows: 11, y: 12, x: 12 },
        ];
    }
    changedOptions() {
        if (this.options.api && this.options.api.optionsChanged) {
            this.options.api.optionsChanged();
        }
    }
    removeItem($event, item) {
        $event.preventDefault();
        $event.stopPropagation();
        this.dashboard.splice(this.dashboard.indexOf(item), 1);
    }
    addItem() {
        this.dashboard.push({ x: 12, y: 12, cols: 12, rows: 12 });
    }
    getSlide() {
        return this.slides[this.i];
    }
    getPrev() {
        this.i = this.i === 0 ? 0 : this.i - 1;
    }
    //edit here    
    getNext() {
        this.i = this.i === this.slides.length - 1 ? this.i : this.i + 1;
    }
}
JqwidgetsComponent.ɵfac = function JqwidgetsComponent_Factory(t) { return new (t || JqwidgetsComponent)(); };
JqwidgetsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: JqwidgetsComponent, selectors: [["app-jqwidgets"]], viewQuery: function JqwidgetsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c3, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c4, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c5, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c6, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c7, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.grid = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.myWindow = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.id = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.name = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.address = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.email = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.myGrid = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.editrow = _t.first);
    } }, decls: 4, vars: 12, consts: [[1, "groud", 3, "options"], [1, "item", 3, "item"], [3, "selectionmode", "source", "theme", "autoheight", "pageable", "altrows", "filterable", "sortable", "columns"], ["grid", ""]], template: function JqwidgetsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "gridster", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "gridster-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "jqxGrid", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.options);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c8));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectionmode", "checkbox")("source", ctx.source)("theme", "material")("autoheight", true)("pageable", true)("altrows", true)("filterable", true)("sortable", true)("columns", ctx.columns);
    } }, directives: [angular_gridster2__WEBPACK_IMPORTED_MODULE_1__["GridsterComponent"], angular_gridster2__WEBPACK_IMPORTED_MODULE_1__["GridsterItemComponent"], jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_2__["jqxGridComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBub25ldC9qcXdpZGdldHMvanF3aWRnZXRzLmNvbXBvbmVudC5jc3MifQ== */"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JqwidgetsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-jqwidgets',
                templateUrl: './jqwidgets.component.html',
                styleUrls: ['./jqwidgets.component.css'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], null, { grid: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['grid', { static: false }]
        }], myWindow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['myWindow']
        }], id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['id']
        }], name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['name']
        }], address: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['address']
        }], email: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['email']
        }], myGrid: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['myGrid']
        }], editrow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['editrow']
        }] }); })();


/***/ }),

/***/ "SbT5":
/*!******************************************************!*\
  !*** ./src/app/compnonet/ration/ration.component.ts ***!
  \******************************************************/
/*! exports provided: RationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RationComponent", function() { return RationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highcharts */ "6n/F");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var highcharts_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts-angular */ "kAVD");




class RationComponent {
    constructor() {
        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_1__;
        this.chartOptions = {
            chart: {
                zoomType: 'xy',
                style: {
                    fontFamily: 'Segoe UI',
                },
                height: 300,
            },
            legend: { enabled: false },
            plotOptions: {
                series: {
                    events: {
                        legendItemClick: () => {
                            return false;
                        },
                    },
                    states: {
                        inactive: {
                            opacity: 1,
                        },
                    },
                    dataLabels: {
                        enabled: true,
                        formatter: function () {
                            return 'test';
                        },
                    },
                    cursor: 'pointer',
                },
                column: {
                    point: {
                        events: {
                            click: (event) => {
                                // click to open drilldown
                            },
                        },
                    },
                },
            },
            exporting: {
                enabled: false,
            },
            title: {
                text: '',
            },
            credits: {
                enabled: false,
            },
            xAxis: [
                {
                    categories: ['cat 1', 'cat 2', 'cat 3', 'cat 4'],
                    crosshair: true,
                },
            ],
            yAxis: [
                {
                    labels: {
                        style: {
                            color: '#666666',
                        },
                    },
                    title: {
                        text: '',
                    },
                    endOnTick: true,
                },
            ],
            tooltip: {
                shared: false,
            },
            series: [
                {
                    name: 'Name 1',
                    data: [32532950.02, 4563950.2, 121780820.81, 1480505.42],
                    color: 'rgba(102,0,102,0.5)',
                    pointPlacement: 0.05,
                    zIndex: 1,
                    type: 'column',
                },
                {
                    name: 'Name 2',
                    data: [32532950.02, 4563950.2, 121780820.81, 14805050.42],
                    color: 'rgba(102,0,102,1)',
                    pointPlacement: -0.05,
                    zIndex: 2,
                    type: 'column',
                },
            ],
        };
    }
    getText() {
        return 'some text';
    }
    // formatterFunction(this): string {
    //   return this.y;
    // }
    formatNumber(numberToFormat) {
        return numberToFormat.toString() + 'M';
    }
}
RationComponent.ɵfac = function RationComponent_Factory(t) { return new (t || RationComponent)(); };
RationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RationComponent, selectors: [["app-ration"]], decls: 1, vars: 2, consts: [[3, "Highcharts", "options"]], template: function RationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "highcharts-chart", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("Highcharts", ctx.Highcharts)("options", ctx.chartOptions);
    } }, directives: [highcharts_angular__WEBPACK_IMPORTED_MODULE_2__["HighchartsChartComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBub25ldC9yYXRpb24vcmF0aW9uLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-ration',
                templateUrl: './ration.component.html',
                styleUrls: ['./ration.component.css']
            }]
    }], null, null); })();


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
/* harmony import */ var _compnonet_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./compnonet/navbar/navbar.component */ "m+Jt");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AppComponent {
    constructor() {
        this.slides = ['./assets/imgs/doge.jpg', './assets/imgs/cat.jpg', './assets/imgs/laika.jpg'];
        this.i = 0;
    }
    getSlide() {
        return this.slides[this.i];
    }
    getPrev() {
        this.i = this.i === 0 ? 0 : this.i - 1;
    }
    //edit here    
    getNext() {
        this.i = this.i === this.slides.length - 1 ? this.i : this.i + 1;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, consts: [[1, "container"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_compnonet_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "Yk1Q":
/*!********************************************************!*\
  !*** ./src/app/compnonet/overall/overall.component.ts ***!
  \********************************************************/
/*! exports provided: OverallComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverallComponent", function() { return OverallComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var highcharts_highstock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highcharts/highstock */ "5ZEx");
/* harmony import */ var highcharts_highstock__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(highcharts_highstock__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var highcharts_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts-angular */ "kAVD");




class OverallComponent {
    constructor() {
        this.Highcharts = highcharts_highstock__WEBPACK_IMPORTED_MODULE_1__;
        this.chartOptions = {
            chart: {
                events: {
                    render: (e) => {
                        const chart = e.target;
                        console.log(chart);
                        console.log(this.getText());
                    }
                }
            },
            series: [
                {
                    type: "line",
                    data: [1, 2, 3, 4, 5]
                }
            ]
        };
    }
    getText() {
        return 'some text';
    }
}
OverallComponent.ɵfac = function OverallComponent_Factory(t) { return new (t || OverallComponent)(); };
OverallComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OverallComponent, selectors: [["app-overall"]], decls: 1, vars: 2, consts: [[3, "Highcharts", "options"]], template: function OverallComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "highcharts-chart", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("Highcharts", ctx.Highcharts)("options", ctx.chartOptions);
    } }, directives: [highcharts_angular__WEBPACK_IMPORTED_MODULE_2__["HighchartsChartComponent"]], styles: [".dotted[_ngcontent-%COMP%] {\r\n    stroke-dasharray: 2;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG5vbmV0L292ZXJhbGwvb3ZlcmFsbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0VBQ3JCIiwiZmlsZSI6InNyYy9hcHAvY29tcG5vbmV0L292ZXJhbGwvb3ZlcmFsbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRvdHRlZCB7XHJcbiAgICBzdHJva2UtZGFzaGFycmF5OiAyO1xyXG4gIH1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OverallComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-overall',
                templateUrl: './overall.component.html',
                styleUrls: ['./overall.component.css']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _compnonet_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./compnonet/navbar/navbar.component */ "m+Jt");
/* harmony import */ var _compnonet_over_view_over_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./compnonet/over-view/over-view.component */ "4mxS");
/* harmony import */ var _compnonet_audience_audience_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./compnonet/audience/audience.component */ "fle2");
/* harmony import */ var _compnonet_errors_errors_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./compnonet/errors/errors.component */ "x+v/");
/* harmony import */ var angular_gridster2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-gridster2 */ "Ljk9");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _compnonet_overall_overall_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./compnonet/overall/overall.component */ "Yk1Q");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var highcharts_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! highcharts-angular */ "kAVD");
/* harmony import */ var _compnonet_performance_performance_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./compnonet/performance/performance.component */ "l4Gp");
/* harmony import */ var _compnonet_ration_ration_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./compnonet/ration/ration.component */ "SbT5");
/* harmony import */ var _compnonet_map_map_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./compnonet/map/map.component */ "ZcD0");
/* harmony import */ var jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! jqwidgets-ng/jqxgrid */ "aSZe");
/* harmony import */ var _compnonet_jqwidgets_jqwidgets_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./compnonet/jqwidgets/jqwidgets.component */ "Hl0R");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "Mfq2");





















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            angular_gridster2__WEBPACK_IMPORTED_MODULE_8__["GridsterModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
            highcharts_angular__WEBPACK_IMPORTED_MODULE_12__["HighchartsChartModule"],
            jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_16__["jqxGridModule"],
            ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_18__["TooltipModule"].forRoot(),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _compnonet_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
        _compnonet_over_view_over_view_component__WEBPACK_IMPORTED_MODULE_5__["OverViewComponent"],
        _compnonet_audience_audience_component__WEBPACK_IMPORTED_MODULE_6__["AudienceComponent"],
        _compnonet_errors_errors_component__WEBPACK_IMPORTED_MODULE_7__["ErrorsComponent"],
        _compnonet_overall_overall_component__WEBPACK_IMPORTED_MODULE_10__["OverallComponent"],
        _compnonet_performance_performance_component__WEBPACK_IMPORTED_MODULE_13__["PerformanceComponent"],
        _compnonet_ration_ration_component__WEBPACK_IMPORTED_MODULE_14__["RationComponent"],
        _compnonet_map_map_component__WEBPACK_IMPORTED_MODULE_15__["MapComponent"],
        _compnonet_jqwidgets_jqwidgets_component__WEBPACK_IMPORTED_MODULE_17__["JqwidgetsComponent"]], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        angular_gridster2__WEBPACK_IMPORTED_MODULE_8__["GridsterModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
        highcharts_angular__WEBPACK_IMPORTED_MODULE_12__["HighchartsChartModule"],
        jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_16__["jqxGridModule"], ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_18__["TooltipModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    angular_gridster2__WEBPACK_IMPORTED_MODULE_8__["GridsterModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                    highcharts_angular__WEBPACK_IMPORTED_MODULE_12__["HighchartsChartModule"],
                    jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_16__["jqxGridModule"],
                    ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_18__["TooltipModule"].forRoot(),
                ],
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _compnonet_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
                    _compnonet_over_view_over_view_component__WEBPACK_IMPORTED_MODULE_5__["OverViewComponent"],
                    _compnonet_audience_audience_component__WEBPACK_IMPORTED_MODULE_6__["AudienceComponent"],
                    _compnonet_errors_errors_component__WEBPACK_IMPORTED_MODULE_7__["ErrorsComponent"],
                    _compnonet_overall_overall_component__WEBPACK_IMPORTED_MODULE_10__["OverallComponent"],
                    _compnonet_performance_performance_component__WEBPACK_IMPORTED_MODULE_13__["PerformanceComponent"],
                    _compnonet_ration_ration_component__WEBPACK_IMPORTED_MODULE_14__["RationComponent"],
                    _compnonet_map_map_component__WEBPACK_IMPORTED_MODULE_15__["MapComponent"],
                    _compnonet_jqwidgets_jqwidgets_component__WEBPACK_IMPORTED_MODULE_17__["JqwidgetsComponent"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "ZcD0":
/*!************************************************!*\
  !*** ./src/app/compnonet/map/map.component.ts ***!
  \************************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var highcharts_highmaps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highcharts/highmaps */ "bIOw");
/* harmony import */ var highcharts_highmaps__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(highcharts_highmaps__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _highcharts_map_collection_custom_world_geo_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @highcharts/map-collection/custom/world.geo.json */ "0K9C");
var _highcharts_map_collection_custom_world_geo_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! @highcharts/map-collection/custom/world.geo.json */ "0K9C", 1);
/* harmony import */ var highcharts_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highcharts-angular */ "kAVD");





class MapComponent {
    constructor() {
        this.Highcharts = highcharts_highmaps__WEBPACK_IMPORTED_MODULE_1___default.a;
        this.updateFlag = false;
        this.chartConstructor = 'mapChart';
        this.chartData = [{ code3: 'ABW', z: 105 }, { code3: 'AFG', z: 35530 }];
        this.chartOptions = {
            chart: {
                map: _highcharts_map_collection_custom_world_geo_json__WEBPACK_IMPORTED_MODULE_2__,
                events: {
                    load: function () {
                        this.series[0].data[8].zoomTo();
                    }
                }
            },
            title: {
                text: 'Highmaps basic demo'
            },
            subtitle: {
                text: 'Source map: <a href="http://code.highcharts.com/mapdata/custom/world.js">World, Miller projection, medium resolution</a>'
            },
            mapNavigation: {
                enabled: true,
                buttonOptions: {
                    alignTo: 'spacingBox'
                },
                buttons: {
                    zoomIn: {
                        onclick: function () {
                            this.series[0].data[212].zoomTo();
                            console.log(this.series[0].data[212]);
                        }
                    }
                }
            },
            legend: {
                enabled: true
            },
            colorAxis: {
                min: 0
            },
            series: [
                {
                    type: 'map',
                    name: 'Random data',
                    states: {
                        hover: {
                            color: '#BADA55'
                        }
                    },
                    dataLabels: {
                        enabled: true,
                        format: '{point.name}'
                    },
                    allAreas: false,
                    data: [
                        ['fo', 0],
                        ['um', 1],
                        ['us', 2],
                        ['jp', 3],
                        ['sc', 4],
                        ['in', 5],
                        ['fr', 6],
                        ['fm', 7],
                        ['cn', 8],
                        ['pt', 9],
                        ['sw', 10],
                        ['sh', 11],
                        ['br', 12],
                        ['ki', 13],
                        ['ph', 14],
                        ['mx', 15],
                        ['es', 16],
                        ['bu', 17],
                        ['mv', 18],
                        ['sp', 19],
                        ['gb', 20],
                        ['gr', 21],
                        ['as', 22],
                        ['dk', 23],
                        ['gl', 24],
                        ['gu', 25],
                        ['mp', 26],
                        ['pr', 27],
                        ['vi', 28],
                        ['ca', 29],
                        ['st', 30],
                        ['cv', 31],
                        ['dm', 32],
                        ['nl', 33],
                        ['jm', 34],
                        ['ws', 35],
                        ['om', 36],
                        ['vc', 37],
                        ['tr', 38],
                        ['bd', 39],
                        ['lc', 40],
                        ['nr', 41],
                        ['no', 42],
                        ['kn', 43],
                        ['bh', 44],
                        ['to', 45],
                        ['fi', 46],
                        ['id', 47],
                        ['mu', 48],
                        ['se', 49],
                        ['tt', 50],
                        ['my', 51],
                        ['pa', 52],
                        ['pw', 53],
                        ['tv', 54],
                        ['mh', 55],
                        ['cl', 56],
                        ['th', 57],
                        ['gd', 58],
                        ['ee', 59],
                        ['ag', 60],
                        ['tw', 61],
                        ['bb', 62],
                        ['it', 63],
                        ['mt', 64],
                        ['vu', 65],
                        ['sg', 66],
                        ['cy', 67],
                        ['lk', 68],
                        ['km', 69],
                        ['fj', 70],
                        ['ru', 71],
                        ['va', 72],
                        ['sm', 73],
                        ['kz', 74],
                        ['az', 75],
                        ['tj', 76],
                        ['ls', 77],
                        ['uz', 78],
                        ['ma', 79],
                        ['co', 80],
                        ['tl', 81],
                        ['tz', 82],
                        ['ar', 83],
                        ['sa', 84],
                        ['pk', 85],
                        ['ye', 86],
                        ['ae', 87],
                        ['ke', 88],
                        ['pe', 89],
                        ['do', 90],
                        ['ht', 91],
                        ['pg', 92],
                        ['ao', 93],
                        ['kh', 94],
                        ['vn', 95],
                        ['mz', 96],
                        ['cr', 97],
                        ['bj', 98],
                        ['ng', 99],
                        ['ir', 100],
                        ['sv', 101],
                        ['sl', 102],
                        ['gw', 103],
                        ['hr', 104],
                        ['bz', 105],
                        ['za', 106],
                        ['cf', 107],
                        ['sd', 108],
                        ['cd', 109],
                        ['kw', 110],
                        ['de', 111],
                        ['be', 112],
                        ['ie', 113],
                        ['kp', 114],
                        ['kr', 115],
                        ['gy', 116],
                        ['hn', 117],
                        ['mm', 118],
                        ['ga', 119],
                        ['gq', 120],
                        ['ni', 121],
                        ['lv', 122],
                        ['ug', 123],
                        ['mw', 124],
                        ['am', 125],
                        ['sx', 126],
                        ['tm', 127],
                        ['zm', 128],
                        ['nc', 129],
                        ['mr', 130],
                        ['dz', 131],
                        ['lt', 132],
                        ['et', 133],
                        ['er', 134],
                        ['gh', 135],
                        ['si', 136],
                        ['gt', 137],
                        ['ba', 138],
                        ['jo', 139],
                        ['sy', 140],
                        ['mc', 141],
                        ['al', 142],
                        ['uy', 143],
                        ['cnm', 144],
                        ['mn', 145],
                        ['rw', 146],
                        ['so', 147],
                        ['bo', 148],
                        ['cm', 149],
                        ['cg', 150],
                        ['eh', 151],
                        ['rs', 152],
                        ['me', 153],
                        ['tg', 154],
                        ['la', 155],
                        ['af', 156],
                        ['ua', 157],
                        ['sk', 158],
                        ['jk', 159],
                        ['bg', 160],
                        ['qa', 161],
                        ['li', 162],
                        ['at', 163],
                        ['sz', 164],
                        ['hu', 165],
                        ['ro', 166],
                        ['ne', 167],
                        ['lu', 168],
                        ['ad', 169],
                        ['ci', 170],
                        ['lr', 171],
                        ['bn', 172],
                        ['iq', 173],
                        ['ge', 174],
                        ['gm', 175],
                        ['ch', 176],
                        ['td', 177],
                        ['kv', 178],
                        ['lb', 179],
                        ['dj', 180],
                        ['bi', 181],
                        ['sr', 182],
                        ['il', 183],
                        ['ml', 184],
                        ['sn', 185],
                        ['gn', 186],
                        ['zw', 187],
                        ['pl', 188],
                        ['mk', 189],
                        ['py', 190],
                        ['by', 191],
                        ['cz', 192],
                        ['bf', 193],
                        ['na', 194],
                        ['ly', 195],
                        ['tn', 196],
                        ['bt', 197],
                        ['md', 198],
                        ['ss', 199],
                        ['bw', 200],
                        ['bs', 201],
                        ['nz', 202],
                        ['cu', 203],
                        ['ec', 204],
                        ['au', 205],
                        ['ve', 206],
                        ['sb', 207],
                        ['mg', 208],
                        ['is', 209],
                        ['eg', 210],
                        ['kg', 211],
                        ['np', 212]
                    ]
                }
            ]
        };
    }
    handleUpdate() {
        let dataUpdate = [
            ['fo', 1110],
            ['um', 1111],
            ['us', 1112],
            ['jp', 1113],
            ['sc', 1114],
            ['in', 1115],
            ['fr', 1111],
            ['fm', 1117],
            ['cn', 1118],
            ['pt', 1111],
            ['sw', 1110],
            ['sh', 1111],
            ['br', 1112],
            ['ki', 1113],
            ['ph', 1114],
            ['mx', 1115],
            ['es', 1116],
            ['bu', 1117],
            ['mv', 1118],
            ['sp', 1119],
            ['gb', 1120]
        ];
        this.chartOptions.series[0] = {
            data: dataUpdate,
            type: 'map'
        };
        this.chartOptions.title = {
            text: 'update'
        };
        this.updateFlag = true;
    }
}
MapComponent.ɵfac = function MapComponent_Factory(t) { return new (t || MapComponent)(); };
MapComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MapComponent, selectors: [["app-map"]], decls: 1, vars: 2, consts: [[3, "Highcharts", "options"]], template: function MapComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "highcharts-chart", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("Highcharts", ctx.Highcharts)("options", ctx.chartOptions);
    } }, directives: [highcharts_angular__WEBPACK_IMPORTED_MODULE_3__["HighchartsChartComponent"]], styles: ["p[_ngcontent-%COMP%] {\r\n    font-family: Lato;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG5vbmV0L21hcC9tYXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtFQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBub25ldC9tYXAvbWFwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwIHtcclxuICAgIGZvbnQtZmFtaWx5OiBMYXRvO1xyXG4gIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-map',
                templateUrl: './map.component.html',
                styleUrls: ['./map.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "fle2":
/*!**********************************************************!*\
  !*** ./src/app/compnonet/audience/audience.component.ts ***!
  \**********************************************************/
/*! exports provided: AudienceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudienceComponent", function() { return AudienceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var angular_gridster2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-gridster2 */ "Ljk9");
/* harmony import */ var _performance_performance_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../performance/performance.component */ "l4Gp");
/* harmony import */ var _overall_overall_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../overall/overall.component */ "Yk1Q");
/* harmony import */ var _ration_ration_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ration/ration.component */ "SbT5");
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../map/map.component */ "ZcD0");








const _c0 = function () { return { cols: 6, rows: 4, y: 1, x: 0 }; };
const _c1 = function () { return { cols: 4, rows: 4, y: 1, x: 6 }; };
const _c2 = function () { return { cols: 5, rows: 4, y: 1, x: 0 }; };
const _c3 = function () { return { cols: 5, rows: 4, y: 2, x: 0 }; };
const _c4 = function () { return { cols: 10, rows: 3, y: 9, x: 0 }; };
const _c5 = function () { return { cols: 10, rows: 5, y: 12, x: 0 }; };
class AudienceComponent {
    ngOnInit() {
        this.options = {
            gridType: angular_gridster2__WEBPACK_IMPORTED_MODULE_1__["GridType"].Fixed,
            compactType: angular_gridster2__WEBPACK_IMPORTED_MODULE_1__["CompactType"].None,
            margin: 10,
            outerMargin: true,
            outerMarginTop: null,
            outerMarginRight: null,
            outerMarginBottom: null,
            outerMarginLeft: null,
            useTransformPositioning: true,
            mobileBreakpoint: 200,
            minCols: 1,
            maxCols: 100,
            minRows: 1,
            maxRows: 100,
            maxItemCols: 100,
            minItemCols: 1,
            maxItemRows: 100,
            minItemRows: 1,
            maxItemArea: 500,
            minItemArea: 1,
            defaultItemCols: 1,
            defaultItemRows: 1,
            fixedColWidth: 105,
            fixedRowHeight: 105,
            keepFixedHeightInMobile: false,
            keepFixedWidthInMobile: false,
            scrollSensitivity: 10,
            scrollSpeed: 20,
            enableEmptyCellClick: false,
            enableEmptyCellContextMenu: false,
            enableEmptyCellDrop: false,
            enableEmptyCellDrag: false,
            emptyCellDragMaxCols: 50,
            emptyCellDragMaxRows: 50,
            ignoreMarginInRow: false,
            draggable: {
                enabled: true
            },
            resizable: {
                enabled: true
            },
            swap: false,
            pushItems: true,
            disablePushOnDrag: false,
            disablePushOnResize: false,
            pushDirections: { north: true, east: true, south: true, west: true },
            pushResizeItems: false,
            displayGrid: angular_gridster2__WEBPACK_IMPORTED_MODULE_1__["DisplayGrid"].Always,
            disableWindowResize: false,
            disableWarnings: false,
            scrollToNewItems: false
        };
        this.dashboard = [
            { cols: 12, rows: 11, y: 12, x: 12 },
        ];
    }
    changedOptions() {
        if (this.options.api && this.options.api.optionsChanged) {
            this.options.api.optionsChanged();
        }
    }
    removeItem($event, item) {
        $event.preventDefault();
        $event.stopPropagation();
        this.dashboard.splice(this.dashboard.indexOf(item), 1);
    }
    addItem() {
        this.dashboard.push({ x: 12, y: 12, cols: 12, rows: 12 });
    }
}
AudienceComponent.ɵfac = function AudienceComponent_Factory(t) { return new (t || AudienceComponent)(); };
AudienceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AudienceComponent, selectors: [["app-audience"]], decls: 84, vars: 13, consts: [[1, "row", "g-4"], [1, "groud", 3, "options"], [1, "item", 3, "item"], [1, "analysis"], ["id", "quick-info", 1, "card"], [1, "card-block"], [1, "quick-stats"], ["id", "real-time", 1, "card"], [1, "list-unstyled"], [1, "label", "label-warning", "pull-right"], [1, "badge", "ok", "pull-right"], ["aria-hidden", "true", 1, "glyphicon", "glyphicon-ok"], [1, "progress"], ["role", "progressbar", "aria-valuenow", "25", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-success", 2, "width", "25%"], [1, "sr-only"], ["role", "progressbar", "aria-valuenow", "38", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-warning", "progress-bar-striped", "active", 2, "width", "38%"], ["role", "progressbar", "aria-valuenow", "5", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-danger", 2, "width", "5%"], [1, "pull-right"]], template: function AudienceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "gridster", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "gridster-item", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Overall analysis");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-performance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "gridster-item", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Quick stats");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Today:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "78");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "This month:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "459");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "All time:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "54k");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Bounce rate:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "81.08%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Session duration:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "00:01:41");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "New session:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "63.86%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "gridster-item", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Performance evaluation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "app-overall");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "gridster-item", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Ration stock info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "app-ration");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "gridster-item", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Real time information");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " Active dogs: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "255");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, " Silo status: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " Usage level: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "25%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "38% alocated");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "5% reserved");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " Free space: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, " 32% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "gridster-item", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Daily usage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "app-map");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.options);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c5));
    } }, directives: [angular_gridster2__WEBPACK_IMPORTED_MODULE_1__["GridsterComponent"], angular_gridster2__WEBPACK_IMPORTED_MODULE_1__["GridsterItemComponent"], _performance_performance_component__WEBPACK_IMPORTED_MODULE_2__["PerformanceComponent"], _overall_overall_component__WEBPACK_IMPORTED_MODULE_3__["OverallComponent"], _ration_ration_component__WEBPACK_IMPORTED_MODULE_4__["RationComponent"], _map_map_component__WEBPACK_IMPORTED_MODULE_5__["MapComponent"]], styles: [".card-block{\r\n    padding: 10px;\r\n}\r\n.quick-stats{\r\n    display: flex;\r\n    justify-content: space-between;\r\n    font-size: 2rem;\r\n    line-height: 3rem;\r\n    border-bottom: 0.1rem solid #e5e9ec;\r\n}\r\n.quick-stats strong{\r\n    font-weight: 300;\r\n}\r\n.quick-stats span{\r\n    font-weight: 300;\r\n    float: right;\r\n    color: #8b91a0;\r\n}\r\n.card,.card-block{\r\n    border-radius: 10px;\r\n}\r\n.item{\r\n    border: 1px solid;\r\n    padding: 10px;\r\n    box-shadow: 5px 10px #888888;\r\n    border-radius: 10px;\r\n    margin-top: 20px;\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG5vbmV0L2F1ZGllbmNlL2F1ZGllbmNlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsbUNBQW1DO0FBQ3ZDO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osY0FBYztBQUNsQjtBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLDRCQUE0QjtJQUM1QixtQkFBbUI7SUFDbkIsZ0JBQWdCOztBQUVwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBub25ldC9hdWRpZW5jZS9hdWRpZW5jZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtYmxvY2t7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcbi5xdWljay1zdGF0c3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICBsaW5lLWhlaWdodDogM3JlbTtcclxuICAgIGJvcmRlci1ib3R0b206IDAuMXJlbSBzb2xpZCAjZTVlOWVjO1xyXG59XHJcbi5xdWljay1zdGF0cyBzdHJvbmd7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG59XHJcbi5xdWljay1zdGF0cyBzcGFue1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGNvbG9yOiAjOGI5MWEwO1xyXG59XHJcbi5jYXJkLC5jYXJkLWJsb2Nre1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG4uaXRlbXtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJveC1zaGFkb3c6IDVweCAxMHB4ICM4ODg4ODg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuXHJcbn1cclxuIl19 */"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AudienceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-audience',
                templateUrl: './audience.component.html',
                styleUrls: ['./audience.component.css'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], null, null); })();


/***/ }),

/***/ "l4Gp":
/*!****************************************************************!*\
  !*** ./src/app/compnonet/performance/performance.component.ts ***!
  \****************************************************************/
/*! exports provided: PerformanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerformanceComponent", function() { return PerformanceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var highcharts_highstock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highcharts/highstock */ "5ZEx");
/* harmony import */ var highcharts_highstock__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(highcharts_highstock__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var highcharts_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts-angular */ "kAVD");




class PerformanceComponent {
    constructor() {
        this.Highcharts = highcharts_highstock__WEBPACK_IMPORTED_MODULE_1__;
        this.chartOptions = {
            series: [
                {
                    type: 'line',
                    pointInterval: 24 * 3600 * 1000,
                    data: [1, 2, 3, 4, 5, 12, 5, 84, 60, 4, 12],
                },
            ],
        };
    }
}
PerformanceComponent.ɵfac = function PerformanceComponent_Factory(t) { return new (t || PerformanceComponent)(); };
PerformanceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PerformanceComponent, selectors: [["app-performance"]], decls: 2, vars: 3, consts: [[1, "performance"], [3, "Highcharts", "constructorType", "options"]], template: function PerformanceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "highcharts-chart", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("Highcharts", ctx.Highcharts)("constructorType", "stockChart")("options", ctx.chartOptions);
    } }, directives: [highcharts_angular__WEBPACK_IMPORTED_MODULE_2__["HighchartsChartComponent"]], styles: [".performance[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    text-align: center;\r\n}\r\n.dotted[_ngcontent-%COMP%] {\r\n    stroke-dasharray: 2;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG5vbmV0L3BlcmZvcm1hbmNlL3BlcmZvcm1hbmNlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxtQkFBbUI7RUFDckIiLCJmaWxlIjoic3JjL2FwcC9jb21wbm9uZXQvcGVyZm9ybWFuY2UvcGVyZm9ybWFuY2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wZXJmb3JtYW5jZXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5kb3R0ZWQge1xyXG4gICAgc3Ryb2tlLWRhc2hhcnJheTogMjtcclxuICB9XHJcbiAgIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PerformanceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-performance',
                templateUrl: './performance.component.html',
                styleUrls: ['./performance.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "m+Jt":
/*!******************************************************!*\
  !*** ./src/app/compnonet/navbar/navbar.component.ts ***!
  \******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class NavbarComponent {
    constructor() { }
    ngOnInit() {
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 144, vars: 0, consts: [[1, "loading"], [1, "navbar", "navbar-fixed-top"], [1, "container-fluid"], [1, "row"], [1, "col-sm-3", "top-left-menu"], [1, "navbar-header"], ["href", "dashboard.html", 1, "navbar-brand"], [1, "text-info"], ["type", "button", "data-toggle", "collapse", "data-target", "#nav-menu", "aria-expanded", "false", 1, "navbar-toggle", "collapsed"], [1, "sr-only"], [1, "icon-bar"], ["id", "search", "role", "search", 1, "col-sm-3"], [1, "input-group"], ["aria-hidden", "true", 1, "glyphicon", "glyphicon-search"], ["type", "text", "placeholder", "Search...", 1, "form-control", "transition"], ["id", "nav-menu", 1, "collapse", "navbar-collapse"], [1, "nav", "navbar-nav"], ["id", "btn-notifications", 1, "btn-group"], [1, "badge"], ["type", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "btn-link", "dropdown-toggle"], ["id", "notification-list", 1, "dropdown-menu", "pull-right"], ["routerLink", "#"], ["src", "assets/imgs/doge.jpg", 1, "img-circle"], [1, "notification-message"], [1, "since"], ["href", "#"], ["src", "assets/imgs/cat.jpg", 1, "img-circle"], [1, "visible-xs"], ["routerLink", "jqwidgets", 1, "visible-xs"], ["role", "separator", 1, "divider", "visible-xs"], ["id", "nav-profile", 1, "btn-group", "pull-right", "hidden-xs"], ["type", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "btn-link", "dropdown-toggle", "thumbnail"], ["src", "assets/imgs/laika.jpg", 1, "img-circle"], [1, "dropdown-menu"], ["routerLink", "settings.html"], ["role", "separator", 1, "divider"], ["id", "side-menu", "data-spy", "affix", "data-offset-top", "0", 1, "col-sm-3", "hidden-xs"], [1, "profile-block"], ["src", "assets/imgs/jon.png", 1, "img-circle"], [1, "profile-title"], [1, "nav", "nav-pills", "nav-stacked"], ["routerLink", "overView", 1, "transition"], ["aria-hidden", "true", 1, "glyphicon", "glyphicon-home"], ["routerLink", "audience", 1, "transition"], ["aria-hidden", "true", 1, "glyphicon", "glyphicon-user"], ["href", "#finances-opts", "role", "button", "data-toggle", "collapse", "aria-expanded", "false", "aria-controls", "finances-opts", 1, "transition"], ["aria-hidden", "true", 1, "glyphicon", "glyphicon-usd"], ["aria-hidden", "true", 1, "glyphicon", "glyphicon-menu-left", "pull-right", "transition"], ["id", "finances-opts", 1, "collapse", "list-unstyled"], ["routerLink", "#", 1, "transition"], ["routerLink", "jqwidgets", 1, "transition"], ["aria-hidden", "true", 1, "glyphicon", "glyphicon-time"], [1, "badge", "pull-right"], [1, "nav-divider"], ["href", "#projects-opts", "role", "button", "data-toggle", "collapse", "aria-expanded", "false", "aria-controls", "projects-opts", 1, "transition"], ["aria-hidden", "true", 1, "glyphicon", "glyphicon-briefcase"], ["id", "projects-opts", 1, "collapse", "list-unstyled"], ["href", "#", 1, "transition"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Toggle navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "form", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ul", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Notifications ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "ul", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Laika");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Hey! How are you?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "em", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "2h ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Devil cat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "I will never forgive you...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "em", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "6h ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Doge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "What are you doing? So scare. It's alright now.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "em", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "yesterday");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "li", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Audience");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "li", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Finances");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "li", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Realtime");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "li", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "li", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "li", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "li", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Setting");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "li", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "ul", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Setting");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "li", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "img", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "h4", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Jonny Doo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "@jonnydoo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "ul", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "a", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, " Overview ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "a", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "span", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, " Audience ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, " Finances ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "span", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "ul", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "a", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, " Incomes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "a", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, " Outcomes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "a", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, " Real time ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "span", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "12");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](131, "li", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "a", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](134, "span", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, " Projects ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](136, "span", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "ul", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "a", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, " Free ration nation ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "a", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, " Cats going crazy ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], styles: ["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    height: 100%;\r\n    background-color: #e5e9ec;\r\n  }\r\n\r\n  \r\n\r\n  nav.navbar-fixed-top[_ngcontent-%COMP%] {\r\n    background-color: #FFF;\r\n    border: none;\r\n  }\r\n\r\n  nav[_ngcontent-%COMP%]   .top-left-menu[_ngcontent-%COMP%] {\r\n    background-color: #252830;\r\n    display: flex;\r\n    align-items: center;\r\n  }\r\n\r\n  .navbar-brand[_ngcontent-%COMP%] {\r\n    height: auto;\r\n  }\r\n\r\n  .navbar-brand[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    font-size: 1.5em;\r\n    font-weight: 300;\r\n    color: #FFF;\r\n  }\r\n\r\n  nav[_ngcontent-%COMP%]   .header-buttons[_ngcontent-%COMP%] {\r\n    margin-left: auto;\r\n    color: #FFF;\r\n  }\r\n\r\n  \r\n\r\n  .navbar-toggle[_ngcontent-%COMP%] {\r\n    border-color: #252830;\r\n    background-color: #e5e9ec;\r\n    margin-top: 13px\r\n  }\r\n\r\n  .navbar-toggle[_ngcontent-%COMP%]   .icon-bar[_ngcontent-%COMP%] {\r\n    background-color: #252830;\r\n  }\r\n\r\n  \r\n\r\n  nav[_ngcontent-%COMP%]   form#search[_ngcontent-%COMP%] {\r\n    padding: 0.9em;\r\n  }\r\n\r\n  nav[_ngcontent-%COMP%]   form#search[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n  }\r\n\r\n  nav[_ngcontent-%COMP%]   form#search[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\r\n    border-radius: 0.25em;\r\n    border: none;\r\n    width: 70%;\r\n    padding-left: 1.9em;\r\n    background-color: #F3F3F3;\r\n    box-shadow: none;\r\n  }\r\n\r\n  nav[_ngcontent-%COMP%]   form#search[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\r\n    width: 100%;\r\n    box-shadow: none;\r\n  }\r\n\r\n  nav[_ngcontent-%COMP%]   form#search[_ngcontent-%COMP%]   .glyphicon-search[_ngcontent-%COMP%] {\r\n    z-index: 99;\r\n    left: 1.7em;\r\n  }\r\n\r\n  \r\n\r\n  nav[_ngcontent-%COMP%]   #nav-menu[_ngcontent-%COMP%] {\r\n    padding: 0.4em;\r\n    padding-right: 1em;\r\n  }\r\n\r\n  \r\n\r\n  #nav-menu[_ngcontent-%COMP%]   #btn-notifications[_ngcontent-%COMP%]    > .badge[_ngcontent-%COMP%] {\r\n    color: #FFF;\r\n    background-color: #f35958;\r\n    font-size: 0.7em;\r\n    padding: 0.3rem 0.55rem 0.3rem 0.5rem;\r\n    position: absolute;\r\n    right: -0.4rem;\r\n    top: 1rem;\r\n    z-index: 99;\r\n  }\r\n\r\n  #btn-notifications[_ngcontent-%COMP%]   .btn-link[_ngcontent-%COMP%], #nav-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    padding-top: 1.5rem;\r\n    color: #252830;\r\n    font-weight: 500;\r\n  }\r\n\r\n  #btn-notifications[_ngcontent-%COMP%]   .btn-link[_ngcontent-%COMP%]:hover {\r\n    text-decoration: none;\r\n  }\r\n\r\n  #notification-list[_ngcontent-%COMP%] {\r\n    max-height: 20em;\r\n    overflow: auto;\r\n  }\r\n\r\n  #notification-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    opacity: 0.7;\r\n    margin: 1.5rem;\r\n    border-radius: 0.5rem;\r\n    padding: 0.5rem 1.3rem;\r\n    background-color: #EFEFEF;\r\n    position: relative;\r\n  }\r\n\r\n  #notification-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    color: #262626;\r\n    text-decoration: none;\r\n    opacity: 1;\r\n  }\r\n\r\n  #notification-list[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    height: 35px;\r\n    width: 35px;\r\n    margin-right: 1em;\r\n    margin-top: 1em;\r\n  }\r\n\r\n  #notification-list[_ngcontent-%COMP%]   .notification-message[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    white-space: normal;\r\n    min-width: 25rem;\r\n  }\r\n\r\n  #notification-list[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%]:empty {\r\n    display: inline-block;\r\n    position: absolute;\r\n    right: 0.5rem;\r\n    top: 0.5rem;\r\n    background-color: #f35958;\r\n    height: 1.4rem;\r\n  }\r\n\r\n  #notification-list[_ngcontent-%COMP%]   em.since[_ngcontent-%COMP%] {\r\n    font-size: 0.7em;\r\n    color: #646C82;\r\n  }\r\n\r\n  \r\n\r\n  #nav-profile[_ngcontent-%COMP%] {\r\n    margin: 0.5em;\r\n    margin-left: 1em;\r\n    float: right;\r\n  }\r\n\r\n  #nav-profile[_ngcontent-%COMP%]   button.thumbnail[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    padding: 0;\r\n    border: 0;\r\n  }\r\n\r\n  #nav-profile[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    max-height: 2.3em;\r\n  }\r\n\r\n  \r\n\r\n  #side-menu[_ngcontent-%COMP%] {\r\n    background-color: #1b1e24;\r\n    padding-top: 7.2rem;\r\n    height: 100%;\r\n    position: fixed;\r\n  }\r\n\r\n  #side-menu[_ngcontent-%COMP%]   .profile-block[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n  }\r\n\r\n  #side-menu[_ngcontent-%COMP%]   .profile-block[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 70px;\r\n  }\r\n\r\n  #side-menu[_ngcontent-%COMP%]   .profile-title[_ngcontent-%COMP%] {\r\n    color: #FFF;\r\n    margin-left: 1rem;\r\n    font-size: 1.5em;\r\n    vertical-align: middle;\r\n  }\r\n\r\n  #side-menu[_ngcontent-%COMP%]   .profile-title[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\r\n    display: block;\r\n  }\r\n\r\n  #side-menu[_ngcontent-%COMP%]   ul.nav[_ngcontent-%COMP%] {\r\n    margin-top: 1rem;\r\n  }\r\n\r\n  #side-menu[_ngcontent-%COMP%]   ul.nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    color: #8b91a0;\r\n    cursor: pointer;\r\n  }\r\n\r\n  #side-menu[_ngcontent-%COMP%]   ul.nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, #side-menu[_ngcontent-%COMP%]   ul.nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus {\r\n    color: #FFF;\r\n    background-color: inherit;\r\n  }\r\n\r\n  #side-menu[_ngcontent-%COMP%]   ul.nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .glyphicon[_ngcontent-%COMP%] {\r\n    margin-right: 0.7rem;\r\n    cursor: pointer;\r\n  }\r\n\r\n  #side-menu[_ngcontent-%COMP%]   ul.nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .glyphicon.pull-right[_ngcontent-%COMP%] {\r\n    margin-top: 0.2rem;\r\n    will-change: transform;\r\n    cursor: pointer;\r\n  }\r\n\r\n  #side-menu[_ngcontent-%COMP%]   ul.nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus   .glyphicon.pull-right[_ngcontent-%COMP%] {\r\n    transform: rotate(-90deg);\r\n  }\r\n\r\n  #side-menu[_ngcontent-%COMP%]   ul.nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\r\n    background-color: #1ca095;\r\n  }\r\n\r\n  #side-menu[_ngcontent-%COMP%]   ul.nav[_ngcontent-%COMP%]   .nav-divider[_ngcontent-%COMP%] {\r\n    background-color: #252830;\r\n  }\r\n\r\n  #side-menu[_ngcontent-%COMP%]   ul.nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n    margin-left: 10%;\r\n  }\r\n\r\n  #side-menu[_ngcontent-%COMP%]   ul.nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    display: block;\r\n    background-color: #2b303b;\r\n    padding: 1rem;\r\n    margin-bottom: 0.3rem;\r\n    border-radius: 0.25em;\r\n  }\r\n\r\n  #side-menu[_ngcontent-%COMP%]   ul.nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    text-decoration: none;\r\n    background-color: #434857;\r\n  }\r\n\r\n  \r\n\r\n  #main[_ngcontent-%COMP%] {\r\n    padding-top: 7.2rem;\r\n    display: flex;\r\n    align-items: stretch;\r\n    flex-flow: row wrap;\r\n  }\r\n\r\n  .card[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    border-radius: 0.25em;\r\n    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.37);\r\n    background-color: #FFF;\r\n    margin: 1.25rem;\r\n    flex-grow: 5;\r\n  }\r\n\r\n  .card[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\r\n    color: #252830;\r\n  }\r\n\r\n  .card-block[_ngcontent-%COMP%] {\r\n    padding: 2rem;\r\n  }\r\n\r\n  .card-block[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    margin-bottom: 1.5rem;\r\n    color: #252830;\r\n  }\r\n\r\n  \r\n\r\n  .round-chart[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    position: relative;\r\n  }\r\n\r\n  .round-chart[_ngcontent-%COMP%]    + .round-chart[_ngcontent-%COMP%] {\r\n    float: right;\r\n  }\r\n\r\n  .round-chart[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    font-size: 3em;\r\n    font-weight: 100;\r\n    line-height: 1.7rem;\r\n    width: 12rem;\r\n    height: 4.4rem;\r\n    text-align: center;\r\n    position: absolute;\r\n    margin: auto;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n  }\r\n\r\n  .round-chart[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]    > small[_ngcontent-%COMP%] {\r\n    font-size: 2rem;\r\n    font-weight: 400;\r\n  }\r\n\r\n  \r\n\r\n  #quick-info[_ngcontent-%COMP%]   .card-block[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n\r\n  #quick-info[_ngcontent-%COMP%]   .quick-stats[_ngcontent-%COMP%] {\r\n    font-size: 2rem;\r\n    line-height: 3rem;\r\n    border-bottom: 0.1rem solid #e5e9ec;\r\n  }\r\n\r\n  #quick-info[_ngcontent-%COMP%]   .quick-stats[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\r\n    font-weight: 300;\r\n  }\r\n\r\n  #quick-info[_ngcontent-%COMP%]   .quick-stats[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    font-weight: 300;\r\n    float: right;\r\n    color: #8b91a0;\r\n  }\r\n\r\n  \r\n\r\n  #performance-eval[_ngcontent-%COMP%]   .spider-chart[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    height: 264px;\r\n  }\r\n\r\n  .highcharts-container[_ngcontent-%COMP%], .highcharts-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\r\n    overflow: visible !important;\r\n    margin: auto;\r\n  }\r\n\r\n  \r\n\r\n  #ration-stock[_ngcontent-%COMP%]   .stacked-area[_ngcontent-%COMP%] {\r\n    height: 200px;\r\n  }\r\n\r\n  #ration-stock[_ngcontent-%COMP%]   .switch[_ngcontent-%COMP%] {\r\n    font-weight: 300;\r\n    color: #8b91a0;\r\n    padding: 0.5rem 0;\r\n  }\r\n\r\n  #ration-stock[_ngcontent-%COMP%]   .switchery[_ngcontent-%COMP%] {\r\n    float: right;\r\n  }\r\n\r\n  \r\n\r\n  #real-time[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    font-size: 1.8rem;\r\n    font-weight: 300;\r\n    border-bottom: 0.1rem solid #e5e9ec;\r\n    padding: 0.5rem 0;\r\n  }\r\n\r\n  #real-time[_ngcontent-%COMP%]   .badge.ok[_ngcontent-%COMP%] {\r\n    background-color: #1bc98e;\r\n  }\r\n\r\n  #real-time[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], #real-time[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\r\n    color: #FFF;\r\n  }\r\n\r\n  #real-time[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%], #real-time[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\r\n    margin-top: 0.25rem;\r\n  }\r\n\r\n  \r\n\r\n  #daily-usage[_ngcontent-%COMP%]   .area-chart[_ngcontent-%COMP%] {\r\n    height: 200px;\r\n  }\r\n\r\n  \r\n\r\n  #nav-menu[_ngcontent-%COMP%] {\r\n    float: right;\r\n  }\r\n\r\n  #nav-menu.navbar-collapse[_ngcontent-%COMP%] {\r\n    max-height: 39rem;\r\n  }\r\n\r\n  #nav-menu[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%] {\r\n    height: 0.1rem;\r\n    margin: 0.9rem 0;\r\n    overflow: hidden;\r\n    background-color: #e5e5e5;\r\n  }\r\n\r\n  @media(max-width:48em){\r\n    #nav-menu[_ngcontent-%COMP%] {\r\n      float: none;\r\n    }\r\n  \r\n    form#search[_ngcontent-%COMP%] {\r\n      display: none;\r\n    }\r\n  \r\n    .round-chart[_ngcontent-%COMP%], .round-chart[_ngcontent-%COMP%]   canvas[_ngcontent-%COMP%] {\r\n      display: block;\r\n      margin: auto;\r\n    }\r\n  \r\n    .round-chart[_ngcontent-%COMP%]    + .round-chart[_ngcontent-%COMP%] {\r\n      margin-top: 2rem;\r\n      float: none;\r\n    }\r\n  \r\n    #notification-list[_ngcontent-%COMP%] {\r\n      margin: 1.25rem;\r\n      margin-left: 2rem;\r\n      background-color: #e5e9ec;\r\n    }\r\n  \r\n    #notification-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n      background-color: #FFF;\r\n      opacity: 1;\r\n    }\r\n  \r\n    #btn-notifications[_ngcontent-%COMP%], #btn-notifications[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\r\n      width: 100%;\r\n      text-align: left;\r\n    }\r\n  \r\n    #nav-menu[_ngcontent-%COMP%]   #btn-notifications[_ngcontent-%COMP%]    > .badge[_ngcontent-%COMP%] {\r\n      right: inherit;\r\n      left: 10rem;\r\n    }\r\n  }\r\n\r\n  \r\n\r\n  #content[_ngcontent-%COMP%] {\r\n    height: 30em;\r\n    overflow: auto;\r\n  }\r\n\r\n  #side-menu[_ngcontent-%COMP%]{\r\n    z-index: 999999999999999999999999;\r\n  }\r\n\r\n  .navbar-header[_ngcontent-%COMP%]{\r\n    z-index: 999999;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG5vbmV0L25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxVQUFVOztFQUVSO0lBQ0Usa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWix5QkFBeUI7RUFDM0I7O0VBRUEsb0JBQW9COztFQUNwQjtJQUNFLHNCQUFzQjtJQUN0QixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSx5QkFBeUI7SUFFekIsYUFBYTtJQUNiLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLFlBQVk7RUFDZDs7RUFFQTtJQUNFLFNBQVM7SUFDVCxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixXQUFXO0VBQ2I7O0VBRUEsYUFBYTs7RUFDYjtJQUNFLHFCQUFxQjtJQUNyQix5QkFBeUI7SUFDekI7RUFDRjs7RUFFQTtJQUNFLHlCQUF5QjtFQUMzQjs7RUFFQSxrQkFBa0I7O0VBQ2xCO0lBQ0UsY0FBYztFQUNoQjs7RUFFQTtJQUVFLGFBQWE7SUFDYixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxxQkFBcUI7SUFDckIsWUFBWTtJQUNaLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsV0FBVztFQUNiOztFQUVBLFdBQVc7O0VBQ1g7SUFDRSxjQUFjO0lBQ2Qsa0JBQWtCO0VBQ3BCOztFQUVBLDZCQUE2Qjs7RUFDN0I7SUFDRSxXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixxQ0FBcUM7SUFDckMsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxTQUFTO0lBQ1QsV0FBVztFQUNiOztFQUVBOztJQUVFLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UscUJBQXFCO0VBQ3ZCOztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGNBQWM7RUFDaEI7O0VBRUE7SUFFRSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGNBQWM7SUFDZCxxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLHlCQUF5QjtJQUN6QixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxjQUFjO0lBQ2QscUJBQXFCO0lBQ3JCLFVBQVU7RUFDWjs7RUFFQTtJQUNFLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osV0FBVztJQUNYLGlCQUFpQjtJQUNqQixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsY0FBYztFQUNoQjs7RUFFQSxjQUFjOztFQUNkO0lBQ0UsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxTQUFTO0lBQ1QsVUFBVTtJQUNWLFNBQVM7RUFDWDs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQSxZQUFZOztFQUNaO0lBQ0UseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osZUFBZTtFQUNqQjs7RUFFQTtJQUNFLHFCQUFxQjtFQUN2Qjs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxjQUFjO0lBQ2QsZUFBZTtFQUNqQjs7RUFFQTs7SUFFRSxXQUFXO0lBQ1gseUJBQXlCO0VBQzNCOztFQUVBO0lBQ0Usb0JBQW9CO0lBQ3BCLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLGVBQWU7RUFDakI7O0VBRUE7SUFLRSx5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRSx5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRSx5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixxQkFBcUI7SUFDckIscUJBQXFCO0VBQ3ZCOztFQUVBO0lBQ0UscUJBQXFCO0lBQ3JCLHlCQUF5QjtFQUMzQjs7RUFFQSxlQUFlOztFQUNmO0lBQ0UsbUJBQW1CO0lBRW5CLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQiwyQ0FBMkM7SUFDM0Msc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsU0FBUztJQUNULHFCQUFxQjtJQUNyQixjQUFjO0VBQ2hCOztFQUVBLGNBQWM7O0VBQ2Q7SUFDRSxxQkFBcUI7SUFDckIsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0UsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixNQUFNO0lBQ04sU0FBUztJQUNULE9BQU87SUFDUCxRQUFRO0VBQ1Y7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsZ0JBQWdCO0VBQ2xCOztFQUVBLGFBQWE7O0VBQ2I7SUFDRSxhQUFhO0lBQ2Isc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixtQ0FBbUM7RUFDckM7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGNBQWM7RUFDaEI7O0VBRUEseUJBQXlCOztFQUN6QjtJQUNFLGtCQUFrQjtJQUNsQixhQUFhO0VBQ2Y7O0VBRUE7O0lBRUUsNEJBQTRCO0lBQzVCLFlBQVk7RUFDZDs7RUFFQSxlQUFlOztFQUNmO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7O0VBRUEsWUFBWTs7RUFDWjtJQUNFLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsbUNBQW1DO0lBQ25DLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLHlCQUF5QjtFQUMzQjs7RUFFQTs7SUFFRSxXQUFXO0VBQ2I7O0VBRUE7O0lBRUUsbUJBQW1CO0VBQ3JCOztFQUVBLGNBQWM7O0VBQ2Q7SUFDRSxhQUFhO0VBQ2Y7O0VBRUEsZ0JBQWdCOztFQUNoQjtJQUNFLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFO01BQ0UsV0FBVztJQUNiOztJQUVBO01BQ0UsYUFBYTtJQUNmOztJQUVBOztNQUVFLGNBQWM7TUFDZCxZQUFZO0lBQ2Q7O0lBRUE7TUFDRSxnQkFBZ0I7TUFDaEIsV0FBVztJQUNiOztJQUVBO01BQ0UsZUFBZTtNQUNmLGlCQUFpQjtNQUNqQix5QkFBeUI7SUFDM0I7O0lBRUE7TUFDRSxzQkFBc0I7TUFDdEIsVUFBVTtJQUNaOztJQUVBOztNQUVFLFdBQVc7TUFDWCxnQkFBZ0I7SUFDbEI7O0lBRUE7TUFDRSxjQUFjO01BQ2QsV0FBVztJQUNiO0VBQ0Y7O0VBRUEsZ0JBQWdCOztFQUNoQjtJQUNFLFlBQVk7SUFDWixjQUFjO0VBQ2hCOztFQUNBO0lBQ0UsaUNBQWlDO0VBQ25DOztFQUNBO0lBQ0UsZUFBZTtFQUNqQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBub25ldC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKmxvYWRpbmcqL1xyXG5cclxuICBodG1sLCBib2R5IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNWU5ZWM7XHJcbiAgfVxyXG4gIFxyXG4gIC8qbmF2IHRvcCBsZWZ0IG1lbnUqL1xyXG4gIG5hdi5uYXZiYXItZml4ZWQtdG9wIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIG5hdiAudG9wLWxlZnQtbWVudSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjUyODMwO1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5uYXZiYXItYnJhbmQge1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gIH1cclxuICBcclxuICAubmF2YmFyLWJyYW5kIGgxIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgY29sb3I6ICNGRkY7XHJcbiAgfVxyXG4gIFxyXG4gIG5hdiAuaGVhZGVyLWJ1dHRvbnMge1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBjb2xvcjogI0ZGRjtcclxuICB9XHJcbiAgXHJcbiAgLypuYWcgdG9nZ2xlKi9cclxuICAubmF2YmFyLXRvZ2dsZSB7XHJcbiAgICBib3JkZXItY29sb3I6ICMyNTI4MzA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVlOWVjO1xyXG4gICAgbWFyZ2luLXRvcDogMTNweFxyXG4gIH1cclxuICBcclxuICAubmF2YmFyLXRvZ2dsZSAuaWNvbi1iYXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI1MjgzMDtcclxuICB9XHJcbiAgXHJcbiAgLypuYXYgc2VhcmNoIGZvcm0qL1xyXG4gIG5hdiBmb3JtI3NlYXJjaCB7XHJcbiAgICBwYWRkaW5nOiAwLjllbTtcclxuICB9XHJcbiAgXHJcbiAgbmF2IGZvcm0jc2VhcmNoIC5pbnB1dC1ncm91cCB7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgbmF2IGZvcm0jc2VhcmNoIC5pbnB1dC1ncm91cCAuZm9ybS1jb250cm9sIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuMjVlbTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEuOWVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0YzRjNGMztcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIG5hdiBmb3JtI3NlYXJjaCAuaW5wdXQtZ3JvdXAgLmZvcm0tY29udHJvbDpmb2N1cyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIG5hdiBmb3JtI3NlYXJjaCAuZ2x5cGhpY29uLXNlYXJjaCB7XHJcbiAgICB6LWluZGV4OiA5OTtcclxuICAgIGxlZnQ6IDEuN2VtO1xyXG4gIH1cclxuICBcclxuICAvKm5hdiBtZW51Ki9cclxuICBuYXYgI25hdi1tZW51IHtcclxuICAgIHBhZGRpbmc6IDAuNGVtO1xyXG4gICAgcGFkZGluZy1yaWdodDogMWVtO1xyXG4gIH1cclxuICBcclxuICAvKm5hdiBtZW51IGFuZCBub3RpZmljYXRpb25zKi9cclxuICAjbmF2LW1lbnUgI2J0bi1ub3RpZmljYXRpb25zID4gLmJhZGdlIHtcclxuICAgIGNvbG9yOiAjRkZGO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YzNTk1ODtcclxuICAgIGZvbnQtc2l6ZTogMC43ZW07XHJcbiAgICBwYWRkaW5nOiAwLjNyZW0gMC41NXJlbSAwLjNyZW0gMC41cmVtO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IC0wLjRyZW07XHJcbiAgICB0b3A6IDFyZW07XHJcbiAgICB6LWluZGV4OiA5OTtcclxuICB9XHJcbiAgXHJcbiAgI2J0bi1ub3RpZmljYXRpb25zIC5idG4tbGluayxcclxuICAjbmF2LW1lbnUgbGkgYSB7XHJcbiAgICBwYWRkaW5nLXRvcDogMS41cmVtO1xyXG4gICAgY29sb3I6ICMyNTI4MzA7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gIH1cclxuICBcclxuICAjYnRuLW5vdGlmaWNhdGlvbnMgLmJ0bi1saW5rOmhvdmVyIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgI25vdGlmaWNhdGlvbi1saXN0IHtcclxuICAgIG1heC1oZWlnaHQ6IDIwZW07XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICB9XHJcbiAgXHJcbiAgI25vdGlmaWNhdGlvbi1saXN0IGEge1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG9wYWNpdHk6IDAuNztcclxuICAgIG1hcmdpbjogMS41cmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG4gICAgcGFkZGluZzogMC41cmVtIDEuM3JlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFRkVGRUY7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG4gIFxyXG4gICNub3RpZmljYXRpb24tbGlzdCBhOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjMjYyNjI2O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbiAgXHJcbiAgI25vdGlmaWNhdGlvbi1saXN0IGltZyB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICB3aWR0aDogMzVweDtcclxuICAgIG1hcmdpbi1yaWdodDogMWVtO1xyXG4gICAgbWFyZ2luLXRvcDogMWVtO1xyXG4gIH1cclxuICBcclxuICAjbm90aWZpY2F0aW9uLWxpc3QgLm5vdGlmaWNhdGlvbi1tZXNzYWdlIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbiAgICBtaW4td2lkdGg6IDI1cmVtO1xyXG4gIH1cclxuICBcclxuICAjbm90aWZpY2F0aW9uLWxpc3QgLmJhZGdlOmVtcHR5IHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAwLjVyZW07XHJcbiAgICB0b3A6IDAuNXJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMzU5NTg7XHJcbiAgICBoZWlnaHQ6IDEuNHJlbTtcclxuICB9XHJcbiAgXHJcbiAgI25vdGlmaWNhdGlvbi1saXN0IGVtLnNpbmNlIHtcclxuICAgIGZvbnQtc2l6ZTogMC43ZW07XHJcbiAgICBjb2xvcjogIzY0NkM4MjtcclxuICB9XHJcbiAgXHJcbiAgLypuYXYgb3B0aW9ucyovXHJcbiAgI25hdi1wcm9maWxlIHtcclxuICAgIG1hcmdpbjogMC41ZW07XHJcbiAgICBtYXJnaW4tbGVmdDogMWVtO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gIH1cclxuICBcclxuICAjbmF2LXByb2ZpbGUgYnV0dG9uLnRodW1ibmFpbCB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gIH1cclxuICBcclxuICAjbmF2LXByb2ZpbGUgaW1nIHtcclxuICAgIG1heC1oZWlnaHQ6IDIuM2VtO1xyXG4gIH1cclxuICBcclxuICAvKnNpZGUgbWVudSovXHJcbiAgI3NpZGUtbWVudSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWIxZTI0O1xyXG4gICAgcGFkZGluZy10b3A6IDcuMnJlbTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICB9XHJcbiAgXHJcbiAgI3NpZGUtbWVudSAucHJvZmlsZS1ibG9jayA+ICoge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIH1cclxuICBcclxuICAjc2lkZS1tZW51IC5wcm9maWxlLWJsb2NrIGltZyB7XHJcbiAgICB3aWR0aDogNzBweDtcclxuICB9XHJcbiAgXHJcbiAgI3NpZGUtbWVudSAucHJvZmlsZS10aXRsZSB7XHJcbiAgICBjb2xvcjogI0ZGRjtcclxuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG4gICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgfVxyXG4gIFxyXG4gICNzaWRlLW1lbnUgLnByb2ZpbGUtdGl0bGUgc21hbGwge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG4gIFxyXG4gICNzaWRlLW1lbnUgdWwubmF2IHtcclxuICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgfVxyXG4gIFxyXG4gICNzaWRlLW1lbnUgdWwubmF2IGEge1xyXG4gICAgY29sb3I6ICM4YjkxYTA7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gICNzaWRlLW1lbnUgdWwubmF2IGE6aG92ZXIsXHJcbiAgI3NpZGUtbWVudSB1bC5uYXYgYTpmb2N1cyB7XHJcbiAgICBjb2xvcjogI0ZGRjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XHJcbiAgfVxyXG4gIFxyXG4gICNzaWRlLW1lbnUgdWwubmF2IGEgLmdseXBoaWNvbiB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDAuN3JlbTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgI3NpZGUtbWVudSB1bC5uYXYgYSAuZ2x5cGhpY29uLnB1bGwtcmlnaHQge1xyXG4gICAgbWFyZ2luLXRvcDogMC4ycmVtO1xyXG4gICAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgI3NpZGUtbWVudSB1bC5uYXYgYTpmb2N1cyAuZ2x5cGhpY29uLnB1bGwtcmlnaHQge1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xyXG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcclxuICB9XHJcbiAgXHJcbiAgI3NpZGUtbWVudSB1bC5uYXYgYSAuYmFkZ2Uge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFjYTA5NTtcclxuICB9XHJcbiAgXHJcbiAgI3NpZGUtbWVudSB1bC5uYXYgLm5hdi1kaXZpZGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNTI4MzA7XHJcbiAgfVxyXG4gIFxyXG4gICNzaWRlLW1lbnUgdWwubmF2IHVsIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbiAgfVxyXG4gIFxyXG4gICNzaWRlLW1lbnUgdWwubmF2IHVsIGEge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmIzMDNiO1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuM3JlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuMjVlbTtcclxuICB9XHJcbiAgXHJcbiAgI3NpZGUtbWVudSB1bC5uYXYgdWwgYTpob3ZlciB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDM0ODU3O1xyXG4gIH1cclxuICBcclxuICAvKm1haW4gY29udGVudCovXHJcbiAgI21haW4ge1xyXG4gICAgcGFkZGluZy10b3A6IDcuMnJlbTtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XHJcbiAgfVxyXG4gIFxyXG4gIC5jYXJkIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuMjVlbTtcclxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC4zNyk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xyXG4gICAgbWFyZ2luOiAxLjI1cmVtO1xyXG4gICAgZmxleC1ncm93OiA1O1xyXG4gIH1cclxuICBcclxuICAuY2FyZCAqIHtcclxuICAgIGNvbG9yOiAjMjUyODMwO1xyXG4gIH1cclxuICBcclxuICAuY2FyZC1ibG9jayB7XHJcbiAgICBwYWRkaW5nOiAycmVtO1xyXG4gIH1cclxuICBcclxuICAuY2FyZC1ibG9jayBoMiB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XHJcbiAgICBjb2xvcjogIzI1MjgzMDtcclxuICB9XHJcbiAgXHJcbiAgLypyb3VuZCBjaGFydCovXHJcbiAgLnJvdW5kLWNoYXJ0IHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcbiAgXHJcbiAgLnJvdW5kLWNoYXJ0ICsgLnJvdW5kLWNoYXJ0IHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICB9XHJcbiAgXHJcbiAgLnJvdW5kLWNoYXJ0IHNwYW4ge1xyXG4gICAgZm9udC1zaXplOiAzZW07XHJcbiAgICBmb250LXdlaWdodDogMTAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuN3JlbTtcclxuICAgIHdpZHRoOiAxMnJlbTtcclxuICAgIGhlaWdodDogNC40cmVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gIH1cclxuICBcclxuICAucm91bmQtY2hhcnQgc3BhbiA+IHNtYWxsIHtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgfVxyXG4gIFxyXG4gIC8qcXVpY2sgaW5mbyovXHJcbiAgI3F1aWNrLWluZm8gLmNhcmQtYmxvY2sge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgfVxyXG4gIFxyXG4gICNxdWljay1pbmZvIC5xdWljay1zdGF0cyB7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICBsaW5lLWhlaWdodDogM3JlbTtcclxuICAgIGJvcmRlci1ib3R0b206IDAuMXJlbSBzb2xpZCAjZTVlOWVjO1xyXG4gIH1cclxuICBcclxuICAjcXVpY2staW5mbyAucXVpY2stc3RhdHMgc3Ryb25nIHtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgfVxyXG4gIFxyXG4gICNxdWljay1pbmZvIC5xdWljay1zdGF0cyBzcGFuIHtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBjb2xvcjogIzhiOTFhMDtcclxuICB9XHJcbiAgXHJcbiAgLypwZXJmb3JtYW5jZSBldmFsdWF0aW9uKi9cclxuICAjcGVyZm9ybWFuY2UtZXZhbCAuc3BpZGVyLWNoYXJ0IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGhlaWdodDogMjY0cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5oaWdoY2hhcnRzLWNvbnRhaW5lcixcclxuICAuaGlnaGNoYXJ0cy1jb250YWluZXIgc3ZnIHtcclxuICAgIG92ZXJmbG93OiB2aXNpYmxlICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgfVxyXG4gIFxyXG4gIC8qcmF0aW9uIHN0b2NrKi9cclxuICAjcmF0aW9uLXN0b2NrIC5zdGFja2VkLWFyZWEge1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICB9XHJcbiAgXHJcbiAgI3JhdGlvbi1zdG9jayAuc3dpdGNoIHtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBjb2xvcjogIzhiOTFhMDtcclxuICAgIHBhZGRpbmc6IDAuNXJlbSAwO1xyXG4gIH1cclxuICBcclxuICAjcmF0aW9uLXN0b2NrIC5zd2l0Y2hlcnkge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gIH1cclxuICBcclxuICAvKnJlYWwgdGltZSovXHJcbiAgI3JlYWwtdGltZSBsaSB7XHJcbiAgICBmb250LXNpemU6IDEuOHJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBib3JkZXItYm90dG9tOiAwLjFyZW0gc29saWQgI2U1ZTllYztcclxuICAgIHBhZGRpbmc6IDAuNXJlbSAwO1xyXG4gIH1cclxuICBcclxuICAjcmVhbC10aW1lIC5iYWRnZS5vayB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWJjOThlO1xyXG4gIH1cclxuICBcclxuICAjcmVhbC10aW1lIC5iYWRnZSBzcGFuLFxyXG4gICNyZWFsLXRpbWUgLmxhYmVsIHtcclxuICAgIGNvbG9yOiAjRkZGO1xyXG4gIH1cclxuICBcclxuICAjcmVhbC10aW1lIC5iYWRnZSxcclxuICAjcmVhbC10aW1lIC5sYWJlbCB7XHJcbiAgICBtYXJnaW4tdG9wOiAwLjI1cmVtO1xyXG4gIH1cclxuICBcclxuICAvKmRhaWx5IHVzYWdlKi9cclxuICAjZGFpbHktdXNhZ2UgLmFyZWEtY2hhcnQge1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICB9XHJcbiAgXHJcbiAgLypmaXhpbmcgbW9iaWxlKi9cclxuICAjbmF2LW1lbnUge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gIH1cclxuICBcclxuICAjbmF2LW1lbnUubmF2YmFyLWNvbGxhcHNlIHtcclxuICAgIG1heC1oZWlnaHQ6IDM5cmVtO1xyXG4gIH1cclxuICBcclxuICAjbmF2LW1lbnUgLmRpdmlkZXIge1xyXG4gICAgaGVpZ2h0OiAwLjFyZW07XHJcbiAgICBtYXJnaW46IDAuOXJlbSAwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNWU1ZTU7XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYShtYXgtd2lkdGg6NDhlbSl7XHJcbiAgICAjbmF2LW1lbnUge1xyXG4gICAgICBmbG9hdDogbm9uZTtcclxuICAgIH1cclxuICBcclxuICAgIGZvcm0jc2VhcmNoIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICBcclxuICAgIC5yb3VuZC1jaGFydCxcclxuICAgIC5yb3VuZC1jaGFydCBjYW52YXMge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLnJvdW5kLWNoYXJ0ICsgLnJvdW5kLWNoYXJ0IHtcclxuICAgICAgbWFyZ2luLXRvcDogMnJlbTtcclxuICAgICAgZmxvYXQ6IG5vbmU7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAjbm90aWZpY2F0aW9uLWxpc3Qge1xyXG4gICAgICBtYXJnaW46IDEuMjVyZW07XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVlOWVjO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgI25vdGlmaWNhdGlvbi1saXN0IGEge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgI2J0bi1ub3RpZmljYXRpb25zLFxyXG4gICAgI2J0bi1ub3RpZmljYXRpb25zID4gYnV0dG9uIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAjbmF2LW1lbnUgI2J0bi1ub3RpZmljYXRpb25zID4gLmJhZGdlIHtcclxuICAgICAgcmlnaHQ6IGluaGVyaXQ7XHJcbiAgICAgIGxlZnQ6IDEwcmVtO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAvKmF1ZGllbmNlLmh0bWwqL1xyXG4gICNjb250ZW50IHtcclxuICAgIGhlaWdodDogMzBlbTtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gIH1cclxuICAjc2lkZS1tZW51e1xyXG4gICAgei1pbmRleDogOTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5O1xyXG4gIH1cclxuICAubmF2YmFyLWhlYWRlcntcclxuICAgIHotaW5kZXg6IDk5OTk5OTtcclxuICB9XHJcbiAgIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.css']
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _compnonet_over_view_over_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./compnonet/over-view/over-view.component */ "4mxS");
/* harmony import */ var _compnonet_audience_audience_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./compnonet/audience/audience.component */ "fle2");
/* harmony import */ var _compnonet_errors_errors_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./compnonet/errors/errors.component */ "x+v/");
/* harmony import */ var _compnonet_jqwidgets_jqwidgets_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./compnonet/jqwidgets/jqwidgets.component */ "Hl0R");








const routes = [
    { path: '', redirectTo: 'overView', pathMatch: 'full' },
    { path: 'overView', component: _compnonet_over_view_over_view_component__WEBPACK_IMPORTED_MODULE_2__["OverViewComponent"] },
    { path: 'audience', component: _compnonet_audience_audience_component__WEBPACK_IMPORTED_MODULE_3__["AudienceComponent"] },
    { path: 'jqwidgets', component: _compnonet_jqwidgets_jqwidgets_component__WEBPACK_IMPORTED_MODULE_5__["JqwidgetsComponent"] },
    { path: '**', component: _compnonet_errors_errors_component__WEBPACK_IMPORTED_MODULE_4__["ErrorsComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "x+v/":
/*!******************************************************!*\
  !*** ./src/app/compnonet/errors/errors.component.ts ***!
  \******************************************************/
/*! exports provided: ErrorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorsComponent", function() { return ErrorsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ErrorsComponent {
    constructor() { }
    ngOnInit() {
    }
}
ErrorsComponent.ɵfac = function ErrorsComponent_Factory(t) { return new (t || ErrorsComponent)(); };
ErrorsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ErrorsComponent, selectors: [["app-errors"]], decls: 2, vars: 0, template: function ErrorsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "errors works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBub25ldC9lcnJvcnMvZXJyb3JzLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-errors',
                templateUrl: './errors.component.html',
                styleUrls: ['./errors.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
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