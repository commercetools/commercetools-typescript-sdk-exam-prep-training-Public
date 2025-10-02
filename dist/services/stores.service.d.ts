import { ByProjectKeyRequestBuilder, Store, StorePagedQueryResponse } from '@commercetools/platform-sdk';
export declare class StoresService {
    private readonly apiRoot;
    constructor(apiRoot: ByProjectKeyRequestBuilder);
    getStoreByKey(storeKey: string): Promise<Store>;
    getAllStores(): Promise<StorePagedQueryResponse>;
}
