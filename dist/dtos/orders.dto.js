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
exports.OrderCreateDto = exports.OrderCreateParamsDto = exports.OrderCreateBodyDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
class OrderCreateBodyDto {
}
exports.OrderCreateBodyDto = OrderCreateBodyDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], OrderCreateBodyDto.prototype, "cartId", void 0);
__decorate([
    (0, class_validator_1.IsPositive)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_transformer_1.Transform)(({ value }) => +value),
    __metadata("design:type", Number)
], OrderCreateBodyDto.prototype, "cartVersion", void 0);
class OrderCreateParamsDto {
}
exports.OrderCreateParamsDto = OrderCreateParamsDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], OrderCreateParamsDto.prototype, "storeKey", void 0);
class OrderCreateDto extends (0, mapped_types_1.IntersectionType)(OrderCreateBodyDto, OrderCreateParamsDto) {
}
exports.OrderCreateDto = OrderCreateDto;
//# sourceMappingURL=orders.dto.js.map