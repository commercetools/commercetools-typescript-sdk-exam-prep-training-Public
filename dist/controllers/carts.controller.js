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
exports.CartsController = void 0;
const common_1 = require("@nestjs/common");
const carts_service_1 = require("../services/carts.service");
const carts_dto_1 = require("../dtos/carts.dto");
let CartsController = class CartsController {
    constructor(cartsService) {
        this.cartsService = cartsService;
    }
    getCart(cartParams) {
        return this.cartsService.getCartById(cartParams);
    }
    createAnonymousCart(cartParams, cartData) {
        return this.cartsService.createCart({
            ...cartParams,
            ...cartData,
        });
    }
    addLineItems(lineItemsParams, lineItemsData) {
        return this.cartsService.addLineItemsToCart({
            ...lineItemsParams,
            ...lineItemsData,
        });
    }
    updateShippingAddress(shippingAddressParams, shippingAddressData) {
        return this.cartsService.updateCartShippingAddress({
            ...shippingAddressParams,
            ...shippingAddressData,
        });
    }
    updateShippingMethod(shippingMethodParams, shippingMethodData) {
        return this.cartsService.updateCartShippingMethod({
            ...shippingMethodParams,
            ...shippingMethodData,
        });
    }
};
exports.CartsController = CartsController;
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [carts_dto_1.CartGetParamsDto]),
    __metadata("design:returntype", void 0)
], CartsController.prototype, "getCart", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [carts_dto_1.CartCreateParamsDto,
        carts_dto_1.CartCreateBodyDto]),
    __metadata("design:returntype", void 0)
], CartsController.prototype, "createAnonymousCart", null);
__decorate([
    (0, common_1.Post)(':id/lineitems'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [carts_dto_1.LineItemsAddParamsDto,
        carts_dto_1.LineItemsAddBodyDto]),
    __metadata("design:returntype", void 0)
], CartsController.prototype, "addLineItems", null);
__decorate([
    (0, common_1.Post)(':id/shipping-address'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [carts_dto_1.ShippingAddressUpdateParamsDto,
        carts_dto_1.ShippingAddressUpdateBodyDto]),
    __metadata("design:returntype", void 0)
], CartsController.prototype, "updateShippingAddress", null);
__decorate([
    (0, common_1.Post)(':id/shipping-method'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [carts_dto_1.ShippingMethodUpdateParamsDto,
        carts_dto_1.ShippingMethodUpdateBodyDto]),
    __metadata("design:returntype", void 0)
], CartsController.prototype, "updateShippingMethod", null);
exports.CartsController = CartsController = __decorate([
    (0, common_1.Controller)('api/in-store/:storeKey/carts'),
    __metadata("design:paramtypes", [carts_service_1.CartsService])
], CartsController);
//# sourceMappingURL=carts.controller.js.map