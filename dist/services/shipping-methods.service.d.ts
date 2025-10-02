import { ByProjectKeyRequestBuilder, ShippingMethod, ShippingMethodPagedQueryResponse } from '@commercetools/platform-sdk';
export declare class ShippingMethodsService {
    private readonly apiRoot;
    constructor(apiRoot: ByProjectKeyRequestBuilder);
    getAllShippingMethods(): Promise<ShippingMethodPagedQueryResponse>;
    getShippingMethodByKey(key: string): Promise<ShippingMethod>;
    checkShippingMethodExists(key: string): Promise<void>;
    getShippingMethodsByLocation(countryCode: string): Promise<ShippingMethodPagedQueryResponse>;
    getMatchingShippingMethods(storeKey: string, cartId: string): Promise<ShippingMethodPagedQueryResponse>;
}
