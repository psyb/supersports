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
var data_service_1 = require('../shared/data-service');
var FrontsiteComponent = (function () {
    function FrontsiteComponent(ShoeDataService) {
        this.ShoeDataService = ShoeDataService;
    }
    FrontsiteComponent.prototype.ngOnInit = function () {
        this.shoes = this.ShoeDataService.getShoeData();
    };
    FrontsiteComponent = __decorate([
        core_1.Component({
            selector: 'frontsitecomponent',
            template: "\n          \n            <!--Image Slider-->    \n                <section class=\"row\">\n                    <div class=\"image-slider\">\n                        <img class=\"img-responsive\" src=\"../Images/banner.png\">\n                    </div>\n                </section>\n            <!--Products-->\n                <section class=\" center\">\n                \n                    <div class=\"row col s12 l12 container\">\n                        <div class=\"col s12 l4\">\n                            <img src=\"Images/shoes-football.png\" alt=\"\">\n                            <h5>FOOTBALL SHOE</h5>\n                            <h6> consectetur adipisicng, vivamus congue nulla leo, quis imperdiet magna</h6>\n                        \n                        </div>\n                        <div class=\"col s12 l4\">\n                            <img src=\"Images/shoes-football.png\" alt=\"\">\n                            <h5>FOOTBALL SHOE</h5>\n                            <h6> consectetur adipisicng, vivamus congue nulla leo, quis imperdiet magna</h6>\n                        \n                        </div>\n                        <div class=\"col s12 l4\">\n                            <img src=\"Images/shoes-football.png\" alt=\"\">\n                            <h5>FOOTBALL SHOE</h5>\n                            <h6> consectetur adipisicng, vivamus congue nulla leo, quis imperdiet magna</h6>\n                        \n                        </div>\n                        \n                    </div>\n                \n                    \n                    </section>\n            <!--Popular Products-->\n                <section class=\"popular-products container  \">\n                    \n                    <h4 class=\"center\">Shoes</h4>\n                \n                    <div class=\"row\">\n                       \n                         <div class=\"col s12 l3\" *ngFor=\"let shoe of shoes\">\n                            <div class=\"popular-products-border\" >\n                               <a [routerLink]=\"['/shoe', shoe.id]\"> <img [src]=\"'../Images/' + shoe.image[0]\" alt=\"\"></a> \n                                <div style=\"border: 1px solid lightgray;\">\n                                <h6>{{shoe.name}}</h6>\n                                <b>\n                                    {{shoe.type}}\n                                </b>\n                                <p>\n                                    {{shoe.description}}\n                                </p>\n                                </div>\n                                <a class=\"btn\">button</a>\n                            </div>\n                        </div>\n                        </div>\n            \n                    \n                    \n                    \n                \n                    </section>  \n            \n \n\t"
        }), 
        __metadata('design:paramtypes', [data_service_1.ShoeDataService])
    ], FrontsiteComponent);
    return FrontsiteComponent;
}());
exports.FrontsiteComponent = FrontsiteComponent;
//# sourceMappingURL=frontsite.component.js.map