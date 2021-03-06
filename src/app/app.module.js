"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var router_1 = require('@angular/router');
var header_component_1 = require('./header/header.component');
var frontsite_component_1 = require('./frontsite/frontsite.component');
var contact_component_1 = require('./contact/contact.component');
var detail_component_1 = require('./detail/detail.component');
var data_service_1 = require('./shared/data-service');
var footer_component_1 = require('./footer/footer.component');
var app_component_1 = require('./app.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, router_1.RouterModule.forRoot([
                    { path: 'home', component: frontsite_component_1.FrontsiteComponent },
                    { path: 'contact', component: contact_component_1.ContactComponent },
                    { path: 'shoe/:id', component: detail_component_1.DetailComponent },
                    // {path: 'recipe/:id', component:RecipeDetailsComponent},
                    { path: '', redirectTo: 'home', pathMatch: 'full' },
                    { path: '**', redirectTo: 'home', pathMatch: 'full' }
                ])
            ],
            providers: [data_service_1.ShoeDataService],
            declarations: [app_component_1.AppComponent, header_component_1.HeaderComponent, footer_component_1.FooterComponent, frontsite_component_1.FrontsiteComponent, contact_component_1.ContactComponent, detail_component_1.DetailComponent],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map