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
exports.CustomFieldsUpdateDto = exports.CustomFieldsUpdateParamsDto = exports.CustomFieldsUpdateBodyDto = exports.CustomerAuthenticateDto = exports.CustomerAuthenticateParamsDto = exports.CustomerAuthenticateBodyDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const class_validator_1 = require("class-validator");
class CustomerAuthenticateBodyDto {
}
exports.CustomerAuthenticateBodyDto = CustomerAuthenticateBodyDto;
__decorate([
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CustomerAuthenticateBodyDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CustomerAuthenticateBodyDto.prototype, "password", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CustomerAuthenticateBodyDto.prototype, "anonymousCartId", void 0);
class CustomerAuthenticateParamsDto {
}
exports.CustomerAuthenticateParamsDto = CustomerAuthenticateParamsDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CustomerAuthenticateParamsDto.prototype, "storeKey", void 0);
class CustomerAuthenticateDto extends (0, mapped_types_1.IntersectionType)(CustomerAuthenticateBodyDto, CustomerAuthenticateParamsDto) {
}
exports.CustomerAuthenticateDto = CustomerAuthenticateDto;
class CustomFieldsUpdateBodyDto {
}
exports.CustomFieldsUpdateBodyDto = CustomFieldsUpdateBodyDto;
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CustomFieldsUpdateBodyDto.prototype, "points", void 0);
class CustomFieldsUpdateParamsDto {
}
exports.CustomFieldsUpdateParamsDto = CustomFieldsUpdateParamsDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CustomFieldsUpdateParamsDto.prototype, "storeKey", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CustomFieldsUpdateParamsDto.prototype, "customerKey", void 0);
class CustomFieldsUpdateDto extends (0, mapped_types_1.IntersectionType)(CustomFieldsUpdateBodyDto, CustomFieldsUpdateParamsDto) {
}
exports.CustomFieldsUpdateDto = CustomFieldsUpdateDto;
//# sourceMappingURL=customers.dto.js.map