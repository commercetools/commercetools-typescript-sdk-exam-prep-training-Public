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
exports.CustomersService = void 0;
const platform_sdk_1 = require("@commercetools/platform-sdk");
const common_1 = require("@nestjs/common");
const api_client_module_1 = require("../commercetools/api-client.module");
const extensions_service_1 = require("./extensions.service");
let CustomersService = class CustomersService {
    constructor(apiRoot) {
        this.apiRoot = apiRoot;
    }
    authenticateCustomer(customerAuthenticationDetails) {
        const { email, password, anonymousCartId, storeKey } = customerAuthenticationDetails;
        const customerSignIn = {
            email,
            password,
            ...(anonymousCartId && {
                anonymousCart: {
                    id: anonymousCartId,
                    typeId: 'cart',
                },
            }),
        };
        return this.apiRoot
            .inStoreKeyWithStoreKeyValue({ storeKey })
            .login()
            .post({
            body: customerSignIn,
        })
            .execute()
            .then((response) => response.body);
    }
    async updateCustomerCustomFields(customFieldsDetails) {
        const { customerKey, points, storeKey } = customFieldsDetails;
        let customer = await this.getCustomerByKey(customerKey, storeKey);
        console.log('Points:', points);
        const updateCustomerCustomFields = {
            action: 'setCustomType',
            type: {
                key: extensions_service_1.CUSTOM_TYPE_KEY,
                typeId: 'type',
            },
            fields: {
                points
            },
        };
        const customerUpdateActions = [];
        customerUpdateActions.push(updateCustomerCustomFields);
        return this.apiRoot
            .inStoreKeyWithStoreKeyValue({ storeKey })
            .customers()
            .withKey({ key: customerKey })
            .post({
            body: {
                version: customer.version,
                actions: customerUpdateActions,
            },
        })
            .execute()
            .then((response) => response.body);
    }
    getCustomerByKey(key, storeKey) {
        return this.apiRoot
            .inStoreKeyWithStoreKeyValue({ storeKey })
            .customers()
            .withKey({ key })
            .get()
            .execute()
            .then((response) => response.body);
    }
};
exports.CustomersService = CustomersService;
exports.CustomersService = CustomersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(api_client_module_1.API_ROOT)),
    __metadata("design:paramtypes", [platform_sdk_1.ByProjectKeyRequestBuilder])
], CustomersService);
//# sourceMappingURL=customers.service.js.map