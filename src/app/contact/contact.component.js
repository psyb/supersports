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
var ContactComponent = (function () {
    function ContactComponent() {
    }
    ContactComponent = __decorate([
        core_1.Component({
            selector: 'contactcomponent',
            template: "\n          \n       \n    <!--Main Content-->\n                <main class=\"row\">\n                    <div class=\"container\">\n                        <div class=\"col s12 l4\">\n                            <h4 class=\"contact-h2\">CONTACT US</h4>\n                            <form class=\"contact-form\">\n                                <label class=\"col s12 l3\" >NAME</label>\n                                <input class=\"col s12 l9\" type=\"name\" name=\"\" value=\"\">\n                                <span style=\"height: 10px;\" class=\"col l12\"></span>\n\n                                <label class=\"col s12 l3\">EMAIL</label>\n\n                                <input class=\"col s12 l9\" type=\"name\" name=\"\" value=\"\">\n                                <span  class=\"col s12 l12\"></span> \n\n                                <label class=\"col s12 l12\" for=\"message\">MESSAGE</label>\n                                <span  class=\"col s12 l12\"></span>\n                                <textarea  rows=\"4\" class=\"col s12 l12\"></textarea>\n                                <span  class=\"col l12\"></span>\n                                <button type=\"submit\"><h6>SEND MESSAGE</h6></button>\n                            </form>\n                        </div>\n                    </div>\n                </main>\n\t"
        }), 
        __metadata('design:paramtypes', [])
    ], ContactComponent);
    return ContactComponent;
}());
exports.ContactComponent = ContactComponent;
//# sourceMappingURL=contact.component.js.map