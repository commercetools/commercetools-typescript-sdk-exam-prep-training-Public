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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShippingMethodsController = void 0;
const shipping_methods_service_1 = require("../services/shipping-methods.service");
const common_1 = require("@nestjs/common");
let ShippingMethodsController = class ShippingMethodsController {
    constructor(shippingMethodsService) {
        this.shippingMethodsService = shippingMethodsService;
    }
    getAllShippingMethods(countryCode) {
        if (countryCode) {
            return this.shippingMethodsService.getShippingMethodsByLocation(countryCode);
        }
        return this.shippingMethodsService.getAllShippingMethods();
    }
    getShippingMethodByKey(key) {
        return this.shippingMethodsService.getShippingMethodByKey(key);
    }
    checkShippingMethodExistence(key) {
        return this.shippingMethodsService.checkShippingMethodExists(key);
    }
    getMatchingShippingMethodsForStore(storeKey, cartId) {
        return this.shippingMethodsService.getMatchingShippingMethods(storeKey, cartId);
    }
};
exports.ShippingMethodsController = ShippingMethodsController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('countryCode')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ShippingMethodsController.prototype, "getAllShippingMethods", null);
__decorate([
    (0, common_1.Get)(':key'),
    __param(0, (0, common_1.Param)('key')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ShippingMethodsController.prototype, "getShippingMethodByKey", null);
__decorate([
    (0, common_1.Head)(':key'),
    __param(0, (0, common_1.Param)('key')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ShippingMethodsController.prototype, "checkShippingMethodExistence", null);
__decorate([
    (0, common_1.Get)('/in-store/:storeKey/matching-cart'),
    __param(0, (0, common_1.Param)('storeKey')),
    __param(1, (0, common_1.Query)('cartId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], ShippingMethodsController.prototype, "getMatchingShippingMethodsForStore", null);
exports.ShippingMethodsController = ShippingMethodsController = __decorate([
    (0, common_1.Controller)('api/shipping-methods'),
    __metadata("design:paramtypes", [shipping_methods_service_1.ShippingMethodsService])
], ShippingMethodsController);
//# sourceMappingURL=shipping-methods.controller.js.map