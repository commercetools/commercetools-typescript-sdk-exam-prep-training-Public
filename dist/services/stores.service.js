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
exports.StoresService = void 0;
const platform_sdk_1 = require("@commercetools/platform-sdk");
const common_1 = require("@nestjs/common");
const api_client_module_1 = require("../commercetools/api-client.module");
let StoresService = class StoresService {
    constructor(apiRoot) {
        this.apiRoot = apiRoot;
    }
    getStoreByKey(storeKey) {
        return this.apiRoot
            .stores()
            .withKey({ key: storeKey })
            .get()
            .execute()
            .then((response) => response.body);
    }
    getAllStores() {
        return this.apiRoot
            .stores()
            .get()
            .execute()
            .then((response) => response.body);
    }
};
exports.StoresService = StoresService;
exports.StoresService = StoresService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(api_client_module_1.API_ROOT)),
    __metadata("design:paramtypes", [platform_sdk_1.ByProjectKeyRequestBuilder])
], StoresService);
//# sourceMappingURL=stores.service.js.map