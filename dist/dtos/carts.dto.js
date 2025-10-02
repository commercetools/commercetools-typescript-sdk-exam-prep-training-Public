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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShippingMethodUpdateDto = exports.ShippingMethodUpdateBodyDto = exports.ShippingMethodUpdateParamsDto = exports.ShippingAddressUpdateDto = exports.ShippingAddressUpdateParamsDto = exports.ShippingAddressUpdateBodyDto = exports.DiscountCodeApplyBodyDto = exports.LineItemsAddDto = exports.LineItemsAddParamsDto = exports.LineItemsAddBodyDto = exports.CartGetParamsDto = exports.CartCreateDto = exports.CartCreateParamsDto = exports.CartCreateBodyDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const class_validator_1 = require("class-validator");
class CartCreateBodyDto {
}
exports.CartCreateBodyDto = CartCreateBodyDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CartCreateBodyDto.prototype, "sessionId", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CartCreateBodyDto.prototype, "sku", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsPositive)(),
    __metadata("design:type", Number)
], CartCreateBodyDto.prototype, "quantity", void 0);
__decorate([
    (0, class_validator_1.IsISO31661Alpha2)(),
    __metadata("design:type", String)
], CartCreateBodyDto.prototype, "country", void 0);
__decorate([
    (0, class_validator_1.IsISO4217CurrencyCode)(),
    __metadata("design:type", String)
], CartCreateBodyDto.prototype, "currency", void 0);
class CartCreateParamsDto {
}
exports.CartCreateParamsDto = CartCreateParamsDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CartCreateParamsDto.prototype, "storeKey", void 0);
class CartCreateDto extends (0, mapped_types_1.IntersectionType)(CartCreateBodyDto, CartCreateParamsDto) {
}
exports.CartCreateDto = CartCreateDto;
class CartGetParamsDto {
}
exports.CartGetParamsDto = CartGetParamsDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CartGetParamsDto.prototype, "storeKey", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CartGetParamsDto.prototype, "id", void 0);
class LineItemsAddBodyDto {
}
exports.LineItemsAddBodyDto = LineItemsAddBodyDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], LineItemsAddBodyDto.prototype, "sku", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsPositive)(),
    __metadata("design:type", Number)
], LineItemsAddBodyDto.prototype, "quantity", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], LineItemsAddBodyDto.prototype, "supplyChannelKey", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], LineItemsAddBodyDto.prototype, "distributionChannelKey", void 0);
class LineItemsAddParamsDto {
}
exports.LineItemsAddParamsDto = LineItemsAddParamsDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], LineItemsAddParamsDto.prototype, "storeKey", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], LineItemsAddParamsDto.prototype, "id", void 0);
class LineItemsAddDto extends (0, mapped_types_1.IntersectionType)(LineItemsAddBodyDto, LineItemsAddParamsDto) {
}
exports.LineItemsAddDto = LineItemsAddDto;
class DiscountCodeApplyBodyDto {
}
exports.DiscountCodeApplyBodyDto = DiscountCodeApplyBodyDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], DiscountCodeApplyBodyDto.prototype, "discountCode", void 0);
class ShippingAddressUpdateBodyDto {
}
exports.ShippingAddressUpdateBodyDto = ShippingAddressUpdateBodyDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ShippingAddressUpdateBodyDto.prototype, "firstName", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ShippingAddressUpdateBodyDto.prototype, "lastName", void 0);
__decorate([
    (0, class_validator_1.IsISO31661Alpha2)(),
    __metadata("design:type", String)
], ShippingAddressUpdateBodyDto.prototype, "country", void 0);
__decorate([
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], ShippingAddressUpdateBodyDto.prototype, "email", void 0);
class ShippingAddressUpdateParamsDto {
}
exports.ShippingAddressUpdateParamsDto = ShippingAddressUpdateParamsDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ShippingAddressUpdateParamsDto.prototype, "storeKey", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ShippingAddressUpdateParamsDto.prototype, "id", void 0);
class ShippingAddressUpdateDto extends (0, mapped_types_1.IntersectionType)(ShippingAddressUpdateBodyDto, ShippingAddressUpdateParamsDto) {
}
exports.ShippingAddressUpdateDto = ShippingAddressUpdateDto;
class ShippingMethodUpdateParamsDto {
}
exports.ShippingMethodUpdateParamsDto = ShippingMethodUpdateParamsDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ShippingMethodUpdateParamsDto.prototype, "storeKey", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ShippingMethodUpdateParamsDto.prototype, "id", void 0);
class ShippingMethodUpdateBodyDto {
}
exports.ShippingMethodUpdateBodyDto = ShippingMethodUpdateBodyDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ShippingMethodUpdateBodyDto.prototype, "shippingMethodId", void 0);
class ShippingMethodUpdateDto extends (0, mapped_types_1.IntersectionType)(ShippingMethodUpdateParamsDto, ShippingMethodUpdateBodyDto) {
}
exports.ShippingMethodUpdateDto = ShippingMethodUpdateDto;
//# sourceMappingURL=carts.dto.js.map