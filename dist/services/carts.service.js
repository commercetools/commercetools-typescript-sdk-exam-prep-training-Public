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
exports.CartsService = void 0;
const platform_sdk_1 = require("@commercetools/platform-sdk");
const common_1 = require("@nestjs/common");
const api_client_module_1 = require("../commercetools/api-client.module");
let CartsService = class CartsService {
    constructor(apiRoot) {
        this.apiRoot = apiRoot;
    }
    async createCart(cartDetails) {
        const { storeKey, sessionId, sku, quantity, currency, country } = cartDetails;
        const cartDraft = {
            anonymousId: sessionId,
            currency,
            country,
            deleteDaysAfterLastModification: 30,
            lineItems: [
                {
                    sku,
                    quantity: quantity ?? 1,
                },
            ],
        };
        return this.apiRoot
            .inStoreKeyWithStoreKeyValue({ storeKey })
            .carts()
            .post({
            body: cartDraft,
        })
            .execute()
            .then((response) => response.body);
    }
    async addLineItemsToCart(lineItemsDetails) {
        const { id, storeKey, sku, quantity, supplyChannelKey, distributionChannelKey, } = lineItemsDetails;
        const cart = await this.getCartById({ id, storeKey });
        const cartVersion = cart.version;
        const cartUpdateActions = [];
        const addLineItemUpdateAction = {
            action: 'addLineItem',
            sku,
            quantity,
            ...(supplyChannelKey && {
                supplyChannel: {
                    typeId: 'channel',
                    key: supplyChannelKey,
                },
            }),
            ...(distributionChannelKey && {
                distributionChannel: {
                    typeId: 'channel',
                    key: distributionChannelKey,
                },
            })
        };
        cartUpdateActions.push(addLineItemUpdateAction);
        return this.apiRoot
            .inStoreKeyWithStoreKeyValue({ storeKey })
            .carts()
            .withId({ ID: id })
            .post({
            body: {
                version: cartVersion,
                actions: cartUpdateActions,
            },
        })
            .execute()
            .then((response) => response.body);
    }
    async updateCartShippingAddress(shippingAddressDetails) {
        const { id, storeKey, firstName, lastName, country, email } = shippingAddressDetails;
        let cart = await this.getCartById({ id, storeKey });
        let cartVersion = cart.version;
        const cartUpdateActions = [];
        const setShippingAddressUpdateAction = {
            action: 'setShippingAddress',
            address: {
                firstName,
                lastName,
                country,
                email,
            },
        };
        const setCustomerEmailUpdateAction = {
            action: 'setCustomerEmail',
            email,
        };
        cartUpdateActions.push(setShippingAddressUpdateAction);
        cartUpdateActions.push(setCustomerEmailUpdateAction);
        return this.apiRoot
            .inStoreKeyWithStoreKeyValue({ storeKey })
            .carts()
            .withId({ ID: id })
            .post({
            body: {
                version: cartVersion,
                actions: cartUpdateActions,
            },
        })
            .execute()
            .then((response) => response.body);
    }
    async updateCartShippingMethod(shippingMethodDetails) {
        const { id, storeKey, shippingMethodId } = shippingMethodDetails;
        const cart = await this.getCartById({ id, storeKey });
        const cartVersion = cart.version;
        const cartUpdateActions = [];
        const setShippingMethodUpdateAction = {
            action: 'setShippingMethod',
            shippingMethod: {
                typeId: 'shipping-method',
                id: shippingMethodId,
            },
        };
        cartUpdateActions.push(setShippingMethodUpdateAction);
        return this.apiRoot
            .inStoreKeyWithStoreKeyValue({ storeKey })
            .carts()
            .withId({ ID: id })
            .post({
            body: {
                version: cartVersion,
                actions: cartUpdateActions,
            },
        })
            .execute()
            .then((response) => response.body);
    }
    getCartById(params) {
        const { id, storeKey } = params;
        return this.apiRoot
            .inStoreKeyWithStoreKeyValue({ storeKey })
            .carts()
            .withId({ ID: id })
            .get()
            .execute()
            .then((response) => response.body);
    }
};
exports.CartsService = CartsService;
exports.CartsService = CartsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(api_client_module_1.API_ROOT)),
    __metadata("design:paramtypes", [platform_sdk_1.ByProjectKeyRequestBuilder])
], CartsService);
//# sourceMappingURL=carts.service.js.map