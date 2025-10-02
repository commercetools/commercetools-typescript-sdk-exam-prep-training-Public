import { StoresService } from '../services/stores.service';
export declare class StoresController {
    private readonly storesService;
    constructor(storesService: StoresService);
    getAllStores(): Promise<import("@commercetools/platform-sdk").StorePagedQueryResponse>;
}
