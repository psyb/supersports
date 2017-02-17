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
var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'headercomponent',
            template: "\n\n          <!--Header & Navigation-->\n                <nav  class=\"row nav-extended\">\n                    <div class=\"container\">\n                        <!--Brand Logo & Phone - Mail  -->\n                            <div class=\"col s12 l12 valign-wrapper \">\n                                <div class=\"col s12 l6\">\n                                    <img class=\"left\"  src=\"images/logosupersports.png\" alt=\"\">\n                                </div>\n                                <br>\n                                <div class=\"col s12  l6 \">\n                                    <ul class=\"right\">\n                                        <li>\n                                            <a href=\"\"> &#128379; +45 22660077</a>\n                                        </li>\n                                        <li>\n                                            <a href=\"\">&#9993; LOREM@IPSUM.COM</a> \n                                        </li>\n                                        <li><a href=\"\">$99.54 CHECKOUT</a> </li>\n                                    </ul>\n                                    \n                                </div>\n                            </div>\n                        <!--Spaceline-->\n                            <div class=\"col s12 l12 spaceline\"></div>\n                            \n                        <!--Menu & Search-->\n                        <div id=\"menu-padding-off\" class=\"col s12  l12 \">\n                            <ul>\n                                <li><a [routerLink]=\"['home']\">HOME</a></li>\n                                <li><a href=\"#news\">MEN</a></li>\n                                <li><a href=\"#contact\">WOMEN</a></li>\n                                <li><a href=\"#about\">KIDS</a></li>\n                                <li><a href=\"#about\">SALE</a></li>\n                                <li><a href=\"#about\">ABOUT&nbsp;US</a></li>\n                                <li><a [routerLink]=\"['contact']\">SUPPORT</a></li>\n                            </ul>\n                       \n                            <input id=\"header_search\" class=\"right\" type=\"search\" name=\"\" value=\"SEARCH\">\n                        \n                        </div>\n                  \n                        \n                       \n                </div>  \n                      \n                </nav>\n\t\n\t"
        }), 
        __metadata('design:paramtypes', [])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;
//# sourceMappingURL=header.component.js.map