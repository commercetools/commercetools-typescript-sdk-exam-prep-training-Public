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
exports.ExtensionsController = void 0;
const common_1 = require("@nestjs/common");
const extensions_service_1 = require("../services/extensions.service");
const extensions_dto_1 = require("../dtos/extensions.dto");
let ExtensionsController = class ExtensionsController {
    constructor(extensionsService) {
        this.extensionsService = extensionsService;
    }
    createType() {
        return this.extensionsService.createCustomType();
    }
    createUpdateCustomObject(customObjectCreateUpdateBodyDto) {
        return this.extensionsService.createUpdateCustomObject(customObjectCreateUpdateBodyDto);
    }
    getCustomObject() {
        return this.extensionsService.getCustomObject();
    }
};
exports.ExtensionsController = ExtensionsController;
__decorate([
    (0, common_1.Post)('types'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ExtensionsController.prototype, "createType", null);
__decorate([
    (0, common_1.Post)('custom-objects'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [extensions_dto_1.CustomObjectCreateUpdateBodyDto]),
    __metadata("design:returntype", void 0)
], ExtensionsController.prototype, "createUpdateCustomObject", null);
__decorate([
    (0, common_1.Get)('custom-objects'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ExtensionsController.prototype, "getCustomObject", null);
exports.ExtensionsController = ExtensionsController = __decorate([
    (0, common_1.Controller)('api/extensions'),
    __metadata("design:paramtypes", [extensions_service_1.ExtensionsService])
], ExtensionsController);
//# sourceMappingURL=extensions.controller.js.map