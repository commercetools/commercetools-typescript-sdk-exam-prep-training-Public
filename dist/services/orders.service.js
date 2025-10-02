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
exports.OrdersService = void 0;
const common_1 = require("@nestjs/common");
const platform_sdk_1 = require("@commercetools/platform-sdk");
const api_client_module_1 = require("../commercetools/api-client.module");
const customers_service_1 = require("./customers.service");
const orderNamePrefix = 'TT';
let OrdersService = class OrdersService {
    constructor(apiRoot, customersService) {
        this.apiRoot = apiRoot;
        this.customersService = customersService;
    }
    createOrder(orderDetails) {
        const { cartId, cartVersion, storeKey } = orderDetails;
        const orderFromCartDraft = {
            version: cartVersion,
            cart: {
                id: cartId,
                typeId: 'cart',
            },
            orderNumber: orderNamePrefix + '_' + Date.now().toString(36),
        };
        return this.apiRoot
            .inStoreKeyWithStoreKeyValue({ storeKey })
            .orders()
            .post({
            body: orderFromCartDraft,
        })
            .execute()
            .then((response) => response.body);
    }
};
exports.OrdersService = OrdersService;
exports.OrdersService = OrdersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(api_client_module_1.API_ROOT)),
    __metadata("design:paramtypes", [platform_sdk_1.ByProjectKeyRequestBuilder,
        customers_service_1.CustomersService])
], OrdersService);
//# sourceMappingURL=orders.service.js.map