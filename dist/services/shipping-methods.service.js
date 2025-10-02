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
exports.ShippingMethodsService = void 0;
const platform_sdk_1 = require("@commercetools/platform-sdk");
const common_1 = require("@nestjs/common");
const error_type_1 = require("../types/error.type");
const object_not_found_error_1 = require("../errors/object-not-found.error");
const request_param_malformed_error_1 = require("../errors/request-param-malformed.error");
const api_client_module_1 = require("../commercetools/api-client.module");
let ShippingMethodsService = class ShippingMethodsService {
    constructor(apiRoot) {
        this.apiRoot = apiRoot;
    }
    getAllShippingMethods() {
        return this.apiRoot
            .shippingMethods()
            .get({
            queryArgs: { expand: 'zoneRates[*].zone' },
        })
            .execute()
            .then((response) => response.body);
    }
    getShippingMethodByKey(key) {
        return this.apiRoot
            .shippingMethods()
            .withKey({ key })
            .get({
            queryArgs: { expand: 'zoneRates[*].zone' },
        })
            .execute()
            .then((response) => response.body)
            .catch((error) => {
            if ((0, error_type_1.isSDKError)(error) && error.statusCode === 404) {
                throw new object_not_found_error_1.ObjectNotFoundException(`Shipping method with key '${key}' not found`);
            }
            throw error;
        });
    }
    checkShippingMethodExists(key) {
        return this.apiRoot
            .shippingMethods()
            .withKey({ key })
            .head()
            .execute()
            .then((response) => response.body)
            .catch((error) => {
            if ((0, error_type_1.isSDKError)(error) && error.statusCode === 404) {
                throw new object_not_found_error_1.ObjectNotFoundException(`Shipping method with key '${key}' does not exist`);
            }
            throw error;
        });
    }
    getShippingMethodsByLocation(countryCode) {
        return this.apiRoot
            .shippingMethods()
            .matchingLocation()
            .get({
            queryArgs: {
                country: countryCode,
                expand: 'zoneRates[*].zone',
            },
        })
            .execute()
            .then((response) => response.body)
            .catch((error) => {
            if ((0, error_type_1.isSDKError)(error) && error.statusCode === 400) {
                throw new request_param_malformed_error_1.RequestParamMalformedException(`Country code '${countryCode}' is malformed`);
            }
            throw error;
        });
    }
    getMatchingShippingMethods(storeKey, cartId) {
        return this.apiRoot
            .inStoreKeyWithStoreKeyValue({ storeKey })
            .shippingMethods()
            .matchingCart()
            .get({
            queryArgs: {
                cartId,
                expand: 'zoneRates[*].zone',
            },
        })
            .execute()
            .then((response) => response.body);
    }
};
exports.ShippingMethodsService = ShippingMethodsService;
exports.ShippingMethodsService = ShippingMethodsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(api_client_module_1.API_ROOT)),
    __metadata("design:paramtypes", [platform_sdk_1.ByProjectKeyRequestBuilder])
], ShippingMethodsService);
//# sourceMappingURL=shipping-methods.service.js.map