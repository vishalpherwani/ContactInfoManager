webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"contactlist\" *ngIf=\"contacts\">\n    <table class=\"table table-striped\">\n      <thead>\n        <tr>\n          <th>#</th>\n          <th>First Name</th>\n          <th>Last Name</th>\n          <th>Email</th>\n          <th>Phone</th>\n          <th>Status</th>\n          <th></th>\n          <th></th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let contact of contacts; let i = index\">\n          <th scope=\"row\">{{ i + 1 }}</th>\n          <td>{{ contact.FirstName }}</td>\n          <td>{{ contact.LastName }}</td>\n          <td>{{ contact.Email }}</td>\n          <td>{{ contact.PhoneNumber }}</td>\n          <td *ngIf=\"contact.Status==true\">Active</td>\n          <td *ngIf=\"contact.Status==false\">InActive</td>\n          <td>\n            <button type=\"button\" class=\"btn btn-info\" (click)=\"onEdit(i)\">Edit</button>\n          </td>\n          <td>\n            <button type=\"button\" class=\"btn btn-danger\" (click)=\"onDelete(i)\">Delete</button>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n    <div class=\"text-right\">\n      <button type=\"submit\" class=\"btn btn-primary\" (click)=\"onNew()\">New</button>\n    </div>\n    <div class=\"text-right\" [style.color]=color>\n      {{Message}}\n    </div>\n  </div>\n  <br>\n  <div class=\"newContact\" *ngIf=\"showNew\">\n    <form (ngSubmit)=\"onSave()\">\n      <div class=\"form-group row\">\n        <label for=\"firstname-input\" class=\"col-2 col-form-label\">First Name</label>\n        <div class=\"col-10\">\n          <input class=\"form-control\" type=\"text\" [(ngModel)]=\"contactModel.FirstName\" name=\"firstName\">\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <label for=\"lastname-input\" class=\"col-2 col-form-label\">Last Name</label>\n        <div class=\"col-10\">\n          <input class=\"form-control\" type=\"text\" [(ngModel)]=\"contactModel.LastName\" name=\"lastName\">\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <label for=\"example-email-input\" class=\"col-2 col-form-label\">Email</label>\n        <div class=\"col-10\">\n          <input class=\"form-control\" type=\"email\" [(ngModel)]=\"contactModel.Email\" name=\"email\">\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <label for=\"example-phone-input\" class=\"col-2 col-form-label\">Phone</label>\n        <div class=\"col-10\">\n          <input class=\"form-control\" type=\"phone\" [(ngModel)]=\"contactModel.PhoneNumber\" name=\"phone\">\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <label for=\"example-status-input\" class=\"col-2 col-form-label\">Status</label>\n        <div class=\"col-10\">\n          <input class=\"form-control\" style=\"width: 5%\" type=\"checkbox\" [(ngModel)]=\"contactModel.Status\" name=\"status\">\n        </div>\n      </div>\n      <button type=\"submit\" class=\"btn btn-success\">{{submitType}}</button>\n      <button type=\"submit\" class=\"btn btn-primary\" (click)=\"onCancel()\">Cancel</button>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_appSettings__ = __webpack_require__("./src/assets/appSettings.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Contact = /** @class */ (function () {
    function Contact(FirstName, LastName, Email, PhoneNumber, Status) {
        if (FirstName === void 0) { FirstName = ''; }
        if (LastName === void 0) { LastName = ''; }
        if (Email === void 0) { Email = ''; }
        if (PhoneNumber === void 0) { PhoneNumber = ''; }
        if (Status === void 0) { Status = false; }
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.Email = Email;
        this.PhoneNumber = PhoneNumber;
        this.Status = Status;
    }
    return Contact;
}());
var AppComponent = /** @class */ (function () {
    function AppComponent(http) {
        this.http = http;
        this.title = 'app';
        this.Message = "";
        // It maintains list of contacts
        this.contacts = [];
        // It maintains contact form display status. By default it will be false.
        this.showNew = false;
        // It will be either 'Save' or 'Update' based on operation.
        this.submitType = 'Save';
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get(__WEBPACK_IMPORTED_MODULE_2__assets_appSettings__["a" /* AppSettings */].baseURI + "api/contact/")
            .subscribe(function (res) {
            _this.contacts = res;
        });
    };
    // This method associate to New Button.
    AppComponent.prototype.onNew = function () {
        // Initiate new contact.
        this.contactModel = new Contact();
        // Change submitType to 'Save'.
        this.submitType = 'Save';
        // display contact entry section.
        this.showNew = true;
    };
    // This method associate to Save Button.
    AppComponent.prototype.onSave = function () {
        var _this = this;
        if (this.submitType === 'Save') {
            // Push contact model object into contact list.
            // this.contacts.push(this.contactModel);
            this.http.post(__WEBPACK_IMPORTED_MODULE_2__assets_appSettings__["a" /* AppSettings */].baseURI + "api/contact/", this.contactModel).subscribe(function (res) {
                _this.ngOnInit();
                _this.Message = "Contact " + _this.contactModel.FirstName + " added successfully!";
                _this.color = "green";
                _this.showNew = false;
            }, function (err) {
                _this.Message = JSON.stringify(err.error.ModelState);
                // console.log(err.error.ModelState);
                _this.color = "red";
            });
        }
        else {
            // Update the existing properties values based on model.
            this.http.put(__WEBPACK_IMPORTED_MODULE_2__assets_appSettings__["a" /* AppSettings */].baseURI + "api/contact/", this.contactModel).subscribe(function (res) {
                _this.ngOnInit();
                _this.Message = "Contact " + _this.contactModel.FirstName + " updated successfully!";
                _this.showNew = false;
                _this.color = "green";
            }, function (err) {
                _this.Message = JSON.stringify(err.error.ModelState);
                // console.log(err.error.ModelState);
                _this.color = "red";
            });
            // this.contacts[this.selectedRow].FirstName = this.contactModel.FirstName;
            // this.contacts[this.selectedRow].LastName = this.contactModel.LastName;
            // this.contacts[this.selectedRow].Email = this.contactModel.Email;
            // this.contacts[this.selectedRow].Phone = this.contactModel.Phone;
            // this.contacts[this.selectedRow].Status  = this.contactModel.Status;
        }
        // Hide contact entry section.
        // this.showNew = false;
    };
    // This method associate to Edit Button.
    AppComponent.prototype.onEdit = function (index) {
        // Assign selected table row index.
        this.selectedRow = index;
        // Initiate new contact.
        this.contactModel = new Contact();
        // Retrieve selected contact from list and assign to model.
        this.contactModel = Object.assign({}, this.contacts[this.selectedRow]);
        // Change submitType to Update.
        this.submitType = 'Update';
        // Display contact entry section.
        this.showNew = true;
    };
    // This method associate to Delete Button.
    AppComponent.prototype.onDelete = function (index) {
        var _this = this;
        // Delete the corresponding contact entry from the list.
        // this.contacts.splice(index, 1);
        var contact = Object.assign({}, this.contacts[index]);
        var httpParams = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        httpParams.set("FirstName", contact.FirstName);
        this.http.delete("http://localhost:51093/api/contact/?FirstName=" + contact.FirstName).subscribe(function (res) {
            _this.contacts.splice(index, 1);
            _this.Message = "Contact " + contact.FirstName + " deleted successfully!";
            _this.color = "green";
        }, function (err) {
            // console.log(err);
            _this.Message = JSON.stringify(err);
            _this.color = "red";
            // this.snackBar.open(JSON.stringify(err) , null, {
            //   duration: 3000
            // });
        });
    };
    // This method associate toCancel Button.
    AppComponent.prototype.onCancel = function () {
        // Hide contact entry section.
        this.showNew = false;
        this.Message = "";
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/assets/appSettings.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppSettings; });
var AppSettings = /** @class */ (function () {
    function AppSettings() {
    }
    AppSettings.baseURI = "http://localhost:51093/";
    return AppSettings;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map