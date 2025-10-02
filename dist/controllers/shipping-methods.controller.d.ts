import { ShippingMethodsService } from '../services/shipping-methods.service';
export declare class ShippingMethodsController {
    private readonly shippingMethodsService;
    constructor(shippingMethodsService: ShippingMethodsService);
    getAllShippingMethods(countryCode?: string): Promise<import("@commercetools/platform-sdk").ShippingMethodPagedQueryResponse>;
    getShippingMethodByKey(key: string): Promise<import("@commercetools/platform-sdk").ShippingMethod>;
    checkShippingMethodExistence(key: string): Promise<void>;
    getMatchingShippingMethodsForStore(storeKey: string, cartId: string): Promise<import("@commercetools/platform-sdk").ShippingMethodPagedQueryResponse>;
}
